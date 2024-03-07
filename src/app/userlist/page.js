const getUserList = async () => {

  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users;
};
export default async function UserList() {
  const usersData = await getUserList();
//   console.log("users data", usersData);

  return (
    <>
      <h1>Detailed information of user</h1>
      {
        usersData.map((item,index)=>{
            return(
                <p key={index}>{item.id}-{item.firstName} {item.lastName}</p>
            )
        })
      }
    </>
  );
}
