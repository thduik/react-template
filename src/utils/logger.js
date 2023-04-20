const enableLog = true;

const loggerLog = (args) => {
    if (!enableLog) {
        console.log("log disabled");
        return;
    }

    console.log(args);
}

module.exports = loggerLog;