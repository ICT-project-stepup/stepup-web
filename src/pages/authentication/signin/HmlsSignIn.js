import React from "react";
import styled from "styled-components";
import PageTitle from "../../../components/PageTitle";

/* 예은 */
export default function HmlsSignIn() {
  return (
    <Container>
      <PageTitle text="회원가입" />
      <SubText>사진</SubText>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  height: 52rem;
  display: block;
  align-items: flex-start;
  padding: 2rem 6rem 0 6rem;
`;

const SubText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  color: #6e6e6e;
  margin-top: 3rem;
  width: 100%;
  display: flex;
  text-align: center;
`;
