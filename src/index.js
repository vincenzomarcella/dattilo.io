import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function App() {
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );

  const onChange = event => setValue(event.target.value);

  return (
    <div className="App">
      <div className="Typewriter">
        <textarea value={value} onChange={onChange} className="Typewriterinput" wrap="soft" autoFocus="true" placeholder='Type here...'></textarea>
      </div>
      <footer>
        <p><small>&#169; Vincenzo Marcella 2022</small></p>
      </footer>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
