import React, {useState, useEffect} from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
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
        userId: yup.string().required('아이디는 필수입니다.'),
        password: yup.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.').required('비밀번호는 필수입니다.'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 확인은 필수입니다.'),
        userName: yup.string().required('이름은 필수입니다.'),
        phone: yup.string()
            .matches(/^(\d{3})-(\d{4})-(\d{4})$/, '올바른 전화번호 형식은 010-1234-5678입니다.')
            .required('연락처는 필수입니다.'),
        zip: yup.string().required('우편번호는 필수입니다.'),
        address: yup.string().required('주소는 필수입니다.'),
        detailAddress: yup.string().required('상세주소는 필수입니다.'),
        email: yup.string().email('유효한 이메일을 입력해주세요.').required('이메일은 필수입니다.'),
        receiveEmail: yup.string().oneOf(['Y', 'N'], '유효한 값을 선택하세요.')
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
                        window.location.href = '/';
                    } catch (error) {
                        console.error('회원가입 실패:', error);
                        alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
                    }
                    setSubmitting(false);
                    console.log("폼 데이터", values);
                }}
                initialValues={{
                    userId: '',
                    password: '',
                    confirmPassword: '',
                    userName: '',
                    phone: '',
                    zip: '',
                    address: '',
                    detailAddress: '',
                    email: '',
                    receiveEmail: 'N',
                    auth: 'user'
                }}
            >
                {({handleSubmit, handleChange, setFieldValue, values, touched, errors, isSubmitting}) => (
                    <Form noValidate onSubmit={handleSubmit} className="join-form">
                        <h5 className="font-label">회원가입</h5>
                        <hr/>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormikUserId">
                                <Form.Label className="font-label">아이디</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="아이디"
                                    name="userId"
                                    value={values.userId}
                                    onChange={handleChange}
                                    isInvalid={!!errors.userId}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.userId}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormikPassword">
                                <Form.Label className="font-label">비밀번호</Form.Label>
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
                            <Form.Group as={Col} md="12" controlId="validationFormikConfirmPassword">
                                <Form.Label className="font-label">비밀번호 확인</Form.Label>
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
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormikUserName">
                                <Form.Label className="font-label">이름</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="userName"
                                    value={values.userName}
                                    onChange={handleChange}
                                    isInvalid={!!errors.userName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.userName}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormikPhone">
                                <Form.Label className="font-label">연락처</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="010-1234-5678"
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
                            <Form.Group as={Col} md="12" controlId="validationFormikZip">
                                <Form.Label className="font-label">우편번호</Form.Label>
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
                                    <Button className="font-label" onClick={() => handleSearchPostcode(setFieldValue)}>우편번호 찾기</Button>
                                </InputGroup>
                                <Form.Control.Feedback type="invalid">
                                    {errors.zip}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormikAddress">
                                <Form.Label className="font-label">주소</Form.Label>
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
                                <Form.Label className="font-label">상세주소</Form.Label>
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
                            <Form.Group as={Col} md="12" controlId="validationFormikEmail">
                                <Form.Label className="font-label">이메일</Form.Label>
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
                                <Form.Check className="font-label"
                                    type="checkbox"
                                    name="receiveEmail"
                                    label="이메일 수신 동의"
                                    checked={values.receiveEmail === 'Y'}
                                    onChange={() => {
                                        setFieldValue('receiveEmail', values.receiveEmail === 'Y' ? 'N' : 'Y');
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Button className="btn-submit" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "제출 중..." : "회원가입하기"}
                        </Button>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Join;
