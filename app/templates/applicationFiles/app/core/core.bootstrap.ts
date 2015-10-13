///<reference path="../../typings/tsd.d.ts" />
///<reference path="../../typings/typescriptApp.d.ts" />
"format register"; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
"use strict";


// import Angular2 deps
import "zone.js";
import "reflect-metadata";
import "es6-shim"; // fixes an issue relating to list.fill (list.fill is not a function)

// import Angular 2
import {Component, View, CORE_DIRECTIVES, bind, bootstrap} from "angular2/angular2";
import {Http, HTTP_BINDINGS} from "angular2/http";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router, LocationStrategy, PathLocationStrategy, ROUTER_BINDINGS} from "angular2/router";
// todo add HTML5LocationStrategy (whatever the new name) & remove path location strategy

// app components
import {Home} from "pages/home/home";

// app services
//import {appServicesInjectables} from "core/services/services";

@Component({
	selector: "app"
})
@View({
	templateUrl: "core/core.bootstrap.template.html", //template: "<router-outlet></router-outlet>",
	directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink]
})
@RouteConfig([
	//TODO put back the old syntax (comment below) once the typings are correct
	// reference: https://github.com/angular/angular/issues/3637
	// fix could land w/ 36+
	<Route>{path: "/", component: Home, as: "home", data: undefined, loader: undefined, redirectTo: undefined} // the as serves as alias for links, etc
	/*
	new Route({path: "/", component: Home, as: "home", data: undefined, loader: undefined, redirectTo: undefined}) // the as serves as alias for links, etc
	*/
])
class App {

	constructor() {
		console.log("Application bootstrapped!");
	}
}

// bootstrap our app
console.log("Bootstrapping the App");

// in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide
bootstrap(App, [
	//appServicesInjectables, // alternative way of filling the injector with all the classes we want to be able to inject
	ROUTER_BINDINGS,
	HTTP_BINDINGS,
	bind(LocationStrategy).toClass(PathLocationStrategy) // enables the following: /#/<component_name> rather than /<component_name>
	//todo replace with
	//bind(LocationStrategy).toClass(HTML5LocationStrategy) // enable HTML5 history API location strategy

]).then(
	success => console.log("Bootstrap successful"),
	error => console.error(error)
);
