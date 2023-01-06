import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import RoutesWrapper from "./RoutesWrapper";
import HomePage from "./HomePage";

function Pages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RoutesWrapper />}>
                <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
            
    )
}

export default Pages