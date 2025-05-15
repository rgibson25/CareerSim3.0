/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom"
function Navigations(){
    return(
        <h3>Need to register? Sign up <Link to={`/Register`}>here</Link>! 
        <br></br>
        Already have an account? Login <Link to={`/Login`}>here</Link>!
        </h3>
    )
}
export default Navigations