var Mother = $.Class({
	$init : function() {
		this.name = "mother";
	},
	methodA : function() {
		return this.methodB();
	},
	methodB : function() {
		return "mother's methodB";
	}
});

test("Mother", function() {
	var oMother = new Mother();

	equal(oMother.name, "mother", "Mother's name is mother.");
	equal(oMother.methodA(), "mother's methodB",
			"Mother's methodA is mother's methodB");
	equal(oMother.methodB(), "mother's methodB",
			"Mother's methodA is mother's methodB");
});

var Son = $.Class({
	$init : function() {
		this.name = "son";
	},
	methodA : function() {
		return this.$super.methodA();
	}
}).extend(Mother);

test("Son", function() {
	var oSon = new Son();

	equal(oSon.name, "son", "Son's name is son.");
	equal(oSon.methodA(), "mother's methodB",
			"Mother's methodA is mother's methodB");
});