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
                    bColumnVisible: true,
                    Span: "",
                    actionButtonsInfo: {
                        midColumn: {
                            fullScreen: false,
                            exitFullScreen: true,
                            closeColumn: false
                        }
                    }
                });

                this.getOwnerComponent().setModel(oModel, "oFiexibleLayout");

            },
            onStateChange: function (oEvent) {
                var sLayout = oEvent.getParameter("layout");
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "");
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/layout", sLayout);
                switch (sLayout) {
                    case "TwoColumnsMidExpanded":
                    case "MidColumnFullScreen":
                        this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/bColumnVisible", false);
                        this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "XL6 L6 M8 S12");
                        break;
                    case "TwoColumnsBeginExpanded":
                        this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/bColumnVisible", true);
                        this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "X8 L8 M12 S12");
                        break;
                    default:
                        this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "");
                        break;

                }


            }

        });
    });
