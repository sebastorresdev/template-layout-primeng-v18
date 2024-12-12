import { Component } from '@angular/core';
import { TopbarComponent } from "./app.topbar.component";
import { SidebarComponent } from "./app.sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, RouterModule],
  templateUrl: './app.layout.component.html',
})
export class LayoutComponent {

}
