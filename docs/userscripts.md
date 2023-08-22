# PC7 Userscript Docs

Writing userscripts for PC7 is very similar to writing a traditional userscript.  
The structure of PC7 userscripts is designed to closely mimic traditional userscripts.

- [PC7 Userscript Docs](#pc7-userscript-docs)
	- [Metadata](#metadata)
		- [Example](#example)
		- [Userscript Template](#userscript-template)
	- [Traditional Utility Functions](#traditional-utility-functions)
	- [PC7 Utilities](#pc7-utilities)
		- [SettingsUtil](#adding-settings-menus-for-your-userscripts)
		- [Config](#config)

> Using PC7's userscript system to cheat or do anything that breaks [Krunker's Terms & Conditions](https://krunker.io/docs/terms.txt) is not allowed. In addition to violating Krunker's Terms & Conditions, this will also be considered a violation of PC7's Terms Of Service.<br>
> We reserve the right to terminate access to PC7 client and assume zero responsibility for anything that happens as a result of your misuse of this feature.
  
## Metadata

PC7 parses traditional userscript metadata comment blocks (commonly referred to as "Userscript Headers").

In your metadata block:  
- You are only required to provide the `@name` field, failure to provide this field will result in the script refusing to run.
- The `@run-at` field may have the following values:
  - `document-start`: The script will be injected as fast as possible.
  - `document-body`: The script will be injected when the body element exists.
  - `document-end`: The script will be injected when or after the DOMContentLoaded event was dispatched.
  - `document-idle`: The script will be injected after the gameLoaded event was dispatched (this is an event is fired by PC7).
  - If you do not provide one of these options it will default to `document-idle`, which runs after the game has loaded.
- The `@match` field is ignored as of now, but may be used in the future once support for social hub, viewer, and/or sandbox is added.  
- The `@grant` field is ignored as of now, but may be used in the future.  
- The `@resource` field is partially supported.  
  - **WARNING:** We do not currently support Tampermonkey's Subresource Integrity. Use at your own risk!
- The `@require` field is partially supported.  
  - **WARNING:** We do not currently support Tampermonkey's Subresource Integrity. Use at your own risk!
  - Depending on how quickly the fetch requests for your requires are, changes to your requires may not affect what is loaded and evaluated until the 2nd refresh following your changes.
  
All scripts will be run in the context that the game runs in (the equivalent of `@sandbox MAIN_WORLD`), meaning you do not need to set the `@sandbox` field.
Any aditional valid fields may be added, but will have no effect on the script.

For more information about what you can use in your userscript meta block read [Tampermonkey Docs](https://www.tampermonkey.net/documentation.php)
  
### Example

```js
// ==UserScript==
// @name         Hello World!!!
// @description  Prints Hello World To Console
// @author       AceSilentKill
// @match        *://krunker.io/*
// @grant        none
// @version      0.1 
// @run-at       document-start
// ==/UserScript==

console.log('Hello world!');
```
  
### Userscript Template

Copy this template to the top of your userscript to ensure PC7 will run it:  

```js
// ==UserScript==
// @name         The Script Name Goes Here
// @description  The Description Of The Script Goes Here
// @author       The Script's Author(s) Name Goes Here
// @match        *://krunker.io/*
// @grant        none
// @version      0.1 
// @run-at       document-start
// ==/UserScript==
```

## Traditional Utility Functions

Userscripts are provided with definitions for many of the [utilities that Tampermonkey would traditionally provide](https://www.tampermonkey.net/documentation.php).

- To maintain consistency with tampermonkey and ensure higher compatability with existing scripts, `unsafeWindow` is defined by PC7.
  - Your scripts are able to interact with `unsafeWindow` and `window` interchangeably.
- All Tampermonkey `GM_*` (grant) functions are defined by PC7.
  - Many of the `GM_*` functions are not yet supported and have been disabled (these will only return false).
    - Support for some of these disabled functions may be added in the future.
  - As a replacement for both `GM_xmlhttpRequest` and `GM_webRequest`, PC7 has defined `GM_fetch` (works the same as your standard fetch request would).
- `GM_META_INFO` is also defined by PC7. This will contain the parsed meta info from your script as an object. If you need to reference this info your script you may.

## PC7 Utilities

### Adding settings menus for your userscripts
PC7 provides userscripts with a utility function, `SettingsUtil`, that can be used to add settings menus to your userscripts. 
This can be used to easily manage userscript settings and prevent users of your script from needing to edit the file to configure settings.  

To use this utility, you may call `SettingsUtil` and provide it an object to use to generate the settings menu.

Example usage of this utility:
```js
SettingsUtil({
    'Name_Of_Settings_Header_1': {
        favoriteNumber: {
            title: 'Favorite Number',
            type: 'select',
            options: {
                none: 'I dont like numbers :(',
                correct: '20',
                incorrect: 'My opinion is wrong',
            },
            val: 'correct',
            desc: 'Select your favorite color out of the options provided',
        },
        favoriteColor: {
            title: 'Favorite Color',
            type: 'color',
            val: '#FFFFFF',
        },
        momsMaidenName: {
            title: 'What is your mothers maiden name?',
            type: 'text',
            val: '',
        },
        coolCheckbox1: {
            title: 'Checkbox With Refresh Required',
            type: 'checkbox',
            val: false,
            refresh: true
        },
        coolCheckbox2: {
            title: 'Checkbox With Restart Required',
            type: 'checkbox',
            val: false,
            restart: true
        },
    },
});
```

The basic structure of the object passed to `SettingsUtil` must be consistent with the example above

- The object passed to `SettingsUtil` will have have objects inside of it that contain settings entries
  - These "container objects" function as the settings headers within the settings menu
- You may end up referencing the header names in dot notation in order to access specific settings entries made by this utility (EX: `config.get('script1.Name_Of_Settings_Header_1.coolCheckbox1', false)`)
  - It is *NOT RECOMMENDED* to use any whitespace in the header names!
  - You should replace all spaces in header names with underscores (`_`)
  - All underscores will be replaced with spaces in the settings UI generated by `SettingsUtil`

- The settings entries will be properties of their respective header object
  - The key of the settings entry will be how you access it via the `config`
- The settings entries can have the many different properties
  - `title`: The name displayed on the settings entry
  - `type`: The type of setting entry
    - Allowed values: `checkbox`, `select`, `text`, or `color`
    - If you set the `type` to `select`, make sure you also define the options for your settings entry
  - `val`: The default value of the settings entry
  - `desc`: The description of the setting (optional)
  - `refresh`: Setting this to true will add a refresh indicator to the settings entry (optional)
  - `restart`: Setting this to true will add a restart indicator to the settings entry (optional)

This function can only be called a single time.
If you use `SettingsUtil`, you should run the function as close to the start of your script as possible.

### Config
PC7 provides userscripts with a utility object, `config`, that contains three properties that allow you to interact with the client config file:
- `config.get(key, defaultValue)`
  - `key` is the config key you wish to get
  - `defaultValue` is the value returned if the config does not have the item you requested
  - This function returns the value of the provided `key` in the config, or the `defaultValue` if the key does not exist
- `config.set(key, value)`
  - `key` is the config key you wish to set
  - `value` is the value that you wish to assign to the config entry with the `key` argument
- `config.has(key)`
  - `key` is the config key you wish to check
  - This function returns a boolean indicating whether or not the provided key exists in the config

Example usage of this utility:
```js
config.set('yesnt', 20); // Sets our config entry for 'yesnt' to 20
console.log(config.get('yesnt', 30)); // Outputs: 20
```
 
