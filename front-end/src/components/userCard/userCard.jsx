import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserDetail, banUser } from '../../redux/actions/actions'

import { Card, Text, Metric, Button } from "@tremor/react";

// eslint-disable-next-line react/prop-types
const UserCard = ({ user }) => {
    // eslint-disable-next-line react/prop-types
    const { email, name, id } = user;

    const dispatch = useDispatch();

    const handleUserCardClick = (id) => {
        dispatch(getUserDetail(id))
    };
    const handleBanUser = (id, email) => {
        dispatch(banUser(id, email))
    };




    return (

        <div>
            <Card className="max-w-lg mt-10 mx-auto mb-5 font-bold">
                <div className="flex flex-row">
                    <div className="mr-10">
                        <Text>{email}</Text>
                        <Metric>{name}</Metric>
                    </div>

                    <div className="flex flex-col ml-auto mr-2">
                        <Button onClick={() => handleUserCardClick(id)} className="max-h-10 mt-auto my-1 hover:bg-gray-600">Ver Usuario</Button>
                        <Button onClick={() => handleBanUser(id, email)} className="max-h-10 mt-auto my-1 hover:bg-gray-600">Bloquear</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default UserCard;