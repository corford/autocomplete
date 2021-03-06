This is a fork of https://github.com/kraaden/autocomplete with `selectOnTab` and `clipHeight` options added. Effort is made to shadow upstream changes and improvements so that this fork can be used as a simple drop-in replacement.

## Additional Options

You can pass the following extra options to `autocomplete`:

|Parameter|Description|Default|
|---|---|---|
|`selectOnTab`|Pressing the Tab key will trigger the `onSelect` function on the currently highlighted suggestion (this is in addition to the standard behaviour of triggering `onSelect` by pressing Enter or clicking on a suggestion).|`false`|
|`clipHeight`|If the suggestions do not fit in the viewport, clip the container's height to this many pixels (effectively setting a `maxHeight` property on the container). Note: if the container can fit completely within the viewport, `clipHeight` is ignored. If the container can be clipped to a height larger than clipHeight and still remain completely within the viewport, this will be done instead. By default, no height clipping is performed.|`none`|

For all other options, refer to the upstream project (or `readme.orig.md` in this repo).
