'use strict';

const fieldTypes = {
	PRIMARY: {
		type: "TEXT",
		icon: {
			name: "text-field",
			bg_color: "#FEF1E1"
		}
	},
	RELATIONSHIP: {
		type: "RELATIONSHIP",
		icon: {
			name: "search",
			bg_color: "#FEF1E0"
		}
	},
	TEXT: {
		type: "TEXT",
		icon: {
			name: "text-field",
			bg_color: "#FEF1E1"
		}
	},
	PARAGRAPH: {
		type: "PARAGRAPH",
		icon: {
			name: "paragraph",
			bg_color: "#FEF1E0"
		}
	},
	NUMBER: {
		type: "NUMBER",
		icon: {
			name: "number-field",
			bg_color: "#DFF5F1"
		}
	},
	DECIMAL: {
		type: "DECIMAL",
		icon: {
			name: "decimal-field",
			bg_color: "#E5F2FE"
		}
	},
	DATE: {
		type: "DATE",
		icon: {
			name: "calendar",
			bg_color: "#FFECF0"
		}
	},
	DROPDOWN: {
		type: "DROPDOWN",
		icon: {
			name: "dropdown",
			bg_color: "#E5F2FE"
		},
		choices: [
			{
				value: ""
			},
			{
				value: ""
			}
		]
	},
	CHECKBOX: {
		type: "CHECKBOX",
		icon: {
			name: "checkbox",
			bg_color: "#FFECF0"
		}
	},
	MULTI_SELECT: {
		type: "MULTI_SELECT",
		icon: {
			name: "multiselect",
			bg_color: "#E5F2FE"
		},
		choices: [
			{
				value: ""
			},
			{
				value: ""
			}
		]
	},
	DEPENDENT_FIELD: {
		type: "DEPENDENT_FIELD",
		icon: {
			name: "dependent-field",
			bg_color: "#FEF1E0"
		},
		fields: [
			{
				type: "DROPDOWN",
				field_options: {
					level: "1",
					dependent: "true"
				},
				choices: [
				],
				fields: [
					{
						type: "DROPDOWN",
						field_options: {
							level: "2",
							dependent: "true"
						},
						choices: [
						],
						fields: [
							{
								type: "DROPDOWN",
								field_options: {
									level: "3",
									dependent: "true"
								},
								choices: [
								]
							}
						]
					}
				]
			}
		]
	}
};
const relationshipTypes = [
	{
		value: "many_to_one",
		text: "relationshipManyToOne",
		subText: "relationshipManyToOneDesc"
	},
	{
		value: "one_to_one",
		text: "relationshipOneToOne",
		subText: "relationshipOneToOneDesc"
	}
];
const relationshipDescriptionKeys = {
	many_to_one: {
		native: "relationshipManyToOneNative",
		co: "relationshipManyToOneCO"
	},
	one_to_one: {
		native: "relationshipOneToOneNative",
		co: "relationshipOneToOneCO"
	}
};
const fieldEditorValidations = {
	checkboxDetails: {
		existingPrimaryFieldEnabledCheckboxes: {
			required: false,
			filterable: false,
			unique: false
		},
		existingFieldEnabledCheckboxes: {
			required: true,
			filterable: false,
			unique: false
		},
		keyMapper: {
			required: "required",
			filterable: "filterable",
			unique: "field_options.unique"
		}
	}
};
const textboxDependentValue = "category 1\n\tsubcategory 1\n\t\titem 1\n\t\titem2\n\tsubcategory 2\n\t\titem 3\n\tsubcategory 3\n\t\titem 4\ncategory 2\n\tsubcategory 4\n\t\titem 5\n";
const presetSchema = {
	fieldTypes: fieldTypes,
	relationshipTypes: relationshipTypes,
	relationshipDescriptionKeys: relationshipDescriptionKeys,
	fieldEditorValidations: fieldEditorValidations,
	textboxDependentValue: textboxDependentValue
};

exports.presetSchema = presetSchema;
