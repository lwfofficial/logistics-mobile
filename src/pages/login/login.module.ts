import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LoginPage} from './login';
import {DirectivesModule} from "../../directives/directives.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        LoginPage,
    ],
    imports: [
        IonicPageModule.forChild(LoginPage),
        DirectivesModule,
        SharedModule
    ],
    exports: [
        LoginPage
    ]
})
export class LoginPageModule {
}
