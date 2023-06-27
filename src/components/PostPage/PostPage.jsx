import React, { useState } from "react";
import s from "./PostPage.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser, savePhotoSuccess } from "../../redux/appReducer";
import { getPhotoURL } from "../../redux/appSelector";

const PhoneInput = ({ field, form, ...rest }) => {
  return (
    <div style={{ width: "100%" }}>
      <InputMask
        {...field}
        {...rest}
        mask="+38 (999) 999-99-99"
        placeholder="Phone"
      />
    </div>
  );
};

const PostPage = (props) => {
  const dispatch = useDispatch();
  const photoUserURL = useSelector(getPhotoURL);

  const [isPhotoSelected, setIsPhotoSelected] = useState(false);

  const onPhotoSelected = (e) => {
    // console.log(e.target.value);
    let photoURL = e.target.value;
    dispatch(savePhotoSuccess(photoURL));
    // if (e.target.files.length) {
    //   props.savePhoto(e.target.files[0]);
    // }
    setIsPhotoSelected(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.name) {
      errors.name = "Required";
    } else if (!/^.{2,60}$/.test(values.name)) {
      errors.name = "Username should contain 2-60 characters";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }

    // if (!values.photo) {
    //   errors.photo = "Required";
    // }
    // if (values.email && values.name && values.phone) {
    //   console.log("values");
    // }
    return errors;
  };

  const submit = async (values, { setSubmitting }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      position_id: Number(values.radioOption),
      photo: photoUserURL,
    };
    console.log(newUser);
    dispatch(createNewUser(newUser));
    setSubmitting(false);
  };

  

  return (
    <div className={s.postPage}>
      <div className={s.postPageContent}>
        <h1>Working with POST request</h1>
        <div className={s.postPageContentForm}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              radioOption: "frontend",
            }}
            validate={validate}
            onSubmit={submit}
          >
            {({ isSubmitting, errors, touched, isValid }) => (
              <Form>
                <Field
                  type="text"
                  name="name"
                  className={s.postPageContentFormInput}
                  placeholder="Your name"
                  style={
                    errors.name && touched.name
                      ? { border: "2px solid #CB3D40" }
                      : {}
                  }
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{
                    color: "#CB3D40",
                    display: "flex",
                    position: "relative",
                    top: "-50px",
                    left: "-70px",
                    fontSize: "12px",
                    width: "200px",
                  }}
                />
                <Field
                  type="email"
                  name="email"
                  className={s.postPageContentFormInput}
                  style={
                    errors.email && touched.email
                      ? { border: "2px solid #CB3D40" }
                      : {}
                  }
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{
                    color: "#CB3D40",
                    display: "flex",
                    position: "relative",
                    top: "-50px",
                    left: "-120px",
                    fontSize: "12px",
                    width: "110px",
                  }}
                />

                <Field
                  type="phone"
                  name="phone"
                  className={s.postPageContentFormInput}
                  placeholder="Phone"
                  component={PhoneInput}
                  style={
                    errors.phone && touched.phone
                      ? { border: "2px solid #CB3D40" }
                      : {}
                  }
                />
                <p className={s.postPageContentFormInputPhone}>
                  +38 (XXX) XXX - XX - XX
                </p>

                <div className={s.postPageContentFormInputRadio}>
                  <p>Select your position</p>
                  <div>
                    <label>
                      {" "}
                      <Field type="radio" name="radioOption" value="1" />{" "}
                      <span>Frontend developer</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      {" "}
                      <Field type="radio" name="radioOption" value="2" />{" "}
                      <span>Backend developer</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      {" "}
                      <Field type="radio" name="radioOption" value="3" />{" "}
                      <span>Designer</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field type="radio" name="radioOption" value="4" />
                      <span>QA</span>
                    </label>
                  </div>
                </div>

                <div className={s.postPageContentFormPhoto}>
                  <Field
                    component="input"
                    type="file"
                    name="photo"
                    // required
                    onChange={onPhotoSelected}
                  />
                  {!isPhotoSelected && <div>Upload your photo</div>}
                  {isPhotoSelected && (
                    <div style={{ color: "black" }}>Item</div>
                  )}
                </div>
                {/* <ErrorMessage
                  name="photo"
                  component="div"
                  style={{
                    color: "#CB3D40",
                    display: "flex",
                    position: "relative",
                    top: "-50px",
                    left: "-120px",
                    fontSize: "12px",
                    width: "110px",
                  }}
                /> */}

                <div className={s.postPageContentFormButton}>
                  <button
                    type="submit"
                    disabled={isSubmitting | !isValid}
                    className={
                      isValid
                        ? s.postPageContentFormButtonBD
                        : s.postPageContentFormButtonB
                    }
                    onClick={props.onSubmit}
                  >
                    Sign up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
