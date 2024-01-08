"use client";

// Importaciones necesarias
import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Card from "../components/Card";
import Link from "next/link";

export default function Home() {
  const [houses, setHouses] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    priceMin: "",
    priceMax: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
  });

  useEffect(() => {
    async function fetchHouses() {
      const response = await fetch("api/houses");
      const data = await response.json();
      setHouses(data);
    }

    fetchHouses();
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const filteredHouses = houses.filter((house) => {
    return (
      (filters.location
        ? house.location.toLowerCase().includes(filters.location.toLowerCase())
        : true) &&
      (filters.priceMin ? house.price >= parseFloat(filters.priceMin) : true) &&
      (filters.priceMax ? house.price <= parseFloat(filters.priceMax) : true) &&
      (filters.area ? house.area >= parseFloat(filters.area) : true) &&
      (filters.bedrooms
        ? house.bedrooms === parseInt(filters.bedrooms)
        : true) &&
      (filters.bathrooms
        ? house.bathrooms === parseInt(filters.bathrooms)
        : true) &&
      // Agregar esta línea
      (house.availability ? true : false)
    );
  });

  return (
    <>
      <div className="container mx-auto px-4 mt-8">
        <Filters filters={filters} onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {filteredHouses.map((house, index) => (
            <Link
              href={{
                pathname: "/house",
                query: { ...house },
              }}
              key={index}
            >
              <Card {...house} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
