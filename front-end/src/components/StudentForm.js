import React from "react";
import PropTypes from "prop-types";
import { universities, years } from "../data/studentModel";

function StudentForm({
  handleSubmit,
  values,
  set,
  handleCancel,
  action = "ADD",
}) {
  return (
    <div className="form-layout">
      <form onSubmit={(event) => handleSubmit(event)} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nume" className="form-label">
            Nume*:
          </label>
          <input
            className="form-control"
            type="text"
            id="nume"
            name="nume"
            required
            onChange={set("nume")}
            value={values.nume}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="prenume" className="form-label">
            Prenume*:
          </label>
          <input
            className="form-control"
            type="text"
            id="prenume"
            name="prenume"
            required
            onChange={set("prenume")}
            value={values.prenume}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="nr_matricol" className="form-label">
            Numar matricol*:
          </label>
          <input
            className="form-control"
            type="text"
            id="nr_matricol"
            name="nr_matricol"
            required
            onChange={set("nr_matricol")}
            value={values["nr_matricol"]}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="facultate" className="form-label">
            Facultate*:
          </label>
          <select
            className="form-control"
            id="facultate"
            name="facultate"
            required
            onChange={set("facultate")}
            value={values.facultate}
          >
            <option value=""> Selecteaza facultate</option>
            {universities.map((univ, index) => (
              <option value={univ.id} key={index}>
                {univ.nume}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="an_studiu" className="form-label">
            Anul de studiu*:
          </label>
          <select
            className="form-control"
            id="an_studiu"
            name="an_studiu"
            required
            onChange={set("an_studiu")}
            value={values["an_studiu"]}
          >
            <option value=""> Selecteaza An de studiu</option>
            {years.map((year, index) => (
              <option value={year} key={index}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="inscris_camin"
              name="inscris_camin"
              onChange={set("inscris_camin")}
              checked={values["inscris_camin"]}
            />
            <label className="form-check-label" htmlFor="inscris_camin">
              Inscris in camin
            </label>
          </div>
        </div>
        <div className="col-auto">
          <button className="col btn btn-primary" type="submit">
            <i className="bi bi-check-lg icon-margin"></i>
            {action === "ADD" ? "Adaugare student" : "Salveaza modificari"}
          </button>
        </div>
        <div className="col-auto">
          <button className="col btn btn-danger" onClick={() => handleCancel()}>
            <i className="bi bi-x-circle icon-margin"></i>Anulare
          </button>
        </div>
      </form>
    </div>
  );
}

StudentForm.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  set: PropTypes.func,
  handleCancel: PropTypes.func,
  action: PropTypes.string,
};

export default StudentForm;
