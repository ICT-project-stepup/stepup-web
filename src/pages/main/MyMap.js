import { styled } from "styled-components";
import { useState, useEffect } from 'react';
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
    lat: 37.30057497545008,
    lng: 127.34279185902241
};

export default function MyMap() {
    const navigate = useNavigate();
    const [mapLoaded, setMapLoaded] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [jobAds, setJobAds] = useState([]);

    useEffect(() => {
        fetchJobAds(); // 페이지 로딩 시 구인글 목록을 가져오는 함수 호출
    }, []);

    const fetchJobAds = async () => {
        try {
            const response = await fetch('/api/jobad'); // 백엔드 엔드포인트 URL
            if (!response.ok) {
                throw new Error('Failed to fetch job ads');
            }
            const data = await response.json();
            setJobAds(data); // 구인글 목록 state 업데이트
        } catch (error) {
            console.error('Error fetching job ads:', error);
        }
    };

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
                    zoom={9}
                    onClick={handleMapClick}
                >
                    {jobAds.map((marker, index) => (
                        <MarkerF
                            key={index}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            onClick={() => setSelectedMarker(marker)}
                            icon={{
                                url: MapMarkerIcon,
                                scaledSize: new window.google.maps.Size(60, 60),
                            }}
                        />
                    ))}
                    {selectedMarker && (
                        <InfoWindowF
                            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
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
                                                navigate(`/jobaddetail/${selectedMarker.boardNumber}`);
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