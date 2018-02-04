import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateAndDisplayComponent } from './create-and-display/create-and-display.component';

const todoRoutes: Routes = [
    { path: '', component: TodoCreateAndDisplayComponent}
];

 @NgModule ( {
     imports: [ RouterModule.forChild(todoRoutes)],
     exports: [ RouterModule],
     declarations: [],
     providers: [],
 })

 export class TodoRoutingModule {}
