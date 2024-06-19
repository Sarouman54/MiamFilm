import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
<<<<<<< Updated upstream
export class AppComponent {
<<<<<<< HEAD:miamfilm/src/app/app.component.ts
  title = 'miamfilm';
=======
export class AppComponent implements OnInit {
  title = 'miamfilm_front';

  ngOnInit(): void {
    initFlowbite();
  }
  
>>>>>>> Stashed changes
}
=======
  title = 'miamfilm_front';
}
>>>>>>> release:miamfilm_front/src/app/app.component.ts
