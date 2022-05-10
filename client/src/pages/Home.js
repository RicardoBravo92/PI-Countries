import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  setOrder,
  setPage,
  filterCountryByContinent,
} from "../actions";
import CountryCardHome from "../components/CountryCardHome";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import Paged from "../components/Paged";

const Home = () => {
  const dispatch = useDispatch();
  const { countries, page } = useSelector((state) => state);

  const [, setOrd] = useState();
  let countriesPerPage = 10;
  const indexOfLastCountry = page * countriesPerPage - 1; 
  const indexOfFirstCountry =
    page === 1
      ? indexOfLastCountry - (countriesPerPage - 1)
      : indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleFilterContinent = (e) => {
    e.preventDefault();
    dispatch(filterCountryByContinent(e.target.value));
    dispatch(setPage(1));
    setOrd(e.target.value);
  };

  const handleOrdered = (e) => {
    e.preventDefault();
    dispatch(setOrder(e.target.value));
    setOrd(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCountries());
    dispatch(setPage(1));
  };

  return (
    <div className="home">
      <NavBar />
      <div className="homehead">
        <label>
      <SearchBar />
        <div className="allcountriesbutton"  onClick={handleClick}>
          <span>See all countries</span>
        </div>          
          </label>        
          <Filters
            handleClick={handleClick}
            handleOrdered={handleOrdered}
            handleFilterContinent={handleFilterContinent}
          />
      <Paged countriesPerPage={countriesPerPage} />
      </div>
      <div className="down">
        {countries.length === 0 ? (
          <p className="nocontries">no countries</p>
        ) : (
          (countries.length > 0 &&
            currentCountries?.map((country, index) => (
              <CountryCardHome
                key={index}
                id={country.id}
                name={country.name}
                image={country.image}
                continent={country.continent}
                nactivities={country.activities}
              />
            )))
        )}
      </div>
    </div>
  );
};

export default Home;
