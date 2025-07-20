import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="relative w-full max-w-lg mx-auto p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 shadow-2xl border border-blue-800 animate-fade-in">
      {/* Animated stars background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <circle cx="50" cy="80" r="1.5" fill="#3b82f6" />
          <circle cx="200" cy="40" r="2" fill="#1e3a8a" />
          <circle cx="350" cy="120" r="1.2" fill="#2563eb" />
          <circle cx="120" cy="300" r="1.8" fill="#1e40af" />
          <circle cx="300" cy="350" r="1.3" fill="#0a2540" />
          <circle cx="80" cy="200" r="1.1" fill="#3b82f6" />
          <circle cx="370" cy="60" r="1.7" fill="#1e3a8a" />
        </svg>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-blue-300 mb-2 text-center animate-glow">Contact Us</h2>
        <p className="text-blue-200 mb-6 text-center">Reach out to us for cosmic collaborations or stellar support!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-blue-950 bg-opacity-80 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-input"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-blue-950 bg-opacity-80 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-input"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-blue-950 bg-opacity-80 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-input"
            required
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"
          >
            Send Message
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-center text-blue-400 animate-fade-in">Thank you for contacting us! 🚀</div>
        )}
      </div>
      {/* Floating planet animation */}
      <div className="absolute -top-10 right-10 z-10 animate-float">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="#1e3a8a" stroke="#2563eb" strokeWidth="4" />
          <ellipse cx="30" cy="38" rx="18" ry="6" fill="#3b82f6" opacity="0.5" />
        </svg>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-glow {
          text-shadow: 0 0 8px #3b82f6, 0 0 16px #1e3a8a;
        }
        .animate-input:focus {
          box-shadow: 0 0 8px #2563eb;
        }
        .animate-float {
          animation: floatPlanet 3s ease-in-out infinite;
        }
        @keyframes floatPlanet {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
    </div>
  );
}
