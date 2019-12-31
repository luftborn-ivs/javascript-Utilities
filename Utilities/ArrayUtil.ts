export default class ArrayUtil {
	public static FromNodeList<T extends Node>(list: NodeListOf<T>): T[] {
		return Array.prototype.concat.apply([], list as any);
	}

	public static divideAccordingProperty<T>(points: T[], selector: (item: T) => any): T[][] {
		const chunks = [];
		points.reduce((a, b) => {
			if (selector(a) === selector(b)) {
				this.addToCurrent(chunks, selector(b));
			} else {
				this.addToNew(chunks, selector(b));
			}
			return b;
		});
		return chunks;
	}
	private static addToCurrent<T>(chunks: T[][], item: T) {
		if (!chunks.length) {
			chunks[0] = [];
		}
		chunks[0].push(item);
	}
	private static addToNew<T>(chunks: T[][], item: T) {
		chunks[chunks.length] = new Array<T>();
		chunks[chunks.length].push(item);
	}
}
