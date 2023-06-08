const date = new Date();                                        // creating a new date object
const time = date.getTime();                                    // getting the current UNIX time in milliseconds

function relTime(unix=time) {
    
    if (unix < 0) {                                             // UNIX timestamps can only be GTR 0, error is thrown if unix is LSS 0
        throw new Error("UNIX time cannot be less than 0");
    }

    const diff = time - unix;                                   // calculating difference || positive integer = past; negative integer = future
    const pdif = Math.abs(diff);                                // converting negative integers to positive integers

    if (diff === 0) {                                           // no difference -> return
        return `just now`                                       // this is fast-tracked to avoid calculations if not needed
    };

    const t = {                                                 // time table (milliseconds)
        s: 1000,                                                // [s]econd
        m: 60000,                                               // [m]inute
        h: 3600000,                                             // [h]our
        d: 86400000,                                            // [d]ay
        w: 604800000,                                           // [w]eek
        M: 2629756800,                                          // [M]onth  (average of 30.437 days a month)
        y: 31556952000                                          // [y]ear   (precisely 365.2425 days long)
    };

    const d = [t.s, t.m, t.h, t.d, t.w, t.M, t.y];              // array for the some() search
    var s = "s";                                                // sets the default string return to plural, adding an s in every return string

    if (d.some(val => pdif / val === 1) || pdif === 1) {        // if the string's value is 1 changes return string from plural to singular
        s = "";
    }

    const strings = {                                           // all necessary strings are stored here
        lu: `in ${pdif} millisecond${s}`,
        ls: `in ${Math.floor(pdif / t.s)} second${s}`,
        lm: `in ${Math.floor(pdif / t.m)} minute${s}`,
        lh: `in ${Math.floor(pdif / t.h)} hour${s}`,
        ld: `in ${Math.floor(pdif / t.d)} day${s}`,
        lw: `in ${Math.floor(pdif / t.w)} week${s}`,
        lM: `in ${Math.floor(pdif / t.M)} month${s}`,
        ly: `in ${Math.floor(pdif / t.y)} year${s}`,
        
        gu: `${pdif} millisecond${s} ago`,                            
        gs: `${Math.floor(pdif / t.s)} second${s} ago`,
        gm: `${Math.floor(pdif / t.m)} minute${s} ago`,
        gh: `${Math.floor(pdif / t.h)} hour${s} ago`,
        gd: `${Math.floor(pdif / t.d)} day${s} ago`,
        gw: `${Math.floor(pdif / t.w)} week${s} ago`,
        gM: `${Math.floor(pdif / t.M)} month${s} ago`,
        gy: `${Math.floor(pdif / t.y)} year${s} ago`
    };

    if (diff < 0) {                                             // comparison to determine whether the time is in the future relative to now
        if (pdif < t.s) {
            return strings.lu;
        } else if (pdif < t.m) {
            return strings.ls;
        } else if (pdif < t.h) {
            return strings.lm;
        } else if (pdif < t.d) {
            return strings.lh;
        } else if (pdif < t.w) {
            return strings.ld;
        } else if (pdif < t.M) {
            return strings.lw;
        } else if (pdif < t.y) {
            return strings.lM;
        } else {
            return strings.ly;
        };
    } else if (diff > 0) {                                      // comparison to determine whether the time is in the past relative to now
        if (pdif < t.s) {
            return strings.gu;
        } else if (pdif < t.m) {
            return strings.gs;
        } else if (pdif < t.h) {
            return strings.gm;
        } else if (pdif < t.d) {
            return strings.gh;
        } else if (pdif < t.w) {
            return strings.gd;
        } else if (pdif < t.M) {
            return strings.gw;
        } else if (pdif < t.y) {
            return strings.gM;
        } else {
            return strings.gy;
        };
    };
    
    return `null`;                                              // standard return - intellisense (string return) - this should not be seen if code executed successfully
}

module.exports = {
    relTime
};
