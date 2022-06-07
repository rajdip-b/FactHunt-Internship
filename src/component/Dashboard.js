import Discover from "./Discover";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return <div className="row">
        <Sidebar className="col-2"/>
        <Discover className="col-10"/>
    </div>
}

export default Dashboard;