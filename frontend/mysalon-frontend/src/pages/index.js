import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import RoutesWrapper from "./RoutesWrapper";
import HomePage from "./HomePage";
import Login from "./Login";
import SingleItem from "./SingleItem";
import Register from "./Register";
import AddProduct from "./../components/addproduct/AddProduct";
import { UserAuthProvider } from "../context/UserAuthContext";

function Pages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <UserAuthProvider>
                        <RoutesWrapper />
                    </UserAuthProvider>
                }>
                    <Route index element={<HomePage />} />
                    <Route path="products/:id" element={<SingleItem />} />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
            
    )
}

export default Pages