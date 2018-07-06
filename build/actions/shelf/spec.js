"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPEC_CLEAR = 'SPEC_CLEAR';
exports.SPEC_MARK_CHANGE_TYPE = 'SPEC_MARK_CHANGE_TYPE';
// Field
exports.SPEC_FIELD_ADD = 'SPEC_FIELD_ADD';
exports.SPEC_FIELD_AUTO_ADD = 'SPEC_FIELD_AUTO_ADD';
exports.SPEC_FIELD_REMOVE = 'SPEC_FIELD_REMOVE';
exports.SPEC_FIELD_MOVE = 'SPEC_FIELD_MOVE';
/**
 * Change a property of a FieldDef to a specific value.
 */
exports.SPEC_FIELD_PROP_CHANGE = 'SPEC_FIELD_PROP_CHANGE';
/**
 * Change nested property of a FieldDef to a specific value.
 */
exports.SPEC_FIELD_NESTED_PROP_CHANGE = 'SPEC_FIELD_NESTED_PROP_CHANGE';
/**
 * Change Function of a FieldDef to a specific value.
 */
exports.SPEC_FUNCTION_CHANGE = 'SPEC_FUNCTION_CHANGE';
exports.SPEC_FUNCTION_ADD_WILDCARD = 'SPEC_FUNCTION_ADD_WILDCARD';
exports.SPEC_FUNCTION_DISABLE_WILDCARD = 'SPEC_FUNCTION_DISABLE_WILDCARD';
exports.SPEC_FUNCTION_ENABLE_WILDCARD = 'SPEC_FUNCTION_ENABLE_WILDCARD';
exports.SPEC_FUNCTION_REMOVE_WILDCARD = 'SPEC_FUNCTION_REMOVE_WILDCARD';
exports.SPEC_VALUE_CHANGE = 'SPEC_VALUE_CHANGE';
exports.SPEC_LOAD = 'SPEC_LOAD';
exports.SPEC_ACTION_TYPE_INDEX = {
    SPEC_CLEAR: 1,
    SPEC_LOAD: 1,
    SPEC_MARK_CHANGE_TYPE: 1,
    SPEC_FIELD_ADD: 1,
    SPEC_FIELD_AUTO_ADD: 1,
    SPEC_FIELD_MOVE: 1,
    SPEC_FIELD_PROP_CHANGE: 1,
    SPEC_FIELD_NESTED_PROP_CHANGE: 1,
    SPEC_FIELD_REMOVE: 1,
    SPEC_FUNCTION_CHANGE: 1,
    SPEC_FUNCTION_ADD_WILDCARD: 1,
    SPEC_FUNCTION_DISABLE_WILDCARD: 1,
    SPEC_FUNCTION_ENABLE_WILDCARD: 1,
    SPEC_FUNCTION_REMOVE_WILDCARD: 1,
    SPEC_VALUE_CHANGE: 1
};
function isSpecAction(a) {
    return exports.SPEC_ACTION_TYPE_INDEX[a.type];
}
exports.isSpecAction = isSpecAction;
//# sourceMappingURL=spec.js.map