sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/resulto/ui5techtest/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("com.resulto.ui5techtest.controller.Main", {
            formatter: formatter,

            onInit: function () {

            },

            onListItemPress: function (oEvent) {
                var oItem, oCtx;

                oItem = oEvent.getParameter("listItem");
                oCtx = oItem.getBindingContext();

                this.getOwnerComponent().getRouter().navTo("TargetDetails", {
                    id: oCtx.getProperty("ProductID")
                });
            },

        });
    });
