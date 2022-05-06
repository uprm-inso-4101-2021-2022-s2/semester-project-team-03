
import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import Widget from "./components/Widget"
function App() {
  return (
    <div className="app">


        {/*sidebar */}
        <Sidebar/>
         {/*feed */}
        <Feed/>
         {/*widget */}
        <Widget/>

    </div>
  );





}
export default App;
