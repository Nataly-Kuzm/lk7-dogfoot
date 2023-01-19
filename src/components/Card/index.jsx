import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Heart, HeartFill} from "react-bootstrap-icons"
import "./style.css";
import Local from "../../Local";
//import Api from "../../Api";

const Card = ({name, price, pictures, _id, likes, api}) => {
    const [like, setLike] = useState(false);
    const imgStyle ={
        backgroundImage: `url(${pictures})`
    };
useEffect(() => {
    let id = Local.getItem("u", true)._id;
  
   if(likes.includes(id)) {
      setLike(true);
   }
}, [])

const likeHandler = e =>{
    e.stopPropagation();
    e.preventDefault();
    setLike(!like);
    api.setLike(_id, !like )
      .then(res => res.json())
      .then(data => {
        if (!like) {
            setFav(prev => {
                return [...prev, data]
            })
        } else {
            setFav(prev => prev.filter(el => {
                el._id !== data._id
            }))
        }
        console.log(data)
      })
}

    return (
        <Link to={`/product/${_id}`}>
        <div className="card">
            <div className="card__img" style={imgStyle}></div>
            <div className="card__price">{price}₽</div>
            <div className="card__text">{name}</div>
            <button className="btn">В корзину</button>
           <span 
           className="card__like" 
           onClick={likeHandler}
            >
            {like ? <HeartFill/> : <Heart/>}
            </span>
        </div>
        </Link>
    )
}
export default Card;