sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "../model/mandatoryfields"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent, Fragment, mandatoryfields) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.VendorSignup", {
            onInit: function () {
                // this.getModel("i18n").getProperty('/')
                var oModel = dataUtil.createJsonModel();

                oModel.setData({
                    "sNext": true,
                    "sSubmit": false,
                    "sLogoImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg")
                });

                this.getView().setModel(oModel, "oLanding");
                var oModel = new sap.ui.model.json.JSONModel({
                    "Designation": "",
                    "Name": "",
                    "LandPhoneNo": "",
                    "MobileNo": "",
                    "Email": "",
                    "aContact": [],
                    "sStep1": true,
                    "sStep2": false,
                    "sStep3": false
                });
                this.getView().setModel(oModel, "genericTileModel");
                // var item = new sap.suite.ui.commons.MicroProcessFlowItem();
                // this.getView().byId("idMP").addContent(item);

            },
            onfnnextpress1: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", true);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);


            },
            onfnnextpress2: function () {
                var that = this;
                mandatoryfields.clearStates(that);
                if (mandatoryfields.ManditoryFields(that)) {
                    return;
                }
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", true);
                this.getView().byId("idMP").getContent()[2].addStyleClass("classPurpledot");
                this.getView().byId("idMP").getContent()[1].addStyleClass("classPurpledot2");

            },
            onfnnextpress3: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", true);
                oModel.setProperty("/sStep2", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[2].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[3].addStyleClass("classPurpledot");


            },
            onPressAddContact: function (oEvent) {
                var oData = this.getView().getModel("genericTileModel"),
                    aContact = oData.getProperty("/aContact");
                if (aContact === undefined || aContact === null) {
                    aContact = [];
                }
                var oObject = {
                    "Designation": oData.getProperty("/Designation"),
                    "Name": oData.getProperty("/Name"),
                    "LandPhoneNo": oData.getProperty("/LandPhoneNo"),
                    "MobileNo": oData.getProperty("/MobileNo"),
                    "Email": oData.getProperty("/Designation")
                };
                aContact.push(oObject);
                oData.setProperty("/Designation", "");
                oData.setProperty("/Name", "");
                oData.setProperty("/LandPhoneNo", "");
                oData.setProperty("/MobileNo", "");
                oData.setProperty("/Designation", "");

                this.getView().getModel("genericTileModel").setProperty("/aContact", aContact);

            },
            getResourceBundle: function () {
                return this.getOwnerComponent().getModel("i18n").getResourceBundle();
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
