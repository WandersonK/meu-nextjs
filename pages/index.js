import { useState } from 'react';
import Link from 'next/link';

function Home() {
    return (
        <div style={{textAlign: 'center',}}>
            <h1>Minha Home</h1>
            <p>Altere o Contador abaixo</p>
            <Contador />

            <div style={{marginTop: 50}}>
                <Link href="/sobre">
                    <a>Acessar página Sobre</a>
                </Link>
            </div>
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