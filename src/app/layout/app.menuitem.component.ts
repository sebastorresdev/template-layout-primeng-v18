import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuStateService } from './services/menu.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LayoutService } from './services/layout.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.menuitem.component.html',
})
export class MenuitemComponent {

  active = false;

  // signal
  item = input.required<MenuItem>();
  index = input.required<number>();
  parentKey = input();
  key: string = "";

  // suscribciones
  menuSourceSubscription: Subscription |undefined;
  menuResetSubscription: Subscription | undefined;

  _layoutService = inject(LayoutService);
  _menuService = inject(MenuStateService)
  _router = inject(Router);

  constructor() {
    this.menuSourceSubscription = this._menuService.menuSource$.subscribe(value => {
        Promise.resolve(null).then(() => {
            if (value.routeEvent) {
                this.active = (value.key === this.key || value.key.startsWith(this.key + '-')) ? true : false;
            }
            else {
                if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
                    this.active = false;
                }
            }
        });
    });

    this.menuResetSubscription = this._menuService.resetSource$.subscribe(() => {
        this.active = false;
    });


    this._router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(params => {
        if (this.item().routerLink) {
          this.updateActiveStateFromRoute();
        }
    });

  }

  ngOnInit() {
    this.key = this.parentKey() ? this.parentKey() + '-' + this.index() : String(this.index);

    if (this.item().routerLink) {
        this.updateActiveStateFromRoute();
    }

  }

  updateActiveStateFromRoute() {
    let activeRoute = this._router.isActive(this.item().routerLink[0], { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });
    if (activeRoute) {
      this._menuService.onMenuStateChange({ key: this.key, routeEvent: true });
    }
  }


  itemClick(event: Event) {
    // avoid processing disabled items
    if (this.item().disabled) {
      event.preventDefault();
      return;
    }

    // execute command
    const command = this.item()?.command;
    if (command) {
      command({ originalEvent: event, item: this.item() });
    }

    // toggle active state
    if (this.item().items) {
        this.active = !this.active;
    }

    this._menuService.onMenuStateChange({ key: this.key });

    if(this.item().routerLink) {
      this._layoutService.toggleDrawer();
    }
  }

  ngOnDestroy() {
    if (this.menuSourceSubscription) {
        this.menuSourceSubscription.unsubscribe();
    }

    if (this.menuResetSubscription) {
        this.menuResetSubscription.unsubscribe();
    }
  }

}
