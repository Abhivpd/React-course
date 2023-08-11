import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestarantMenu";
import UserContext from "./utils/UserContext";

const AppComponent = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        setUserName('Abhishek')
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const Grocery = lazy(() => import("./components/Grocery"))

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:restaurantId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);