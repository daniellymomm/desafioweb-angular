import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { AppComponent } from "../../app/app.component";

@Component({
  selector: "app-botao",
  templateUrl: "./botao.component.html",
  styleUrls: ["./botao.component.sass"],
})
export class BotaoComponent {
  @Input() flags!: { name: string; flag: string; metodo: () => void };
  @Output() 
  language = new EventEmitter();

  handleClick(): void {
    this.language.emit(this.flags.name);
    }
}