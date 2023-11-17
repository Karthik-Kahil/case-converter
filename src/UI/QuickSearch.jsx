/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import searchDataList from "./quickSearchData";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.2s ease-in;

  input {
    position: fixed;
    top: 200px;
    border-radius: 10px;
    outline: 0;
    border: 0;
    padding: 5px 10px;
    width: 70%;
    height: 50px;
    background-color: #445c48;
    color: #ffffff;
  }
`;

const StyledList = styled.div`
  position: fixed;
  top: 250px;
  background-color: #748e63;
  color: #ffffff;
  width: 70%;
  margin: 20px auto;
  border-radius: 10px 10px 10px 10px;
`;

const StyledLink = styled(Link)`
  width: 100%;

  li {
    padding: 10px 20px;
    border-radius: 10px 10px 10px 10px;
  }

  li:hover {
    color: #748e63;
    background-color: #f5eec8;
  }

  li:last-child {
    border-bottom: 0px;
  }
`;

function QuickSearch({ setSearchShow }) {
  const [searchData, setSearchData] = useState([]);

  const searchHandler = (e) => {
    const searchKeyWords = e.target.value.split("");

    setSearchData(
      searchDataList.filter((search) =>
        searchKeyWords.every((key) =>
          search.searchName.toLowerCase().includes(key)
        )
      )
    );
  };

  const closeHandler = () => {
    setSearchShow((toggle) => !toggle);
  };

  return (
    <StyledDiv onClick={closeHandler}>
      <input
        type="search"
        autoFocus={true}
        placeholder="Spolight Search"
        onChange={searchHandler}
      />
      <StyledList>
        <ul>
          {searchData.map((data) => (
            <QuickList
              searchName={data.searchName}
              searchURL={data.dataURL}
              key={data.key}
            />
          ))}
        </ul>
      </StyledList>
    </StyledDiv>
  );
}

function QuickList({ searchName, searchURL }) {
  return (
    <StyledLink to={searchURL}>
      <li>{searchName}</li>
    </StyledLink>
  );
}

export default QuickSearch;
