import React from 'react';

function ConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = 'Confirm Action', 
  message = 'Are you sure you want to proceed?', 
  confirmText = 'Confirm', 
  cancelText = 'Cancel', 
  type = 'default', 
  icon = null 
}) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    animation: 'fadeIn 0.2s ease-in-out'
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '480px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    animation: 'slideUp 0.3s ease-out',
    overflow: 'hidden'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '24px 24px 20px',
    borderBottom: '2px solid #f0f0f0'
  };

  const iconWrapperStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    backgroundColor: 
      type === 'danger' ? '#ffebee' :
      type === 'success' ? '#e8f5e9' :
      type === 'warning' ? '#fff3e0' : '#f5f5f5'
  };

  const iconStyle = { fontSize: '24px' };

  const headerContentStyle = { flex: 1 };
  const titleStyle = { fontSize: '20px', fontWeight: 700, color: '#333', margin: 0, marginBottom: '8px', lineHeight: 1.3 };
  const bodyStyle = { padding: '24px' };
  const messageStyle = { fontSize: '15px', color: '#666', margin: 0, lineHeight: 1.6 };
  const footerStyle = { padding: '20px 24px', backgroundColor: '#f9f9f9', borderTop: '2px solid #f0f0f0', display: 'flex', gap: '12px', justifyContent: 'flex-end' };

  const buttonBaseStyle = {
    padding: '12px 28px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const cancelButtonStyle = { ...buttonBaseStyle, backgroundColor: '#f5f5f5', color: '#333', border: '2px solid #e0e0e0' };
  const confirmButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: type === 'danger' ? '#f44336' : type === 'success' ? '#388e3c' : type === 'warning' ? '#e67e22' : '#388e3c',
    color: 'white'
  };

  const handleOverlayClick = (e) => e.target === e.currentTarget && onClose();
  const handleConfirm = () => { onConfirm(); onClose(); };

  const getDefaultIcon = () => {
    if (icon) return icon;
    switch (type) {
      case 'danger': return <span style={iconStyle}>⚠️</span>;
      case 'success': return <span style={iconStyle}>✓</span>;
      case 'warning': return <span style={iconStyle}>⚠</span>;
      default: return <span style={iconStyle}>?</span>;
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn { from {opacity:0} to {opacity:1} }
        @keyframes slideUp { from {transform:translateY(30px); opacity:0} to {transform:translateY(0); opacity:1} }
      `}</style>

      <div style={overlayStyle} onClick={handleOverlayClick}>
        <div style={modalStyle}>
          <div style={headerStyle}>
            <div style={iconWrapperStyle}>{getDefaultIcon()}</div>
            <div style={headerContentStyle}>
              <h3 style={titleStyle}>{title}</h3>
            </div>
          </div>
          <div style={bodyStyle}>
            <p style={messageStyle}>{message}</p>
          </div>
          <div style={footerStyle}>
            <button
              style={cancelButtonStyle}
              onClick={onClose}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            >
              {cancelText}
            </button>
            <button
              style={confirmButtonStyle}
              onClick={handleConfirm}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmationModal;
