import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /* Property to track whether the mouse is hovering over something. */
  hover = false;

  /* Function to toggle the value of 'hover' property. */
  isHover() {
    // Toggles the 'hover' property to its opposite value.
    this.hover = !this.hover;
  }

}
