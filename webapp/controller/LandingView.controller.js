sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent, Fragment) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.LandingView", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel();

                oModel.setData({
                    "sNext": true,
                    "sSubmit": false,
                    "sLogoImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg")
                });

                this.getView().setModel(oModel, "oLanding");

            },
            onClickNext: function () {
                this.getView().getModel("oLanding").setProperty("/sNext", false);
                this.getView().getModel("oLanding").setProperty("/sSubmit", true);
                this.getView().byId("idIconTabBar").setSelectedKey("Contact");
            },
            onClickSubmit: function () {
                this.getView().getModel("oLanding").setProperty("/sNext", true);
                this.getView().getModel("oLanding").setProperty("/sSubmit", false);
                this.onCancelForm();
            },
            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },
            onfnForgotPassword: function (oEvent) {
                //this.getRouter().navTo("SupplierSignup");
            },
            onSignUp: function (oEvent) {
                this.getRouter().navTo("SupplierRegistration");
            },
            onfnpresssubmit: function () {
                jQuery.sap.require("sap.m.MessageBox");
                var oModel = this.getView().getModel("oLanding"),
                    sName = oModel.getProperty("/sUserName"),
                    sPassword = oModel.getProperty("/sPassword");
                if (sName !== undefined && sName !== null && sPassword !== undefined && sPassword !== null) {
                    this.getRouter().navTo("GenericTilesView");

                } else {
                    sap.m.MessageBox.error("Please enter a valid user name/password");
                }
            },
            onCancelForm: function () {
                this._oSignUp.close();
            }
        });
    });
