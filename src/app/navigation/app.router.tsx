import {createBrowserRouter} from "react-router";
import {appRoutes} from "./app.routes.tsx";
import MainLayout from "../../components/layouts/MainLayout/MainLayout.tsx";

const appRouter = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: appRoutes,
    },
])

export default appRouter;