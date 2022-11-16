import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import './index.css'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;