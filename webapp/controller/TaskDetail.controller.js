sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent, Fragment, formatter) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.TaskDetail", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel();
                oModel.setData({
                    "bEdit": false,
                    "bDisplay": true
                });
                this.getView().setModel(oModel, "oVendorMaster");
                this.oModel = this.getView().getModel("oVendorMaster");

            },
            handleFullScreen: function (oEvent) {
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "XL6 L6 M8 S12");
                var bFullScreen = this.getModel("oFiexibleLayout").getProperty("/actionButtonsInfo/midColumn/fullScreen");
                this.getModel("oFiexibleLayout").setProperty("/actionButtonsInfo/midColumn/fullScreen", !bFullScreen);
                if (!bFullScreen) {
                    // store current layout and go full screen
                    this.getModel("oFiexibleLayout").setProperty("/previousLayout", this.getModel("oFiexibleLayout").getProperty("/layout"));
                    this.getModel("oFiexibleLayout").setProperty("/layout", "MidColumnFullScreen");
                } else {
                    // reset to previous layout
                    this.getModel("oFiexibleLayout").setProperty("/layout", this.getModel("oFiexibleLayout").getProperty("/previousLayout"));
                }
            },
            handleClose: function (oEvent) {
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/layout", "OneColumn");
            },
            onEditScreen: function (oEvent) {
                this.oModel.setProperty("/bEdit", false);
                this.oModel.setProperty("/bDisplay", true);
            },
            onDisplayScreen: function (oEvent) {
                this.oModel.setProperty("/bEdit", true);
                this.oModel.setProperty("/bDisplay", false);
            },
            onFooterButtonPress: function (oEvent, sAction) {
                if (!this.oRejectDialog) {
                    this.oRejectDialog = new sap.m.Dialog({
                        title: sAction,
                        type: sap.m.DialogType.Message,
                        content: [
                            new sap.m.Label({
                                text: sAction === "Approve" ? "Do you want to Approve this?" : "Do you want to Reject this?",
                                labelFor: "rejectionNote"
                            }),
                            new sap.m.TextArea("rejectionNote", {
                                width: "100%",
                                placeholder: "Add note (optional)"
                            })
                        ],
                        beginButton: new sap.m.Button({
                            type: sap.m.ButtonType.Emphasized,
                            text: sAction,
                            press: function () {
                                var sText = Core.byId("rejectionNote").getValue();
                                sap.m.MessageToast.show("Note is: " + sText);
                                this.oRejectDialog.close();
                            }.bind(this)
                        }),
                        endButton: new sap.m.Button({
                            text: "Cancel",
                            press: function () {
                                this.oRejectDialog.close();
                            }.bind(this)
                        })
                    });
                }

                this.oRejectDialog.open();
            },

        });
    });
