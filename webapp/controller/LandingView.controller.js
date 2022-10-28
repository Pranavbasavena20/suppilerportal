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
                var oModel = dataUtil.createJsonModel()

                oModel.setData({
                    "bPasswordVi": false,
                    "sLogoImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg")
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
            onSignUp: function (oEvent) {
                var that = this;
                if (!that._oSignUp) {
                    that._SignUpDialog = Fragment.load({
                        id: that.createId("fSignUpDialog"),
                        name: "com.spm.suppilerportal.fragments.VendorSignup",
                        controller: that
                    }).then(function (oDialog) {
                        that._oSignUp = oDialog;
                        that.getView().addDependent(that._oSignUp);
                    });
                }
                that._SignUpDialog.then(function (oDialog) {
                    that._oSignUp.open();

                }.bind(that));
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
