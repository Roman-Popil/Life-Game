let Board = require('./board');
let Game = require('./game');
let StringRenderer = require('./string_renderer');

class App {
	constructor(config) {

		let board = new Board(config.width, config.height);
		this.game = new Game(board);

		config.liveCells.forEach(function (liveCell) {
			board.setCell(liveCell[0], liveCell[1], true);
		});

		this.renderer = new StringRenderer();
		this.renderer.emptySymbol = config.deadCell;
		this.renderer.lifeSymbol = config.liveCell;
	}

	renderBoard() {
		return this.renderer.render(this.game.board);
	}
	tick() {
		this.game.tick();
	};
}

module.exports = App;