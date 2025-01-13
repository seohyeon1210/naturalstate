import React, {useRef, useState} from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Resizer from "react-image-file-resizer";
import * as formik from 'formik';
import * as yup from 'yup';
import DefaultImg from '../../assets/default.jpg';
import './ProductWrite.css';
import axios from "axios";

const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};

function ProductWrite() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        productName: yup.string().required('제품명을 입력해주세요.'),
        productPrice: yup.number().required('가격을 입력해주세요.').positive('가격은 양수여야 합니다.'),
        productContent: yup.string().required('제품 상세 설명을 입력해주세요.'),
        productCategory: yup
            .string()
            .required("카테고리를 선택해주세요.")
            .notOneOf([""], "카테고리를 선택해주세요."),
    });

    const [thumbnailPreview, setThumbnailPreview] = useState(DefaultImg);
    const [detailPreview, setDetailPreview] = useState(DefaultImg);
    const thumbnailRef = useRef();
    const detailRef = useRef();

    const handleThumbnailChange = async () => {
        const file = thumbnailRef.current.files[0];
        const suppertedFormats = ["image/jpeg", "image/png"];
        console.log("대표 이미지", file);

        if (!file) {
            alert("파일을 선택하세요.");
            return;
        }

        if(!suppertedFormats.includes(file.type)) {
            alert("지원되지 않는 이미지 형식입니다.");
            return;
        }
        try{
            const compressedFile = await resizeFile(file);
            console.log("image incoding after: ", compressedFile);
            setThumbnailPreview(compressedFile);
        } catch(error) {
            console.log("file resizing failed");
            alert("이미지 처리 중 문제가 발생했습니다.");
        }
    }

    const handleDetailChange = async () => {
        const file = detailRef.current.files[0];
        const suppertedFormats = ["image/jpeg", "image/png"];
        console.log("상세 이미지 ", file);

        if (!file) {
            alert("파일을 선택하세요.");
            return;
        }

        if(!suppertedFormats.includes(file.type)) {
            alert("지원되지 않는 이미지 형식입니다.");
            return;
        }
        try{
            const compressedFile = await resizeFile(file);
            console.log("image incoding after: ", compressedFile);
            setDetailPreview(compressedFile);
        } catch(error) {
            console.log("file resizing failed");
            alert("이미지 처리 중 문제가 발생했습니다.");
        }
    }

    const resizeFile= (file) => new Promise((resolve, reject)=> {
        Resizer.imageFileResizer(
            file,
            200,
            200,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64",
            (error) => {
                reject(error);
            }
        );
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={async(values, {setSubmitting, resetForm}) => {
                console.log('폼 제출 시작:', values);

                try {
                    const formData = new FormData();
                    const thumbnailFileName = `${values.productName}_thumbnail.jpg`;
                    const detailFileName = `${values.productName}_detail.jpg`;

                    formData.append('productCategory', values.productCategory);
                    formData.append('productName', values.productName);
                    formData.append('productPrice', values.productPrice);
                    formData.append('productContent', values.productContent);

                    const productData = {
                        product_category: values.productCategory,
                        product_title: values.productName,
                        product_price: values.productPrice,
                        product_content: values.productContent,
                    };
                    formData.append("productData", JSON.stringify(productData));

                    if (thumbnailPreview && thumbnailPreview !== DefaultImg) {
                        const thumbnailBlob = dataURLtoBlob(thumbnailPreview);
                        formData.append('productThumbnailImg', thumbnailBlob, thumbnailFileName);
                    }

                    if (detailPreview && detailPreview !== DefaultImg) {
                        const detailBlob = dataURLtoBlob(detailPreview);
                        formData.append('productDetailImg', detailBlob, detailFileName);
                    }

                    formData.forEach((value, key) => {
                        console.log(`${key}:`, value);
                    });

                    const response = await axios.post('http://localhost:18080/api/productwrite', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    console.log('상품 등록 성공:', response.data);
                    alert('상품 등록이 완료되었습니다.');
                    resetForm();
                    setThumbnailPreview(DefaultImg);
                    setDetailPreview(DefaultImg);
                } catch (error) {
                    console.error('상품 등록 실패:', error);
                    alert('상품 등록에 실패하였습니다. 다시 시도해 주세요.');
                }

                setSubmitting(false);
            }}
            initialValues={{
                productCategory: '',
                productName: '',
                productPrice: '',
                productContent: '',
                thumbnailImg: '',
                detailImg: '',
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit} className="product-write-form">
                    <h5>상품 등록</h5>
                    <hr />
                    <Row>
                        {/* 왼쪽 영역 */}
                        <Col md={6} className="left-section">
                            <Form.Group className="mb-3">
                                <Form.Select
                                    name="productCategory"
                                    value={values.productCategory}
                                    onChange={handleChange}
                                    isInvalid={touched.productCategory && !!errors.productCategory}
                                >
                                    <option value="">카테고리 선택</option>
                                    <option value="1">과일</option>
                                    <option value="2">야채·채소</option>
                                    <option value="3">곡류</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.productCategory}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationFormik01">
                                <Form.Label>제품명</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="productName"
                                    value={values.productName}
                                    onChange={handleChange}
                                    isInvalid={touched.productName && !!errors.productName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.productName}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationFormik02">
                                <Form.Label>가격</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="productPrice"
                                    value={values.productPrice}
                                    onChange={handleChange}
                                    isInvalid={touched.productPrice && !!errors.productPrice}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.productPrice}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationFormik03">
                                <Form.Label>제품 상세 설명</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="productContent"
                                    value={values.productContent}
                                    onChange={handleChange}
                                    isInvalid={touched.productContent && !!errors.productContent}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.productContent}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* 오른쪽 영역 */}
                        <Col md={6} className="right-section">
                            <Form.Group className="mb-3">
                                <Form.Label>상품 대표 이미지</Form.Label>
                                <div className="image-preview">
                                    <img src={thumbnailPreview ? thumbnailPreview : "DefaultImg"} alt="대표 이미지 미리보기" />
                                </div>
                                <Form.Control
                                    type="file"
                                    name="thumbnailImg"
                                    ref={thumbnailRef}
                                    accept="image/*"
                                    onChange={handleThumbnailChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>상품 상세 이미지</Form.Label>
                                <div className="image-preview">
                                    <img src={detailPreview ? detailPreview : "DefaultImg"} alt="상세 이미지 미리보기" />
                                </div>
                                <Form.Control
                                    type="file"
                                    name="detailImg"
                                    ref={detailRef}
                                    accept="image/*"
                                    onChange={handleDetailChange}
                                />
                            </Form.Group>

                            <div className="button-group">
                                <Button type="submit" className="me-2">
                                    등록
                                </Button>
                                <Button type="reset">취소</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}

export default ProductWrite;
