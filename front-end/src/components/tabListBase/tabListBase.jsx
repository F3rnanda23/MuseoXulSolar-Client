import { Tab, TabGroup, TabList } from '@tremor/react'
import { UserGroupIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, PencilIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import React, { useState } from 'react';

import Activities from '../../views/Activities/Activities'
import CreateActivityForm from '../../components/forms/createActivityForm/createActivityForm'
import ViewComents from '../../views/Comments/ViewComments'
import Users from '../../views/Users/Users'
import BannedUsers from '../../views/Users/BannedUsers';

const TabListBase = () => {

    const [selectedTab, setSelectedTab] = useState(1);
    
    return (
        <div>
            {/* <TabGroup>
                <TabList className="min-h-20 flex flex-row justify-center font-semibold bg-orange-400 rounded-md">

                    <Tab value={1} icon={CalendarDaysIcon} onClick={() => setSelectedTab(1)}>Actividades</Tab>
                    <Tab value={2} icon={PencilIcon} onClick={() => setSelectedTab(2)}>Crear Actividades</Tab>
                    <Tab value={3} icon={BookOpenIcon} onClick={() => setSelectedTab(3)}>Reservas</Tab>
                    <Tab value={4} icon={ChatBubbleLeftRightIcon} onClick={() => setSelectedTab(4)}>Ver Comentarios</Tab>
                    <Tab value={5} icon={UserGroupIcon} onClick={() => setSelectedTab(5)}>Usuarios</Tab>

                </TabList>
            </TabGroup> */}

            <TabGroup>
  <TabList className="flex flex-col sm:flex-row justify-center font-semibold bg-orange-400 rounded-md">
    <Tab
      value={1}
      icon={CalendarDaysIcon}
      onClick={() => setSelectedTab(1)}
      className="mb-2 sm:mb-0"
    >
      Actividades
    </Tab>
    <Tab
      value={2}
      icon={PencilIcon}
      onClick={() => setSelectedTab(2)}
      className="mb-2 sm:mb-0"
    >
      Crear Actividades
    </Tab>
    <Tab
      value={3}
      icon={BookOpenIcon}
      onClick={() => setSelectedTab(3)}
      className="mb-2 sm:mb-0"
    >
      Reservas
    </Tab>
    <Tab
      value={4}
      icon={ChatBubbleLeftRightIcon}
      onClick={() => setSelectedTab(4)}
      className="mb-2 sm:mb-0"
    >
      Ver Comentarios
    </Tab>
    <Tab
      value={5}
      icon={UserGroupIcon}
      onClick={() => setSelectedTab(5)}
      className="mb-2 sm:mb-0"
    >
      Usuarios
    </Tab>
    <Tab
      value={6}
      icon={UserGroupIcon}
      onClick={() => setSelectedTab(6)}
      className="mb-2 sm:mb-0"
    >
      Usuarios Bloquados
    </Tab>

  </TabList>
</TabGroup>

            {selectedTab === 1 ?
                (
                    <Activities />
                ) : selectedTab === 2 ? (
                    <CreateActivityForm />
                ) : selectedTab === 3 ? (
                  <h2>Reservas</h2>
                    ) : selectedTab === 4 ? (
                      <ViewComents/>
                    ) : selectedTab === 5 ? (
                      <Users/>
                    ) : selectedTab === 6 ? (
                      <BannedUsers/>
                    ) : null
            }
    </div>

    );
}

export default TabListBase;

