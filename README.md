# Basic Setup FOCUS ON REACT ROUTER / REACT CONTEX / CRUD

### 1. Setup react project/github
 >any notes about this step you want
```
$ yarn create react-app <project-name> 
$ cd <project-name>
$ git remote add origin ssh-link
$ git add .
$ git commit -m'init'
$ git push origin master
$ yarn start 

```
### 2.  Add any 3rd Libraries you know you are going to be using 
> These will change, but some common ones, axios, react-router
```
$ yarn add axios
$ yarn add react-router-dom@6
```

# Basic React Router Setup
 1. make sure react-router-dom@6 is installed

``` 
$ yarn add react-router-dom@5
```

 2. Setup BrowserRouter in update index.js

```javascript
import {BrowserRoutere} from 'react-router-dom'

ReactDom.rendeer (
<BrowserRouter>
<App />
<BrowserRouter>, 
document.getElementById('root')
);
```
 3. Create your pages (components)
```javascript

const Users = () => {
  return (
    <div>
    <h1>User Page</h1>
    </div>
)}
export default Users

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>hell yeah</p>
    </div>
)}
export default About


```

 4. Basic App.js set up demo

apps.js
```javascript
import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Users App</h1>
      <nav style={{
        border: '2px solid green',
      }}
      >
        <Link to='/users'>Users</Link> | {' '}
        <Link to='/about'>About</Link>
      </nav>
// the Outlet makes the pages appear
      <Outlet/>
    </div>
  );
}

export default App;
```
index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Pages/Users';
import About from './Pages/About';


ReactDOM.render(
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='/users' element={<Users />} />
      <Route path='/about' element={<About/>}/>
      </Route>
 </Routes>
  </BrowserRouter>,
  
  document.getElementById('root')
);
```
# Context Basics
1. Create a provider
```javascript

import React, {useState} from "react";
import User from "../Pages/User";


export const DataContext = React.createContext()

//--------------------------------------------
const DataProvider = (props) => {
  const [users,setUsers] = useState([])
  const [demostate,setDemoState] = useState('hi I am demoState from the data provider')
  
  // this is creating an object that will be 'global state'
  const dataProviderState = {user: users,demoState: demostate,x: 1}
  // return the provider which will wrap my app
  return (
    <DataContext.Provider value={dataProviderState}>
    {props.children}
    </DataContext.Provider>
)
}
export default DataProvider
```
2. Wrap our app in created provider

```javascript
ReactDOM.render(
  ==<DataProvider>==

  <BrowserRouter>
  ... WHAT EVER APP HERE
 </BrowserRouter>,

  ==</DataProvider>,==
  document.getElementById('root')
);
```
