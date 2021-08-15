import {createContext} from "react";

const UserContext = createContext({
    firstName: "Bruce",
    lastName: "Wayne",
    age: "32",
    email:"bruce@wayne.com"
})

export default UserContext;