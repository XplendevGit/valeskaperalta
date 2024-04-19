"use client"
import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del correo electrónico, como enviarlo a una API
    console.log('Email enviado:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row space-x-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu email"
        className="flex-1 px-4 py-2 texto-general-normal border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d46d7c] focus:border-transparent rounded-full text-gray-300"
      />
      <button
        type="submit"
        className="btn-secundario"
      >
        Enviar
      </button>
    </form>
  );
};
export default EmailForm;