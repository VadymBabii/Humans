import { Select } from "semantic-ui-react";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  width: 157px;
  min-width: unset !important;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
`;

export const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;
