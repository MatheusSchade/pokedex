import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { GridCard, SearchContainer } from "./styled";
import { useHistory } from "react-router-dom"
import { goToPokedex } from "../../routes/cordinator"
import Loading from "../../components/Loading/Loading"
import useForm from "../../hooks/useForm";

const PokemonListScreen = () => {
    const { pokemons } = useContext(GlobalStateContext)
    const history = useHistory()

    const [form, onChange] = useForm({ searchNameInput: "", ordering: "" })

    let pokes = pokemons && pokemons.filter((poke) => {
        return (poke && poke.name.toLowerCase().includes(form.searchNameInput.toLowerCase())
        )
    }).sort((previous, next) => {
        switch (form.ordering) {
            case "index":
                return previous.id - next.id
            case "az":
                return previous.name.localeCompare(next.name);
            case "za":
                return next.name.localeCompare(previous.name);
            default:
                return previous.id - next.id
        }
    })

    console.log(pokes)

    return (
        <div>

            <Header
                title={"infopokes.com"}
                leftButtonFunction={() => goToPokedex(history)}

            />

            {pokes.length > 0 ? <GridCard>

                <SearchContainer>

                    <h3>Filtrar</h3>
                    <p></p>
                    <input
                        value={form.searchNameInput}
                        type={"text"}
                        onChange={onChange}
                        name={"searchNameInput"}
                        placeholder="Filtrar por nome"
                    />

                    <select
                        name="ordering"
                        value={form.ordering}
                        onChange={onChange}
                        defaultValue={""}
                    >
                        <option value="" disabled>Ordenar por</option>
                        <option value="az">Nome de A-Z</option>
                        <option value="za">Nome de Z-A</option>
                        <option value="index">Índice Pokemon</option>
                    </select>

                </SearchContainer>

                {
                    pokes.map((item) => {
                        return <PokemonCard key={item.name} pokemon={item} />
                    })
                }
            </GridCard> : <Loading />}

        </div>
    )
}

export default PokemonListScreen;
