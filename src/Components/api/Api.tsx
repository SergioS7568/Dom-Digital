import { FilterTypeApi } from "./FilterTypeApi";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export interface filterByData {
  lastname: string;
  name: string;
  profile: string;
}
//pageNumbers: number,

export const getApiFn = async (
  queryKey: [string, number, filterByData?, number?]
) => {
  console.log("you are in Api  ");

  const [, size, filterByData] = queryKey;
  let [, , , index] = queryKey;
  if (!index) index = 0;

  const searchParams = new URLSearchParams();

  // const paramsString = `${BACKEND_URL}`;

  if (filterByData) {
    const { name, lastname, profile } = filterByData;
    if (name) {
      searchParams.append("search", `name:${name}`);
    }
    if (lastname) {
      searchParams.append("search", `lastname:${lastname}`);
    }
    if (profile) {
      searchParams.append("search", `profile.name:${profile}`);
    }
  }

  searchParams.append("sort", `lastname:asc`);
  searchParams.append("paging", `${index},${size}`);
  const urlBackEnd = `${BACKEND_URL}${searchParams.toString()}`;

  console.log(urlBackEnd);

  const resultado = await fetch(urlBackEnd);
  const data = await resultado.json();

  if (!resultado.ok) {
    throw new Error("Error, failed to retrieve data");
  }
  const dataTransformed = FilterTypeApi(data.data);
  console.log(dataTransformed);
  return dataTransformed;
};

// import { FilterTypeApi } from "./FilterTypeApi";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// export interface filterByData{
//   lastname: string,
//   name: string,
//   profile: string,
//   //pageNumbers: number,
// }

// export const Api = async ( queryKey: [string, number, filterByData?, number?]

// ): Promise<Response> => {
//   console.log("you are in the API  ");
//   console.log(BACKEND_URL.toString());
//   const paramsString = `${BACKEND_URL}`;
//   const searchParams = new URLSearchParams();
//   let search = "";
//   2;

//   if (lastname) {
//     search += `lastname:${lastname},`;
//   }
//   if (name) {
//     search += `name:${name},`;
//   }
//   if (profile) {
//     search += `profile.name:${profile},`;
//   }

//   if (search.endsWith(",")) {
//     search = search.slice(0, -1);
//   }

//   searchParams.append("search", search);
//   if (sort) {
//     searchParams.append("sort", sort);
//   }
//   if (paging) {
//     searchParams.append("paging", paging);
//   }

//   console.log("searchParams  " + searchParams);
//   const testValue = paramsString + searchParams.toString();

//   // const result = fetch (`${BACKEND_URL}`);
//   // const data = await result.json();
//   const data = await fetch(`${testValue}`);
//   const result = await data.json();

//   //console.log(data);
//   return result;
// };

// export const ApiDomAll = async () => {
//   const data = await fetch(`${BACKEND_URL}`);
//   const result = await data.json();

//   //console.log(data);
//   return result;
// };
