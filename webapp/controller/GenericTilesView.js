sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.GenericTilesView", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel()
                oModel.setData({
                });
                this.getView().setModel(oModel, "genericTileModel");

            },


        });
    });
