import axios from "axios";

const {  useState, useEffect } = require("react")
const baseURL = 'https://jsonplaceholder.typicode.com/users';
const Items = () => {
  const [data, setData ] = useState([]);

  useEffect(()=>{
    axios.get(baseURL)
    .then(res => {
      setData(res.data)
    })
  }, [])
  return(
    <div>
      <div>
        {
         data.map(user =>(
           
           <ul key={user.id}>
             <li>{user.name}</li>
             <li>{user.username}</li>
             <li>{user.email}</li>
             <li>{user.address.street}</li>
             <li>{user.address.suite}</li>
             <li>{user.address.city}</li>
             <li>{user.address.zipcode}</li>
             <li>{user.address.geo.lat}</li>
             <li>{user.address.geo.lng}</li>
           </ul>
         ))
        }
      </div>
    </div>
  );
};

export default Items