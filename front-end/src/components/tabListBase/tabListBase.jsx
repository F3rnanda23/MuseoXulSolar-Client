import { Tab, TabGroup, TabList } from '@tremor/react'
import { UserGroupIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, PencilIcon } from "@heroicons/react/20/solid";
import React, { useState } from 'react';

import Activities from '../../views/Activities/Activities'
import CreateActivityForm from '../../components/forms/createActivityForm/createActivityForm'
import ViewComents from '../../views/Comments/ViewComments'

const TabListBase = () => {

    const [selectedTab, setSelectedTab] = useState(1);
    console.log(selectedTab);
    return (
        <div>
            <TabGroup>
                <TabList className="min-h-20 flex flex-row justify-center bg-orange-400">

                    <Tab value={1} icon={CalendarDaysIcon} onClick={() => setSelectedTab(1)}>Actividades</Tab>
                    <Tab value={2} icon={PencilIcon} onClick={() => setSelectedTab(2)}>Crear Actividades</Tab>
                    <Tab value={3} icon={ChatBubbleLeftRightIcon} onClick={() => setSelectedTab(3)}>Ver Comentarios</Tab>
                    <Tab value={4} icon={UserGroupIcon} onClick={() => setSelectedTab(4)}>Usuarios</Tab>

                </TabList>
            </TabGroup>

            {selectedTab === 1 ?
                (
                    <Activities />
                ) : selectedTab === 2 ? (
                    <CreateActivityForm />
                ) : selectedTab === 3 ? (
                    <ViewComents/>
                    ) : null
                
            }
        </div>
    );
}

export default TabListBase;

