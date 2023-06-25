import React from "react";
import "./Styles/SearchStyles.css";

import { BiSearch } from "react-icons/bi";
export default function SearchBar() {
  return (
    <div className="container ">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="form">
            <i className="fa fa-search">
              <BiSearch />
            </i>
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search by name or email"
            />
          </div>
        </div>
        <span className="download">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height="16"
            fill="currentColor"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
