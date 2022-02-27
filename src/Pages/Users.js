import { useContext } from "react"
import { DataContext } from "../Providers/DataProvider"


const Users = () => {
  // const foo = useContext(DataContext)
  const data = useContext(DataContext)
  return (
    <div>
      <h1>Users Page</h1>
      {JSON.stringify(data)}
      <hr/>
      <button onClick={()=>data.setDemoState('changed in Users')}>change text</button>
      <p> {data.demoState} </p>
      
    </div>
)
}

export default Users
