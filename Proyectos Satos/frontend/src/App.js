
import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
function App() {
  return (
    <div className="app">


        {/*sidebar */}
        <Sidebar/>
         {/*feed */}
        <Feed/>
         {/*widget */}
        <Widgets/>

    </div>
  );





}
export default App;
