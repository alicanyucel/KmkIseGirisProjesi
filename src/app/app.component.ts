import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Product } from './models/product.model';
import { MyService } from './services/my.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kmkCase';
  public product:Product[]=[];
  constructor(
    private _service:MyService
  ){}
  ngOnInit(): void {
    this.getList();
  }
  // Ürünleri listele
  getList() {
    this._service.get((res) => this.product = res)
  }
  drop(event: CdkDragDrop<{title: string;image: string}[]>) {
    moveItemInArray(this.product, event.previousIndex, event.currentIndex);
  }
}
