import Jatekter from "../Jatekter.js";
QUnit.module("ellenerőzés", function (hooks) {
  let jatekter;
  hooks.before(() => {
    jatekter = new Jatekter();
  });

  QUnit.test("létezik-e", function (assert) {
    assert.ok(jatekter.ellenorzes, "létezik");
  });
  QUnit.test("létezik-e a getVizszintes", function (assert) {
    assert.ok(jatekter.getVizszintes, "létezik a getVizszintes");
  });
  QUnit.test("létezik-e a getFuggoleges", function (assert) {
    assert.ok(jatekter.getFuggoleges, "létezik a getFuggoleges");
  });
  QUnit.test("létezik-e a getAtlo", function (assert) {
    assert.ok(jatekter.getAtlo, "létezik a getAtlo");
  });
});
QUnit.module("getVizszintes tesztelése", function (hooks) {
  let jatekter;
  hooks.before(() => {
    jatekter = new Jatekter();
  });

  QUnit.test("Üres a getVizszintes", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getVizszintes(), "   @   @   @");
  });
  QUnit.test("X a getVizszintes", function (assert) {
    jatekter.lista = ["X", "X", "X", " ", "O", " ", "O", " ", " "];
    assert.equal(jatekter.getVizszintes(), "XXX@ O @O  @");
  });
  QUnit.test("O a getVizszintes", function (assert) {
    jatekter.lista = ["O", "O", "O", " ", "X", " ", "X", " ", " "];
    assert.equal(jatekter.getVizszintes(), "OOO@ X @X  @");
  });
  QUnit.test("Csak space a getVizszintes", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getVizszintes(), "   @   @   @");
  });
  QUnit.test("Véletlen elrendezés a getVizszintes", function (assert) {
    jatekter.lista = ["O", "X", "X", "O", "X", " ", "X", "O", "X"];
    assert.equal(jatekter.getVizszintes(), "OXX@OX @XOX@");
  });
  QUnit.test("Minedn ki van töltve de nincs nyerés", function (assert) {
    jatekter.lista = ["O", "X", "X", "O", "X", "O", "X", "O", "X"];
    assert.equal(jatekter.getVizszintes(), "OXX@OXO@XOX@");
  });
  QUnit.test("Minedn ki van töltve de van nyerés", function (assert) {
    jatekter.lista = ["X", "X", "X", "O", "X", "O", "X", "O", "X"];
    assert.equal(jatekter.getVizszintes(), "XXX@OXO@XOX@");
  });
  QUnit.test(
    "Az utolso oszlopban és a következő sor elején van 2 elem",
    function (assert) {
      jatekter.lista = [" ", " ", "X", "X", "X", " ", " ", " ", " "];
      assert.equal(jatekter.getVizszintes(), "  X@XX @   @");
    }
  );
});
QUnit.module("getFuggoleges tesztelése", function (hooks) {
  let jatekter;
  hooks.before(() => {
    jatekter = new Jatekter();
  });

  QUnit.test("Üres a  getFuggoleges", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getFuggoleges(), "   @   @   @");
  });
  QUnit.test("X a  getFuggoleges", function (assert) {
    jatekter.lista = ["X", "O", "O", "X", " ", "O", "X", "O", " "];
    assert.equal(jatekter.getFuggoleges(), "XXX@O O@OO @");
  });
  QUnit.test("O a  getFuggoleges", function (assert) {
    jatekter.lista = ["O", "X", "O", "O", "X", " X", "O", " ", " "];
    assert.equal(jatekter.getFuggoleges(), "OOO@XX @O X @");
  });
  QUnit.test("Csak space a  getFuggoleges", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getFuggoleges(), "   @   @   @");
  });
  QUnit.test("Véletlen elrendezés a  getFuggoleges", function (assert) {
    jatekter.lista = ["O", "X", "X", "O", "X", " ", "X", "O", "X"];
    assert.equal(jatekter.getFuggoleges(), "OOX@XXO@X X@");
  });
  QUnit.test("Minedn ki van töltve de nincs nyerés", function (assert) {
    jatekter.lista = ["O", "X", "X", "O", "X", "O", "X", "O", "X"];
    assert.equal(jatekter.getFuggoleges(), "OOX@XXO@XOX@");
  });
  QUnit.test("Minedn ki van töltve de van nyerés", function (assert) {
    jatekter.lista = ["X", "X", "O", "O", "X", "O", "X", "O", "O"];
    assert.equal(jatekter.getFuggoleges(), "XOX@XXO@OOO@");
  });
  QUnit.test(
    "Az utolso oszlopban és a következő sor elején van 2 elem",
    function (assert) {
      jatekter.lista = [" ", " ", "X", " ", "X", " ", " ", "X", " "];
      assert.equal(jatekter.getFuggoleges(), "   @ XX@X  @");
    }
  );
});
QUnit.module("getAtlo tesztelése", function (hooks) {
  let jatekter;
  hooks.before(() => {
    jatekter = new Jatekter();
  });

  QUnit.test("Üres a  getAtlo", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getAtlo(), "   @   ");
  });
  QUnit.test("X a  getAtlo", function (assert) {
    jatekter.lista = ["X", " ", " ", " ", "X", " ", " ", " ", "X"];
    assert.equal(jatekter.getAtlo(), "XXX@ X ");
  });
  QUnit.test("O a  getAtlo", function (assert) {
    jatekter.lista = ["X", " ", "O", " ", "O", " ", "O", " ", "X"];
    assert.equal(jatekter.getAtlo(), "XOX@OOO");
  });
  QUnit.test("Csak space a  getAtlo", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getAtlo(), "   @   ");
  });
  QUnit.test("Véletlen elrendezés a  getAtlo", function (assert) {
    jatekter.lista = ["O", "X", "X", 
                    "O", "O", " ", 
                    "X", "O", "X"];
    assert.equal(jatekter.getAtlo(), "OOX@XOX");
  });
  QUnit.test("Minedn ki van töltve de nincs nyerés", function (assert) {
    jatekter.lista = ["O", "O", "X", 
                    "O", "O", "O", 
                    "X", "O", "X"];
    assert.equal(jatekter.getAtlo(), "OOX@XOX");
  });
  QUnit.test("Minedn ki van töltve de van nyerés", function (assert) {
    jatekter.lista = [
    "X", "X", "O", 
    "O", "X", "O", 
    "X", "O", "X"];
    assert.equal(jatekter.getAtlo(), "XXX@OXX");
  });
  QUnit.test(
    "Az utolso oszlopban és a következő sor elején van 2 elem",
    function (assert) {
      jatekter.lista = [
      " ", " ", "", 
      " ", "X", " ", 
      " ", "X", "X"];
      assert.equal(jatekter.getAtlo(), " XX@X ");
    }
  );
});
QUnit.module.only("ellenorzes tesztelése", function (hooks) {
    let jatekter;
    hooks.before(() => {
      jatekter = new Jatekter();
    });
  
    QUnit.test("ures", function (assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.equal(jatekter.ellenorzes(), "");
    });
    QUnit.test("X nyert", function (assert) {
        jatekter.lista = ["X", "X", "X", "", " ", " ", " ", " ", " "];
        assert.equal(jatekter.ellenorzes(), "X");
    });
    QUnit.test("O nyert", function (assert) {
        jatekter.lista = ["O", " ", " ", "O", " ", " ", "O", " ", " "];
        assert.equal(jatekter.ellenorzes(), "O");
    });
    QUnit.test("Általános nincs nyerés", function (assert) {
        jatekter.lista = ["X", " O", "X", "O", "X", " O", "O", "X", "O"];
        assert.equal(jatekter.ellenorzes(), "");
    });
  });
