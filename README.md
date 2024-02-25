# Demonstrating a bug

This is a minimal reproduction for https://github.com/vlcn-io/js/issues/50

To see the issue:

1. Clone this repo
2. `cd vlcnbug`
3. `yarn`
4. `yarn dev`
5. Go to a browser and connect to the dev server (likely `https://localhost:8080/`)

The output when I do that:

```
No logger set! Using default logger.
info: Watching ./dbs/* for changes using polling: false {"service":"ws-server"}
2:32:11 PM [vite-express] Running in development mode
info listening on http://localhost:8080!
2:32:11 PM [vite-express] Using Vite to resolve the config file
info: upgrading to ws connection {"service":"ws-server"}

node:buffer:1343
      throw lazyDOMException('Invalid character', 'InvalidCharacterError');
      ^
DOMException [InvalidCharacterError]: Invalid character
    at new DOMException (node:internal/per_context/domexception:53:5)
    at __node_internal_ (node:internal/util:520:10)
    at atob (node:buffer:1343:13)
    at parseSecHeader (file:///Users/bhv1/Development/vlcnbug/.yarn/cache/@vlcn.io-ws-server-npm-0.2.3-c78b352b98-699685742a.zip/node_modules/@vlcn.io/ws-server/dist/index.js:80:21)
    at pullSecHeaders (file:///Users/bhv1/Development/vlcnbug/.yarn/cache/@vlcn.io-ws-server-npm-0.2.3-c78b352b98-699685742a.zip/node_modules/@vlcn.io/ws-server/dist/index.js:77:12)
    at Server.<anonymous> (file:///Users/bhv1/Development/vlcnbug/.yarn/cache/@vlcn.io-ws-server-npm-0.2.3-c78b352b98-699685742a.zip/node_modules/@vlcn.io/ws-server/dist/index.js:35:25)
    at Server.emit (node:events:526:35)
    at onParserExecuteCommon (node:_http_server:915:14)
    at onParserExecute (node:_http_server:809:3)

Node.js v18.17.0
```
