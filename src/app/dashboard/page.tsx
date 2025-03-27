import AdminDashboardPage from "@/components/organisms/AdminDashboardPage";
import UserDashboard from "@/components/organisms/UserDashboardPage";
import {cookieUtils} from "@/lib/utils";
import {IUser} from "@/lib/actions";

export default function Dashboard() {
    
    /* const userSession = cookieUtils<IUser>('session')
    const userRole = userSession?.role // Assuming 'role' is part of the session object
    const username = userSession?.username;
    */
    const userRole:string = 'user';
    const username:string = 'test';

    if (userRole === 'admin') {
        return <AdminDashboardPage username={username}/>
    } else if (userRole === 'user') {
        return <UserDashboard username={username}/>
    }
}
