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
            onSignUp: function (oEvent) {
                // var that = this;
                // if (!that._oSignUp) {
                //     that._SignUpDialog = Fragment.load({
                //         id: that.createId("fSignUpDialog"),
                //         name: "com.spm.suppilerportal.fragments.VendorSignup",
                //         controller: that
                //     }).then(function (oDialog) {
                //         that._oSignUp = oDialog;
                //         that.getView().addDependent(that._oSignUp);
                //         that.getView().getModel("oLanding").setProperty("/sSubmit", false);
                //     });
                // }
                // that._SignUpDialog.then(function (oDialog) {
                //     that._oSignUp.open();

                // }.bind(that));
                this.getRouter().navTo("VendorSignup");
            },
            onfnpresssubmit: function () {
                var oModel = this.getView().getModel("oLanding"),
                    sName = oModel.getProperty("/sUserName"),
                    sPassword = oModel.getProperty("/sPassword");
                if (sName !== undefined && sName !== null && sPassword !== undefined && sPassword !== null) {
                    this.getRouter().navTo("GenericTilesView");
                    // this.getOwnerComponent().getRouter().navTo("GenericTilesView");

                } else {
                    sap.m.MessageBox.error("Please enter a valid user name/password");
                }
            },
            onCancelForm: function () {
                this._oSignUp.close();
            }
        });
    });
