import { AppComponent } from "./app.component";
import {Routes} from '@angular/router'

/**
 * This is a single page site so no routing really needed.
 */
export const appRoutes:Routes = [
    {path:'', component:AppComponent}
]