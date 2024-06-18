import Home from "./pages/Home";
import Works from "./pages/Works";

export const routes = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/works',
        component: <Works />
    }
]

