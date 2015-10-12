/// <reference path="../../../typings/typescriptapp.d.ts" />


module ElectionCarousel {

    angular.module("election-carousel").value("localStorage", localStorage);


    export class LocalStorageManager implements ILocalStorageManager {

        constructor(private $window: ng.IWindowService,
            private localStorage: Storage) {
            
            $window.onbeforeunload = () => {
                this.localStorage.setItem(this._storageId, JSON.stringify(this._items));
            };
        }

        public createInstance = (options?:any) => {
            var instance = new LocalStorageManager(this.$window, this.localStorage);
            if (options && options.storageId) {
                instance.storageId = options.storageId;
            } else {
                instance.storageId = "localStorage";
            }
            return instance;
        }

        private _storageId: string;

        public get storageId() { return this._storageId; }

        public set storageId(value: string) { this._storageId = value; }

        private _items: Array<any> = null;

        public get = (): Array<any> => {
            if (this._items) {
                return this._items;
            }
            var storageEntry = this.localStorage.getItem(this._storageId);

            if (storageEntry === "undefined" || storageEntry === null || storageEntry === "null") {
                this._items = [];
            }
            else {
                this._items = JSON.parse(storageEntry);
            }
            return this._items;            
        }

        public getByName = (options: any) => {
            var items = this.get();
            var storageItem = null;
            items.forEach((item:any) => {
                if (options.name === item.name) {
                    storageItem = item;
                }
            });
            return storageItem;
        }

        public put = (options: any) => {
            var items = this.get();
            var itemExist = false;
            items.forEach((item) => {
                if (options.name === item.name) {
                    itemExist = true;
                    item.value = options.value;
                    item.category = options.category;
                }
            });
            if (!itemExist) {
                items.push(options);
            }
        }
    }

    angular.module("election-carousel").service("localStorageManager", ["$window", "localStorage", LocalStorageManager]);
} 