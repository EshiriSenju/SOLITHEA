import React, { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    position: '',
    goals: '',
    preferredTimes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Registration submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="reg-name" className="block text-sm font-medium text-gray-200">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="reg-name"
          required
          className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-200">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          required
          className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-200">
          Sport/Position
        </label>
        <input
          type="text"
          name="position"
          id="position"
          required
          className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.position}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="goals" className="block text-sm font-medium text-gray-200">
          Training Goals
        </label>
        <textarea
          name="goals"
          id="goals"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.goals}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="preferredTimes" className="block text-sm font-medium text-gray-200">
          Preferred Training Times
        </label>
        <select
          name="preferredTimes"
          id="preferredTimes"
          required
          className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.preferredTimes}
          onChange={handleChange}
        >
          <option value="">Select a time</option>
          <option value="morning">Morning (6AM - 10AM)</option>
          <option value="afternoon">Afternoon (12PM - 4PM)</option>
          <option value="evening">Evening (5PM - 9PM)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 py-3 px-4 rounded-md text-white font-semibold hover:bg-green-600 transition duration-300"
      >
        Start Your Journey
      </button>
    </form>
  );
}