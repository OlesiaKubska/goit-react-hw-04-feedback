import React from "react";
import PropTypes from 'prop-types';
import { NotificationContainer, MessageText } from "./Notification.styled";

export const Notification = ({ message }) => {
    return (
        <NotificationContainer>
            <MessageText>{message}</MessageText>
        </NotificationContainer>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};