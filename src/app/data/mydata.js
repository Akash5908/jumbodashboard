import React, { useEffect } from 'react'
import { apiData } from 'app/redux/actions/contactsApp'
import { useDispatch } from 'react-redux'
const Mydata = () => {
   const dispatch = useDispatch();
   const Fetch = async () => {  
       const res= await fetch('https://mocki.io/v1/cd2d7084-c4d1-4051-a778-dbaed8b3c0f7')
       const data = await res.json();
       dispatch(apiData(data))
    //    console.log(data)
   }
    useEffect(() => {
 Fetch()
    }, [])
    
  return (
      <div>
          
    </div>
  )
}

export default Mydata