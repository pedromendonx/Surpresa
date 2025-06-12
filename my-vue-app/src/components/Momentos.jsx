import MomentoImg from '../assets/img/momentos.jpg';
import { useNavigate } from 'react-router-dom';

function Momentos() {

      const navigate = useNavigate();

  const handleButtonClick = () => {
    window.scrollTo(0, 0); 
    setTimeout(() => {
        navigate('/Game'); 
    }, 20); 
};
    return (
        <section className='mt-5'>
            <div className="row mt-4">
                <div className="col-md-6 col-12 ">
                    <img src={MomentoImg} className='img-fluid rounded shadow' alt="..." />
                    <div className="card-body">
                        <p className="card-text mb-4 mt-2">Nossos olhos se encontram</p>
                    </div>
                </div>
                <div className='col-md-6 col-12 mb-3 pt-3'>
                    <h1>Amores</h1>
                    <p>Passei tanto tempo ao seu lado que lembranças se tornaram repentinas, transcrevo esses sentimentos a partir de um olhar não tão maduro ou responsável, faço como uma criança apaixonada, como alguém que enxergou amor pela primeira vez. Assim como disse Tim Bernardes, ao seu lado, sonho de olhos abertos. É como beber um café quente logo após despertar, naquele frio das 5:30 da manhã, onde tudo parece mais romantizado. Até esqueço que é segunda e tenho que trabalhar. Ainda que eu escreva grandes poemas, trazer à tona toda a qualidade de sentimento que sinto por ti é um trabalho árduo. Porém, sentir não é, sentir ao seu lado é simples, é fogoso. Me sinto como um avião preste a decolar, ao teu lado sinto-me a ir com tudo. Sabe o mais belo nisso tudo? É que é só o começo.</p>
                </div>
            </div>

            <div className='gap-2 col-12'>
                <button onClick={handleButtonClick} type="button" class="btn btn-dark">Continua...</button>
            </div>
        </section>



    );
}

export default Momentos;