import React, {useState} from 'react'

export default function StarRating() {
    const [rating, setRating] = useState(0);
    const totalStars = 5;

    const handleClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    className={`star ${index < rating ? 'filled' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    ★
                </span>
            ))}
            <p>Rating: {rating}</p>
        </div>
    );
}
