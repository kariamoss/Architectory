import { TodoService } from './../../services/todosService';
import { HtmlUtilsService } from './../../services/htmlUtils';
import { Component } from '@angular/core';
import { ItemSliding, Item } from 'ionic-angular';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.html'
})
export class TodoListComponent {

  activeItemSliding: ItemSliding = null;

  todos: Todo[] = this.todoService.getTodos();

  constructor(private htmlUtilsService: HtmlUtilsService, private todoService: TodoService) {
  }

  addThing() {
    this.todoService.addTodo();
  }

  deleteItem(list, index) {
    list.splice(index,1);
  }

  openOption(itemSlide: ItemSliding, item: Item, event) {
    let swipeAmount = 160;
    if (this.htmlUtilsService.isMobile()){
      swipeAmount = 75;
      event.stopPropagation();
    }
    if (this.activeItemSliding) {
      this.closeOption();
    }

    this.activeItemSliding = itemSlide;

    itemSlide.startSliding(swipeAmount);
    itemSlide.moveSliding(swipeAmount);

    itemSlide.setElementClass('active-slide', true);
    itemSlide.setElementClass('active-options-right', true);
    item.setElementStyle('transition', null);
    item.setElementStyle('transform', 'translate3d(-' + swipeAmount + 'px, 0px, 0px)');
  }

  selectingItem(itemSliding) {
    if (this.activeItemSliding) {
      this.activeItemSliding.close();
      this.activeItemSliding = itemSliding;
    }
  }

  cancelDrag(event) {
    event.preventDefault();
  }

  closeOption() {

    if (this.activeItemSliding) {
      this.activeItemSliding.close();
      this.activeItemSliding = null;
    }
  }

}
