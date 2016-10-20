import * as fs from "fs";
import * as path from "path";

export class JsonLoader {
    public static loadFile<T>(filePath: string, fileName?: string): T | null {
        let file: string;
        if (fileName) {
            file = path.join(filePath, fileName);
        } else {
            file = path.join(filePath);
        }

        if (fs.existsSync(file)) {
            return <T>JSON.parse(fs.readFileSync(file, { encoding: 'utf8' }).toString());
        } else {
            console.log(`File ${filePath} not found`);
            return null;
        }
    }
}