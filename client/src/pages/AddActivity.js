import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivities } from "../actions";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/AddActivity.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (parseInt(input.duration) <= 0 || input.duration === "") {
    errors.duration = "Duration is required";
  }
  if (!input.difficulty || input.difficulty === "0") {
    errors.difficulty = "Difficulty is required";
  }
  if (!input.season || input.season === "Season") {
    errors.season = "Season is required";
  }
  if (input.countries.length === 0) {
    errors.countries = "Select one or more countries for the activity";
  }
  return errors;
}
const AddActivity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setErrors(validate(input));
  }, []);

  function handleChange(e) {
    setInput((prevData) => {
      const state = {
        ...prevData,
        [e.target.name]: e.target.value,
      };

      const validations = validate(state);
      setErrors(validations);

      return state;
    });
  }

  function handleSelectSeason(e) {
    setInput({
      ...input,
      season: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        season: e.target.value,
      })
    );
  }

  function handleSelectCountries(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });

    setErrors(
      validate({
        ...input,
        countries: [...input.countries, e.target.value],
      })
    );
  }

  function handleDelete(c) {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== c),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("complete all the form requirements");
    } else {
      dispatch(postActivities(input));
      alert("Activity created!");

      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      navigate("/home");
    }
  }

  return (
    <div>
      <NavBar />

      <div className="containerForm">
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <div className="titleform">Create Activity</div>

          <div className="div">
            <label>Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="Activity name"
              onChange={(e) => handleChange(e)}
              className="inputSearch"
            />

            {errors.name && <p className="errors">{errors.name}</p>}
          </div>

          <div className="div">
            <label>Duration:</label>
            <input
              type="number"
              min="1"
              value={input.duration}
              name="duration"
              placeholder="how many days take?"
              onChange={(e) => handleChange(e)}
              className="inputSearch"
            />

            {errors.duration && <p className="errors">{errors.duration}</p>}
          </div>

          <div className="div">
            <label>Difficulty:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={input.difficulty}
              name="difficulty"
              placeholder="1 to 5"
              onChange={(e) => handleChange(e)}
              className="inputSearch"
            />

            {errors.difficulty && <p className="errors">{errors.difficulty}</p>}
          </div>

          <div className="div">
            <label>Season:</label>
            <select onClick={(e) => handleSelectSeason(e)}>
              <option className="defaultValue">Season</option>
              <option name="season" value="winter">
                Winter
              </option>
              <option name="season" value="autumn">
                Autumn
              </option>
              <option name="season" value="spring">
                Spring
              </option>
              <option name="season" value="summer">
                Summer
              </option>
            </select>
            {errors.season && <p className="errors">{errors.season}</p>}
          </div>

          <div className="div">
            <label>Country:</label>
            <select onChange={(e) => handleSelectCountries(e)}>
              <option className="defaultValue">Please Choose...</option>
              {countries.map((c) => {
                return (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                );
              })}
            </select>

            <div className="cform">
              {input.countries.map((c) => {
                return (
                  <div key={c} className="arrayCountries">
                    <h4>
                      {c}{" "}
                      <button
                        onClick={() => handleDelete(c)}
                        className="buttonDelete"
                      >
                        X
                      </button>{" "}
                    </h4>
                  </div>
                );
              })}
            </div>

            {errors.countries && <p className="errors">{errors.countries}</p>}
          </div>

          <button type="submit" className="buttonSubmit">
            {" "}
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddActivity;
