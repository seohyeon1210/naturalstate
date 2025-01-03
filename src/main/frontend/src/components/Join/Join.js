import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import "./Join.css";

function Join() {
    const {Formik} = formik;

    const [zipcode, setZipcode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');

    useEffect(() => {
        if (window.daum) return;

        const script = document.createElement('script');
        script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.onload = () => {
            console.log('Daum Postcode script loaded');
        };
        document.body.appendChild(script);
    }, []);

    const schema = yup.object().shape({
        username: yup.string().required('아이디는 필수입니다.'),
        password: yup.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.').required('비밀번호는 필수입니다.'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 확인은 필수입니다.'),
        firstName: yup.string().required('이름은 필수입니다.'),
        phone: yup.string()
            .matches(/^(\d{3})-(\d{4})-(\d{4})$/, '올바른 전화번호 형식은 010-1234-5678입니다.')
            .required('연락처는 필수입니다.'),
        zip: yup.string().required('우편번호는 필수입니다.'),
        address: yup.string().required('주소는 필수입니다.'),
        detailAddress: yup.string().required('상세주소는 필수입니다.'),
        email: yup.string().email('유효한 이메일을 입력해주세요.').required('이메일은 필수입니다.'),
        receiveEmail: yup.bool().required('이메일 수신 동의는 필수입니다.').oneOf([true], '이메일 수신 동의를 해주세요.')
    });

    const handleSearchPostcode = (setFieldValue) => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                setZipcode(data.zonecode);
                setAddress(data.roadAddress);
                setFieldValue('zip', data.zonecode);
                setFieldValue('address', data.roadAddress);
            }
        }).open();
    };

    return (
        <div className="join-container">
            <Formik
                validationSchema={schema}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    console.log('폼 제출 시작:', values);
                    try {
                        const response = await axios.post('http://localhost:18080/api/join', values, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        console.log('회원가입 성공:', response.data);
                        alert('회원가입이 완료되었습니다.');
                        resetForm();
                    } catch (error) {
                        console.error('회원가입 실패:', error);
                        alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
                    }
                    setSubmitting(false);
                    console.log("폼 데이터", values);
                }}
                initialValues={{
                    username: '',
                    password: '',
                    confirmPassword: '',
                    firstName: '',
                    phone: '',
                    zip: '',
                    address: '',
                    detailAddress: '',
                    email: '',
                    receiveEmail: false
                }}
            >
                {({handleSubmit, handleChange, setFieldValue, values, touched, errors, isSubmitting}) => (
                    <Form noValidate onSubmit={handleSubmit} className="join-form">
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                                <Form.Label>아이디</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="아이디"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    isInvalid={!!errors.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationFormikPassword">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="비밀번호"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormikConfirmPassword">
                                <Form.Label>비밀번호 확인</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="비밀번호 확인"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirmPassword}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationFormikFirstName">
                                <Form.Label>이름</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isInvalid={!!errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormikPhone">
                                <Form.Label>연락처</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="010-0000-0000"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isInvalid={!!errors.phone}>

                                    </Form.Control>
                                </InputGroup>
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormikZip">
                                <Form.Label>우편번호</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="우편번호"
                                        name="zip"
                                        value={zipcode || values.zip}
                                        onChange={handleChange}
                                        isInvalid={!!errors.zip}
                                        readOnly
                                    />
                                    <Button onClick={() => handleSearchPostcode(setFieldValue)}>우편번호 찾기</Button>
                                </InputGroup>
                                <Form.Control.Feedback type="invalid">
                                    {errors.zip}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormikAddress">
                                <Form.Label>주소</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="도로명 주소"
                                    name="address"
                                    value={address || values.address}
                                    onChange={handleChange}
                                    isInvalid={!!errors.address}
                                    readOnly
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.address}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormikDetailAddress">
                                <Form.Label>상세주소</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="상세주소"
                                    name="detailAddress"
                                    value={detailAddress || values.detailAddress}
                                    onChange={handleChange}
                                    isInvalid={!!errors.detailAddress}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.detailAddress}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormikEmail">
                                <Form.Label>이메일</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="이메일"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormikReceiveEmail">
                                <Form.Check
                                    type="checkbox"
                                    name="receiveEmail"
                                    label="이메일 수신 동의"
                                    checked={values.receiveEmail}
                                    onChange={handleChange}
                                    isInvalid={!!errors.receiveEmail}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.receiveEmail}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "제출 중..." : "회원가입"}
                        </Button>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Join;
