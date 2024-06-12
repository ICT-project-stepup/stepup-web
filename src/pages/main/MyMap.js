import { GoogleMap, LoadScript } from '@react-google-maps/api';


export default function MyMap() {
    const containerStyle = {
        width: '100%',
        height: '41rem',
        marginTop: '1rem',
        borderRadius: '2rem',
        border: 'solid 0.1rem #D9D9D9'
    };
      
    const center = {
        lat: 35.516183073073336,
        lng: 128.490290241545
    };
    
    return(
        <LoadScript 
            googleMapsApiKey="AIzaSyDRGjPRqJSdBjgjXC4HEunnxZ9fM_9zvgc"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            >
            </GoogleMap>
        </LoadScript>
    );
};