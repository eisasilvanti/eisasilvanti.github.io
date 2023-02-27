export default class Header {
    constructor(div) {
        let id = document.getElementById(div);
        let dW = id.offsetWidth;
        let dH = id.offsetHeight;
        let cnv;

        let x = dW / 2;
        let y = dH / 2;
        let newX;
        let newY;

        let dx;
        let dy;

        let easeX = 0;
        let easeY = 0;
        let easing = 0.024;

        let bebas;
        let raleway;
        let poppins;
        let poppinsR;

        let ayesha;
        let harris;
        let olugbenga;
        let kizzmekia;
        let jumper;
        let jason;
        let rangadias;
        let rohan;
        let sarah;
        let vanessa;
        let hadi;
        let dairon;
        let alex;
        let nadeen;

        let init = false;
        let clicked = false;

        new p5(function (p5) {

            p5.disableFriendlyErrors = true;

            p5.preload = function () {
                //fonts
                bebas = p5.loadFont('assets/font/BebasNeue-Regular.ttf');
                raleway = p5.loadFont('assets/font/Raleway-Medium.ttf');
                poppins = p5.loadFont('assets/font/Poppins-SemiBold.ttf');
                poppinsR = p5.loadFont('assets/font/Poppins-Regular.ttf');

                //img
                ayesha = p5.loadImage('./assets/img/1.jpg');
                harris = p5.loadImage('./assets/img/2.jpg');
                jason = p5.loadImage('./assets/img/3.jpg');
                jumper = p5.loadImage('./assets/img/4.jpg');
                kizzmekia = p5.loadImage('./assets/img/5.jpg');
                olugbenga = p5.loadImage('./assets/img/6.jpg');
                rangadias = p5.loadImage('./assets/img/7.jpg');
                rohan = p5.loadImage('./assets/img/8.jpg');
                sarah = p5.loadImage('./assets/img/9.png');
                vanessa = p5.loadImage('./assets/img/11.png');
                hadi = p5.loadImage('./assets/img/10.png');
                dairon = p5.loadImage('./assets/img/12.png');
                alex = p5.loadImage('./assets/img/13.png');
                // nadeen = p5.loadImage('assets/img/Nadeen.jpg');
            }

            p5.setup = function () {
                p5.frameRate(60);
                cnv = p5.createCanvas(dW, dH);
                cnv.parent(div);
                p5.watchWindowSize();
            }

            p5.watchWindowSize = function () {
                $(window).resize(function () {
                    dW = id.offsetWidth;
                    dH = id.offsetHeight;
                    p5.resizeCanvas(dW, dH);
                    x = dW / 2;
                    y = dH / 2;
                    p5.redraw();
                });
            }

            p5.navPan = function () {
                if (p5.mouseX > x && p5.mouseY > y) {
                    newX = p5.mouseX - x;
                    newY = p5.mouseY - y;
                } else if (p5.mouseX > x && p5.mouseY < y) {
                    newX = p5.mouseX - x;
                    newY = (y - p5.mouseY) * -1;
                } else if (p5.mouseX < x && p5.mouseY > y) {
                    newX = (x - p5.mouseX) * -1;
                    newY = p5.mouseY - y;
                } else if (p5.mouseX < x && p5.mouseY < y) {
                    newX = (x - p5.mouseX) * -1;
                    newY = (y - p5.mouseY) * -1;
                }

                dx = (newX * -1) - easeX;
                easeX += dx * easing;

                if (dx < 1 && dx > -1) {
                    dx = 0;
                }

                dy = (newY * -1) - easeY;
                easeY += dy * easing;

                if (dy < 1 && dy > -1) {
                    dy = 0;
                }
            }

            p5.mid = function () {
                let d = p5.dist(x, y, p5.mouseX, p5.mouseY);
                if (d < 200 / 2) {
                    init = true;
                } else if (p5.mouseY > dH) {
                    init = false;
                    easeY += 5;
                    if (easeY >= 0) {
                        easeY = 0;
                    };
                    if (easeX < 0) {
                        easeX += 5;
                        if (easeX >= 0) {
                            easeX = 0;
                        }
                    } else if (easeX >= 0) {
                        easeX -= 5;
                        if (easeX < 0) {
                            easeX = 0;
                        }
                    };
                };
            }

            p5.draw = function () {
                p5.background(0);
                p5.mid();

                if (init == true) {
                    p5.navPan();
                } else { };

                p5.translate(x, y);

                //EDIT SINI~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                //Text
                let t1 = new Words("Untuk cantik yang", easeX - 10 + (easeX / 25), (easeY - 70) + (easeY / 25), 55, p5.CENTER, poppins);
                let t2 = new Words("tiada terkara", easeX - 10 + (easeX / 25), easeY + (easeY / 25), 55, p5.CENTER, poppins);
                let t3 = new Words("eisa silvanti", easeX - 10 + (easeX / 25), (easeY + 70) + (easeY / 25), 55, p5.CENTER, poppins);
                // let t4 = new SubWords("#2021TIME100", easeX - 10, (easeY - 140), 20, p5.CENTER, poppinsR);
                let t5 = new SubWords("panggung memori", easeX - 10, (easeY + 126), 20, p5.CENTER, poppinsR);

                t1.showAll();
                t2.showAll();
                t3.showAll();

                // t4.permanentFill();
                // t4.display();

                t5.showAll();

                // p5.mouseClicked = function () {
                //     if (clicked = true && t5.isMouseInsideText()) {
                //         window.open("https://time.com/collection/time100-next-2021/", "_blank");
                //     }
                // }

                //img
                let img1 = new imgDraw(ayesha, (easeX - 600) + (easeX / 30), (easeY - 120) + (easeY / 30), "Bersama Keluarga", "Pertama kali keluar bareng elmo eris dan eis tentu. Hati senang tak pernah setinggi ini, dan yang pasti akan terus mendaki.");
                let img2 = new imgDraw(harris, (easeX - 280) + (easeX / 26), (easeY - 410) + (easeY / 26), "Usaha Pertama", "Ngegym pertama. Kutemani sampai akhir dong.");
                let img3 = new imgDraw(jason, (easeX + 220) + (easeX / 25), (easeY + 460) + (easeY / 25), "Seksi Banget", "Iya. YA.yayayayayaya.YAA.");
                let img4 = new imgDraw(jumper, (easeX + 520) + (easeX / -30), (easeY - 20) + (easeY / -30), '"Bagus ga?"', "Gesture kecil yang sangat mebahagiakan, kepercayaan penuh dan sebuah pandangan yang akan selalu terbayang.");
                let img5 = new imgDraw(olugbenga, (easeX + 200) + (easeX / -40), (easeY - 460) + (easeY / -26), "Loh kok?", "Tenang bukan punya kita kok. Padal aslinya pengen punya.");
                let img6 = new imgDraw(kizzmekia, (easeX - 950) + (easeX / -28), (easeY - 500) + (easeY / -28), "Model", "Body muka gaya semua bisa. Tapi masih ngeyel jelek.");
                let img7 = new imgDraw(rangadias, (easeX - 300) + (easeX / -27), (easeY + 400) + (easeY / -27), "Random", "Ngirim foto random tapi keingat terus sampai mati.");
                let img8 = new imgDraw(rohan, (easeX + 1150) + (easeX / 23), (easeY + 230) + (easeY / 23), "Dingin", "Dingin tapi hangat kalo bareng mah.");
                let img9 = new imgDraw(sarah, (easeX + 800) + (easeX / 27), (easeY - 420) + (easeY / 27), "Semangat", "Semua capai, letih, dan malas hilang seperti ketika bersepeda setengah pulau pertama.");
                let img10 = new imgDraw(vanessa, (easeX - 800) + (easeX / -24), (easeY + 340) + (easeY / -24), "Lovely Party", "“Party pertama di FINS Bali. Unforgetable, but also really enjoyable.");
                let img11 = new imgDraw(hadi, (easeX - 550) + (easeX / 28), (easeY - 810) + (easeY / 28), "Kasih", "Hangat, lembut, menawan. Tujuan hidup untuk selalu seperti ini setiap saat.");
                let img12 = new imgDraw(dairon, (easeX + 650) + (easeX / -30), (easeY + 490) + (easeY / -30), "Berdua Sendiri", "Menikmati dunia sekanan milik bersama dimanapun dan kapanpun kita berada.");
                let img13 = new imgDraw(alex, (easeX - 1170) + (easeX / -27), (easeY - 20) + (easeY / -27), "Narsis", "Makan, Dolan, apapun itu kamera selalu siaga untuk setiap moment istimewa.")

                img1.showAll();
                img2.showAll();
                img3.showAll();
                img4.showAll();
                img5.showAll();
                img6.showAll();
                img7.showAll();
                img8.showAll();
                img9.showAll();
                img10.showAll();
                img11.showAll();
                img12.showAll();
                img13.showAll();
            }


            class Words {
                constructor(word, x, y, size, align, font) {
                    this.word = word;
                    this.x = x;
                    this.y = y;
                    this.size = size;
                    this.font = font;
                    this.align = align;
                    this.wd;
                }

                bound() {
                    p5.noStroke();
                    p5.textFont(this.font);
                    p5.textSize(this.size);
                    p5.textAlign(this.align);

                    this.wd = p5.textWidth(this.word);
                    if ((p5.mouseX < (this.x + x) + this.wd / 2) && (p5.mouseX > (this.x + x) - this.wd / 2)) {
                        if ((p5.mouseY < ((this.y - 25) + (y)) + (this.size - 5) / 2) && (p5.mouseY > ((this.y - 25) + (y)) - (this.size - 5) / 2)) {
                            p5.fill(255);
                        } else {
                            p5.fill(255);
                        }
                    } else {
                        p5.fill(255);
                    }
                }

                display() {
                    p5.text(this.word, this.x, this.y);
                }

                showAll() {
                    this.bound();
                    this.display();
                }
            }

            class SubWords {
                constructor(word, x, y, size, align, font) {
                    this.word = word;
                    this.x = x;
                    this.y = y;
                    this.size = size;
                    this.font = font;
                    this.align = align;
                    this.wdt;
                    this.wdb;
                    this.wd;
                }

                bound() {
                    p5.noStroke();
                    p5.textFont(this.font);
                    p5.textSize(this.size);
                    p5.textAlign(this.align);

                    this.wd = p5.textWidth(this.word);
                    this.wdt = p5.textAscent();
                    this.wdb = p5.textDescent();
                    if ((p5.mouseX < (this.x + x) + this.wd / 2) && (p5.mouseX > (this.x + x) - this.wd / 2)) {
                        if ((p5.mouseY < ((this.y) + (y)) + (this.wdb)) && (p5.mouseY > ((this.y) + (y)) - (this.wdt))) {
                            p5.fill(255);
                            p5.cursor(p5.HAND);
                        } else {
                            p5.fill(150, 150, 150);
                            p5.cursor(p5.ARROW);
                        }
                    } else {
                        p5.fill(180, 180, 180);
                        p5.cursor(p5.ARROW);
                    }
                }

                permanentFill() {
                    p5.noStroke();
                    p5.textFont(this.font);
                    p5.textSize(this.size);
                    p5.textAlign(this.align);
                    p5.fill(150, 150, 150);
                }

                display() {
                    p5.text(this.word, this.x, this.y);
                }

                isMouseInsideText() {
                    this.wd = p5.textWidth(this.word);
                    this.wdt = p5.textAscent();
                    this.wdb = p5.textDescent();

                    return ((p5.mouseX < (this.x + x) + this.wd / 2) && (p5.mouseX > (this.x + x) - this.wd / 2)) && ((p5.mouseY < ((this.y) + (y)) + (this.wdb)) && (p5.mouseY > ((this.y) + (y)) - (this.wdt)));
                }

                mouseOver() {
                    if (this.isMouseInsideText()) {
                        clicked = true;
                    } else {
                        clicked = false;
                    }
                }

                showAll() {
                    this.bound();
                    this.display();
                    this.mouseOver();
                }
            }

            class imgDraw {
                constructor(image, x, y, name, text, width, height) {
                    this.image = image;
                    this.x = x;
                    this.y = y;
                    this.w = width;
                    this.h = height;
                    this.text = text;
                    this.name = name;
                    this.iw;
                    this.ih;
                }

                display() {
                    p5.imageMode(p5.CENTER);
                    p5.image(this.image, this.x, this.y, this.w = 0, this.h = 0);
                }

                blackBox() {
                    this.iw = this.image.width;
                    this.ih = this.image.height;
                    p5.push();
                    if ((p5.mouseX < (this.x + x) + this.iw / 2) && (p5.mouseX > (this.x + x) - this.iw / 2)) {
                        if ((p5.mouseY < (this.y + y) + this.ih / 2) && (p5.mouseY > (this.y + y) - this.ih / 2)) {
                            p5.fill(0, 0, 0, 200);
                        } else {
                            p5.noFill();
                        };
                    } else {
                        p5.noFill();
                    };
                    p5.rectMode(p5.CENTER);
                    p5.rect(this.x, this.y, this.iw + 10, this.ih + 10);
                    p5.pop();
                }

                textDisp() {
                    let p;
                    let q;
                    let xp = 300;
                    let yp = 350;
                    p5.push();
                    if ((p5.mouseX < (this.x + x) + this.iw / 2) && (p5.mouseX > (this.x + x) - this.iw / 2)) {
                        if ((p5.mouseY < (this.y + y) + this.ih / 2) && (p5.mouseY > (this.y + y) - this.ih / 2)) {
                            p5.fill(150);
                        } else {
                            p5.noFill();
                        };
                    } else {
                        p5.noFill();
                    };
                    p5.textFont(poppins);
                    p5.textSize(17);
                    if (this.x > easeX) {
                        p5.textAlign(p5.RIGHT);
                        p = xp;
                        q = yp;
                    } else {
                        p5.textAlign(p5.LEFT);
                        p = 0;
                        q = 0;
                    }
                    p5.push();
                    if ((p5.mouseX < (this.x + x) + this.iw / 2) && (p5.mouseX > (this.x + x) - this.iw / 2)) {
                        if ((p5.mouseY < (this.y + y) + this.ih / 2) && (p5.mouseY > (this.y + y) - this.ih / 2)) {
                            p5.fill(255);
                        } else {
                            p5.noFill();
                        };
                    } else {
                        p5.noFill();
                    };
                    p5.textFont(poppins);
                    p5.text(this.name, this.x - (p), this.y + ((39 / 100) * this.ih - 21), xp);
                    p5.pop();
                    p5.text(this.text, this.x - (q), this.y + ((39 / 100) * this.ih), yp);
                    p5.pop();
                }

                showAll() {
                    this.display();
                    this.blackBox();
                    this.textDisp();
                }
            }

        }, div);
    }
}
