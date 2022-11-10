sap.ui.define([
    "sap/ui/core/ValueState"
], function (ValueState) {
    "use strict";

    return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */

        onLayoytChange: function (sVal) {
            switch (sVal) {
                case "TwoColumnsMidExpanded":
                    return "XL6 L6 M8 S12";
                case "TwoColumnsBeginExpanded":
                    return "X8 L8 M12 S12";
                default:
                    return "X12 L12 M12 S12";
            }
        }
    };

});