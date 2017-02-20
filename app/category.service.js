'use strict';

(function () {

    function CategoryService() {
        var categories = [
            { name: "Entertainment", coins: 0}
            , { name: "Food & clothing", coins: 0}
            , { name: "Loans", coins: 0}
            , { name: "Miscellaneous expenses", coins: 0}
        ];
        return {
            free_coins: {value: 10},
            get: function() {
                return categories;
            },

            changeCoin: function (value, entity) {
                var new_val = this.free_coins.value-value;
                var coins_in_entity = entity.coins + value;
                if(new_val > 10 || new_val<0 || coins_in_entity < 0 || coins_in_entity > 10) return;
                this.free_coins.value = new_val;
                entity.coins = coins_in_entity;
            },

            getCoins: function getCoins() {
                var coins = [];
                for(let i=0;i<this.free_coins.value;i++){
                    coins.push(i);
                }
                return coins;
            }
        }

    }

    angular.module('coins')
        .service("CategoryService", CategoryService);

}).call();