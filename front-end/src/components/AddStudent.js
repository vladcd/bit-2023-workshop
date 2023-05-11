import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { students } from "../data/studentModel";

import StudentForm from "./StudentForm";

function getStudent(id) {
  let student = students.filter((stud) => stud.id === id)[0];
  if (student) {
    return {
      id: student.id,
      nume: student.nume,
      prenume: student.prenume,
      nr_matricol: student.nr_matricol,
      facultate: student.facultate,
      an_studiu: student.an_studiu,
      inscris_camin: student.inscris_camin,
      deteled: student.deleted
    };
  }
  return null;
}

function AddStudent() {
  const navigate = useNavigate();
  const { search } = useLocation();
  let isEdit = false;

  const id = new URLSearchParams(search).get("id");
  let student = null;

  if (id) {
    isEdit = true;
    student = getStudent(parseInt(id, 10));

    if (student.deteled ) {
      alert("Studentul este `soft-deleted`! Nu puteti edita");
      navigate("/");
    }
  }

  const initialValues = {
    id: Math.max(...students.map((stud) => stud.id)) + 1,
    nume: "",
    prenume: "",
    nr_matricol: "",
    facultate: "",
    an_studiu: "",
    inscris_camin: false,
  };

  const [values, setValues] = useState(student || initialValues);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  function addOrReplace(arr, newObj) {
    const index = arr.findIndex((e) => e.id === newObj.id);

    if (index === -1) {
      arr.push(newObj);
    } else {
      arr[index] = newObj;
    }
  }

  const saveFormData = async () => {
    // const response = await fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify(values)
    // });
    const response = {
      status: 200,
    };

    addOrReplace(students, values);

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
      action={isEdit ? "EDIT" : "ADD"}
    />
  );
}

export default AddStudent;
