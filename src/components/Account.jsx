/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import {useState} from 'react'
function Account(){
    const[account, setAccount] = useState([])
    async function getAccount(){
        const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me")
        const result = await response.json()
        setAccount(result)
    }
    return(
        <>
        </>
    )
}
export default Account