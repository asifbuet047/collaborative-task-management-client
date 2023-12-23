import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignInPage from "../Components/Signin/SignInPage";
import RegistrationPage from "../Components/Registration/RegistrationPage";
import PageNotFound from '../Components/PageNotFound/PageNotFound'
import HomePage from "../Components/Home/HomePage";

export const getRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <HomePage />,
                errorElement: <PageNotFound></PageNotFound>,
            },

            {
                path: '/signin',
                element: <SignInPage></SignInPage>,
                errorElement: <PageNotFound></PageNotFound>,
            },
            {
                path: '/registration',
                element: <RegistrationPage></RegistrationPage>,
                errorElement: <PageNotFound></PageNotFound>,
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <PageNotFound></PageNotFound>,

    }
]);