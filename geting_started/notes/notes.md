<!-- vim: conceallevel=0 colorcolumn=80 textwidth=79 linebreak
-->
# Notes

## Dependencies

- CLI `npm install -g @angular/cli`
- Git

## Links

- [coolors](https://coolors.co/e8e9f3-cecece-a6a6a8-272635-b1e5f2)

## Creating a work space

**Work space:**  is a collection of projects

- Create a new project: `ng new angular-tour-of-heroes`
- All by default: (Enter or return key)

`ng new` generate a new *Angular workspace* and new application skeleton

The workspace configuration file is: `angular.json` -> `ng config`
command manipulate the configurations

## Serve application

```sh
cd angular-tour-of-heroes
ng serve --open
```

This initialize the local server, often 4200 `localhost:4200`

## Angular Component

Components are a fundamental building block of Angular applications

## First Changes

Inside of `src/app` contain the `AppComponent`:

- `app.component.ts` -> The component class code, TypeScript
- `app.component.html` -> The component template, written in HTML
- `app.component.css` -> The component's **private** CSS

### Properties

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the Walo Heros';
}
```

In this case `title` is a property

### App CSS

This is the general CSS to entire application

## First Component

```sh
ng generate component heroes
```

This make:

```sh
CREATE src/app/villians/villians.component.css
CREATE src/app/villians/villians.component.html
CREATE src/app/villians/villians.component.spec.ts
CREATE src/app/villians/villians.component.ts
UPDATE src/app/app.module.ts 
```

## Conventions

`(herores)` The component name ->  Plural
`(NgIf)` Directive Class -> PascalCase
`(ngIf)` Directive instance -> CamesCase
