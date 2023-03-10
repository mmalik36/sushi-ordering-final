import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from "../../hooks/useTabSwitch";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import { AddressForm } from "../../components/AddressForm";
import { ProductsSummary } from "../../components/ProductsSummary";
import { StripeWrapper } from "../../components/PaymentForm";
import {About} from "../../components/About"

const Cart = () => {
    const cart = useSelector(cartProducts);
    const tabs= ['Summary', 'Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

    if (!cart || cart.length === 0) {
        return (
            <div className="bg-white h-full text-black flex justify-center p-4">
                <h1>Your Cart is empty</h1>
            </div>
        )
    }

    return (
        <div>
        <div className="bg-white h-screen text-black  mx-auto mt-1.0 border border-gray-200 w-5/12 rounded-lg shadow-md sm:p-4 lg:p-20 ">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                <ProductsSummary />
                <div className="flex justify-end p-2">
                    <Button variant="dark" className="flex items-center" onClick={()=>handleTabSwitch('Delivery')}><span className="mr-1">Next</span><ArrowRightSvg /></Button>
                </div>
            </div>
            <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
                <AddressForm onTabSwitch={handleTabSwitch}/>
            </div>
            <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
                <StripeWrapper />
            </div>
        </div>
            <About/>
        </div>
    )
}

export default Cart;