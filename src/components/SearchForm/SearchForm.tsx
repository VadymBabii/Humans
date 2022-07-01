import { InputOnChangeData } from "semantic-ui-react";
import { StyledSearchForm } from "./SearchForm.styles";

const SearchForm = () => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    console.log(data, event);
  };
  return (
    <StyledSearchForm
      icon="search"
      iconPosition="left"
      onChange={handleChange}
    />
  );
};

export default SearchForm;
