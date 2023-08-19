import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import { API } from "../../api/api";
import axios from "axios";

function Selectmultidropdown() {

  const [data, setData] = useState([]);
  const [dataItem , setDataItem] = useState([])
  const item = []
  console.log(dataItem)

  useEffect(() => {
    axios
      .get(`${API}api/interests/all`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setDataItem(res.data);
      });
      for(let i = 0; i < dataItem.length; i++) {
          item.push(dataItem[i].name)
      }
      setData(item)
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
                    isObject={false}
                    showCheckbox
                    options={data}
                    onRemove={(e) => {e}}
                    onSelect={(e) => {e}}
                  >
                  </Multiselect>
                </div>
              </div>
            </form>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Selectmultidropdown;
