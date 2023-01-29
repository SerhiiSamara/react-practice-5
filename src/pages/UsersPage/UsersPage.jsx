import { Button } from "Components/Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from '../../redux/users/usersOperations';
import { UsersList } from "Components/UsersList/UsersList";

export const UsersPage = () => {
	const [isListShow, setIsListShow] = useState(false);
	const dispatch = useDispatch();
	const showUsersList = () => {
		setIsListShow(true);
		dispatch(fetchUsers());
	}
	return (
		<>
			{isListShow ? <UsersList/> : <Button text='Show users' clickHandler={showUsersList}/>}
		</>
	);
}