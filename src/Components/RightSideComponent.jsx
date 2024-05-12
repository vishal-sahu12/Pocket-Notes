import React from "react"

import notesImg from "../assets/notes.png"
import encryptImg from "../assets/Vector.png"
const RightSideComponent = () =>{
    return(
        <div className="right-side-container">

                <img src={notesImg} alt="" srcset="" />
                <h1>Pocket Notes</h1>
                <h3>Send and receive messages without keeping your phone online. <br />Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h3>    
                   
                   <footer className="footer-div">
                    <img src={encryptImg} alt="encryption-img" />
                    <h5>end-to-end encrypted</h5>
                   </footer>
                   </div>
    )
}

export default RightSideComponent