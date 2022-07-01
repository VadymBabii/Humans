import { Item } from "semantic-ui-react";
import styled from "styled-components";

export const StyledUsersList = styled.div`
  width: 320px;
  margin-top: 10px;
`;

export const StyledListUser = styled(Item)`
  background: ${({ active }) => (active ? "#d1d5db" : "inherit")} !important;
  height: 77px;
  width: 312px;
  cursor: pointer;
  padding-top: 17.5px !important;
  padding-left: 10px !important;
`;

export const UserImage = styled.div`
  background: #bab8b8;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  .ui.header {
    color: #ffffff !important;
  }
`;
