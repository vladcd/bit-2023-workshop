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
          <label htmlFor="nrMatricol" className="form-label">
            Numar matricol*:
          </label>
          <input
            className="form-control"
            type="text"
            id="nrMatricol"
            name="nrMatricol"
            required
            onChange={set("nrMatricol")}
            value={values["nrMatricol"]}
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
                {univ.value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="anStudiu" className="form-label">
            Anul de studiu*:
          </label>
          <select
            className="form-control"
            id="anStudiu"
            name="anStudiu"
            required
            onChange={set("anStudiu")}
            value={values["anStudiu"]}
          >
            <option value=""> Selecteaza An de studiu</option>
            {years.map((year, index) => (
              <option value={year.id} key={index}>
                {year.value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="inscrisCamin"
              name="inscrisCamin"
              onChange={set("inscrisCamin")}
              checked={values["inscrisCamin"]}
            />
            <label className="form-check-label" htmlFor="inscrisCamin">
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
