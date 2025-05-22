import React, { useState, useEffect, useCallback } from 'react';

let showToastExternal; // Function exposed for triggering toasts externally

const Toast = ({ type, message }) => {
  return <div className={`toast toast-${type}`}>{message}</div>;
};

const ToastManager = () => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback(({ type = 'info', message = '' }) => {
    setToast({ type, message });
  }, []);

  useEffect(() => {
    showToastExternal = showToast;
  }, [showToast]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return <>{toast && <Toast type={toast.type} message={toast.message} />}</>;
};

// Export function to trigger toast from anywhere
export const showToast = (args) => {
  if (showToastExternal) showToastExternal(args);
};

export default ToastManager;
