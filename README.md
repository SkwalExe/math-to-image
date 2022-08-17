# Math to image 📏

![demo](https://github.com/SkwalExe/math-to-image/raw/main/images/gif.gif)

📏 Math to image conversion tool for websites that don't support LaTex rendering like GitHub.

Convert LaTeX code into image links like:  
<!-- $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$ --> <img src="https://latex.codecogs.com/svg.image?\small%20\color{White}x%3D%5Cfrac%7B-b%5Cpm%5Csqrt%7Bb%5E2-4ac%7D%7D%7B2a%7D" />

## Installation 📦

```shell
ext install Skwal.math-to-image
```

## Usage 📝

Select your LaTeX code :

![Highlight Math](https://github.com/SkwalExe/math-to-image/raw/main/images/1.png)

Then press `Ctrl+p` and type `Convert math to image`

![Select option](https://github.com/SkwalExe/math-to-image/raw/main/images/2.png)

After that, click enter to convert your code.

![Convert](https://github.com/SkwalExe/math-to-image/raw/main/images/3.png)

## Settings 🔧

The following configuration options are available in the `.vscode/settings.json` of your workspace.

- You can change the default color in which the math will be rendered, with the `color` option.

- You can change the default style applied to the `<img>` tags. Defaults to `null` for no styling.

```json
"math-to-image.color": "white"
"math-to-image.style": "transform: translateY(-0.1rem);"
```

## Setting up a shortcut 🔧

Press `Ctrl+p` and type `Convert math to image`, then click on the gear icon.

Click on `keybinding` and type your shortcut

![keybinding](https://github.com/SkwalExe/math-to-image/raw/main/images/4.png)

## Change log 📝

For version updates and bug fixes, please see our [CHANGELOG](CHANGELOG.md)

## Final

If you have any problem, don't hesitate to open an issue

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<a href="https://github.com/SkwalExe#ukraine"><img src="https://raw.githubusercontent.com/SkwalExe/SkwalExe/main/ukraine.jpg" width="100%" height="15px" /></a>
