type GlobalOptions = {
  allowNew?: boolean;
  showAllSuggestions?: boolean;
  badgeStyle?: string;
  allowClear?: boolean;
  clearEnd?: boolean;
  server?: string;
  liveServer?: boolean;
  serverParams?: unknown;
  selected?: string;
  suggestionsThreshold?: number;
  validationRegex?: boolean|string;
  separator?: string;
  max?: boolean|number;
  placeholder?: string;
  clearLabel?: string;
  searchLabel?: string;
  valueField?: string;
  labelField?: string;
  keepOpen?: boolean;
  fullWidth?: boolean;
  debounceTime?: number;
  baseClass?: string;
  hidePlaceholder?: string;
}
export class Tags {
  constructor(el: HTMLSelectElement, globalOptions: GlobalOptions);
  /**
   * Attach to all elements matched by the selector
   */
  static init(selector: string, globalOptions: GlobalOptions): void;
  static getInstance(el: HTMLSelectElement): Tags;
  static debounce(func: Function, timeout?: number): Function;
  allowNew: boolean;
  showAllSuggestions: boolean;
  badgeStyle: string;
  allowClear: boolean;
  clearEnd: boolean;
  server: string;
  liveServer: boolean;
  serverParams: unknown;
  selected: string;
  suggestionsThreshold: number;
  validationRegex: boolean|string;
  separator: string;
  max: boolean|number;
  placeholder: string;
  clearLabel: string;
  searchLabel: string;
  valueField: string;
  labelField: string;
  keepOpen: boolean;
  fullWidth: boolean;
  debounceTime: number;
  baseClass: string;
  hidePlaceholder: string;
  _selectElement: HTMLSelectElement;
  _keyboardNavigation: boolean;
  _fireEvents: boolean;
  _searchFunc: Function;
  _initialValues: string[];
  overflowParent: HTMLElement;
  parentForm: HTMLElement;
  reset(): void;
  _holderElement: HTMLDivElement;
  _containerElement: HTMLDivElement;
  _dropElement: HTMLUListElement;
  _searchInput: HTMLInputElement;
  dispose(): void;
  resetState(): void;
  resetSuggestions(): void;
  _loadFromServer(show?: boolean): void;
  _abortController: AbortController;
  _getPlaceholder(): string;
  _configureDropElement(): void;
  _configureHolderElement(): void;
  _configureContainerElement(): void;
  _configureSearchInput(): void;
  _add(text: string, value?: string, data?: object): void;
  _moveSelectionUp(): HTMLElement;
  _moveSelectionDown(): HTMLElement;
  _calcTextWidth(text: string, size?: string): number;
  /**
   * Adjust the field to fit its content and show/hide placeholder if needed
   */
  _adjustWidth(): void;
  /**
   * Add suggestions to the drop element
   */
  _buildSuggestions(suggestions: string[]): void;
  _resetSearchInput(init?: boolean): void;
  getSelectedValues(): string[];
  /**
   * Show suggestions or search them depending on live server
   */
  _showOrSearch(): void;
  /**
   * The element create with buildSuggestions
   */
  _showSuggestions(): void;
  /**
   * The element create with buildSuggestions
   */
  _hideSuggestions(): void;
  _getBootstrapVersion(): number;
  /**
   * Find if label is already selected (based on attribute)
   */
  _isSelected(text: string): boolean;
  /**
   * Checks if value matches a configured regex
   */
  _validateRegex(value: string): boolean;
  getActiveSelection(): HTMLElement;
  removeActiveSelection(): void;
  removeAll(): void;
  removeLastItem(noEvents: boolean): void;
  isDisabled(): boolean;
  isInvalid(): boolean;
  isSingle(): boolean;
  canAdd(text: string, value?: string): boolean;
  /**
   * You might want to use canAdd before to ensure the item is valid
   */
  addItem(text: string, value?: string, data?: object): void;
  removeItem(value: string, noEvents?: boolean): void;
}