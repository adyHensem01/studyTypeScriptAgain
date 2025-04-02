import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StudentDashboard from '../../views/StudentDashboard';
import { useStudentController } from '../../controllers/studentController';
import { jest } from '@jest/globals';

jest.mock('../../controllers/studentController');

describe('StudentDashboard', () => {
  const mockToggleAttendance = jest.fn();
  const mockSetSearchTerm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useStudentController as jest.Mock).mockReturnValue({
      students: [
        { id: 1, name: 'John Doe', address: '123 Main St', phone: '123-456-7890', attended: true },
        { id: 2, name: 'Jane Smith', address: '456 Elm St', phone: '987-654-3210', attended: false },
      ],
      searchTerm: '',
      setSearchTerm: mockSetSearchTerm,
      toggleAttendance: mockToggleAttendance,
    });
  });

  it('renders the student dashboard with a list of students', () => {
    render(<StudentDashboard />);

    expect(screen.getByText('Student Dashboard')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search students...')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('calls setSearchTerm when the search input changes', () => {
    render(<StudentDashboard />);

    const searchInput = screen.getByPlaceholderText('Search students...');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    expect(mockSetSearchTerm).toHaveBeenCalledWith('John');
  });

  it('calls toggleAttendance when the attendance button is clicked', () => {
    render(<StudentDashboard />);

    const toggleButton = screen.getByText('Attended');
    fireEvent.click(toggleButton);

    expect(mockToggleAttendance).toHaveBeenCalledWith(1);
  });

  it('displays the correct button text and styles based on attendance', () => {
    render(<StudentDashboard />);

    const attendedButton = screen.getByText('Attended');
    const notAttendedButton = screen.getByText('Not Attended');

    expect(attendedButton).toHaveClass('bg-green-500');
    expect(notAttendedButton).toHaveClass('bg-red-500');
  });
});