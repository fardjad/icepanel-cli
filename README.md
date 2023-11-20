# icepanel-cli

> Unofficial CLI tool for [IcePanel](https://icepanel.io/).

This project has no affiliation with **IcePanel Technologies Inc.** I built
it to make my job easier.

### Requirements

1. Node.js >= 20
2. Unix-based OS (Linux, macOS, WSL, etc.)

## Installation

_Note: This project is in early development stage and is not published to npm yet._

```sh
git clone https://github.com/fardjad/icepanel-cli.git
npm link
```

## Usage

It's recommended to add the following two variables to your environment:

- `ICEPANEL_API_KEY`
- `ICEPANEL_LANDSCAPE_ID`

Then you can run `icepanel --help` and follow the usage prompts.

## Examples

_Note: Some of these examples use [jq](https://jqlang.github.io/jq/) for filtering the output._

### List all diagrams:

```sh
icepanel diagrams
```

### Run in interactive mode (asks for values of missing options):

```sh
icepanel --interactive objects
```

### List the name of all internal apps without an owner:

```sh
icepanel objects | jq 'map(select((.teamIds | length == 0) and (.type == "app") and (.external == false))) | .[].name'
```
