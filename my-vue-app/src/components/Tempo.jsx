import React, { useEffect, useState } from 'react';
import '../assets/style/Tempo.css';

function Tempo() {
  const [tempo, setTempo] = useState({ anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const dataInicial = new Date("2022-06-13T00:00:00");

    const atualizarTempo = () => {
      const agora = new Date();
      const diferenca = agora - dataInicial;

      const segundosTotais = Math.floor(diferenca / 1000);
      const minutos = Math.floor(segundosTotais / 60) % 60;
      const horas = Math.floor(segundosTotais / 3600) % 24;
      const dias = Math.floor(segundosTotais / 86400) % 30;
      const meses = Math.floor(segundosTotais / (86400 * 30)) % 12;
      const anos = Math.floor(segundosTotais / (86400 * 30 * 12));
      const segundos = segundosTotais % 60;

      setTempo({ anos, meses, dias, horas, minutos, segundos });
    };

    const intervalo = setInterval(atualizarTempo, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="tempo-container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="tempo-titulo">Nosso Amor em Números</h1>
      <div className="tempo-box mt-4 p-4">
        <p className="tempo-item"><strong>{tempo.anos}</strong> anos</p>
        <p className="tempo-item"><strong>{tempo.meses}</strong> meses</p>
        <p className="tempo-item"><strong>{tempo.dias}</strong> dias</p>
        <p className="tempo-item"><strong>{tempo.horas}</strong> horas</p>
        <p className="tempo-item"><strong>{tempo.minutos}</strong> minutos</p>
        <p className="tempo-item"><strong>{tempo.segundos}</strong> segundos</p>
      </div>
    </div>
  );
}

export default Tempo;
