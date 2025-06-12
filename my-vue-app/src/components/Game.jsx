import { useState, useEffect } from 'react';
import Album from '../assets/img/capa_album.webp';
import { Link } from "react-router-dom";

const questions = [
    {
        question: "Qual foi o dia que eu te dei meu primeiro presente?",
        options: ["12/06/2022", "13/06/2022", "22/12/2022", "20/04/2022"],
        answer: 1
    },
    {
        question: "Onde foi nosso primeiro beijo?",
        options: ["No ônibus", "Na escola", "Na sua casa", "Em frente a escola"],
        answer: 0
    },
    {
        question: "O que falavra na minha primeira cartinha para você?",
        options: ["Sobre meus medos e vontades", "Sobre preconceitos", "A vontade que eu tinha de te comer", "nada, nunca fez"],
        answer: 0
    },
    {
        question: "Onde foi nosso primeiro encontro?",
        options: ["Na cantina da escola", "No bosque da escola", "Na sua casa", "No favorito/pista nova"],
        answer: 3
    },
    {
        question: "Quando foi nossa primeira vez?",
        options: ["12/08", "14/08", "11/08", "18/08"],
        answer: 2
    },
    {
        question: "Quem mandou a primeira mensagem no whatsapp?",
        options: ["Pedro", "não teve", "foi ligação", "Rebeca"],
        answer: 3
    },
    {
        question: "Qual foi o nosso primeiro amigo a ser citado nas nossas conversas",
        options: ["Vitor", "João", "Angelo", "Isa"],
        answer: 2
    },
    {
        question: "Em que lugar eu disse a você ter percebido gostar de ti",
        options: ["Na sala de aula", "No corredor da escola", "Na sua casa", "no ônibus"],
        answer: 1
    },
    {
        question: "Quem foi a primeira pessoa a se interessar em conversar",
        options: ["Rebeca", "Pedro", "Um amigo juntou", "ninguém"],
        answer: 0
    },
    {
        question: "Quem disse eu te amo primeiro?",
        options: ["Rebeca", "ninguém", "não teve", "Pedro"],
        answer: 3
    },
    {
        question: "Em qual lugar trocamos palavras pela primeira vez",
        options: ["No ônibus", "Na escola", "ao lado da matriz", "Em frente a escola"],
        answer: 2
    },
];

function Game() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        // Carrega pontuação anterior, se existir
        const savedScore = localStorage.getItem('quiz_score');
        if (savedScore) {
            console.log(`Pontuação anterior: ${savedScore}`);
        }
    }, []);

    const question = questions[currentQuestion];

    const handleOptionClick = (index) => {
        if (!isAnswered) {
            setSelectedOption(index);
            setIsAnswered(true);

            if (index === question.answer) {
                setScore((prev) => prev + 1);
            }
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setSelectedOption(null);
            setIsAnswered(false);
            setCurrentQuestion((prev) => prev + 1);
        } else {
            // Finaliza o quiz
            setQuizFinished(true);
            localStorage.setItem('quiz_score', score + (selectedOption === question.answer ? 1 : 0));
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setQuizFinished(false);
    };

    return (
        <main>
            <section className='m-0 p-0 container-fluid min-vh-100 position-relative'>
                <div className='container-fluid row mb-4 pt-4 pb-4 mt-4'>
                    <div className="image col-md-4 col-12 mb-4 mt-4">
                        <img src={Album} alt="capa_de_album" className='img-fluid rounded' />
                    </div>
                    <div className='col-md-8 col-12'>
                        <h1 className='mb-4'>Me escuta...</h1>
                        <p>
                            A música é uma das artes mais belas que existe, é nela que se encontram as palavras e suas melodias, beleza do cotidiano, desde o rock até o samba. Agora, pensa como é viver em uma eterna música… Uma trilha sonora que nos conecta e distrai. É assim que me sinto ao seu lado, é como cantar e ser cantado, ouvir e ser ouvido. A gente, sempre a gente.
                        </p>
                        <button className='btn btn-outline-primary mb-4 mt-4'> <a href="https://open.spotify.com/playlist/4S0Qgjlrghca8GZPZLnnBm" className='text-black text-decoration-none'> Ouça nossos momentos... </a></button>
                    </div>
                </div>
            </section>

            <section className='quiz container mb-5'>
                <h1 className='mb-4 pb-4'> Porém, você lembra deles? </h1>
                <div className='card shadow p-4'>

                    {!quizFinished ? (
                        <>
                            <h4 className='mb-3'>Pergunta {currentQuestion + 1} de {questions.length}</h4>
                            <h5 className='mb-4'>{question.question}</h5>
                            <div className='list-group'>
                                {question.options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`list-group-item list-group-item-action
                      ${selectedOption === index
                                                ? index === question.answer
                                                    ? 'list-group-item-success'
                                                    : 'list-group-item-danger'
                                                : ''}`}
                                        onClick={() => handleOptionClick(index)}
                                        disabled={isAnswered}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {isAnswered && (
                                <button className='btn btn-primary mt-4' onClick={handleNext}>
                                    {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima pergunta'}
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            <h3 className='text-success mb-4'>🎉 Quiz finalizado!</h3>
                            <p>Sua pontuação: <strong>{score} / {questions.length}</strong></p>
                            <button className='btn btn-outline-primary mt-3 col-12' onClick={handleRestart}>
                                Tentar novamente
                            </button>
                            <Link to="/tempo">
                                <button className="btn btn-outline-dark mt-3 col-12">
                                    Nosso Tempo Juntos
                                </button>
                            </Link>
                            <p className="text-muted mt-2">
                                Última pontuação salva: {localStorage.getItem('quiz_score')} pontos
                            </p>
                        </>
                    )}

                </div>
            </section>
        </main>
    );
}

export default Game;
