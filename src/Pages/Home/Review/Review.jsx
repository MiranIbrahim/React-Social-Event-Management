import  { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import Marquee from "react-fast-marquee";
const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('/review.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div className='my-10'> 
            <h2 className="text-4xl font-extrabold text-center mb-16">Reviews</h2>
            <Marquee pauseOnHover={true}>
            {
                reviews.map(review => <ReviewCard 
                key={review.id} reviews={review}></ReviewCard>)
            }
            </Marquee>
        </div>
    );
};

export default Review;