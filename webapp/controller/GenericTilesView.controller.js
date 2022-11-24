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
                // var oModel = dataUtil.createJsonModel()
                // oModel.setData({
                //     "oTileData": [

                //         {
                //             "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/salesorder.png"),
                //             "titleText": "Supplier Onboarding forms",
                //             "count": "5"
                //         },
                //         {
                //             "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/purchaseOrder.png"),
                //             "titleText": "Vendor Master",
                //             "count": "120"
                //         },
                //         {
                //             "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/email.png"),
                //             "titleText": "Supplier Request Approval",
                //             "count": "12"
                //         },
                //         {
                //             "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/health.png"),
                //             "titleText": "Heart Rate Monitor",
                //             "count": "0"
                //         }, {
                //             "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/twitter.png"),
                //             "titleText": "Twitter",
                //             "count": "4"
                //         }
                //         , {
                //             "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/delivery.jpg"),
                //             "titleText": "Delivery Status",
                //             "count": "0"
                //         },
                //         {
                //             "imageUrl": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/excel.png"),
                //             "titleText": "Excel",
                //             "count": "0"
                //         }

                //     ]

                // });
                // this.getView().setModel(oModel, "genericTileModel");
                var aData = {
                    "Carousel": [{
                        "ApplicationPerLayout": [{

                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/salesorder.png"),
                            "AppName": "Supplier Onboarding forms",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Supplier Request Approval",
                            "HeaderCount": "6"
                        }, {
                            "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/22668101.jpg"),
                            "AppName": "Vendor Master",
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
