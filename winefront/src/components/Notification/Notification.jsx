import React from "react";
import * as S from "./Notification.style";

function Notification({ children, type }) {
  return <S.NotificationText type={type}>{children}</S.NotificationText>;
}

export default Notification;
