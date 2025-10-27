// src/AdminCreateEvent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import AdminHeader from './AdminHeader';
import './AdminCreateEvent.css';

function AdminCreateEvent() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [participantOption, setParticipantOption] = useState('');
  const [showCustomParticipants, setShowCustomParticipants] = useState(false);
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    isMultiDay: false,
    eventDate: '',
    eventStartDate: '',
    eventEndDate: '',
    timeFrom: '',
    timeTo: '',
    venue: '',
    venueType: 'on-campus',
    isOnline: false,
    onlinePlatform: '',
    meetingLink: '',
    natureOfActivity: '',
    numberOfParticipants: '',
    sponsoringOrganization: '',
    objectives: '',
    sourceOfFunds: ''
  });

  const handleNavCollapse = (collapsed) => {
    setIsNavCollapsed(collapsed);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiDayToggle = () => {
    setFormData(prev => ({
      ...prev,
      isMultiDay: !prev.isMultiDay,
      eventDate: '',
      eventStartDate: '',
      eventEndDate: ''
    }));
  };

  const handleVenueTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      venueType: type,
      isOnline: type === 'online',
      venue: type === 'online' ? prev.venue : ''
    }));
  };

  const handleParticipantSelect = (range) => {
    setParticipantOption(range);
    setShowCustomParticipants(false);
    setFormData(prev => ({
      ...prev,
      numberOfParticipants: range
    }));
  };

  const handleCustomParticipants = () => {
    setShowCustomParticipants(true);
    setParticipantOption('custom');
    setFormData(prev => ({
      ...prev,
      numberOfParticipants: ''
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Event created successfully!');
    navigate('/admin-calendar');
  };

  return (
    <div className="admin-create-event-page">
      <AdminNavBar onCollapse={handleNavCollapse} activePage="events" />
      <AdminHeader isNavCollapsed={isNavCollapsed} />

      <div className={`admin-create-event-container ${isNavCollapsed ? 'navbar-collapsed' : ''}`}>
        {/* Form Card */}
        <div className="event-form-card">
          {/* Header */}
          <div className="form-header">
            <div className="form-header-text">University of Caloocan City</div>
            <h2 className="form-title">Event Request Form</h2>
            
            {/* Progress Steps */}
            <div className="progress-steps">
              <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                <div className="step-circle">
                  <span>1</span>
                </div>
                <div className="step-line"></div>
              </div>
              <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                <div className="step-circle">
                  <span>2</span>
                </div>
                <div className="step-line"></div>
              </div>
              <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                <div className="step-circle">
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="form-body">
            {/* Step 1: Event Details */}
            {currentStep === 1 && (
              <div className="form-step">
                <div className="step-header">
                  <i className="bi bi-calendar-event"></i>
                  <h3>Event Details</h3>
                </div>

                <div className="form-group">
                  <label>Title of Activity <span className="required">*</span></label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                {/* Multi-Day Toggle */}
                <div className="form-group">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      checked={formData.isMultiDay}
                      onChange={handleMultiDayToggle}
                      className="toggle-checkbox"
                    />
                    <span className="toggle-switch"></span>
                    <span className="toggle-text">Multiple Day Event</span>
                  </label>
                </div>

                {/* Event Date */}
                {!formData.isMultiDay ? (
                  <div className="form-group">
                    <label>Event Date <span className="required">*</span></label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                ) : (
                  <div className="form-row">
                    <div className="form-group">
                      <label>Start Date <span className="required">*</span></label>
                      <input
                        type="date"
                        name="eventStartDate"
                        value={formData.eventStartDate}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>End Date <span className="required">*</span></label>
                      <input
                        type="date"
                        name="eventEndDate"
                        value={formData.eventEndDate}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Time Range */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Time From <span className="required">*</span></label>
                    <input
                      type="time"
                      name="timeFrom"
                      value={formData.timeFrom}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Time To <span className="required">*</span></label>
                    <input
                      type="time"
                      name="timeTo"
                      value={formData.timeTo}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Venue Type <span className="required">*</span></label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="venueType"
                        value="on-campus"
                        checked={formData.venueType === 'on-campus'}
                        onChange={() => handleVenueTypeChange('on-campus')}
                      />
                      <span className="radio-custom"></span>
                      <span>On-Campus</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="venueType"
                        value="off-campus"
                        checked={formData.venueType === 'off-campus'}
                        onChange={() => handleVenueTypeChange('off-campus')}
                      />
                      <span className="radio-custom"></span>
                      <span>Off-Campus</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="venueType"
                        value="online"
                        checked={formData.venueType === 'online'}
                        onChange={() => handleVenueTypeChange('online')}
                      />
                      <span className="radio-custom"></span>
                      <span>Online</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Physical Location <span className="required">*</span></label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter venue location"
                    disabled={formData.isOnline}
                    required={!formData.isOnline}
                  />
                </div>

                {/* Online Platform Options */}
                {formData.isOnline && (
                  <>
                    <div className="form-group">
                      <label>Online Platform <span className="required">*</span></label>
                      <select
                        name="onlinePlatform"
                        value={formData.onlinePlatform}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select Platform</option>
                        <option value="google-meet">Google Meet</option>
                        <option value="zoom">Zoom</option>
                        <option value="microsoft-teams">Microsoft Teams</option>
                        <option value="facebook-live">Facebook Live</option>
                        <option value="youtube-live">YouTube Live</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Meeting Link <span className="required">*</span></label>
                      <input
                        type="url"
                        name="meetingLink"
                        value={formData.meetingLink}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="https://meet.google.com/xxx-xxxx-xxx"
                        required
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Step 2: Event Classification */}
            {currentStep === 2 && (
              <div className="form-step">
                <div className="step-header">
                  <i className="bi bi-person-check"></i>
                  <h3>Event Classification Scale</h3>
                </div>

                <div className="form-group">
                  <label>Nature of Activity <span className="required">*</span></label>
                  <div className="radio-group-vertical">
                    {[
                      { value: 'seminar', label: 'Seminar / Convention' },
                      { value: 'educational', label: 'Educational Tour' },
                      { value: 'immersion', label: 'Immersion' },
                      { value: 'community', label: 'Community Extension' },
                      { value: 'academic', label: 'Academic Requirement' },
                      { value: 'others', label: 'Others' }
                    ].map(option => (
                      <label key={option.value} className="radio-label">
                        <input
                          type="radio"
                          name="natureOfActivity"
                          value={option.value}
                          checked={formData.natureOfActivity === option.value}
                          onChange={handleInputChange}
                        />
                        <span className="radio-custom"></span>
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Number of Participants <span className="required">*</span></label>
                  <div className="participant-buttons">
                    <button
                      type="button"
                      className={`participant-btn ${participantOption === 'Less than 50' ? 'active' : ''}`}
                      onClick={() => handleParticipantSelect('Less than 50')}
                    >
                      Less than 50
                    </button>
                    <button
                      type="button"
                      className={`participant-btn ${participantOption === '50-100' ? 'active' : ''}`}
                      onClick={() => handleParticipantSelect('50-100')}
                    >
                      50-100
                    </button>
                    <button
                      type="button"
                      className={`participant-btn ${participantOption === '100-200' ? 'active' : ''}`}
                      onClick={() => handleParticipantSelect('100-200')}
                    >
                      100-200
                    </button>
                    <button
                      type="button"
                      className={`participant-btn ${participantOption === '200+' ? 'active' : ''}`}
                      onClick={() => handleParticipantSelect('200+')}
                    >
                      200+
                    </button>
                    <button
                      type="button"
                      className={`participant-btn ${participantOption === 'custom' ? 'active' : ''}`}
                      onClick={handleCustomParticipants}
                    >
                      <i className="bi bi-pencil"></i> Enter Number
                    </button>
                  </div>
                  {showCustomParticipants && (
                    <input
                      type="number"
                      name="numberOfParticipants"
                      value={formData.numberOfParticipants}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter exact number"
                      min="1"
                      required
                      style={{ marginTop: '12px' }}
                    />
                  )}
                </div>

                <div className="form-group">
                  <label>Sponsoring Organization/Class <span className="required">*</span></label>
                  <input
                    type="text"
                    name="sponsoringOrganization"
                    value={formData.sponsoringOrganization}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Purpose and Funding */}
            {currentStep === 3 && (
              <div className="form-step">
                <div className="step-header">
                  <i className="bi bi-clipboard-check"></i>
                  <h3>Purpose and Funding</h3>
                </div>

                <div className="form-group">
                  <label>Objectives and Activities <span className="required">*</span></label>
                  <textarea
                    name="objectives"
                    value={formData.objectives}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Source of Funds <span className="required">*</span></label>
                  <textarea
                    name="sourceOfFunds"
                    value={formData.sourceOfFunds}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="3"
                    required
                  ></textarea>
                </div>

                {/* Summary Box */}
                <div className="summary-box">
                  <div className="summary-header">Event Summary</div>
                  <div className="summary-row">
                    <span className="summary-label">Title:</span>
                    <span className="summary-value">{formData.title || '-'}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Date:</span>
                    <span className="summary-value">
                      {formData.isMultiDay 
                        ? `${formData.eventStartDate || '-'} to ${formData.eventEndDate || '-'}`
                        : formData.eventDate || '-'}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Time:</span>
                    <span className="summary-value">
                      {formData.timeFrom && formData.timeTo 
                        ? `${formData.timeFrom} - ${formData.timeTo}`
                        : '-'}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Venue:</span>
                    <span className="summary-value">
                      {formData.isOnline ? 'Online' : (formData.venue || '-')}
                      {' '}({formData.venueType === 'on-campus' ? 'On-Campus' : formData.venueType === 'off-campus' ? 'Off-Campus' : 'Online'})
                    </span>
                  </div>
                  {formData.isOnline && (
                    <div className="summary-row">
                      <span className="summary-label">Platform:</span>
                      <span className="summary-value">{formData.onlinePlatform || '-'}</span>
                    </div>
                  )}
                  <div className="summary-row">
                    <span className="summary-label">Type:</span>
                    <span className="summary-value">{formData.natureOfActivity || '-'}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Participants:</span>
                    <span className="summary-value">{formData.numberOfParticipants || '-'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Form Footer */}
          <div className="form-footer">
            {currentStep > 1 && (
              <button className="btn-previous" onClick={handlePrevious}>
                <i className="bi bi-chevron-left"></i> Previous
              </button>
            )}
            
            {currentStep < 3 ? (
              <button className="btn-next" onClick={handleNext}>
                Next <i className="bi bi-chevron-right"></i>
              </button>
            ) : (
              <button className="btn-create" onClick={handleSubmit}>
                Create <i className="bi bi-plus-circle"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateEvent;