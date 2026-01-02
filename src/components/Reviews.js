import { useState, useEffect } from "react";

function Reviews() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(saved);
  }, []);

  const submitReview = () => {
    if (!name || !review) {
      alert("Please enter name and review");
      return;
    }

    const newReview = { name, review };
    const updated = [...reviews, newReview];

    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));

    setName("");
    setReview("");
  };

  return (
    <section className="reviews">
      <center><h2>Customer Reviews</h2></center>

      <div className="review-form">
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button onClick={submitReview}>Submit Review</button>
      </div>

      {reviews.length === 0 ? (
       <center><p>No reviews yet. Be the first!</p></center>
      ) : (
        reviews.map((r, i) => (
          <div key={i} className="review-card">
           <center><p>"{r.review}"</p></center>
           <center> <span>- {r.name}</span></center>
          </div>
        ))
      )}
    </section>
  );
}

export default Reviews;
