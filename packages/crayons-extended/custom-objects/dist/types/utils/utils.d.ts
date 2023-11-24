export declare function format(first: string, middle: string, last: string): string;
declare type handlerArg = (event?: KeyboardEvent) => void;
export declare const handleKeyDown: (handler: handlerArg, skipSpace?: boolean) => (e: KeyboardEvent) => void;
export declare const debounce: (fn: any, context: any, timeout?: number) => (...args: any[]) => void;
export {};
