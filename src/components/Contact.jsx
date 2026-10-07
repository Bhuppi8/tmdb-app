import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    anythingYouLike: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.anythingYouLike) {
      setError("Please fill in all fields before submitting.");
      return;
    }
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
          <p className="text-sm text-slate-500 mt-1">
            We'd love to hear from you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Thank you, {formData.name}!
            </h3>
            <p className="text-sm text-slate-600">
              We received your note:{" "}
              <span className="italic">"{formData.anythingYouLike}"</span>
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", anythingYouLike: "" });
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-600 text-xs rounded-xl">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                ref={inputRef}
                placeholder="Jane Doe"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                What's on your mind? (Anything you like)
              </label>
              <textarea
                name="anythingYouLike"
                rows="3"
                value={formData.anythingYouLike}
                onChange={handleChange}
                placeholder="Share a thought, a hobby, or anything else..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-slate-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm transition-colors shadow-sm"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
