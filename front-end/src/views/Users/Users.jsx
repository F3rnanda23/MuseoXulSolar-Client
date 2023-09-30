import { useSelector, useDispatch } from 'react-redux';
import { createFactory, useEffect, useState } from 'react';

import { getAllUsers, filterUserByEmail, getUserDetail } from '../../redux/actions/actions'

import UserCard from '../../components/userCard/userCard';
import UserDetail from '../../components/userCard/userDetail';

import { TextInput } from "@tremor/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";



const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])


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

    };



    return (

        <div>


            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col items-center mt-5 md:w-1/3 w-3/4">
                    <TextInput
                        icon={MagnifyingGlassIcon}
                        placeholder="Buscar Usuario por email..."
                        className="w-full bg-orange-100"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <ul className="bg-orange-100 w-full md:w-3/4 rounded-md border border-gray-300">
                        {suggestions.map((suggestion, index) => (
                            <li onClick={() => handleFilterUser(suggestion.email)}
                                className="my-2" key={index}>
                                {suggestion.email}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-1/2">
                    {users &&
                        users.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                </div>
                <div className="flex flex-col justify-start items-center w-full md:w-1/2">
                    <UserDetail />
                </div>
            </div>
        </div>

    );
}

export default Users;