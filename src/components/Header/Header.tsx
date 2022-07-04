import { Logo, StyledHeader, StyledMenu, StyleIcon } from "./Header.styles";
import { useState } from "react";

const menuItems = [
  { name: "notes" },
  { name: "circles" },
  { name: "timeline" },
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
          <StyledMenu.Item
            key={item.name}
            name={item.name}
            active={activeItem === item.name}
            onClick={() => handleMenuItemClick(item.name)}
          />
        ))}
      </StyledMenu>

      <StyleIcon name="user" circular size="large" color="grey" />
    </StyledHeader>
  );
};

export default Header;
