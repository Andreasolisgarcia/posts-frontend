import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'moment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Login from './assets/Pages/Login';
import Posts from './assets/Pages/Posts';
import Signin from './assets/Pages/Signin';

const URL = "http://127.0.0.1:3000/posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const dateFormater = (string) => {
    let formatedDate = Moment(string).format('MM/DD/YYYY [à] HH:mm');
    return formatedDate;
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Posts posts={posts} dateFormater={dateFormater} />}
          />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

