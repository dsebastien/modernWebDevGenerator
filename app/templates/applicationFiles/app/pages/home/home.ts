"use strict";

// import Angular 2
import {Component} from "@angular/core";

@Component({
	selector: "page-home",
	templateUrl: "pages/home/home.template.html",
	directives: []
})
export class Home {

	constructor() {
		console.log("Home component loaded");
	}
}
