import axios from "axios"
import { API } from "../../api/api"


 const getImage = async (id) =>  {
    const preData = axios.get(`${API}api/image/get?id=${id}` , {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
        // console.log(data)
        return res.data
    })
    return preData

}

export default getImage