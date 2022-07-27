import React, { useEffect, useState } from "react";
import './App.css';
import ipAddressApi from "./Api/IpaddressApi";
import MapComponent from "./components/MapComponent";
import DataComponent from "./components/DataViewComponent";
import IconImage from "./images/icon-arrow.svg";

function App() {
const [ipAddress, setIpAddress] = useState("");
const [data, setData] = useState({
   
    ip: "Loading..",
    location : {
      city: "Loading..",
      region: "Loading...",
      postalCode: "Loading...",
      timezone : "Loading...",
    },
    isp: "Loading..."
  
});
const [coordinates, setCoordinates] = useState([51.505, -0.09]);
const [error, setErrorMessage] = useState();
// callback function to Search data from APi

// to load client's ip address by default
useEffect(() => {
  searchApi();
},[])
console.log(data.ipData)
const searchApi = async () => {
 try { const response = await ipAddressApi.get(`/ipAddress`, {
  params : {
    ipAddress,
    domain: ipAddress,
    email: ipAddress
  }
 });
   setData(response.data)
   
  setCoordinates([response.data.location.lat, response.data.location.lng])
}
  catch (err) {
    setErrorMessage(err)
  }
}
// event handler callback function to store data from input
const ipHandler = (event) => {
  setIpAddress(event.target.value)
}

// Submit handler to stop from reloading page 
const submitHandler = (e) => {
  e.preventDefault()
  setIpAddress("")
}

// to convert offset timezone from seconds to hours and minutes
// function toDaysMinutesSeconds(totalSeconds) {
//   const minutes = Math.floor((totalSeconds % 3600) / 60);
//   const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);

//   const minutesStr = makeHumanReadable(minutes, '');
//   const hoursStr = makeHumanReadable(hours, '');

//   return `${hoursStr}:${minutesStr}`.replace(/,\*$/, '');
// }
// function makeHumanReadable(num, singular) {
//   return num > 0 || num < 0
//     ? num + (num === 1 ? `${singular}` : `${singular}`)
//     : '00';
// }
console.log(error)
console.log(data)
// Validation check if user enterswrong data or something
  if (error) {
    setTimeout(() => {
    window.location.reload()
    }, 5000)
    return <h2 style={{textAlign : "center", marginTop: "50px", color: "white" }}>SomeThing went Wrong, You will be redirecting please wait</h2>
  } 
  // else if (error === "fail") {
  //   setTimeout(() => {
  //     window.location.reload()
  //     }, 5000)
  //     return <h2 style={{textAlign : "center", marginTop: "50px", color: "white" }}>SomeThing went Wrong, You will be redirecting please wait</h2>  
  // }
  return (
    <div>
    <div className="headerContent container">
      <h1 className="heading">IP Address Tracker</h1>
      <form onSubmit={submitHandler}>
      <input className="input" type="text" placeholder="Search for any IP address or domain name" value={ipAddress} onChange={ipHandler} required></input>
      <button type="submit" className="button" onClick={searchApi}> <img src={IconImage} alt=""/> </button>
      </form>
      <DataComponent dataTypes={data} />
      </div>
        <div>
       <MapComponent coordinates={coordinates}  styles="mapComponent" />
       </div>
      
    </div>
  );
}


export default App;
