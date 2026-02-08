import { MaterialDemo } from './components/material-demo/material-demo';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    MaterialDemo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Eureka_22_December_2025_Project_2');

  add(a: any, b: any) {
    return a + b;
  }

  cars = ['Tata', 'Honda'];
  addNewCar(newCar: string) {
    this.cars.push(newCar);
  }

  sumOfDigits(num: number) {
    let sum = 0;
    while (num != 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

}
