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
                var aData = {
                    "Carousel": [{
                        "ApplicationPerLayout": [{
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/salesorder.png"),
                            "AppName": "Supplier Onboarding forms",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Retailer Request Approval",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Vendor Master",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "New Product Introduction",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }]
                    }, {
                        "ApplicationPerLayout": [{
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }]
                    }, {
                        "ApplicationPerLayout": [{
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        },]
                    }, {
                        "ApplicationPerLayout": [{
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }]
                    }, {
                        "ApplicationPerLayout": [{
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        },]
                    }, {
                        "ApplicationPerLayout": [{
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Leads",
                            "HeaderCount": "6"
                        }]
                    },

                    ]

                };
                var oModel = new JSONModel();
                oModel.setData(aData);
                this.getView().setModel(oModel, "ApplicationModel");

            },

            onImageClick: function (oEvent) {
                var sText = oEvent.getSource().getBindingContext("ApplicationModel").getObject().AppName;
                switch (sText) {
                    case "Supplier Onboarding forms":
                        this.getRouter().navTo("SupplierOnboarding");
                        break;

                    case "Retailer Request Approval":
                        this.getRouter().navTo("FlexibleColumnLayout", { Type: "1" });
                        break;
                    case "Vendor Master":
                        this.getRouter().navTo("FlexibleColumnLayout", { Type: "2" });
                        break;
                    case "New Product Introduction":
                        this.getRouter().navTo("NewProductIntroduction");
                        break;

                    default:
                        break;
                }
            }


        });
    });
