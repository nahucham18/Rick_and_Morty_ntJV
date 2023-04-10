import { useDispatch, useSelector } from 'react-redux'
import { filterGenderHome, filterSpeciesHome, filterStatusHome} from '../../redux/actions/actions'
import style from './Selectores.module.css'

const Selectores = () =>{

    const {copyHomeCharacters} = useSelector(state=>state)

    const dispatch = useDispatch()

    const handlerGender = (event) =>{
        const value = event.target.value
        dispatch(filterGenderHome(value))
    }
    const handlerSpecies = (event) =>{
        const value = event.target.value
        dispatch(filterSpeciesHome(value))
    }
    const handlerStatus = (event) =>{
        const value = event.target.value
        dispatch(filterStatusHome(value))
    }
    return (
        <div className={style.container}>
            <select className={style.selector} onChange={handlerGender}>
                <option value="Gender" selected disabled>Gender</option>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknonw">Unknonw</option>
                <option value="Genderless">Genderless</option>
            </select>

            <select className={style.selector} onChange={handlerSpecies}>
                <option value="Species" selected disabled>Species</option>
                <option value="All">All</option>
                <option value="Human">Human</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Animal">Animal</option>
                <option value="Alien">Alien</option>
                <option value="Robot">Robot</option>
                <option value="unknown">unknown</option>
                <option value="Mythological Creature">Mythological Creature</option>
            </select>

            <select className={style.selector} onChange={handlerStatus}>
                <option value="Status" selected disabled>Status</option>
                <option value="All">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
            </select>


        </div>
    )
}

export default Selectores