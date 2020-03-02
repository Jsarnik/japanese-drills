import React, {useState, useEffect} from 'react';
import './App.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QuestionsAndAnswers from './components/QuestionsAndAnswers';
import Phrases from './components/Phrases';
import data from './data.json';

function App() {
  const [isMobile, setIsMobile] = useState(false);

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
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="questions"
          id="questions"
        >
          Questions
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <QuestionsAndAnswers data={data.questions} isMobile={isMobile}></QuestionsAndAnswers>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="questions"
          id="questions"
        >
          Phrases
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Phrases data={data.phrases} isMobile={isMobile}></Phrases>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default App;
