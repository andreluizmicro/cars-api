import { parse } from "csv-parse";
import fileSystem from "fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fileSystem.createReadStream(file.path);

    const parseFile = parse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
