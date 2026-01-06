type ZapperPlacement = {
    left: string;
    top: string;
};

function parseZapperLayoutCsv(rawCsv: string): Array<ZapperPlacement> {
    const zappers: Array<ZapperPlacement> = [];
    const lines = rawCsv.trim().split("\n");
    lines.forEach((line: string, lineNumber: number)=> {
        const cells = line.trim().split(",");
        cells.forEach((cell: string, cellNumber: number)=> {
            if (cell.trim() == "Z") {
                zappers.push({
                    left: 5 * cellNumber + "vw",
                    top: 5 * lineNumber + "vw"
                });
            }
        });
    });
    return zappers;
}

export {
    parseZapperLayoutCsv,
};
