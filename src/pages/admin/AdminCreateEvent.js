// src/pages/admin/AdminCreateEvent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from '../../components/AdminNavBar';
import AdminHeader from '../../components/AdminHeader';
import '../../styles/AdminCreateEvent.css';

function AdminCreateEvent() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    dateType: 'single-day',
    eventDate: '',
    eventStartDate: '',
    eventEndDate: '',
    timeFrom: '',
    timeTo: '',
    venue: '',
    venueType: 'on-campus',
    onlinePlatform: '',
    meetingLink: '',
    natureOfActivity: '',
    participantRange: '',
    customParticipants: '',
    sponsoringOrganization: '',
    objectives: '',
    sourceOfFunds: ''
  });

  const handleNavCollapse = (collapsed) => setIsNavCollapsed(collapsed);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      dateType: type,
      eventDate: '',
      eventStartDate: '',
      eventEndDate: ''
    }));
  };

  const handleVenueTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      venueType: type,
      venue: type === 'online' ? '' : prev.venue
    }));
  };

  const handleParticipantRange = (range) => {
    setFormData(prev => ({ ...prev, participantRange: range, customParticipants: '' }));
  };

  const handleNext = () => currentStep < 3 && setCurrentStep(currentStep + 1);
  const handlePrevious = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Event created successfully!');
    navigate('/admin-calendar');
  };

  const getParticipantCount = () => formData.participantRange === 'custom' ? formData.customParticipants : formData.participantRange;

  return (
    <div className="admin-create-event-page">
      <AdminNavBar onCollapse={handleNavCollapse} activePage="events" />
      <AdminHeader isNavCollapsed={isNavCollapsed} />

      <div className={`admin-create-event-container ${isNavCollapsed ? 'navbar-collapsed' : ''}`}>
        <div className="event-form-card">
          <div className="form-header">
            <div className="form-header-text">University of Caloocan City</div>
            <h2 className="form-title">Event Request Form</h2>

            <div className="progress-steps">
              <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                <div className="step-number">1</div>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                <div className="step-number">2</div>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                <div className="step-number">3</div>
              </div>
            </div>
          </div>

          <div className="form-body">
            {/* Step 1: Event Details */}
            {currentStep === 1 && (
              <div className="form-step">
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

                <div className="form-group">
                  <label>Event Duration <span className="required">*</span></label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" checked={formData.dateType === 'single-day'} onChange={() => handleDateTypeChange('single-day')} />
                      <span className="radio-custom"></span>
                      Single Day Event
                    </label>
                    <label className="radio-label">
                      <input type="radio" checked={formData.dateType === 'multiple-day'} onChange={() => handleDateTypeChange('multiple-day')} />
                      <span className="radio-custom"></span>
                      Multiple Day Event
                    </label>
                  </div>
                </div>

                {formData.dateType === 'single-day' ? (
                  <div className="form-group">
                    <label>Event Date <span className="required">*</span></label>
                    <input type="date" name="eventDate" value={formData.eventDate} onChange={handleInputChange} className="form-input" required />
                  </div>
                ) : (
                  <div className="form-row">
                    <div className="form-group">
                      <label>Start Date <span className="required">*</span></label>
                      <input type="date" name="eventStartDate" value={formData.eventStartDate} onChange={handleInputChange} className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label>End Date <span className="required">*</span></label>
                      <input type="date" name="eventEndDate" value={formData.eventEndDate} onChange={handleInputChange} className="form-input" required />
                    </div>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label>Time From <span className="required">*</span></label>
                    <input type="time" name="timeFrom" value={formData.timeFrom} onChange={handleInputChange} className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label>Time To <span className="required">*</span></label>
                    <input type="time" name="timeTo" value={formData.timeTo} onChange={handleInputChange} className="form-input" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Venue Type <span className="required">*</span></label>
                  <div className="radio-group">
                    {['on-campus', 'off-campus', 'online'].map(type => (
                      <label key={type} className="radio-label">
                        <input type="radio" checked={formData.venueType === type} onChange={() => handleVenueTypeChange(type)} />
                        <span className="radio-custom"></span>
                        {type.replace('-', ' ')}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Physical Location <span className="required">*</span></label>
                  <input type="text" name="venue" value={formData.venue} onChange={handleInputChange} disabled={formData.venueType === 'online'} className="form-input" required={formData.venueType !== 'online'} />
                </div>

                {formData.venueType === 'online' && (
                  <>
                    <div className="form-group">
                      <label>Online Platform <span className="required">*</span></label>
                      <select name="onlinePlatform" value={formData.onlinePlatform} onChange={handleInputChange} className="form-select" required>
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
                      <input type="url" name="meetingLink" value={formData.meetingLink} onChange={handleInputChange} className="form-input" placeholder="https://meet.google.com/xxx-xxxx-xxx" required />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Step 2: Event Classification */}
            {currentStep === 2 && (
              <div className="form-step">
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
                        <input type="radio" name="natureOfActivity" value={option.value} checked={formData.natureOfActivity === option.value} onChange={handleInputChange} />
                        <span className="radio-custom"></span>
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Number of Participants <span className="required">*</span></label>
                  <div className="participant-buttons">
                    {['less-than-50','50-100','100-200','200-500','custom'].map(range => (
                      <button key={range} type="button" className={`participant-btn ${formData.participantRange===range?'active':''}`} onClick={()=>handleParticipantRange(range)}>
                        {range==='custom'?'Enter Number':range.replace('-',' ')}
                      </button>
                    ))}
                  </div>
                  {formData.participantRange==='custom' && <input type="number" name="customParticipants" value={formData.customParticipants} onChange={handleInputChange} className="form-input" placeholder="Enter exact number" min="1" style={{marginTop:'12px'}} required />}
                </div>

                <div className="form-group">
                  <label>Sponsoring Organization/Class <span className="required">*</span></label>
                  <input type="text" name="sponsoringOrganization" value={formData.sponsoringOrganization} onChange={handleInputChange} className="form-input" required />
                </div>
              </div>
            )}

            {/* Step 3: Purpose and Funding */}
            {currentStep === 3 && (
              <div className="form-step">
                <div className="form-group">
                  <label>Objectives and Activities <span className="required">*</span></label>
                  <textarea name="objectives" value={formData.objectives} onChange={handleInputChange} className="form-textarea" rows="5" required></textarea>
                </div>
                <div className="form-group">
                  <label>Source of Funds <span className="required">*</span></label>
                  <textarea name="sourceOfFunds" value={formData.sourceOfFunds} onChange={handleInputChange} className="form-textarea" rows="3" required></textarea>
                </div>
              </div>
            )}
          </div>

          <div className="form-footer">
            {currentStep>1 && <button className="btn-previous" onClick={handlePrevious}><i className="bi bi-chevron-left"></i> Previous</button>}
            {currentStep<3 ? <button className="btn-next" onClick={handleNext}>Next <i className="bi bi-chevron-right"></i></button> : <button className="btn-create" onClick={handleSubmit}>Create <i className="bi bi-plus-circle"></i></button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateEvent;
