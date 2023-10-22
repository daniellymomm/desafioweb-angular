import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  
  language = [
    {
      en: "Hello, my name is Danielly Momm and I am a Front-End Developer, Technologies that I have experience:",
      pt: "Olá, meu nome é Danielly Momm e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
      fr: "Bonjour, je m'appelle Danielly Momm et je suis développeur Front-End, Technologies j'ai de l'expérience:",
    },
  ];

  
  flags = [
    {
      name: "Português",
      flag: "../../../assets/images/brazil-flag.png",
      metodo: () => (this.selected = this.language[0].pt),
    },
    {
      name: "Francês",
      flag: "../../../assets/images/french-flag.png",
      metodo: () => (this.selected = this.language[0].fr),
    },
    {
      name: "Inglês",
      flag: "../../../assets/images/united-states-flag.png",
      metodo: () => (this.selected = this.language[0].en),
    },
  ];

  tecnologias = [
    "• Javascript",
    "• React",
    "• Vue js",
    "• Tailwind CSS",
    "• Styled Components",
    "• Saas",
    "• Node",
    "• TypeScript",
    "• Angular",
    "• Java",
  ];

  
  selected = this.language[0].pt;

  
  onChangeLanguage($event: string) {
    if ($event == "Português") {
      this.flags[0].metodo();
    } else if ($event == "Francês") {
      this.flags[1].metodo();
    } else {
      this.flags[2].metodo();
    }
  }
}