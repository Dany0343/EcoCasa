"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import {GoogleMap, useLoadScript, Marker} from
import Modal from "react-modal";
import axios from "axios";

export default function House() {
  // Se usa el hook
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const location = searchParams.get("location");
  const propertyType = searchParams.get("propertyType");
  const description = searchParams.get("description");
  const bedrooms = searchParams.get("bedrooms");
  const bathrooms = searchParams.get("bathrooms");
  const area = searchParams.get("area");
  const availability = searchParams.get("availability");
  const linkImage = searchParams.get("linkImage");
  const phone = searchParams.get("phone");

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-6xl mx-auto p-4 md:p-6">
      <div className="w-full md:w-1/2">
        <Image
          alt={description}
          className="object-cover w-full rounded-lg"
          height="500"
          src={linkImage}
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width="500"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-gray-500">{location}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <BedIcon className="w-6 h-6 mr-2" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <BathIcon className="w-6 h-6 mr-2" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <CarIcon className="w-6 h-6 mr-2" />
            <span>{propertyType}</span>
          </div>
          <div className="flex items-center">
            <HomeIcon className="w-6 h-6 mr-2" />
            <span>{area} m2</span>
          </div>
          <div className="flex items-center">
            <HomeIcon className="w-6 h-6 mr-2" />
            <span>{availability ? "Disponible" : "No disponible"}</span>
          </div>
        </div>
        <p className="text-gray-500">{description}</p>
        <button
          onClick={async () => {
            setShowModal(true);
            await axios.put(`/api/houses/${id}`, { availability: false });
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Comprar
        </button>
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
              <h2 className="text-xl font-bold text-gray-900">
                Gracias por el interes, para concretar la compra debes contactar
                al vendedor
              </h2>
              <h2 className="mt-2 text-xl font-bold text-gray-900">
                Ahora la casa esta apartada.
              </h2>
              <p className="mt-4 text-gray-600">
                El número de teléfono del vendedor es: {phone}
              </p>
              <Link href={"/"}>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Cerrar
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

function BathIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  );
}

function BedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
