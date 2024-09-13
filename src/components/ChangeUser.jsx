import { useContext } from "react"
import UserContext from "../context/UserContext"
function ChangeUser() {
   const{userName, changeUserName}=useContext(UserContext)
  return (
    <button onClick={()=>changeUserName(userName==="Andrei"? "Bogdan":"Andrei")}>
        Change user
    </button>
  )
}

export default ChangeUser