import React from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { Inicio } from "./Inicio";
import { Innova } from "./innova";
import { Soluciones } from "./soluciones";
import { Canales } from "./canales";
import { Contacto } from "./contacto";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import "./MainApp.css";

export const MainApp = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/innova" element={<Innova/>} />
        <Route path="/soluciones" element={<Soluciones/>} />
        <Route path="/canales" element={<Canales/>} />
        <Route path="/contacto" element={<Contacto/>} />

        <Route path="/*" element={<Navigate to='/inicio'/>} />
      </Routes>
      <Footer/>
    </>
  );
};
