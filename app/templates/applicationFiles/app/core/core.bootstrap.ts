"use strict";

// import Angular2 deps
import "zone.js";
import "reflect-metadata";

// import Angular 2
import {Component, CORE_DIRECTIVES, provide, bootstrap} from "angular2/angular2";
import {Http, HTTP_PROVIDERS} from "angular2/http";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router, LocationStrategy, PathLocationStrategy, ROUTER_PROVIDERS} from "angular2/router";
// todo add HTML5LocationStrategy (whatever the new name) & remove path location strategy

// app components
import {Home} from "../pages/home/home";

// app services
//import {appServicesInjectables} from "core/services/services";

@Component({
	selector: "app",
	templateUrl: "core/core.bootstrap.template.html", //template: "<router-outlet></router-outlet>",
	directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink]
})
@RouteConfig([
	{ path: "/", component: Home, as: "Home", data: undefined } // the as serves as alias for links, etc
	//new Route({path: "/Home", component: Home, as: "Home", data: undefined}) // same but written differently
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
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(LocationStrategy, { useClass: PathLocationStrategy }) // enables the following: /#/<component_name> rather than /<component_name>
	//todo replace with
	//provide(LocationStrategy, { useClass: HTML5LocationStrategy }) // enable HTML5 history API location strategy

]).then(
	success => console.log("Bootstrap successful"),
	error => console.error(error)
);
