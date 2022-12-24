import { v4 as uuid } from "uuid";
import { PrismaAdapter } from "./adapter";

describe("Prisma Adapter", () => {
	it("should upsert a model", async () => {
		const adapter = new PrismaAdapter("ClientCredentials");
		const id = uuid();
		const data = { test: ["mostafa"] };
		await adapter.upsert(id, data);
		const result = await adapter.find(id);
		expect(result).toEqual(data);
	});

	it("should upsert a model with user code", async () => {
		const adapter = new PrismaAdapter("DeviceCode");
		const id = uuid();
		const keyId = uuid();
		const data = { test: ["talaat"], userCode: keyId };
		await adapter.upsert(id, data);
		const result = await adapter.findByUserCode(keyId);
		expect(result).toEqual(data);
	});

	it("should upsert a model with uid", async () => {
		const adapter = new PrismaAdapter("Interaction");
		const id = uuid();
		const keyId = uuid();
		const data = { test: ["abouzeid"], uid: keyId };
		await adapter.upsert(id, data);
		const result = await adapter.findByUid(keyId);
		expect(result).toEqual(data);
	});

	it("should destroy a model", async () => {
		const adapter = new PrismaAdapter("Interaction");
		const id0 = uuid();
		const id1 = uuid();
		const data = { test: ["mostafatalaat770"] };
		await adapter.upsert(id0, data);
		await adapter.upsert(id1, data);
		await adapter.destroy(id0);
		const result0 = await adapter.find(id0);
		const result1 = await adapter.find(id1);
		expect(result0).toBeFalsy();
		expect(result1).toEqual(data);
	});

	it("should revoke by grant id", async () => {
		const adapter = new PrismaAdapter("AuthorizationCode");
		const id = uuid();
		const keyId = uuid();
		const data = { test: ["mostabouzeid"], grantId: keyId };
		await adapter.upsert(id, data);
		await adapter.revokeByGrantId(keyId);
		const result = await adapter.find(id);
		expect(result).toBeFalsy();
	});

	it("should consume ", async () => {
		const adapter = new PrismaAdapter("AccessToken");
		const id = uuid();
		const data = { test: ["test"] };
		await adapter.upsert(id, data);
		await adapter.consume(id);
		const result = await adapter.find(id);
		expect(result).toEqual({
			...data,
			consumed: true,
		});
	});
});
