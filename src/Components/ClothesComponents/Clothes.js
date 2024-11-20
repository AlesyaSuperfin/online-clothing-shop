import ClotheItem from './ClotheItem';

function Clothes ({ClothesData}) {

    return (
        <div className='item_container'>
            {ClothesData
            .map((clothe) => <ClotheItem key={clothe.id} clothe={clothe} />)}
        </div>
    )
}

export default Clothes;