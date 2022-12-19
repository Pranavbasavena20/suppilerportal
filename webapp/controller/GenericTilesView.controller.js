sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/Device",
  ],
  // /**
  //  * @param {typeof sap.ui.core.mvc.Controller} Controller
  //  */
  function (BaseController, JSONModel, dataUtil, Device) {
    "use strict";

    return BaseController.extend(
      "com.spm.suppilerportal.controller.GenericTilesView",
      {
        onInit: function () {
          var isMobile = this.getOwnerComponent()
            .getModel("device")
            .getProperty("/system/phone")
            ? true
            : false;
          var oGenericTile = this.getView().byId("tileApplicationHomePage");
          var oGenericTileText = this.getView().byId("txtBottomTile");
          var sCount = 18;
          var sWidth = sap.ui.Device.resize.width;
          var sHeight = sap.ui.Device.resize.height;
          if (isMobile) {
            if (sHeight > 800) {
              sCount = 28;
            } else if (sHeight > 700) {
              sCount = 24;
            } else {
              sCount = 20;
            }


            oGenericTile.addStyleClass("mobileGenericTile");
            oGenericTile.addStyleClass("mobileTextLineClamp");
            oGenericTile.addStyleClass("mobileMGTHdrContent");
            oGenericTileText.addStyleClass("mobileTileBottomTextColor");
          } else {
            if (sHeight > 700) {
              sCount = 36;
            } else if (sHeight > 600) {
              sCount = 30;
            } else if (sHeight > 500) {
              sCount = 24;
            } else {
              sCount = 18;
            }
            oGenericTile.addStyleClass("desktopGenericTile");
            oGenericTile.addStyleClass("desktopTextLineClamp");
            oGenericTile.addStyleClass("desktopMGTHdrContent");
            oGenericTileText.addStyleClass("desktopTileBottomTextColor");
          }
          // {device>/system/phone
          // var aData = {
          //     "Carousel": [{
          //         "ApplicationPerLayout": [{
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/New Supplier Registration/New Supplier Registration128.png"),
          //             "AppName": "Supplier Onboarding forms",
          //             "HeaderCount": "2"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Supplier Master/Supplier Master128.png"),
          //             "AppName": "Retailer Request Approval",
          //             "AppNameTooltip": "Retailer Request Approval",
          //             "HeaderCount": "3"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Vendor Master/Vendor Master128.png"),
          //             "AppName": "Vendor Master",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/NPI/NPI128.png"),
          //             "AppName": "New Product Introduction",
          //             "HeaderCount": "12"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Supplier Leads/Supplier Leads128.png"),
          //             "AppName": "Supplier Leads",
          //             "HeaderCount": "22"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/ASN Creation/ASN Creation128.png"),
          //             "AppName": "ASN Creation",
          //             "HeaderCount": "34"
          //         },
          //         {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Create Invoice/Create Invoice128.png"),
          //             "AppName": "Create Invoice",
          //             "HeaderCount": "776"
          //         },{
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Customer Support/Customer Support128.png"),
          //             "AppName": "Customer Support",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Delivery Schedule/Delivery Schedule128.png"),
          //             "AppName": "Delivery Schedule",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Files/Files128.png"),
          //             "AppName": "Files",
          //             "HeaderCount": "6"
          //         },{
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Invoice Correction/Correct Invoice128.png"),
          //             "AppName": "Invoice Correction",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/New PO/New PO128.png"),
          //             "AppName": "New PO",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Notifications/Notifications128.png"),
          //             "AppName": "Notifications",
          //             "HeaderCount": "6"
          //         },{
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/NPI Bulk Upload/NPI Bulk Upload128.png"),
          //             "AppName": "NPI Bulk Upload",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Payment Dashboard/Payment Dashboard128.png"),
          //             "AppName": "Payment Dashboard",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Payment Status/Payment Status128.png"),
          //             "AppName": "Payment Status",
          //             "HeaderCount": "6"
          //         },{
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/PO Status/PO Status128.png"),
          //             "AppName": "PO Status",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Price Master/Price Master128.png"),
          //             "AppName": "Price Master",
          //             "HeaderCount": "6"
          //         }]
          //     }, {
          //         "ApplicationPerLayout": [{
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Product Master/Product Master128.png"),
          //             "AppName": "Product Master",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Purchase Order/Purchase Order128.png"),
          //             "AppName": "Purchase Order",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Review NPI/NPI128.png"),
          //             "AppName": "Review NPI",
          //             "HeaderCount": "6"
          //         },{
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Sales Reports/Sales Reports128.png"),
          //             "AppName": "Sales Reports",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Switcher/Switcher128.png"),
          //             "AppName": "Switcher",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/Vendor Scorecard/Vendor Scorecard128.png"),
          //             "AppName": "Vendor Scorecard",
          //             "HeaderCount": "6"
          //         },{
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/View ASN/View ASN128.png"),
          //             "AppName": "View ASN",
          //             "HeaderCount": "6"
          //         }, {
          //             "BackgroundImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/View Invoice/View Invoice128.png"),
          //             "AppName": "View Invoice",
          //             "HeaderCount": "6"
          //         }]
          //     }
          //     ]

          // };

          var aApplicationList = [
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/New Supplier Registration/New Supplier Registration128.png"
              ),
              AppName: "Supplier Onboarding forms",
              HeaderCount: "2",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Supplier Master/Supplier Master128.png"
              ),
              AppName: "Retailer Request Approval",
              AppNameTooltip: "Retailer Request Approval",
              HeaderCount: "3",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Vendor Master/Vendor Master128.png"
              ),
              AppName: "Vendor Master",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/NPI/NPI128.png"
              ),
              AppName: "New Product Introduction",
              HeaderCount: "12",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Supplier Leads/Supplier Leads128.png"
              ),
              AppName: "Supplier Leads",
              HeaderCount: "22",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/ASN Creation/ASN Creation128.png"
              ),
              AppName: "ASN Creation",
              HeaderCount: "34",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Create Invoice/Create Invoice128.png"
              ),
              AppName: "Create Invoice",
              HeaderCount: "776",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Customer Support/Customer Support128.png"
              ),
              AppName: "Customer Support",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Delivery Schedule/Delivery Schedule128.png"
              ),
              AppName: "Delivery Schedule",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Files/Files128.png"
              ),
              AppName: "Files",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Invoice Correction/Correct Invoice128.png"
              ),
              AppName: "Invoice Correction",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/New PO/New PO128.png"
              ),
              AppName: "New PO",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Notifications/Notifications128.png"
              ),
              AppName: "Notifications",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/NPI Bulk Upload/NPI Bulk Upload128.png"
              ),
              AppName: "NPI Bulk Upload",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Payment Dashboard/Payment Dashboard128.png"
              ),
              AppName: "Payment Dashboard",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Payment Status/Payment Status128.png"
              ),
              AppName: "Payment Status",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/PO Status/PO Status128.png"
              ),
              AppName: "PO Status",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Price Master/Price Master128.png"
              ),
              AppName: "Price Master",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Product Master/Product Master128.png"
              ),
              AppName: "Product Master",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Purchase Order/Purchase Order128.png"
              ),
              AppName: "Purchase Order",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Review NPI/NPI128.png"
              ),
              AppName: "Review NPI",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Sales Reports/Sales Reports128.png"
              ),
              AppName: "Sales Reports",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Switcher/Switcher128.png"
              ),
              AppName: "Switcher",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/Vendor Scorecard/Vendor Scorecard128.png"
              ),
              AppName: "Vendor Scorecard",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/View ASN/View ASN128.png"
              ),
              AppName: "View ASN",
              HeaderCount: "6",
            },
            {
              BackgroundImage: sap.ui.require.toUrl(
                "com/spm/suppilerportal/css/image/View Invoice/View Invoice128.png"
              ),
              AppName: "View Invoice",
              HeaderCount: "6",
            },
          ];


          var aCarousel = [];
          var aApplicationPerLayout = [];
          var counter = 0;
          for (var i = 0; i < aApplicationList.length; i++) {
            counter = counter + 1;
            aApplicationPerLayout.push(aApplicationList[i]);
            if (counter === sCount) {
              aCarousel.push({
                ApplicationPerLayout: aApplicationPerLayout,
              });
              counter = 0;
              aApplicationPerLayout = [];
            }
            if (i === aApplicationList.length - 1 && counter >= 1) {
              aCarousel.push({
                ApplicationPerLayout: aApplicationPerLayout,
              });
            }
          }
          var objCar = {
            "Carousel": aCarousel
          }
          var oModel = new JSONModel();
          oModel.setData(objCar);
          this.getView().setModel(oModel, "ApplicationModel");
        },

        onImageClick: function (oEvent) {
          var sText = oEvent
            .getSource()
            .getBindingContext("ApplicationModel")
            .getObject().AppName;
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
        },
      }
    );
  }
);
