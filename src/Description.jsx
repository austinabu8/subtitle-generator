// components/Description.jsx
import React from 'react';
import './Description.css';

const Description = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Transcription',
      description: 'Advanced speech recognition technology provides accurate subtitle generation'
    },
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'Get your subtitled videos in minutes, not hours'
    },
    {
      icon: '🎯',
      title: 'High Accuracy',
      description: 'Industry-leading accuracy with support for multiple languages'
    },
    {
      icon: '📱',
      title: 'Multiple Formats',
      description: 'Support for MP4, AVI, MOV, MKV and many more video formats'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Upload Video',
      description: 'Select or drag & drop your video file'
    },
    {
      number: '02',
      title: 'AI Processing',
      description: 'Our AI analyzes and transcribes your audio'
    },
    {
      number: '03',
      title: 'Get Results',
      description: 'Download your video with embedded subtitles'
    }
  ];

  return (
    <div className="description-container">
      <div className="description-header">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Transform your videos with professional subtitles using cutting-edge AI technology
        </p>
      </div>

      <div className="steps-section">
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="features-section">
        <h3 className="features-title">Why Choose Our Platform?</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-stack">
        <h3 className="tech-title">Powered By</h3>
        <div className="tech-items">
          <div className="tech-item">
            <span className="tech-icon">🧠</span>
            <span className="tech-name">AssemblyAI</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🎬</span>
            <span className="tech-name">FFmpeg</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <span className="tech-name">React</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🚀</span>
            <span className="tech-name">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
