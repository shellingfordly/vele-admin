const projectName = import.meta.env.VITE_GLOB_APP_TITLE;


export function throwError(message: string){
    throw new Error(`[${projectName} error]: ${message}`);
}