import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buses } from './Buses';

const Datos: React.FC = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/decks');
        const busData = response.data;
        setBuses(busData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBuses();
  }, []);

  return (
    <div>
      <h3>Lista de Buses:</h3>
      <Buses buses={buses} />
    </div>
  );
};

export default Datos;