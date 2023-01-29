import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/usersSelector";
import { UserListItem } from "Components/UserListItem/UserListItem";

export const UsersList = () => {
	const users = useSelector(selectUsers);
	console.log(users);
	return users.map(user => {
		return <UserListItem />;
	});
}