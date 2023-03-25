/* 8️⃣ ***COMPONENTE BANDDETAIL*** 8️⃣

Implementar el componente BandDetail. En este ejercicio tendrás que renderizar las diferentes propiedades 
de la banda.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" de la banda cuando se monta el componente. Luego, traer esa 
información de tu estado global.

🟢 Tendrás que renderizar algunos datos de la banda correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗Tienes que usar hooks.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      -'React.useState' - 'React.useEffect';
*/


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchBand } from 'react-bands';
import * as actions from '../../redux/actions';



const BandDetail = (props) => {
  let bandId = props.match.params.id;
  const dispatch = useDispatch();
  const state = useSelector(state => state.BandDetail);

  useEffect(() => {
    dispatch(actions.getBandDetail(bandId));
  }, [dispatch, bandId]);

  return (
    <div>
      <h1>{state.name}</h1>
      <img src={state.image} alt={state.name} />
      <h5>Entradas disponibles: {state.tickets}</h5>
      <h5>Precio: {state.price}</h5>
      <h5>Fecha del evento: {state.functionDate}</h5>
      <h5>Origen de la banda: {state.origin}</h5>
      <h5>Integrantes: {state.members.join(" ")}</h5>
      <h3>{state.description}</h3>
    </div>
  );
};

export default BandDetail;