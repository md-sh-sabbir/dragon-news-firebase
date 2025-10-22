import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
            <div>
                <div className="join flex-col w-full">
                    <button className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram> Instragram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;