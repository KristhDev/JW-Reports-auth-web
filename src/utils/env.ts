/**
 * If the process object exists, return a copy of the process.env object, otherwise return a copy of
 * the import.meta.env object
 * @returns The object returned is a copy of the environment variables.
 */
export const getEnv = () => {
    return (typeof process !== 'undefined')
        ? { ...process.env }
        : { ...import.meta.env }
}