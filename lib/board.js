'use strict';

function create2dArray(width, height) {
	let columns = new Array(width || 0);

	for (let x = 0; x < width || 0; x++) {
		columns[x] = new Array(height || 0);
	}

	return columns;
}

class Board {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.cells = create2dArray(width, height);
	}

	getCell = function (x, y) {
		return this.cells[x][y];
	};
	setCell = function (x, y, value) {
		this.cells[x][y] = value;
	};
	toggleCell = function (x, y) {
		this.cells[x][y] = !this.isAlive(x, y);
	};
	isInBounds = function (x, y) {
		return (0 <= x && x < this.width) &&
			(0 <= y && y < this.height);
	};
	isAlive = function (x, y) {
		return this.getCell(x, y) === true;
	};
	isDead = function (x, y) {
		return this.getCell(x, y) !== true;
	};
	getLiveNeighbors = function (x, y) {
		let count = (this.isAlive(x, y) ? -1 : 0);
		for (let yD = 0; yD < 3; yD++) {
			for (let xD = 0; xD < 3; xD++) {
				if (this.isInBounds(x + xD - 1, y + yD - 1) &&
					this.isAlive(x + xD - 1, y + yD - 1)) {
					count++;
				}
			}
		}
		return count;
	};
}

module.exports = Board;