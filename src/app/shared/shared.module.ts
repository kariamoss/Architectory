import { LightAmbientService } from './services/light-ambient.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    TodoListComponent,
  ],
  exports: [
    TodoListComponent,
  ]
})
export class SharedModule { }
