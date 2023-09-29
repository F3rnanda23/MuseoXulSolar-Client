import { Tab, TabGroup, TabList } from '@tremor/react'
import { UserGroupIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, PencilIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import React, { useState } from 'react';

import Activities from '../../views/Activities/Activities'
import CreateActivityForm from '../../components/forms/createActivityForm/createActivityForm'
import ViewComents from '../../views/Comments/ViewComments'
import Users from '../../views/Users/Users'

const TabListBase = () => {

    const [selectedTab, setSelectedTab] = useState(1);
    console.log(selectedTab);
    return (
        <div>
            <TabGroup>
                <TabList className="min-h-20 flex flex-row justify-center font-semibold bg-orange-400 rounded-md">

                    <Tab value={1} icon={CalendarDaysIcon} onClick={() => setSelectedTab(1)}>Actividades</Tab>
                    <Tab value={2} icon={PencilIcon} onClick={() => setSelectedTab(2)}>Crear Actividades</Tab>
                    <Tab value={3} icon={BookOpenIcon} onClick={() => setSelectedTab(3)}>Reservas</Tab>
                    <Tab value={4} icon={ChatBubbleLeftRightIcon} onClick={() => setSelectedTab(4)}>Ver Comentarios</Tab>
                    <Tab value={5} icon={UserGroupIcon} onClick={() => setSelectedTab(5)}>Usuarios</Tab>

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
                    ) : null

                
            }

            {/* <TabGroup>
  <TabList className="bg-orange-400">
    <div className="hidden lg:flex flex-row">
      <Tab
        value={1}
        icon={CalendarDaysIcon}
        onClick={() => setSelectedTab(1)}
        className={`p-2 text-center ${
          selectedTab === 1 ? 'bg-white text-orange-400' : 'text-white'
        }`}
      >
        Actividades
      </Tab>
      <Tab
        value={2}
        icon={PencilIcon}
        onClick={() => setSelectedTab(2)}
        className={`p-2 text-center ${
          selectedTab === 2 ? 'bg-white text-orange-400' : 'text-white'
        }`}
      >
        Crear Actividades
      </Tab>
      <Tab
        value={3}
        icon={ChatBubbleLeftRightIcon}
        onClick={() => setSelectedTab(3)}
        className={`p-2 text-center ${
          selectedTab === 3 ? 'bg-white text-orange-400' : 'text-white'
        }`}
      >
        Ver Comentarios
      </Tab>
      <Tab
        value={4}
        icon={UserGroupIcon}
        onClick={() => setSelectedTab(4)}
        className={`p-2 text-center ${
          selectedTab === 4 ? 'bg-white text-orange-400' : 'text-white'
        }`}
      >
        Usuarios
      </Tab>
    </div>

    {/* Hamburger menu for small and medium screens */}
    {/* <div className="lg:hidden flex justify-end p-2">
      <button className="text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button> */}
    </div>

    );
}

export default TabListBase;

