export const dateGraphic = {
    view: "datatable",
    editable: true,
    id: "dateGraphic",
    width: 600,
    height: 465,
    columns: [
        { id: "col1", header: [{ text: "Содержание работы"}], width: 400 },
        { id: "col2", header: [{ text: "Исполнители"}], width: 400 },
        { id: "col3", header: [{ text: "Длительность, дни"}], width: 400 },
        { id: "col4", header: [{ text: "График работ", css: { 'text-align': 'center', 'margin-left': '20px' } }, "Начало"], editor: "text", fillspace: true },
        { id: "col5", header: [{ text: "", css: { 'text-align': 'left' } }, "Конец"], css: { 'text-align': 'left' }, fillspace: true },
    ],
};