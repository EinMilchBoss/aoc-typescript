import path from 'node:path';

export function getResource(
	year: string,
	day: string,
	fileName: string
): string {
	return path.join(__dirname, '..', 'res', year, day, fileName);
}
