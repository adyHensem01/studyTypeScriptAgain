'use client';
import { useState } from "react";
import { Student } from "../models/Student";

export function useStudentController() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "John Doe", address: "123 Main St", phone: "123-456-7890", attended: false },
    { id: 2, name: "Jane Smith", address: "456 Oak St", phone: "987-654-3210", attended: false },
    { id: 3, name: "Mahdi Jo", address: "899 Main St", phone: "324-434-786", attended: false },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleAttendance = (id: number) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, attended: !student.attended } : student
    ));
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { students: filteredStudents, searchTerm, setSearchTerm, toggleAttendance };
}