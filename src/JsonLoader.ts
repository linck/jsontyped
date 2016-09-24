import * as fs from "fs";
import * as path from "path";

export class JsonLoader {
    public static loadFile<T>(filePath: String, fileName: String): T | null {
        let file: string = path.join(filePath, fileName);
        if (fs.existsSync(file)) {
            return <T>JSON.parse(fs.readFileSync(file, { encoding: 'utf8' }).toString());
        } else {
            console.log(`File ${filePath}${fileName} not found`);
            return null;
        }
    }
}