## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Feb 02 2024 12:57:07 GMT+0100 (hora estándar de Europa central)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.11.5|
|**Generation Platform**<br>Visual Studio Code|
|**Template Used**<br>simple|
|**Service Type**<br>OData Url|
|**Service URL**<br>https://services.odata.org/V3/Northwind/Northwind.svc
|**Module Name**<br>ui5techtest|
|**Application Title**<br>UI5 technical test sample |
|**Namespace**<br>com.resulto|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.120.5|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## ui5techtest

Demo intended to review possible intentional errors

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

## Instructions

Read the following questions and try to solve in your local workspace

1. Why is the "Discontinued" column not displayed by default in the SmartTable?
2. How can I avoid having to run the selection when entering the app (without using variants)?
3. There is a problem with the highlight, there is an implementation based on the amount of stock to show the wrong highlight if there is no stock. Would you be able to indicate where the problem lies?
4. Since the binding expression is only recommended for simple calculations, we should not chain complexities, would you know what option you would have to use to also contemplate that the stock of 3 or less appears in warning?
5. If you check the app, you will see that the implementation is in force, would you know how to replace the binding expression of the highlight with this implementation that we discussed?
6. Why doesn't the navigation to the Details page work when selecting a row?
7. Once you navigate to the Details view, why don't the context data appear?

