import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query userList {
    users {
      id
      name
      email
    }
  }
`;
const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log(loading, error, data)
  const { users } = data;
  return (
    <ul>
      {users.map((user) => (
        <li>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default UserList;
