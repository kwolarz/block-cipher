import * as A from './arrays';
import * as C from './common';

const permute = (k: string, kp: number[], n: number): string => {
    let permutation: string = '';
    for(let i = 0; i < n; i++) {
      permutation += k[kp[i] - 1];
    }

    return permutation;
}

const shiftLeft = (k: string, n: number): string => {
    let s = '';
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < k.length; j++) {
            s += k[j];
        }
        s += k[0];
        k = s;
        s = '';
    }
    
    return k;
};

const xor = (a: string, b: string): string => {
    let ans = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            ans += '0';
        } else {
            ans += '1';
        }
    }

    return ans;
};

const processKey = (k: string): string[] => {
    const key = k;
    const binKey = C.hex2bin(key);
    const permuteKey = permute(binKey, A.KP, 56);
    const leftKey = permuteKey.substr(0, 28);
    const rightKey = permuteKey.substr(28, 56);

    const roundKeys: string[] = [];
    for (let i = 0; i < 16; i++) {
        const left = shiftLeft(leftKey, A.ST[i]);
        const right = shiftLeft(rightKey, A.ST[i]);
        const combineStr = left + right;

        const roundKey = permute(combineStr, A.KC, 48);
        roundKeys.push(roundKey);
    }
    return roundKeys;
};

const encrypt = (pT: string, roundKeys: string[]): string => {
    const plainText = C.hex2bin(pT);
    const permutePT = permute(plainText, A.IP, 64);

    const leftPT = permutePT.substr(0, 32);
    const rightPT = permutePT.substr(32, 64);
    for (let i = 0; i < 16; i++) {
        const rightExpanded = permute(rightPT, A.exoD, 48);
        const xorX = xor(rightExpanded, roundKeys[i]);
        let sboxString = '';
        // for (let j = 0; j < 8; j++) {
        //     const row = 
        // }
    }
    
    return pT;
};

export const des = (pT: string, k: string, encrypt: boolean): string => {
    const pK = processKey(k);
    const roundKeys = encrypt ? pK : pK.reverse();

    return 'key';
}