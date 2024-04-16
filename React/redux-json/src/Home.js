import React from "react"
import { useSelector } from "react-redux"

function Home(){

    let users = useSelector(state=>state.users);
    console.log(users)
    return(
        <div>
            Home
        </div>
    )
}
export default Home