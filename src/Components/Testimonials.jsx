import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            rating: 5,
            comment: "Absolutely amazing cookies! The best I've ever had.",
            image: "https://i.pinimg.com/736x/3b/fe/6a/3bfe6a15f40a945e7112bccceb8bda77.jpg"
        },
        {
            name: "Jane Smith",
            rating: 4,
            comment: "Great variety and delicious taste. Highly recommended!",
            image: "https://wallpapers.com/images/hd/smart-boy-pictures-rq9gv5yunkywuq0u.jpg"
        },
        {
            name: "Michael Brown",
            rating: 5,
            comment: "I love the gluten-free options. So tasty and healthy!",
            image: "https://i.pinimg.com/736x/11/c7/35/11c7359cc1bf8d43011a58c0b9fe1ef2.jpg"
        },
        {
          name: "John Doe",
          rating: 5,
          comment: "Absolutely amazing cookies! The best I've ever had.",
          image: "https://cdn.openart.ai/published/XRG9JXD1MroSuiL4n2hA/buS-EQbh_ANaf_raw.jpg"
      },
      {
          name: "Jane Smith",
          rating: 4,
          comment: "Great variety and delicious taste. Highly recommended!",
          image: "https://mominbazaar.com/cdn/shop/products/pleeted_instant_hijab_arabica_hijab_540x_9c0be4ab-9f07-4cb8-943b-9d0d0940cbb4.jpg?v=1696415427"
      },
      {
          name: "Michael Brown",
          rating: 5,
          comment: "I love the gluten-free options. So tasty and healthy!",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwD1fzxgevPGhg_b8CwqLVODZARd2PFZJZw&s"
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Great variety and delicious taste. Highly recommended!",
        image: "https://www.shutterstock.com/image-photo/young-man-eating-cookies-biscuits-600w-104738639.jpg"
    },
    {
        name: "Michael Brown",
        rating: 5,
        comment: "I love the gluten-free options. So tasty and healthy!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwoci5T-QF9wmrQ8t2tw5ox5IdULZhSj6lA&s"
    }
    ];

    return (
        <div className="testimonials-container">
            <h2>Customer Reviews</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <h3>{testimonial.name}</h3>
                        <div className="rating">
                            {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                        </div>
                        <p>{testimonial.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;