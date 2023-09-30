
import { Card, Text, Metric, Button } from "@tremor/react";

const BannedUserCard = () => {
    return ( 
        <div>
            <Card title="Banned User">
                <Text>id</Text><br/>
                <Metric>fecha</Metric>
                <Button className="max-h-10 mt-auto my-1 hover:bg-gray-600">Desbloquear</Button>
            </Card>
        </div>
     );
}
 
export default BannedUserCard;