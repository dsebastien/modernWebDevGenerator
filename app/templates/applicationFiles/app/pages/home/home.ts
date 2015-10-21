"use strict";

// import Angular 2
import { Component, CORE_DIRECTIVES } from "angular2/angular2";

@Component({
	selector: "page-home",
	templateUrl: "pages/home/home.template.html",
	directives: [CORE_DIRECTIVES]
})
export class Home {

	constructor() {
		console.log("Home component loaded");
	}
}
