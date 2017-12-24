import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { AuthorizeRoutingModule } from "./authorize-routing.module";
import { AuthorizeComponent } from "./authorize.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AuthorizeRoutingModule,
        SharedModule
    ],
    declarations: [
        AuthorizeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthorizeModule { }
