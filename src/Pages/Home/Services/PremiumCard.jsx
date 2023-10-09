const PremiumCard = ({service}) => {
    const {name, description, image, price} = service;
  return (
    <div className="card md:w-80 bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-[200px] w-full" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-red-500 font-extrabold">{price}</p>

        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
