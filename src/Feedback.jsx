// components/Feedback.jsx
import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please provide a rating');
      return;
    }
    
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setRating(0);
        setFeedback('');
        setSubmitted(false);
      }, 3000);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="feedback-container">
        <div className="thank-you-card">
          <div className="thank-you-icon">🎉</div>
          <h2>Thank You!</h2>
          <p>Your feedback has been received and is greatly appreciated!</p>
          <div className="celebration-emojis">⭐ 💫 ✨</div>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h2 className="section-title">We'd Love Your Feedback</h2>
        <p className="section-subtitle">
          Help us improve by sharing your experience with our platform
        </p>
      </div>

      <div className="feedback-card">
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="rating-section">
            <h3 className="rating-title">How would you rate your experience?</h3>
            <div className="stars-container">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star ${star <= (hoveredRating || rating) ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  ⭐
                </button>
              ))}
            </div>
            <div className="rating-text">
              {rating === 0 && 'Please select a rating'}
              {rating === 1 && 'Poor - Needs significant improvement'}
              {rating === 2 && 'Fair - Could be better'}
              {rating === 3 && 'Good - Meets expectations'}
              {rating === 4 && 'Very Good - Exceeds expectations'}
              {rating === 5 && 'Excellent - Outstanding experience!'}
            </div>
          </div>

          <div className="feedback-input-section">
            <label htmlFor="feedback-text" className="feedback-label">
              Share your thoughts (optional)
            </label>
            <textarea
              id="feedback-text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us what you loved or how we can improve..."
              className="feedback-textarea"
              rows="4"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={rating === 0}>
            <span className="btn-icon">📤</span>
            Submit Feedback
          </button>
        </form>
      </div>

      <div className="feedback-stats">
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">User Satisfaction</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">10k+</div>
          <div className="stat-label">Videos Processed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Available</div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
