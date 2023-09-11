import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import { API } from "../../api/api";
import axios from "axios";

function Selectmultidropdown( {dataItem, setDataItem} ) {
  const [data, setData] = useState([]);
  const all = []
  const [load, setLoad] = useState(false)
  
    for(let i = 0; i < data.length; i++) {
      all.push(data[i])
    }
  useEffect(() => {
    setLoad(true)
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
        setLoad(false)
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
                 options={all}
                 displayValue="name"
                 onRemove={(e) => {
                   e;
                 }}
                 onSelect={(e) => {
                   setDataItem(e)
                 }
                 

                 }
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Selectmultidropdown;