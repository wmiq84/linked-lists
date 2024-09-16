class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	append(value) {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.nextNode !== null) {
				current = current.nextNode;
			}
			current.nextNode = newNode;
		}
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.nextNode = this.head;
		this.head = newNode;
	}

	size() {
		let nodeCount = 0;
		let current = this.head;
		while (current.nextNode !== null) {
			nodeCount += 1;
			current = current.nextNode;
		}
		return nodeCount;
	}

	head() {
		return this.head;
	}

	getTail() {
		let current = this.head;
		while (current.nextNode !== null) {
			current = current.nextNode;
		}
		return current;
	}

	at(index) {
		let current = this.head;
		let currentIndex = 0;
		while (currentIndex < index) {
			current = current.nextNode;
			currentIndex += 1;
		}
		return current;
	}

	pop() {
		let current = this.head;
		while (current.nextNode.nextNode !== null) {
			current = current.nextNode;
		}
		current.nextNode = null;
	}

	contains(value) {
		let current = this.head;
		while (current !== null) {
			if (current.value === value) {
				return true;
			}
			current = current.nextNode;
		}
		return false;
	}

	find(value) {
		let current = this.head;
		let currentIndex = 0;
		while (current !== null) {
			if (current.value === value) {
				return currentIndex;
			}
			current = current.nextNode;
			currentIndex += 1;
		}
		return null;
	}

	toString() {
		let current = this.head;
		while (current !== null) {
            console.log(`( ${current.value} ) -> `)
            current = current.nextNode;
		}
        console.log(`null`);
        return null;
	}
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}

	size() {}
}

// Testing

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());