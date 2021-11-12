import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { GridCard } from "./styled";
import { useHistory } from "react-router-dom"
import { goToPokedex } from "../../routes/cordinator"

const PokemonListScreen = () => {
    const { pokemons } = useContext(GlobalStateContext)
    const history = useHistory()

    return (
        <div>

            <Header
                title={"infopokes.com"}
                leftButtonFunction={() => goToPokedex(history)}
                
            />

            <GridCard>
                {
                    pokemons.map((item) => {
                        return <PokemonCard key={item.name} pokemon={item} />
                    })
                }
            </GridCard>

        </div>
    )
}

export default PokemonListScreen;
