import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Email: ${formData.email}\n\nMessage: ${formData.message}`;
    window.location.href = `mailto:enga95311@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We would love to hear from you! Feel free to reach out with any questions or feedback.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <FaPhone className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p>(252) 613169435</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <FaEnvelope className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p>enga95311@gmail.com</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <FaMapMarkerAlt className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p>123 Quiz St, Knowledge City, QZ 45678</p>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
            <FaPaperPlane className="inline mr-2" />
            Send Message
          </button>
        </form>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">We Value Your Feedback!</h2>
        <p className="text-lg mb-8">
          Your opinions help us improve our services.
        </p>
      </section>
    </div>
  );
}

export default ContactPage;
