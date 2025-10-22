import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    // console.log(news);

    const {title, image_url, details, category_id} = news

    return (
        <div className='space-y-5'>
            <img className='w-full h-[450px] object-cover' src={image_url} alt="" />
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-accent'>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary'><FaArrowLeft size={16}></FaArrowLeft> Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;