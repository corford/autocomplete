export interface AutocompleteItem {
    label?: string;
    group?: string;
}
export interface AutocompleteSettings<T extends AutocompleteItem> {
    input: HTMLInputElement;
    render?: (item: T, currentValue: string) => HTMLDivElement | undefined;
    renderGroup?: (name: string, currentValue: string) => HTMLDivElement | undefined;
    className?: string;
    minLength?: number;
    emptyMsg?: string;
    onSelect: (item: T, input: HTMLInputElement) => void;
    fetch: (text: string, update: (items: T[]) => void) => void;
    debounceWaitMs?: number;
    selectOnTab?: boolean;
    clipHeight?: number;
}
export interface AutocompleteResult {
    destroy: () => void;
}
export default function autocomplete<T extends AutocompleteItem>(settings: AutocompleteSettings<T>): AutocompleteResult;
