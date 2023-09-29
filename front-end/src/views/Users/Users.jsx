import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getAllUsers } from '../../redux/actions/actions'

import UserCard from '../../components/userCard/userCard';
import UserDetail from '../../components/userCard/userDetail';


const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return ( 
       <div className='flex flex-row'>
        <div className='w-1/2'>
            {users && users.map(user => 
                <UserCard key={user._id} user={user}/>
                )}
        </div>
        <div className='flex flex-row items-center w-1/2'>
        <UserDetail/>
        </div>
       </div>
     );
}
 
export default Users;