import React from "react";
import { Modal, Form } from "react-bootstrap";

function TermsAndConditions({ show, handleClose, formData, setFormData }) {
  const handleAccept = () => {
    setFormData({ ...formData, agree: true });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Terms and Conditions</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
        <h5>School Event and Activity Management System (SEAMS)</h5>
        <p><strong>Last Updated:</strong> November 2025</p>

        <p>
          Welcome to the School Event and Activity Management System (SEAMS). By
          accessing or using this platform, you agree to comply with and be bound
          by the following Terms and Conditions. Please read them carefully before
          using the system.
        </p>
        <hr />

        <p><strong>1. Acceptance of Terms</strong><br />
          By registering or using SEAMS, users acknowledge that they have read,
          understood, and agreed to these Terms and Conditions.
        </p>

        <p><strong>2. Purpose of the System</strong><br />
          SEAMS assists in the management of school events and activities,
          including scheduling, registration, and feedback collection.
        </p>

        <p><strong>3. User Responsibilities</strong><br />
          Provide accurate data, avoid unauthorized use, and comply with school policies.
        </p>

        <p><strong>4. Data Privacy and Security</strong><br />
          User data is stored securely and handled under data protection laws.
        </p>

        <p><strong>5. Event Participation and Certificates</strong><br />
          Event records are securely logged; digital certificates are valid for
          official events only.
        </p>

        <p><strong>6. System Usage and Availability</strong><br />
          The school may modify or suspend SEAMS for maintenance or improvements.
        </p>

        <p><strong>7. Intellectual Property</strong><br />
          All SEAMS materials are owned by the school and developers.
        </p>

        <p><strong>8. Limitation of Liability</strong><br />
          The school is not liable for misuse, data loss, or unauthorized access.
        </p>

        <p><strong>9. Amendments</strong><br />
          The school may revise these Terms at any time.
        </p>

        <p><strong>10. Contact Information</strong><br />
          For assistance, contact the Office of Student Affairs and Services (OSAS).
        </p>

        <hr />

        <Form.Check
          type="checkbox"
          label="I have read and agree to the Terms and Conditions"
          checked={formData.agree}
          onChange={() =>
            setFormData({ ...formData, agree: !formData.agree })
          }
        />
      </Modal.Body>

      <Modal.Footer>
        <button className="green-btn px-4 py-2" onClick={handleAccept}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default TermsAndConditions;
