# Computer Forensic
__Forensic (Computer forensic)__ - прикладная наука о раскрытии инцидентов, связанных с компьютерной информацией, исследовании цифровых доказательств, методах поиска, получения и закрепления таких доказательств. Форензика является подразделом криминалистики, является неотъемлемой частью в сфере ИБ.

__Виды инцидентов:__
* утечка конфиденциальной информации
* неправомерный доступ к информации
* удаление информации
* компрометация информации
* саботаж
* мошенничество с помощью ИТ систем
* использование активов компании в личных целях
* внешние атаки: DoS, DDoS, фишинг, перехват и подмена трафика
* размещение конфиденциальной/провокационной информации в сети Интернет
* взлом
* вирусные атаки

__Forensic и CTF__
В CTF forensic является одной из сложных категорий заданий. Эта категория охватывает следующие категории знаний:
* Программирование
* ОС (Windows, Unix, BolgenOS)
* ФС (FAT, NTFS, Ext, etc.)
* Специфика типов файлов (JPEG, ELF, WAV, etc.)
* Сети (как минимум стек протоколов TCP/IP)
* Криптография
* Стеганография
* RE
* OSINT (Open Source INTelligence)

__Задачи в CTF:__
* Восстановление данных
* Анализ логов
* Анализ сетевого трафика
* Поиск информации

Задачи могут быть усложнены дпугими категориями знаний (криптография, вирусология и т.д.)

Каких-либо универсальных методов решения тасков категории forensic нет. Никогда не знаешь, что тебе за инцидент попадется и как тебе с ним справляться. Но есть набор инструментов для решения задач Forensic:
* Сетевые утилиты ([Wireshark](https://www.wireshark.org/), [Tshark](https://www.wireshark.org/docs/man-pages/tshark.html), [Scapy](https://scapy.net/))
* Файловые утилиты (file, head, hex-редакторы)
* Утилиты для работы с ФС (TSK, [Foremost](http://foremost.sourceforge.net/), [Autopsy](https://www.autopsy.com/))
* Крипто-утилиты ([Cryptool](https://www.cryptool.org/de/))
* Графические редакторы ([GIMP](https://www.gimp.org/), [PS](https://www.adobe.com/ru/products/photoshop.html?sdid=8DN85NTS&mv=search&s_kwcid=AL!3085!3!277122532447!e!!g!!photo%20shop&ef_id=Wucb6wAAAmimgQH6:20180622140211:s))
* Аудиоредакторы ([Audacity](https://www.audacityteam.org/))
* Языки программирования (Python, C)