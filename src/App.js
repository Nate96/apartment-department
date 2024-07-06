import Nav from './components/Nav';
import Properties from './components/Properties'

function App() {
   const AppStyle = {
      display:"flex",
      flexDirection:"column",
      hight:"1920px",
      width:"1080px",
   }
   
  return (
     <div className="App" style={AppStyle}>
        <Nav/>
        <Properties/>
     </div>
  );
}

export default App;
