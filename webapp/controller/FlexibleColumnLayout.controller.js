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

        return Controller.extend("com.spm.suppilerportal.controller.FlexibleColumnLayout", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel();
                oModel.setData({
                    layout: "OneColumn",
                    previousLayout: "",
                    actionButtonsInfo: {
                        midColumn: {
                            fullScreen: false
                        }
                    }
                });

                this.getOwnerComponent().setModel(oModel, "oFiexibleLayout");

            }

        });
    });
