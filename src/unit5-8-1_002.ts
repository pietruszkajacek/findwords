interface DataMatrix {
    dataString: string; 
    widthMatrix: number;
    heighMatrix: number;
}

type fnPredicate = (rowColNr: number, indexData: number) => boolean;

type rowColString = string;

/*
    BDTURKEYPIEEPHN
    EMASHEDPOTATOES
    EBIPCIOURSFOPGX
    FLBOWLFOKNIFELP
    SEDOBROCCOLIAAL
    TNFNORRMHYSUSSA
    EDPPERKLOROLLST
    WEFRYINGPANMEHE
    MRSALMONSTEAKYZ
*/
const data: DataMatrix = {
     dataString: "BDTURKEYPIEEPHNEMASHEDPOTATOESEBIPCIOURSFOPGXFLBOWLFOKNIFELPSEDOBROCCOLIAALTNFNORRMHYSUSSAEDPPERKLOROLLSTWEFRYINGPANMEHEMRSALMONSTEAKYZ",
     widthMatrix: 15,
     heighMatrix: 9
}

const slowka: Set<string> = new Set(
    [
        "beefstew",
        "broccoli",
        "butter",
        "chickennoodlesoup",
        "mashedpotatoes",
        "peas",
        "porkchop",
        "rolls",
        "salmonsteak",
        "tunasalad",
        "turkeypie",
        "blender",
        "bowl",
        "choppingboard",
        "cup",
        "fork",
        "fryingpan",
        "glass",
        "knife",
        "plate",
        "saucepan",
        "spoon",
        "teaspoon",
    ]
);

function getStr(data: DataMatrix, rowColNr: number, fnPred: fnPredicate): rowColString {
    let str: rowColString = "";
    for (let index = 0; index < data.dataString.length; index++) {
        if (fnPred(rowColNr, index)) {
            str += data.dataString[index];
        }
    }
    return str;
}

function getRowString(data: DataMatrix, rowNr: number): rowColString {
    return getStr(data, rowNr, (rowNr, indexData) => (Math.floor(indexData / data.widthMatrix) === rowNr - 1) ? true : false);
}

function getColumnString(data: DataMatrix, colNr: number): rowColString {
    return getStr(data, colNr, (colNr, indexData) => (indexData % data.widthMatrix === colNr - 1) ? true : false);
}

slowka.forEach((slowo) => {
    for (let i = 1; i <= data.heighMatrix; i++) {
        let pos = getRowString(data, i).indexOf(slowo.toUpperCase());
        if (pos >= 0) console.log(`${slowo}: poziomo ${i} ${pos + 1}`);
    }

    for (let i = 1; i <= data.widthMatrix; i++) {
        let pos = getColumnString(data, i).indexOf(slowo.toUpperCase());
        if (pos >= 0) console.log(`${slowo}: pionowo ${pos + 1} ${i} `);
    }

})

