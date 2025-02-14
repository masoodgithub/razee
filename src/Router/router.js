import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/home";
import RecipientsView from "../features/recipientView";

const Approuter = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/activity' element={<RecipientsView />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}