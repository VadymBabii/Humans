import { Logo, StyledHeader, StyledMenu, StyleIcon } from "./Header.styles";
import { useState } from "react";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

const { NOTES, CIRCLES, TIMELINE } = ROUTES;

const menuItems = [
  { name: "notes", path: NOTES },
  { name: "circles", path: CIRCLES },
  { name: "timeline", path: TIMELINE },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>("notes");

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <StyledHeader>
      <Logo as="h3">Humans</Logo>
      <StyledMenu secondary>
        {menuItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <StyledMenu.Item
              name={item.name}
              active={activeItem === item.name}
              onClick={() => handleMenuItemClick(item.name)}
            />
          </Link>
        ))}
      </StyledMenu>

      <StyleIcon name="user" circular size="large" color="grey" />
    </StyledHeader>
  );
};

export default Header;
