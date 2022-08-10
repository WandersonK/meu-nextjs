import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Lucas é feio</h1>
            <p>Informe no contador abaixo o quanto ele é feio</p>
            <Contador />
        </div>
    )

}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home