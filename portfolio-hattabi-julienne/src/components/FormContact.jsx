import React, { useState } from "react";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // code pour gérer l'envoi du formulaire
  };

  return (
    <div className="form">
      <h1 className="section_title section_text margin_left">
        Concrétisez votre projet, travaillons ensemble !
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name" className="section_subtitle section_text">
            Nom
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="email" className="section_subtitle section_text">
            Adresse mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form_group ">
          <label htmlFor="message" className="section_subtitle section_text ">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default FormContact;
