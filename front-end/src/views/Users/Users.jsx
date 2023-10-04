import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


import { Button } from "@tremor/react";

import { getAllUsers, filterUserByEmail, clearUserDetail } from '../../redux/actions/actions'

import UserCard from '../../components/userCard/userCard';
import UserDetail from '../../components/userCard/userDetail';

import { TextInput } from "@tremor/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import backgroundImage from '../../imagenes/background/bg1.png'




const Users = () => {

    const dispatch = useDispatch();

    const users = useSelector(state => state.users);
    const filteredUsers = useSelector(state => state.filteredUsers);
    const bannedUsers = useSelector(state => state.bannedList);

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [filteredActive, setFilteredActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    useEffect(() => {
        dispatch(getAllUsers())

        return () => { dispatch(clearUserDetail())};
    }, [dispatch])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [bannedUsers]);


    const handleInputChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        const filteredSuggestions = users.filter(user =>
            user.email.toLowerCase().includes(newSearchTerm.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    const handleFilterUser = (email) => {
        dispatch(filterUserByEmail(email));
        setFilteredActive(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300);
    };

    const handleInputFocus = () => {
        setIsDropdownOpen(true);
    };

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: 0,
        height: '100vh',
      };
    

    return (

        <div style={backgroundStyle}>
    

            <div className="flex flex-col md:flex-row justify-center items-center" >
                <div className="flex flex-col items-center mt-5 md:w-1/3 w-3/4">
                    <TextInput
                        icon={MagnifyingGlassIcon}
                        placeholder="Buscar Usuario por email..."
                        className="w-full bg-orange-100"
                        value={searchTerm}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    {isDropdownOpen && (
                        <ul className="bg-orange-100 w-full md:w-3/4 rounded-md border border-gray-300">
                            {suggestions.map((suggestion, index) => (
                                <li onClick={() => handleFilterUser(suggestion.email)}
                                    className="my-2" key={index}>
                                    {suggestion.email}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <Button onClick={() => setFilteredActive(false)}
                    className="max-h-10 my-1 mb-auto mt-5 ml-2 bg-orange-200 hover:bg-orange-200">Todos los usuarios</Button>

            </div>

            <div className="flex flex-col-reverse md:flex-row">

                <div className="w-full md:w-1/2">
                    {filteredActive ? (
                        filteredUsers.map((user) => (
                            user && user.id && <UserCard key={user.id} user={user} />
                        ))
                    ) : (
                            users.map((user) => (
                                user && user.id && <UserCard key={user.id} user={user} />
                        ))
                    )}
                </div>
                {users && (
                <div className="sticky top-0 flex flex-col justify-start items-center w-full md:w-1/2 md:ml-auto max-h-screen overflow-y-auto">
                    <UserDetail />
                </div>
                ) 
                
                }
            </div>
        </div>

    );
}

export default Users;