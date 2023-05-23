export function generateAuthError(data) {
    const result = [];
    Object.values(data).map((item) => result.push(item));
    return result;
}
