# Store API

Store API is a RESTful API designed to manage products with search functionality based on various criteria such as name, company, whether it's featured, price range, rating, sorting options, pagination, and selection. It provides a flexible way to search for products in a store inventory while ensuring robust error handling for smooth operation.

## Features

- **Search Products**: Users can search for products based on multiple criteria including name, company, whether it's featured, price range, and rating.
- **Sorting**: Products can be sorted based on different attributes such as name, price, rating, etc.
- **Pagination**: Search results can be paginated to efficiently handle large datasets.
- **Selection**: Users can select specific fields to be returned in the search results to optimize bandwidth usage.
- **Error Handling**: The API includes comprehensive error handling mechanisms to handle various scenarios gracefully and provide informative responses.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or any other database of your choice)
- **Additional libraries**: Express.js for routing, Mongoose for MongoDB object modeling, etc.

## Installation

1. Clone the repository: `git clone https://github.com/Shahzaib-ur-Rehman/store-api.git`
2. Navigate to the project directory: `cd store-api`
3. Install dependencies: `npm install`
4. Configure environment variables: Create a `.env` file in the root directory and define necessary variables like database connection string, port, etc.
5. Start the server: `npm start`

## API Endpoints

- **Search Products**: `GET /api/v1/products`
  - Parameters: 
    - `name`: Search by product name
    - `company`: Search by company name
    - `isFeatured`: Search for featured products (true/false)
    - `price`: Search within a price range (numericFilters=price>40)
    - `rating`: Search products with a minimum rating (numericFilters=rating>4)
    - `sort`: Sort products by attribute (name, price, rating, etc.)
    - `page`: Pagination page number
    - `limit`: Pagination limit (number of products per page)
    - `select`: Select specific fields to be returned in the results
  - Example: `/api/v1/products?isFeatured=false&sort=name&company=ikea&select=name,price&page=2&limit=5&numericFilters=price>40,rating>4`

## Usage

1. Start the server according to the installation instructions.
2. Use any API testing tool (such as Postman) to send requests to the API endpoints.
3. Customize the search parameters according to your requirements to find specific products.
4. If an error occurs, the API will provide informative responses to guide you through the process.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.


## Acknowledgements

- Inspiration: [[FreeCodeCamp](https://www.youtube.com/watch?v=qwfE7fSVaZM&t=18698s&ab_channel=freeCodeCamp.org)]
- Special thanks to contributors and supporters of the project.
