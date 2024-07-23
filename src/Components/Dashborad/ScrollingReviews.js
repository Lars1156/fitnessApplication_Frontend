import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import axios from 'axios';
import '../cssFiles/scroll.css';

const ScrollingReviews = () => {
        const [reviews, setReviews] = useState([]);
      
        useEffect(() => {
          const fetchReviews = async () => {
            try {
              const response = await axios.get('http://localhost:5008/api/getAllReview');
              setReviews(response.data);
            } catch (error) {
              console.error('Error fetching reviews:', error);
            }
          };
      
          fetchReviews();
        }, []);
      
        return (
          <div className="scrolling-reviews">
            <h2>User Reviews</h2>
            <Carousel autoplay>
              {reviews.map((review) => (
                <div key={review._id} className="review-slide">
                  <h3>{review.name}</h3>
                  <p>{review.review}</p>
                  <span>Rating: {review.rating}</span>
                  <span>Date: {new Date(review.date).toLocaleDateString()}</span>
                </div>
              ))}
            </Carousel>
          </div>
        );
      };
export default ScrollingReviews;
