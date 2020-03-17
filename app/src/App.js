import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Directory from './components/Directory';
import FlashCards from './components/FlashCards';
import AddCard from './components/AddCard';
import EditCards from './components/EditCards';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import * as _ from 'lodash';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setIsMobile(window.outerWidth <= 767);

    const handleResize = () => {
      setIsMobile(window.outerWidth <= 767);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize, true);
    }
  },[]);

  return (
    <div className="App" style={{width: '85%', margin: '0 auto'}}>      
      <BrowserRouter>
          <header style={{textAlign: 'left'}}>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            Menu
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <a href="/"><MenuItem onClick={handleClose}>Lessons</MenuItem></a>
            <a href="/add"><MenuItem onClick={handleClose}>Add</MenuItem></a>
            <a href="/edit"><MenuItem onClick={handleClose}>Edit</MenuItem></a>
          </Menu>
          </header>
          <main className="main-content">
              <Switch>
                  <Route exact path="/" render={(props) => <Directory/>} />
                  <Route exact path="/flashcards/:lesson" render={(props) => <FlashCards isMobile={isMobile}/>} />
                  <Route exact path="/flashcards/:lesson/e" render={(props) => <FlashCards isMobile={isMobile} isEnglishFirst={true} />} />
                  <Route exact path="/add" render={(props) => <AddCard isMobile={isMobile}/>} />
                  <Route exact path="/edit" render={(props) => <EditCards isMobile={isMobile}/>} />
                  <Redirect to="/"/>
              </Switch>
          </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
