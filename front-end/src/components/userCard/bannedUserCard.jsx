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
        // <div>
        //     <Card title="Banned User" className="max-w-2/3 max-h-50 p-1 mt-10 mx-auto mb-5 font-bold">
        //        <div className="flex flex-col">
        //         <div>
        //         <Text>{id}</Text><br/>
        //         <Metric>{email}</Metric>
        //         </div>
        //        <div className="flex flex-col ml-auto mr-2 justify-center">
        //         <Button onClick={() => handleRestoreUser(id)} className="max-h-10 mt-auto my-1 hover:bg-gray-600">Desbloquear</Button>
        //        </div>
        //        </div>
        //     </Card>
        // </div>  

<div className="w-3/4">
  <Card className="max-w-3/4 max-h-50 p-1 mt-10 mx-2 md:ml-24 mb-5 font-bold">
    <div className="flex flex-col">
      <div>
        <Text style={{ fontSize: '1.2rem' }}>{id}</Text><br/>
        <Metric style={{ fontSize: '1.2rem' }}>{email}</Metric>
      </div>
      <div className="flex flex-col ml-auto justify-center">
        <Button onClick={() => handleRestoreUser(id)} className="max-h-10 mt-auto my-1 hover:bg-gray-600" style={{ fontSize: '1.2rem' }}>Desbloquear</Button>
      </div>
    </div>
  </Card>
</div>


     );
}
 
export default BannedUserCard;