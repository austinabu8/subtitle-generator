// components/Home.jsx
import React, { useState } from 'react';
import './Home.css';
// At the top of Home.jsx, add this constant
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://subtitle-ai-backend.onrender.com/'  // Replace with your actual Render URL
  : 'http://localhost:5000';

const Home = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [processedVideo, setProcessedVideo] = useState(null);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProcessedVideo(null);
      setError('');
      setVideoFile(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        setVideoFile(file);
        setProcessedVideo(null);
        setError('');
      } else {
        setError('Please drop a valid video file');
      }
    }
  };

  const handleUploadAndGenerate = async () => {
    if (!videoFile) {
      alert("Please select a video file.");
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const response = await fetch(`${API_BASE_URL}/upload`, {
  method: "POST",
  body: formData,
});

      const result = await response.json();
      
      if (response.ok && result.success) {
        setProcessedVideo(result);
      } else {
        setError(result.error || 'Processing failed');
      }

    } catch (err) {
      console.error("Error:", err);
      setError('Network error. Make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

 const handleDownload = () => {
  if (processedVideo?.downloadUrl) {
    const link = document.createElement('a');
    link.href = `${API_BASE_URL}${processedVideo.downloadUrl}`;
    link.download = `subtitled_${processedVideo.originalName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

  const resetForm = () => {
    setVideoFile(null);
    setProcessedVideo(null);
    setError('');
    const fileInput = document.querySelector('.file-input');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          <span className="gradient-text">AI-Powered</span> Video Subtitle Generator
        </h1>
        <p className="hero-subtitle">
          Transform your videos with automatic subtitles in minutes using advanced AI technology
        </p>
      </div>
      
      {/* Upload Section */}
      <div className="upload-card">
        <div 
          className={`upload-zone ${dragActive ? 'drag-active' : ''} ${videoFile ? 'has-file' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="file-input"
            disabled={loading}
            id="video-upload"
          />
          
          {!videoFile ? (
            <label htmlFor="video-upload" className="upload-label">
              <div className="upload-icon">📁</div>
              <h3>Drop your video here or click to browse</h3>
              <p>Supports MP4, AVI, MOV, MKV and more</p>
              <span className="browse-btn">Browse Files</span>
            </label>
          ) : (
            <div className="file-preview">
              <div className="file-icon">🎬</div>
              <div className="file-info">
                <h4>{videoFile.name}</h4>
                <p>{(videoFile.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
              <button className="change-file-btn" onClick={resetForm}>
                Change File
              </button>
            </div>
          )}
        </div>
        
        <button 
          onClick={handleUploadAndGenerate} 
          disabled={loading || !videoFile}
          className={`process-btn ${loading ? 'loading' : ''}`}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Processing...
            </>
          ) : (
            <>
              <span className="btn-icon">✨</span>
              Generate Subtitles
            </>
          )}
        </button>
      </div>

      {/* Loading Status */}
      {loading && (
        <div className="status-card loading-card">
          <div className="status-icon">⚡</div>
          <h3>Processing Your Video</h3>
          <p>This may take a few minutes depending on video length...</p>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="status-card error-card">
          <div className="status-icon">❌</div>
          <h3>Processing Failed</h3>
          <p>{error}</p>
          <button onClick={() => setError('')} className="dismiss-btn">
            Dismiss
          </button>
        </div>
      )}

      {/* Success Section */}
      {processedVideo && !loading && (
        <div className="success-section">
          <div className="success-header">
            <div className="success-icon">🎉</div>
            <h2>Video Ready!</h2>
            <p>Your video has been processed with AI-generated subtitles</p>
          </div>
          
          <div className="video-preview-card">
           <video 
  controls 
  className="preview-video"
  src={`${API_BASE_URL}${processedVideo.videoUrl}`}
  poster="/api/placeholder/400/225"
>
            </video>
          </div>
          
          <div className="action-buttons">
            <button onClick={handleDownload} className="download-btn">
              <span className="btn-icon">📥</span>
              Download Video
            </button>
            
            <button onClick={resetForm} className="new-video-btn">
              <span className="btn-icon">🔄</span>
              Process Another
            </button>
          </div>
          
          <div className="video-details">
            <div className="detail-item">
              <span className="detail-label">Original:</span>
              <span className="detail-value">{processedVideo.originalName}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Processed:</span>
              <span className="detail-value">{processedVideo.processedFileName}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
