import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  Header,
  Icon,
  Image,
  InputOnChangeData,
  Item,
} from "semantic-ui-react";
import { saveUser, UserType } from "../../redux/reducers/user/user";
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

  useEffect(() => {
    setUserName(user.name);
  }, [user]);

  const handleChange = (event: InputOnChangeData) => {
    setUserName(event.target.value);
  };

  const handleSubmit = () => {
    const newUser = { ...user, isNew: false, name: userName };
    dispatch(saveUser(newUser));
    setActiveUser(newUser);
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
                <Header>{userName}</Header>
              )}
              <div>
                Circles: <Icon name="plus circle" />
              </div>
            </div>
            <div
              style={{
                fontSize: 25,
                cursor: "pointer",
                position: "absolute",
                top: 20,
                right: 16,
              }}
              onClick={onThreeDotsClick}
            >
              ...
            </div>
          </StyledUserCard.Content>
        </StyledUserCard>
      </Item.Group>
    </StyledUserDetails>
  );
};

export default UserDetails;
