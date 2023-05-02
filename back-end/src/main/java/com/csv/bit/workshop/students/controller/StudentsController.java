package com.csv.bit.workshop.students.controller;

import com.csv.bit.workshop.students.entity.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentsController {

    @GetMapping
    public List<Student> getStudents(){
        return new ArrayList<>();
    }


}
