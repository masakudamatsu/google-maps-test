import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';

import Noscript from 'src/components/Noscript';
import Map from 'src/elements/Map';

function HomePage() {
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyBXoU7QbIsLuxbZibCGtvBa6WNru9mZg74',
      version: 'weekly',
    });

    let map; // in response to ESLint warning: "Assignments to the 'map' variable from inside React Hook use Effect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Oth erwise, you can move this variable directly inside useEffect"
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
      });
    });
  });

  return (
    <>
      <Noscript />
      <Map id="map" ref={googlemap} />
    </>
  );
}

export default HomePage;
