import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const initialEvents = [
  // Existing events...
  {
    id: 0,
    title: 'Conference',
    allDay: true,
    start: new Date(2024, 8, 1),
    end: new Date(2024, 8, 1),
  },
  // Other events...
];

function CalendarAndTiming() {
  const [events, setEvents] = useState(initialEvents);
  const [view, setView] = useState('month');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  const handleAddEvent = () => {
    setEvents([...events, {
      ...newEvent,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
      id: events.length,
    }]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-5 bg-white rounded-md shadow-md w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">School Calendar</h2>
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Add new task
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        view={view}
        onView={(view) => setView(view)}
        components={{
          toolbar: (props) => (
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <span className="text-xl font-semibold">
                  {props.label}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  className={`mx-2 px-4 py-2 text-sm rounded-md ${
                    view === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                  onClick={() => props.onView('month')}
                >
                  Month
                </button>
                <button
                  className={`mx-2 px-4 py-2 text-sm rounded-md ${
                    view === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                  onClick={() => props.onView('week')}
                >
                  Week
                </button>
              </div>
            </div>
          ),
        }}
      />

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md shadow-md w-96">
            <h3 className="text-xl font-semibold mb-4">Add New Task</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Event Title
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="datetime-local"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={newEvent.start}
                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="datetime-local"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={newEvent.end}
                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleAddEvent}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarAndTiming;
