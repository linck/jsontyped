Jsontyped
--------
Load Json file in Typescript Object

How to use
---------
**Simple!**

**1. Create your json file:**

*myconfig.json*

    {
        "port": "3000",
        "databaseName": "teste"
    }


**2. Define your type:**
   

    export interface MyConfig {
           port: number;
           databaseName: String;
       }

**3. Load you json file and use:**

    var config: MyConfig = JsonLoader.loadFile<MyConfig>(".", "myconfig.json");
    
	connect(config.port, config.databaseName);


