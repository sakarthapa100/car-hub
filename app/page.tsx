import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { SearchParams } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

interface HomeProps {
  searchParams: SearchParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: parseInt(searchParams.year || '2000', 10),
    fuel: searchParams.fuel || '',
    limit: parseInt(searchParams.limit || '10', 10),
    model: searchParams.model || ''
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl front-extrabold">Car Catalogue</h1>
          <p>Explore the car you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(parseInt(searchParams.pageNumber || '10', 10)) / 10}
              isNext={(parseInt(searchParams.pageNumber || '10', 10)) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
