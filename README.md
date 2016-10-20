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

**3. Load your json file and use:**

    import { JsonLoader } from "jsontyped";

    var config: MyConfig = JsonLoader.loadFile<MyConfig>("./myconfig.json");
    
	connect(config.port, config.databaseName);


