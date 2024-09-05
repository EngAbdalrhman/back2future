import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Router } from '@angular/router';
import { LoginService } from '../../common/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  // routerLinkActive:'active' for each a
  @ViewChild('a') a!: ElementRef;
  items: MenuItem[] | undefined;
  constructor(public loginService: LoginService, private _route: Router) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home/main',
        // routerLinkActiveOptions: '{exact:false}',
        // routerLinkActive: 'active',
      },
      {
        label: 'FlowChart',
        icon: 'pi pi-star',
        routerLink: 'home/designer',
        // routerLinkActiveOptions: '{exact:true}',
        // routerLinkActive: 'active',
      },
      {
        label: 'About',
        icon: 'pi pi-bitcoin',
        routerLink: 'home/about',
        // routerLinkActiveOptions: '{exact:true}',
        // routerLinkActive: 'active',
      },
    ];

    // this.a.nativeElement.attr.routerLinkActive = 'active';
    // document
  }
  logout($event: MouseEvent) {
    $event?.preventDefault();
    this.loginService.logOut();
    this._route.navigate(['/login']);
  }
}
