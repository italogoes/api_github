import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState('');

    function clickEnter(e: KeyboardEvent){
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

    return (
        <div>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seu melhores repositórios</p>
            <div>
                <input
                    type="text"
                    placeholder='Digite o nome de usuário'
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={clickEnter}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search