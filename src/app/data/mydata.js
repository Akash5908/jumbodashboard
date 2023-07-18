import React, { useEffect } from 'react'
import { apiData } from 'app/redux/actions/contactsApp'
import { useDispatch } from 'react-redux'
const Mydata = () => {
   const dispatch = useDispatch();
   const Fetch = async () => {  
       const res= await fetch('https://jumbo2-0.vercel.app/tourlist')
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