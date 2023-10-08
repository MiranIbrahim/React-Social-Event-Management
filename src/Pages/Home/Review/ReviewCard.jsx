const ReviewCard = ({ reviews }) => {
    const { id, name, image, review } = reviews;
    return (
      <div className="card w-96 bg-red-100 shadow-xl mr-5 h-[300px] overflow-y-hidden"> {/* Set the desired height and hide overflow */}
        <div className="avatar mt-2">
          <div className="w-24 rounded-full mx-auto">
            <img 
              className="mx-auto h-full"  // Set height to fill the container
              src={image} 
              alt={name}  // Don't forget to add an alt attribute
            />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{review}</p>
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
  