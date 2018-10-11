import { TodoListComponent } from './../../components/todo-list/todo-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchitectPage } from './architect';

@NgModule({
  declarations: [
    ArchitectPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchitectPage),
    TodoListComponent
  ],
})
export class ArchitectPageModule {}
