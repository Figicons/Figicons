![Figicons](https://raw.githubusercontent.com/Figicons/Homepage/master/src/assets/Github-cover.png)

## About Figicons

Figicons is an open-source SVG icon set containing over 150+ icons designed on a 24px grid in Figma. Figicons also provides the right tooling ([via the CLI](https://github.com/Figicons/cli)) to easily fetch, parse & optimize your custom icons in minutes.

[View all 150+ icons](https://figicons.com)

## Designed in Figma

The Figicons source file is [available in Figma](https://www.figma.com/file/eIOdDEWeiHETuccK5xpfNhEc/Icons). Feel free to create issues for icon suggestions on the default icon set.

###### Figicons is not affiliated with Figma in any way

## Building your own custom icons

Figicons was built from the ground up with support for your own Figma-designed custom icons. In just a few steps you can create your own React & Web components using the [Figicons CLI](https://github.com/Figicons/cli).

[Check the full documentation](https://figicons.com/custom-icons)

## Installation
#### Install via a package manager

Using Yarn:
```shell
$ yarn add figicons
```

Or using npm:

```shell
$ npm install figicons
```

Finally, import the Icon component where needed:

```js
import Figicons, { Icon } from 'figicons';
```

## Getting Started
Once imported, simply use the React `<Icon />` component.

```jsx
<Icon name="heart"/>
```

[Check the full documentation on Getting Started](https://figicons.com/start)

## API
Figicons comes with a core config that can be altered using the API. You should use the API if you're intending to build and use custom icons with Figicons.

[Check the full documentation on the API](https://figicons.com/api)

## Contributing guidelines

If you wish to contribute to the Figicons project please check out the [contributing guidelines](CODE_OF_CONDUCT.md).

## License

Figicons is licensed under the [MIT License](LICENSE)
