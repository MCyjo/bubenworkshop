import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHome, faEnvelope,  } from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
function Contact(props) {
 
    return(
        <> 
           <div className="ContactMainDiv">
                <div id="contactDiv">
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> 48 723 984 232
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />   bubenservice@gmail.com
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faFacebook} />   facebook.com/deaoidjaeod
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faHome} />   Radojewice 78 <br/> 88-310 Kujawsko-pomorskie
                    </p>
                </div>
           </div>
        </>
    );
  }

  export default Contact;