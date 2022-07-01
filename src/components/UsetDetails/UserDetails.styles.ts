import { Input, Item } from "semantic-ui-react";
import styled from "styled-components";

export const StyledUserDetails = styled.div`
  width: 612px;
`;

export const StyledUserCard = styled(Item)`
  position: relative;
  height: 132px;
  padding: 0 16px !important;
  border-radius: 8px !important;
  display: flex;
  align-items: center;
  background: #ffffff !important;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;

  .image {
    width: 100px !important;
    height: 100px !important;
  }
`;

export const StyledInput = styled(Input)`
  width: 300px;
  margin-bottom: 10px;
`;
