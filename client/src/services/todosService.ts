import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable()
export class TodoService {
  alreadyAddedProblem = false;
  problemOver = false;
  todos: Todo[] = [
    {
      title: 'Faire la toiture',
      description: ' Préparer la réparation de la toiture, Déposer l\'ancienne toiture : ardoises ou tuiles.' +
        ' A déterminer par le client' +
        ' Enfin, poser un écran de sous-toiture et des liteaux neufs',
      beginDate: new Date(2018, 12, 1),
      endDate: new Date(2018, 12, 11),
      completionPercentage: 50,
      supposedCompletionPercentage: 70,
      done: false
    },
    {
      title: 'Poser le papier-peint',
      description: 'Préparer le mortier-colle. Poser le mortier-colle. Poser une rangée de carreaux au sol. ' +
        'Placez les croisillons. Attention, besoin de faire sécher une journée sur les surfaces réalisées.',
      beginDate: new Date(2018, 12, 4),
      endDate: new Date(2018, 12, 15),
      completionPercentage: 80,
      supposedCompletionPercentage: 60,
      done: false
    },
    {
      title: 'Abattre le mur non porteur n°1',
      description: 'Le mur n\'est pas disponible directement. Il faut donc commencer par dégager l\'accès puis ' +
        'poser deux linteaux. Un pour le mur non porteur et pour l\'accès. L\'outilage électrique s\'occupera de descendre le mur. ' +
        'Après cela il faudra changer le premier linceau de place',
      beginDate: new Date(2018, 11, 25),
      endDate: new Date(2018, 12, 2),
      completionPercentage: 100,
      supposedCompletionPercentage: 100,
      done: true
    },
    {
      title: 'Abattre le mur non porteur n°2',
      description: 'Le mur n\'est pas disponible directement. Il faut donc commencer par dégager l\'accès puis ' +
        'poser deux linteaux. Un pour le mur non porteur et pour l\'accès. L\'outilage électrique s\'occupera de descendre le mur. ' +
        'Après cela il faudra changer le premier linceau de place',
      beginDate: new Date(2018, 11, 25),
      endDate: new Date(2018, 12, 2),
      completionPercentage: 100,
      supposedCompletionPercentage: 100,
      done: true
    },
    {
      title: 'Abattre le mur non porteur n°3',
      description: 'Le mur n\'est pas disponible directement. Il faut donc commencer par dégager l\'accès puis ' +
        'poser deux linteaux. Un pour le mur non porteur et pour l\'accès. L\'outilage électrique s\'occupera de descendre le mur. ' +
        'Après cela il faudra changer le premier linceau de place',
      beginDate: new Date(2018, 11, 25),
      endDate: new Date(2018, 12, 2),
      completionPercentage: 100,
      supposedCompletionPercentage: 100,
      done: true
    },
    {
      title: 'Abattre le mur non porteur n°4',
      description: 'Le mur n\'est pas disponible directement. Il faut donc commencer par dégager l\'accès puis ' +
        'poser deux linteaux. Un pour le mur non porteur et pour l\'accès. L\'outilage électrique s\'occupera de descendre le mur. ' +
        'Après cela il faudra changer le premier linceau de place',
      beginDate: new Date(2018, 11, 25),
      endDate: new Date(2018, 12, 2),
      completionPercentage: 100,
      supposedCompletionPercentage: 100,
      done: true
    }
  ];
  getTodos() { return this.todos; }

  addTodo() {
    this.todos.push({
      title: 'Tâche à planifier',
      description: 'A planifier pour plus tard',
      beginDate: new Date(2018, 12, 4),
      endDate: new Date(2018, 12, 15),
      completionPercentage: 0,
      supposedCompletionPercentage: 0,
      done: false,
    })
  }

  addProblem() {
    if (!this.alreadyAddedProblem) {
      this.todos.push({
        title: 'Poser le carrelage',
        description: 'Préparer le mortier-colle. Poser le mortier-colle. Poser une rangée de carreaux au sol. ' +
          'Placez les croisillons. Attention, besoin de faire sécher une journée sur les surfaces réalisées.',
        beginDate: new Date(2018, 12, 4),
        endDate: new Date(2018, 12, 15),
        completionPercentage: 30,
        supposedCompletionPercentage: 60,
        done: false,
        problems: [
          {
            description: 'Manque de carreaux pour la cuisine',
            severity: 2
          }
        ]
      })
    }
    this.alreadyAddedProblem = true;
  }

  removedProblem() {
    this.problemOver = true;
  }
}