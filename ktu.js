export const ktuCalcButton = {
    view: "button",
    value: "calc ktu",
    click: calcKtu
}

export const ktuDatatable = {
    view: "datatable",
    editable: true,
    id: "ktuDatatable",
    width: 600,
    height: 500,
    columns: [
        { id: "col1", header: [{ text: "Показатели качества", rowspan: 2 }], width: 400 },
        { id: "col2", header: [{ text: "Коэффициент весомости, Вj" }], editor: "text", css: { 'text-align': 'center' }, fillspace: true },
        { id: "col3", header: [{ text: "Проект", css: { 'text-align': 'center', 'margin-left': '20px' } }, "Xi"], editor: "text", fillspace: true },
        { id: "col4", header: [{ text: "", css: { 'text-align': 'left' } }, "Bj * Xj"], css: { 'text-align': 'left' }, fillspace: true },
        { id: "col5", header: [{ text: "Аналог", css: { 'text-align': 'center', 'margin-left': '20px' } }, "Xi"], editor: "text", fillspace: true },
        { id: "col6", header: [{ text: "", css: { 'text-align': 'left' } }, "Bj * Xj"], css: { 'text-align': 'left' }, fillspace: true },
    ],
};

function J_etu(x, b) {
    let summ = 0;
    for (let i = 0; i < x.length; i++) {
        summ += x[i] * b[i];
    }
    return summ;
}
function calcKtu() {
    let table = $$("ktuDatatable");
    let ktuArray = [];
    table.eachRow(
        function (row) {
            ktuArray.push(table.getItem(row));
        })
    let xProject = new Array();
    let xAnalog = new Array();
    let b = new Array();
    for (let i = 0; i < ktuArray.length; i++) {
        b[i] = ktuArray[i].col2;
        xProject[i] = ktuArray[i].col3;
        xAnalog[i] = ktuArray[i].col5;
    }
    let J1 = J_etu(b, xProject);
    let J2 = J_etu(b, xAnalog);

    let newStr = {col5: "J=" + J1, col6: "J=" + J2 };
    console.log(newStr);
    table.updateItem(10,newStr);
}