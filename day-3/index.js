const fs = require('fs').promises;

const priority = {}

const alphabet = [...Array(26)]
alphabet.forEach(x => priority[String.fromCharCode(i++)] = (i - 97), i=97);
alphabet.forEach(x => priority[String.fromCharCode(i++).toUpperCase()] = (i - 71), i=97);

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const roundOne = 
            data
            .split('\n')
            .map(letters => [
                [...letters.slice(0, letters.length / 2)],
                [ ...letters.slice(letters.length / 2, letters.length)]
            ])
            .flatMap(el => {
                const temp = 
                    el[0]
                    .filter(el0Letter => el[1].find(element => element === el0Letter))
                if (typeof temp[0] === "string") {
                    return temp[0];
                }
                return null;
            })
            .filter(el => el !== null)
            .reduce((acc, curr) => acc + priority[curr], 0);
        console.log(roundOne);
        
        const roundTwo = 
            data
            .split('\n')
            .reduce((acc, curr, idx, arr) => {
                if ((idx + 1) % 3 === 0) {
                    acc.push([ ...arr.slice(idx - 2, idx + 1)]);
                }
                return acc;
            }, [])
            .flatMap((elfs, idx) => {
                const elfZero = elfs[0].split('');
                const elfOne = elfs[1].split('');
                const elfTwo = elfs[2].split('');
                const temp = 
                elfTwo
                .filter(elf2Letter => elfOne.find(element => element === elf2Letter))
                const temp2 =
                elfZero
                .filter(elf0Letter => temp.find(element => element === elf0Letter))
                return temp2[0]
            })
            .reduce((acc, curr) => acc + priority[curr], 0);
            console.group(roundTwo)
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

readFile('data.txt');