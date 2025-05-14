import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('Cargando...');

  useEffect(() => {
    fetch('http://localhost:4000/api/saludo')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(err => setMensaje("Error al conectar con el backend"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>{mensaje}</h1>
      <p>Esta es una interfaz hecha con React.</p>
    </div>
  );
}

export default App;
