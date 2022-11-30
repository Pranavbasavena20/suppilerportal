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
			onClickNext: function () {
				this.getView().getModel("oLanding").setProperty("/sNext", false);
				this.getView().getModel("oLanding").setProperty("/sSubmit", true);
				this.getView().byId("idIconTabBar").setSelectedKey("Contact");
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.spm.suppilerportal.view.NewProductIntroduction
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.spm.suppilerportal.view.NewProductIntroduction
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.spm.suppilerportal.view.NewProductIntroduction
		 */
		//	onExit: function() {
		//
		//	}

	});

});