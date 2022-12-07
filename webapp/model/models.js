sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (JSONModel, Device) {
    "use strict";

    return {

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
				fnNPI: function () {
			var oNPI = new JSONModel({
				ID: "",
				PRODUCT_ID: "",
				VENDOR_MASTER_ID: "",
				VENDOR_CODE: "",
				PART_NUMBER: "",
				PARENT_FLAG: "",
				RETURN_POLICY: "",
				AVG_LEAD_TIME: "",
				SEL_DEPT_LEVEL1_CODE: "",
				SEL_DEPT_LEVEL1_DESC: "",
				SEL_DEPT_LEVEL2_CODE: "",
				SEL_DEPT_LEVEL2_DESC: "",
				IS_NEW_VENDOR: "",
				IS_VENDOR_APPROVED: "",
				URGENT: "",
				MARKET_EXP_AMOUNT: "",
				MARKET_START_DATE: "",
				MARKET_END_DATE: "",
				PRODUCT_DATA: [{
					PRODUCT_ID: "",
					PRODUCT_CODE: "",
					PRODUCT_SHORT_DESC: "",
					PRODUCT_FULL_DESC: "",
					MCH_MAIN_KEY: "",
					DEPARTMENT_CODE: "",
					CLASS_CODE: "",
					SUB_CLASS_CODE: "",
					PRODUCT_TYPE: "",
					PRODUCT_STYLE: "",
					PRODUCT_COLOR: "",
					PRODUCT_SIZE: "",
					BRAND_GROUP: "",
					BRAND_CODE: "",
					SEASON_YEAR: "",
					PRODUCT_LISTING: "",
					PRODUCT_STATUS: "",
					PRODUCT_FORMAT: "",
					SEASON_CODE: "",
					PHASE_CODE: "",
					PRODUCT_CATEGORY: "",
					MFR_CODE: "",
					MFR_DESC: "",
					PRIVATE_FLAG: "",
					MERCHANDISE_FLAG: "",
					TAX_CODE: "",
					COUNTRY_OF_ORIGIN: "",
					SHELF_LIFE: "",
					BUYER_LEVEL1_CODE: "",
					BUYER_LEVEL2_CODE: "",
					BUYER_LEVEL3_CODE: "",
					BUYER_LEVEL4_CODE: "",
					BUYER_LEVEL5_CODE: "",
					BUYER_LEVEL6_CODE: "",
					IS_VIA_MASSUPLOAD: ""
				}],
				PRODUCT_UOM_LIST: [{
						ID: "1",
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
					}, {
						ID: "2",
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
					}

				],
				PRODUCT_PRICING_LIST: [{
						ID: "1",
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
					}, {
						ID: "2",
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
					}

				],
				PRODUCT_MARKETING_LIST: [{
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
				}],
				PRODUCT_PROPOSED_LISTING: [{
					ID: "",
					PRODUCT_ID: "",
					RETAILER_NAME: "",
					SELLING_PRICE: "",
					START_DATE: ""
				}],
				PRODUCT_JUSTIFICATION: [{
					ID: "",
					PRODUCT_ID: "",
					JUSTIFICATION: ""
				}],
				PRODUCT_ATTACHMENT: [{
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					ATTACHMENT_TYPE: "",
					DISPLAY_DOCUMENT_NAME: "",
					DOCUMENT_NAME: "",
					DOCUMENT_URL: "",
					DOC_EXPIRY_DATE: "",
					CREATED_BY: "",
					CREATED_ON: "",
					SOURCE_PATH: ""
				}],
				PRODUCT_ATTRIBUTE_LIST: [{
					ID: "",
					VENDOR_ID: "",
					PRODUCT_ID: "",
					LABEL_CODE: "",
					LABEL_CODE_VALUE: "",
					DELETED: "",
					ACTIVE: "",
					VALID_FROM: "",
					VALID_TO: ""
				}],
				COMMENT_LIST: [{
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					COMMENT: "",
					USER_ID: "",
					USER_NAME: "",
					USER_ROLE_TYPE: "",
					COMMENT_DATE: "",
					COMMENT_TYPE: ""
				}],
				PRODUCT_FORECAST: {
					ID: "",
					PRODUCT_ID: "",
					VEN_PROD_FORECAST_ATTRIB1: "",
					VEN_PROD_FORECAST_ATTRIB2: "",
					VEN_PROD_FORECAST_ATTRIB3: "",
					VEN_PROD_FORECAST_ATTRIB4: "",
					VEN_PROD_FORECAST_ATTRIB5: "",
					VEN_PROD_FORECAST_ATTRIB1_VALUE: "",
					VEN_PROD_FORECAST_ATTRIB2_VALUE: "",
					VEN_PROD_FORECAST_ATTRIB3_VALUE: "",
					VEN_PROD_FORECAST_ATTRIB4_VALUE: "",
					VEN_PROD_FORECAST_ATTRIB5_VALUE: "",
					MONTH_NAME_1: "",
					MONTH_NAME_2: "",
					MONTH_NAME_3: "",
					MONTH_NAME_4: "",
					MONTH_NAME_5: "",
					MONTH_NAME_6: "",
					COMPETING_PRODMSTRSEQID_1: "",
					COMPETING_PRODMSTRSEQID_1_DESC: "",
					COMPETING_PRODMSTRQID_2: "",
					COMPETING_PRODMSTRQID_2_DESC: "",
					COMPETING_PRODMSTRQID_3: "",
					COMPETING_PRODMSTRQID_3_DESC: "",
					MONTH_NAME_1_VALUE: "",
					MONTH_NAME_2_VALUE: "",
					MONTH_NAME_3_VALUE: "",
					MONTH_NAME_4_VALUE: "",
					MONTH_NAME_5_VALUE: "",
					MONTH_NAME_6_VALUE: ""
				}
			});
			return oNPI;

		},
        fnSupplierOnBoarding: function () {
            var oSupplierOnBoarding = new JSONModel({
                "DATE": new Date(),
                "VENDMSTRSEQID": "",
                "RETSEQID": "2022_RET_00001",
                "COMPANY_NAME": "",
                "BUSINESS_ENTITY": "",
                "BUSINESS_CODE": "",
                "EMAIL_ID": "",
                "VENDOR_CLAIM": "",
                "VENDOR_ACCOUNT_GROUP": "",
                "PURCHASE_ORDER_CURRENCY": "",
                "GCS": "",
                "TZ_EWM_RELATED": "",
                "NATURE_OF_BUSINESS": "",
                "WEBSITE": "",
                "DELIVER_LEAD_DAYS": "",
                "DEPARTMENT": "",
                "SUB_DEPARTMENT": "",
                "EXISTING_ASSOC_MF": -1,
                "ADDSEQID": {
                    "ADDSEQID": "",
                    "ADDRESS_CODE": "",
                    "ADDRESS_LINE_1": "",
                    "ADDRESS_LINE_2": "",
                    "ADDRESS_LINE_3": "",
                    "CITY": "",
                    "STATE": "",
                    "POSTAL_CODE": "",
                    "COUNTRY_CODE": "",
                    "ADDRESS_TYPE": ""
                },
                "CONTSEQID": {
                    "RETSEQID": "",
                    "OBJECT_ID": "",
                    "OBJECT_TYPE": "",
                    "FIRST_NAME": "",
                    "MIDDLE_NAME": "",
                    "LAST_NAME": "",
                    "POSITION": "",
                    "DEPARTMENT": "",
                    "PHONE_NUMBER": "",
                    "EMAIL_ADDRESS": "",
                    "FAX_NUMBER": "",
                    "EXT_NUMBER": "",
                },
                "CONTSEQLIST": [

                ],
                "RTV_ALLOWED": "",
                "RTV_REMARKS": "",
                "CREDIT_PERIOD": "",
                "SHIP_CONDITION": "",
                "CASH_MGMT_GRP": "",
                "SORT_KEY": "",
                "REMARKS": "",
                "ADDITIONAL_INFO": "",
                "BANKSEQID": {
                    "BANKSEQID": "",
                    "RETSEQID": "",
                    "OBJECT_ID": "",
                    "OBJECT_TYPE": "",
                    "PAYMENT_TYPE": "",
                    "TAX_TYPE": "",
                    "WHT_PERCENT": "",
                    "TAX_NUMBER": "",
                    "VAT": "",
                    "GST_NUMBER": "",
                    "CHEQUE_DELIVERY_METHOD": "",
                    "HOLD_PAYMENT": "",
                    "TERMS_ACCEPTED": "",
                    "CHEQUE_PAYEE_NAME": "",
                    "CHEQUE_COLL_LOC": "",
                    "CHEQUE_DEL_METHOD": "",
                    "PAYMENT_GROUP_KEY": "",
                    "CURRENCY": "",
                    "BANK_NAME": "",
                    "ACCOUNT_NUMBER": "",
                    "IFSC_CODE": "",
                    "ACCOUNT_HOLDER_NAME": "",
                    "VALID_FROM": "",
                    "VALID_TO": "",
                    "Terms of Trade": "",
                    "REF_DEPOSIT_FEE": "",
                    "RECON_ACCOUNT": "",
                    "EXEMPTION_PERIOD": "",
                },
                "ATTACHMENTS": {
                    "VENDMSTRSEQID": "",
                    "RETSEQID": "",
                    "DOCUMENT_TYPE": "",
                    "DOC_DESCRIPTION": "",
                    "DOC_EXPIRY": "",
                    "File": ""
                },
                "ATTACHMENTSSET": []
            }
            );
            return oSupplierOnBoarding;

        },
        fnFlexiable: function () {
            var oFlexable = new JSONModel({
                layout: "OneColumn",
                previousLayout: "",
                Type: "",
                bColumnVisible: true,
                Span: "",
                SupRegis: [],
                SuppOnBoarding: [],
                actionButtonsInfo: {
                    midColumn: {
                        fullScreen: false,
                        exitFullScreen: true,
                        closeColumn: false
                    }
                }
            });
            return oFlexable;
        },
        fnSupplierRegistration: function () {
            var oSupplierRegistration = new JSONModel({
                "date": new Date(),
                "RETSEQID": "2022_RET_00001",
                "COMPANY_NAME": "",
                "EMAIL_ID": "",
                "WEBSITE": "",
                "REMARKS": "",
                "ADDITIONAL_INFO": "",
                "PH_COUNTRY_CODE": "",
                "PHONE_NUMBER": "",
                "ALT_PH_COUNTRY_CODE": "",
                "ALTERNATE_PHN_NUMBER": "",
                "FAX_NUMBER": "",
                "STATUS": "",
                "NATURE_OF_BUSINESS": "",
                "DEPARTMENT": "",
                "SUBDEPARTMENT": "",
                "PRIMARY_CONTACT_NAME": "",
                "ADDRESS":
                {
                    "ADDSEQID": "",
                    "ADDRESS_CODE": "",
                    "ADDRESS_LINE_1": "",
                    "ADDRESS_LINE_2": "",
                    "ADDRESS_LINE_3": "",
                    "CITY": "",
                    "STATE": "",
                    "POSTAL_CODE": "",
                    "COUNTRY_CODE": "",
                    "ADDRESS_TYPE": ""
                }
            });
            return oSupplierRegistration;
        },

        fnPayload: function () {
            var oPayload = new JSONModel({
                "Header": [{
                    ACTION_CODE: "",
                    REQ_TYPE: "",
                    RETSEQID: "",
                    TITLESEQID: "",
                    FIRST_NAME: "",
                    MIDDLE_NAME: "",
                    LAST_NAME: "",
                    COMPANY_NAME: "",
                    EMAIL_ID: "",
                    ALT_EMAIL_ID: "",
                    REGISTRATION_DATE: new Date(),
                    STORE_COUNT: "",
                    EMP_COUNT: "",
                    PH_COUNTRY_CODE: "",
                    PHONE_NUMBER: "",
                    ALT_PH_COUNTRY_CODE: "",
                    ALT_PHN_NUMBER: "",
                    WEBSITE: "",
                    OWNERSHIP_TYPE: "",
                    REMARKS: "",
                    ADDITIONAL_INFO: "",
                    BUSINESS_CODE: "",
                    BUSINESS_DESC: "",
                    CONCESSIONAIRE_SUPPORT: false,
                    STORE_FORMAT: "",
                    LOGO: "",
                    HEADER_1: "",
                    SUBHEADER_1: "",
                    SUBHEADER_2: "",
                    BACKGROUND_IMAGE: "",
                    FAX_NUMBER: "",
                    TELE_FAX_NUMBER: "",
                    PRIMARY_CONTACT_NAME: "",
                    ADDRESS: []
                }],
                "businessCode": [
                    {
                        "BUSSEQID": "BUS_00001",
                        "RETSEQID": "2022_RET_00001",
                        "BUS_CODE": "10",
                        "LABEL_CODE": "DISTRBTR",
                        "CODE_DESC": "Distributor"
                    },
                    {
                        "BUSSEQID": "BUS_00002",
                        "RETSEQID": "2022_RET_00001",
                        "BUS_CODE": "20",
                        "LABEL_CODE": "MANFCTR",
                        "CODE_DESC": "Manufacturer"
                    },
                    {
                        "BUSSEQID": "BUS_00003",
                        "RETSEQID": "2022_RET_00001",
                        "BUS_CODE": "30",
                        "LABEL_CODE": "LICNSE",
                        "CODE_DESC": "Licensee"
                    },
                    {
                        "BUSSEQID": "BUS_00004",
                        "RETSEQID": "2022_RET_00001",
                        "BUS_CODE": "40",
                        "LABEL_CODE": "WHOLSL",
                        "CODE_DESC": "Wholesaler"
                    },
                    {
                        "BUSSEQID": "BUS_00005",
                        "RETSEQID": "2022_RET_00001",
                        "BUS_CODE": "50",
                        "LABEL_CODE": "IMPORTR",
                        "CODE_DESC": "Importer"
                    },
                    {
                        "BUSSEQID": "BUS_00006",
                        "RETSEQID": "2022_RET_00001",
                        "BUS_CODE": "60",
                        "LABEL_CODE": "BROKR",
                        "CODE_DESC": "Broker"
                    },
                    {
                        "BUSSEQID": "BUS_00007",
                        "RETSEQID": "2022_RET_00001",
                        "BUS_CODE": "70",
                        "LABEL_CODE": "SERVPRDR",
                        "CODE_DESC": "Service Provider"
                    }
                ],
                "ownerShip": [
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00001",
                        "OBJECT_TYPE": "OWNSHIP",
                        "OBJECT_CODE": "10",
                        "label_code": "Coporation",
                        "CODE_DESC": "Ownership Type for Corporation",
                        "VALID_FROM": "2022-11-12T16:06:54.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00002",
                        "OBJECT_TYPE": "OWNSHIP",
                        "OBJECT_CODE": "20",
                        "label_code": "Joint Venture",
                        "CODE_DESC": "Ownership Type for Joint Venture",
                        "VALID_FROM": "2022-11-12T16:06:58.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00003",
                        "OBJECT_TYPE": "OWNSHIP",
                        "OBJECT_CODE": "30",
                        "label_code": "Limited Liability Corporation",
                        "CODE_DESC": "Ownership Type for Limited Liability Corporation",
                        "VALID_FROM": "2022-11-12T16:09:15.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00004",
                        "OBJECT_TYPE": "OWNSHIP",
                        "OBJECT_CODE": "40",
                        "label_code": "Limited Liability Partnership",
                        "CODE_DESC": "Ownership Type for Limited Liability Partnership",
                        "VALID_FROM": "2022-11-12T16:09:19.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00005",
                        "OBJECT_TYPE": "OWNSHIP",
                        "OBJECT_CODE": "50",
                        "label_code": "Partnership",
                        "CODE_DESC": "Ownership Type for Partnership",
                        "VALID_FROM": "2022-11-12T16:09:23.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00006",
                        "OBJECT_TYPE": "OWNSHIP",
                        "OBJECT_CODE": "60",
                        "label_code": "Sole Proprietorship",
                        "CODE_DESC": "Ownership Type for Sole Proprietorship",
                        "VALID_FROM": "2022-11-12T16:09:28.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    }
                ],
                "storeFormat": [
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00007",
                        "OBJECT_TYPE": "STOREFMT",
                        "OBJECT_CODE": "10",
                        "LABEL_CODE": "Outlet Store",
                        "CODE_DESC": "Store Format",
                        "VALID_FROM": "2022-11-14T16:37:23.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00008",
                        "OBJECT_TYPE": "STOREFMT",
                        "OBJECT_CODE": "20",
                        "LABEL_CODE": "Convention",
                        "CODE_DESC": "Store Format",
                        "VALID_FROM": "2022-11-14T16:37:30.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00009",
                        "OBJECT_TYPE": "STOREFMT",
                        "OBJECT_CODE": "30",
                        "LABEL_CODE": "Warehouse",
                        "CODE_DESC": "Store Format",
                        "VALID_FROM": "2022-11-14T16:37:33.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z"
                    }
                ],
                "subdepartment": [
                    {
                        "SUBDEPSEQID": "SUBDEPT_00001",
                        "DEPSEQID": "DEPT_00001",
                        "SUB_DEPT_CODE": "10",
                        "SUB_DEPT_DESC": "Water"
                    },
                    {
                        "SUBDEPSEQID": "SUBDEPT_00002",
                        "DEPSEQID": "DEPT_00001",
                        "SUB_DEPT_CODE": "20",
                        "SUB_DEPT_DESC": "Coffee"
                    },
                    {
                        "SUBDEPSEQID": "SUBDEPT_00003",
                        "DEPSEQID": "DEPT_00001",
                        "SUB_DEPT_CODE": "30",
                        "SUB_DEPT_DESC": "Carbonated Soft Drink"
                    },
                    {
                        "SUBDEPSEQID": "SUBDEPT_00004",
                        "DEPSEQID": "DEPT_00002",
                        "SUB_DEPT_CODE": "10",
                        "SUB_DEPT_DESC": "Cookies"
                    },
                    {
                        "SUBDEPSEQID": "SUBDEPT_00005",
                        "DEPSEQID": "DEPT_00002",
                        "SUB_DEPT_CODE": "20",
                        "SUB_DEPT_DESC": "Confectionary"
                    },
                    {
                        "SUBDEPSEQID": "SUBDEPT_00006",
                        "DEPSEQID": "DEPT_00003",
                        "SUB_DEPT_CODE": "10",
                        "SUB_DEPT_DESC": "Fragrances"
                    },
                    {
                        "SUBDEPSEQID": "SUBDEPT_00007",
                        "DEPSEQID": "DEPT_00003",
                        "SUB_DEPT_CODE": "20",
                        "SUB_DEPT_DESC": "Laundry"
                    }
                ],

                "department": [
                    {
                        "DEPSEQID": "DEPT_00001",
                        "DEPT_CODE": "10",
                        "DEPT_DESC": "Beverages"
                    },
                    {
                        "DEPSEQID": "DEPT_00002",
                        "DEPT_CODE": "20",
                        "DEPT_DESC": "Grocery"
                    },
                    {
                        "DEPSEQID": "DEPT_00003",
                        "DEPT_CODE": "30",
                        "DEPT_DESC": "Personal Care"
                    }
                ],
                "addressType": [
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00010",
                        "OBJECT_TYPE": "ADRTYPE",
                        "OBJECT_CODE": "10",
                        "LABEL_CODE": "Registered Office Address",
                        "CODE_DESC": "",
                        "VALID_FROM": "2022-11-17T07:56:42.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z",
                        "PH_TYPE": "ALL"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00011",
                        "OBJECT_TYPE": "ADRTYPE",
                        "OBJECT_CODE": "20",
                        "LABEL_CODE": "Regional Office Address",
                        "CODE_DESC": "",
                        "VALID_FROM": "2022-11-17T07:56:42.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z",
                        "PH_TYPE": "ALL"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00012",
                        "OBJECT_TYPE": "ADRTYPE",
                        "OBJECT_CODE": "30",
                        "LABEL_CODE": "Correspondence Address",
                        "CODE_DESC": "",
                        "VALID_FROM": "2022-11-17T07:56:42.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z",
                        "PH_TYPE": "ALL"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00013",
                        "OBJECT_TYPE": "ADRTYPE",
                        "OBJECT_CODE": "40",
                        "LABEL_CODE": "Payment Address",
                        "CODE_DESC": "",
                        "VALID_FROM": "2022-11-17T07:56:42.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z",
                        "PH_TYPE": "SUPPLIER"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00014",
                        "OBJECT_TYPE": "ADRTYPE",
                        "OBJECT_CODE": "50",
                        "LABEL_CODE": "Warehouse Address",
                        "CODE_DESC": "",
                        "VALID_FROM": "2022-11-17T07:56:42.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z",
                        "PH_TYPE": "ALL"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00015",
                        "OBJECT_TYPE": "ADRTYPE",
                        "OBJECT_CODE": "60",
                        "LABEL_CODE": "Distribution Centre",
                        "CODE_DESC": "",
                        "VALID_FROM": "2022-11-17T07:56:42.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z",
                        "PH_TYPE": "ALL"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00016",
                        "OBJECT_TYPE": "ADRTYPE",
                        "OBJECT_CODE": "70",
                        "LABEL_CODE": "Store Address",
                        "CODE_DESC": "",
                        "VALID_FROM": "2022-11-17T07:56:42.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z",
                        "PH_TYPE": "RETAILER"
                    },
                    {
                        "RETSEQID": "2022_RET_00001",
                        "OBJECT_ID": "2022_OBM_00017",
                        "OBJECT_TYPE": "ADRTYPE",
                        "OBJECT_CODE": "80",
                        "LABEL_CODE": "Other Address",
                        "CODE_DESC": "",
                        "VALID_FROM": "2022-11-17T07:56:42.000Z",
                        "VALID_TO": "2037-12-31T15:52:00.000Z",
                        "PH_TYPE": "ALL"
                    }
                ],
                "payment-method": [
                    {
                        "PAYMENT_ID": "PT001",
                        "PAYMENT_CODE": "10",
                        "LABEL_CODE": "Cash",
                        "CODE_DESC": "Cash"
                    },
                    {
                        "PAYMENT_ID": "PT002",
                        "PAYMENT_CODE": "20",
                        "LABEL_CODE": "Cheque",
                        "CODE_DESC": "Cheque"
                    },
                    {
                        "PAYMENT_ID": "PT003",
                        "PAYMENT_CODE": "30",
                        "LABEL_CODE": "Internet Banking",
                        "CODE_DESC": "Internet Banking"
                    }
                ],
                "countryCode": [
                    {
                        "COUNTRY_CODE": "+1",
                        "COUNTRY_NAME": "USA"
                    },
                    {
                        "COUNTRY_CODE": "+60",
                        "COUNTRY_NAME": "Malaysia"
                    },
                    {
                        "COUNTRY_CODE": "+62",
                        "COUNTRY_NAME": "Indonesia"
                    },
                    {
                        "COUNTRY_CODE": "+63",
                        "COUNTRY_NAME": "Philipines"
                    },
                    {
                        "COUNTRY_CODE": "+65",
                        "COUNTRY_NAME": "Singapore"
                    },
                    {
                        "COUNTRY_CODE": "+66",
                        "COUNTRY_NAME": "Thailand"
                    },
                    {
                        "COUNTRY_CODE": "+84",
                        "COUNTRY_NAME": "Vietnam"
                    },
                    {
                        "COUNTRY_CODE": "+91",
                        "COUNTRY_NAME": "India"
                    }
                ]



            });
            return oPayload;
        }
    };
});