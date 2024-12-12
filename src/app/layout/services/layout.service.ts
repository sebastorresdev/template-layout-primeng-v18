import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private isOpen = signal(false);

  get isOpen$() {
    return this.isOpen;
  }

  toggleDrawer(): void {
    this.isOpen.update((value) => !value);
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    console.log(element);
    element?.classList.toggle('dark');
  }
}
