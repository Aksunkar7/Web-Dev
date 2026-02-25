import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // Проверь путь и имя класса

bootstrapApplication(AppComponent).catch((err) => console.error(err));