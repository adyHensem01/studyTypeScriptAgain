'use client';
import React from 'react'; // Add this line
import { useStudentController } from "../controllers/studentController";

export default function StudentDashboard() {
  const { students, searchTerm, setSearchTerm, toggleAttendance } = useStudentController();

  // Introduce an unused variable to trigger an ESLint error
  const unusedVariable = "This variable is not used";

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Student Dashboard</h1>
      <input 
        type="text" 
        placeholder="Search students..." 
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {students.map(student => (
          <li key={student.id} className="border p-4 mb-2 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{student.name}</p>
              <p className="text-sm">{student.address}</p>
              <p className="text-sm">{student.phone}</p>
            </div>
            <button 
              className={`px-4 py-2 rounded ${student.attended ? 'bg-green-500' : 'bg-red-500'} text-white`}
              onClick={() => toggleAttendance(student.id)}
            >
              {student.attended ? "Attended" : "Not Attended"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
