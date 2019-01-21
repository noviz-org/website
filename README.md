# NOVIZ Website

All the code for the NOVIZ website is in here.
The source code is in [src/](src/), under [dist/](dist/) you can find code for the live website and in the [test/](test/) directory is the website version we are working on.

## Development

If you want to work on the website, on your own or if you happen to be a collaborator or even member of the website development team, follow the steps below.
Keep in mind, only collaborators and members of the website development team get to commit changes. But you are free to use the source code as you'd like, all the software and tools used however, is not ours, and we kindly would like to refer you to the corresponding developer for more information on how to use those.

We will explain what we need what software for, but for further information visit the developers website, which we'll provide when mentioned.

### Setup

We will guide you through the setup in the following section. We assume you have the most necessary software installed like [git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and an editor (I prefer Microsofts free [VSCode](https://code.visualstudio.com/) Editor).

Also worth mentioning: The command snippets are bash. (Works on Linux or macOS) Windows users help yourselves. :grin:

1. **Download**

    Firstly, you should clone the files from this repository:

    ```.sh
    git clone https://github.com/noviz-org/website.git
    ```

    This should also clone and setup the submodule in the folder *dist/* for the live website.

2. **npm install**

    Navigate inside the new folder. You should see a *package.json* file. As well as the *src/* directory

    With npm installed, run:
    ```.sh
    npm install
    ```

    This might take some time. What this does is installing all the necessairy bits and pieces to start developing.

    Here is a list of the most essential software that you are installing now:
    - [Webpack](https://webpack.js.org/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Sass](https://sass-lang.com/)

    More about those later.

    All done? Nice.

3. **Making scripts executable**

    We have defined a couple of npm scripts in the *package.json* that are usefull and necessairy utilities. Some of those call other bash scripts, which need to have the executable permission to run.

    The scripts are:
    - [copy_dist.sh](copy_dist.sh)
    - [deploy.sh](deploy.sh)

    To make them executable run: (Make sure you are in the )
    ```.sh
    chmod +x copy_dist.sh;
    chmod +x deploy.sh
    ```

    You can also take a peek into both to see what they do.

This is very much the whole setup. To see what you can do and how you can work, keep reading.

### Environment

In this chapter I'm giving you a short summary on what's what in the environment.

You should have this or a similiar folder strucure on your hands:

```.txt
.
├── dist/ (S)
├── node_modules/
├── src/
│   ├── html/
│   ├── resources/
│   ├── scripts/
│   └── styles/
├── test/
├── copy_dist.sh
├── deploy.sh
├── package.json
├── package-lock.json
├── README.md
├── server.js
├── tsconfig.json
└── webpack.config.js
```

Note that the directories here don't have to be empty. We just don't list everything here.

#### The dist directory

The **dist/** directory contains the live website. This is actually also a git submodule and its content and properties should be cloned with git clone. If you are using VSCode it will be marked as a submodule with a S on the right.

While we're at it, let's check if it's healthy and change the branch.

And now run:

```.sh
git submodule status
```

You should now see something like this in the terminal:

```.txt
 9e6ee195a45bc70d08503b7fe4cdfc3158c200e2 dist (heads/development)
```

Now, if you got an error doing that, it is very possible the folder dist is not a submodule. If this is the case, change directory out of the folder, delete it and clone it as a submoduel from the live-website repository. The commands for this exact problem are described in [this section](#make-dist-a-submodule).

If not, go ahead and change the branch.

Change into the directory *dits/*:

```.sh
cd dist
```

And change the branch to development:

```.sh
git checkout development
```

#### The src directory

The src directory contains all the source code for the website.

- All the markup and images and resources for the markup are stored in the *html/* folder.
- Additional resources are stored in the *resources* folder.
- In the *scripts/* folder are the TypeScript files that are compiled into the bundle.js.
- The *styles/* direcory contains all the Sass files that are compiled into a styles.css file.

#### The test direcory

The test directoy is home to development builds.

#### The scripts

The scripts, meaning copy_dist and deploy, provide some basic functionalities. They are made executable in the setup.

#### package.json

The package.json is the config file for npm. It contains all the dependencies as well as the scripts for the workflow.

#### REAMDME

The README is the exact file you are reading at the moment. If you make changes in the environment just try to help future users understand what's going on in the README.

#### tsconfig

The tsconfig.json just stores all the config for the TypeScript compiler. At the moment you can leave it as it is.

It can sometimes be useful to change a couple of things like for example the strict property, depending on what you want to achieve.

#### Webpack Config

The *webpack.config.js* is the config file for webpack. For more information read up on [webpack.js.org](https://webpack.js.org/).

### Workflow

If you are working on the NOVIZ website, it is really important you follow the steps below to make the live of your coworkers and other developers much easier.

First make sure you have everything [setup](#setup). That is, you cloned the repo, installed everything and ready to go.

It is also good if you have already read the [Envirnoment](#Environment) chapter

#### Development branch

Make sure you are on the development branch in the dist directory.

You can do this by going into the *dist/* directory and running:

```.sh
git checkout development
```

#### Technologies in use

We use some technologies that can be quite complicated at the beginning. However, there is always documentation and resources for everything. Here is a list, some tips, and links to more resources.

We assume you have knowledge of HTML, CSS and JavaScript.

- [TypeScript](#TypeScript)
- [Webpack](https://webpack.js.org/)
- [Bootstrap](#Bootstrap)
- [Fontawesome](#Fontawesome)
- [Sass](https://sass-lang.com/)

See the [docs](#documentation).

#### Editing

Only edit the files in the *src/* directory. The files in this folder are compiled and packed into the *test/* and *dist/* directory.

#### Testing

To develop on the website it is best to start the webpack development server. Just run:

```.sh
npm run test
```

If the website builds, you will see it open in a browser window automatically. You can now edit the files and it will automatically rebuild and reload in the browser, just by saving.

#### Deploying & Commiting

Make a produciton build:

```.sh
npm run prod
```

Commit to the development branch:

```.sh
npm run deploy
```

#### Review the live website

To test the live website in the dist directory first make sure you are on the correct branch.

If you want to review a pull request you most likely want to change into the development branch. Check this out on how-to: [Development branch](#Development-branch)

Get back to the website root directory and run this npm script to start a test server with the dist files:

```.sh
npm run test-dist
```

### Documentation

Here are some basic explainations and examples for some technologies in use.

NOTE: The docs are not that fleshed out yet, more to come.

#### [TypeScript](https://www.typescriptlang.org/)

TypeScript is a superset of JavaScript, meaning every JavaScript code works as TypeScript code as well. So not that far off.

However, TypeScript brings a lot of functionality and an object oriented approach. And because of that there is a learing curve to it.

#### [Bootstrap](https://getbootstrap.com/)

Bootstrap is a front-end component library. Also known as Twitter-Bootstrap because these are its origins.

We are using Boostrap via a CDN.

Bootstrap works through classes on html elements and gives them CSS properties. It makes live so much easier. However, one has to look up some functions and there is a learning curve to it.

#### [Fontawesome](https://fontawesome.com/)

Fontawesome brings easy to use svg icons.

We are using Fontawesome via a CDN.

To use just look up a icon on the font awesome site and use the html element and class for it and it will just magically appear.

### Problems & Solutions

#### make dist a submodule

The easiest way to make the dist folder a submodule is the following:

1. Make sure you are one folder structure above the *dist/* directory

    This command should output dist, or you are not at the correct location.

    ```.sh
    ls | grep dist$
    ```

2. remove the *dist/* folder

    I know it's not what you came for but trust me, this is the easiest way.

    ```.sh
    rm -rv dist
    ```

3. Clone the live-website as a submodule with the name dist

    To do this, run the following command:

    ```.sh
    git submodule add https://github.com/noviz-org/live-website.git dsit
    ```

    This will create a folder this, which is actually the live-website repository in a submodule.

And with that, you should now have a working git submodule in dist.