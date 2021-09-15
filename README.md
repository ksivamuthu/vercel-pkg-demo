# Vercel's pkg - Package your Node.js app into single executable

When we are developing Node.js application, it's totally make sense to install dev tools, dependencies to build and run an application. At the end, the user are interested in running the app and not the code and libraries developer integrate. In the Node.js world, it's getting tougher that - when we release the packages, the sources are also released along with the 100s of dependency code as node_modules. It brings the necessity of the package mechanism to build and distribute the node library as single executable - with runtime or as single file to run on already installed nodejs runtime.

### Building the Node.js project into single file - ncc

ncc - Simple CLI for compiling a Node.js module into a single file, together with all its dependencies, gcc-style.

Install the ncc using below command.

```docker
npm i -g @vercel/ncc
```

 Build the project using this simple command. It will outputs the Node.js compact build of app.js into dist/app.js

```docker
ncc build app.js -o dist
```

### Packaging the Node.js project into single executable - pkg

pkg - This command line interface enables you to package your Node.js project into an executable that can be run even on devices without Node.js installed.

Install the pkg using below command

```docker
npm install -g pkg
```

Run the pkg build targeting multiple platforms. It will create the executable in the dist directory

```docker
pkg -t node12-linux,node14-linux,node14-win index.js
```

**Targets**

`pkg` can generate executables for several target machines at a time. You can specify a comma-separated list of targets via `--targets` option. A canonical target consists of 3 elements, separated by dashes, for example `node12-macos-x64` or `node14-linux-arm64`:

- **nodeRange** (node8), node10, node12, node14, node16 or latest
- **platform** alpine, linux, linuxstatic, win, macos, (freebsd)
- **arch** x64, arm64, (armv6, armv7)

### Demo
