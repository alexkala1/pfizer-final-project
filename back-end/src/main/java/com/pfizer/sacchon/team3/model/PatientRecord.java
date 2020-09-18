package com.pfizer.sacchon.team3.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
@Data
@Entity
public class PatientRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private float sacchon;
    private float calories;
    private Date timeCreated;
    @ManyToOne
    @JoinColumn(name ="patient_id")
    private Patient patient;
    @ManyToOne
    @JoinColumn(name ="consultation_id")
    private Consultation consultation;
}
