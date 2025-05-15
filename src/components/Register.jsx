/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [registeredUser, setRegisteredUser] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  async function register() {
    const response = await fetch(
      `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      }
    );
    const result = response.json();
    console.log(result);
    setRegisteredUser(result);
  }

  return (
    <>
      <h2>
        Welcome to the digital library! You must have an account to reserve
        books. Fill out the form below to register and start reading!
      </h2>
      <form onSubmit={register}>
        <div>
          <h3>
            <label for="First Name">First Name</label>
            <input
              onChange={(event) => {
                setFirstName(event.target.value);
                console.log(firstName);
              }}
              required
              type="text"
            />
            <br />
            <br />
            <label for="Last Name">Last Name</label>
            <input
              onChange={(event) => {
                setLastName(event.target.value);
                console.log(lastName);
              }}
              required
              type="text"
            />
            <br />
            <br /> <label for="email">Email</label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
                console.log(email);
              }}
              required
              type="text"
            />
            <br />
            <br />
            <label for="password">Password</label>
            <input
              onChange={(event) => {
                setPassword(event.target.value);
                console.log(password);
              }}
              required
              type="password"
            />{" "}
            <br />
            <br />
            <button>Submit</button>
            <br />
            <br />
            Already have an account? Login <Link to={"/Login"}>here</Link>!
          </h3>
        </div>
      </form>
    </>
  );
}
export default Register;
