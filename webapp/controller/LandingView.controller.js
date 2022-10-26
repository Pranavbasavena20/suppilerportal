sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.LandingView", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel()

                oModel.setData({
                    "bPasswordVi": false,
                    "sLogoImage":sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg")
                });
                this.getView().setModel(oModel, "oLanding");

            },
            onfnpressnext: function () {
                var oModel = this.getView().getModel("oLanding"),
                    sName = oModel.getProperty("/sUserName");
                if (sName !== undefined && sName !== null) {
                    oModel.setProperty("/bPasswordVi", true);
                    this.getRouter().navTo("GenericTilesView");
                } else {
                    sap.m.MessageBox.error("Please enter a valid user name");
                }
            },
            getRouter: function () {
                return UIComponent.getRouterFor(this);
            },
            onfnpresssubmit: function () {
                var oModel = this.getView().getModel("oLanding"),
                sPassword = oModel.getProperty("/sPassword");
                if (sPassword !== undefined && sPassword !== null) {
                    this.getRouter().navTo("GenericTilesView");
                } else {
                    sap.m.MessageBox.error("Please enter a valid password");
                }
            }
        });
    });
