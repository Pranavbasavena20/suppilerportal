sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.BaseController", {
            getRouter: function () {
                return UIComponent.getRouterFor(this);
            },
            getModel: function (sName) {
                return this.getView().getModel(sName);
            },
            setModel: function (oModel, sName) {
                return this.getView().setModel(oModel, sName);
            },
            onPressHomePage: function (oEvent) {
                this.getRouter().navTo("GenericTilesView");

            },
        });

    });
