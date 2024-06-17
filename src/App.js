import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <div style={{ overflow: "hidden", backgroundColor:"#F7F2FF"}}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
