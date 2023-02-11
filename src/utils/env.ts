/**
 * It returns an object with all the properties of the `import.meta.env` object
 * @returns The object that is being returned is the object that is being returned by the function.
 */
export const getEnv = () => {
    import.meta.env;

    return {
        ...import.meta.env
    }
}