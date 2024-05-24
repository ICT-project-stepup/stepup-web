import { styled } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from '../../icons/SearchIcon.svg';


export default function SearchBar({ placeholder, value, onChange }) {
    return (
      <SearchWrapper>
        <SearchInput
          placeholder={placeholder}
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
  width: 30rem;
  height: 3.25rem;
  display: flex;
  position: relative;
  align-items: center;
`;

const SearchInput = styled.input`
  font-family: "Pretendard-Regular";
  width: 100%;
  height: 100%;
  border: 0.125rem solid #8AA353;
  border-radius: 2rem;
  padding-left: 2rem;
`;