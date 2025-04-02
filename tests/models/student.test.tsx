import { Student } from '../../models/Student';
import React from 'react';

describe('Student Interface', () => {
  it('should create a valid Student object', () => {
    const student: Student = {
      id: 1,
      name: 'John Doe',
      address: '123 Main St',
      phone: '555-1234',
      attended: true,
    };

    expect(student).toBeDefined();
    expect(student.id).toBe(1);
    expect(student.name).toBe('John Doe');
    expect(student.address).toBe('123 Main St');
    expect(student.phone).toBe('555-1234');
    expect(student.attended).toBe(true);
  });

  

  it('should allow updating the attended field', () => {
    const student: Student = {
      id: 3,
      name: 'Alice Smith',
      address: '456 Elm St',
      phone: '555-5678',
      attended: false,
    };

    student.attended = true;

    expect(student.attended).toBe(true);
  });
});