export const dynamicInterval = ({ core, counter = 0, delay = 300, callback }, ...rows) => {

    let _counter = counter;

    let interval = setInterval(() => {
        if ( rows.length && _counter === rows[0][0] ){
            clearInterval(interval);
            const _rows = [...rows];
            _rows.shift();
            dynamicInterval({ 
                core, 
                counter: _counter, 
                delay: rows[0][1], 
                callback
            }, ..._rows);
        } else {
            core();
            _counter++;
        }
    }, delay);

    callback(interval);

}