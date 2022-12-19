export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className=" flex justify-center">
            <button onClick={onAddProduct} className=" font-bold text-black bg-blue-400  hover:bg-yellow-500 rounded-full h-6 w-full flex items-center justify-center text-sm"><span>Add to Cart</span></button>
        </div>
    )
}