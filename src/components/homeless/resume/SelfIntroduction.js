import React from "react";
import styled from "styled-components";

const SelfIntroduction = () => {
  return (
    <>
      <SectionTitle>자기소개</SectionTitle>
      <Textarea placeholder="입력하세요." />
    </>
  );
};

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
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
