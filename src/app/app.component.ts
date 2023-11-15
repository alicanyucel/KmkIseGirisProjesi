import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Product } from './models/product.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kmkCase';
  product:Product[]=[];
  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.product, event.previousIndex, event.currentIndex);
  }
}
