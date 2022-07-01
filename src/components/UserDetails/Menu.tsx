import { StyledMenu } from "./UserDetails.styles";

const Menu = ({ handleDeleteClick }: { handleDeleteClick: () => void }) => {
  return (
    <StyledMenu>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteClick();
        }}
      >
        Delete Human
      </div>
    </StyledMenu>
  );
};

export default Menu;
