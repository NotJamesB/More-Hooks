import React, {useState} from 'react';
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const createUser = (u) => {
        u.preventDefault();

        const newUser = {firstName,lastName,email,password,confirmPassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return(
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)}></input>
                {firstName.length < 2 ? <p>First name must be at least 2 characters</p> : null}
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}></input>
                {lastName.length < 2 ? <p>Last name must be at least 2 characters</p> : null}
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                {email.length < 5 ? <p>The email must be at least 5 characters</p>: null}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {password.length < 8 ? <p>Password must be at least 8 characters </p>: null}
            </div>
            <div>
            <label>Confirm Password: </label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            {confirmPassword !== password ? <p>Passwords must match</p> : null}
            </div>
            <input type="submit" value="Create New User"></input>
            <div>
                First Name: {firstName}
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
        
    );
};

export default HookForm;