import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="instruction-info-patterns">
      <h1>Welcome</h1>

        <p>You have found yourself at an <a href="https://adadevelopersacademy.org/" target="_blank">ADA </a>
         developer’s capstone project.</p>

        <p>This site was a self-directed project that I took from concept to production.
        I built this app with React and Redux on the frontend and a Rails API for the backend.
        This app was inspired by my previous career as a math and
        science teacher/tutor. 5 years of teaching students one-on-one, taught me
        that many students struggle with specific patterns within one type of problem.
        </p>

        <p>For example quadratic factoring. While the overall strategies to factoring
        are the same for all problems, it is common for students to struggle with
        the signs. The signs of the expression can be catorigized by patterns
        and identifiying these patterns can help you solve the problem.
        As a tutor, I observed this over and over again and found providing
        students with extra practice on the specific patterns they struggled with lead to the biggest improvements.
        </p>

        <p>But I always wanted a way to serve unlimited targeted practice ... </p>

        <p>Click on <Link to="/signup">sign up</Link> to start to see more and start factoring</p>
    </div>


  );
}

export default Home;
// could import a picture of factoring process ...
// could have your flow chart and example
// and box
