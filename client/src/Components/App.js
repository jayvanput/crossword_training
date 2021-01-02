import Sidebar from "./Sidebar/Sidebar"
import Interface from "./Interface/Interface"
import Header from './Header'
import './App.css'

function App() {
  return (
    <div className="container p-0" id="app-container">
      <div className="row-fluid">
        <Header />
      </div>
      <div className="row">
        <Sidebar />
        <Interface />
      </div>
    </div>
  );
}

export default App;