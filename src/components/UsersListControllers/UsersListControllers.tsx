import { Icon } from "semantic-ui-react";
import { ButtonWithIcon } from "../ButtonWithIcon/ButtonWithIcon";
import { StyledSelect, Controllers } from "./UsersListControllers.styles";

const options = [{ key: "all", value: "all", text: "All humans" }];

type UsersListControllersProps = { onButtonClick: () => void };

const UsersListControllers: React.FC<UsersListControllersProps> = ({
  onButtonClick,
}): JSX.Element => {
  return (
    <Controllers>
      <ButtonWithIcon
        icon={<Icon name="user plus" />}
        content="Add Human"
        onClick={onButtonClick}
      />

      <StyledSelect options={options} placeholder={options[0].text} />
    </Controllers>
  );
};

export default UsersListControllers;
