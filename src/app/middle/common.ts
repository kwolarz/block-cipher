export const hex2bin = (hex: string): string => {
    hex = '0x' + hex;
    hex = BigInt(hex).toString(2);
    return hex;
};
