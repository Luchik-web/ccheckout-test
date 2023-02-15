------------------------------------------------------------------------------------------------------------------------

* [ABOUT](#ABOUT)
* [INITIAL REQUIREMENTS](#INITIAL-REQUIREMENTS)
* [NPM BASE COMMANDS](#NPM-BASE-COMMANDS)
    * [Install the dependencies](#Install-the-dependencies)
    * [Update comfy core](#Update-comfy-core)
    * [Start the app in development mode (hot-code reloading, error reporting, etc.)](#Start-the-app-in-development-mode-hot-code-reloading-error-reporting-etc)
    * [Start the app in development mode with .env-prod](#Start-the-app-in-development-mode-with-env-prod)
    * [Build app for production](#Build-app-for-production)
    * [Lint the files](#Lint-the-files)
    * [Format the files](#Format-the-files)
    * [Build the app for production](#Build-the-app-for-production)
    * [Run unit tests](#Run-unit-tests)
    * [Add new store](#Add-new-store)

------------------------------------------------------------------------------------------------------------------------

# ABOUT

Selected technologies:

* Quasar Framework
* Vue
* Vite
* Vitest

------------------------------------------------------------------------------------------------------------------------

# INITIAL REQUIREMENTS

The App was set up with
Node    19.0.1
Npm     8.19.2

To work properly next dependencies should be installed globally

```bash
# Install quasar cli
npm install -g @quasar/cli
# Install vitest
npm install -g vitest


npm i -g eslint
```

To customize the configuration see [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

------------------------------------------------------------------------------------------------------------------------

# NPM BASE COMMANDS

## Install the dependencies
```bash
npm install
```

## Update comfy core
```bash
npm run ucore
```

## Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev
```

## Start the app in development mode with .env-prod
```bash
npm run dev:prod
```

## Build app for production
```bash
npm run build
```

## Lint the files
```bash
npm run lint
```

## Format the files
```bash
npm run format
```

## Run unit tests
```bash
npm run test:unit
```

## Add new store
```bash
quasar new store cart --format ts
```

<!-- ------------------------------------------------------------------------------------------------------------------------

# UPDATE CURRENT CORE

## Update current src/core with comfy-core:master
```bash
npm run update-core
```
Replace current /src/core folder with latest comfy-core:master core version

## Push current src/core to comfy-core:{localBranch}
```bash
npm run push-core
```
- Create new branch in comfy-core with the same name as current working project branch
- Copy local core folder to comfy-core
- Push new branch to comfy-core

## Update current src/core with comfy-core:{localBranch}
```bash
npm run pull-core
```
- Checkout comfy-core to current branch name
- Replace current /src/core folder with latest comfy-core:{localBranch} core version

## Clear comfy-core cache
```bash
npm run clear-core
```
- Clear ~/comfy-core folder in user's home directory

------------------------------------------------------------------------------------------------------------------------

# UPDATE CURRENT CORE

## Update version tag

Major

```bash
npm run update-version major
```

Minor

```bash
npm run update-version minor
```

Patch

```bash
npm run update-version patch
```
 -->
