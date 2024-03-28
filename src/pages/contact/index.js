
import "./contact.scss";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "../../shared/componet/form";

export default function Contact() {
  return (
    <div className="contact_main">
      <div className="contact_us">
        <>
          <div className="contact_aligment">
            <div className="contact_icon">
              <BsTelephone className="icon" />
            </div>
            <div className="contact_text">
              <span>Call To Us</span>
            </div>
          </div>
          <div className="text">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </>
        <>
          <div className="contact_aligment">
            <div className="contact_icon">
              <MdOutlineEmail className="icon" />
            </div>
            <div className="contact_text">
              <span>Write To US</span>
            </div>
          </div>
          <div className="text">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </>
      </div>
      <div className="contact_form">
        <div className="form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
