import { useState } from "react";
import ClothesData from "../../Data/ClothesData";

const ChangeSize = () => {

    const [value, setValue] = useState('');
    const sizes = ['S', 'M', 'L'];

    const options = sizes.map((size, index) => {
        return <option key={index}>{size}</option>})
        console.log(options);

    return(
        <div>
            <p>Size:
            <select value={value} onChange={(event) => setValue(event.target.value)}>{options}</select></p>
        </div>
    )
}

export default ChangeSize;