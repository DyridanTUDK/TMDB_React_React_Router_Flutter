import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import useFetch from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  return (
    <main className="">
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movies.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
