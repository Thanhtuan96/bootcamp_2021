# MongoDB database

using mongo database for user management.

1. Installation

    [MongoDB](https://docs.mongodb.com/manual/installation)

2. Learn MongoDB concept

    - The role of ORM/ODM's
    - Connecting Mongoose to Mongo
    - Defing a Model
    - Mongoose CRUD
    - Schema Constraints
    - Model Instance & Static Methods
    - Mongoose Middleware
    - Mongoose Virtuals

    1. The role of ORM/ODM's

        - ODM (Object Data Mapper?)
        - Object Document Mapper

        >ODMs like Mongoose map documents coming from a database into usable Javascript objects.

        >Mongoose provides ways for us to model out our application data and define a Schema. It offers easy ways to validate data and build complex queries from the comfort of JS
    2. Define a Model

        first we should create a Schema for data. A schema defines document properties through an object where the key name corresponds to the property name in the collection.

        ```JS
        let emailSchema = new mongoose.Schema({
        email: String})
        ```
        Here we define a property called email with a schema type String which maps to an internal validator that will be triggered when the model is saved to the database. It will fail if the data type of the value is not a string type.

        The following Schema Types are permitted:

        - Array
        - Boolean
        - Buffer
        - Date
        - Mixed( a generic/ flexible data type)
        - Number
        - ObjectId
        - String

