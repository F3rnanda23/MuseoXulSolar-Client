import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllActivitiesAdmin } from '../../../redux/actions/actions';
import { Card, Title, Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@tremor/react';
import style from './reserveTable.module.css';



const reserveTable = ()=>{

    const activities = useSelector(state => state.activitiesAdmin);
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
            <Title  className='flex text-2xl font-bold text-gray-500  ml-[20px] md:justify-center md:items-center' >Reserva de actividades</Title>
           
            {activities.length === 0 ? (
                <p>No hay actividades reservadas</p>
            ) : (
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableHeaderCell className=" text-xl font-bold text-orange-500 ">Nombre de la actividad</TableHeaderCell>
                        <TableHeaderCell className=" text-xl font-bold text-orange-500 ">Día</TableHeaderCell>
                        <TableHeaderCell className=" text-xl font-bold text-orange-500 ">Hora</TableHeaderCell>
                        <TableHeaderCell className=" text-xl font-bold text-orange-500 ">Datos del usuario</TableHeaderCell>
                        
                            
                        </TableRow>
                    </TableHead>
                    
                    <TableBody >
                        {
                            activities &&  activities.map( (actividad) =>(
                                <TableRow key={actividad.id}>
                                    <TableCell className=" text-lg font-bold  w-1/4 ">{actividad.name}</TableCell>
                                    <TableCell className=" border-2 border-gray-300 w-1/6 text-lg font-bold md:border-none  ">{formatDate(actividad.date)}</TableCell>
                                    <TableCell className="border-2 border-gray-300 w-1/6 text-lg font-bold md:border-none    ">{actividad.hora} hrs.</TableCell>
                                    <TableCell>
                                        <Table>
                                        <TableHead>
                                            <TableRow>
                                            <TableHeaderCell className=" text-lg font-bold  ">Usuario</TableHeaderCell>
                                            <TableHeaderCell className=" text-lg font-bold  ">Email</TableHeaderCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            {actividad.Usuarios.map((usuario) => (
                                            <TableRow key={usuario.id}>
                                                <TableCell className=" text-md w-1/4 ">{usuario.name}</TableCell>
                                                <TableCell className=" text-md w-1/4  ">{usuario.email}</TableCell>
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
            )}
            
        </Card>
    )

} 
export default reserveTable;

