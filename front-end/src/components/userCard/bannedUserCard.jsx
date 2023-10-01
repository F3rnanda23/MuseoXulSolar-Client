import { useDispatch } from "react-redux";


import { restoreUser } from '../../redux/actions/actions'
 
import { Card, Text, Metric, Button } from "@tremor/react";

const BannedUserCard = ({ banned }) => {

    const dispatch = useDispatch();

    const { id, email } = banned;
    console.log(id);
    
    const handleRestoreUser = (id) => {
        dispatch(restoreUser(id))
    };

    return ( 
        <div>
            <Card title="Banned User">
                <Text>{id}</Text><br/>
                <Metric>{email}</Metric>
                <Button onClick={() => handleRestoreUser(id)} className="max-h-10 mt-auto my-1 hover:bg-gray-600">Desbloquear</Button>
            </Card>
        </div>
     );
}
 
export default BannedUserCard;