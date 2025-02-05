import React from "react";
import { useNavigate } from "react-router";
import BlogSlider from "../../components/blogslider/blogslider";

function Product() {
    const navigate = useNavigate();
    return(
        <>
            <BlogSlider/>
        </>
    )
}

export default Product;