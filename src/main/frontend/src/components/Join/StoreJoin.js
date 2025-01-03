import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function StoreJoin() {
    const {Formik} = formik;

    const schema = yup.object().shape({
        storeId: yup.string().required('샵 아이디는 필수입니다.'),
        password: yup.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.').required('비밀번호는 필수입니다.'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 확인은 필수입니다.'),
        storeName: yup.string().required('샵 명은 필수입니다.'),
        phone: yup.string()
            .matches(/^(\d{3})-(\d{4})-(\d{4})$/, '올바른 전화번호 형식은 010-1234-5678입니다.')
            .required('연락처는 필수입니다.'),
        taxId: yup.string()
            .matches(/^(\d{3})-(\d{2})-(\d{5})$|^(\d{3})-(\d{2})-(\d{4})$/, '올바른 사업자 등록번호 형식은 000-00-0000 또는 000-00-00000입니다.')
            .required('사업자 등록번호는 필수입니다.'),
        email: yup.string().email('유효한 이메일을 입력해주세요.').required('이메일은 필수입니다.')
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
                console.log('폼 제출 시작:', values);
                try {
                    const response = await axios.post('http://localhost:18080/api/storejoin', values, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    console.log('입점신청 성공:', response.data);
                    alert('입점신청이 완료되었습니다. 승인까지 2~3일 걸립니다.');
                    resetForm();
                } catch (error) {
                    console.error('입점신청 실패:', error);
                    alert('입점신청에 실패하였습니다. 다시 시도해 주세요.');
                }
                setSubmitting(false);
                console.log("폼 데이터", values);
            }}
            initialValues={{
                storeId: '',
                password: '',
                confirmPassword: '',
                storeName: '',
                phone: '',
                taxId: '',
                taxFile: null,
                email: '',
                storeContact: ''
            }}
        >
            {({handleSubmit, handleChange, values, errors, isSubmitting}) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormikstoreId">
                            <Form.Label>샵 아이디</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="샵 아이디"
                                name="storeId"
                                value={values.storeId}
                                onChange={handleChange}
                                isInvalid={!!errors.storeId}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.storeId}
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

                        <Form.Group as={Col} md="6" controlId="validationFormikStoreName">
                            <Form.Label>샵 명 (사업자명)</Form.Label>
                            <Form.Control
                                type="text"
                                name="storeName"
                                value={values.storeName}
                                onChange={handleChange}
                                isInvalid={!!errors.storeName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.storeName}
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
                        <Form.Group as={Col} md="6" controlId="validationFormikTaxId">
                            <Form.Label>사업자 등록번호</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="000-00-00000"
                                    name="taxId"
                                    value={values.taxId}
                                    onChange={handleChange}
                                    isInvalid={!!errors.taxId}>

                                </Form.Control>
                            </InputGroup>
                            <Form.Control.Feedback type="invalid">
                                {errors.taxId}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationFormikFile">
                        <Form.Label>첨부 파일</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="taxFile"
                            onChange={handleChange}
                            isInvalid={!!errors.taxFile}/>
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

                            <Form.Group as={Col} md="6" controlId="validationFormikContact">
                                <Form.Label>문의 내용</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    placeholder="문의 내용"
                                    name="storeContact"
                                    value={values.storeContact}
                                    onChange={handleChange}
                                    isInvalid={!!errors.storeContact}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.storeContact}
                                </Form.Control.Feedback>
                            </Form.Group>
                    </Row>



                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "제출 중..." : "입점신청"}
                    </Button>

                </Form>
            )}
        </Formik>
    )
}

export default StoreJoin;