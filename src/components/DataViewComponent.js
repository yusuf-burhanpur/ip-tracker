import React from "react";

const DataComponent = ({dataTypes}) => {
    
    return (
        <div className="dataComponent container">
        <div className="col span">
        <p className="columnHeading">IP ADDRESS</p>
        <p className="columnData">{dataTypes.ip}</p>
        </div>
        <div className="col span">
        <p className="columnHeading">LOCATION</p>
        <p className="columnData">{dataTypes.location.city}, {dataTypes.location.region} <br></br>
        {dataTypes.location.postalCode}</p>
        </div>
      <div className="col span">
      <p className="columnHeading">TIMEZONE</p>
      <p className="columnData">UTC {dataTypes.location.timezone}</p>
      </div>  
        <div className="col">
        <p className="columnHeading">ISP</p>
        <p className="columnData">{dataTypes.isp}</p>
        </div>
      </div> 
    )
}

export default DataComponent;