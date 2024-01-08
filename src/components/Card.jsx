import Image from "next/image";

function Card({
  title,
  description,
  price,
  location,
  propertyType,
  bedrooms,
  bathrooms,
  area,
  availability,
  linkImage,
}) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Imagen de la propiedad */}
      <div className="mb-4">
        <Image
          src={linkImage}
          alt={title}
          width={200}
          height={200}
          layout="responsive"
        />
      </div>

      {/* Contenido principal */}
      <div className="space-y-2">
        {/* Título de la propiedad */}
        <h2 className="text-lg font-semibold">{title}</h2>

        {/* Descripción de la propiedad */}
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Información adicional */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800 mt-3">
        {/* Precio */}
        <div>
          <strong>Precio:</strong> ${price}
        </div>

        {/* Ubicación */}
        <div>
          <strong>Ubicación:</strong> {location}
        </div>

        {/* Habitaciones */}
        <div>
          <strong>Habitaciones:</strong> {bedrooms}
        </div>

        {/* Baños */}
        <div>
          <strong>Baños:</strong> {bathrooms}
        </div>

        {/* Disponibilidad */}
        <div>
          <strong>Disponibilidad:</strong>{" "}
          {availability ? "Está disponible" : "No está disponible"}
        </div>
      </div>
    </div>
  );
}

export default Card;
