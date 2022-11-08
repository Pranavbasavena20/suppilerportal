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

        return Controller.extend("com.spm.suppilerportal.controller.TaskMaster", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel();

                oModel.setData({
                    "sNext": true,
                    "sSubmit": false,
                    "sLogoImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg")
                });

                this.getView().setModel(oModel, "oLanding");

            },
            onPress: function (oEvent) {
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/layout", "TwoColumnsBeginExpanded");
                this.getOwnerComponent().getRouter().navTo("TaskDetail", { TaskType: "1" });
            }
        });
    });
