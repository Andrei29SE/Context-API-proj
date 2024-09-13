import { createContext } from "react";
// Значение по умолчанию можно указать в вызове фунецииб в данном слкчае если React не найдет .Provider он исполузует "Bogdan"
const UserContext = createContext({
    userName: '',
    changeUserName: ()=>{}
})

export default UserContext