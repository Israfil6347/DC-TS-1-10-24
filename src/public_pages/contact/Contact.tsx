import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { serviceCenters } from 'global_shared/data/serviceCenters';
import React, { CSSProperties } from 'react';
import { ServiceCenterModel } from './model/data/ServiceCenterModel';

const containerStyle: CSSProperties = {
  width: '100%',
  height: '620px',
  objectFit: 'fill',
};

const center = {
  lat: 23.756677326621922,
  lng: 90.39362746038861,
};

function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBLZjRTK1xE1SVoFG1F_SqPLMg9C-jkLJQ',
  });

  const [selectedCenter, setSelectedCenter] =
    React.useState<ServiceCenterModel | null>(null);

  React.useEffect(() => {
    const listener = (e: any) => {
      if (e.key === 'Escape') {
        setSelectedCenter(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      {serviceCenters?.map((service_center) => (
        <Marker
          key={service_center?.serviceCenter}
          position={{
            lat: service_center?.lat,
            lng: service_center?.lng,
          }}
          onClick={() => {
            setSelectedCenter(service_center);
          }}
          icon={{
            url: require('./icons/dc.png'),
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />
      ))}

      {selectedCenter && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCenter(null);
          }}
          position={{
            lat: selectedCenter.lat,
            lng: selectedCenter.lng,
          }}
        >
          <div className="w-96 text-primaryVariant">
            <div className="px-2 text-xl  font-bold">
              {selectedCenter.serviceCenter}
            </div>
            <div className="p-2 text-sm">
              <p>{selectedCenter.address}</p>
              <p>{selectedCenter.phone}</p>
              <p>{selectedCenter.ipPhone}</p>
              <p>{selectedCenter.fax}</p>
              <p>{selectedCenter.email}</p>
            </div>
            <div className="p-2 text-sm">
              <p className="font-semibold">{selectedCenter.inchargeName}</p>
              <p>{selectedCenter.inchargeDesignation}</p>
            </div>
            <div className="p-2 text-sm">
              <p>{selectedCenter.collection}</p>
              <p>{selectedCenter.time}</p>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Contact;
