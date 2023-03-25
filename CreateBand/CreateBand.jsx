/* 6️⃣ ***COMPONENTE CREATEBAND*** 6️⃣

Implementar el componente CreateBand. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/
import React from 'react';

const CreateBand = () => {
  const [input, setInput] = React.useState({
    name: "",
    origin: "",
    description: "",
    tickets: 0,
  });

  const [errors, setErrors] = React.useState({
    name: "",
    origin: "",
    description: "",
    tickets: "",
  });

  const validate = (input) => {
    const errors = {};
    if (input.name.length > 30 || input.origin.length > 30) {
      errors.name = <p>Nombre u Origen demasiado largo</p>;
    }
    if (input.tickets < 0) {
      errors.tickets = <p>Los tickets deben ser un número positivo</p>;
    }
    return errors;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });

    setErrors(validate({ ...input, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        <label htmlFor="">Origin: </label>
        <input type="text" name="origin" onChange={handleChange} />
        <label htmlFor="">Description: </label>
        <textarea type="text" name="description" onChange={handleChange} />
        <label htmlFor="">Tickets: </label>
        <input type="number" name="tickets" onChange={handleChange} />
        <button type="submit">Create Band</button>
      </form>
    </div>
  );
};

export default CreateBand;