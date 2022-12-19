import Button from "./elements/Button";
import {ProductPreviewCard} from "./ProductPreviewCard";
import React from "react";
import "../components/menuPage.css"
import {AddProduct} from "./AddProduct";

const ProductDetailCard = ({ product, onAddProduct }) => {
    const addProduct = () => {
        onAddProduct(product)
    }
    return (

        <div className="menuItem">
        <div className="w-8/12 text-white bg-black">
            <div className="price">
                ${product.price}
            </div>

                            <div className="btCart">

                                   <ProductPreviewCard   product={product} onAddProduct={onAddProduct} />
                                <AddProduct onAddProduct={addProduct} />
                               </div>


        </div>
        </div>
    )
}

export default ProductDetailCard;