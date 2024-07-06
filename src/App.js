import './App.css';
import Nav from './components/Nav';
import CoverBackround from './logo.svg'

function App() {
   const coverSytle = {
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      display: "flex",
      padding: "10% 5vw 5% 3vw",
      minHeight: "40vh",
      backgroundImpage: `url(${CoverBackround})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
   }

   const navSytle = {
      display:"flex",
      alignItems: "center"
   }
   
   const coverMessage = 'Come Stay at the best places we have to offer'

  return (
     <div className="App">
        <div className='nav' style={navSytle}>
          <Nav/>
        </div>
        <div className='cover' style={coverSytle}>
              <p>{coverMessage}</p>
        </div> 
        <div className='listings'>
           <div className='listings-container'></div>
        </div> 
     </div>
  );
}

export default App;
