import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('1. should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`2. should have as title 'angular-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-project');
  });

  it('3. should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular Devops');
  });

  it('3. Should give me the addition of the Numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.componentInstance.add(10,20)).toBe(30);
  });

  it('3. Should give me the addition of the Numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.componentInstance.sub(10,20)).toBe(-10);
  });


});
