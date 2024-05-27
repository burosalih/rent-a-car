import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Salih Buro",
      review: "Osoblje veoma prijatno i ljubazno, a cijene povoljne i svima dostupne.",
      rating: 5
    },
    {
      id: 2,
      name: "Faris Šišić",
      review: "Proces rentanja nikad jednostavniji, automobili u dobrom stanju i uvijek čisti.",
      rating: 5
    },
    {
      id: 3,
      name: "Ahmed Patković",
      review: "Toplo preporučujem CCRent, nadam se da će nastaviti s ovakvim radom.",
      rating: 4
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-400">&#9733;</span>); 
      } else {
        stars.push(<span key={i} className="text-gray-400">&#9733;</span>); 
      }
    }
    return stars;
  };

  return (
    <div className="my-24 mx-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Recenzije</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-2 text-center">{review.name}</h3>
            <p className="text-gray-600 text-lg text-center">{review.review}</p>
            <div className="flex justify-center my-4">
              <div className="mr-2">{renderStars(review.rating)}</div>
              <span className="text-gray-600">{review.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
