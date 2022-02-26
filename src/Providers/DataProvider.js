import React from "react";
import User from "../Pages/User";


export const DataContext = React.createContext()
const DataProvider = () => {
  const [user,setUsers] = useState([])
  const [demoStat,setDemoStat] = useState('hi I am demoState from the data provider')
  
  const dataProviderState = 
  return (
<DataContext.Provider value={{users: users, demoState:demostate}}
)
}


