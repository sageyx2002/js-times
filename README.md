## timestamps.js

The library `timestamps.js` currently contains the functions listed below. Functionality of this library will be extended over time.

### relTime()

The `relTime()` function accepts a numerical parameter, which is expected to be a valid millisecond-precision UNIX-timestamp. Setting this parameter is optional, as this function will use the current time as default input, returning *"just now"* as output.

This function will return a string containing the relative value and respective unit, following this syntax: `in %VALUE% %UNIT%` and `%VALUE% %UNIT% ago` for future and past times respectively.

Passing UNIX timestamps in second instead of millisecond format, will return unexpected results. Unexpected results may also occur, if the function's parameter is an integer greater than the program can handle. In NodeJS this integer cannot be greater than `Number.MAX_SAFE_INTEGER`. This code has only been tested in **Node.js v16.13.1**.
