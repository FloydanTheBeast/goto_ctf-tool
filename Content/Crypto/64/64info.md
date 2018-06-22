# Base64














Идея base64 проста — обратимое кодирование, с возможностью восстановления, которое переводит все символы восьмибитной кодовой таблицы в символы, гарантированно сохраняющиеся при передаче данных в любых сетях и между любыми устройствами.

В основе алгоритма лежит сведение трех восьмерок битов (24) к четырем шестеркам (тоже 24) и представление этих шестерок в виде символов ASCII. Таким образом получается обратимое шифрование, единственным недостатком которого будет увеличивающийся при кодировании размер — в соотношении 4:3.

> Берем массив символов «ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/» и получившиеся числа переводим в эти символы, используя их, как индексы массива, получаем «wMHCw8Q». Остается только добавить в конце один символ "=", как указание на один лишний нулевой байт, который мы добавляли на первом шаге и получить окончательный результат:
«АБВГД»: base64 = «wMHCw8Q=»