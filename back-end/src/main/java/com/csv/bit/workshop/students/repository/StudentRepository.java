package com.csv.bit.workshop.students.repository;

import com.csv.bit.workshop.students.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long> {
}
