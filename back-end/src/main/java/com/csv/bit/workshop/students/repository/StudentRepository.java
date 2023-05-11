package com.csv.bit.workshop.students.repository;

import com.csv.bit.workshop.students.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long> {

    List<Student> findByNume(String nume);
}
