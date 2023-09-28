
const CommentCard = ({ comment }) => {

  const { description, date, rating, email } = comment;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="md:min-w-[500px] md:max-w-[90%] mx-auto">
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-orange-100 shadow-lg">

        <div className="relative flex flex-col gap-4 md:flex-row">

          <div className="flex flex-col w-full">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{email}</p>
              <h2 className="md:ml-2">{rating}⭐</h2>
            </div>
            <p className="text-gray-400 text-sm">{formatDate(date)}</p>
          </div>
        </div>

        <p className="-mt-4 text-gray-500">
          {description}
          <br className="block md:hidden" />

        </p>
      </div>
    </div>

  );
}

export default CommentCard;
