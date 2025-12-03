import {RouterProvider} from "react-router";
import appRouter from "./navigation/app.router.tsx";
import AuthProvider from "./providers/AuthProvider/AuthProvider.tsx";
import {useEffect} from "react";
import {urls} from "app/navigation/app.urls.ts";
import 'app/styles/sanitize.scss'
import 'styles/_variables.scss'
import 'styles/ui-kit.scss'
import 'app/styles/fonts.scss'
import 'styles/text.scss'

const App = () => {

    useEffect(() => {
       if (location.pathname === '/'){
           location.replace(urls.catalog);
       }
    },[])

    return (
        <AuthProvider>
            <RouterProvider router={appRouter}/>
        </AuthProvider>
    );
};

export default App;