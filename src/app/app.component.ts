import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Alcohol {
  id: number;
  name: string;
  alcPer: number;
  pic: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading: boolean = true;
  displayNone: boolean = false;
  images = [
    'assets/pics/key.vision.new.5.png',
    'assets/pics/key.vision.new.2.png',
    'assets/pics/key.vision.new.3.png',
    'assets/pics/key.vision.new.4.png',
    'assets/pics/key.vision.new.1.png',
  ];
  selectedImage: number = 0;
  alcohols: Array<Alcohol> = [
    { id: 1, name: 'бира', alcPer: 4, pic: '../assets/pics/beer.png' },
    { id: 2, name: 'водка', alcPer: 40, pic: '../assets/pics/vodka.png' },
    { id: 3, name: 'уиски', alcPer: 40, pic: '../assets/pics/whiskey.png' },
    { id: 4, name: 'вино', alcPer: 12, pic: '../assets/pics/wine.png' },
    { id: 5, name: 'джин', alcPer: 40, pic: '../assets/pics/gin.png' },
    { id: 6, name: 'други', alcPer: 40, pic: '../assets/pics/other.png' },
  ];
  selectedAlcohol: Alcohol | null;
  selectedAmount: number | null;
  showResult: boolean = false;
  otherAlcPer: number | null;
  showEnterPercentage: boolean = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    setTimeout(() => (this.isLoading = false), 1000);
    setTimeout(() => (this.displayNone = true), 1500);
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
    this.otherAlcPer = null;
  }

  selectAmount() {
    if (this.selectedAlcohol && this.selectedAlcohol.id === 6) {
      this.showEnterPercentage = true;
    } else {
      this.showResult = true;
    }
  }

  enterPercentage() {
    (this.selectedAlcohol as Alcohol).alcPer = this.otherAlcPer as number;
    this.showEnterPercentage = false;
    this.showResult = true;
  }

  openModal(photoModal: TemplateRef<any>, photoIndex: number) {
    this.selectedImage = photoIndex;
    this.modalService.open(photoModal, {
      centered: true,
      size: 'xl',
    });
  }
}
