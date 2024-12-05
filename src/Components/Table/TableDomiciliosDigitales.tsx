import { useQuery } from "react-query";

import { filterByData, getApiFn } from "../api/Api";
import BottomButtonsPages from "../BottomButtonsPages/BottomButtonsPages";
import { useState } from "react";

type Props = {
  itemsPerPage: number;
  filterData: filterByData;
  index: number;
};

const TableDomiciliosDigitales = (props: Props) => {
  const { itemsPerPage, filterData, index } = props;
  const [currentIndex, setCurrentIndex] = useState(index);

  const {
    data: Api,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Api", itemsPerPage, filterData, currentIndex],
    queryFn: (context) => {
      const queryKey = context.queryKey as [
        string,
        number,
        filterByData,
        number
      ];
      return getApiFn(queryKey);
    },
  });

  const onFowardHandler = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const onMovingIndexPosition = (currentIndex: number) => {
    setCurrentIndex(currentIndex);
  };

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
          {Api?.content.map((ApiResult) => {
            return (
              <tr key={ApiResult.id}>
                <td> </td>
                <td> {ApiResult.lastname}</td>

                <td> {ApiResult.name}</td>

                <td> {ApiResult.profile.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <BottomButtonsPages
        index={Api?.pagesInfo.pageNumber ?? 0}
        totalPages={Api?.pagesInfo.totalPages ?? 0}
        pageSize={Api?.pagesInfo.pageSize ?? 0}
        numberElements={Api?.pagesInfo.numberOfElements ?? 0}
        totalElements={Api?.pagesInfo.totalElements ?? 0}
        onFoward={onFowardHandler}
        onMovingIndexPosition={onMovingIndexPosition}
      ></BottomButtonsPages>
    </div>
  );
};
export default TableDomiciliosDigitales;

// import RowDomiciliosDigitales from "./RowDomiciliosDigitales";
// interface UserProfile {
//   id: number;
//   name: string;

//   lastname: string;

//   profile: {
//     id: number;
//     name: string;
//   };
// }

//every item
// const TableDomiciliosDigitales = () => {
//   const [itemsPerPage, setItemsPerPage] = useState<number>(15);

//   const { isLoading, isError } = useQuery({
//     queryKey: ["Api", itemsPerPage],
//     queryFn: (context) => {
//       const queryKey = context.queryKey as [string, number];
//       return Api(queryKey);
//     },
//   });

//

//const itemsPerPages = 15;

// Create a client
//const queryClient = useQueryClient({ context });

// const name = "amin";
// const lastname = "";
// const ocupationName = "";
// const orderBy = "lastname:asc";

// const pageNumber = 0;

// const numberPagesShown = 15;

// const { data, status, isLoading, isSuccess, isError } = useQuery({
//   queryKey: ["ApiDomAll"],
//   queryFn: ApiDomAll,
// });
// const userString = localStorage.getItem("usersDomDig");
// const parsedData: UserProfile = userString ? JSON.parse(userString) : null;

// console.log("data  ", data);
// console.log("status  ", status);
// console.log("isSuccess  ", isSuccess);
// console.log("staisLoadingtus  ", isLoading);
// console.log("isError  ", isError);

// const result = useQuery({
//   queryKey: ["ApiDomAll"],
//   queryFn: ApiDomAll,
// });
// console.log("result   are ", result);
// const userString = localStorage.getItem("usersDomDig");
// const parsedData: UserProfile = userString ? JSON.parse(userString) : null;
// console.log("Parsed Data:   ", parsedData);

// const users: UserProfile[] =
//   parsedData && parsedData.content && Array.isArray(parsedData.content)
//     ? parsedData.data
//     : [];
// //console.log("users Data:   ", users);
// if (!Array.isArray(users)) {
//   // console.error("Users data is not an array:", users);
//   return (
//     <div>
//       <p>Error: Users data is not available or is in an invalid format.</p>
//     </div>
//   );
// }
