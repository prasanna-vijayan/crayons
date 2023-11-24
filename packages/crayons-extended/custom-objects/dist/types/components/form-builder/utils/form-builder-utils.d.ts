export declare function i18nText(strKey: any, context?: {}): any;
export declare function hasCustomProperty(objSource: any, strProperty: any): boolean;
export declare function isNewEntity(objEntity: any): boolean;
export declare function getNestedKeyValueFromObject(objSource: any, strKey: any): any;
export declare function deepCloneObject(objSource: any): any;
export declare function isPrimaryFieldType(objField: any, productName?: string, intIndex?: number, boolCheckIndex?: boolean): boolean;
export declare function isUniqueField(objField: any): boolean;
export declare function getMaximumLimitsConfig(productName?: string): any;
export declare function getMaxLimitProperty(productName: string, strProperty: any): any;
export declare function getMappedCustomFieldType(productName: string, fieldName: any): any;
export declare function getFieldTypeCheckboxes(productName: string, fieldName: any): any;
export declare function detectEnglish(text: any): boolean;
export declare function deriveInternalNameFromLabel(text: any): any;
export declare function removeFirstOccurrence(strWhole: any, charRemove: any): any;
export declare function hasPermission(strRole: any, objPermission: any, strProperty: any, boolEditCheckbox?: boolean): boolean;
export declare function createUUID(): string;
export declare function checkIfCustomToggleField(productName: string, fieldName: any): boolean;
/**
 *
 * DEPENDENT FIELD UTILS
 *
 */
export declare function getFieldBasedOnLevel(data: any, level: any): any;
export declare function getDependentLevels(levels: any, choices: any, ids: any, level: any): any;
export declare function updateFieldAttributes(data: any, level: any, { label, internalName, name, choices }: {
  label?: any;
  internalName?: any;
  name?: any;
  choices?: any;
}): any;
export declare function buildChoicesFromText(text: any, dataProvider: any): any;
export declare function hasDuplicates(arr: any): boolean;
/** Handles and updates dependent level upon selection */
export declare function updateLevelSelection(instance: any, event: any): any;
export declare function getParentId(pChoices: any, pLevel: any, dependentLevels: any): any;
/** Selecting parent updates child choices */
export declare function getChildChoices(field: any, pChoices: any, pLevel: any, depLevels: any): {
  choices: any;
  ids: any[];
  pid: any;
  pId?: undefined;
} | {
  ids: any;
  choices: any[];
  pId: any;
  pid?: undefined;
};
export declare function updateChoicesInFields(instance: any, event: any): any;
export declare function deleteChoicesInFields(instance: any, event: any): any;
export declare function getDefaultDependentLevels(data: any, internalNamePrefix: any): any;
