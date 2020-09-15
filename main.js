import { ktuDatatable, ktuCalcButton } from './ktu.js';

const mainPage = {
    id: "tabView",
    view: "tabview",
    tabbar: {
        on: {
            onItemClick: function () {
                // loadData(this.getValue());
            }
        }
    },

    cells: [
        {
            header: "Учет оборудования",
            id: "regProducts",
            rows: [
                ktuDatatable,
                ktuCalcButton,
            ]
        },
        {
            header: "Учет сотрудников",
            id: "regUsers",
            rows: [
            ]
        },
        {
            header: "События выдачи",
            id: "regUserEvents",
            rows: [
            ]
        },
        {
            header: "Перемещение оборудования",
            id: "moveProducts",
            rows: [
            ],
        },
    ],
};

webix.ui({
    rows: [
        mainPage,
    ]
});
let data = [
    { id: 1, col1: "1. Удобство работы (пользовательский интерфейс)", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 2, col1: "2.Новизна (соответствие современным требованиям)", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 3, col1: "3.Соответствие профилю деятельности заказчика", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 4, col1: "4.Ресурсная эффективность", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 5, col1: "5. Надежность (защита данных)", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 6, col1: "6.Скорость доступа к данным", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 7, col1: "7.Гибкость настройки", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 8, col1: "8.Обучаемость персонала", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 9, col1: "9.Соотношение стоимость/возможности", col2: 0, col3: 0, col4: 0, col5: 0, col6: 0 },
    { id: 10, col1: "Обобщенный показатель качества JЭТУ", col5: "J=0", col6: "J=0" },
]
$$("ktuDatatable").parse(data);