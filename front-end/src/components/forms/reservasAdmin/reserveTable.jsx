import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllActivitiesAdmin } from '../../../redux/actions/actions';
import { Card, Title, Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@tremor/react';
import style from './reserveTable.module.css';



const reserveTable = ()=>{

    const activities = useSelector(state => state.activitiesUser);
    console.log(activities,'aqui estado')
    const dispatch = useDispatch();
    
   
  


    useEffect(() => {
        dispatch(getAllActivitiesAdmin());

    }, [dispatch]);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
  };

   
 
    return(
        <Card className={style.containerTable}>
            <Title  class='flex text-2xl font-bold text-gray-500  ml-[20px] md:justify-center md:items-center' >Reserva de actividades</Title>
           

            <Table>
                <TableHead>
                    <TableRow>
                    <TableHeaderCell class=" text-xl font-bold text-orange-400 ">Datos de actividad</TableHeaderCell>
                    <TableHeaderCell class=" text-xl font-bold text-orange-400 ">Datos del usuario</TableHeaderCell>
                        
                    </TableRow>
                </TableHead>
                
                <TableBody >
                    {
                        activities &&  activities.map( (actividad) =>(
                            <TableRow key={actividad.id}>
                                <TableCell class=" text-lg font-bold  ">{actividad.name}</TableCell>
                                <TableCell class=" text-lg font-bold  ">{actividad.date}</TableCell>
                                <TableCell>
                                    <Table>
                                    <TableHead>
                                        <TableRow>
                                        <TableHeaderCell class=" text-lg font-bold  ">Usuario</TableHeaderCell>
                                        <TableHeaderCell class=" text-lg font-bold  ">Email</TableHeaderCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {actividad.Usuarios.map((usuario) => (
                                        <TableRow key={usuario.id}>
                                            <TableCell class=" text-md ">{usuario.name}</TableCell>
                                            <TableCell class=" text-md ">{usuario.email}</TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                    </Table>
                                </TableCell>
                               
                            </TableRow>
                        ))
                    }

                </TableBody>

            </Table>

        </Card>
    )

} 
export default reserveTable;


// function Actividad({ actividad }) {
//     return (
//       <div>
//         <h2>{actividad.nombre}</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Usuario</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {actividad.usuarios.map((usuario) => (
//               <tr key={usuario.id}>
//                 <td>{usuario.name}</td>
//                 <td>{usuario.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
  