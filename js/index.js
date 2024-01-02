function sortArray(value) {
    document.getElementById('out').innerHTML = '';
    const xin = document.getElementById('arrval').value.split(',').map(Number);
    let sortarray;

    switch (value) {
        case 'bubble':
            sortarray = bubblesort(xin);
            break;
        case 'merge':
            sortarray = mergesort(xin);
            break;
        case 'selection':
            sortarray = selectionsort(xin);
            break;
        case 'heap':
            sortarray = heapsort(xin);
            break;
        case 'insertion':
            sortarray = insertionsort(xin);
            break;
        case 'quick':
            sortarray = quicksort(xin);
            break;
        default:
            sortarray = xin;
            break;
    }

    document.getElementById('out').innerHTML = sortarray.join(', ');
}
// BUBBLE SORT
function bubblesort(x) {
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x.length - i; j++) {
            if (x[j] > x[j + 1]) {
                let b = x[j];
                x[j] = x[j + 1];
                x[j + 1] = b;x
            }
        }
    }
    return x;
}
//selection sort
function selectionsort(x) {
    for (let i = 0; i < x.length - 1; i++) {
        let m = i;
        for (let j = i + 1; j < x.length; j++) {
            if (x[j] < x[m])
                m = j;
        }
        if (m != i) {
            let b = x[i];
            x[i] = x[m];
            x[m] = b;
        }
    }
    return x;
}
function insertionsort(x) {
    for (let i = 1; i < x.length; i++) {
        key = x[i];
        let j = i - 1;
        while (j >= 0 && x[j] > key) {
            x[j + 1] = x[j];
            j = j - 1;
        }
        x[j + 1] = key;
    }
    return x;
}
function mergesort(x) {

    if (x.length <= 1) {
        return x;
    }
    let m = Math.floor(x.length / 2);
    let xL = [];
    for (let i = 0; i < m; i++) {
        xL.push(x[i]);
    }
    let xR = [];
    for (let j = m; j < x.length; j++) {
        xR.push(x[j]);
    }

    x = merge(mergesort(xL), mergesort(xR));
    return x;

}

function merge(xL, xR) {

    let sortarray = [];
    let i = 0;
    let j = 0;
    let left = xL.length;
    let right = xR.length;

    while (i < left && j < right) {
        if (xL[i] < xR[j]) {
            sortarray.push(xL[i]);
            i++;
        } else {
            sortarray.push(xR[j]);
            j++;
        }

    }

    while (i < left) {
        sortarray.push(xL[i]);
        i++;
    }
    while (j < right) {
        sortarray.push(xR[j]);
        j++;
    }
    return sortarray;
}

function quicksort(x) {
    if (x.length <= 1) {
        return x;
    }                                                                              
    let p = x[0];
    let xL = [];
    let xR = [];
    for (let i = 1; i < x.length; i++) {
        if (x[i] < p) {
            xL.push(x[i]);
        }
        else {
            xR.push(x[i]);
        }
    }
    return [...quicksort(xL), p, ...quicksort(xR)];

}




