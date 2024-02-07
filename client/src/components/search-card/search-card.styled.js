import styled from "styled-components";

export const SearchCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  width: 80%;
  height: 200px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  // box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const SearchCardNavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid rgb(211, 211, 211);
  margin-bottom: 25px;
`;

export const SearchCardNavItem = styled.div`
  padding: 10px;
  color: black;
  font-weight: 500;
`;

export const SearchBarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
