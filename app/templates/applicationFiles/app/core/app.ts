"use strict";

// import Angular 2
import {Component} from "@angular/core";

// import Angular 2 Component Router
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

// app components
import {Home} from "../pages/home/home";

// app services
//import {appServicesInjectables} from "core/services/services";

@Component({
	selector: "app",
	templateUrl: "core/app.template.html", //template: "<router-outlet></router-outlet>",
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: "/", component: Home, name: "Home", data: undefined } // the as serves as alias for links, etc
])
export class App {
	constructor() {
		console.log("Application bootstrapped!");
	}
}

