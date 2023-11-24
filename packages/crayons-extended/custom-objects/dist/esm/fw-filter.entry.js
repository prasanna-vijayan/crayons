import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f435cf58.js';
import { T as TranslationController } from './Translation-7ee0e3b3.js';
import { h as handleKeyDown } from './utils-06a7316a.js';
import { v as v4 } from './v4-86675613.js';
import './index-fb937839.js';

const filterCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}.filter{display:block;height:100%}.filter .add-filter{display:inline-block;color:#2c5cc5;line-height:20px;font-weight:600;font-size:14px;cursor:pointer}.filter-action{-webkit-margin-before:12px;margin-block-start:12px}.filter-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}";

const Filter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwFilterChange = createEvent(this, "fwFilterChange", 7);
    this.identifier = v4();
    this.sourceFilterOptions = [];
    this.filterConditions = {};
    this.showSearch = true;
    /**
     * Data for the filter ex., { hotel_name: { text: 'Hotel Name', type: 'TEXT' }, hotel_rating: {} }
     */
    this.filters = {};
    /**
     * The condition schema
     */
    this.conditionSchema = {};
  }
  onSelection(e) {
    const { value, id, meta } = e.detail;
    if (id === 'searchDropdown') {
      const { value: filterOn } = meta.selectedOptions[0];
      // Remove the selected item from the search dropdown.
      this.filterOptions = this.filterOptions.filter((filter) => filter.value !== value);
      const { type } = this.filters[filterOn];
      if (!type) {
        throw Error(`Filter type is not defined for ${filterOn}`);
      }
      else if (!this.conditionSchema[type]) {
        throw Error(`Condition schema type is not defined for ${type}`);
      }
      // Add the selected item to refresh the UI state.
      this.filterConditions[filterOn] = {};
      this.filterConditions = Object.assign({}, this.filterConditions);
      e.stopImmediatePropagation();
      e.stopPropagation();
      this.showSearch = false;
    }
  }
  onConditionDelete(e) {
    const deletedFilter = e.detail.value;
    delete this.filterConditions[deletedFilter];
    this.setFilterOptions(Object.keys(this.filterConditions));
    this.emitFilterSelection(this.filterConditions);
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
  onFiltersChange(newValue) {
    this.setFilterOptions(newValue);
  }
  onFilterConditions(newValue) {
    this.emitFilterSelection(newValue);
  }
  async getValue() {
    const conditions = {};
    const filterConditions = Array.from(this.host.shadowRoot.querySelectorAll('fw-filter-condition'));
    const conditionPromises = filterConditions.map((conditionElement) => {
      return conditionElement.isValid().then((valid) => {
        if (valid) {
          return Promise.resolve((conditions[conditionElement.filterOn] = {
            condition: conditionElement.selectedCondition,
            value: conditionElement.valueState,
          }));
        }
        return Promise.reject('Invalid Filter');
      });
    });
    return Promise.all(conditionPromises)
      .then(() => {
      const orderedCondition = this.orderCondition(conditions);
      this.saveCurrentState(orderedCondition);
      return Promise.resolve(orderedCondition);
    })
      .catch((e) => {
      return Promise.reject(e);
    });
  }
  async clearFilter() {
    this.filterOptions = this.sourceFilterOptions;
    this.filterConditions = {};
    this.initialFilterConditions = {};
    this.showSearch = true;
  }
  async resetFilter() {
    this.sourceFilterOptions.length > 0 && this.loadSavedState();
  }
  orderCondition(conditions) {
    return Object.keys(this.filterConditions).reduce((acc, filterOn) => {
      acc[filterOn] = conditions[filterOn];
      return acc;
    }, {});
  }
  isFiltersAvailable() {
    return (this.filterConditions && Object.keys(this.filterConditions).length > 0);
  }
  setSourceFilterOptions(filters) {
    this.sourceFilterOptions = Object.keys(filters).map((filter) => {
      return Object.assign(Object.assign({}, filters[filter]), { value: filter });
    });
  }
  getDefaultCondition(conditionSchema) {
    return Object.keys(conditionSchema).filter((condition) => {
      return conditionSchema[condition].default;
    })[0];
  }
  emitFilterSelection(selectedFilters) {
    const filters = selectedFilters ? Object.keys(selectedFilters) : [];
    this.fwFilterChange.emit({ filters });
  }
  setInitialState(value) {
    this.initialFilterConditions = Object.assign({}, value) || {};
    this.filterConditions = Object.assign({}, this.initialFilterConditions);
    this.setFilterOptions(this.filterConditions);
  }
  saveCurrentState(newValue) {
    this.initialFilterConditions = Object.assign({}, newValue);
  }
  loadSavedState() {
    this.filterConditions = Object.assign({}, this.initialFilterConditions);
    this.setFilterOptions(this.filterConditions);
    this.identifier = v4();
  }
  setFilterOptions(value) {
    const selectedFilters = Object.keys(value);
    if (selectedFilters.length > 0) {
      this.filterOptions = this.sourceFilterOptions.filter((filter) => !selectedFilters.includes(filter.value));
      this.showSearch = false;
    }
    else {
      this.filterOptions = this.sourceFilterOptions;
      this.showSearch = true;
    }
  }
  renderContent(filterConditions) {
    return Object.keys(filterConditions).map((filterOn) => {
      const { text: filterText, type, controlProps } = this.filters[filterOn];
      const conditionSchema = this.conditionSchema[type];
      const { value, condition = this.getDefaultCondition(conditionSchema) } = filterConditions[filterOn];
      const defaultProps = {
        conditionSchema,
        filterOn,
        filterText,
        controlProps,
        value,
        condition,
        identifier: this.identifier,
      };
      return (h("fw-filter-condition", Object.assign({ key: filterOn }, defaultProps)));
    });
  }
  componentWillLoad() {
    this.setSourceFilterOptions(this.filters);
    this.setInitialState(this.value);
  }
  render() {
    return (h("div", { class: 'filter' }, this.isFiltersAvailable() && (h("div", { class: 'filter-content' }, this.renderContent(this.filterConditions))), h("div", { class: 'filter-action' }, this.showSearch ? (h("fw-search-dropdown", { id: 'searchDropdown', options: this.filterOptions })) : (this.filterOptions.length !== 0 && (h("span", { class: 'add-filter', role: 'button', tabIndex: 0, onClick: () => {
        this.showSearch = true;
      }, onKeyDown: handleKeyDown(() => {
        this.showSearch = true;
      }) }, TranslationController.t('filters.addFilter'))))), !this.isFiltersAvailable() && (h("slot", { name: 'filter-empty-state' }, h("div", { style: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      } }, h("span", null, TranslationController.t('filters.noFilter')))))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "filters": ["onFiltersChange"],
    "filterConditions": ["onFilterConditions"]
  }; }
};
Filter.style = filterCss;

export { Filter as fw_filter };
