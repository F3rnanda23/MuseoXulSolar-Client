const DonationsCard = ({ donation }) => {

    const { userEmail, price} = donation;
    return ( 
        <div>
            <div className="md:min-w-md md:max-w-lg mx-auto px-2">
                <div className="relative flex flex-col gap-4 p-4 mb-8 border rounded-lg bg-orange-100 shadow-lg">

                        <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{userEmail}</p>
                        <p className="-mt-4 text-gray-500">
                            Donacion de $ {price}
                        </p>
                </div>

            </div>
        </div>
     );
}
 
export default DonationsCard;