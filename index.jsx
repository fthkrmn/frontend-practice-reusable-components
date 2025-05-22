import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card/Card"
import { ICONS } from "./components/Card/CardIcons"
import ToastManager, { showToast } from "/components/Toast/Toast"

function App() {
  return (
    <>
      <div className="badges-list">
        <Badge color="gray">Badge</Badge> 
        <Badge color="red">Badge</Badge> 
        <Badge color="yellow">Badge</Badge> 
        <Badge color="green">Badge</Badge>
        <Badge color="blue">Badge</Badge> 
        <Badge color="indigo">Badge</Badge> 
        <Badge color="purple">Badge</Badge> 
        <Badge color="pink">Badge</Badge> 
        <Badge is_pill color="gray">Badge</Badge> 
        <Badge is_pill color="red">Badge</Badge> 
        <Badge is_pill color="yellow">Badge</Badge> 
        <Badge is_pill color="green">Badge</Badge>
        <Badge is_pill color="blue">Badge</Badge> 
        <Badge is_pill color="indigo">Badge</Badge> 
        <Badge is_pill color="purple">Badge</Badge> 
        <Badge is_pill color="pink">Badge</Badge>
      </div>
      <br/>
      <hr/>
        <Banner/>
      <br/>
      <hr/>
      <div className="cards-container">
        <Card 
          icon={<img src={ICONS.cloud} alt="Cloud Icon" className="card-icon" />}
          title="Easy Deployment" 
          descr="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
        />
        <Card
          icon={<img src={ICONS.cloud} alt="Cloud Icon" className="card-icon" />}
          title="Cloud Service"
          descr="Reliable cloud infrastructure for your app."
        />
      </div>
      <hr/>
      <div className="toast-popup-container">
        <button onClick={() => showToast({ type: 'warning', message: 'Heads up! This is a warning' })}>
          Show Toast Popup
        </button>
        <ToastManager />
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
