import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    axios
      .get("/empleados")
      .then((res) => {
        const data = res.data;
        setEmpleados(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="main-container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Sector</th>
            <th>Email</th>
          </tr>
        </thead>
        {empleados.map((empleado) => (
          <tr>
            <td>{empleado.name}</td>
            <td>{empleado.age}</td>
            <td>{empleado.sector}</td>
            <td>{empleado.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
