const Product = require("../models/product");

//@METHOD GET JUST FOR TESTING
//GET ALL PRODUCTS

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({
    success: true,
    message: "ALL PRODUCTS",
    data: {
      total: products.length,
      products,
    },
  });
};

//@METHOD GET
// FOR FILTERING, SORTING, SEARCHING, SELECTING etc

const getAllProducts = async (req, res) => {
  const { isFeatured, name, sort, company, select ,numericFilters} = req.query;
  let queryObject = {};
  //search by name query
  if (name) {
    queryObject.name = {
      $regex: name,
      $options: "i",
    };
  }

  //search using featured filter
  if (isFeatured) {
    queryObject.isFeatured = isFeatured;
  }

  //search by company
  if (company) {
    queryObject.company = company;
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;

    let filters = numericFilters.replace(regEx,   (match) => `-${operatorMap[match]}-`)
    const options = ['price','rating'];
    console.log(filters)
    filters= filters.split(",").forEach(item => {
      const [field,operator,value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field]={[operator]:Number(value)}
      }
    });
  }

  let result = Product.find(queryObject);

  //sorting list
  if (sort) {
    let sortingFilters = sort.replace(",", " ");
    result = result.sort(sortingFilters);
  }

  //selecting fields
  if (select) {
    let selectingFilters = select.replace(",", " ");
    result = result.select(selectingFilters);
  }

  // if (limit) {
  //   let PageSkip= (page-1) *limit;
  //   result= result.limit(limit).skip(PageSkip)
  // }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;

  res.status(200).json({
    success: true,
    message: "ALL PRODUCTS",
    data: {
      total: products.length,
      products,
    },
  });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
