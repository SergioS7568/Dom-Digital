const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Api = async (
  lastname: string,
  name: string,
  profile: string,
  sort: string,
  paging: string
): Promise<string> => {
  console.log("you are in the API  ");
  console.log(BACKEND_URL.toString());
  const paramsString = `${BACKEND_URL}`;
  const searchParams = new URLSearchParams();
  let search = "";
  2;

  if (lastname) {
    search += `lastname:${lastname},`;
  }
  if (name) {
    search += `name:${name},`;
  }
  if (profile) {
    search += `profile.name:${profile},`;
  }

  if (search.endsWith(",")) {
    search = search.slice(0, -1);
  }

  searchParams.append("search", search);
  if (sort) {
    searchParams.append("sort", sort);
  }
  if (paging) {
    searchParams.append("paging", paging);
  }

  console.log("searchParams  " + searchParams);
  const testValue = paramsString + searchParams.toString();

  // const result = fetch (`${BACKEND_URL}`);
  // const data = await result.json();

  return testValue;
};
