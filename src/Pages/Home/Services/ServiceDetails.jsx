
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const location = useLocation();
  const services = location.state;

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-center mb-20">Service Details</h2>
      {services && (
        <div className="mb-32 flex justify-center gap-6">
          <img src={services.image} className=" h-[60vh] w-1/2 " alt="" />
          <div className="w-1/3">
            <h2 className="text-3xl font-bold text-red-500">
                price: {services.price}
            </h2>
            <p>
                <span className="font-bold">Description: </span>
                {
                    services.description
                }
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
