import React, { useRef, useState } from "react";
import styles from "./Joinus.module.css";
import { toast, ToastContainer } from "react-toastify";
import { FiUpload } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Joinus = () => {
  const fileInputRef = useRef(null);
  const documentFileInputRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email_address: "",
    phone_number: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    profession: "",
    message: "",
    photograph: null,
    document: null,
  });
  
  const handleFileChange = (event, name) => {
    const file = event.target.files[0];
    if(file){
    const fileType = file.type;
    const photographAllowedTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
    const documentAllowedTypes = ["application/pdf"];
  
    if (name === "photograph" && photographAllowedTypes.includes(fileType)) {
      setFormData({
        ...formData,
        photograph: file,
      });
    } else if (name === "document" && documentAllowedTypes.includes(fileType)) {
      setFormData({
        ...formData,
        document: file,
      });
    } else {
      toast.error(
        name === "photograph"
          ? "Please upload a .jpg, .jpeg, .png, or .pdf file!"
          : "Please upload a .pdf file!",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    }
  }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleDocumentFileSelect = () => {
    documentFileInputRef.current.click();
  };
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://backend.healthumbrella.org:8000/user-forms/join-us",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Information successfully submitted!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log("Response from backend:", response.data);
    } catch (error) {
      toast.error("Error !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className={styles.join_us}>
      <div className={styles.join_us_content}>
        <div className={styles.join_text}>
          <img
            src="./images/green-ring.png"
            alt="green-ring"
            className={styles.upper_green_ring}
          ></img>
          <div className={styles.join_heading}>
            Join this Movement as a member..
          </div>
          <div className={styles.join_para}>
            This is your space—a confidential and supportive environment where
            your voice can be heard. By filling out the form below, you're
            contributing to a tapestry of inspiration that offers hope,
            guidance, and solace to others walking a similar path.This is your
            space—a confidential and supportive environment where your voice can
            be heard. By filling out the form below, you're contributing to a
            tapestry of inspiration that offers hope, guidance, and solace to
            others walking a similar path.
          </div>
        </div>
        <div className={styles.join_us_form}>
          <div className={styles.fill_form}>Fill the Form!!</div>
          <div className={styles.fill_para}>
            Every donation no matter how big or small makes a significant
            difference to our cause. Thank you for doing your part to help
          </div>
          <form className={styles.form_body} onSubmit={handleSubmit}>
            <div className={styles.first_row}>
              <input
                required
                onChange={handleInputChange}
                name="name"
                value={formData.name}
                className={`${styles.form_inputs} ${styles.form_name}`}
                placeholder="Name*"
              ></input>
              <input
                required
                onChange={handleInputChange}
                type="number"
                name="age"
                value={formData.age}
                className={`${styles.form_inputs} ${styles.form_age}`}
                placeholder="Age*"
              ></input>
              <input
                required
                onChange={handleInputChange}
                name="gender"
                value={formData.gender}
                className={`${styles.form_inputs} ${styles.form_gender}`}
                placeholder="Gender*"
              ></input>
            </div>
            <div className={styles.second_row}>
              <input
                required
                type="text"
                onChange={handleInputChange}
                name="address"
                value={formData.address}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="House no/Street/Landmark*"
              ></input>
              <input
                required
                type="email"
                onChange={handleInputChange}
                name="email_address"
                value={formData.email_address}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="Email*"
              ></input>
            </div>
            <div className={styles.third_row}>
              <input
                type="text"
                required
                onChange={handleInputChange}
                name="city"
                value={formData.city}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="City*"
              ></input>
              <input
                required
                onChange={handleInputChange}
                name="phone_number"
                type="tel"
                value={formData.phone_number}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="Phone no*"
              ></input>
            </div>
            <div className={styles.fourth_row}>
              <input
                required
                type="text"
                onChange={handleInputChange}
                name="state"
                value={formData.state}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="State*"
              ></input>
              <input
                required
                type="text"
                onChange={handleInputChange}
                name="country"
                value={formData.country}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="Country*"
              ></input>
            </div>
            <div className={styles.fifth_row}>
              <input
                required
                type="text"
                onChange={handleInputChange}
                name="profession"
                value={formData.profession}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="Profession*"
              ></input>
              <input
                required
                type="number"
                onChange={handleInputChange}
                name="pincode"
                value={formData.pincode}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="Pin Code*"
              ></input>
            </div>
            <textarea
              type="text"
              onChange={handleInputChange}
              name="message"
              value={formData.message}
              rows="6"
              cols="100"
              className={`${styles.form_inputs} ${styles.form_message}`}
              placeholder="Message"
            ></textarea>
            <div className={`${styles.upload_file}`}>
              <div className={styles.upload_photo}>Recent Photograph :</div>
              <label
                onClick={handleUploadClick}
                className={styles.upload}
          
              >
                <FiUpload size={18} color="#000000" /> Upload
              </label>
              <input
                required
                accept=".jpg, .jpeg, .png"
                name="photograph"
                onChange={(e) => handleFileChange(e, "photograph")}
                type="file"
                id="photo"
                hidden
                ref={fileInputRef}
              ></input>
            </div>
            <div className={styles.upload_file}>
              <div style={{ marginRight: "2rem" }}>
                Document(Aadhar/PAN/Govt. ID Proof) :
              </div>
              <label
                onClick={handleDocumentFileSelect}
                className={styles.upload}
              >
                <FiUpload size={18} color="#000000" />
                Upload
              </label>
              <input
                required
                ref={documentFileInputRef}
                accept=".pdf"
                 hidden
                name="document"
                onChange={(e) => handleFileChange(e, "document")}
                type="file"
                id="docu"
                style={{ marginLeft: "0.5%" }}
              ></input>
            </div>
            <div className={styles.terms}>
              <input
                required
                type="checkbox"
                style={{ marginBottom: "1.5rem", marginRight: "0.5rem" }}
              ></input>
              <div style={{ fontSize: "13px", fontWeight: "500" }}>
                I hereby declare that the information given by me in the here is
                true, complete and correct to the best of my knowledge* :{" "}
                <span style={{ color: "red" }}>*</span>
              </div>
            </div>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
            <div style={{ fontSize: "11px", fontWeight: "500" }}>
              Anyone who is interested to join our NGO/movement and contribute
              for the cause are most welcome. Initial work of the members is to
              spread the awareness about this movement to others. At the same
              time look for testimonials/ patients who are cured by a specific
              therapy. One should be 100 % honest without any biasing in giving
              the data. Later a member may become a state representative or
              country representative if he /she really proves worthy.
            </div>
            <ToastContainer />
          </form>
          <img
            src="./images/green-ring-reverse.png"
            alt="green-ring"
            className={styles.lower_green_ring}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
