const Layout = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-black overflow-hidden">
            {children}
        </div>
    );
}

export default Layout;