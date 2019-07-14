import React from 'react';
import "./app.css"

import Posts from './components/Posts'
import PostForm from './components/PostForm'

function App() {
  return (
    <div className = "app">
        <PostForm/>
        <Posts/>
    </div>
  );
}

export default App;
