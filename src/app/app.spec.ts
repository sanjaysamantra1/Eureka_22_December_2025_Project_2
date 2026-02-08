import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {        // Test suite - Group Of test cases

  beforeAll(() => { // 1
    console.log('Before All...')
  })
  beforeEach(async () => {
    console.log('Before Each'); // N
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });
  afterEach(() => { // N
    console.log('After Each...')
  })

  afterAll(() => { // 1
    console.log('After All...')
  })

  it.skip('should create the app', () => {   // Test case
    console.log('It-1')
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
     console.log('It-2')
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Eureka_22_December_2025_Project_2');
  });

  it('should verify add method', () => {
     console.log('It-3')
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.add(10, 20)).toBe(30);
  })

  it('should verify add method', () => {
     console.log('It-4')
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.cars).toBeDefined();
    expect(app.cars.length).toBe(2);
    expect(app.cars).toEqual(['Tata', 'Honda']);
    expect(app.cars).toContain('Tata');
    expect(app.cars).toContain('Honda');
    expect(app.cars).not.toContain('Audi');
    app.addNewCar('Maruti');
    expect(app.cars).toBeDefined();
    expect(app.cars.length).toBe(3);
    expect(app.cars).toContain('Tata');
    expect(app.cars).toContain('Honda');
    expect(app.cars).toContain('Maruti');
    expect(app.cars).not.toContain('Audi');
  })

  it('should verify sumOfDigits', () => {
     console.log('It-5')
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.sumOfDigits(125)).toBe(8);
  })

});
