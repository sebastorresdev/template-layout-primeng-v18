import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { Toolbar } from 'primeng/toolbar';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    Button,
    Toolbar,
    IconField,
    InputIcon,
    Menu,
    Badge,
    Avatar,
    InputText,
],
  templateUrl: './app.topbar.component.html',
})
export class TopbarComponent {

  _layoutService = inject(LayoutService);

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
        {
          label: 'Settings',
          icon: 'pi pi-cog',
        },
        {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
        },
        {
          separator:true
        }
      ];
  }

}
