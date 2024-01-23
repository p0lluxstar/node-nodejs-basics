const prefix = 'RSS_';
let res = '';

const parseEnv = () => {
    const rssVar = Object.keys(process.env).filter(key => key.startsWith(prefix));

    rssVar.forEach(el => {
        const value = process.env[el];
        res += `${el}=${value}; `
    });
    
    console.log(res.slice(0, -2));
};

parseEnv();