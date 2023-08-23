import { Todo } from "../models/todo.models";
import { createTodoHTML } from "./";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

export const renderTodos = ( elementId, todos = [] ) => {
    //De esta manera logramos evitar que cada que se llame la función se tenga que recorrer el DOM para
    //Encontrar el elemento HTML 
    if( !element ) element = document.querySelector( elementId );    

    //Si el elemento no existe dentro del DOM despues de realizar la asignación se lanzara un error en
    //Consola
    if( !element ) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) );
    });
}