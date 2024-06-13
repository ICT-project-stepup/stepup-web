import React, { useState } from "react";
import styled from "styled-components";

const SelfIntroduction = ({ isEditing, introduction, setIntroduction }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleTextareaChange = (e) => {
    setIntroduction(e.target.value);
  };

  return (
    <Container>
      <Title>자기소개</Title>
      {isEditing ? (
        <StyledTextarea
          placeholder="입력하세요."
          value={introduction}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value.length > 0)}
          onChange={handleTextareaChange}
          isFocused={isFocused}
        />
      ) : (
        <ReadOnlyTextarea>{introduction || "자기소개가 없습니다."}</ReadOnlyTextarea>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  width: auto;
  height: 180px;
  border-radius: 20px;
  padding: 1.5rem 2rem;
  font-size: 22px;
  background: ${(props) => (props.isFocused ? "#E4ECD1" : "#D9D9D9")};
  border: 1px solid #dcdcdc;
  font-family: "Pretendard-Medium";
  color: #6e6e6e;
  resize: none; // 크기 고정
  &:focus {
    outline: none;
    border: none;
  }
`;

const ReadOnlyTextarea = styled.div`
  box-sizing: border-box;
  width: auto;
  height: 180px;
  border-radius: 20px;
  padding: 1rem;
  font-size: 22px;
  background: #E4ECD1;
  border: 1px solid #dcdcdc;
  font-family: "Pretendard-Medium";
  color: #6e6e6e;
  resize: none; // 크기 고정
  white-space: pre-wrap; // 줄 바꿈을 유지
`;

export default SelfIntroduction;
