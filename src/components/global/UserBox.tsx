import Avatar from "../general/Avatar"

const user = {
    name: "John Doe",
    avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"

}

export default function UserBox(){
    //if user is not logged in show login button, else show user name and avatar
    return(
        <>
            {user ? (
                <div className="flex align-center">
                    <p>{user.name}</p>
                    <Avatar image={user.avatarUrl} name={user.name} size={30}/>
                </div>
            ) : (
                <button>Login</button>
            )}
        </>
    )
}