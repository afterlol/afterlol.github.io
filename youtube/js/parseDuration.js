'use strict';
export default function parseDuration(duration) {
    let result = duration;
    let hours, minutes, seconds;
    if (result.indexOf('H') === -1) {
        if (result.indexOf('M') === -1) {
            minutes = '00';
            result = result.split('T')[1];
            seconds = result.split('S')[0];
            if (seconds.length === 1) seconds = '0' + seconds;
            return minutes + ':' + seconds;
        }
        if (result.indexOf('S') === -1) {
            seconds = '00';
            result = result.split('T')[1];
            minutes = result.split('M')[0];
            if (minutes.length === 1) minutes = '0' + minutes;
            return minutes + ':' + seconds;
        }
        result = result.split('T')[1];
        minutes = result.split('M')[0];
        seconds = result.split('M')[1];
        seconds = seconds.split('S')[0];
        if (seconds.length === 1) seconds = '0' + seconds;
        if (minutes.length === 1) minutes = '0' + minutes;
        return minutes + ':' + seconds;
    } else {
        if (result.indexOf('M') === -1) {
            minutes = '00';
            result = result.split('T')[1];
            hours = result.split('H')[0];
            result = result.split('H')[1];
            seconds = result.split('S')[0];
            if (seconds.length === 1) seconds = '0' + seconds;
            if (hours.length === 1) hours = '0' + hours;
            return hours + ':' + minutes + ':' + seconds;
        }
        if (result.indexOf('S') === -1) {
            seconds = '00';
            result = result.split('T')[1];
            hours = result.split('H')[0];
            result = result.split('H')[1];
            minutes = result.split('M')[0];
            if (minutes.length === 1) minutes = '0' + minutes;
            if (hours.length === 1) hours = '0' + hours;
            return hours + ':' + minutes + ':' + seconds;
        }
        result = result.split('T')[1];
        hours = result.split('H')[0];
        result = result.split('H')[1];
        minutes = result.split('M')[0];
        seconds = result.split('M')[1];
        seconds = seconds.split('S')[0];
        if (seconds.length === 1) seconds = '0' + seconds;
        if (minutes.length === 1) minutes = '0' + minutes;
        if (hours.length === 1) hours = '0' + hours;
        return hours + ':' + minutes + ':' + seconds;
    }

}
