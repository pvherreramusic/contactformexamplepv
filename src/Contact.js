import React from "react";
import "./Contact.css"
require('dotenv').config()

function ButtonSubmit() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, email, message } = event.target;

    // Use your API endpoint URL you copied from the previous step
    const endpoint =`${process.env.REACT_APP_ENDPOINT}`;
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      senderName: name.value,
      senderEmail: email.value,
      message: message.value,
    });
    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        document.getElementById("result-text").innerText =
          "Email sent successfully!";
      })
      .catch((error) => {
        document.getElementById("result-text").innerText =
          "An unkown error occured.";
      });
  });
}

function Contact() {
  return (
    <div className="colorlayout">
    <div className="form">
      <h2>Contact Us</h2>
      <form>
        <label for="name">Name:</label>
        <input name="name" type="text" />
        <br />
        <br />
        <label for="email">Email:</label>
        <input name="email" type="email" />
        <br />
        <br />
        <label for="name">Message:</label>
        <textarea name="message"></textarea>
        <br />
        <br />
        <button id="submit" onClick={ButtonSubmit}>
          Send Message
        </button>
        <div>
          <p id="result-text"></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contact;
