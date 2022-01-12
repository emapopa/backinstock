# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



# Functionality 
<img src="/public/images/apikey.png" alt="My cool logo"/>
## ALERTS  
### Create new alert POST/alerts
An alert is created when a subscriber signs up to be notified of a product alert (such as a back in stock notification). Upon creation of an alert, a subscriber is added to the Rule platform. The subscriber is also added to the product that is specified by the identifier, product_id. If the product identifier is unique (i.e. no alerts have yet been created for the product), a new product will be created.

### Attributes:
- product_id - (required) Unique product ID of product alert. This should be specific enough to specify any desired variations, color, size, and distribution region.

- email - (required without phone_number)

- phone_number - (required without email)

- tags - (optional) A string array of tags that will be added to the subscriber on the Rule platform as soon as a new alert is created. By default, the tag Rule - Waiting For Product Alert will be automatically added to the subscriber when an alert is created.

-  language -(optional) Needs to be ISO 639-1 formatted. If no language is passed the subscriber will default to the account language.


## PRODUCTS  
### Get products GET/products
Retrieve a list of products with pending alerts.


### Update product PUT/products
Updates existing products stored in the product alert database.

### Attributes:
- product_id - (required) Unique product ID of product alert.

- fields - (optional) An array of custom fields that are associated with the product alert. These will be written to a subscriber when an alert is triggered, which can be used to template product-specific fields during a triggered automation. Note: If this attribute is provided it will overwrite any existing key/value pairs.

- alert_tags - (optional) A string array of tags that are applied to a subscriber when an alert is triggered. Note: If this attribute is provided it will overwrite any existing alert tags.

- stock - (optional) A numeric value of the current available stock units that are free to allocate.


### Delete product DELETE/products
Deletes a product entry and all pending alerts for that product.

## SETTINGS  
### Get alert settings GET/settings
Retrieve the current set of alert settings for the API key used to make the request.


### Update alert settings PUT/settings
Update the alert settings for alerts created by the API key. Alert settings affect when and how triggers occur based on product inventory.

### Attributes:
- alert_min_stock - (optional) The minimum stock units needed to start triggering alerts. The default is 10.

- alerts_per_stock - (optional) The number of alerts that are triggered for every inventory unit in stock. The default is 20.


