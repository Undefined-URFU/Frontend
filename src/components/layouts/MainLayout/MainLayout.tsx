import {Suspense} from "react";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export default MainLayout;