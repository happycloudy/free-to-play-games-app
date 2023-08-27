import Layout from "../components/Layout/Layout.tsx";
import Filter from "../components/Filter/Filter.tsx";
import Sorter from "../components/Sorter/Sorter.tsx";
import GamesList from "../components/GamesList/GamesList.tsx";

const Home = () => {
    return (
        <Layout>
            <Filter/>
            <Sorter/>
            <GamesList/>
        </Layout>
    );
};

export default Home;