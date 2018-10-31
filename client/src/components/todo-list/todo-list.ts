import { HtmlUtilsService } from './../../services/htmlUtils';
import { Component } from '@angular/core';
import { ItemSliding, Item } from 'ionic-angular';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.html'
})
export class TodoListComponent {

  activeItemSliding: ItemSliding = null;

  todos = [
    {
      title: 'Faire la toiture',
    },
    {
      title: 'Poser le carrelage',
    },
    {
      title: 'Monter l\'échaffaudage',
    },
  ];

  constructor(private htmlUtilsService: HtmlUtilsService) {
  }

  addThing() {
  	this.todos.push({ title: 'Todo n°' + (this.todos.length + 1) });
  }

  deleteItem(list, index) {
    list.splice(index,1);
  }

  openOption(itemSlide: ItemSliding, item: Item, event) {
    // event.stopPropagation();
    if (this.activeItemSliding) {
      this.closeOption();
    }

    this.activeItemSliding = itemSlide;
    let swipeAmount = 75;
    if (!this.htmlUtilsService.isMobile()){
      swipeAmount = 160;
    }
    

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
