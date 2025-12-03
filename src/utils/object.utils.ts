export const isObjectEmpty = (obj: Record<string, any> | null | undefined): boolean => {
    if (!obj) return true;

    return Object.keys(obj).length === 0;
}


const objectUtils = { isObjectEmpty}
export default objectUtils
