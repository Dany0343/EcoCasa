import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 mt-8">
        {/* Filtros de búsqueda */}
        <div className="flex flex-col md:flex-row md:items-end bg-white p-4 rounded-md shadow-md">
          <div className="flex flex-col md:flex-row w-full gap-4 mb-4 md:mb-0">
            <input
              className="form-input border p-2 rounded w-full"
              type="text"
              placeholder="Busca por colonia, zona o ciudad"
            />
            <input
              className="form-input border p-2 rounded w-full"
              type="date"
              placeholder="Fecha de entrega"
            />
            <div className="flex flex-row justify-between w-full">
              <input
                className="form-input border p-2 rounded w-1/2"
                type="number"
                placeholder="Precio Min."
              />
              <input
                className="form-input border p-2 rounded w-1/2"
                type="number"
                placeholder="Precio Max."
              />
            </div>
          </div>

          {/* Dropdowns de filtros */}
          <div className="flex flex-col md:flex-row w-full gap-4">
            <select className="form-select border p-2 rounded w-full">
              <option>Terreno</option>
              <option>Construcción</option>
            </select>
            <select className="form-select border p-2 rounded w-full">
              <option>Plantas</option>
              <option>2 Plantas</option>
              <option>3 Plantas</option>
            </select>
            <select className="form-select border p-2 rounded w-full">
              <option>Habitaciones</option>
              <option>2 Habitaciones</option>
              <option>3 Habitaciones</option>
            </select>
          </div>

          {/* Botón de búsqueda */}
          <div className="flex justify-center md:justify-start md:ml-4">
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition">
              Buscar
            </button>
          </div>
        </div>

        {/* Contenedor de tarjetas de propiedades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Tarjetas de propiedades, reemplazar con mapeo de datos */}
          {/* Tarjeta 1 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <Image
              src="/ecocasa_stock2.png"
              alt="Casa"
              width={200}
              height={200}
              layout="responsive"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold mt-2">Casa en Pre-venta</h2>
              {/* Añadir más detalles de la propiedad */}
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <Image
              src="/ecocasa_stock3.png"
              alt="Casa"
              width={200}
              height={200}
              layout="responsive"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold mt-2">Casa en venta</h2>
              {/* Añadir más detalles de la propiedad */}
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <Image
              src="/ecocasa_stock4.png"
              alt="Casa"
              width={200}
              height={200}
              layout="responsive"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold mt-2">Casa vendida</h2>
              {/* Añadir más detalles de la propiedad */}
            </div>
          </div>
          {/* Repetir por cada propiedad */}
        </div>
      </div>
    </>
  );
}
