import { Tab, TabGroup, TabList} from '@tremor/react'
// import { UserGroupIcon} from "@heroicons/react";
import React from 'react';

const TabListBase = () => {
    return ( 
        <div>
            <TabGroup>
<TabList className="mt-6" defaultValue={1}>
    <Tab value={1}>Actividades</Tab>
    <Tab value={2}>Crear Actividades</Tab>
    <Tab value={3} >Ver Comentarios</Tab>
    <Tab value={4}  >Usuarios</Tab>
    
</TabList>
</TabGroup>
        </div>
     );
}
 
export default TabListBase;

