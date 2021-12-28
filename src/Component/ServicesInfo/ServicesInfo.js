import './ServicesInfo.css'

function ServicesInfo(props) {
    
    
    return(
        <> 
           <div className="ServicesInfoMainDiv">
           <h4>Co dla Ciebie zrobimy:</h4>
           <br/>
                <div id="servicesListDiv">
                   
                    <ul>
                        <li>Chiptuning - uskrzydlimy Twoją brykę</li>
                        <br/>
                        <li>Diagnostyka komputerowa - podłączę Ci komputer i powiem co nie halo</li>
                        <br/>
                        <li>Instalacje audio - pierdolnie bassem synu</li>
                        <br/>
                        <li>Odłączanie kierunkowskazów - i tak nie używasz</li>
                    </ul>
                </div>
           </div>
        </>
    );
  }

  export default ServicesInfo;