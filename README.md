# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Functionality 
## ALERTS  
# Create new alert POST/alerts
An alert is created when a subscriber signs up to be notified of a product alert (such as a back in stock notification). Upon creation of an alert, a subscriber is added to the Rule platform. The subscriber is also added to the product that is specified by the identifier, product_id. If the product identifier is unique (i.e. no alerts have yet been created for the product), a new product will be created.

Attributes ¶
product_id - (required) Unique product ID of product alert. This should be specific enough to specify any desired variations, color, size, and distribution region.

email - (required without phone_number)

phone_number - (required without email)

tags - (optional) A string array of tags that will be added to the subscriber on the Rule platform as soon as a new alert is created. By default, the tag Rule - Waiting For Product Alert will be automatically added to the subscriber when an alert is created.

language - (optional) Needs to be ISO 639-1 formatted. If no language is passed the subscriber will default to the account language.

Example URI
POST https://ix.rule.io/productalert/alerts
RequestShow
Response  201Show
Response  400Show
Response  400Show
Response  500Show
PRODUCTS  ¶
Get productsGET/products
Retrieve a list of products with pending alerts.

Example URI
GET https://ix.rule.io/productalert/products
Response  200Show
Update productPUT/products
Updates existing products stored in the product alert database.

Attributes ¶
product_id - (required) Unique product ID of product alert.

fields - (optional) An array of custom fields that are associated with the product alert. These will be written to a subscriber when an alert is triggered, which can be used to template product-specific fields during a triggered automation. Note: If this attribute is provided it will overwrite any existing key/value pairs.

alert_tags - (optional) A string array of tags that are applied to a subscriber when an alert is triggered. Note: If this attribute is provided it will overwrite any existing alert tags.

stock - (optional) A numeric value of the current available stock units that are free to allocate.

Example URI
PUT https://ix.rule.io/productalert/products
RequestShow
Response  200Show
Response  404Show
Delete productDELETE/products
Deletes a product entry and all pending alerts for that product.

Example URI
DELETE https://ix.rule.io/productalert/products
RequestShow
Response  200Show
Response  404Show
SETTINGS  ¶
Get alert settingsGET/settings
Retrieve the current set of alert settings for the API key used to make the request.

Example URI
GET https://ix.rule.io/productalert/settings
Response  200Show
Update alert settingsPUT/settings
Update the alert settings for alerts created by the API key. Alert settings affect when and how triggers occur based on product inventory.

Attributes ¶
alert_min_stock - (optional) The minimum stock units needed to start triggering alerts. The default is 10.

alerts_per_stock - (optional) The number of alerts that are triggered for every inventory unit in stock. The default is 20.

Example URI
PUT https://ix.rule.io/productalert/settings
RequestShow
Response  200Show
