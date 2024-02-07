import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const SearchCardContainer = styled.div`
  display: flex;
  justify-content: center;
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
  height: 20%;
  border-bottom: 1px solid rgb(211, 211, 211);
`;

// export const SearchCardNavItemsContainer = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   height: 20%;
//   border-bottom: 1px solid rgb(211, 211, 211);
// `;

export const SearchCardNavItem = styled.text`
  padding: 10px;
  color: black;
`;
