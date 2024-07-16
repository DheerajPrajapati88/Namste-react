import { img_url } from '../utils/constants';

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cloudinaryImageId,locality,avgRating,costForTwo}=resData.info;
    return (
        <div className="res-card">
            <img src={img_url+ cloudinaryImageId} alt="" />
            <h4 className="dish-name">{name}</h4>
            <h5 className="disc">{locality}</h5>
            <div className="rating-time">
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            </div>

        </div>
    )
}

export default RestaurantCard;