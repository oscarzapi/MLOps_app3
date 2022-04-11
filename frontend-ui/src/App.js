import './App.css'
import Home from './components/Home'
import Navigator from './components/Navigator'
import UploadFile from './components/UploadFile'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navigator></Navigator>
        <Routes>
        <Route path='/' exact element={<Home></Home>}></Route>
        <Route path='/batchProcessing' element={<UploadFile></UploadFile>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
