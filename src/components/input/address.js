import React, { useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as SearchIcon } from "../../icons/SearchIcon.svg";

const AddressInput = ({ subBoxStyle, onAddressChange, ...props }) => {
  const [address, setAddress] = useState(""); // 기본 주소

  const completeHandler = (data) => {
    const { address } = data;
    setAddress(address);
    if (onAddressChange) {
      onAddressChange(address);
    }
  };

  const toggleHandler = () => {
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
          <SubBox style={subBoxStyle}>{address}</SubBox>
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

export default AddressInput;
