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
            }
        });
    });
