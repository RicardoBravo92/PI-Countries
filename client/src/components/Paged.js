import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../actions";
import "../styles/Paged.css";

const Paged = ({ countriesPerPage }) => {
  const dispatch = useDispatch();
  const { countries, page } = useSelector((state) => state);

  const pageCountries = [];
  const changePage = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageCountries.push(i);
  }

  return (
    <div className="Paged">
      {pageCountries.length > 1 && (
        <div className="PrevNext">
          <div
            className="buttonpaginade"
            onClick={() => changePage(1)}
            disabled={page === 1}
          >Begin</div>
          <div
            className="buttonpaginade"
            onClick={() => changePage(page - 1)}
            disabled={page === 1}
          >Prev</div>

          <span>
            Page {page} of {pageCountries.length}
          </span>
          <div
            className="buttonpaginade"
            onClick={() => changePage(page + 1)}
            disabled={page >= pageCountries.length}
          >Next</div>
          <div
            className="buttonpaginade"
            onClick={() => changePage(pageCountries.length)}
            disabled={page >= pageCountries.length}
          >End</div>
        </div>
      )}
      <div className="ContainerPage">
        {pageCountries?.map((page) => (
          <span onClick={() => changePage(page)} key={page}>
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Paged;
