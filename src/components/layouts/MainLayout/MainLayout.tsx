import {Suspense} from "react";
import {Outlet} from "react-router";
import { Header } from "components/widgets/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Header/>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export default MainLayout;