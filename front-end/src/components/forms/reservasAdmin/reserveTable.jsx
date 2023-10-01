import React from 'react';
import { Card, Title, Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@tremor/react';
import style from './reserveTable.module.css';



const reserveTable = ()=>{

    var data = {
        "actividades": [
          {
            "name": "Actividad 1",
            "date": "13 de octubre de 2023 a las 15.00",
            "usuarios": [
              {
                "name": "Usuario 1",
                "email": "user1@gmail.com"
              },
              {
                "name": "Usuario 2",
                "email": "user2@gmail.com"
              },
              {
                "name": "Usuario 2.2",
                "email": "user2@gmail.com"
              }
            ]
          },
          {
            "name": "Actividad 2",
            "usuarios": [
              {
                "name": "Usuario 3",
                "email":  "user3@gmail.com"
              },
              {
                "name": "Usuario 4",
                "email":  "user4@gmail.com"
              }
            ]
          },
          {
            "name": "Actividad 3",
            "usuarios": [
              {
                "name": "Usuario 5",
                "email":  "user3@gmail.com"
              },
              {
                "name": "Usuario 6",
                "email":  "user4@gmail.com"
              }
            ]
          }
        ]
      };
 
    return(
        <Card className={style.containerTable}>
            <Title  class='flex text-2xl font-bold text-gray-500  ml-[20px] md:justify-center md:items-center' >Reserva de actividades</Title>
            <br />
            <br />

            <Table>
                <TableHead>
                    <TableRow>
                    <TableHeaderCell class=" text-xl font-bold text-orange-400 ">Datos de actividad</TableHeaderCell>
                    <TableHeaderCell class=" text-xl font-bold text-orange-400 ">Datos del usuario</TableHeaderCell>
                        
                    </TableRow>
                </TableHead>
                <br />
                <br />

                <TableBody >
                    {
                        data.actividades &&  data.actividades.map( (actividad) =>(
                            <TableRow  >
                                <TableCell class=" text-lg font-bold  ">{actividad.name}</TableCell>
                                <TableCell>
                                    <Table>
                                    <TableHead>
                                        <TableRow>
                                        <TableHeaderCell class=" text-lg font-bold  ">Usuario</TableHeaderCell>
                                        <TableHeaderCell class=" text-lg font-bold  ">Email</TableHeaderCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {actividad.usuarios.map((usuario) => (
                                        <TableRow >
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
  