import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FamiliaComponent } from "./familia.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        FamiliaComponent
    ],
    exports:[
        FamiliaComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})

export class FamiliaModule{}