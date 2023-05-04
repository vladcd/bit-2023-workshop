package com.csv.bit.workshop.students.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String nume;

    @Column
    private String prenume;

    @Column
    private String nrMatricol;

    @Column
    private Faculty facultate;

    @Column
    private YearOfStudy anStudiu;

    @Column
    private Boolean inscrisCamin;

    @Column
    private Boolean deleted;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public String getNrMatricol() {
        return nrMatricol;
    }

    public void setNrMatricol(String nrMatricol) {
        this.nrMatricol = nrMatricol;
    }

    public Faculty getFacultate() {
        return facultate;
    }

    public void setFacultate(Faculty facultate) {
        this.facultate = facultate;
    }

    public YearOfStudy getAnStudiu() {
        return anStudiu;
    }

    public void setAnStudiu(YearOfStudy anStudiu) {
        this.anStudiu = anStudiu;
    }

    public Boolean getInscrisCamin() {
        return inscrisCamin;
    }

    public void setInscrisCamin(Boolean inscrisCamin) {
        this.inscrisCamin = inscrisCamin;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return id.equals(student.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
