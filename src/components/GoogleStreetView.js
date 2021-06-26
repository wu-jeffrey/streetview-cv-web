import { useState, useEffect } from 'react';
import Streetview from 'react-google-streetview';
import { useLocation } from "react-router-dom";

const { REACT_APP_GOOGLE_API_KEY } = process.env;

export default function GoogleStreetView() {
  const location = useLocation();
  const [latitude, setLatitude] = useState(46.9171876);
  const [longitude, setLongitude] = useState(17.8951832);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setLatitude(Number(params.get('lat')))
    setLongitude(Number(params.get('lng')))

  }, [location])

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Streetview
        apiKey={REACT_APP_GOOGLE_API_KEY}
        streetViewPanoramaOptions={{
          position: { lat: latitude, lng: longitude },
          pov: { heading: 0, pitch: 0 },
          zoom: 1,
        }}
      ></Streetview>
    </div>
  )
}
