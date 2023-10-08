import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Review from "./Review/Review";
import ServiceCard from "./Services/ServiceCard";


const Home = () => {
    const services = useLoaderData();

    return (
        <div className="px-10">
            <Hero></Hero>
            <h2 className="text-3xl text-center mt-16 font-extrabold">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-24 gap-5">
                
                {
                    services.map(service => <ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>
            <Review></Review>
        </div>
    );
};

export default Home;