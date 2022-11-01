import React, { useState } from "react";
import { v4 } from "uuid";

const InputForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
  const [person, setPerson] = useState({name: "", email: "", age: 0, id: ""})
  const [people, setPeople] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    if(person.name && person.email && person.age){
        const newPerson = {...person, id : v4()};
        setPeople([...people, newPerson]);
        setPerson({name: "", email : "", age : 0, id : ""})
    }
  }

  const handelClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value})
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
            value={person.name}
            onChange={handelClick}
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
            value={person.email}
            onChange={handelClick}
            style={{ border: "none" }}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="age" className="me-1">
            age :
          </label>
          <input
            type="text"
            name="age"
            id="age"
            value={person.age}
            onChange={handelClick}
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
      {people.map((person) => {
        const { name, email, id, age } = person;
        return (
          <div className="item" key={id}>
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>email : {email}</p>
            {/* email : {email} */}
          </div>
        );
      })}
    </>
  );
};

export default InputForm;
