 import "../styles/Filters.css";

const Filters = ({ handleOrdered, handleFilterContinent }) => {
  return (
    <div className="Filters">
      <select onChange={handleFilterContinent}>
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Ocenia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
      </select>
      <select onChange={handleOrdered}>
        <option value="">Select order</option>
        <option value="Asc">Name Asc</option>
        <option value="Desc">Name Desc</option>
        <option value="Min">Population Asc</option>
        <option value="Max">Population Desc</option>
      </select>
    </div>
  );
};

export default Filters;
