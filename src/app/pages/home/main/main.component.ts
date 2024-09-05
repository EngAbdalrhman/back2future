import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.initSidebarToggle();
  }

  initSidebarToggle(): void {
    const sidebarDropdownLinks = this.el.nativeElement.querySelectorAll(
      '.sidebar-dropdown > a'
    );
    const closeSidebarButton =
      this.el.nativeElement.querySelector('#close-sidebar');
    const showSidebarButton =
      this.el.nativeElement.querySelector('#show-sidebar');

    sidebarDropdownLinks.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', () => {
        const parent = link.parentElement;
        const submenu = link.nextElementSibling;

        if (parent?.classList.contains('active')) {
          this.closeAllSubmenus();
          parent.classList.remove('active');
        } else {
          this.closeAllSubmenus();
          if (submenu) {
            this.renderer.setStyle(submenu, 'display', 'block');
          }
          parent?.classList.add('active');
        }
      });
    });

    this.renderer.listen(closeSidebarButton, 'click', () => {
      const pageWrapper = this.el.nativeElement.querySelector('.page-wrapper');
      this.renderer.removeClass(pageWrapper, 'toggled');
    });

    this.renderer.listen(showSidebarButton, 'click', () => {
      const pageWrapper = this.el.nativeElement.querySelector('.page-wrapper');
      this.renderer.addClass(pageWrapper, 'toggled');
    });
  }

  closeAllSubmenus(): void {
    const submenus = this.el.nativeElement.querySelectorAll('.sidebar-submenu');
    const activeDropdowns = this.el.nativeElement.querySelectorAll(
      '.sidebar-dropdown.active'
    );

    submenus.forEach((submenu: HTMLElement) => {
      this.renderer.setStyle(submenu, 'display', 'none');
    });

    activeDropdowns.forEach((dropdown: HTMLElement) => {
      dropdown.classList.remove('active');
    });
  }
}
