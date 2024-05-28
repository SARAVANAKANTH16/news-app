import React from 'react'
import Image from '../image/image1.jpg'
const NewsItem = ({title,description,src,url}) => {
    return (
        <div className="card bg-black text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <img src={src?src:Image} style={{height:"200px", width:"320px"}}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description ? description.slice(0,90):"News information will be arrive soon........"}</p>
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
        </div>
    )
}

export default NewsItem