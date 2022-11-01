import React, { useState } from "react";
import {v4} from "uuid";

const InputForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        if(!name || !email){
            alert("please enter name and email")
        }else{
            const person = {name, email, id: v4()};
            console.log(person.id);
            setPeople((people) => {
                return [...people, person]
            })
            setName('');
            setEmail('');
        }
    }

  return (
    <>
      <form className="form" onSubmit={handelSubmit}>
        <div className="form-control">
          <label htmlFor="name" className="me-1">
            Name :{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ border: "none" }}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="email" className="me-1">
            Email :{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: "none" }}
          ></input>
        </div>
        <button
          type="submit"
          className="bg-primary"
          style={{ borderRadius: "10px" }}
        >
          Clicl Me
        </button>
      </form>
      {
        people.map((person) => {
            const {name, email, id} = person;
            return(
                <div className="item" key={id}>
                    name : {name}
                    email : {email}
                </div>
            )
        })
      }
    </>
  );
};

export default InputForm;
