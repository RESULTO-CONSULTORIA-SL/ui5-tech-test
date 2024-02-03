sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("com.resulto.ui5techtest.controller.Details", {

        onInit: function() {
            this.getOwnerComponent().getRouter().getRoute("RouteDetails").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function(oEvent) {
            var sId = oEvent.getParameter("arguments").id;
            this.getView().bindElement("/Products('" + sId + "')");
        },

	});
});