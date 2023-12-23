import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignInPage from "../Components/Signin/SignInPage";
import RegistrationPage from "../Components/Registration/RegistrationPage";
import PageNotFound from '../Components/PageNotFound/PageNotFound'
import HomePage from "../Components/Home/HomePage";
import Dashboard from "../Components/Dashboard/Dashboard";
import AllTasks from "../Components/Dashboard/AllTasks/AllTasks";

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
        element: <Dashboard />,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: 'addtask',
            },
            {
                path: 'edittask',
            },
            {
                path: 'alltasks',
                element: <AllTasks />
            },
            {
                path: 'profile',
            }
        ]
    }
]);