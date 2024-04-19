

export const pathJoin = (...parts: string[]): string => {

    let res =  parts.join('/').replace(new RegExp('/' + '{1,}', 'g'), '/');

    res = res.replace(/http:/g, 'http:/');
    res = res.replace(/https:/g, 'https:/');


    return res;
}


