import React, { useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as SearchIcon } from "../../icons/SearchIcon.svg";
import PlaceHolder from "../../components/PlaceHolder2";

const AddressInput = () => {
  const [zonecode, setZonecode] = useState(""); // 우편번호
  const [address, setAddress] = useState(""); // 기본 주소
  const [detailedAddress, setDetailedAddress] = useState(""); // 상세 주소

  const completeHandler = (data) => {
    const { zonecode, address } = data;
    setZonecode(zonecode);
    setAddress(address);
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

  const inputChangeHandler = (event) => {
    setDetailedAddress(event.target.value);
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "row",
          }}
        >
          <SubBox>{zonecode}</SubBox>
          <SearchIconWrapper onClick={toggleHandler}>
            <SearchIcon />
          </SearchIconWrapper>
        </div>
        <SubBox>{address}</SubBox>
        <PlaceHolder
          text="상세 주소 입력"
          style={{
            boxSizing: "border-box",
            width: "25.3125rem",
            height: "2.8125rem",
            border: "0.1rem solid #AFBFA5",
            borderRadius: "15px",
            fontFamily: "Pretendard-Medium",
            fontSize: "1.3125rem",
            lineHeight: "24px",
            color: "#8AA353",
            padding: "0 1rem",
          }}
          isEditing={true}
          type="text"
          value={detailedAddress}
          onChange={inputChangeHandler}
        />
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

const Input = styled.input`
  box-sizing: border-box;
  width: 25.3125rem;
  height: 2.8125rem;
  border: 0.1rem solid #afbfa5;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-size: 1.3125rem;
  line-height: 24px;
  color: #8aa353;
  padding: 0 1rem;

  &::placeholder {
    color: #6e6e6e;
    font-size: 16px;
  }
`;

const SearchIconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default AddressInput;
