document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Серия ", description: "с 31 октября 2013 по 12 января 2019." },
        { term: "ВасГен ", description: "Василий Генадьевич" },
        { term: "Дублик", description: "Забить два гола " },
        { term: "Серии", description: "Всего было 260 серий " },
        { term: "Сезоны ", description: "6 сезонов." },
        { term: "Дыра ", description: "Пропускает шайбы." },
        { term: "Чикин", description: "Заселится " },
        { term: "Филин ", description: "Филосов " },
        { term: "Выпуск", description: "DVD и Книги " },
        { term: "НХЛ", description: "Национальная хоккейная лига." }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
