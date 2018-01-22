import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoCreateAndDisplayComponent } from './Feature/todo/create-and-display/create-and-display.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'todos', component: TodoCreateAndDisplayComponent }
];


@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true})],
    exports: [ RouterModule ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
