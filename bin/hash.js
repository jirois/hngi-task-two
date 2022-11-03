import { createHash } from "crypto";

const hash = (content) => {
  return createHash("sha256").update(content).digest("hex");
};

export default hash;
