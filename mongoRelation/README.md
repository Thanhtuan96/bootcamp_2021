# Relational Database with mongoDb

We can make modelling One-to-N relationships in MongoDB.

When you modeling "One-to-N" relationships in MongoDB, you have a variety of choices, so you have to carefully think through the structure of data. The main citeria you need to consider are:

-   What is the cardinality of the relationship: is it "one-to-few", "one-to-many", or "one-to-squillions"?

    -   one-to-few: embed the data directly in the doccument
    -   one-to-many: one option is to store your data separately, but then store references to document ID's somewhere inside the parent
    -   one-to-bajillions: with thoudsands or more documents, it;s more efficient to store a reference to the parent on the child document.

-   Do you need to access the object on the "N" side separately, or only in the context of the parent object?
-   What is the ratio of updates to reads for a particular field?

Your main choices for structuring the data are:

-   For "One-to-few", you can use an array of embedded documents.
-   For "one-to-many", or on occasions when the "N" side must stand alone, you should use an array of references. You can also use a "parent-reference" on the N side if it optimizes your data access partern.
-   For "one-to-squillions", you should use a "parent-reference" in the document storing the "N" side.
