import "./UserList.css";
import UserListItem from "../UserListItem";

    function UserList({users = [], onItemClick}) {
 
        const handleOnItemClick=(user) => {
           onItemClick && onItemClick(user);
        }

        const usersMap = users.map ((user) => {
        return (
          <UserListItem key={user.id} user={user} onClick={handleOnItemClick}/>
        )
        });
 
    return (
        <div>
            {users.length > 0 ? (
                <ul className="user-list-wrapper">
                    {usersMap}
                </ul>
            ) : (
                <p>Nenhum usuário cadastrado.</p>
            )}   
      </div>
    )
}



export default UserList;