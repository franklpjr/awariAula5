import "./UserListItem.css";

function UserListItem({ user, onClick }) {

    const handleOnClick = () => {
        onClick && onClick(user);
    }

    return (
        <li className="user-list-item-wrapper">
            <button className="user-list-item-button" onClick={handleOnClick}>{user.name}</button>
        </li>
    )
}

export default UserListItem;