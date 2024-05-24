//mongodb
//1. nosql db -
//2. collections and documents, instead of table and rows
//3. json format <bson - key, value>
//4. schema less
//5. document based - like json file but binary encrypted

//UserTable ==> Users (collection)

//row of a table - user
name, session1, session2, session3, session4
David, MS, Java, Dotnet, null
Suyash, MS, Java, Dotnet, DS_ALGO

//sessions
session_name, userid
MS, David_1
Java, David_1
Dotenet, David_1


//--> read from User +"join it with"+ Sessions => create another dataset


//documents
//userDetails - collection

{
    name = "David",
    sessions = {
        session1 : "MERNStack",
        session2 : "MERNStack",
        session3 : "MERNStack",
    }
}

{
    name = "Kapelah",
    sessions = {
        session1 : "MERNStack",
        session2 : "MERNStack",
        session3 : "MERNStack",
        session4 : "MERNStack",
    }
}

{
    name = "Abalo",
    learnings = {
        session1 : "MERNStack",
        session2 : "MERNStack",
        session3 : "MERNStack",
        session4 : "MERNStack",
    }
}

//handler to check if db server is there or not
//use the connection string to make connection
//get read/write access on db and allow us to do manipulation
//provide functions to read data, add, update, delete etc
//once done close the connection

//another module - mongoose, this helps us to do all other jobs listed above +
//also allows us to create schema

