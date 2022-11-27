import axios from "axios";
import React, { useState } from "react";

const AuthPage = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [depid, setDepId] = useState(0);
  const [email, setEmail] = useState("");

  const submissionHandler = async (e) => {
    e.preventDefault();
    console.log(id, name, contact, depid, email);

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URI}/teacher`,
      {
        id: id,
        contact: contact,
        name: name,
        department_id: depid,
        email: email,
      }
    );

    console.log("success", data);

    // setContact("");
    // setId("");
    // setName("");
    // setEmail("");
    // setDepId("");
  };
  return (
    <>
      <div>AuthPage</div>

      <form onSubmit={submissionHandler} className="flex flex-col items-start">
        <label htmlFor="">id</label>
        <input
          type="number"
          name=""
          id=""
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        <label htmlFor="">name</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="">contact</label>
        <input
          type="number"
          name=""
          id=""
          onChange={(e) => setContact(e.target.value)}
          value={contact}
        />
        <label htmlFor="">depid</label>
        <input
          type="number"
          name=""
          id=""
          onChange={(e) => setDepId(e.target.value)}
          value={depid}
        />
        <label htmlFor="">email</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default AuthPage;
