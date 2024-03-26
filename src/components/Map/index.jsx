
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './styles.css'

export default function Map() {
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA1u25ZV8Zb40y8EPYdGcDW94hmLH3FMXU"
      })
    
    const position = {
        lat: -22.884557444921946,
        lng: -43.29851083363716
    }

    return(
        <div className='map'>
            { isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={{width:'100%', height:'100%'}}
                      center={position}
                      zoom={16}
                    >
                        <Marker  position={position}/>
                    </GoogleMap>
                ) : (
                <><h1>ERRO</h1></>
            )}
        </div>
    )
}
  