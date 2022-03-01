import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/*
const deafultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso online', completed: false },
  { text: 'Enviar correo electrónico', completed: true },
  { text: 'Llamada telefonica', completed: false }
];
*/


function App() {

  
  return (
    
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
}

export default App;