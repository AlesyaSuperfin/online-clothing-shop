import ClotheItem from './ClotheItem';

function Clothes ({ClothesData}) {

    return (
        <div className='item_container'>
            {ClothesData
            .map((clothe, item) => <ClotheItem key={item} clothe={clothe} />)}
        </div>
    )
}

export default Clothes;