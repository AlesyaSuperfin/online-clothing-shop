import { useSelector } from 'react-redux';
import ClothesData from '../../Data/ClothesData';
import ClotheItem from './ClotheItem';
import { getSelectedCategory } from '../../Redux/clothesSlice';

const Clothes = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className='item_container'>
            {ClothesData
            .filter(clothe => {
                if (selectedCategory === 'VIEW ALL') return true;
                return selectedCategory === clothe.category})
            .map((clothe, item) => <ClotheItem key={item} clothe={clothe} />)}
        </div>
    )
}

export default Clothes;