import React, { useState } from "react";
import { useNavigate } from "react-router";
import { students } from "../data/studentModel";

import StudentForm from "./StudentForm";

function AddStudent() {
  const navigate = useNavigate();

  const initialValues = {
    id: Math.max(...students.map((stud) => stud.id)) + 1,
    nume: "",
    prenume: "",
    nr_matricol: "",
    facultate: "",
    an_studiu: "",
    inscris_camin: false,
  };

  const [values, setValues] = useState(initialValues);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const saveFormData = async () => {
    // const response = await fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify(values)
    // });
    const response = {
      status: 200,
    };
    students.push(values);

    if (response.status !== 200) {
      throw new Error(
        `Salvarea datelor nu a fost posibila: ${response.status}`
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData();
      setValues(initialValues);
      navigate("/");
    } catch (e) {
      alert(`Salvarea datelor nu a fost posibila! ${e.message}`);
    }
  };

  const handleCancel = () => {
    if (window.confirm(`Esti sigur ca vrei sa anulezi modificarile?`)) {
      setValues(initialValues);
      navigate("/");
    }
  };

  return (
    <StudentForm
      handleSubmit={handleSubmit}
      values={values}
      set={set}
      handleCancel={handleCancel}
      action="ADD"
    />
  );
}

export default AddStudent;
