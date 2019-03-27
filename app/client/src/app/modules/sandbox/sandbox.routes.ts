import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';

const routes: Routes = [
    { path: 'test', component: SandboxComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: true
    })],
    exports: [RouterModule]
})
export class SandboxRoutingComponent { }