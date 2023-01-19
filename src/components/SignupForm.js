import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { register, login } from "../actions/auth";

const SignupForm = () => {

    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            repeatpassword: "",
            termsOf: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email required"),
            password: Yup.string()
                //.min(8, "Minimum 8 symbols")
                .required("Password required")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
            repeatpassword: Yup.string().when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                )
            })
        }),
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(register(values.email, values.password))
                .then(() => {
                    setSuccessful(true);
                    ///// MOVE TO PROFILE AFTER REGISTRATION ///////
                    dispatch(login(values.email, values.password)).then(r =>
                        navigate("/profile")
                    )
                })
                .catch(() => {
                    setSuccessful(false);
                });
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

                    {formik.values.password && !formik.errors.password ? (
                        <FloatingLabel label="Repeat password">
                            <Form.Control
                                type="password"
                                placeholder="x"
                                {...formik.getFieldProps("repeatpassword")}
                            />
                            {formik.touched.repeatpassword && formik.errors.repeatpassword ? (
                                <div className="form-alert">{formik.errors.repeatpassword}</div>
                            ) : null}
                        </FloatingLabel>
                    ) : null}
                </FloatingLabel>

                <div className="redAlert" >{message}</div>

                <Button type="submit">SIGN UP</Button>
            </Form>
        </div>
    );
};
export default SignupForm;
