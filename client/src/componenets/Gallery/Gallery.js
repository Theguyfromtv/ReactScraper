import React from "react";


 const Gallery = (props)=>(
    <div className="card-columns container">
    {props.children}
    </div>
)

export default Gallery;
