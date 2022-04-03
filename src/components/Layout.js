import { Outlet } from "react-router-dom";
import Nav from './Nav';

function Layout( { token, setToken, user, setUser }) {
    return (
    <>       
        <Nav token={token} setToken={setToken} user={user} setUser={setUser}/>
        <main>
            <Outlet />
        </main>
    </>

    );
}

export default Layout;