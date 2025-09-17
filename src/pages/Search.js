import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [SearchParams] = useSearchParams();
  const queryTerm = SearchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main className="">
      <section>
        <p className="text-3xl text-gray-7000 dark:text-white">
          {movies.length === 0
            ? `No result found for ${queryTerm}`
            : `${movies.length} results for "${queryTerm}"`}
        </p>
      </section>
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
