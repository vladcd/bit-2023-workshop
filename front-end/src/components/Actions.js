import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Actions({ student, onRemove }) {
  const [isDisabled, setIsDisabled] = useState(student.deleted === true);

  function removeFromDB(student) {
    // const response = await fetch('', {
    //   method: 'DELETE',
    //   body: JSON.stringify(values)
    // });
    // if (response.status !== 200) {
    //   throw new Error(`Request failed: ${response.status}`);
    // }
  }

  async function handleRemove(student) {
    if (
      window.confirm(
        `Esti sigur ca vrei sa stergi studentul ${student.nume} ${student.prenume} cu id-ul: ${student.id}?`
      )
    ) {
      try {
        await removeFromDB(student);
      } catch (e) {
        alert(`Stergerea nu a reusit! ${e.message}`);
      }

      onRemove();
      setIsDisabled(true);
      alert(`Studentul a fost sters din inventar`);
    }
  }

  return (
    <div className="actionColumn">
      <Link to={isDisabled ? '' : `/editStudent?id=${student.id}`}>
        <button type="button" className="btn btn-success" disabled={isDisabled}>
          <i className="bi bi-gear-fill"></i>
          Edit
        </button>
      </Link>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleRemove(student)}
        disabled={isDisabled}
      >
        <i className="bi bi-person-x icon-margin"></i>
        Sterge
      </button>
    </div>
  );
}

Actions.propTypes = {
  student: PropTypes.object.isRequired,
  onRemove: PropTypes.func,
};

export default Actions;
