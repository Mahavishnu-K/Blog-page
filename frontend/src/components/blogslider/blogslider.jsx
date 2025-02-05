import React from "react";
import "./blogslider.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const blogs = [
  {
    id: 1,
    title: "Tech Innovations 2024",
    category: "Technology",
    categoryColor: "#5A9CF5",
    description: "Discover the latest trends and innovations in technology.",
    image: img1,
    author: "Jane Doe",
    time: "2h ago",
    authorImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    title: "The Best Cuisines to Try",
    category: "Food",
    categoryColor: "#F5A623",
    description: "Explore the most delicious and trending food dishes.",
    image: img2,
    author: "Jony Doe",
    time: "Yesterday",
    authorImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 3,
    title: "Top Travel Destinations",
    category: "Travel",
    categoryColor: "#4CAF50",
    description: "Plan your next adventure with these amazing destinations.",
    image: img3, 
    author: "Sarah Lee",
    time: "3d ago",
    authorImage: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    title: "Luxury Cars of the Year",
    category: "Automobile",
    categoryColor: "#E44D42",
    description: "Check out the most stylish and high-performance cars.",
    image: img4, 
    author: "John Doe",
    time: "2d ago",
    authorImage: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 5,
    title: "Fitness & Wellbeing",
    category: "Health",
    categoryColor: "#9C27B0",
    description: "Learn the best fitness and health tips for a better lifestyle.",
    image: img1,
    author: "Mike Ross",
    time: "4d ago",
    authorImage: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    title: "Music & Lifestyle",
    category: "Music",
    categoryColor: "#FF9800",
    description: "Stay updated with the latest trends in music and lifestyle.",
    image: img2,
    author: "Emily Clark",
    time: "5d ago",
    authorImage: "https://randomuser.me/api/portraits/women/2.jpg",
  }
];

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <span
          className="blog-category"
          style={{ backgroundColor: blog.categoryColor }}
        >
          {blog.category}
        </span>
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-description">{blog.description}</p>
        <div className="blog-footer">
          <img src={blog.authorImage} alt={blog.author} className="author-img" />
          <div>
            <p className="author-name">{blog.author}</p>
            <p className="blog-time">{blog.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BlogSlider() {
  return (
    <div className="blog-slider">
      <div className="product-title">
        <h1>Explore the blogs</h1>
      </div>
      <div className="slider-track">
        {blogs.concat(blogs).map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}
