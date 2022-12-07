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
							"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZW4-gayliqsg3JLj4aWzIblxUizG1q9dYHX6p3P-RUkfXlBX-nXJ9QffvFUAKsqHtck&usqp=CAU",
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
				ID: oModel.getData().PRODUCT_UOM_LIST.length + 1,
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
			var object2 = {
				ID: oModel.getData().PRODUCT_UOM_LIST.length + 2,
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
			oModel.getData().PRODUCT_UOM_LIST.push(object2);
			oModel.updateBindings(true);
		},
onPricing: function (oEvent) {
			var oModel = this.getView().getModel("oNPI");
			var object = {
				ID: oModel.getData().PRODUCT_PRICING_LIST.length + 1,
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
			var object2 = {
				ID: oModel.getData().PRODUCT_UOM_LIST.length + 2,
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
			oModel.getData().PRODUCT_PRICING_LIST.push(object2);
			oModel.updateBindings(true);
		},
		

	});

});