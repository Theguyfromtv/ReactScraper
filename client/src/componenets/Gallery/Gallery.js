import React from "react";


 const Gallery = (props)=>(
    <div className="card-deck">
    {props.children}
    </div>
)

export default Gallery;
