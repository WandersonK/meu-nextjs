import Link from 'next/link';

function Sobre() {
    return (
        <div style={{textAlign: 'center',}}>
            <h1 >Sobre</h1>
            <p>Com a ajuda do <a href="https://www.youtube.com/c/FilipeDeschamps" target="_blank">Felipe Deschamps</a> estou aprendendo e desenvolvendo esse projeto</p>

            <div style={{marginTop: 50}}>
                <Link href="/">
                    <a>Acessar página Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Sobre