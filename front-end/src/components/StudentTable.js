import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { keysMapping, universities, years } from "../data/studentModel";
import Actions from "./Actions";

async function getStudents() {
  const response = await fetch('http://localhost:8080/student', {
    method: "GET",
  });
  const responseJson = await response.json();
  return responseJson;
}

function mapValues(array, key) {
  let result = null;
  const filtered = array.filter((pair) => pair.id === key);

  if (filtered.length > 0) {
    result = filtered[0].value;
  }

  return result;
}

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const loadStudents = async () => {
                // Await make wait until that
                // promise settles and return its result
                const response = await getStudents();

                // After fetching data stored it in posts state.
                setStudents(response);
            };
    loadStudents();
  });

  function onStudentRemove(student) {
    const updatedData = students.map((obj) => {
      if (obj.id === student.id) {
        obj.deleted = true;
      }
      return obj;
    });
    setStudents(updatedData);
  }

  return (
    <div className="row-gap-3">
      <div className="row justify-content-center">
        <div className="col-2 justify-content-center">
          <Link to="/addStudent">
            <button type="button" className="btn btn-primary btn-lg">
              <i className="bi bi-person-plus icon-margin"></i>
              Adauga student
            </button>
          </Link>
        </div>
      </div>
      <div className="tableRow">
        <table className="table table-striped-columns table-hover">
          <thead>
            <tr>
              {Object.keys(keysMapping).map((key, index) => (
                <th scope="col" key={index}>
                  {keysMapping[key]}
                </th>
              ))}
              <th>Actiuni</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {students.map((student, index) => (
              <tr
                key={index}
                className={`${student.deleted === true ? "table-danger" : ""}`}
              >
                <th scope="row">{student.id}</th>
                <td>{student.nume}</td>
                <td>{student.prenume}</td>
                <td>{student.nr_matricol}</td>
                <td>{mapValues(universities, student.facultate)}</td>
                <td>{mapValues(years, student.an_studiu)}</td>
                <td>
                  <div>
                    <input
                      type="checkbox"
                      id="inscris_camin"
                      name="inscris_camin"
                      checked={student.inscris_camin}
                      readOnly
                    ></input>
                  </div>
                </td>
                <td>
                  <Actions
                    student={student}
                    onRemove={() => onStudentRemove(student)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
