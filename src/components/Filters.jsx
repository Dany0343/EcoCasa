import React from 'react';

function Filters() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Filtros principales en una fila */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
        {/* Búsqueda por ubicación */}
        <input
          className="form-input border p-2 rounded w-full"
          type="text"
          placeholder="Buscar por colonia, zona o ciudad"
        />

        {/* Rango de precios */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            className="form-input border p-2 rounded w-full md:w-1/2"
            type="number"
            placeholder="Precio Mínimo"
          />
          <input
            className="form-input border p-2 rounded w-full md:w-1/2"
            type="number"
            placeholder="Precio Máximo"
          />
        </div>
        <input
            className="form-input border p-2 rounded w-full md:w-1/2"
            type="number"
            placeholder="Area"
          />
      </div>

      {/* Filtros secundarios en una segunda fila */}
      <div className="flex flex-col md:flex-row w-full gap-4 mb-4">
        {/* Selección de habitaciones */}
        <select className="form-select border p-2 rounded w-full">
          <option value="">Habitaciones</option>
          <option value="1">1 Habitación</option>
          <option value="2">2 Habitaciones</option>
          <option value="3">3 Habitaciones</option>
          <option value="4">4+ Habitaciones</option>
        </select>

        {/* Selección de baños */}
        <select className="form-select border p-2 rounded w-full">
          <option value="">Baños</option>
          <option value="1">1 Baño</option>
          <option value="2">2 Baños</option>
          <option value="3">3+ Baños</option>
        </select>
      </div>

      {/* Botón de búsqueda */}
      {/* <div className="flex justify-center">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition">
          Buscar
        </button>
      </div> */}
    </div>
  );
}

export default Filters;
