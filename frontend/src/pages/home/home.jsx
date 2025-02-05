import React from "react";
import { useNavigate } from "react-router";
import './home.css';

function Home() {
    const navigate = useNavigate();
    return(
        <>
            <div className="heading">
                <div>
                    <h1 className="hero-text">
                        Just Blog it<br />
                        your way.<br />
                        Post it now!
                    </h1>
                </div>
                <div className="para">
                    <p>Whether you're here for thought-provoking articles, expert tips, or creative inspiration, you've come to the right place. Our blog is dedicated to bringing you fresh ideas, in-depth discussions, and practical advice on a wide range of topics. Stay curious, explore new perspectives, and join our community of passionate readers. Dive into our latest posts and start your journey today!</p>
                </div>
            </div>
        </>
    )
}

export default Home;