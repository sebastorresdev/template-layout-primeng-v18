import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';

// PrimeNG
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { SplitButton } from 'primeng/splitbutton';
import { StyleClass } from 'primeng/styleclass';
import { Toolbar } from 'primeng/toolbar';
import { Menu } from 'primeng/menu';
import { Badge } from 'primeng/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dulcemania-app';

}
