import { useDispatch } from "react-redux";


import { restoreUser } from '../../redux/actions/actions'
 
import { Card, Text, Metric, Button } from "@tremor/react";

const BannedUserCard = ({ banned }) => {

    const dispatch = useDispatch();

    const { id, email } = banned;
   
    const handleRestoreUser = (id) => {
        dispatch(restoreUser(id))
    };

    return ( 
        <div>
            <Card title="Banned User" className="max-w-lg max-h-30 p-1 mt-10 mx-auto mb-5 font-bold">
               <div className="flex flex-row">
                <div>
                <Text>{id}</Text><br/>
                <Metric>{email}</Metric>
                </div>
               <div className="flex flex-col ml-auto mr-2 justify-center">
                <Button onClick={() => handleRestoreUser(id)} className="max-h-10 mt-auto my-1 hover:bg-gray-600">Desbloquear</Button>
               </div>
               </div>
            </Card>
        </div>
     );
}
 
export default BannedUserCard;