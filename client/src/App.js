import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import Detail from './pages/detail'; // make sure the path is correct

const App = () => {
  
  

  const posts = [
      {'id':'1', 
      'title': 'Joe',
      'author':'19', 
      'description': 'Timid'},
      {'id':'2', 
      'title': 'Meep',
      'author':'11', 
      'description':"Courageous"},
      {'id':'3', 
      'title': 'Deez',
      'author':'9', 
      'description':"Bold"},
      {'id':'4', 
      'title': 'Doe',
      'author':'5', 
      'description':"Kind"},
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/detail/:id",
      element: <Detail />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Amongus character creator!</h1>
        <Link to="/"><button className="headerBtn"> Sample characters </button></Link>
        <Link to="/new"><button className="headerBtn"> Create one! </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
