import React, { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const BASIC_URL = `https://apiedictos.justucuman.gov.ar/api/user?sort=lastname:asc&paging=0,15`;
const Apiedictos = () => {
  const [users, setUsers] = useState([]);
  const [valueCherryPicker, setValueCherryPicker] = useState("");
  //console.log(BACKEND_URL);
  const notEmtpyRequest = "search=";

  const nameQuery = "name:";
  const surnameQuery = "lastname:";
  const typeQuery = "profile.name:";
  const numberPagesQuery = "paging=";

  const nameValue = "";
  const surnameValue = "";
  const typeValue = "PERITO/OTRO";
  const numberPagesValue = "0,15";

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}${valueCherryPicker}`);
      //console.log(res);
      const data = await res.json();

      setUsers(data);
      localStorage.setItem("usersDomDig", JSON.stringify(data));
      console.log(JSON.stringify(data.data.content));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (valueCherryPicker) {
      fetchUsers();
    }
  }, [valueCherryPicker]);

  //   const filteringByParts = (
  //     nameValue: string,
  //     surnameValue: string,
  //     typeValue: string
  //   ) => {
  //     if (nameValue && nameValue.trim()) {
  //       if (surnameValue && surnameValue.trim()) {
  //         if (typeValue && typeValue.trim()) {
  //           const resultado = `${BACKEND_URL}${notEmtpyRequest}${nameQuery}${nameValue},${surnameQuery}${surnameValue},${typeQuery}${typeValue}&sort=lastname:asc&${numberPagesQuery}${numberPagesValue}`;
  //           console.log("  1  " + resultado);
  //         } else {
  //           const resultado = `${BACKEND_URL}${notEmtpyRequest}${nameQuery}${nameValue},${surnameQuery}${surnameValue}&sort=lastname:asc&${numberPagesQuery}${numberPagesValue}`;
  //           console.log("  2  " + resultado);
  //         }
  //       } else {
  //         const resultado = `${BACKEND_URL}${notEmtpyRequest}${nameQuery}${nameValue}&sort=lastname:asc&${numberPagesQuery}${numberPagesValue}`;
  //         console.log("  3  " + resultado);
  //       }
  //     } else {
  //       const resultado = `${BASIC_URL}`;
  //       console.log("  4  " + resultado);
  //     }
  //   };

  const cherryPickingParts = (
    e: React.FormEvent<HTMLFormElement>,
    nameValue: string,
    surnameValue: string,
    typeValue: string,
    numberPagesValue: string
  ) => {
    e.preventDefault();

    const statement_name = Boolean(nameValue && nameValue.trim());
    const statement_last_name = Boolean(surnameValue && surnameValue.trim());
    const statement_type_name = Boolean(typeValue && typeValue.trim());

    console.log("statement_name:", statement_name);
    console.log("statement_last_name:", statement_last_name);
    console.log("statement_type_name:", statement_type_name);

    if (statement_name || statement_last_name || statement_type_name) {
      const initualValue = `${notEmtpyRequest}`;
      // console.log("initualValue  " + initualValue);
      const PartsQuery = [];
      const StructureQuery = [initualValue];
      if (statement_name) {
        const addningNameValue = `${nameQuery}${nameValue}`;
        PartsQuery.push(addningNameValue);
        // console.log("addningNameValue  " + addningNameValue);
      }
      if (statement_last_name) {
        const addningLastNameValue = `${surnameQuery}${surnameValue}`;
        PartsQuery.push(addningLastNameValue);
        // console.log("addningLastNameValue  " + addningLastNameValue);
      }
      if (statement_type_name) {
        const addningTypeNameValue = `${typeQuery}${typeValue}`;
        PartsQuery.push(addningTypeNameValue);
        // console.log("addningTypeNameValue  " + addningTypeNameValue);
      }

      const endPartQuery = `&sort=lastname:asc&${numberPagesQuery}${numberPagesValue}`;

      const queryCharged = PartsQuery.join(",");

      StructureQuery.push(queryCharged);

      StructureQuery.push(endPartQuery);
      const queryFinished = StructureQuery.join("");

      console.log(" queryFinished  :    " + queryFinished);
      // console.log("Pages  " + valuePicked);

      setValueCherryPicker(queryFinished);
      //console.log(" valuePicked " + valuePicked);
    }

    console.log("4 you are here ");
    return;
  };

  //filteringByParts(nameValue, surnameValue, typeValue);

  const isLoading = users.length === 0;
  return (
    <div>
      <form
        className="form"
        onSubmit={(e) =>
          cherryPickingParts(
            e,
            nameValue,
            surnameValue,
            typeValue,
            numberPagesValue
          )
        }
      >
        {isLoading ? <p>vacio</p> : <p>lleno</p>}
        <input type="submit" />
      </form>
    </div>
  );
};
export default Apiedictos;
