import React from 'react';

const GameCardImg = ({src, ...props}: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img src={src} alt={"game card image"} {...props}/>
    );
};

export default GameCardImg;