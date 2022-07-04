import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Icon, Image, InputOnChangeData, Item } from "semantic-ui-react";
import {
  deleteUser,
  editUser,
  saveUser,
  UserType,
} from "../../redux/reducers/user/user";
import Menu from "./Menu";
import {
  StyledInput,
  StyledUserCard,
  StyledUserDetails,
} from "./UserDetails.styles";

type UserDetailsProps = {
  user: UserType;
  onThreeDotsClick: () => void;
  setActiveUser: Dispatch<SetStateAction<UserType>>;
};

const UserDetails: React.FC<UserDetailsProps> = ({
  user,
  onThreeDotsClick,
  setActiveUser,
}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>(user.name);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEditVisible, setIsEditVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setUserName(user.name);
  }, [user]);

  const handleChange = (event: InputOnChangeData) => {
    setUserName(event.target.value);
  };

  const handleSubmit = () => {
    const newUser = { ...user, isNew: false, name: userName };
    if (isEditing) {
      dispatch(editUser(newUser));
    } else {
      dispatch(saveUser(newUser));
    }
    setActiveUser(newUser);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    dispatch(deleteUser(user.id));
    setIsMenuOpen(false);
    setActiveUser({ name: "New Human", id: "", image: "", isDefault: true });
  };

  const mouseOver = () => {
    setIsEditVisible(true);
  };

  const mouseLeave = () => {
    setIsEditVisible(false);
  };

  const setIsEditable = () => {
    if (!user.isDefault) {
      setIsEditing(true);
    }
    setActiveUser({ ...user, isNew: true, isDefault: false });
  };

  return (
    <StyledUserDetails>
      <Item.Group>
        <StyledUserCard>
          <Image
            size="small"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            circular
          />
          <StyledUserCard.Content verticalAlign="middle">
            <div>
              {user.isNew ? (
                <Form onSubmit={handleSubmit}>
                  <StyledInput focus value={userName} onChange={handleChange} />
                </Form>
              ) : (
                <div
                  style={{ display: "flex", width: "max-content" }}
                  onMouseOver={mouseOver}
                  onMouseLeave={mouseLeave}
                >
                  <div
                    style={{
                      fontSize: 25,
                      marginBottom: 10,
                      fontWeight: "bold",

                      cursor: "pointer",
                      lineHeight: 1,
                    }}
                    onClick={setIsEditable}
                  >
                    <span style={{ marginRight: 5 }}>{userName}</span>

                    {isEditVisible && <Icon name="pencil" size="tiny" />}
                  </div>
                </div>
              )}
              <div>
                Circles: <Icon name="plus circle" />
              </div>
            </div>
            {!user.isDefault && (
              <div
                style={{
                  fontSize: 25,
                  cursor: "pointer",
                  position: "absolute",
                  top: 20,
                  right: 16,
                }}
                onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              >
                ...
                <div style={{ position: "relative" }}>
                  {isMenuOpen && <Menu handleDeleteClick={handleDeleteClick} />}
                </div>
              </div>
            )}
          </StyledUserCard.Content>
        </StyledUserCard>
      </Item.Group>
    </StyledUserDetails>
  );
};

export default UserDetails;
