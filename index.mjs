import { fileURLToPath } from "url";
import { dirname } from "path";
export const theresWaldo = (path = import.meta.url) => {
  return {
    get file() {
      return fileURLToPath(path);
    },

    get dir() {
      return dirname(this.file);
    },
  };
};

export default theresWaldo;
