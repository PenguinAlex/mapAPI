import {MainHeroHeader} from "../components/HeroHeaders/MainHeroHeader/MainHeroHeader.tsx";
import {Button} from "@mantine/core";
import MainHeroDescription from "../components/HeroHeaders/MainHeroDescription/MainHeroDescription.tsx";
import Gallary from "../components/Gallary/Gallary.tsx";
import Tiledmap from "../components/Tiledmap/Tiledmap.tsx";

const Home = () => {
    return (
        <div>
            <MainHeroHeader/>
            <MainHeroDescription/>
            <Gallary/>
            <Button/>
            <Tiledmap/>
        </div>
    );
};

export default Home;