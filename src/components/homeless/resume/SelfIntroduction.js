import React from "react";
import styled from "styled-components";

const SelfIntroduction = () => {
  return (
    <Container>
      <Title>자기소개</Title>
      <Textarea placeholder="입력하세요." />
    </Container>
  );
};

const Container = styled.div`
position: absolute;
top: 74rem;
left: 5.3125rem;
  width: 100%;
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

const Textarea = styled.textarea`
  width: 100%;
  height: 8rem;
  border: 1px solid #dcdcdc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

export default SelfIntroduction;
