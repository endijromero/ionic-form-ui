import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // toggle = document.querySelector('#themeToggle');

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    // this.toggle.addEventListener('ionChange', (ev: any) => {
    //   document.body.classList.toggle('dark', ev.detail.checked);
    // });

    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addListener((e) => this.checkToggle(e.matches));
    // this.checkToggle(prefersDark.matches);


  }

  //   // Query for the toggle that is used to change between themes

  // // Listen for the toggle check/uncheck to toggle the dark class on the <body>
  // toggle.addEventListener('ionChange', (ev) => {
  //   document.body.classList.toggle('dark', ev.detail.checked);
  // });

  // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // // Listen for changes to the prefers-color-scheme media query
  // prefersDark.addListener((e) => checkToggle(e.matches));

  // // Called when the app loads
  // function loadApp() {
  //   checkToggle(prefersDark.matches);
  // }

  // Called by the media query to check/uncheck the toggle
  // checkToggle(shouldCheck) {
  //   this.toggle.checked = shouldCheck;
  // }

  toggleTheme(event) {
    console.log("event", JSON.stringify(event));
    console.log("event_complete", event);

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log("prefersDark", prefersDark);

    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
      // Use matchMedia to check the user preference

      // this.toggleDarkTheme(prefersDark.matches);

      // Listen for changes to the prefers-color-scheme media query
      // prefersDark.addListener((mediaQuery) => this.(mediaQuery.matches));

      // Add or remove the "dark" class based on if the media query matches
    } else {
      document.body.setAttribute('color-theme', 'light');

    }
  }

  // toggleDarkTheme(shouldAdd) {
  //   document.body.classList.toggle('dark', shouldAdd);
  // }


}
