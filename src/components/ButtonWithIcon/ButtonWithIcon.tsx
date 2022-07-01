import { ReactNode } from "react";
import { ButtonProps } from "semantic-ui-react";
import { StyledButton } from "./ButtonWithIcon.styles";

type ButtonWithIconProps = {
  icon: ReactNode;
} & ButtonProps;

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  icon,
  ...rest
}) => <StyledButton icon={icon} {...rest} />;
