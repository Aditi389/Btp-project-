import React, { useState } from "react";
import styles from "./Joinus.module.css";

const Joinus = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    email: "",
    city: "",
    contact: "",
    state: "",
    country: "",
    profession: "",
    message: "",
    file1: null,
    file2: null,
    agreedToTerms: false,
  });
  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      agreedToTerms: event.target.checked, });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    const name=event.target.name;
    setFormData({
      ...formData,
      [name]: file,
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!formData.agreedToTerms) {
      alert('Please agree to the terms and conditions before submitting.'); // Display an alert if not agreed
      return;
    }
    try {
            const response = await fetch('/user-forms/join-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        console.log("working fine");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
  };
  return (
    <div className={styles.join_us}>
      <div className={styles.join_us_content}>
      <img src="./images/green-ring.png" alt="green-ring" className={styles.upper_green_ring}></img>
      <img src="./images/green-ring-reverse.png" alt="green-ring" className={styles.lower_green_ring}></img>
        <div className={styles.join_text}>
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
                onChange={handleInputChange}
                name="address"
                value={formData.address}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="House no/Street/Landmark*"
              ></input>
              <input
              required
                onChange={handleInputChange}
                name="email"
                value={formData.email}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="Email*"
              ></input>
            </div>
            <div className={styles.third_row}>
              <input
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
                name="contact"
                value={formData.contact}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="Phone no*"
              ></input>
            </div>
            <div className={styles.fourth_row}>
              <input
              required
                onChange={handleInputChange}
                name="state"
                value={formData.state}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="State*"
              ></input>
              <input
              required
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
                onChange={handleInputChange}
                name="profession"
                value={formData.profession}
                className={`${styles.form_inputs} ${styles.form}`}
                placeholder="Profession*"
              ></input>
            </div>
            <textarea
              onChange={handleInputChange}
              name="message"
              value={formData.message}
              rows="6"
              cols="100"
              className={`${styles.form_inputs} ${styles.form_message}`}
              placeholder="Message"
            ></textarea>
            <div className={`${styles.upload_file}`}>
              <label htmlFor="myfile">Recent Photograph :</label>
              <input className={styles.photo_upload}
              name="file1"
              onChange={handleFileChange}
                accept=".jpg, .jpeg, .png, .pdf"
                type="file"
              ></input>
            </div>
            <div className={styles.upload_file}>
              <label htmlFor="myfile">
                Document(Aadhar/PAN/Govt. ID Proof) :
              </label>
              <input
              name="file2"
              onChange={handleFileChange}
                accept=".pdf"
                type="file"
                id="myfile"
                style={{ marginLeft: "0.5%" }}
              ></input>
            </div>
            <div className={styles.terms}>
              <input
            checked={formData.agreedToTerms}
            onChange={handleCheckboxChange}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
