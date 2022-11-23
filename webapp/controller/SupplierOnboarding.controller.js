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

        return Controller.extend("com.spm.suppilerportal.controller.SupplierOnboarding", {
            onInit: function () {
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
                    "sStep3": false,
                    "sStep4": false,
                    "sStep5": false,
                    "sStep6": false,
                    "sStep7": false,
                    "sStep8": false,
                    "sStep9": false,
                    "sStep10": false
                });
                this.getView().setModel(oModel, "genericTileModel");
            },
            onfnnextpress1: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", true);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
            },
            onfnnextpress2: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", true);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                this.getView().byId("idMP").getContent()[2].addStyleClass("classPurpledot");
                this.getView().byId("idMP").getContent()[1].addStyleClass("classPurpledot2");

            },
            onfnnextpress3: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", true);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[2].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[3].addStyleClass("classPurpledot");


            },

            onfnnextpress6: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", true);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                // this.onPressAddContact();
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                this.getView().byId("idMP").getContent()[5].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[6].addStyleClass("classPurpledot");


            },
            onfnnextpress5: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", true);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[4].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[5].addStyleClass("classPurpledot");


            },
            onfnnextpress4: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", true);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[3].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[4].addStyleClass("classPurpledot");


            },
            onfnnextpress7: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", true);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[6].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[7].addStyleClass("classPurpledot");


            },
            onfnnextpress8: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", true);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[7].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[8].addStyleClass("classPurpledot");


            },
            onfnnextpress9: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", true);
                oModel.setProperty("/sStep10", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[8].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[9].addStyleClass("classPurpledot");


            },
            onfnnextpress10: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", true);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[9].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[10].addStyleClass("classPurpledot");


            },
            onfnnextpress11: function () {
                var that = this;
                if (!that.oPreviewDialog) {
                    that.PreviewDialog = Fragment.load({
                        id: that.createId("fSignUpDialog"),
                        name: "com.spm.suppilerportal.fragments.Preview",
                        controller: that
                    }).then(function (oDialog) {
                        that.oPreviewDialog = oDialog;
                        that.getView().addDependent(that.oPreviewDialog);
                        that.getView().getModel("oLanding").setProperty("/sSubmit", false);
                    });
                }
                that.PreviewDialog.then(function (oDialog) {
                    that.oPreviewDialog.open();

                }.bind(that));
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

            onfnpresssubmit: function () {
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
                this.oPreviewDialog.close();
            }
        });
    });
