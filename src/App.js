import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import SideNav from "./components/SideNav/SideNav";
import { pages } from "./pages";

function App() {
    return (
        <>
            <Loader />
            <Header title={"Yazılım Mühendisliği"} />
            <SideNav pages={pages} />
            <Footer />
        </>
    );
}

export default App;