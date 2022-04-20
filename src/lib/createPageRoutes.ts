import fs from "fs";

const ignoreList = ["index", "_app", "_document", "_template", "api"];

export const createPageRoutes = () => {
	const fileList = fs.readdirSync("./pages");
	return fileList
		.map((file) => {
			return file.replace(".tsx", "");
		})
		.filter((file) => !ignoreList.includes(file));
};
