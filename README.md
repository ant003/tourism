# Costa Rica Tourism

## About
Costa Rica Tourism is a site that helps people find useful information to prepare themselves before traveling to some place in this country. This includes price, accessibility, difficulty, path distance (inside the interest point), the kind of experience (volcano, river, beach, etc...) among others. Further, it shows a general description for each place and some tips to enjoy the instance as much as possible.

As someone who is passionate about learning and programming, I began this project as a way to apply new skills in the web development field. Here I got to apply my knowledge of HTML, CSS, and Javascript. But more importantly, thanks to it, I learned about ReactJS's basis (functional components, hooks like state and effect), JSON servers basis, NPM, Webpack, browser APIs, and third-party APIs like Leafletjs (https://leafletjs.com/), CSS modules, and Sass.


To handle the GET and POST requests, a simple JSON server was implemented.

## Structure

Each component has its own folder, which contains its subcomponents and stylesheets needed for it to work. Some shared components are inside a special folder called "shared," but each one has its own separate folder as well. Likewise, the fonts, images, and custom hooks have their own folders containing the respective files.

The main components to notice are: home (the main page), places (the list of places available), place (displays the place information), and map (shows a map to visually look for places).

## Requirements

- node v19.1.0
- react-router-dom@5

## Dependencies installation

1. Install node version manager (NVM): 
    - Linux and MacOS https://github.com/nvm-sh/nvm
    - Windows https://github.com/coreybutler/nvm-windows
2. Install the last node version:
    ``` 
    nvm install node 
    ```
3. Install the react router v5:
    ``` 
    npm install react-router-dom@5
    ```
4. As this is a development build please bear in mid to install the npm modules like so: 
    ``` 
    npm install
    ```

## Usage

1. Start the JSON server like so: 
    ```
    npx json-server --watch data/db.json --port 8000
    ```
2. Start the react server with:
    ```
    npm run start
    ```
## License

See [LICENSE](/LICENSE).

## Maintainers

Currently I am the only maintainer [@ant003](https://github.com/ant003).

If you have any doubts or suggestions, feel free to write to me at:

**Email:** antonio.alvarez.chavarria@gmail.com