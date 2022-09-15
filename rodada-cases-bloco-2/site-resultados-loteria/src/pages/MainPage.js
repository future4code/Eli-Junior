import React, { useEffect } from "react";
import { Clover } from "../assets/clover";
import moment from "moment";
import { MediaMatcher } from "react-media-match";
import megasena from "../assets/megasena.png";
import lotomania from "../assets/lotomania.png";
import quina from "../assets/quina.png";
import timemania from "../assets/timemania.png";
import lotofacil from "../assets/lotofacil.png";
import diadesorte from "../assets/diadesorte.png";
import mb_megasena from "../assets/mobile/megasena.png";
import mb_lotomania from "../assets/mobile/lotomania.png";
import mb_quina from "../assets/mobile/quina.png";
import mb_timemania from "../assets/mobile/timemania.png";
import mb_lotofacil from "../assets/mobile/lotofacil.png";
import mb_diadesorte from "../assets/mobile/diadesorte.png";
import { 
    MainContainer,
    SelectLottery,
    GameContainer,
    Game,
    LeftSection,
    RightSection,
    Text,
    InfoContainer,
    Header,
    MiddleContainer,
    GameName, 
} from "./MainPageStyles";
import { GlobalContext } from "../globalState/GlobalContext";

export default function MainPage() {
    const {
        games,
        options, 
        setOptions,
        contest,
        result,
        setLuck,
        luck,
        name,
        setName,
    } = React.useContext(GlobalContext);

    const getSelected = (event) => {
        setOptions(event ? event.target.value : 0);
    }
    {
        if (options) {
            setLuck(contest[options]);
            setName(games[options]);
        }
    }

    useEffect(() => {
        getSelected();
    }, [options]);

    const dropDown = games && games.map((game) => {
        return (
            <option key={game.nome} value={game.id}>
                {game.nome.toUpperCase()}
            </option>
        );
    });

    const numbers = result && result.numeros && result.numeros.map((number) => {
        return (
            <GameContainer key={number}>
            {number}
            </GameContainer>
        );
    });

    const dia = moment(result.data).format("DD/MM/YYYY");

    const desktopColor = () => {
        switch (name.nome) {
            case "mega-sena":
                return megasena;
            case "lotomania":
                return lotomania;
            case "quina":
                return quina;
            case "timemania":
                return timemania;
            case "dia de sorte":
                return diadesorte;
            case "lotofácil":
                return lotofacil;
            default:
                return megasena;
        }
    };

    const mobileColor = () => {
        switch (name.nome) {
            case "mega-sena":
                return mb_megasena;
            case "lotomania":
                return mb_lotomania;
            case "quina":
                return mb_quina;
            case "timemania":
                return mb_timemania;
            case "dia de sorte":
                return mb_diadesorte;
            case "lotofácil":
                return mb_lotofacil;
            default:
                return mb_megasena;
        }
    };

    return (
        <MainContainer>
            <MediaMatcher
                mobile={
                    <LeftSection color={mobileColor()}>
                        <Header>
                            <SelectLottery onChange={getSelected}>
                                {dropDown}
                            </SelectLottery>
                        </Header>
                        <MiddleContainer>
                            <Clover />
                            <GameName>
                                {name.nome.toUpperCase()}
                            </GameName>
                        </MiddleContainer>
                        <InfoContainer>
                            <b>
                                CONCURSO Nº{" "}
                                {luck ? luck.concursoId : <p>Aguarde o resultado</p>}
                            </b>
                        </InfoContainer>
                    </LeftSection>
                }
                desktop={
                    <LeftSection color={desktopColor()}>
                        <Header>
                            <SelectLottery onChange={getSelected}>
                                {dropDown}
                            </SelectLottery>
                        </Header>
                        <MiddleContainer>
                            <Clover />
                            <GameName>
                                {name.nome.toUpperCase()}
                            </GameName>
                        </MiddleContainer>
                        <InfoContainer>
                            <h6>CONCURSO</h6>
                            <b>
                                {luck ? luck.concursoId : <p>Aguarde o resultado</p>} - {dia}
                            </b>
                        </InfoContainer>
                    </LeftSection>
                }
            />

            <RightSection>
                <Game>{numbers}</Game>
                <Text>
                    Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
                </Text>
            </RightSection>
        </MainContainer>
    );
}