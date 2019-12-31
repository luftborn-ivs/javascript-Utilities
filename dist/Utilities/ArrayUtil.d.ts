export default class ArrayUtil {
    static FromNodeList<T extends Node>(list: NodeListOf<T>): T[];
    static divideAccordingProperty<T>(points: T[], selector: (item: T) => any): T[][];
    private static addToCurrent;
    private static addToNew;
}
