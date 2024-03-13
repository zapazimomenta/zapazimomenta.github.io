import { Component } from '@angular/core';

interface Alcohol {
  name: string;
  alcPer: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading: boolean = true;
  images = [
    'assets/pics/first.jpeg',
    'assets/pics/second.jpeg',
    'assets/pics/third.jpeg',
  ];
  alcohols: Array<Alcohol> = [
    { name: 'бира', alcPer: 4 },
    { name: 'водка', alcPer: 40 },
    { name: 'уиски', alcPer: 40 },
    { name: 'вино', alcPer: 12 },
    { name: 'джин', alcPer: 40 },
    { name: 'други', alcPer: 40 },
  ];
  selectedAlcohol: Alcohol | null;
  selectedAmount: number | null;
  showResult: boolean = false;

  ngOnInit() {
    setTimeout(() => (this.isLoading = false), 1000);
  }

  get result(): string {
    return (
      ((this.selectedAmount as number) *
        (this.selectedAlcohol as Alcohol).alcPer) /
      1000
    ).toFixed(2);
  }

  tryAgain() {
    this.selectedAlcohol = null;
    this.selectedAmount = null;
    this.showResult = false;
  }
}
