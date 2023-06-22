import {MapContainer, Rectangle, TileLayer,Tooltip} from 'react-leaflet'
import {CRS, LatLngBoundsExpression} from "leaflet";



const Tiledmap = () => {
const step = 4
    const kuant: LatLngBoundsExpression = [
        [-34*step,72*step],
        [-36*step,74*step]
    ]

    return (
        <MapContainer

            center={[-64*step,64*step]}
            zoom={3}
            crs={CRS.Simple}
            style={{ height:'100vh', width: '100%', background:"#333" }}
            zoomControl={false}
            maxZoom={6}
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