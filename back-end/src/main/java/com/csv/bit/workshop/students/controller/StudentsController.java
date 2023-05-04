package com.csv.bit.workshop.students.controller;

import com.csv.bit.workshop.students.entity.Student;
import com.csv.bit.workshop.students.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentsController {

    private final StudentService studentService;

    @Autowired
    public StudentsController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student newStudent) {
        return studentService.addStudent(newStudent);
    }

    @GetMapping("/{studentId}")
    public Student getStudentById(@PathVariable Long studentId) {
        return studentService.getStudentById(studentId);
    }

    @DeleteMapping("/{studentId}")
    public ResponseEntity<Object> deleteStudent(@PathVariable Long studentId) {
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok().build();
    }

}
