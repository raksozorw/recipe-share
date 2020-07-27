import React from "react";
import history from "../history";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='container-fluid home'>
      <img
        className='container-fluid main-image'
        src={require("../images/Home-thin.png")}
        alt='logo'
      ></img>

      <div className='home-text'>
        <div className='container wrapper icon-text'>
          <div className='icon-each container'>
            <Link
              className='link'
              onClick={() => {
                history.push("/streams/new");
                window.location.reload();
              }}
            >
              <img
                src='https://image.flaticon.com/icons/svg/1250/1250616.svg'
                className='icon'
                alt='create'
              ></img>
              <p>Create a recipe.</p>
            </Link>
          </div>
          <div className='icon-each container'>
            <Link to='/recipes' className='link'>
              <img
                src='https://i.pinimg.com/originals/e4/4c/57/e44c577196d295eb166d7455078f5ca9.png'
                className='icon'
                alt='existing recipes'
              ></img>
              <p>See existing recipes.</p>
            </Link>
          </div>
        </div>
        <div className='container container-sm info'>
          <p>La Recette makes social recipe sharing easy and fun.</p>

          <p>
            {" "}
            <Link
              className='link'
              onClick={() => {
                history.push("/streams/new");
                window.location.reload();
              }}
            >
              Create your own recipe,&nbsp;
            </Link>
            or post links to your favourites.
          </p>
        </div>
        <img
          className='logo'
          src={require("../../src/images/no-text-logo.png")}
          alt='logo'
        ></img>
      </div>
      <div className='marble-div'></div>
    </div>
  );
};

export default Home;
