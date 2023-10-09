
import { Link } from "react-router-dom";


const ServiceCard = ({services}) => {
  const { id, name, image, description } = services;
  return (
    <div className="card md:w-80 bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-[200px] w-full"
          src={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link 
          className="btn btn-primary"
          to={`/service/${id}`} 
          state={services}>
          Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default (ServiceCard);
