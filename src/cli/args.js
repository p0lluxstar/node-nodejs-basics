const prefix = '--';
let res = '';

const parseArgs = () => {

    process.argv.forEach((arg, index) => {
        if (arg.startsWith(prefix)) {
            res += `${arg.substring(2)} is ${process.argv[index + 1]}, `;
        }
    });

    console.log(res.slice(0, -2));
};

parseArgs();