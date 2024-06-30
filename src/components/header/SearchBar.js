import { useState } from 'react';
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from '../../icons/SearchIcon.svg';
import { useNavigate } from "react-router-dom";


export default function SearchBar({ value, onChange }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim() === "") {
      alert("검색어를 입력하세요.");
      return;
    }
    navigate(`/searchresult?keyword=${keyword}`);
  };

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="검색어를 입력하세요"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <button
        style={{
          position: "absolute",
          right: "1rem",
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </SearchWrapper>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SearchWrapper = styled.div`
  width: 100%;
  height: 3.25rem;
  display: flex;
  position: relative;
  align-items: center;
`;

const SearchInput = styled.input`
  font-family: "Pretendard-Regular";
  font-size: 1.25rem;
  width: 100%;
  height: 100%;
  border: 0.125rem solid #8AA353;
  border-radius: 2rem;
  padding: 0 4rem 0 2rem;

  &::placeholder {
    color: #AFBFA5;
  }

  &:focus {
    outline: none;
    border-color: #8AA353;
  }
`;