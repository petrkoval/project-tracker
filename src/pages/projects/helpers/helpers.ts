export function createTableFiltersFromEnum<T>(obj: {[p: string]: T} | ArrayLike<T>) {
	return Object.entries(obj).map(([_, value]) => ({
		text: value,
		value: value
	}))
}