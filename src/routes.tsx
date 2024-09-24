import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const DefaultRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    }
]