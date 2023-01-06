import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import RoutesWrapper from "./RoutesWrapper";

function Pages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RoutesWrapper />}>

                </Route>
            </Routes>
        </BrowserRouter>
            
    )
}

export default Pages