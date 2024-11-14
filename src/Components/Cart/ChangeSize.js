
const ChangeSize = ({size, setSize}) => {

    const sizes = ['S', 'M', 'L', 'XL']
    
    const options = sizes.map((size, index) => {
        return <option key={index}>{size}</option>})

    return(
        <div>
            <p className="itemDescription">Size: <select value={size} onChange={(event) => setSize(event.target.value)}>{options}</select></p>
        </div>
    )
}

export default ChangeSize;