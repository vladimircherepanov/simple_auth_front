import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';


import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { login } from "../actions/auth";


const SigninForm = () => {

    let navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email required"),
            password: Yup.string().required("Password required")
        }),
        onSubmit: (values) => {
            setLoading(true);
            alert(JSON.stringify(values, null, 2));

                dispatch(login( values.email, values.password))
                    .then(() => {
                        navigate("/profile");
                        window.location.reload();
                    })
                    .catch(() => {
                        setLoading(false);
                    })
            /*if (isLoggedIn) {
                return <Navigate to="/profile" />;
            }*/

        }
    });

    return (
        <div className="signupForm">
            <Form onSubmit={formik.handleSubmit}>
                <FloatingLabel id="email" label="Email address">
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="form-alert">{formik.errors.email}</div>
                    ) : null}
                </FloatingLabel>

                <FloatingLabel id="password" label="Password">
                    <Form.Control
                        placeholder="x"
                        type="password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="form-alert">{formik.errors.password}</div>
                    ) : null}
                </FloatingLabel>
                <a href>Forgot password?</a>

                <Button type="submit">SIGN IN</Button>
            </Form>
        </div>
    );
};
export default SigninForm;
