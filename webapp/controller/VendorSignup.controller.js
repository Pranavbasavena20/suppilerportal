<mvc:View controllerName="com.spm.suppilerportal.controller.LandingView" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m" xmlns:layout="sap.ui.layout" xmlns:form="sap.ui.layout.form">
    <Page id="page" class="backgroundclass" showHeader="false" title="{i18n>title}">
        <content>
            <FlexBox justifyContent="Center">
                <HBox width="30%" justifyContent="SpaceBetween" class="paddingClass">
                    <RadioButton class="whiteText1" text="Retailer Login" />
                    <RadioButton class="whiteText1" text="Vendor Login" />
                </HBox>
            </FlexBox>
            <FlexBox justifyContent="Center">
                <VBox width="30%" height="50%" class="paddingClass marginClass backgroundshadow" justifyContent="Center" backgroundDesign="Solid">
                    <HBox justifyContent="Center">
                        <Label design="Bold" text=" Welcome" class="wlcmTxt sapUiSmallMargin" />
                    </HBox>
                    <form:SimpleForm layout="ResponsiveGridLayout" labelSpanXL="12" labelSpanL="12" labelSpanM="12" columnsL="1" columnsXL="1" editable="true" adjustLabelSpan="false" singleContainerFullSize="false">
                        <form:content>
                            <VBox>
                                <Label text="User Name" />
                                <Input value="{oLanding>/sUserName}" />
                                <layoutData>
                                    <layout:GridData span="XL6 L6 M6 S12" />
                                </layoutData>
                            </VBox>
                            <VBox>
                                <Label text="Password" />
                                <Input type="Password" value="{oLanding>/sPassword}" />
                                <layoutData>
                                    <layout:GridData span="XL12 L12 M12 S12" linebreak="false" />
                                </layoutData>
                            </VBox>
                        </form:content>
                    </form:SimpleForm>
                    <Button class="btnclass" type="Emphasized" text="Submit" press="onfnpresssubmit" width="100%" />
                    <HBox justifyContent="Center">
                        <Text class="sapUiTinyMarginTop" text="New User ? Please" />
                        <Link press="onSignUp" class="sapUiTinyMarginBegin sapUiTinyMarginTop" text="Signup" />
                    </HBox>
                    <HBox justifyContent="Center">
                        <Link class="sapUiTinyMarginBegin sapUiTinyMarginTop" text="Forgot Password" />
                    </HBox>
                </VBox>
            </FlexBox>
        </content>
    </Page>
</mvc:View>
