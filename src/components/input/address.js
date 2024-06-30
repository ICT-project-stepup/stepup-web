import React, { useState, useEffect, useCallback } from "react";
import { styled } from "styled-components";
import { ReactComponent as SearchIcon } from "../../icons/SearchIcon.svg";

const AddressInput = ({ subBoxStyle, onAddressChange, ...props }) => {
  const [address, setAddress] = useState(""); // 기본 주소
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null }); // 위도와 경도
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    // 카카오 지도 API 스크립트 동적 로드
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f4566115fefc62958a9cd26e1e3e6b6a&libraries=services";
    script.async = true;
    script.onload = () => setKakaoLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const completeHandler = useCallback(
    (data) => {
      const { address } = data;
      setAddress(address);

      if (!kakaoLoaded) {
        console.error("Kakao API is not loaded");
        return;
      }

      // address -> 위도, 경도값 반환
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const { y: lat, x: lng } = result[0];
          setCoordinates({ lat, lng });

          if (onAddressChange) {
            onAddressChange(address, { lat, lng });
          }
        } else {
          setCoordinates({ lat: null, lng: null });
          if (onAddressChange) {
            onAddressChange(address, null);
          }
        }
      });
    },
    [kakaoLoaded, onAddressChange]
  );

  const toggleHandler = () => {
    if (!window.daum || !window.daum.Postcode) {
      console.error("Daum Postcode API is not loaded");
      return;
    }

    // 주소찾기 팝업 창
    new window.daum.Postcode({
      oncomplete: completeHandler,
    }).open({
      left: window.screen.width / 2 - 250,
      top: window.screen.height / 2 - 300,
    });
  };

  return (
    <div style={{ textAlign: "left" }}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "row",
          }}
        >
          <SubBox style={subBoxStyle}>
            {address ? (
              address
            ) : (
              <PlaceholderText>
                돋보기 아이콘을 눌러 주소를 찾아보세요!
              </PlaceholderText>
            )}
          </SubBox>
          <SearchIconWrapper onClick={toggleHandler}>
            <SearchIcon />
          </SearchIconWrapper>
        </div>
      </div>
    </div>
  );
};

const SubBox = styled.div`
  box-sizing: border-box;
  width: 25.3125rem;
  height: 2.8125rem;
  border: 0.1rem solid #afbfa5;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-size: 1.3125rem;
  line-height: 24px;
  color: #8aa353;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const SearchIconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

const PlaceholderText = styled.span`
  color: #afbfa5;
  font-size: 1rem;
  user-select: none;
`;

export default AddressInput;
