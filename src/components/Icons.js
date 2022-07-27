import L from 'leaflet';

const iconView = new L.Icon({
    iconUrl: require("../images/icon-location.png"),
    iconRetinaUrl: require("../images/icon-location.png"),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
    // className: 'leaflet-div-icon'
});

export { iconView };