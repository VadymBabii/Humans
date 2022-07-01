import { useSelector } from "react-redux";
import { Header, Item } from "semantic-ui-react";
import { selectUsers } from "../../redux/reducers/user/selectors";
import { UserType } from "../../redux/reducers/user/user";
import SearchForm from "../SearchForm/SearchForm";
import UsersListControllers from "../UsersListControllers/UsersListControllers";
import { StyledListUser, StyledUsersList, UserImage } from "./UsersList.styles";

type UsersListProps = {
  selectedUser: UserType;
  handleItemClick: (user: UserType) => void;
  onButtonClick: () => void;
};

const UsersList: React.FC<UsersListProps> = ({
  selectedUser,
  handleItemClick,
  onButtonClick,
}) => {
  const users = useSelector(selectUsers);

  return (
    <StyledUsersList>
      <SearchForm />
      <UsersListControllers onButtonClick={onButtonClick} />
      <Item.Group>
        {users.map((user) => (
          <StyledListUser
            key={user.name}
            active={selectedUser.id === user.id}
            onClick={() => handleItemClick(user)}
          >
            {user.image ? (
              <Item.Image src={user.image} size="tiny" circular />
            ) : (
              <UserImage>
                <Header>{user.name.substring(0, 1).toUpperCase()}</Header>
              </UserImage>
            )}
            <Item.Content verticalAlign="top">
              <Header as="h4">{user.name}</Header>
            </Item.Content>
          </StyledListUser>
        ))}
      </Item.Group>
    </StyledUsersList>
  );
};

export default UsersList;
