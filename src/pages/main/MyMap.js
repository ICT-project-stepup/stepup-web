import { styled } from "styled-components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import MapMarkerIcon from '../../icons/MapMarkerIcon.svg';
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";


/* 구글 맵스 기본 스타일링 */
const containerStyle = {
    width: '100%',
    height: '41rem',
    marginTop: '1rem',
    borderRadius: '1.875rem',
    border: 'solid 0.1rem #D9D9D9'
};
  
const center = {
    lat: 35.516183073073336,
    lng: 128.490290241545
};

const markerInfo = [
    {
        postTitle: "양파 수확하실 분 구해요~",
        markerLat: 35.51443486843741,
        markerLng: 128.48735899814744,
    },
    {
        postTitle: "마늘 뽑으실 분 구합니다",
        markerLat: 35.51771224056322,
        markerLng: 128.4883343730302,
    },
    {
        postTitle: "과수원 일 도와주실 분 구해요",
        markerLat: 35.51737886420564,
        markerLng: 128.49343183849996,
    },
]

export default function MyMap() {
    const navigate = useNavigate();
    const [mapLoaded, setMapLoaded] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMapLoad = () => {
        setMapLoaded(true);
    };

    const handleMapClick = () => {
        setSelectedMarker(null);
    };

    return(
        <LoadScript 
            googleMapsApiKey="AIzaSyDRGjPRqJSdBjgjXC4HEunnxZ9fM_9zvgc"
            onLoad={handleMapLoad}
        >
            {mapLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={17}
                    onClick={handleMapClick}
                >
                    {markerInfo.map((marker, index) => (
                        <MarkerF
                            key={index}
                            position={{ lat: marker.markerLat, lng: marker.markerLng }}
                            onClick={() => setSelectedMarker(marker)}
                            icon={{
                                url: MapMarkerIcon,
                                scaledSize: new window.google.maps.Size(60, 60),
                            }}
                        />
                    ))}
                    {selectedMarker && (
                        <InfoWindowF
                            position={{ lat: selectedMarker.markerLat, lng: selectedMarker.markerLng }}
                            onCloseClick={() => setSelectedMarker(null)}
                        >
                            <InfoWindowStyle>
                                <WindowContentWrapper>
                                    <img src={MapMarkerIcon} alt="Marker Icon" />
                                    <TitleBtnWrapper>
                                        <span style={{paddingTop: "0.5rem"}}>{selectedMarker.postTitle}</span>
                                        <RoundWhiteBtn 
                                            text="자세히 보기"
                                            onClick={() => {
                                                navigate("/jobaddetail");
                                            }}
                                            style={{
                                                width: "7.5rem",
                                                height: "2rem",
                                                fontFamily: "Pretendard-Medium",
                                                fontSize: "1.125rem",
                                                marginTop: "4.1rem"
                                            }}
                                        />
                                    </TitleBtnWrapper>
                                </WindowContentWrapper>
                            </InfoWindowStyle>
                        </InfoWindowF>
                    )}
                </GoogleMap>
            )}
        </LoadScript>
    );
};

const InfoWindowStyle = styled.div`
    width: 14rem;
    height: 6.5rem;
    background: white;
    padding: 0 0.5rem;
`;

const WindowContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TitleBtnWrapper = styled.div`
    height: 100%;
    width: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: Pretendard-SemiBold;
    font-size: 1.25rem;
`;