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

		return Controller.extend("com.spm.suppilerportal.controller.NewProductIntroduction", {

			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf com.spm.suppilerportal.view.NewProductIntroduction
			 */
			onPressImage: function () {
				sap.m.MessageToast.show("I am pressed");
			},
			onInit: function () {
				var oViewModel = new sap.ui.model.json.JSONModel({
					bForCastAdd: true,
					bForcastMonthAdd: true,
					bComparsion: true
				});
				this.getOwnerComponent().setModel(oViewModel, "NPIView");
				var oModelSizes = new sap.ui.model.json.JSONModel({
					pane1: "auto",
					pane2: "auto",
					pane3: "auto"
				});

				this.getView().setModel(oModelSizes, "sizes");
				var oModel = dataUtil.createJsonModel();

				oModel.setData({
					"sNext": true,
					"sSubmit": false,
					"sLogoImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg"),
					"sAvatar": {
						"totalCount": 15,
						"content": [{
							"initials": "JD",
							"name": "John Doe",
							"tooltip": "1",
							"jobPosition": "Marketing Manager",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla",
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWQzXJTIHWygwXdQurV3i69zY1T9Wr7Z5oQ&usqp=CAU",
							"initials": "SP",
							"name": "Sarah Parker",
							"tooltip": "2",
							"jobPosition": "Visual Designer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrEZJZ_56BfvYCZ1XNGsMI2bFiPoIMTg55w&usqp=CAU",
							"initials": "JG",
							"name": "Jason Goldwell",
							"tooltip": "3",
							"jobPosition": "Software Developer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltkDf1u3xe0mLA3w88vTyhKcvINTccMGeDw&usqp=CAU",
							"name": "Christian Bow",
							"jobPosition": "Marketing Manager",
							"tooltip": "4",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZW4-gayliqsg3JLj4aWzIblxUizG1q9dYHX6p3P-RUkfXlBX-nXJ9QffvFUAKsqHtck&usqp=CAU",
							"tooltip": "5",
							"name": "Jessica Parker",
							"jobPosition": "Visual Designer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlLQzhCMBy0UsaU6njTZfvQ1-DrGXG-Qr6w&usqp=CAU",
							"initials": "JB",
							"name": "Jonathan Bale",
							"jobPosition": "Software Developer",
							"tooltip": "6",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU",
							"initials": "GS",
							"name": "Gordon Smith",
							"jobPosition": "Marketing Manager",
							"tooltip": "7",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU",
							"fallbackIcon": "sap-icon://person-placeholder",
							"name": "Simon Jason",
							"tooltip": "8",
							"jobPosition": "Visual Designer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU",
							"initials": "JS",
							"name": "Jason Swan",
							"jobPosition": "Software Developer",
							"tooltip": "9",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3eEBULODqQVXILAkPvHT2qxyFfTFn7q0PQ&usqp=CAU",
							"initials": "JC",
							"name": "John Carter",
							"jobPosition": "Marketing Manager",
							"tooltip": "10",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}, {
							"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&usqp=CAU",
							"name": "Whitney Parker",
							"tooltip": "11",
							"jobPosition": "Visual Designer",
							"mobile": "+89181818181",
							"phone": "+2828282828",
							"email": "blabla@blabla"
						}]
					}
				});

				this.getView().setModel(oModel, "oLanding");

			},
			onGetVolume: function (oEvent) {
				var oObject = oEvent.getSource().getBindingContext("oNPI").getObject(),
					sPath = oEvent.getSource().getBindingContext("oNPI").getPath();
				if (oObject.DEPTH !== "" && oObject.WIDTH !== "" && oObject.HEIGHT !== "") {
					var iFinalVal = parseInt(oObject.DEPTH) * parseInt(oObject.WIDTH) * parseInt(oObject.HEIGHT);
					this.getView().getModel("oNPI").setProperty(sPath + "/Volume", iFinalVal);
				}
			},
			onUOM: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VARIANT_ID: "",
					UOM: "",
					UOM_NO_CONV: "",
					UOM_UNIT: "",
					EAN_CATEGORY: "",
					ORDERING_UOM: "",
					BARCODE: "",
					WEIGHT: "",
					WIDTH: "",
					DEPTH: "",
					HEIGHT: "",
					BUN: false,
					OUN: false,
					DI: "",
					SUN: "",
					MN_GTIN: "",
					NET_WEIGHT: "",
					WT_UNIT: "",
					ADD_SALES_UNIT: "",
					VALID_FROM: "",
					VALID_TO: "",
					Button: true,
					Volume: ""
				};
				oModel.getData().PRODUCT_UOM_LIST.push(object);
				oModel.updateBindings(true);
			},
			onDeleteUOM: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_UOM_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			AddComparsion: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					BRAND_DESC: "",
					PACKAGING: "",
					SELLING_PRICE: ""

				};
				oModel.getData().PRODUCT_COMPARISION.push(object);
				oModel.updateBindings(true);
				if (oModel.getData().PRODUCT_COMPARISION.length >= 3) {
					this.getView().getModel("NPIView").setProperty("/bComparsion", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bComparsion", true);
				}
			},
			onDeleteComparsion: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_COMPARISION;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oData.length >= 3) {
					this.getView().getModel("NPIView").setProperty("/bComparsion", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bComparsion", true);
				}
			},
			onPricing: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					SALES_ORG: "",
					SALES_ORG_DESC: "",
					DIST_CHANNEL: "",
					DIST_CHANNEL_DESC: "",
					PRICE_TYPE: "",
					UNIT_COST_PRICE: "",
					COST_PRICE: "",
					COST_PRICE_MISC: "",
					MISC_UNIT_CP: "",
					CP_CURRENCY: "",
					FOREIGN_UNIT_CP: "",
					FOREIGN_CP: "",
					UNIT_SALES_PRICE: "",
					SP_NO_GST: "",
					SP_W_GST: "",
					GP: "",
					GP_PERCENT: "",
					INTRO_PERIOD_FROM: "",
					INTRO_PERIOD_TO: "",
					CP_UOM: "",
					SP_UOM: "",
					Button: true
				};
				oModel.getData().PRODUCT_PRICING_LIST.push(object);
				oModel.updateBindings(true);
			},
			onDeletePricing: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_PRICING_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			AddProductAtt: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					VENDOR_ID: "",
					PRODUCT_ID: "",
					LABEL_CODE: "",
					LABEL_CODE_VALUE: "",
					DELETED: "",
					ACTIVE: "",
					VALID_FROM: "",
					VALID_TO: ""
				};
				oModel.getData().PRODUCT_ATTRIBUTE_LIST.push(object);
				oModel.updateBindings(true);
			},
			onDeleteProductAttTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_ATTRIBUTE_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			// Forcast Start 
			AddAttribute: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_FORECAST.FORECAST_ATTIBUTES;

				var object = {
					FORECAST_ATTRIBUTE_NAME: "",
					FORECAST_ATTRIBUTE_VALUE: ""
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oModelData.length >= 5) {
					this.getView().getModel("NPIView").setProperty("/bForCastAdd", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bForCastAdd", true);
				}

			},
			AddForeCast: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_FORECAST.FORECAST_MONTHS;
				var object = {
					MONTH_NAME: "",
					MONTH_VALUE: ""
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oModelData.length >= 6) {
					this.getView().getModel("NPIView").setProperty("/bForcastMonthAdd", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bForcastMonthAdd", true);
				}
			},
			onDeleteForcastTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[3]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_FORECAST.FORECAST_ATTIBUTES;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oData.length >= 5) {
					this.getView().getModel("NPIView").setProperty("/bForCastAdd", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bForCastAdd", true);
				}

			},
			onDeleteForeCastTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[3]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_FORECAST.FORECAST_MONTHS;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
				if (oData.length >= 5) {
					this.getView().getModel("NPIView").setProperty("/bForcastMonthAdd", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bForcastMonthAdd", true);
				}
			},

			// Forcast End 

			// Marketing
			AddMarketing: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_MARKETING_LIST;
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					MEDIA_TYPE: "",
					AMOUNT: "",
					FREQUENCY: "",
					PERIOD_START_DATE: "",
					PERIOD_END_DATE: "",
					ACTIVE: "",
					DELETED: "",
					VALID_FROM: "",
					VALID_TO: ""
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onDeleteMarketingTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_MARKETING_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			AddProposedListing: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_PROPOSED_LISTING;
				var object = {
					ID: "",
					PRODUCT_ID: "",
					RETAILER_NAME: "",
					SELLING_PRICE: "",
					START_DATE: null
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onDeleteProposedListingTable: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_PROPOSED_LISTING;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			// End of Marketing
			onAddVariant: function (oEvent) {
				var oModelData = this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST;
				var object = {
					ID: 20698,
					S_NO: parseInt(this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST.length) + 1,
					PRODUCT_ID: "",
					FULL_VARIANT_DESC: "",
					SHORT_VARIANT_DESC: "",
					VARIANT_STATUS: "",
					VARIANT_DELETION_REMARKS: "",
					VARIANT_DELETION_STATUS: 0,
					VARIANT_COMMENTS: "",
					FPOL_VARIANT_DESC: "",
					STORE_COUNT: 0,
					CLASS_CODE: "",
					SUB_CLASS_CODE: "",
					EFF_DATE_STOCK_TO_STORE: null,
					CARTON_PER_OUTER_CASE: "",
					OUTER_CASE_DIMENSION_LENGTH: "0",
					OUTER_CASE_DIMENSION_WIDTH: "0",
					OUTER_CASE_DIMENSION_HIEGHT: "0",
					PACK_SIZE: "",
					PACK_SIZE_UOM: "",
					COUNTRY_CODE: "",
					COUNTRY_NAME: "",
					VARIANT_UOM_LIST: [],
					VARIANRT_PRICING_LIST: []
				};
				oModelData.push(object);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onDeleteVariant: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[2]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onUpdateVariantTableFinished: function (oEvent) {
				var iToatl = oEvent.getParameter("total");
				if (iToatl === 0) {
					this.getView().getModel("NPIView").setProperty("/bVariantLength", false);
				} else {
					this.getView().getModel("NPIView").setProperty("/bVariantLength", true);
				}
				if (this.Path === undefined) {
					this.Path = "/PRODUCT_VARIANT_LIST/0";
					this.iPath = this.Path.split("/")[2];
				}
				this._fnAllTableItems("com.spm.suppilerportal.view.subView.NPI.ProductUOM", "tbProductUOM", "/VARIANT_UOM_LIST");
				this._fnAllTableItems("com.spm.suppilerportal.view.subView.NPI.ProductPricing", "tbVariantPricing", "/VARIANRT_PRICING_LIST");
			},
			onDisplayvariant: function (oEvent) {
				this.Path = oEvent.getSource().getBindingContext("oNPI").getPath();
				this.iPath = this.Path.split("/")[2];
				if (parseInt(this.iPath) !== 0) {
					this._AddProductUOM();
					this._onProductVariant();
				}
				this._fnAllTableItems("com.spm.suppilerportal.view.subView.NPI.ProductUOM", "tbProductUOM", "/VARIANT_UOM_LIST");
				this._fnAllTableItems("com.spm.suppilerportal.view.subView.NPI.ProductPricing", "tbVariantPricing", "/VARIANRT_PRICING_LIST");
			},
			_fnAllTableItems: function (sFragmentName, sTable, sExtensionPath) {
				var that = this;
				sap.ui.core.Fragment.load({
					name: sFragmentName,
					controller: that
				}).then(function (oDialog) {
					var oBindingInfo = {
						path: "oNPI>" + this.Path + sExtensionPath,
						template: oDialog
					};
					that.getView().byId(sTable).bindAggregation("items", oBindingInfo);
				}.bind(that));

			},
			_AddProductUOM: function () {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VARIANT_ID: "",
					UOM: "",
					UOM_NO_CONV: "",
					UOM_UNIT: "",
					EAN_CATEGORY: "",
					ORDERING_UOM: "",
					BARCODE: "",
					WEIGHT: "",
					WIDTH: "",
					DEPTH: "",
					HEIGHT: "",
					BUN: false,
					OUN: false,
					DI: "",
					SUN: "",
					MN_GTIN: "",
					NET_WEIGHT: "",
					WT_UNIT: "",
					ADD_SALES_UNIT: "",
					VALID_FROM: "",
					VALID_TO: "",
					Button: false,
					Volume: ""
				};
				oModel.getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANT_UOM_LIST.push(object);
				oModel.updateBindings(true);
			},
			_onProductVariant: function () {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					SALES_ORG: "",
					SALES_ORG_DESC: "",
					DIST_CHANNEL: "",
					DIST_CHANNEL_DESC: "",
					PRICE_TYPE: "",
					UNIT_COST_PRICE: "",
					COST_PRICE: "",
					COST_PRICE_MISC: "",
					MISC_UNIT_CP: "",
					CP_CURRENCY: "",
					FOREIGN_UNIT_CP: "",
					FOREIGN_CP: "",
					UNIT_SALES_PRICE: "",
					SP_NO_GST: "",
					SP_W_GST: "",
					GP: "",
					GP_PERCENT: "",
					INTRO_PERIOD_FROM: "",
					INTRO_PERIOD_TO: "",
					CP_UOM: "",
					SP_UOM: "",
					Button: false
				};
				oModel.getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANRT_PRICING_LIST.push(object);
				oModel.updateBindings(true);
			},
			onProductUOM: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VARIANT_ID: "",
					UOM: "",
					UOM_NO_CONV: "",
					UOM_UNIT: "",
					EAN_CATEGORY: "",
					ORDERING_UOM: "",
					BARCODE: "",
					WEIGHT: "",
					WIDTH: "",
					DEPTH: "",
					HEIGHT: "",
					BUN: false,
					OUN: false,
					DI: "",
					SUN: "",
					MN_GTIN: "",
					NET_WEIGHT: "",
					WT_UNIT: "",
					ADD_SALES_UNIT: "",
					VALID_FROM: "",
					VALID_TO: "",
					Button: true,
					Volume: ""
				};
				oModel.getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANT_UOM_LIST.push(object);
				oModel.updateBindings(true);
			},
			onProductPricing: function (oEvent) {
				var oModel = this.getView().getModel("oNPI");
				var object = {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					SALES_ORG: "",
					SALES_ORG_DESC: "",
					DIST_CHANNEL: "",
					DIST_CHANNEL_DESC: "",
					PRICE_TYPE: "",
					UNIT_COST_PRICE: "",
					COST_PRICE: "",
					COST_PRICE_MISC: "",
					MISC_UNIT_CP: "",
					CP_CURRENCY: "",
					FOREIGN_UNIT_CP: "",
					FOREIGN_CP: "",
					UNIT_SALES_PRICE: "",
					SP_NO_GST: "",
					SP_W_GST: "",
					GP: "",
					GP_PERCENT: "",
					INTRO_PERIOD_FROM: "",
					INTRO_PERIOD_TO: "",
					CP_UOM: "",
					SP_UOM: "",
					Button: true
				};
				oModel.getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANRT_PRICING_LIST.push(object);
				oModel.updateBindings(true);
			},
			onDeletevariantUOM: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[4]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANT_UOM_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},
			onDeleteProductPricing: function (oEvent) {
				var iIndex = parseInt(oEvent.getSource().getBindingContext("oNPI").getPath().split("/")[4]);
				var oData = this.getView().getModel("oNPI").getData().PRODUCT_VARIANT_LIST[this.iPath].VARIANRT_PRICING_LIST;
				oData.splice(iIndex, 1);
				this.getView().getModel("oNPI").updateBindings(true);
			},

		});

	});