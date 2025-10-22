import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='h-[97vh] flex justify-center items-center'>
            <HashLoader size={92} />
        </div>
    );
};

export default LoadingSpinner;