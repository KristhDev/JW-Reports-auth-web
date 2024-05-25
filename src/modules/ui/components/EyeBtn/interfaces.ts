/* Defining the type of the props that the component will receive. */
export interface EyeBtnProps {
    value: boolean;
    onToggle: (value: boolean) => void;
}