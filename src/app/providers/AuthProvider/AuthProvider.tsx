import {type PropsWithChildren, useState} from "react";
import Auth from "components/pages/Auth/Auth.tsx";

const AuthProvider = (props: PropsWithChildren) => {
    const [user, ] = useState(null)

    if (!user){
        return <Auth/>
    }


    return (
        <>
            {props.children}
        </>
    );
};

export default AuthProvider;