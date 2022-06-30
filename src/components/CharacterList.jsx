import {CharacterListItem} from "./CharacterListItem";

export function CharacterList({characters = []}) {
    return (
        <section>
            {characters.map((character) => (
                <CharacterListItem
                    key={character.id}
                    character={character}
                />
            ))}
        </section>
    )
}