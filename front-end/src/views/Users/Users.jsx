import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getAllUsers } from '../../redux/actions/actions'

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

    return (
        <div>
            <div className='flex flex-col items-center mt-5'>

                <TextInput icon={MagnifyingGlassIcon} placeholder="Buscar Usuario por email..."
                    className='max-w-md bg-orange-100'
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion.email}</li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-row'>
                <div className='w-1/2'>
                    {users && users.map(user =>
                        <UserCard key={user.id} user={user} />
                    )}
                </div>
                <div className='flex flex-row justify-center items-start w-1/2'>
                    <UserDetail />
                </div>
            </div>
        </div>
    );
}

export default Users;