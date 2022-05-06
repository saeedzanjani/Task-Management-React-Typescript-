import React, {ReactNode} from 'react';
import Header from "../containers/Header";

type LayoutProps = {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
