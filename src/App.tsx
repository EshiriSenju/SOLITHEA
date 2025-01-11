import React, { useState } from 'react';
import { Instagram, Facebook, Linkedin, ArrowRight, Star, X } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  const services = [
    {
      title: 'Strength and Conditioning',
      description: 'Build power and endurance with our specialized training programs.',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Speed and Agility Training',
      description: 'Enhance your on-field performance with dynamic movement training.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Injury Prevention and Recovery',
      description: 'Stay in peak condition with our preventive care and recovery protocols.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Football-Specific Drills',
      description: 'Master the techniques that matter most on the pitch.',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  const testimonials = [
    {
      name: 'James Wilson',
      position: 'Professional Footballer',
      text: 'Training with Theo has transformed my game completely. His attention to detail and personalized approach is unmatched.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000',
    },
    {
      name: 'Sarah Martinez',
      position: 'Youth Academy Player',
      text: 'The improvement in my speed and agility has been remarkable. Solithea\'s training methods are truly exceptional.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&q=80&w=1000',
      caption: 'Youth Training Session'
    },
    {
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1000',
      caption: 'Speed Training'
    },
    {
      url: 'https://images.unsplash.com/photo-1591187942079-42c9c6b1bb8b?auto=format&fit=crop&q=80&w=1000',
      caption: 'Technical Skills'
    },
    {
      url: 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?auto=format&fit=crop&q=80&w=1000',
      caption: 'Team Practice'
    },
    {
      url: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=1000',
      caption: 'Match Preparation'
    },
    {
      url: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1000',
      caption: 'Strength Training'
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=1000"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Solithea</h1>
          <p className="text-xl md:text-2xl mb-8">Elevating Athletes to the Next Level</p>
          <button
            onClick={() => setShowRegistration(true)}
            className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=1000"
                alt="Theo Onyegbule"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Theo Onyegbule</h2>
              <p className="text-gray-300 mb-6">
                With over a decade of experience in athletic training and development, Theo has helped countless athletes
                reach their full potential. His unique approach combines cutting-edge sports science with practical
                experience from years of working with professional athletes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2" />
                  <span>Certified Strength and Conditioning Specialist</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2" />
                  <span>Former Professional Football Player</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2" />
                  <span>Sports Science and Nutrition Expert</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Athletes Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-green-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Training Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-lg font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Ready to transform your performance? Contact us today to schedule your first session
                or learn more about our training programs.
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Address:</span>
                  123 Training Center Drive, Sports City, SC 12345
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  info@solithea.com
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  (555) 123-4567
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Solithea</h3>
              <p className="text-gray-400">Elevating Athletes to the Next Level</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Solithea. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setShowRegistration(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">Start Your Journey</h2>
            <RegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;