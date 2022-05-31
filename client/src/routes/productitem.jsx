import React from "react";
import  {Link} from "react-router-dom"

export function Productitem({ name, price, description, category,rooms,services,selectfile }) {
  console.log(name, price, description, category,rooms,services);
  return (
    <>
      <div className="container py-5 flex-md-row" >
        {/* For Demo Purpose*/}

        <div className="row pb-5 mb-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* Card*/}
            <div className="card rounded shadow-sm border-0 pb-1 flex-lg-wrap " style={{width:"400px",height:"400px"}}>
              <div className="card-body p-4">
                <img
                  src={selectfile}
                  alt=""
                  className="img-fluid  mx-auto mb-3"
                />
                <h5>
                  {" "}
                  <a href="#" className="text-dark">
                    {name}
                  </a>
                </h5>
                <p className="small text-muted font-italic">{description}</p>
                <h4>Price:{price}</h4>
                <h3>{services}</h3>
                <h5>Rooms{rooms}</h5>
                <Link to={'/booking'}><button type="button" className="btn btn-primary">Booking</button></Link>
                
        
                <ul className="list-inline small">
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success" />
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success" />
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success" />
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star text-success" />
                  </li>
                  <li className="list-inline-item m-0">
                    <i className="fa fa-star-o text-success" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </>
  );
}
