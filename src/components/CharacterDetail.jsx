function CharacterDetail({
                             character:
                                 {name, birthYear, eyeColor, gender, hairColor, height, mass, skinColor} = {}
                         }) {
    return (<section>
        <h2>{name}</h2>
        <ul>
            <li><strong>Birth Year</strong>: {birthYear}</li>
            <li><strong>Eye color</strong>: {eyeColor}</li>
            <li><strong>Gender</strong>: {gender}</li>
            <li><strong>Hair Color</strong>: {hairColor}</li>
            <li><strong>Height</strong>: {height}</li>
            <li><strong>Mass</strong>: {mass}</li>
            <li><strong>Skin Color</strong>: {skinColor}</li>
        </ul>
    </section>);
}

export default CharacterDetail;