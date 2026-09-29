const Notification = ({ message, isError = false }) => {
    if (message === null) {
      return null;
    }

    const notificationClassName = isError ? 'error' : 'info';
  
    return <div className={notificationClassName}>{message}</div>;
  };
  
  export default Notification;
  