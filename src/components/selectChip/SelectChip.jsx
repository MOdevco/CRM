import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import { API } from "../../api/api";
import axios from "axios";
// import { Spinner } from "@chakra-ui/react";

function Selectmultidropdown() {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    // setLoad(true)
    axios
      .get(`${API}api/interests/all`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        // setLoad(false)
      });
      
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12">
          <form className="row g-3" method="post">
            <div className="col-md-5">
              <label className="form-label"></label>

              <div className="text-dark"> 
              
                <Multiselect
                  loading={false}
                  isObject={true}
                  showCheckbox
                  displayValue="name"
                  onRemove={(e) => {
                    e;
                  }}
                 
                  

                ></Multiselect> 
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Selectmultidropdown;