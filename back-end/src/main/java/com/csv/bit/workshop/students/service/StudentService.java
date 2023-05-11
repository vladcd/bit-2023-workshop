package com.csv.bit.workshop.students.service;

import com.csv.bit.workshop.students.entity.Student;
import com.csv.bit.workshop.students.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents() {
        var studentIterable = studentRepository.findAll();
        List<Student> result = new ArrayList<>();

        studentIterable.forEach(student -> result.add(student));

        return result;
    }

    public Student addStudent(Student newStudent) {
        return studentRepository.save(newStudent);
    }

    public Student getStudentById(Long studentId) {
        var existingStudent = studentRepository.findById(studentId);
        return existingStudent.orElseThrow();
    }

    public void deleteStudent(Long studentId) {
        var existingStudent = getStudentById(studentId);
        existingStudent.setDeleted(Boolean.TRUE);
        studentRepository.save(existingStudent);
    }

    public List<Student> getStudentsByName(String name) {
        return studentRepository.findByNume(name);
    }

    public Student updateStudent(Student updatedStudent, Long id) {
        Student existingStudent = getStudentById(id);
        existingStudent.setNume(updatedStudent.getNume());
        existingStudent.setPrenume(updatedStudent.getPrenume());
        existingStudent.setFacultate(updatedStudent.getFacultate());
        existingStudent.setAnStudiu(updatedStudent.getAnStudiu());
        existingStudent.setNrMatricol(updatedStudent.getNrMatricol());
        existingStudent.setInscrisCamin(updatedStudent.getInscrisCamin());
        return studentRepository.save(existingStudent);
    }
}
