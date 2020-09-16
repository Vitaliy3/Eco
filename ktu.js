


export const calcKtuButtton = {
    view: "button",
    value: "Вычислить индексы",
    click: calcKtu
}


export const ktuDatatable = {
    view: "datatable",
    css: "webix_header_border",
    editable: true,
    id: "ktuDatatable",
    width: 600,
    height: 465,
    columns: [
        { id: "col1", header: [{ text: "Показатели качества", rowspan: 2 }], width: 400 },
        { id: "col2", header: [{ text: "Коэффициент весомости, Вj" }], editor: "text", fillspace: true },
        { id: "col3", header: [{ text: "Проект", colspan: 2 }, "Xi"], editor: "text", fillspace: true },
        { id: "col4", header: [null, "Bj*Xj"] },
        { id: "col5", header: [{ text: "Аналог",colspan:2 }, "Xi"], editor: "text", fillspace: true },
        { id: "col6", header: [null, "Bj*Xj"] },
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
        });
    ktuArray.pop();
    let xProject = new Array();
    let xAnalog = new Array();
    let b = new Array();
    let bx1, bx2 = 0;
    for (let i = 0; i < ktuArray.length; i++) {
        b[i] = ktuArray[i].col2;
        xProject[i] = ktuArray[i].col3;
        xAnalog[i] = ktuArray[i].col5;
        bx1 = b[i] * xProject[i];
        bx2 = b[i] * xAnalog[i];
        ktuArray[i].col4 = bx1;
        ktuArray[i].col6 = bx2;
        updateBx(ktuArray[i]);
    }
    function updateBx(obj) {
        table.updateItem(obj.id, obj);

    }

    let J1 = J_etu(b, xProject);
    let J2 = J_etu(b, xAnalog);
    let newStr = { col5: "J=" + J1, col6: "J=" + J2 };
    console.log(newStr);
    table.updateItem(10, newStr);

    //get ktu
    let ktu = J1 / J2;
    let text = "";
    text = "КТУ: " + Math.floor(ktu * 100) / 100;
    if (ktu > 1) {
        text += "   Так как КТУ больше 1, то разработка проекта с технической точки зрения оправдана.";
    } else {
        text += "   Так как КТУ меньше 1, то разработка проекта с технической точки зрения не оправдана.";
    }
    $$("ktu").setValue(text);
}

export const ktu = {
    view: "text",
    id: "ktu",
};