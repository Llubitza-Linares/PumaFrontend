import {useEffect,useState} from 'react';
import { getBuses } from '../services/busServices';
import { Buses } from '../components/Buses';

export const Datos=()=> {
  const [response, setResponse] = useState();
  const getData = async () => {
    const dataDecks = await  getBuses();
    setResponse(dataDecks);
  }

  useEffect(()=>{
    getData();
  }, []);
  return <>
  {
    response && response.data.map((deck => {
      return <Buses ruta={deck.attributes.ruta} horario={deck.attributes.horario}></Buses>
    }))
  }
  </>;
}