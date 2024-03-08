'use strict';

const year = prompt('Введіть свій рік народження', '1991');
let country = '';

if (year === null) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження')
} else if (!isNaN(Number(year))) {
    const city = prompt('Введіть своє місто', 'Київ');
    switch (city) {
        case null:
            alert('Шкода, що Ви не захотіли ввести своє місто')
            break
        case 'Київ':
            country = 'Ти живеш у столиці України'
            break
        case 'Вашингтон':
            country = 'Ти живеш у столиці Сполучених штатів'
            break
        case 'Лондон':
            country = 'Ти живеш у столиці Великобританії'
            break
        default:
            country = `Ти живеш у місті ${city}`
    }
    if (city !== null) {
        const sport = prompt('Введіть свій улюблений вид спорту', 'бокс');
        switch (sport.toLowerCase()) {
            case null:
                alert('Шкода, що Ви не захотіли ввести свій улюблений спорт')
                break
            case 'бокс':
                alert(`Вам ${2024 - Number(year)} років.\n${country}.\nКруто! Хочеш стати як Усик?`)
                break
            case 'баскетбол':
                alert(`Вам ${2024 - Number(year)} років.\n${country}.\nКруто! Хочеш стати як Леброн Джеймс?`)
                break
            case 'гольф':
                alert(`Вам ${2024 - Number(year)} років.\n${country}.\nКруто! Хочеш стати як Тайгер Вудс?`)
                break
            default:
                alert(`Вам ${2024 - Number(year)} років.\n${country}.\nЗі спортом у тебе не дуже`)
        }
    }
}