import React from "react";
import BlocForm from "./components/BlocForm";
import BlocList from "./components/BlocList";
import BlocContextProvider from "../Context/BlocContext";
import "./BlocoDeNotas.css";

export const BlocoDeNotas = () => {
  return (
    <div className="body">
      <BlocContextProvider>
        <BlocForm />
        <BlocList />
      </BlocContextProvider>
    </div>
  );
};
