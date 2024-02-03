sap.ui.define([], () => {
	"use strict";

	return {
        formatRowHighlight: function (oValue) {
            if (oValue === 0) {
                return "Error";
            } else if (oValue <= 10) {
                return "Warning";
            } else  {
                return "None";
            }
        },
	};
});
