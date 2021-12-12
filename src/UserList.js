import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios';

function UserList() {
    const [data, setData] = useState([]);

    useEffect(()=> {
    const fetchData = async () => {
        const result = await axios ('https://jsonplaceholder.typicode.com/users', 
        );
    setData(result.data);    
    };
    fetchData();

    }, [])
    return (
       
         <Fragment>
          <ul>
              {data.map(item => 
                 <li key={item.id}>
                 <p>{item.name}</p>
             </li>)}
          </ul>
         </Fragment>    

    )
}

export default UserList
