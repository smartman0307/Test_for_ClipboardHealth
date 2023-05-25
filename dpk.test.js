const { deterministicPartitionKey } = require("./index");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("should return a trivial partition key if no event is provided", () => {
    expect(deterministicPartitionKey()).toEqual("0");
  });

  it("should use the provided partition key if present", () => {
    const event = { partitionKey: "my-partition-key" };
    expect(deterministicPartitionKey(event)).toEqual("my-partition-key");
  });

  it("should calculate a hash of the event object if no partition key is provided", () => {
    const event = { exampleField: "exampleValue" };
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(deterministicPartitionKey(event)).toEqual(expectedHash);
  });

  it("should convert non-string partition keys to strings", () => {
    const event = { partitionKey: 123 };
    expect(deterministicPartitionKey(event)).toEqual("123");
  });

  it("should hash the partition key if its length exceeds a maximum value", () => {
    const longKey = Array(259).fill("a").join("");
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(longKey)
      .digest("hex");
    expect(deterministicPartitionKey({ partitionKey: longKey })).toEqual(
      expectedHash
    );
  });
});
