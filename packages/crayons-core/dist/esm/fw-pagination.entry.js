import { r as registerInstance, c as createEvent, h, i as Host } from './index-f21e28a1.js';
import { T as TranslationController } from './Translation-e52da6d2.js';

const paginationCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.current-record{color:#6f7c87;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:14px;margin-inline-end:14px;line-height:20px;font-size:14px}.current-record .record{font-weight:700}";

const Pagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwChange = createEvent(this, "fwChange", 7);
    /**
     * The current page number.
     */
    this.page = 1;
    /**
     *The number of records to be shown per page. Defaults to 10.
     */
    this.perPage = 10;
    /**
     * Aria Label to be used for the button group.
     */
    // @i18n({ keyName: 'pagination.buttonGroupLabel' })
    this.buttonGroupLabel = '';
    /**
     * Aria Label to be used for previous button.
     */
    // @i18n({ keyName: 'pagination.previousButtonLabel' })
    this.previousButtonLabel = '';
    /**
     * Aria Label to be used for next button.
     */
    // @i18n({ keyName: 'pagination.nextButtonLabel' })
    this.nextButtonLabel = '';
    /**
     * Indicates if the records in current page are being fetched.
     */
    this.isLoading = false;
  }
  /**
   * Navigates to previous set of records if available.
   */
  async previousPage() {
    this.goToPrevious();
  }
  /**
   * Navigates to next set of records if available.
   */
  async nextPage() {
    this.goToNext();
  }
  getLastPage() {
    return Math.ceil(this.total / this.perPage);
  }
  getStartRecord() {
    return Math.max((this.page - 1) * this.perPage + 1, 1);
  }
  getEndRecord() {
    return Math.min(this.start + this.perPage - 1, this.total);
  }
  handlePage(page) {
    if (page > this.getLastPage())
      return;
    this.start = this.getStartRecord();
    this.end = this.getEndRecord();
  }
  handleTotal() {
    this.end = this.getEndRecord();
  }
  componentWillLoad() {
    this.page = Math.min(this.page, this.getLastPage());
    this.start = this.getStartRecord();
    this.end = this.getEndRecord();
  }
  goToPrevious() {
    this.page = Math.max(1, this.page - 1);
    this.fwChange.emit({
      page: this.page,
    });
  }
  goToNext() {
    this.page = Math.min(this.getLastPage(), this.page + 1);
    this.fwChange.emit({
      page: this.page,
    });
  }
  render() {
    return (h(Host, null, h("div", { class: 'current-record', innerHTML: TranslationController.t('pagination.content', {
        start: this.start,
        end: this.end,
        total: this.total,
      }) }), h("fw-button-group", { label: this.buttonGroupLabel ||
        TranslationController.t('pagination.buttonGroupLabel') }, h("fw-button", { disabled: this.start === 1 || this.isLoading, color: 'secondary', size: 'icon', "aria-label": this.previousButtonLabel ||
        TranslationController.t('pagination.previousButtonLabel'), onFwClick: () => this.goToPrevious() }, h("fw-icon", { name: 'chevron-left' })), h("fw-button", { disabled: this.end === this.total || this.isLoading, color: 'secondary', size: 'icon', "aria-label": this.nextButtonLabel ||
        TranslationController.t('pagination.nextButtonLabel'), onFwClick: () => this.goToNext() }, h("fw-icon", { name: 'chevron-right' })))));
  }
  static get watchers() { return {
    "page": ["handlePage"],
    "total": ["handleTotal"]
  }; }
};
Pagination.style = paginationCss;

export { Pagination as fw_pagination };
