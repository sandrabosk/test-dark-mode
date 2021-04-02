import logo from "./logo.svg";
import "./App.css";
import Darkmode from "darkmode-js";

const options = {
  bottom: "64px", // default: '32px'
  left: "unset", // default: '32px'
  right: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true // default: true
};

const darkmode = new Darkmode(options);

function App() {
  darkmode.showWidget();

  return (
    <div className='App'>
      <header>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>H2 something something</h2>

        <br />

        <p>This is test app.</p>
      </header>
    </div>
  );
}

export default App;
