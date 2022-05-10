import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../actions";
import ActivityCard from "../components/ActivityCard";
import CountryCard from "../components/CountryCard";
import "../styles/Country.css";
import NavBar from "../components/NavBar";

const Country = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);
  
  return (
    <div>
      <NavBar />
      <div className="countrypage">
        <div className="country">
          <CountryCard
            name={country.name}
            image={country.image}
            continent={country.continent}
            area={country.area}
            capital={country.capital}
            subregion={country.subregion}
            population={country.population}
          />
        </div>
        <div>
          <div className="activities">
            <p className="activitiestittle"> Activities</p>
            {country.activities?.length > 0 ? (
              country.activities?.map((activity, index) => (
                <ActivityCard
                  key={index}
                  name={activity.name}
                  difficulty={activity.difficulty}
                  duration={activity.duration}
                  season={activity.season}
                />
              ))
            ) : (
              <h3 className="noactivity">No activities for this country</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Country;
