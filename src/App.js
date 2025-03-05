import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css'; // Adicionamos o arquivo CSS

function App() {
  const [pixCopied, setPixCopied] = useState(false);

  const handleCopy = () => {
    setPixCopied(true);
    setTimeout(() => {
      setPixCopied(false);
    }, 2000);
  };

  return (
    <div className="container">
      {/* Imagem Inicial */}
      <div className="image-container">
        <img src="inicial.png" alt="Imagem Inicial" className="image" />
      </div>

      {/* Texto em Negrito */}
      <div className="text-center">
        <p className="bold-text">
          Ela não tem coragem de falar, mas pergunta com os olhos: “papai, por que a dor não vai embora?”
        </p>
      </div>

      {/* Imagem Yasmim */}
      <div className="image-container">
        <img src="yasmim.png" alt="Yasmim" className="image" />
      </div>

      {/* Botão Ajudar Agora */}
      <div className="button-container">
        <a href="#fim">
          <button className="button">Ajudar Agora</button>
        </a>
      </div>

      {/* Texto Descrição */}
      <div className="text">
        <p>
          Meu nome é Ronaldo Placido, e sou pai de três meninas lindas: a Lívia, a Ana e minha caçula, a Yasmim.
          <br /><br />
          Desde que minha esposa faleceu em 2024, eu tento ser tudo pra elas: pai, mãe, amigo, herói.
          <br /><br />
          Quando você é pai, parece que o mundo gira em torno dos seus filhos, e pra mim é exatamente isso.
          <br /><br />
          Mas hoje… hoje eu me sinto um nada.
          <br /><br />
          A Yasmim, meu pedacinho de céu, foi diagnosticada com um tumor raro chamado Rabdomiossarcoma.
          <br /><br />
          É um câncer agressivo que aos poucos vem tirando o brilho da minha filha, uma criança que foi sempre alegre, sorridente e amorosa.
          <br /><br />
          Agora, ela passa os dias sentindo uma dor que ela chama de "fogo dentro da barriga".
          <br /><br />
          É como se a vida tivesse jogado gasolina dentro dela e colocado fogo.
          <br /><br />
          No Natal, enquanto as outras crianças rasgavam os embrulhos dos presentes, a Yasmim só queria ficar deitada.
          <br /><br />
          "Papai, dói muito", ela não aguentou e me disse.
        </p>
      </div>

      {/* Imagem Laudo */}
      <div className="image-container">
        <img src="laudo.png" alt="Laudo" className="image" />
      </div>

      {/* Botão Ajudar Agora */}
      <div className="button-container">
        <a href="#fim">
          <button className="button">Ajudar Agora</button>
        </a>
      </div>

      {/* Texto Descrição Adicional */}
      <div className="text">
        <p>
          Eu trabalhava em um armazém, subia e descia escada, carregava várias caixas pesadas, sempre dei duro porque é era o que eu sabia fazer.
          <br /><br />
          Só que infelizmente, fui demitido do trabalho, pois hoje meu tempo é somente para minhas filhas.
          <br /><br />
          Cuidar de 3 filhas é mais difícil hoje em dia, principalmente na atual situação do país.
          <br /><br />
          Eu amo ela, e nunca vou me arrepender de ter tido as minhas filhas.
          <br /><br />
          Só que infelizmente, minha esposa morreu.
          <br /><br />
          E agora um câncer apareceu na vida da minha filha.
          <br /><br />
          Foi sem aviso, de surpresa e sem a menor piedade com ela, apenas uma criança inocente.
          <br /><br />
          Quando o médico me disse que o tratamento da Yasmim não seria coberto pelo SUS, eu tive vontade de gritar de raiva.
          <br /><br />
          Eles não tem piedade nem mesmo de uma criança.
          <br /><br />
          O tratamento envolve uma terapia de ponta que não está disponível no SUS.
          <br /><br />
          Sabe o que é mais cruel?
          <br /><br />
          Ver o olhar de confiança da Yasmim, tendo certeza de que eu vou ser capaz de curar ela.
          <br /><br />
          O sarcoma está em estágio 3.
          <br /><br />
          Isso quer dizer que tumor é maior do que 5 cm, mas Graças ao bom Deus ainda não há metástase (quando o câncer se espalha pelo corpo).
          <br /><br />
          Se o tratamento for iniciado rápido, os médicos disseram que há chances de cura de mais de 70%.
          <br /><br />
          Mas a cada minuto que passa, a expectativa dela diminui.
          <br /><br />
          Eu irei até o fim pela minha filha, nem que eu tenha que morrer tentando.
          <br /><br />
          Infelizmente o tempo dela está acabando.
          <br /><br />
          Enquanto isso, os médicos disseram que se a gente não começar o tratamento em no máximo 2 meses, o tumor pode progredir para estágio 4 e depois metástase.
          <br /><br />
          A prioridade agora é agir rápido e evitar a progressão de estágio.
          <br /><br />
          Ela precisa fazer um tratamento chamado “Terapia VAC”.
          <br /><br />
          Essa terapia envolve 3 medicamentos, Vincristina, Actinomicina-D e Ciclofosfamida.
        </p>
      </div>

      {/* Imagem Jesus */}
      <div className="image-container">
        <img src="jesus.png" alt="Jesus" className="image" />
      </div>

      {/* Texto de Apelo */}
      <div className="text-center">
        <p>Deus é Amor.</p>
        <p>
          Esse amor é justamente o que falta nos dias de hoje.
          <br /><br />
          Um simples gesto de amor como esse torna você grande aos olhos de Deus.
          <br /><br />
          Clique agora abaixo e faça a sua doação.
          <br /><br />
          Não importa o valor, mas sim o quanto seu coração diz que você pode.
          <br /><br />
          Quanto custa uma saída no final de semana?
          <br /><br />
          Mais de R$100 na maioria dos casos.
          <br /><br />
          Se cada pessoa doar 100 reais ou mais, minha filha vai viver.
          <br /><br />
          Ela precisa, é questão de vida ou morte.
          <br /><br />
          As coisas não acontecem por acaso, se Deus te colocou aqui, é porque ele conhece o seu coração.
          <br /><br />
          Então clique abaixo e faça a sua doação.
        </p>
      </div>

      {/* Texto de Escolha do Valor */}
      <div className="text-center">
        <p>Clique no valor que deseja doar.</p>
      </div>

      {/* Botoes de Valor */}
      <div className="button-group">
        {[30, 50, 70, 100, 160, 200, 250, 300, 350, 400, 500, 700, 900, 1000].map(value => (
          <CopyToClipboard
            key={value}
            text="jrpedrosorodrigo@gmail.com"
            onCopy={handleCopy}
          >
            <button className="button">
              R${value},00
            </button>
          </CopyToClipboard>
        ))}
      </div>

      {/* Botão Final */}
      <div className="button-container">
        <button className="button">SUA AJUDA IMPORTA MUITO</button>
        <button className="button">AJUDE AGORA</button>
      </div>

      {/* Beneficiário */}
      <div className="text-center">
        <p><strong>Beneficiário: Jeferson Rodrigues (Pai)</strong></p>
      </div>

      {/* Caixa do Pix */}
      <div className="text-center">
        <p>jrpedrosorodrigo@gmail.com</p>
        <CopyToClipboard text="jrpedrosorodrigo@gmail.com" onCopy={handleCopy}>
          <button className="button">Copiar Pix</button>
        </CopyToClipboard>
        {pixCopied && <p className="pix-copied">Pix Copiado</p>}
      </div>

      {/* Texto Final */}
      <div className="text-center">
        <p>Deus é testemunha do seu sacrifício, e você será recompensado em 7 vezes mais por isso.</p>
        <p>Jesus se sacrificou por nós.</p>
        <p>
          Agora, você decide se a Yasmim vive ou não.
          <br /><br />
          Ao escolher clicar abaixo e fazer a sua doação, você decide pela vida da minha filha.
        </p>
      </div>

      {/* Fim da Página */}
      <div id="fim"></div>
    </div>
  );
}

export default App;
