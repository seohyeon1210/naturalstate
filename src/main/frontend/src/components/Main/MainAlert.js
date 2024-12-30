import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './MainAlert.css';

function MainAlert() {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <Alert
            variant="light"
            onClose={() => setShow(false)}
            dismissible
            className="custom-alert"
        >
            <Alert.Heading>첫 회원가입시 10000원 적립금 지급!</Alert.Heading>
        </Alert>
    );
}

export default MainAlert;