import React, { useRef } from "react";

export default function Uncontrolled() {

    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value
        };
        console.log('Uncontrolled Form submitted with values:', values);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName"
                placeholder="First Name"
                ref={firstNameRef}
            />
            <input 
                type="text" 
                name="lastName"
                placeholder="Last Name"
                ref={lastNameRef}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

