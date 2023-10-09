import { useLoaderData } from "react-router-dom";
import PremiumCard from "./PremiumCard";

const PremiumServices = () => {
  const premiumServices = useLoaderData();
  const serviceType = premiumServices.filter(service => service.service_type === 2);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 m-20">
      {serviceType.map((service) => (
        <PremiumCard key={service.id} service={service}></PremiumCard>
      ))}
    </div>
  );
};

export default PremiumServices;

