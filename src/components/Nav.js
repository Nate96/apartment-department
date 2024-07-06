function Nav() { 
   return (
      <div>
          <div className="home-button" style={{position:"absolute", left:"25px"}}>
            <a href="www.google.com">DBQStay.com</a>
          </div>
         <div className="other-links"style={{position:"absolute", right:"120px"}}>
            <a href="www.google.com" style={{paddingRight: "5px", paddingLeft:"5px"}}>About</a>
            <a href="www.google.com" style={{paddingRight: "5px", paddingLeft:"5px"}}>contact</a>
         </div>
      </div>
   )
}

export default Nav
