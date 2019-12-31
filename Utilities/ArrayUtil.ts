export default class ArrayUtil {
	public static FromNodeList<T extends Node>(list: NodeListOf<T>): T[] {
		return Array.prototype.concat.apply([], list as any);
	}

	private static addToCurrent<T>(chunks: T[][], item: T) {
		if (!chunks.length) {
			chunks[0] = [];
		}
		chunks[chunks.length - 1].push(item);
	}

	private static addToNew<T>(chunks: T[][], item: T) {
		chunks[chunks.length] = [];
		chunks[chunks.length - 1].push(item);
	}

	public static divideAccordingProperty<T>(array: T[], selector: (item: T) => any): T[][] {
		const chunks = [];
		chunks[0] = [array[0]];
		array.reduce((a, b) => {
			if (selector(a) === selector(b)) {
				this.addToCurrent(chunks, b);
			} else {
				this.addToNew(chunks, b);
			}
			return b;
		});
		return chunks;
	}
}
