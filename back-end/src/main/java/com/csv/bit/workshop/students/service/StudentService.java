package com.csv.bit.workshop.students.service;

import com.csv.bit.workshop.students.entity.Student;
import com.csv.bit.workshop.students.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
public class StudentService {

    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(){
        var studentIterable = studentRepository.findAll();
        List<Student> result = new ArrayList<>();

        studentIterable.forEach(student -> result.add(student));

        return result;
    }

    public void addStudent(Student newStudent){
        studentRepository.save(newStudent);
    }

    public Student getStudentById(Long studentId){
        var existingStudent = studentRepository.findById(studentId);
        return existingStudent.orElseThrow();
    }
}
