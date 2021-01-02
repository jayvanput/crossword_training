import Sidebar from "./Sidebar/Sidebar"
import './App.css'
import Header from './Header'
function App() {
  return (
    <div className="container p-0" id="app-container">
      <div className="row-fluid">
        <Header />
      </div>
      <div className="row-fluid">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;