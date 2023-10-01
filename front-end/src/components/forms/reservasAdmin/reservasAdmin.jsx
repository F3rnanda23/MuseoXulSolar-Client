

import React from 'react';
import style from './reservasAdmin.module.css';
import ReserveTable from './reserveTable';

const reservasAdmin = () =>{




    const handleRefresh = () => {
        window.location.reload(); 
    };
    
    return(
        <div className={style.reservasAdmin}>
            <br />
            <div>
                <h1 class=" flex text-3xl font-bold text-orange-200 underline ml-[20px] md:justify-center md:items-center  "> Reserva de entradas</h1>
            </div>
            <br />
            <br />
            <br />
           

            <div class=" flex   w-full h-full-">  

                <div class="border-2 border-gray-100  shadow-2xl  w-5/6 h-full mb-[50px] ml-auto mr-auto">
                    <ReserveTable />
                </div>
            </div>

    

        </div>
    )

}

export default reservasAdmin;