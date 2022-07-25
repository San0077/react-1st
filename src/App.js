import './App.css';
 //import {div,div,Col,Card,CardBody,ListGroup,li} from 'react-bootstrap'

// import { Button } from 'bootstrap';
// import CardHeader from 'react-bootstrap/esm/CardHeader';

 var card =[
   {
     cTitle:"Free",
     cPrice: "2",
    
   },
   {
    cTitle:"Plux",
    cPrice: "56",
   
  },
  {
    cTitle:"Pro",
    cPrice: "86",
   
  },
 ]
function App() {
   return (
    <div className='pricing py-'>
          <div className="container">
            <div className="row lg-4">
                {card.map((user)=><Msg title={user}/>)}
            </div>
          </div>
       
    </div>
  );
}

function Msg({title}){
  return(
      <div className="row lg-4">
       <div className="card">
         <div className="card-body">
           <h5 className="text-muted text-uppercase text-center">{title.cTitle}</h5>
            <h6 className="text-center"> {title.cPrice}/month </h6>
            <hr/>
            <ul>
              <li><span><i className ="fa fa-check" ></i></span>Single User</li>
              <li><span><i className ="fa fa-check" ></i></span>5GB Storage</li>
              <li><span><i className ="fa fa-check" ></i></span>Unlimited Public Projects</li>
              <li><span><i className ="fa fa-check" ></i></span>Community Access</li>
              <li><span><i class="fa fa-ban"></i></span>Unlimited Private Projects</li>
              <li><span><i class="fa fa-ban"></i></span>Dedicated Phone Support</li>
              <li><span><i class="fa fa-ban"></i></span>Free Subdomain</li>
              <li><span><i class="fa fa-ban"></i></span>Monthly Status Reports</li>
            </ul>
            <div className="text-center">
            <button type="button" className="btn btn-primary">Button</button>
            </div>
         </div>
       </div>
      </div>
  )
}

export default App;
