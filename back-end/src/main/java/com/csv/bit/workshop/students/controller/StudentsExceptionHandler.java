package com.csv.bit.workshop.students.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class StudentsExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(NoSuchElementException.class)
    protected ResponseEntity<Object> handleNoStudentFound(RuntimeException ex, WebRequest request) {
        String bodyOfResponse = "No student with specified id found";
        return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }

    @ExceptionHandler(RuntimeException.class)
    protected ResponseEntity<Object> handleUnexpectedExceptions(RuntimeException ex, WebRequest request) {
        String bodyOfResponse = "Unexpected exception";
        ex.printStackTrace();
        return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR, request);
    }
}
