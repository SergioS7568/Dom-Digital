import RowDomiciliosDigitales from "./RowDomiciliosDigitales";
interface UserProfile {
  id: number;
  name: string;

  lastname: string;

  profile: {
    id: number;
    name: string;
  };
}

const TableDomiciliosDigitales = () => {
  const userString = localStorage.getItem("usersDomDig");
  const parsedData: UserProfile = userString ? JSON.parse(userString) : null;
  console.log("Parsed Data:   ", parsedData);

  const users: UserProfile[] =
    parsedData && parsedData.content && Array.isArray(parsedData.content)
      ? parsedData.data
      : [];
  console.log("users Data:   ", users);
  if (!Array.isArray(users)) {
    console.error("Users data is not an array:", users);
    return (
      <div>
        <p>Error: Users data is not available or is in an invalid format.</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <td>Apellido</td>
            <td>Nombre</td>
            <td>Perfil</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index: number) => {
            return (
              <RowDomiciliosDigitales
                users={user}
                key={user.id}
              ></RowDomiciliosDigitales>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TableDomiciliosDigitales;
