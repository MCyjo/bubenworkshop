import './Footer.css'
import bmwLogo from '../../Image/bmwLogo.jpg';

function Footer(props) {
    
    
    return(
        <> 
           <div className="customFooterBackground">
               <div className="authorDiv">
                    &#169;Mikołaj Cyrok Enterprises
                </div>
                <div className="poweredFooterDiv">
                    Powered by <img src={bmwLogo} width="50px" height="50px"/>
                </div>
            </div>
        </>
    );
  }

  export default Footer;