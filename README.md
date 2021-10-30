# mcs-web

This is the design guide for MCS's new website - to be launched.

# Technologies

- [Eleventy](https://www.11ty.io/) - static site generator
- [Liquid](https://shopify.github.io/liquid/) - templating language
- [Node](https://nodejs.org/en/) - JavaScript runtime
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - node package manager
- [GitHub](https://github.com/mysterycodesociety/mcs-web) - host of the git repository
- [Netlify](https://www.netlify.com) - build, deploy, and host the website

# Local Development

## Environment Setup

To develop locally, you will need to work on a computer with the following tools:

1. [Terminal, Shell, or Console application](https://www.hanselman.com/blog/whats-the-difference-between-a-console-a-terminal-and-a-shell).
1. [git](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) for version control
1. [Node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
1. A Text Editor of your choice, e.g. [Sublime Text](https://www.sublimetext.com/) (recommended), Textmate, VS Code
1. A browser of your choice, e.g. Chrome, Firefox, Edge, Safari

Below, you will find more specific instructions for your operating system.

### On MacOS

1. Terminal is a shell that comes pre-installed on Macs. Find it in the Application folder and open it.
1. Install [homebrew](https://brew.sh/), which you will use to install Node.
1. Check if brew is installed by running `brew -v` in Terminal.
1. Install node in homebrew by running `brew install node` in Terminal.
1. Check if node and npm are installed by running `node -v` and `npm -v` in Terminal.
1. Open your browser.


### On Linux

1. Linux usually comes pre-installed with at least one terminal emulator: gnome-terminal, konsole, xterm, eterm. Find it and open it.
1. Install git with `sudo apt install git-all`.  Check it is installed by running `git -v` in terminal.
1. Install node with `apt-get` by running `sudo apt install nodejs` in your terminal.
1. Install npm with `apt-get` by running `sudo apt install npm` in your terminal.
1. Check if node and npm are installed by running `node -v` and `npm -v` in terminal.
1. Open your browser.


### On PC

1. Install a git terminal emulator by [downloading the build](https://git-scm.com/download/win) and installing it.  Open it.
1. Install node and npm by downloading the [Node.js installer](https://nodejs.org/en/download/).
1. In the git terminal, check to see if node and npm are in the path by running `node -v` and `npm -v`.  If not, [add them to your PATH environmental variable](https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10).
1. Open your browser.


## Getting Started (The First Time)

### GitHub account firsts

1. Create a [GitHub account](https://github.com).
1. In your terminal, generate a SSH public key, [following the steps in this guide](https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key).  Copy the public key.
1. In GitHub, go to your Account Settings, and [save the public key to your SSH and GPG keys](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

### GitHub Repository Firsts

1. [Git Clone](https://github.com/git-guides/git-clone) this repository onto your machine (see link for instructions).
1. Change your directory to the cloned repository: `cd mcs-web` in terminal.
1. Install dependencies: `npm install` in terminal.
1. Build the site for the first time (generating a `_site` directory) by running `npm run-script build` in terminal.


## Running the server

1. Run `npm start` in terminal to start the app server.
1. Open your browser to a new tab and view the app at `http://localhost:8080`


## Example Workflow

This workflow assumes you have already done all the 'Getting Started' pieces and are coming back to do work on this repo.

*All code snippets below are commands to run in terminal.*

1. Open terminal and change your directory until you are in this repository's directory.
1. Open your Text Editor, and open this repository as a project.
1. Pull down the latest code changes from GitHub.
    ```sh
    git checkout main
    git pull origin main
    ```
1. Create a new branch for your work.
    ```sh
    git checkout -b my-new-branch-name
    ```
1. Install npm packages again, just in case they changed.
    ```sh
    npm install
    ```
1. Create a new terminal window or tab and run the server there.
    ```sh
    npm start
    ```
1. Open your browser.  View the app in a new tab at `http://localhost:8080`.
1. Do any work that you need to do.  Save changes to the files, and eleventy should rebuild the site automatically and show the changes in the browser.
1. When you are done working, you can stage and commit your changes with git.
    ```sh
    git add .
    git commit -m 'Will add a good commit message about what this change does'
    ```
1. Push your branch to GitHub so you can open a new PR.
    If you cannot remember the current branch name, you can type `git status` to see the branch name.
    ```sh
    git push origin my-new-branch-name
    ```
1. Go to the [repository on GitHub](https://github.com/mysterycodesociety/mcs-web/).  You should see the branch you just pushed.  Click the 'Compare & pull request' button to make a new Pull Request.
1. On the Open a Pull Request page, type information a reviewer might need to review your work in the main body.  On the right hand menu, use the Settings icon in the Reviewers section to tag reviewers.  On the right hand menu, in the Label section add 'Code Review' as a label.  Click to Create Pull Request'.

## CSS Files

We use [Sass](https://sass-lang.com/) to write styles.  Any sass file (with extension `.scss`) in the assets/styles folder will get compiled to css and placed in the `_site/assets/styles` when you run `npm start` or `npm run-script build`.
