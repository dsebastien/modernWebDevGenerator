# About
All SASS partials (files beginning with a _) should be placed in a sub-directory (for clarity) and should be imported by one of the SASS files in this folder

The main.scss and vendor.scss files allow to cleanly separate what belongs to the application and what comes from third parties. The production build will process those files separately and all the files imported in those will be inlined/bundled.

# Styles design approach
Goal: follow a _component_ design approach such as:
  * _Atomic Design_: [http://bradfrost.com/blog/post/atomic-web-design]
  * _SUIT CSS_: [http://suitcss.github.io/]
  * _BEM_: [https://css-tricks.com/bem-101/]
  * _SMACSS_: [https://smacss.com/]

... or rather a mix thereof :)

# General guidelines
* separate structure from chrome (visuals)
* (re)use variables whenever possible
* try to provide flexibility: define what you don't know, particularly width & height
* let content control the height
* let grids control the width
* aim for low specificity: make all rules the same strength (makes combining components easier)
  * minimize the depth of rules
  * minimize the dependency on the HTML structure (related to the above)
* predictability: ensure that the components work consistently

# Style types

## About
Here we describe a way to categorize the different types of styles that can be defined. In the next section, the naming convention is provided and explained.

## Base
Base styles are style rules which are almost exclusively single element selectors but can include attribute selectors, pseudo-class selectors, child selectors or sibling selectors.

Examples:
* generic styles, css resets, default link styles, default font styles, body backgrounds, ...
* `a { ... }, a:hover{ ... }`

## Utility
Utility styles are low-level styles with a very narrow scope. Utilities should modify a single trait (a small collection of similar styles).

Utilities can use `!important` to ensure that their styles always apply.

Examples:

```
.u-floatLeft {
  float: left !important;
}

.u-posAbsolute {
  position: absolute !important;
}

.u-block {
  display: block !important;
}

```

## Component
### About
We are entering in the era of components. Soon(et or later), [Web Components](http://webcomponents.org/) will become the norm so we need to get prepared any way we can.

Web components will make it possible to fully encapsulate styles belonging to a specific element and thus make specificity issues a thing of the past.

We can emulate the properties of encapsulated styles today by applying a naming convention and respecting some design guidelines.

Examples of components:
* login form
* search box
* carousel
* social links
* ...

### Guidelines for components
* components should be identified (modularity)
* components should do one thing and do it well
  * a component should implement a single part of the UI
  * the functionality and presentation defined by a component must be semantically related (cohesion)
* components should be standalone, portable and reusable (composability/configurability)
  * it should be possible to assemble components in various combinations
* components should not be coupled/entangled even if that requires you to violate the DRY principle. Component reusability is more important than DRY (loose coupling)
* components should not expose their implementation to other components (encapsulation)
* components should not rely on IDs or element selectors
* most components should NOT set their own width, margin, and positioning. By authoring a component to be full-width or inline, it can better adapt to the dimensions of an ancestral context
* components should NOT know about the implementation of their dependencies
  * the appareance of dependencies must be configured using the interface they provide
  * controlling dimensions, margins, position and inheritable styles of a component can be done _indirectly_ by adding a class to its root element or wrapping it in another element [reference](https://github.com/suitcss/suit/blob/master/doc/components.md)
* each component should have a dedicated CSS/SASS file
* each component should include CSS documentation answering the following questions
  * what is the intended presentation?
  * what are the modifiers and states?
  * what are the reasons for specific, opaque property values?
  * what are the known limitations?
  * do not assume that CSS is self-documenting

## Module
A module is a larger part of the UI which can be composed of components, basic elements and/or of other modules.

Examples of modules:
* product grid
* sidebar section
* ...

Guidelines for modules:
* modules should be standalone, portable and reusable
* modules should be moveable to different parts of the layout without breaking
* modules should not rely on IDs or element selectors
* modules should avoid specificity battles
* modules can be nested in one another

## Layout
Layout styles dictate how the page is divided into sections. Layouts hold one or more modules together.

Layouts can be split in two parts:
* major: used only once in any given page
* minor: might be used multiple times on a single page

Examples of layout elements:
* header
* fooder
* sidebar

Guidelines for layout styles:
* layouts should only care about positioning and placement
* major layout elements can have an ID and be styled using ID selectors

## Theme
Theme styles describe alternative looks for layouts/modules/...
Theme styles can affect any of the other namespaces.
Only use these if you want/need to get fancy

Example of theme styles:
* override a base style to modify the look and feel of an element
* modify some element of a component
* define a different color scheme
* ...


# Naming convention

## Global
`<namespace>-<ComponentName>-<elementName>--<modifierName> { ... }`

The convention relies on structured class names and meaningfull hyphens (i.e., not using hyphens merely to separate words). This helps work around the current limits of applying CSS to the DOM (i.e., the lack of style encapsulation), and to better communicate the relationships between classes.

## Mind the case
* namespace: lowercase
* ComponentName: PascalCase (i.e., CamelCase with first character in uppercase)
* elementName: CamelCase with first character in lowercase
* modifierName: idem

## namespace (mandatory except for components)
The goal of the namespace is to isolate the different "groups" or "types" of styles (i.e., categories) and directly making the type and intent clear.

Possible values:
* b: base
* u: utility
* m: module
* l: layout
* t: theme
* ?: custom

If necessary, components can be prefixed with a namespace in order to avoid the potential for collisions between libraries and your custom components

Èxample:
```
.myapp-Button { ... }
```

## ComponentName (required only for components)
Check out the section about components above.

Components are the only elements to use Pascal Case.).

## elementName (mandatory except for components)
If a style class is NOT defined for a component, then an element name is mandatory.

An element name can also be specified for a component; in that case it is considered as a descendant name.

A descendant component style class is a class that is attached to a particular descendant node of a component. It is responsible for applying presentation directly to the descendant on behalf of a particular component.

Example of a basic element name:
```
.u-floatLeft { ... }
.b-fontSize--normal { ... }
.b-fontSize--large { ... }
```

Example of a descendant component style class:
```
.Post-header { ... }
```

## modifierName (optional)
A modifier style class modifies the presentation of the base style class/component in some form (e.g., for a certain configuration or variant).

Note that modifiers are separated from the rest of the name by two hyphens.

Modifier classes should be included in the HTML _in addition_ to the base component class.

Example:
```
.Button { ... }
.Button--default { ... }
.Button--disabled { ... }
...
<button class="Button Button--default" type="button">...</button>
...
<button class="Button Button--default Button--disabled">...</button>
```

## Examples

```
.u-floatLeft { ... }
.Post-title { ... }
.Post-author { ... }
.Post-a { ... }
.Post-comments--closed { ... }
.Post-comments--opened { ... }
```

## Variables
If a component contains variables, then they MUST also be scoped to their component by including the component name in the variable name.

Example (SASS):
```
$PostsBorderWidth: 1px;
...
.Post {
	border-width: $PostsBorderWidth;
}
```

This makes it easier for themes to override a component's look & feel.
Moreover, it also makes clear that the variable is part of that component.

## Atomic design approach relation
* HTML tags + base styles = atoms
* elementName = atoms
* components = molecules
* modules = organisms

The Atomic design templates/pages are embodied by the template files/partial views for components and/or the examples in the CSS documentation.

# Sass guidelines
* use nested styles using @include (e.g., [https://github.com/sathify/CCSS/tree/master/styles/scss])
