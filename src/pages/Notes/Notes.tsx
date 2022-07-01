import { useState } from "react";
import { useSelector } from "react-redux";
import UsersList from "../../components/UsersList/UsersList";
import UserDetails from "../../components/UsetDetails/UserDetails";
import { selectUsers } from "../../redux/reducers/user/selectors";
import { UserType } from "../../redux/reducers/user/user";
import { StyledNotes } from "./Notes.styles";

const Notes = (): JSX.Element => {
  const users = useSelector(selectUsers);
  const [activeUser, setActiveUser] = useState<UserType>(users[0]);
  const handleItemClick = (user: UserType) => {
    setActiveUser(user);
  };

  const addUserButtonClick = () => {
    setActiveUser({
      id: users.length.toString() + 1,
      name: "",
      image: null,
      isNew: true,
    });
  };

  const handleThreeDotsClick = () => {};
  return (
    <StyledNotes>
      <UsersList
        selectedUser={activeUser}
        handleItemClick={handleItemClick}
        onButtonClick={addUserButtonClick}
      />
      <UserDetails
        user={activeUser}
        onThreeDotsClick={handleThreeDotsClick}
        setActiveUser={setActiveUser}
      />
    </StyledNotes>
  );
};

export default Notes;
