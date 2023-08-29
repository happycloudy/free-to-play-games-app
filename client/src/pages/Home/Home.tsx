import Layout from "../../components/Layout/Layout.tsx";
import GamesList from "../../components/GamesList/GamesList.tsx";
import SearchForm from "../../components/SearchForm/SearchForm.tsx";

const Home = () => {
    return (
        <Layout>
            <SearchForm/>
            <GamesList/>
        </Layout>
    );
};

export default Home;