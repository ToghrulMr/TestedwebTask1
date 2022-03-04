import Navbar from './Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Login from './components/LoginPage/Login';
import { BrowserRouter as Router, } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
            <GlobalStyle/>
        <Navbar />
         <Login/>
      </Router>
   
    </>
  );
}

export default App;
