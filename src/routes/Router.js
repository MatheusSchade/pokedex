import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PokemonDetailScreen from "../screens/PokemonDetailScreen/PokemonDetailScreen";
import PokemonListScreen from "../screens/PokemonListScreen/PokemonListScreen";
import PokedexScreen from "../screens/PokedexScreen/PokedexScreen"

const Router = () => {
    return (
        <BrowserRouter>

            <Switch>

                <Route exact path={"/"} component={PokemonListScreen} />

                <Route exact path={"/pokemon/:name"} component={PokemonDetailScreen} />

                <Route exact path={"/pokedex"} component={PokedexScreen} />

                <Route>
                    <div>
                        <h1>Erro!</h1>
                        <h3>Página não encontrada...</h3>
                    </div>
                </Route>

            </Switch>

        </BrowserRouter>
    )
}

export default Router