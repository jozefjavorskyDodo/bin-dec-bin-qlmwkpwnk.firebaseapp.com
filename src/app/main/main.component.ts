

import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { bin_char_dec } from "../redux/actions_file";


interface UpperCase {
  value: string;
  viewValue: string;
};


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {
  isSlideToggleChecked: boolean = true;
  HTMLbody: any = document.getElementById("html-body");
  uppercases: UpperCase[] = [
    { value: '', viewValue: '' },
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B' },
    { value: 'C', viewValue: 'C' },
    { value: 'D', viewValue: 'D' },
    { value: 'E', viewValue: 'E' },
    { value: 'F', viewValue: 'F' },
    { value: 'G', viewValue: 'G' },
    { value: 'H', viewValue: 'H' },
    { value: 'I', viewValue: 'I' },
    { value: 'J', viewValue: 'J' },
    { value: 'K', viewValue: 'K' },
    { value: 'L', viewValue: 'L' },
    { value: 'M', viewValue: 'M' },
    { value: 'N', viewValue: 'N' },
    { value: 'O', viewValue: 'O' },
    { value: 'P', viewValue: 'P' },
    { value: 'Q', viewValue: 'Q' },
    { value: 'R', viewValue: 'R' },
    { value: 'S', viewValue: 'S' },
    { value: 'T', viewValue: 'T' },
    { value: 'U', viewValue: 'U' },
    { value: 'V', viewValue: 'V' },
    { value: 'W', viewValue: 'W' },
    { value: 'X', viewValue: 'X' },
    { value: 'Y', viewValue: 'Y' },
    { value: 'Z', viewValue: 'Z' }
  ];
  output$: Observable<string>;

  boolean_HTML_body_bgColor(): void {
    if (this.isSlideToggleChecked === Boolean(true)) {
      this.HTMLbody.style.backgroundColor = "rgb(61, 0, 122)";
    } else {
      this.HTMLbody.style.backgroundColor = "rgb(0, 0, 0)";
    };
  };

  selectedUpperCase = this.uppercases[0].value;

  selectUpperCase(event: Event) {
    this.selectedUpperCase = (event.target as HTMLSelectElement).value;
  };

  constructor(private store: Store<{ output: string }>) {
    this.output$ = store.select("output");
  };

  bin_char_dec() {
    this.store.dispatch(bin_char_dec());
  };
};
