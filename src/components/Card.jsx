import react from 'react'
import { NavLink } from "react-router-dom";


const Card=(props)=>{
    console.log(props)
    return(
       <div>
           <NavLink href={"/"}>
               <div className='flex flex-col space-y-2 border border-black border-solid p-5 ml-2 mr-2 mt-2 rounded-md'>
                   <div>
                          <img src={props.image}/>
                   </div>
                   <div className='flex justify-center items-center'>
                      <p className='hover:underline'>{props.firstName} {props.lastName}</p>
                   </div>
               </div>
           </NavLink>
       </div>
    )
}
export default Card