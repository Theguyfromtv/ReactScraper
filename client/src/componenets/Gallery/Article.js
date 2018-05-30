import React from "react";


 const Article = (props)=>(

<div>
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
        <p className="card-text">{props.sum}</p>
        <a onClick={props.buttonAction(props.id)} className="btn btn-primary btn-block">{props.buttonTitle}</a>
        <a href={props.url} className="btn btn-primary btn-block">Go to article</a>
    </div>
    </div>
</div>
)

export default Article;
