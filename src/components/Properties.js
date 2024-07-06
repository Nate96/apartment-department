//import Carousel from 'react-bootstrap/Carousel';
//TODO: add Carousel

function Properties() {
   const properitiesStyle = {padding:"5px", display:"flex", justifyContent:"center", flexDirection:"row", background:"purple"}
   const pictureStyle = {height:"360px", width:"640px", display:"flux", background:"green"}
   const infoStyle = {display:"flux", alignItems:"left", background:"blue", padding:"10px"}
   
  return (
    <div className='Property-Container' style={properitiesStyle}>
        <div className='Picture-Container'style={pictureStyle}>
           <p>property picture</p>
        </div>
        <div className='info-Container'style={infoStyle}>
           <h1>Address: 1234 lickmaball st</h1>
           <h2>Units</h2>
           <ul title='Units'>
               <li> Unit 1</li>
               <li> Unit 2</li>
           </ul>
        </div>
    </div>
  );
}

export default Properties;
