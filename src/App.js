import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <main className='App'>
<>
      <Router basename='/'>
        <Routes>
          <Route path='/' index element={<Login />} />
          <Route path='/Register' element={<Register />} />


        </Routes>
      </Router>
    </>
    </main>
    
  );
}

export default App;