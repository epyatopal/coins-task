describe('Test', function() {
    var categoryService;
    beforeEach(module('coins'));

    beforeEach(inject(function (CategoryService) {
        categoryService = CategoryService;
    }));

    describe('CategoryService service test', function(){

        it('If add one coin to category, category should has one coin', function() {
            var categories = categoryService.get()
            var cur_cat;
            categories.forEach(function(cat) {
                if(cat.name === "Entertainment") cur_cat = cat;
            });

            categoryService.changeCoin(1, cur_cat);

            expect(cur_cat.coins).toEqual(1);
        });

        it("If category has 0 coins, and you try remove one, mustn't do it", function() {
            var categories = categoryService.get()
            var cur_cat;
            categories.forEach(function(cat) {
                if(cat.name === "Entertainment") cur_cat = cat;
            });

            categoryService.changeCoin(-1, cur_cat);

            expect(cur_cat.coins).toEqual(0);
        });

        it("If category has 10 coins, and you try add one, mustn't do it", function() {
            var categories = categoryService.get()
            var cur_cat;
            categories.forEach(function(cat) {
                if(cat.name === "Entertainment") cur_cat = cat;
            });

            cur_cat.coins = 10;

            categoryService.changeCoin(1, cur_cat);

            expect(cur_cat.coins).toEqual(10);
        });



    });
});