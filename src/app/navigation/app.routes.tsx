import {urls} from "./app.urls.ts";
import {lazy} from "react";


const Catalog = lazy(() => import("components/pages/Catalog/Catalog.tsx"));


export const appRoutes = [
    {
        path: urls.catalog,
        element: <Catalog/>,
    },

]