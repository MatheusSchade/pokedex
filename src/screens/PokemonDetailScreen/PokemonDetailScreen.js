import React, { useEffect, useContext, useState } from "react";
import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { Main, LeftBar, Galery, Carrossel, CenterBar, RigthBar, Infos, RigthInfos, Moves, Order } from "./styled"
import { useHistory } from "react-router-dom"
import { urlBase } from "../../constants/url"
import axios from "axios"
import { goToPokedex } from "../../routes/cordinator";

const PokemonDetailScreen = () => {
    const { name } = useParams() // a mesma coisa que const params = useParams() e depois fazer params.name
    const [selectedPokemon, setSelectedPokemon] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios
            .get(`${urlBase}/pokemon/${name}`)
            .then((res) => setSelectedPokemon(res.data))
            .catch((err) => console.log(err.response.message));
    }, [])

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.substr(1);
    }

    console.log(selectedPokemon)
    return (
        <div>
            <Header
                title={selectedPokemon && selectedPokemon.name && (selectedPokemon.name).capitalize()}
                leftButtonFunction={() => history.goBack()}
                rigthButtonFunction={() => goToPokedex(history)}
                showRigthButton={true}
            />
            <Main>
                <LeftBar>

                    <Order># {selectedPokemon && selectedPokemon.order}</Order>
                    <h2>{selectedPokemon && selectedPokemon.name && (selectedPokemon.name).capitalize()}</h2>
                    <Galery>
                        <Carrossel>

                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} alt={selectedPokemon && selectedPokemon.name} />
                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default} alt={selectedPokemon && selectedPokemon.name} />
                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_shiny} alt={selectedPokemon && selectedPokemon.name} />
                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_shiny} alt={selectedPokemon && selectedPokemon.name} />
                            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} alt={selectedPokemon && selectedPokemon.name} />

                        </Carrossel>
                    </Galery>

                    <Infos>
                        <h2>Type:</h2>

                        {
                            selectedPokemon && selectedPokemon.abilities && selectedPokemon.types.map((item) => {
                                return (
                                    <p key={item.type.name}>
                                        {(item.type.name).capitalize()}
                                    </p>
                                )
                            })

                        }
                    </Infos>

                    <Infos>
                        <h2>Stats:</h2>

                        {
                            selectedPokemon && selectedPokemon.abilities && selectedPokemon.stats.map((item) => {
                                return (
                                    <p key={item.stat.name}>
                                        <strong>{(item.stat.name).capitalize()}:  </strong>
                                        {item.base_stat}
                                    </p>
                                )
                            })
                        }
                    </Infos>
                </LeftBar>

                <CenterBar>
                    <Infos>
                        <h2>Abilities:</h2>

                        {selectedPokemon && selectedPokemon.abilities && selectedPokemon.abilities.map((item) => {
                            if (item.is_hidden === true) {
                                return <p key={item.ability.name}><strong>{(item.ability.name).capitalize()} (Hidden Ability)</strong></p>
                            } else {
                                return <p key={item.ability.name}>{(item.ability.name).capitalize()}</p>
                            }
                        })
                        }

                    </Infos>


                </CenterBar>

                <RigthBar>
                    <RigthInfos>
                        <h2>Moves:</h2>
                        {

                            selectedPokemon && selectedPokemon.abilities && selectedPokemon.moves.map((item) => {
                                return (
                                    <Moves key={item.move.name}> {(item.move.name).capitalize()}</Moves>
                                )
                            })

                        }
                    </RigthInfos>
                </RigthBar>
            </Main>

        </div>
    )
}

export default PokemonDetailScreen;
