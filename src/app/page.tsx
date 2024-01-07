"use client";
import React, { useEffect, useState } from 'react';
import Filters from "../components/Filters";
import Card from "../components/Card";
import Link from "next/link";

export default function Home() {

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    async function fetchHouses() {
      const response = await fetch('api/houses');
      const data = await response.json();
      setHouses(data);
    }

    fetchHouses();
  }, []);

  return (
    <>
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 mt-8">
        <Filters />

        {/* Contenedor de tarjetas de propiedades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {houses.map((house, index) => (
          <Link
            href={{
              pathname: "/house",
              query: {
                title: house.title,
                  description: house.description,
                  price: house.price,
                  location: house.location,
                  propertyType: house.propertyType,
                  bedrooms: house.bedrooms,
                  bathrooms: house.bathrooms,
                  area: house.area,
                  availability: house.availability,
              },
            }}
            key={index}
          >
            <Card
              title={house.title}
              description={house.description}
              price={house.price}
              location={house.location}
              propertyType={house.propertyType}
              bedrooms={house.bedrooms}
              bathrooms={house.bedrooms}
              area={house.area}
              availability={house.availability}
            />
          </Link>
        ))}
        </div>
      </div>
    </>
  );
}
