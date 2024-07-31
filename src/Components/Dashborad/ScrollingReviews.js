// src/components/ScrollingReviews.js
import React, { useEffect, useState } from 'react';
import { Carousel, Card } from 'antd';
import axios from 'axios';
import '../cssFiles/scroll.css';

const { Meta } = Card;

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
            <Card hoverable className="review-card">
              <Meta
                title={review.name}
                description={
                  <>
                    <p>{review.review}</p>
                    <span>Rating: {review.rating}</span><br />
                    <span>Date: {new Date(review.date).toLocaleDateString()}</span>
                  </>
                }
              />
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ScrollingReviews;
