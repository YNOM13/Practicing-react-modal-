import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Find from "./components/Find/Find";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/*" element={<Find/>}/>
        <Route path="/open/main" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
