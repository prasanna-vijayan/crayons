'use strict';

var datepicker = {
	cancel: "Cancel",
	update: "Update",
	to: "to",
	date: "Date",
	time: "Time",
	tooltipError: "Please enter a valid date or format"
};
var dropdown = {
	add: "Add",
	cancel: "Cancel"
};
var fileUploader = {
	text: "Upload file",
	description: "or drag and drop here",
	acceptError: "Upload CSV files only.",
	maxFileSizeError: "File size exceeded.",
	maxFilesLimitError: "File limit exceeded.",
	fileUploadError: "File upload failed",
	uploading: "Uploading",
	selectedFiles: "Selected files",
	remove: "Remove"
};
var fileUploader2 = {
	attachFiles: "Attach files",
	text: "<span class='highlight'>Upload file</span> or drag and drop",
	description: "or drag and drop here",
	acceptError: "File format not supported",
	maxFileSizeError: "File size exceeded",
	maxFilesLimitError: "File limit exceeded",
	totalFileSizeAllowedError: "Total file size limit exceeded",
	fileUploadError: "Failed to upload",
	uploading: "Uploading",
	selectedFiles: "Selected files",
	remove: "Remove",
	retry: "Retry",
	removeFromLibrary: "Remove from library",
	saveInLibrary: "Save in library",
	uploadDifferentFile: "Upload a different file"
};
var modal = {
	cancel: "Cancel",
	ok: "OK"
};
var search = {
	search: "Search",
	noItemsFound: "No items found",
	noDataAvailable: "No data available",
	startTyping: "Start typing..."
};
var form = {
	required: "{{field}} is required",
	invalidUrl: "Enter a valid URL",
	invalidEmail: "Enter a valid email",
	invalidNumber: "Enter a valid number"
};
var pagination = {
	buttonGroupLabel: "Pagination controls",
	previousButtonLabel: "Previous",
	nextButtonLabel: "Next",
	content: "<span class='record'>{{start}}</span> to <span class='record'>{{end}}</span> of {{total}}"
};
var datatable = {
	chooseColumns: "Choose columns",
	actions: "Actions",
	hide: "Hide",
	show: "Show",
	showMore: "Show more",
	showLess: "Show less",
	customizeColumns: "Customize columns"
};
var platformTable = {
	"delete": "Delete",
	sortby: "Sort by",
	orderby: "Order by"
};
var formBuilder = {
	fieldRequiredResolveConv: "Required when resolving the conversation",
	fieldRequired: "Required when submitting the form",
	fieldRequiredTag: "Required",
	fieldUnique: "Accept unique value for every record",
	fieldUniqueHoverText: "No two records can have the same value for this field. You will not be able to change this setting later.",
	fieldUniqueTag: "Unique",
	fieldFilter: "Use this field to filter records",
	fieldFilterHoverText: "Filter your list of records using this field. You will not be able to change this setting later.",
	fieldFilterTag: "Filterable",
	fieldTypeRelationship: "Lookup relationship",
	fieldTypeRelationshipDesc: "Create associations between two objects.",
	fieldTypeRelationshipDescLinkLabel: "Learn more",
	fieldTypeText: "Text",
	fieldTypeParagraph: "Paragraph",
	fieldTypeNumber: "Number",
	fieldTypeDecimal: "Decimal",
	fieldTypeDate: "Date",
	fieldTypeDropdown: "Dropdown",
	fieldTypeCheckbox: "Checkbox",
	fieldTypeMultiselect: "Multi select",
	fieldTypeSingleLineText: "Single line text",
	fieldTypeMultiLineText: "Multi line text",
	fieldTypeMultiSelectDropdown: "Multiselect dropdown",
	fieldTypeLookupField: "Lookup field",
	fieldTypeDependent: "Dependent field",
	filterFields: "Filter :",
	filterOptionAllFields: "All fields",
	nonCustomDefaultFieldTag: "Default",
	lookupUniqueTag: "Unique",
	primaryFieldTag: "Primary field",
	primaryFieldHeader: "Primary field",
	primaryFieldNameHint: "This is the object's primary field that uniquely represents each record and cannot be deleted.",
	deleteFieldTitle: "Are you sure you want to delete the field, {{label}} ?",
	deleteFieldMessage: "This field will be deleted permanently and all associated data will be lost. Do you still want to continue?",
	deleteFieldInlineMessage: "This action is permanent and cannot be reversed",
	deleteFieldTitleConversationProp: "Delete conversation property",
	deleteFieldMessageConversationProp: "Are you sure you want to delete this conversation property? This will impact the conversations, automation and reports.",
	deleteFieldSubmit: "Delete",
	searchFields: "Search by field label",
	customizeWidget: "Customize widget",
	addChoices: "Add choices",
	addChoice: "Add choice",
	level: "Level",
	labels: "LABELS",
	labelForLevel: "Label for level {{level}}",
	choicePlaceholderSuffix: "Choice",
	headerFieldTypes: "Field types",
	headerFields: "Fields",
	headerProperties: "Properties",
	fieldTypesDragDrop: "Drag and drop from here",
	headerProductConvProps: "Conversation properties",
	subHeaderProductConvProps: "Categorize and keep track of conversations.",
	subHeaderProductConvPropsLinkLabel: "Learn more",
	fieldTypesDragDropConvProps: "Drag and drop to create properties",
	behaviour: "Behavior for agents",
	fieldLabel: "Label for agents",
	fieldLabelPlaceholder: "Enter the field label",
	internalName: "Internal name",
	fieldNamePlaceholder: "Enter the field name",
	addFieldBtn: "Add field",
	saveFieldBtn: "Save",
	cancelFieldBtn: "Cancel",
	lookupAssociationHeader: "Association",
	lookupSourceObject: "Source object",
	lookupRelationshipPlaceholder: "Select relationship",
	lookupRelationshipLabel: "Relationship type",
	lookupTargetPlaceholder: "Select target object",
	lookupTargetLabel: "Target object",
	relationshipManyToOne: "Many to one",
	relationshipManyToOneDesc: "Link many records of the source object with one record of the target object. e.g Many Orders can be placed by a Contact.",
	relationshipOneToOne: "One to one",
	relationshipOneToOneDesc: "Link one record of the source object with only one record of the target object. e.g A Person can have only one Passport.",
	relationshipManyToOneCO: "Many records of <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> can be associated with one record of <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",
	relationshipOneToOneCO: "One record of <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> can be associated with one record of <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",
	relationshipManyToOneNative: "Many records of <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> can be associated with one <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",
	relationshipOneToOneNative: "One record of <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> can be associated with one <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",
	customizeWidgetModalHeader: "Customize widget",
	customizeWidgetModalHint: "Select upto 5 fields to display on the widget.",
	customizeWidgetModalSaveBtn: "Save",
	customizeWidgetModalCancelBtn: "Cancel",
	noSearchItemsFound: "No matching fields found",
	freePlanFieldAddDisabledHeader: "Did you know you can add custom fields?",
	freePlanFieldAddDisabledMessage: "Custom fields are available from Growth plan and above.",
	freePlanFieldAddDisabledButton: "Explore plans",
	noCreatePermissionFieldAddDisabledHeader: "You do not have permission to create new properties",
	noCreatePermissionFieldAddDisabledMessage: "Please reach out to your admin for more details.",
	ertText: "Effective resolution timer",
	dropdownChoices: "Dropdown choices",
	dependentDropdownMessage: "Dropdown choices will be categorized based on the indentation (use the ‘tab’ key to indent choices).If a choice is repeated in the same category, it will be skipped.",
	errors: {
		emptyFieldName: "Field label is required.",
		emptyRelationshipType: "Relationship type is required.",
		emptyTargetObject: "Target object is required.",
		emptyChoice: "Choice text is required.",
		duplicate: "Dropdown choice already exists",
		minimum: "Enter a minimum of one choice",
		formErrors: "Please fix the errors and continue",
		useOnlyEnglishChars: "Use only english alphabets, numbers and underscore (_) for internal name.",
		fieldNameExists: "There is another field with the same name in this form. Please use a different name.",
		deleteDropDownChoice: "Deleting a choice will impact all related records"
	},
	maximumLimits: {
		filterable: "At most {{count}} fields (excluding lookups) can be selected to filter records in the list view.",
		unique: "At most {{count}} fields can be marked as unique.",
		fields: "Reached the maximum limit of {{count}} fields. Delete an existing field to create a new one.",
		lookups: "Reached the maximum limit of {{count}} lookup fields. Delete an existing lookup field to create a new one.",
		maxCharsWarning: "You have reached a maximum limit of {{count}} characters.",
		maxChoiceOptionsWarning: "You have added maximum limit of {{count}} choices."
	}
};
var platformCouiWidgets = {
	viewAllWidgetRecords: "View all records",
	noRecordsLinked: "No records linked",
	linkWidgetButton: "Link record",
	linkModalHeader: "Link a new record",
	linkModalSelectSearchHeader: "Search by {{fieldName}}",
	linkModalSelectSearchPlaceholder: "Search...",
	linkModalSelectEmptySearch: "Start typing...",
	linkModalSelectNoResultFound: "No records found",
	linkModalSubmitButton: "Save",
	linkModalCancelButton: "Cancel",
	linkModalSuccess: "Record updated successfully",
	linkModalError: "Unable to update the record",
	checkBoxYesValue: "Yes",
	checkBoxNoValue: "No",
	widgetSectionHeader: "{{fieldLabel}} is {{contextLabel}}",
	linkModalLoadingText: "Fetching details...",
	relatedWidgetAccordionHeader: "Related {{schema}}",
	widgetRecordLinkSuccessMessage: "Record updated successfully",
	widgetRecordLinkErrorMessage: "Unable to update the record",
	addRecordSuccess: "Record added successfully",
	addRecord: "Add record",
	addNewRecord: "Add new record",
	saveAndLink: "Save and link",
	primaryFieldMinSizeError: "Enter a minimum of {{minSize}} characters",
	placeholders: {
		enterDetails: "Enter details",
		clickToSelect: "Click to select",
		enterValue: "Enter value"
	}
};
var filters = {
	addFilter: "+ Add another condition",
	noFilter: "You have not added any filters yet",
	validation: {
		required: "Value is required",
		minMax: "Must be greater than {{fromValue}}"
	},
	placeholder: {
		startRange: "Start range",
		endRange: "End range",
		and: "and"
	}
};
var searchDropdown = {
	placeholder: {
		search: "Type to search"
	}
};
var sortSelect = {
	ascending: "Ascending",
	descending: "Descending"
};
var enUS = {
	datepicker: datepicker,
	dropdown: dropdown,
	fileUploader: fileUploader,
	fileUploader2: fileUploader2,
	modal: modal,
	search: search,
	form: form,
	pagination: pagination,
	datatable: datatable,
	platformTable: platformTable,
	formBuilder: formBuilder,
	platformCouiWidgets: platformCouiWidgets,
	filters: filters,
	"export": {
	modalTitle: "Export Records",
	exportFormat: "Export as:",
	fields: "Fields",
	selectAllFields: "Select All Fields",
	searchFieldsPrompt: "Search fields",
	selectedFields: "{{count}} selected",
	submitButton: "Export",
	cancelButton: "Cancel",
	noSearchResults: "No results found",
	filterInfo: "The export includes {{filtered}} out of {{total}} records based on the filter criteria. <a class='clearExportFilter'>Clear filters</a> to export all the records"
},
	searchDropdown: searchDropdown,
	sortSelect: sortSelect
};

exports.datatable = datatable;
exports.datepicker = datepicker;
exports.default = enUS;
exports.dropdown = dropdown;
exports.fileUploader = fileUploader;
exports.fileUploader2 = fileUploader2;
exports.filters = filters;
exports.form = form;
exports.formBuilder = formBuilder;
exports.modal = modal;
exports.pagination = pagination;
exports.platformCouiWidgets = platformCouiWidgets;
exports.platformTable = platformTable;
exports.search = search;
exports.searchDropdown = searchDropdown;
exports.sortSelect = sortSelect;
