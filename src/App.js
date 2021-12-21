import { useReducer } from 'react';

import { Routes, Route } from 'react-router-dom';

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import NewPost from './pages/CreatePost';
import Home from "./pages/Home";



const INIST_STATE = {
    name: "Feisbrut",
    nav : [
    { link: "/", label: "Home" },
    { link: "/new-post", label: "Create new post" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
  ],
  friendsPreview: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change-name":
      return { ...state, name:"Feisbell"};
    default:
        return state;
  }
};


function App() {
  const [state, dispatch] = useReducer(reducer, INIST_STATE);

  return (
    <div>
      <Header name={state.name} links={state.nav} />

      <button onClick={()=> dispatch({type:"change-name"})}> Cambia nome </button>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new-post" element={<NewPost />}/>
        <Route path="/messages" element={<h3>Messages</h3>}/>
        <Route path="/friends" element={<h3>Friends</h3>}/>

      </Routes>
      
      
      <Footer />
    </div>
  );
}

export default App;