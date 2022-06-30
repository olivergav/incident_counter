export function CharacterListItem({character: {id, name}}) {
    return (
        <article>
            <a href={`/characters/${id}`}>{name}</a>
        </article>
    )
}