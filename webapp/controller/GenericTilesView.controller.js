sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil"
],
    // /**
    //  * @param {typeof sap.ui.core.mvc.Controller} Controller
    //  */
    function (BaseController, JSONModel, dataUtil) {
        "use strict";

        return BaseController.extend("com.spm.suppilerportal.controller.GenericTilesView", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel()
                oModel.setData({
                    "oTileData": [

                        {
                            "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/salesorder.png"),
                            "titleText": "Supplier Registartion",
                            "count": "5"
                        },
                        {
                            "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/purchaseOrder.png"),
                            "titleText": "Vendor Master",
                            "count": "120"
                        },
                        {
                            "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/email.png"),
                            "titleText": "Supplier Request Approval",
                            "count": "12"
                        },
                        {
                            "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/health.png"),
                            "titleText": "Heart Rate Monitor",
                            "count": "0"
                        }, {
                            "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/twitter.png"),
                            "titleText": "Twitter",
                            "count": "4"
                        }
                        , {
                            "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/delivery.jpg"),
                            "titleText": "Delivery Status",
                            "count": "0"
                        },
                        {
                            "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/excel.png"),
                            "titleText": "Excel",
                            "count": "0"
                        }

                    ]

                });
                this.getView().setModel(oModel, "genericTileModel");

            },
            onImageClick: function (oEvent) {
                var sText = oEvent.getSource().getParent().getItems()[2].getText();
                switch (sText) {
                    case "Supplier Registartion":
                        this.getRouter().navTo("SupplierSignup");
                        break;

                    case "Supplier Request Approval":
                        this.getRouter().navTo("FlexibleColumnLayout", { Type: "1" });
                        break;
                    case "Vendor Master":
                        this.getRouter().navTo("FlexibleColumnLayout", { Type: "2" });
                        break;
                    default:
                        break;
                }
            }


        });
    });
