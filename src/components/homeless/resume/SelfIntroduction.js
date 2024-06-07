import React, { useState } from "react";
import styled from "styled-components";

const SelfIntroduction = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Title>자기소개</Title>
      <StyledTextarea
        placeholder="입력하세요."
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value.length > 0)}
        isFocused={isFocused}
      />
    </Container>
  );
};

const Container = styled.div`
    position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  left: 5.3125rem;
  margin-top: 2rem;
`;

const Title = styled.h2`
  width: 7.4375rem;
  height: 2.375rem;
  font-family: "Pretendard-Medium";
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.375rem;
  color: #6e6e6e;
  margin-bottom: 1rem;
`;

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  width: 1270px;
  height: 160px;
  border-radius: 20px;
  padding: 1rem;
  font-size: 22px;
  background: ${(props) => (props.isFocused ? "#E4ECD1" : "#D9D9D9")};
  border: 1px solid #dcdcdc;
  font-family: "Pretendard-Medium";
  color: #6E6E6E;
  resize: none; // 크기 고정
`;

export default SelfIntroduction;
