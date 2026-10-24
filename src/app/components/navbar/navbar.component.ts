import { Component, HostListener, OnInit } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // ==========================================
  // STATE
  // ==========================================

  menuOpen = false;

  activeSection = 'home';

  isDarkMode = true;

  // ==========================================
  // NAVIGATION ITEMS
  // ==========================================

  navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '#home',
    },

    {
      id: 'about',
      label: 'About',
      href: '#about',
    },

    {
      id: 'expertise',
      label: 'Expertise',
      href: '#expertise',
    },

    {
      id: 'experience',
      label: 'Experience',
      href: '#experience',
    },

    {
      id: 'projects',
      label: 'Projects',
      href: '#projects',
    },

    {
      id: 'achievements',
      label: 'Achievements',
      href: '#achievements',
    },

    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
    },
  ];

  // ==========================================
  // INITIALIZATION
  // ==========================================

  ngOnInit(): void {
    this.setInitialTheme();
    this.updateActiveSection();
  }

  // ==========================================
  // MOBILE MENU
  // ==========================================

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  // ==========================================
  // NAVIGATION
  // ==========================================

  navigate(section: string, event?: Event): void {
    // Prevent browser jumping directly
    // to the anchor position.

    if (event) {
      event.preventDefault();
    }

    this.activeSection = section;

    this.closeMenu();

    const element = document.getElementById(section);

    if (!element) {
      return;
    }

    // Account for fixed navbar

    const navbarHeight = 78;

    const elementPosition = element.getBoundingClientRect().top;

    const offsetPosition = elementPosition + window.scrollY - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  scrollToSection(section: string, event?: Event): void {
    this.navigate(section, event);
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  // ==========================================
  // DARK / LIGHT THEME
  // ==========================================

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    this.applyTheme();
  }

  private setInitialTheme(): void {
    // Portfolio starts in dark mode

    this.isDarkMode = true;

    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.classList.toggle('light-theme', !this.isDarkMode);
  }

  // ==========================================
  // ACTIVE SECTION WHILE SCROLLING
  // ==========================================

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  updateActiveSection(): void {
    const scrollPosition = window.scrollY + 180;

    let currentSection = 'home';

    for (const section of this.navItems) {
      const element = document.getElementById(section.id);

      if (!element) {
        continue;
      }

      const top = element.offsetTop;

      if (scrollPosition >= top) {
        currentSection = section.id;
      }
    }

    this.activeSection = currentSection;
  }

  // ==========================================
  // CLOSE MOBILE MENU ON RESIZE
  // ==========================================

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 850) {
      this.closeMenu();
    }
  }

  // ==========================================
  // ESCAPE KEY
  // ==========================================

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
