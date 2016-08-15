"use strict";

// import Angular 2
import {Component} from "@angular/core";

// import Angular 2 Component Router
import { ROUTER_DIRECTIVES } from "@angular/router";

// app components
import {Home} from "../pages/home/home";

@Component({
	selector: "app",
	templateUrl: "core/app.template.html", //template: "<router-outlet></router-outlet>",
	directives: [ROUTER_DIRECTIVES]
})
export class App {
	constructor() {
		console.log("Application bootstrapped!");
	}
}

