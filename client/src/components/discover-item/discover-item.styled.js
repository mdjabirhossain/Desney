import styled from "styled-components";

export const DiscoverItemContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: grey;
  height: 110px;
  width: 150px;
  color: black;
  border-radius: 10px;
  border: 1px solid rgb(211, 211, 211);
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 50px 1px rgba(0, 0, 0, 0.1);
    filter: brightness(1.1);
  }
`;

export const DiscoverItemLogo = styled.div`
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  // border-radius: 50%;
  // border: 1px solid black;
`;

export const DiscoverItemText = styled.div`
  margin: 10px;
  color: black;
`;
