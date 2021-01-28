import './App.css';
import profileImage from './img/ian_profile.jpg'

function App() {
  return (
    <div className="App">
      <h1> My Biz Card </h1>
      <h2> Author: Ian Smith </h2>
      <p> Web Builder Extraordinaire </p>
      <ul><li>Now with more ACTIONS!</li></ul>
      <img className="headshot" src={profileImage} alt="Profile Image" />
    </div>
  );
}

export default App;
