export interface RouteObject {
    path?: string;
    element?: React.ReactNode;
    exact?: boolean
    // children?: RouteObject[];
}


export interface ITodo {
    id?: number,
    title: string,
    description: string,
    status?: string
}

export interface IStatus {
    label?: string,
    value?: string,
    disabled?: boolean,
}