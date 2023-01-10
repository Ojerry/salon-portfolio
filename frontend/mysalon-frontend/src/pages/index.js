import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import RoutesWrapper from "./RoutesWrapper";
import HomePage from "./HomePage";
import Login from "./Login";
import SingleItem from "./SingleItem";
import AddProduct from "./../components/addproduct/AddProduct";

function Pages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RoutesWrapper />}>
                    <Route index element={<HomePage />} />
                    <Route path="products/:id" element={<SingleItem />} />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
            
    )
}

export default Pages