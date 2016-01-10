/// <reference path="../../typings/main.d.ts" />
// FIXME remove reference once there is a solution to
// https://github.com/ivogabe/gulp-typescript/issues/190
// https://github.com/typings/typings/issues/69
// https://github.com/dsebastien/modernWebDevBuild/issues/76

import {describe, xdescribe, it, xit} from "jasmine";

describe("sanity checks", () => {
	it("should be able to test", () => {
		expect(true).toBe(true);
	});

	xit("should skip this", () => {
		expect(4).toEqual(40);
	});
});
