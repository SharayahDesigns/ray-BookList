import React, {useState} from "react";


// createContext HERE this doing a lot for create Context/provider, get and set out data
export const DataContext = React.createContext()


const DataProvider = (props) => {
  const [users,setUsers] = useState([{id:1, name:'jordon'}])
  const [demoState,setDemoState] = useState('hi I am demoState from the data provider')
  
  
  
  // this is creating an object that will be 'global state'
  const dataProviderState = {users, demoState, x: 1, setDemoState}
  // return the provider which will wrap my app
  return (
    <DataContext.Provider value={dataProviderState}>
    {props.children}
    </DataContext.Provider>
)
}


export default DataProvider
