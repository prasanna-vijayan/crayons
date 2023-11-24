/// <reference types="react" />
import { EventEmitter } from '../../stencil-public-runtime';
export declare class Datepicker {
  showDatePicker: boolean;
  year: any;
  toYear: string;
  monthDetails: any;
  nextMonthDetails: any;
  month: any;
  todayTimestamp: any;
  selectedDay: any;
  startDate: any;
  endDate: any;
  startDateFormatted: any;
  endDateFormatted: any;
  dateHovered: any;
  supportedYears: any;
  toMonth: number;
  firstFocusElement: HTMLElement;
  lastFocusElement: HTMLElement;
  popoverContentElement: HTMLElement;
  langModule: any;
  shortMonthNames: any;
  longMonthNames: any;
  weekDays: any;
  hasHintTextSlot: boolean;
  hasWarningTextSlot: boolean;
  hasErrorTextSlot: boolean;
  timeValue: string;
  dateFormat: string;
  selectedTime: any;
  timepickerDate: any;
  host: HTMLElement;
  /**
   *   Type of date selection enabled for the calendar. If the value is range, a user can select a date range in the calendar.
   */
  mode: 'single date' | 'range';
  /**
   *   Earliest date a user can select in the calendar, if mode is range. Must be a valid ISO date format if set.
   */
  minDate: string;
  /**
   *   Latest date a user can select in the calendar, if mode is range. Must be a valid ISO date format if set.
   */
  maxDate: string;
  /**
   *   Starting date of the date range that is preselected in the calendar, if mode is range. Must be a date later than the min-date value and valid ISO date format.
   */
  fromDate: string;
  /**
   *   Ending date of the date range that is preselected in the calendar, if mode is range. Must be a date earlier than the max-date value and valid ISO date format.
   */
  toDate: string;
  /**
   *   Format in which the date values selected in the calendar are populated in the input box. Defaults to the locale specific display format.
   */
  displayFormat: string;
  /**
   *   Date that is preselected in the calendar, if mode is single date or undefined. If set this must be valid ISO date format.
   */
  value: string;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   *   Text displayed in the input box before a user selects a date or date range.
   */
  placeholder: string;
  updateText: string;
  cancelText: string;
  /**
   * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  required: boolean;
  /**
   * Theme based on which the input of the datepicker is styled.
   */
  state: 'normal' | 'warning' | 'error';
  /**
   * Minimum year that needs to be displayed in the year dropdown.
   */
  minYear: number;
  /**
   * Maximum year that needs to be displayed in the year dropdown.
   */
  maxYear: number;
  /**
   *   Locale for which datepicker needs to be shown. Defaults to browser's current locale.
   */
  locale: string;
  /**
   * Make the input box as readonly. Default `false`
   */
  readonly: boolean;
  /**
   * Make the datepicker box as disabled. Default `false`
   */
  disabled: boolean;
  /**
   * Indicates if footer needs to be shown. Default `true`.
   */
  showFooter: boolean;
  /**
   * Displays a clear icon in the text box. Clicking the icon clears the value. Default `false`
   */
  clearInput: boolean;
  /**
   * Hint text displayed below the text box.
   */
  hintText: string;
  /**
   * Warning text displayed below the text box.
   */
  warningText: string;
  /**
   * Error text displayed below the text box.
   */
  errorText: string;
  /**
   * Label displayed on the interface, for the component.
   */
  label: string;
  /**
   * Whether the time-picker should be shown in the date-picker. Supports single date picker only.
   */
  showTimePicker: boolean;
  /**
   * The props for the time picker. Refer the fw-timepicker for valid format.
   */
  timeProps: {};
  /**
   * The format of time picker .
   */
  timeFormat: string;
  /**
   * Debounce timer for date input.
   */
  debounceTimer: number;
  /**
   * Displays alert icon and tooltip when user inputs an invalid date in the textbox. Default value is true.
   */
  showErrorOnInvalidDate: boolean;
  /**
   * Error text displayed on the tooltip for invalid date inputs.
   */
  tooltipErrorText: any;
  /**
   * To make the datepicker occupy full width of the container. Default value is false.
   */
  fullWidth: boolean;
  /**
   * Option to prevent the tooltip from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`.
   */
  hoistTooltip: boolean;
  /**
   * Triggered when the update button clicked
   */
  fwChange: EventEmitter;
  /**
   * Triggered when the input box loses focus.
   */
  fwBlur: EventEmitter;
  /**
   * Triggered when text is entered in  input box.
   */
  fwDateInput: EventEmitter;
  private escapeHandler;
  private madeInert;
  private nativeInput;
  private isDisplayFormatSet;
  private isPlaceholderSet;
  private langChangRemoveListener;
  private isNextMonthRestricted;
  private isPrevMonthRestricted;
  private isDateInvalid;
  private initState;
  private isDateWithinMinDate;
  private isDateWithinMaxDate;
  private clickedDateValue;
  private makeDatePickerInert;
  private emitEvent;
  focusElement(element: HTMLElement): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  private formatDate;
  /**
   * Returns the date value in ISO format.
   */
  getValue(): Promise<string | {
    fromDate: string;
    toDate: string;
  }>;
  /**
   * Sets focus on a specific `fw-datepicker`. Use this method instead of the global `input.focus()`.
   */
  setFocus(): Promise<void>;
  /**
   * Clears the input value and unselects selected date.
   */
  clearValue(): Promise<void>;
  handleKeyDown(event: KeyboardEvent): void;
  displayDatePicker(): void;
  handleButtonClick(e: any): void;
  /**
   * Listener to handle input changes
   */
  handleInputChanges(e: any): void;
  /**
   * Listener to handle Month Year dropdown.
   */
  handleMonthYearDropDownSelection(e: any): void;
  handleInputChangeWithDebounce: (...args: any[]) => void;
  handleSingleDateDropDownUpdate(e: any, newValue: any): void;
  handleDateRangeDropDownUpdate(e: any, newValue: any): void;
  yearCalculation(year: any, offset: any): any;
  getSupportedYears: () => any[];
  getFormatFromLocale(): string;
  handleLocaleChange(newLocale: any): Promise<void>;
  handleMinDateChange(): void;
  handleMaxDateChange(): void;
  handleUserTimeZoneOffset(date: any): number;
  componentWillLoad(): Promise<void>;
  setInitialValues(): void;
  setDateAndErrorState(checkDate?: boolean): void;
  setMinMaxYearAndDateValues(): void;
  processInitDateValue(): void;
  processRangeValueChange(val: any, emitChange?: boolean): void;
  processValueChange(val: any, emitChange?: boolean): void;
  watchValueChanged(value: any): void;
  setTimepickerDate: () => string;
  isValidDateTime: () => boolean;
  formatDateTime: () => string;
  getDayDetails: (args: any) => {
    date: number;
    day: number;
    month: number;
    timestamp: number;
  };
  private _getValidDateInMonth;
  private getMonthDetails;
  isDateWithinMinMaxDate(date: any, checkYear?: boolean): boolean;
  isDatewithinRange(fromDate: any, toDate: any): boolean;
  checkYearRestriction(): void;
  setMonth: (offset: any) => void;
  isCurrentDay: (day: any) => boolean;
  isSelectedDay: ({ date, timestamp }: {
    date: any;
    timestamp: any;
  }) => boolean;
  handleDateHover: (day: any) => void;
  handleKeyUp(e: any, day: any): void;
  isInRange: ({ timestamp }: {
    timestamp: any;
  }) => boolean;
  isHoverInRange({ timestamp }: {
    timestamp: any;
  }): boolean;
  updateValueAndEmitEvent(e: any): void;
  onDateClick: (e: any, { date, timestamp }: {
    date: any;
    timestamp: any;
  }) => void;
  clearInputValue(): void;
  handleInputClear: (e: any) => void;
  handlePopoverClose: (e: any) => void;
  renderInvalidAlert(): any;
  private handleRangeSelection;
  getCellStyle(day: any): string;
  private renderCalendar;
  private showSingleDatePicker;
  private showDateRangePicker;
  private onBlur;
  checkSlotContent(): void;
  renderNavButtons(): JSX.Element;
  renderSupportedYears(chosenYear: any): any;
  renderFooter(): JSX.Element;
  renderTimePicker(): JSX.Element;
  render(): JSX.Element;
}
