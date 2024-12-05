import React from "react";

interface UserProfile {
  id: number;
  name: string;
  lastname: string;
  profile: {
    id: number;
    name: string; // Single user object
  };
}

interface RowDomiciliosDigitalesProps {
  users: UserProfile; // Single user object
}

const RowDomiciliosDigitales: React.FC<RowDomiciliosDigitalesProps> = ({
  users,
}) => {
  //console.log(users);
  return (
    <tr>
      <td>{users.lastname}</td>
      <td>{users.name}</td>
      <td>{users.profile.name}</td>
    </tr>
  );
};
export default RowDomiciliosDigitales;
