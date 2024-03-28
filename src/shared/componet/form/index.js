import { useEffect, useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./contactForm.scss";

import { ToastContainer, toast } from "react-toastify";

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    agree: false,
  });

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setFormData({
        name: "",
        email: "",
        phone: "",
        comments: "",
        agree: false,
      });
      localStorage.setItem("formData", JSON.stringify(formData));
      form.reset();
      setValidated(true);
      // notify();
    }
    setValidated(false);
  };

  const notify = () => {
    let { name, email, phone, comments, agree } = formData;
    if (name && email && phone && comments && agree !== '') {
      toast.success("Form submitted successfully!", {
        position: "top-right",
      });
    } else {
      toast.error("Error submitting form!", {
        position: "top-right",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  return (
    <Form
      className="form"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <div className="form_main">
        <Row className="mb-3 form_field">
          <Form.Group className="form_input" as={Col} md="4" controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="form_input" as={Col} md="4" controlId="validationCustom02">
            <Form.Control
              required
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="form_input" as={Col} md="4" controlId="validationCustomNumber">
            <InputGroup hasValidation>
              <Form.Control
                type="tel"
                placeholder="Your Phone"
                aria-describedby="inputGroupPrepend"
                name="phone"
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              className="textarea"
              as="textarea"
              required
              placeholder="Leave a comment here"
              style={{ height: "150px" }}
              name="comments"
              onChange={handleChange}
            />
          </FloatingLabel>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            name="agree"
            onChange={handleChange}
          />
        </Form.Group>
        <Button onClick={notify} type="submit">
          Submit form
        </Button>
        <ToastContainer />
      </div>
    </Form>
  );
}

export default ContactForm;
