import { useState } from "react";
import { AccesData } from "../acces-data/acces-data";
import { Confirmation } from "../confirmation/confirmation";
import { PersonalData } from "../personal-data/personal-data";

type PerData = {
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  checkbox: boolean;
};
type AccData = {
  username: string;
  password: string;
  repeatPassword: string;
  accountType: string;
};
export type FormPage = {
  step: number;
};

export type Data = PerData & AccData & FormPage;

export function UserForm() {
  const [count, setPage] = useState(1);
  const handlerClickPage = (incremento: number) => {
    setPage(count + incremento);
  };

  switch (count) {
    case 1:
      return (
        <>
          <button onClick={() => handlerClickPage(+1)}>Next</button>
          <PersonalData />
        </>
      ) as JSX.Element;
    case 2:
      return (
        <>
          <button onClick={() => handlerClickPage(-1)}>Previous</button>
          <button onClick={() => handlerClickPage(+1)}>Next</button>
          <AccesData />
        </>
      ) as JSX.Element;
    case 3:
      return (
        <>
          <button onClick={() => handlerClickPage(-1)}>Previous</button>
          <Confirmation />
        </>
      ) as JSX.Element;
    default:
      return (
        <>
          <button onClick={() => handlerClickPage(+1)}>Next</button>
          <PersonalData />
        </>
      );
  }
}
