import React, { useState, useEffect } from 'react';

const defaultBanners = {
  info: {
    status: 'info',
    text: 'This is some useful information.',
    icon: 'ℹ️',
  },
  success: {
    status: 'success',
    text: 'Everything went well.',
    icon: '✅',
  },
  warning: {
    status: 'warning',
    title: 'Heads up!',
    text: 'Please double-check this.',
    icon: '⚠️',
  },
  danger: {
    status: 'danger',
    title: 'Heads up!',
    text: 'Something went wrong.',
    icon: '❌',
  },
};

export default function Banner({ show, status, title, text, onClose }) {
  const [activeBanner, setActiveBanner] = useState(null);

  // When externally controlled
  useEffect(() => {
    if (show && status) {
      const config = defaultBanners[status] || {};
      setActiveBanner({
        status,
        title: title ?? config.title,
        text: text ?? config.text,
        icon: config.icon ?? 'ℹ️',
      });
    }
    if (!show) {
      setActiveBanner(null);
    }
  }, [show, status, title, text]);

  // Internal button click
  const handleShow = (type) => {
    const config = defaultBanners[type];
    setActiveBanner(config);
  };

  const handleClose = () => {
    setActiveBanner(null);
    onClose?.(); // Call parent callback if provided
  };

  return (
    <div className="container">
      {activeBanner && (
        <div className={`banner banner-${activeBanner.status} ${!activeBanner.title ? 'compact' : ''}`}>
          <div className="icon">{activeBanner.icon}</div>
          <div className="content">
            {activeBanner.title && <strong>{activeBanner.title}</strong>}
            <div>{activeBanner.text}</div>
          </div>
          <button className="banner-close" onClick={handleClose}>×</button>
        </div>
      )}

      {/* Show internal buttons only when not externally controlled */}
      {!show && (
        <div className="banner-buttons">
          <button onClick={() => handleShow('info')}>Info</button>
          <button onClick={() => handleShow('success')}>Success</button>
          <button onClick={() => handleShow('warning')}>Warning</button>
          <button onClick={() => handleShow('danger')}>Danger</button>
        </div>
      )}
    </div>
  );
}
