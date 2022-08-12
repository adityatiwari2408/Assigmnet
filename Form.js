import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Form.css"



const Formsubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let Lastname = e.target.lastname.value;
    let Gender = e.target.Gender.value;
    let Contact = e.target.contact.value;
    localStorage.setItem("Name", name);
    localStorage.setItem("Lastname", Lastname);
    localStorage.setItem("Gender", Gender);
    localStorage.setItem("Contact", Contact);
    window.location.href = "http://localhost:3000/Signin";

}


const Cancelhandeler = (e) => {
    e.preventDefault();
    e.target.name.value = " ";
    e.target.lastname.value = " ";
    e.target.Gender.value = " ";
    e.target.contact.value = " ";
}
export default function Form(props) {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [gender, setgender] = useState("");
    const [contact, setcontact] = useState("");
    const navigate = useNavigate();
    return (
        <div className='container'>
            <h1 className='text'>Entry card Details</h1>
            <div className='card'>
                <form className='form' onSubmit={Formsubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input typeof='text' placeholder='Name' required maxLength={20} name="name" onChange={(e) => setname(e.target.value)} />
                    <label htmlFor='last name'>Last name:</label>
                    <input typeof='text' placeholder='Last Name' required name='lastname' onChange={(e) => setlastname(e.target.value)} />
                    <label htmlFor='Gender'>Gender:</label>
                    <div className='radio'>
                        <input type="radio" value={"male"} name="Gender" onChange={(e) => setgender(e.target.value)} />Male
                        <input type="radio" value={"Female"} name="Gender" onChange={(e) => setgender(e.target.value)} />Female
                    </div>
                    <label htmlFor='Contact NO'>Contact no:</label>
                    <input typeof='tel' placeholder='Contact no' required name="contact" maxLength={10} onChange={(e) => setcontact(e.target.value)} />
                    <button type='submit' value={"submit"} className="btn-success">Submit</button>
                    <button type='cancel' value={"cancel"} className='btn-cancel' onClick={Cancelhandeler}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

