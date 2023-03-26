import style from './Selectores.module.css'

const Selectores = () =>{
    return (
        <div className={style.container}>
            <select>
                <option value="Gender" selected disabled>Gender</option>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknonw">Unknonw</option>
                <option value="Genderless">Genderless</option>
            </select>

            <select>
                <option value="Species" selected disabled>Species</option>
                <option value="Human">Human</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Animal">Animal</option>
                <option value="Alien">Alien</option>
                <option value="Robot">Robot</option>
                <option value="unknown">unknown</option>
                <option value="Mythological Creature">Mythological Creature</option>
            </select>

            <select>
                <option value="Status" selected disabled>Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
            </select>

            <select>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>

        </div>
    )
}

export default Selectores