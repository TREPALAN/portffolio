let language = "ENG";

// English
const engIitle = "Full Stack Web Developer";
const engTechnologies = "Tecnologies";
const engCertificationTitle = "Certification";

const engInfo = `Full Stack Web Developer self taught. I am always looking for new
challenges and opportunities to grow as a developer, with a strong
passion for taking an idea and turning it into a reality through
coding. I have lot of love for learning in general not only in
programming. I have some projects on
<a target="_blank" href="https://github.com/TREPALAN">My GitHub</a>.
I'm also the owner of the site
<a target="_blank" href="https://english4learn.com"
  >English4Learn.com</a
>`;

// Portuguese
const ptIitle = "Desenvolvedor Full Stack";
const ptTechnologies = "Tecnologias";
const ptCertificationTitle = "Certificação";

const ptInfo = `Desenvolvedor Full Stack. estou sempre em busca de novos
desafios e oportunidades para me aprimorar como desenvolvedor com uma
 paixão por aprender em geral não apenas em programação amo transformar ideias em realidade através de programação. Tenho alguns projetos no
<a target="_blank" href="https://github.com/TREPALAN">Meu GitHub</a>.
Sou também o dono do site
<a target="_blank" href="https://english4learn.com"
  >English4Learn.com</a
>`;

function changeLanguage() {
  if (language === "ENG") {
    document.getElementById("title").innerHTML = ptIitle;
    document.getElementById("tecnologies").innerHTML = ptTechnologies;
    document.getElementById("certification").innerHTML = ptCertificationTitle;
    document.getElementById("language").innerHTML = "PT";
    document.getElementById("infoText").innerHTML = ptInfo;
    language = "PT";
  } else {
    document.getElementById("title").innerHTML = engIitle;
    document.getElementById("tecnologies").innerHTML = engTechnologies;
    document.getElementById("certification").innerHTML = engCertificationTitle;
    document.getElementById("language").innerHTML = "ENG";
    document.getElementById("infoText").innerHTML = engInfo;
    language = "ENG";
  }
}

window.onload = function () {
  document.getElementById("title").innerHTML = engIitle;
  document.getElementById("tecnologies").innerHTML = engTechnologies;
  document.getElementById("certification").innerHTML = engCertificationTitle;
  document.getElementById("language").innerHTML = "ENG";
  document.getElementById("infoText").innerHTML = engInfo;
  language = "ENG";
};
