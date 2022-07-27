// import React from "react"
import { useMap } from 'react-leaflet';

const ChangeViewMap = ({coords}) => {
    const map = useMap();

    map.setView(coords, map.getZoom());

    return null;
}


export default ChangeViewMap;