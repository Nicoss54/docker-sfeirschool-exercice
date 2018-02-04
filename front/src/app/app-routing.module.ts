import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateAndDisplayComponent } from './Feature/todo/create-and-display/create-and-display.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const appRoutes: Routes = [
    { path: '', loadChildren: 'app/Feature/todo/todo.module#TodoModule'}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ],
    declarations: [],
    providers: [],
})

export class AppRoutingModule {}
