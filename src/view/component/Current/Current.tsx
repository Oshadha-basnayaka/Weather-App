
import cloud from '../../../assetes/icon/icons8-cloud-50.png';
import axios from 'axios';
import {useEffect} from "react";



export function Current() {



    return (
       <div>
          <div>
              <h1 className={"flex items-center justify-center flex-col "}>Current Wheather</h1>
          </div>

           <div className={"flex  gap-5 justify-evenly pt-5"}>
              <div>
                  <h1 className={"flex items-center justify-center flex-col "}>Colombo distric Lk </h1>
                  <h1>to day 17 feb 2023</h1>
              </div>

               <div>
                   <h1>30~c</h1>
                   <h1>Broken cloudes</h1>
               </div>

               <div>
                   <img src={cloud} alt=""/>
               </div>
           </div>



           <div>
               <h1 className={"flex items-center justify-center flex-col pt-5"}>air condtion</h1>
           </div>

           <div className={"flex  gap-5 justify-evenly pt-5"}>
               <div>
                   <img src={cloud} alt=""/>
                   <h1 className={"flex items-center justify-center flex-col "}>Temperature</h1>
                   <h1>37c</h1>
               </div>

               <div>
                   <img src={cloud} alt=""/>
                   <h1>Wind</h1>
                   <h1>1.84m/s</h1>
               </div>

               <div>
                   <img src={cloud} alt=""/>
                   <h1 className={"flex items-center justify-center flex-col "}>Real Feel </h1>
                   <h1>73%</h1>
               </div>

               <div>
                   <img src={cloud} alt=""/>
                   <h1 className={"flex items-center justify-center flex-col "}>Hiumidity </h1>
                   <h1>86%</h1>
               </div>
           </div>
       </div>
    );
}
