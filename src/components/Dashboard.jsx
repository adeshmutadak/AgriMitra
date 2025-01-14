// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// const Dashboard = () => {
//   const [data, setData] = useState()
//   const BASE_URL = process.env.REACT_APP_BACKEND_URL
//   useEffect(() => {
//     axios.get(BASE_URL + 'api/admin/dashboard').then((resp) => {
//       setData(resp.data)
//     })
//   }, [])
//   return (
//     <>
//       <div className='content-wrapper p-2'>
//         <div
//           className='container-fluid shadow p-2 bg-white'
//           style={{ minHeight: '88vh' }}
//         >
//           <h4 className='p-2 border-bottom border-success'>Admin Dashboard</h4>
//           <div class='row'>
//             <div class='col-sm-3'>
//               <div class='card shadow m-2'>
//                 <div class='card-body p-3'>
//                   <h5>Registered Users</h5>
//                   <h5>{data?.customers}</h5>
//                 </div>

//                 <div class='card-footer'>
//                   <Link to='/customers'>View Details</Link>
//                 </div>
//               </div>
//             </div>
//             <div class='col-sm-3'>
//               <div class='card shadow m-2'>
//                 <div class='card-body p-3'>
//                   <h5>Companies</h5>
//                   <h5>{data?.companies}</h5>
//                 </div>
//                 <div class='card-footer'>
//                   <Link to='/companies'>View Details</Link>
//                 </div>
//               </div>
//             </div>

//             <div class='col-sm-3'>
//               <div class='card shadow m-2'>
//                 <div class='card-body p-3'>
//                   <h5>Product Variants</h5>
//                   <h5>{data?.variants}</h5>
//                 </div>
//                 <div class='card-footer'>
//                   <Link to='/variants'>View Details</Link>
//                 </div>
//               </div>
//             </div>

//             <div class='col-sm-3'>
//               <div class='card shadow m-2'>
//                 <div class='card-body p-3'>
//                   <h5>Products</h5>
//                   <h5>{data?.bikes}</h5>
//                 </div>
//                 <div class='card-footer'>
//                   <Link to='/bikes'>View Details</Link>
//                 </div>
//               </div>
//             </div>

//             <div class='col-sm-3'>
//               <div class='card shadow m-2'>
//                 <div class='card-body p-3'>
//                   <h5>Bookings</h5>
//                   <h5>{data?.bookings}</h5>
//                 </div>
//                 <div class='card-footer'>
//                   <Link to='/bookings'>View Details</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Dashboard

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    axios.get(BASE_URL + "api/admin/dashboard").then((resp) => {
      setData(resp.data);
    });
  }, []);

  const cardColors = [
    "bg-primary text-white",
    "bg-success text-white",
    "bg-info text-white",
    "bg-warning text-white",
    "bg-danger text-white",
  ];

  return (
    <>
      <div className="content-wrapper p-2">
        <div
          className="container-fluid shadow p-2 bg-white"
          style={{ minHeight: "88vh" }}
        >
          <h4 className="p-2 border-bottom border-success">Admin Dashboard</h4>
          <div className="row">
            <div className="col-sm-3">
              <div className={`card shadow m-2 ${cardColors[0]}`}>
                <div className="card-body p-3">
                  <h5>Registered Users</h5>
                  <h5>{data?.customers}</h5>
                </div>
                <div className="card-footer">
                  <Link to="/customers" className="text-white">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className={`card shadow m-2 ${cardColors[1]}`}>
                <div className="card-body p-3">
                  <h5>Companies</h5>
                  <h5>{data?.companies}</h5>
                </div>
                <div className="card-footer">
                  <Link to="/companies" className="text-white">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className={`card shadow m-2 ${cardColors[2]}`}>
                <div className="card-body p-3">
                  <h5>Product Variants</h5>
                  <h5>{data?.variants}</h5>
                </div>
                <div className="card-footer">
                  <Link to="/variants" className="text-white">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className={`card shadow m-2 ${cardColors[3]}`}>
                <div className="card-body p-3">
                  <h5>Products</h5>
                  <h5>{data?.bikes}</h5>
                </div>
                <div className="card-footer">
                  <Link to="/equipment" className="text-white">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className={`card shadow m-2 ${cardColors[4]}`}>
                <div className="card-body p-3">
                  <h5>Bookings</h5>
                  <h5>{data?.bookings}</h5>
                </div>
                <div className="card-footer">
                  <Link to="/bookings" className="text-white">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
