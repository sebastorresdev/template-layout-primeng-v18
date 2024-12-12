import { Component, inject, ViewChild } from '@angular/core';
import { MenuComponent } from "./app.menu.component";
import { Drawer } from 'primeng/drawer';
import { Button } from 'primeng/button';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuComponent, Button, Drawer],
  templateUrl: './app.sidebar.component.html',
})
export class SidebarComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  _layoutService = inject(LayoutService);
  closeCallback(e:any): void {
    this.drawerRef.close(e);
}
}
