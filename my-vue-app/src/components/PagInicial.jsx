import '../assets/style/background.css';

function PagInicial() {
    return (
        <main>
            <section className='container-fluid row m-0 p-0 container-fluid min-vh-100 position-relative'>
                <div className="container pagInicial">
                    <div >
                        <div >
                            <div className='col-md-5 d-flex justify-content-center align-items-center flex-column mx-auto py-5 position-relative z-2 mb-4 pb-4' id="background">
                                <div className="">
                                    <h1 className='text-center text-shadow display-4 mb-3 mt-3'>Surpresa?</h1>
                                    <p className='text-center text-shadow fs-5 pt-3 pb-3'>
                                        Às vezes eu me pego pensando sobre o quão rápido os momentos passam, nossa vida se construiu em torno de muitos momentos, nós soubemos aproveitar eles ao máximo possível, mas será que lembramos deles como deveríamos? Ou é tolice demais pensar no passado quando deveríamos estar aproveitando o presente? Não sei, mas podemos descobrir. Vamos relembrar nossos momentos…
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>

    );
}

export default PagInicial;