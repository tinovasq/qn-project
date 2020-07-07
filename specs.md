# Project Specifications:

## Data Entries - Product

### Fields & Types:

json
{
"id": "number"
"image_url": "string"
"name": "string"
"description": "string"
}

## Components

### Server

1. Use KoaJS as server
2. In memory storage of data entries
3. Routes:

- /product [POST] -- Create a new product
- /product [GET] -- Get all products
- /product/:id [GET] -- Get an existing product by ID
- /product/:id [PUT] -- Update an existing product by ID
- /product/:id [DELETE] -- Delete an existing product by ID

### Client

1. Use React as JavaScript View Library
2. Main Route displays list of products

- Each product has an edit button => opens a dialog with text inputs to edit the product's fields
- Each product has a delete button => deletes the product from the server and refreshes current view
- Each product shows the image field as an image
- Each product shows the name field as the title of the item
- Each product shows the description field as a caption/paragraph under name
