import {MapContainer, Rectangle, TileLayer,Tooltip} from 'react-leaflet'
import {CRS, LatLngBoundsExpression} from "leaflet";



const Tiledmap = () => {
const step = 8
    const kuant: LatLngBoundsExpression = [
        [-11*step,16*step],
        [-9*step,14*step]
    ]

    return (
        <MapContainer
            center={[0,0]}
            zoom={3}
            crs={CRS.Simple}
            style={{ height:'100vh', width: '100%' }}
            zoomControl={false}
        >
            <TileLayer
                noWrap
                url="http://localhost:8000/tiles/{z}/{x}/{y}"
                attribution="Game Map"
            />
            <Rectangle bounds={kuant}>
                <Tooltip>Кванториум</Tooltip>
            </Rectangle>

        </MapContainer>
    );
};

export default Tiledmap;