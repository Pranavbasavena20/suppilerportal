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
                    "MasterList": [
    {
      Code:"0001",
	Name:"Unilever",
	Department:"Household",
	PrimaryContact:"John",
	Email:"John@gmail.com",
	Phone:"123456"
    },
     {
      Code:"0002",
	Name:"NTUC",
	Department:"Retail",
	PrimaryContact:"Abhishek",
	Email:"Abhishek@gmail.com",
	Phone:"999999"
    },
	{
      Code:"0003",
	Name:"NUS",
	Department:"Retail",
	PrimaryContact:"Pankaj",
	Email:"Pankaj@gmail.com",
	Phone:"9898999"
    },
    {
      Code:"0004",
	Name:"Gaint",
	Department:"Retail",
	PrimaryContact:"Om",
	Email:"Om@gmail.com",
	Phone:"996790"
    }
        ]
                });

                this.getView().setModel(oModel, "oMasterList");

            },
            onPress: function (oEvent) {
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/layout", "TwoColumnsMidExpanded");
                this.getOwnerComponent().getRouter().navTo("TaskDetail", { TaskType: "1" });
            },
            onPressSortConfirm: function (oEvent) {
                var sPath, bDescending, aSorters = [],
                    oTable = this.getView().byId("idMastertable"),
                    oSortParams = oEvent.getParameters(),
                    oBinding = oTable.getBinding("items");
                sPath = oSortParams.sortItem.getKey();
                bDescending = oSortParams.sortDescending;
                aSorters.push(new Sorter(sPath, bDescending));
                oBinding.sort(aSorters);
            },
        });
    });
