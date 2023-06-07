import {MainHeroHeader} from "../components/HeroHeaders/MainHeroHeader/MainHeroHeader.tsx";
import {Button} from "@mantine/core";
import MainHeroDescription from "../components/HeroHeaders/MainHeroDescription/MainHeroDescription.tsx";

const Home = () => {
    return (
        <div>
            <MainHeroHeader/>
            <MainHeroDescription/>
            <Button/>

        </div>
    );
};

export default Home;