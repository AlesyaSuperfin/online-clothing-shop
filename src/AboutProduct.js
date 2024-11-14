import { useNavigate, useParams } from "react-router-dom";
import ClothesData from "./Data/ClothesData";

const AboutProduct = () => {

    const navigate = useNavigate();
    const {title} = useParams();

    return (<div>
            {ClothesData.filter((clothe) => clothe.title === title).map ((clothe, index) =>{
                return (
                    <div key={index} className="header">
                        <h3 className="itemName">{clothe.name}</h3>
                        <h4 className="itemName">Price: {clothe.price} $</h4>
                        <img src={`/${clothe.image}.jpg`} alt="product" width="300px"/>
                        <p className="clotheDescription">{clothe.description}</p>
                        <button className='button_CTA' onClick={() => navigate(-1)}>Go back</button>
                    </div>
                )
            })}

    </div>)
}

export default AboutProduct;