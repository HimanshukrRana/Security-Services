import React from "react";
import CounterUp from "../elements/CounterUp";

export default function Counter() {
  return (
    <div className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-10">
            <div className="bd-bottom pb-20 mb-40 text-mb-center">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                  <span className="text-display-3 color-blue">
                    +<CounterUp count={1} time={3} />
                  </span>
                  <p className="text-body-text color-gray-500 pl-40t">
                    Years in Business
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                  <span className="text-display-3 color-blue">
                    +<CounterUp count={24} time={3} />
                  </span>
                  <p className="text-body-text color-gray-500 pl-40">
                    Projects Done
                  </p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                  <span className="text-display-3 color-blue">
                    +<CounterUp count={10} time={3} />
                  </span>
                  <p className="text-body-text color-gray-500 pl-40">
                    Constant Clients
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                  <span className="text-display-3 color-blue">
                    <CounterUp count={100} time={2} />%
                  </span>
                  <p className="text-body-text color-gray-500 pl-40">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    </div>

    //  <section className="section-box mt-70">
    //       <div className="container">
    //         <div className="mt-50">
    //           <div className="row">
    //             <div className="col-lg-3 col-sm-4 col-4">
    //               <h3 className="text-heading-4 color-gray-900 mb-15">
    //                 +<span className="count">38</span>k
    //               </h3>
    //               <p className="text-body-text-md color-gray-500">
    //                 Happy Clients
    //               </p>
    //             </div>
    //             <div className="col-lg-3 col-sm-4 col-4">
    //               <h3 className="text-heading-4 color-gray-900 mb-15">
    //                 +<span className="count">45</span>k
    //               </h3>
    //               <p className="text-body-text-md color-gray-500">
    //                 Project Done
    //               </p>
    //             </div>
    //             <div className="col-lg-3 col-sm-4 col-4">
    //               <h3 className="text-heading-4 color-gray-900 mb-15">
    //                 <span className="count">100</span>%
    //               </h3>
    //               <p className="text-body-text-md color-gray-500">
    //                 Client Satisfaction
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
  );
}
