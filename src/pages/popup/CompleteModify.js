import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GoBackIcon } from "../../icons/GoBackIcon.svg";
import { ReactComponent as XIcon } from "../../icons/XIcon.svg";

/* 채은 */
const CompleteModify = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onRequestClose();
    navigate("/homelessmypage");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "41.125rem",
          height: "23.75rem",
          textAlign: "center",
          borderRadius: "40px",
          boxSizing: "border-box",
          fontFamily: "Pretendard-Medium",
          fontSize: "24px",
          color: "#6E6E6E",
          boxShadow: "1px 4px 4px rgba(175, 191, 165, 0.4)",
          background: "#FFFFFF",
        },

        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <CloseButton onClick={handleClose}>
        <StyledXIcon />
      </CloseButton>
      <Line />
      <CompleteWrapper>
        <StyledGoBackIcon />
        <p>정보 수정이 완료되었습니다.</p>
      </CompleteWrapper>
    </Modal>
  );
};

const StyledXIcon = styled(XIcon)`
  margin-left: 36.1875rem;
  margin-top: 0.7rem;
`;

const StyledGoBackIcon = styled(GoBackIcon)`
  margin-right: 6rem;
`;

const CloseButton = styled.button`
  top: 1.5625rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #8aa353;
  margin: 1rem 0;
  border: 0.125rem;
`;

const CompleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

export default CompleteModify;
