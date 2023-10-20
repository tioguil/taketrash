function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}



var bg = new Sprite(0, 0, 1025, 569),


spritelixo1 = new Sprite(1033, 0, 43, 50),
spritelixo2 = new Sprite(1030, 58, 46, 56),
spritelixo3 = new Sprite(1045, 308, 45, 51),
spritelixo4 = new Sprite(1028, 579, 78, 69),
spritelixo5 = new Sprite(1036, 117, 70, 50),
spritelixo6 = new Sprite(1026, 367, 80, 60),
spritelixo7 = new Sprite(1026, 431, 80, 70),
spritelixo8 = new Sprite(1026, 507, 80, 60),
spritelixo9 = new Sprite(1107, 58, 80, 80),
spritelixo10 = new Sprite(1026, 223, 80, 80),
spritelixo11 = new Sprite(1026, 165, 80, 50),



spritemenu = new Sprite(1180, 85, 390, 400),
spriteBoneco = new Sprite(14, 765, 250, 110),
spritelata = new Sprite(530, 925, 89, 1015),
spriteRecord = new Sprite(1180, 529, 350, 425),
spriteChao = new Sprite(0, 669, 1024,750 );