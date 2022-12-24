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
      "com.spm.suppilerportal.controller.IframeApp",
      {
        onInit: function () {
          debugger;
          this.getRouter().getRoute("IframeApp").attachPatternMatched(this._onObjectMatched, this);
        },
        // onAfterRendering : function(){
        //   debugger;
        //   var oSelectedApp = this.getOwnerComponent().getModel("CoreRoutingModel").getProperty("/selectedApplication");
        //   var oHtmlFrame = this.getView().byId("appIframe");
        //       // oHtmlFrame.setSrc(oSelectedApp.URL);
        //       var oFrameContent = oHtmlFrame.$()[0];
        //   console.log(oFrameContent);
        //   oFrameContent.setAttribute("src", oSelectedApp.URL); 
        // },
        _onObjectMatched : function(oEvent){
          debugger;
          var oSelectedApp = this.getOwnerComponent().getModel("CoreRoutingModel").getProperty("/selectedApplication");
          var oPage = this.getView().byId("iFrameAppPage");
              oPage.removeAllContent();
          oPage.addContent(new sap.ui.core.HTML({
            content: "<iframe src=\"" + oSelectedApp.URL+"\" width='100%' height='100%' target='_top'></iframe>"  
            }));

          // var oHtmlFrame = this.getView().byId("appIframe");
              // oHtmlFrame.setSrc(oSelectedApp.URL);
          //     var oFrameContent = oHtmlFrame.$()[0];
          // console.log(oFrameContent);
          // if(oFrameContent){
          //   oFrameContent.setAttribute("src", oSelectedApp.URL); 
          },
          onExit: function(){
            var oPage = this.getView().byId("iFrameAppPage");
                oPage.destroyContent();
          }
          
        }
      
    );
  }
);
