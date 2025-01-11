import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [focused, setFocused] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 transform transition-all">
      <div className="relative">
        <input
          type="text"
          name="name"
          id="name"
          required
          className={`peer w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-transparent focus:border-green-500 focus:outline-none transition-all ${
            focused === 'name' ? 'border-green-500' : ''
          }`}
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused('')}
        />
        <label
          htmlFor="name"
          className={`absolute left-0 -top-3.5 text-sm transition-all
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
            peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-500
            ${focused === 'name' ? 'text-green-500' : 'text-gray-400'}`}
        >
          Full Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          required
          className={`peer w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-transparent focus:border-green-500 focus:outline-none transition-all ${
            focused === 'email' ? 'border-green-500' : ''
          }`}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused('')}
        />
        <label
          htmlFor="email"
          className={`absolute left-0 -top-3.5 text-sm transition-all
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
            peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-500
            ${focused === 'email' ? 'text-green-500' : 'text-gray-400'}`}
        >
          Email
        </label>
      </div>

      <div className="relative">
        <input
          type="tel"
          name="phone"
          id="phone"
          className={`peer w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-transparent focus:border-green-500 focus:outline-none transition-all ${
            focused === 'phone' ? 'border-green-500' : ''
          }`}
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          onFocus={() => setFocused('phone')}
          onBlur={() => setFocused('')}
        />
        <label
          htmlFor="phone"
          className={`absolute left-0 -top-3.5 text-sm transition-all
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
            peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-500
            ${focused === 'phone' ? 'text-green-500' : 'text-gray-400'}`}
        >
          Phone Number
        </label>
      </div>

      <div className="relative">
        <textarea
          name="message"
          id="message"
          rows={4}
          className={`peer w-full bg-transparent border-2 border-gray-600 rounded-lg py-3 px-4 text-white placeholder-transparent focus:border-green-500 focus:outline-none transition-all ${
            focused === 'message' ? 'border-green-500' : ''
          }`}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused('')}
        />
        <label
          htmlFor="message"
          className={`absolute left-3 -top-3 text-sm transition-all bg-gray-800 px-2
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500
            ${focused === 'message' ? 'text-green-500' : 'text-gray-400'}`}
        >
          Message
        </label>
      </div>

      <button
        type="submit"
        className="group w-full bg-green-500 py-3 px-4 rounded-lg text-white font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <span>Send Message</span>
        <Send className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}