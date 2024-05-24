import { styled } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from '../../icons/SearchIcon.svg';


export default function SearchBar({ value, onChange }) {
    return (
      <SearchWrapper>
        <SearchInput
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={value}
        />
        <button
          style={{
            position: "absolute",
            right: "1rem",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
            <SearchIcon />
        </button>
      </SearchWrapper>
    );
  }

  SearchBar.propTypes = {
    text: PropTypes.string,
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
  padding-left: 2rem;

  &::placeholder {
    color: #AFBFA5;
  }

  &:focus {
    outline: none;
    border-color: #8AA353;
  }
`;