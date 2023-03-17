import { notification } from 'antd';


export const Notification = (type, message) => {
    notification[type]({
      message: message,
      // description:
      //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };