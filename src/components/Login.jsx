/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react"
import { Link } from "react-router-dom"
function Login(){
    const [loggedinUser, setLoggedinUser] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    async function login() {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email:email,
                    password:password,
                }),
            }
        );
        const result = response.json();
        console.log(result);
        setLoggedinUser(result);
    }
    return(
        <>
        <h2>Welcome back! Please login to reserve your favorite books!</h2>
        <form onSubmit={login}>
            <div>
                <h3>
                <label for="email">Email</label>
                <input onChange={(event)=>{
                    setEmail(event.target.value);
                    console.log(email);
                }} required type="text"/>
                <br/>
                <br/>
                <label for="password">Password</label>
                <input onChange={(event)=>{
                    setPassword(event.target.value);
                    console.log(password);
                }} required type="password"/>
                <br/>
                <br/>
                <button>Submit</button>
                <br/>
                <br/>
                Don't have an account? Register <Link to={"/Register"}>here</Link>!
                </h3>
            </div>
        </form>
        </>
    )
}
export default Login