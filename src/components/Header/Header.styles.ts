import { Header, Icon, Menu } from "semantic-ui-react";
import styled from "styled-components";

export const StyledHeader = styled.div`
  background: #1f2937;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 6.5rem;
`;

export const StyledMenu = styled(Menu)`
  margin-left: 1.5rem !important;
  flex: 1;
  .item {
    color: #caced5 !important;
    &.active {
      color: #ffffff !important;
      background: #111827 !important;
    }
  }
`;

export const Logo = styled(Header)`
  color: #ffffff;
  margin: auto 0 !important;
`;

export const StyleIcon = styled(Icon)`
  background: #f7f7f8;
  cursor: pointer;
`;
