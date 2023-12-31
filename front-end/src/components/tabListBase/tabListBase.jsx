import { Tab, TabGroup, TabList } from '@tremor/react'
import {
  UserGroupIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, PencilIcon, BookOpenIcon,
  BanknotesIcon, CurrencyDollarIcon, NoSymbolIcon, PhotoIcon
} from "@heroicons/react/20/solid";
import React, { useState } from 'react';

import Activities from '../../views/Activities/Activities';
import CreateActivityForm from '../../components/forms/createActivityForm/createActivityForm';
import ReservasAdmin from '../../components/forms/reservasAdmin/reservasAdmin'
import ViewComents from '../../views/Comments/ViewComments';
import Users from '../../views/Users/Users';
import BannedUsers from '../../views/Users/BannedUsers';
import CreateExpo from '../forms/createExpo/CreateExpo';
import Sponsorship from '../../views/Donations/Sponsorship'
import DonationsAdmin from '../../views/Donations/DonationsAdmin'

const TabListBase = () => {

  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div>

      <TabGroup>
        <TabList className="flex flex-col sm:flex-row md:flex-row justify-center font-semibold bg-orange-400 rounded-md">
          <Tab
            value={1}
            icon={CalendarDaysIcon}
            onClick={() => setSelectedTab(1)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Actividades
          </Tab>
          <Tab
            value={2}
            icon={PencilIcon}
            onClick={() => setSelectedTab(2)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Crear Actividad
          </Tab>
          <Tab
            value={3}
            icon={BookOpenIcon}
            onClick={() => setSelectedTab(3)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Reservas
          </Tab>
          <Tab
            value={4}
            icon={ChatBubbleLeftRightIcon}
            onClick={() => setSelectedTab(4)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Comentarios
          </Tab>
          <Tab
            value={5}
            icon={UserGroupIcon}
            onClick={() => setSelectedTab(5)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Usuarios
          </Tab>
          <Tab
            value={6}
            icon={NoSymbolIcon}
            onClick={() => setSelectedTab(6)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Usuarios Bloquados
          </Tab>
          <Tab
            value={7}
            icon={PhotoIcon}
            onClick={() => setSelectedTab(7)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Exposiciones
          </Tab>
          <Tab
            value={8}
            icon={CurrencyDollarIcon}
            onClick={() => setSelectedTab(8)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
           Donaciones
          </Tab>

          <Tab
            value={9}
            icon={BanknotesIcon}
            onClick={() => setSelectedTab(9)}
            className={`mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Benefactores
          </Tab>



        </TabList>
      </TabGroup>

      {selectedTab === 1 ?
        (
          <Activities />
        ) : selectedTab === 2 ? (
          <CreateActivityForm />
        ) : selectedTab === 3 ? (
          <ReservasAdmin />
        ) : selectedTab === 4 ? (
          <ViewComents />
        ) : selectedTab === 5 ? (
          <Users />
        ) : selectedTab === 6 ? (
          <BannedUsers />
        ) : selectedTab === 7 ? (
          <CreateExpo />
        ) : selectedTab === 8 ? (
          <DonationsAdmin />
        ) : selectedTab === 9 ? (
          <Sponsorship />
        ) : null
            }
    </div>

  );
}

export default TabListBase;

