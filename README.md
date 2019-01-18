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
    
    Firstly, you should download the files from this repository. We recomment to use the git clone command:

    ```.sh
    git clone https://github.com/noviz-org/website.git
    ```

    You could also just download the ZIP file and extract it, but it is so much smoother with the git clone command.

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

This is very much the whole setup. To see what you can do and how you can work, keep reading.

### Workflow

More about that later... TODO