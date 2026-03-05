import { useState } from 'react';
import './ContactPage.css';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  category: 'general',
  subscribe: false,
};

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate(data) {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Name is required.';
    if (!data.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!data.subject.trim()) errs.subject = 'Subject is required.';
    if (!data.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="contact-container">
        <div className="contact-success">
          <span className="success-icon">✅</span>
          <h2>Message Sent!</h2>
          <p>
            Thanks, <strong>{form.name}</strong>! We received your message and will
            get back to you at <strong>{form.email}</strong> soon.
          </p>
          <button className="btn-primary" onClick={handleReset}>
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        Have a question or feedback? Fill out the form below and we'll be in touch.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        {/* Category */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="billing">Billing</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        {/* Subject */}
        <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
          <label htmlFor="subject">Subject *</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Brief summary of your message"
            value={form.subject}
            onChange={handleChange}
          />
          {errors.subject && <span className="field-error">{errors.subject}</span>}
        </div>

        {/* Message */}
        <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here…"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>

        {/* Subscribe */}
        <div className="form-group form-group-checkbox">
          <label>
            <input
              name="subscribe"
              type="checkbox"
              checked={form.subscribe}
              onChange={handleChange}
            />
            Subscribe to our newsletter
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Send Message
          </button>
          <button type="button" className="btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
