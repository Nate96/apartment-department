function Nav() { 
   const navStyle = {
      display:"flex",
      flexDirection:"row",
      top:"0",
      left:"0",
      width:"100%",
      backGround:"green",
      zIndex:"100",
      height:"87px"
   }

   const righHalf = {    
      width: "50%",
      justifyContent: "flex-end",
      display: "flex",
      alignItems: "center"
   }

   const leftHalf = {    
      width: "50%",
      justifyContent: "left",
      display: "flex",
      alignItems: "center"
   }

   return (
      <div style={navStyle}>
          <div className="home-button" style={leftHalf}>
            <a href="www.google.com" style={{paddingLeft:"10px"}}>DBQStay.com</a> </div>
         <div className="other-links"style={righHalf}>
            <a href="www.google.com" style={{paddingRight: "5px", paddingLeft:"5px"}}>About</a>
            <a href="www.google.com" style={{paddingRight: "10px", paddingLeft:"5px"}}>contact</a>
         </div>
      </div>
   )
}

export default Nav
