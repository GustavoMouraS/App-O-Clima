import "./Pesquisa.css"
import { FaMagnifyingGlass } from "react-icons/fa6";

function Pesquisa(){
    return(
        <div className="pesquisa">
        <input type="text" placeholder="Digite o nome da cidade" />
        <button type="submit"><FaMagnifyingGlass /></button>
        </div>
    )
}

export default Pesquisa