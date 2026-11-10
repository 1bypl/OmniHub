'use strict';

const CATEGORY_I18N = {
    all:{pl:['Wszystkie zasoby',''],en:['All resources',''],it:['Tutte le risorse',''],es:['Todos los recursos',''],de:['Alle Ressourcen',''],fr:['Toutes les ressources',''],ru:['Все ресурсы','']},
    ai:{pl:['Agenci AI','Narzędzia sztucznej inteligencji'],en:['AI Agents','AI tools'],it:['Agenti AI','Strumenti IA'],es:['Agentes IA','Herramientas IA'],de:['KI-Agenten','KI-Tools'],fr:['Agents IA','Outils IA'],ru:['ИИ-агенты','Инструменты ИИ']},
    software:{pl:['Oprogramowanie','Aplikacje i programy'],en:['Software','Apps & programs'],it:['Software','App e programmi'],es:['Software','Apps y programas'],de:['Software','Apps & Programme'],fr:['Logiciels','Applis & programmes'],ru:['Программы','Приложения']},
    multimedia:{pl:['Multimedia & TV','Odtwarzacze i edytory'],en:['Multimedia & TV','Players & editors'],it:['Multimedia & TV','Lettori & editori'],es:['Multimedia y TV','Reproductores y editores'],de:['Multimedia & TV','Player & Editoren'],fr:['Multimédia & TV','Lecteurs & éditeurs'],ru:['Мультимедиа и ТВ','Плееры']},
    knowledge:{pl:['Wiedza i Nauka','Encyklopedie i kursy'],en:['Knowledge','Encyclopedias & courses'],it:['Conoscenza','Enciclopedie & corsi'],es:['Conocimiento','Enciclopedias y cursos'],de:['Wissen','Enzyklopädien'],fr:['Savoir','Encyclopédies & cours'],ru:['Знания','Энциклопедии']},
    tools:{pl:['Narzędzia Webowe','Aplikacje w przeglądarce'],en:['Web Tools','Browser apps'],it:['Strumenti Web','App browser'],es:['Herramientas Web','Apps navegador'],de:['Web-Tools','Browser-Apps'],fr:['Outils Web','Applis navigateur'],ru:['Веб-инструменты','Браузерные приложения']},
    drivers:{pl:['Sterowniki & Kodeki','Oprogramowanie systemowe'],en:['Drivers & Codecs','System software'],it:['Driver & Codec','Software di sistema'],es:['Controladores y Códecs','Software de sistema'],de:['Treiber & Codecs','Systemsoftware'],fr:['Pilotes & Codecs','Logiciels système'],ru:['Драйверы и кодеки','Системные программы']},
    programming:{pl:['Programowanie','Środowiska i biblioteki'],en:['Programming','IDEs & libraries'],it:['Programmazione','IDE & librerie'],es:['Programación','IDEs y librerías'],de:['Programmierung','IDEs & Bibliotheken'],fr:['Programmation','IDE & bibliothèques'],ru:['Программирование','IDE и библиотеки']},
    games:{pl:['Gry Online','Gry i platformy'],en:['Online Games','Games & platforms'],it:['Giochi Online','Giochi & piattaforme'],es:['Juegos Online','Juegos y plataformas'],de:['Online-Spiele','Spiele'],fr:['Jeux en ligne','Jeux & plateformes'],ru:['Онлайн-игры','Игры']},
    linux:{pl:['Linux Distro','Dystrybucje Linuksa'],en:['Linux Distros','Linux distributions'],it:['Distro Linux','Distribuzioni Linux'],es:['Distros Linux','Distribuciones Linux'],de:['Linux-Distros','Linux-Distributionen'],fr:['Distros Linux','Distributions Linux'],ru:['Linux-дистрибутивы','Дистрибутивы Linux']},
    promotions:{pl:['Promocje','Okazje i rabaty'],en:['Deals','Sales & discounts'],it:['Promozioni','Offerte & sconti'],es:['Promociones','Ofertas y descuentos'],de:['Angebote','Rabatte & Sales'],fr:['Promotions','Bons plans'],ru:['Скидки','Акции']},
    sell:{pl:['Sprzedam','Ogłoszenia sprzedaży'],en:['For Sale','Sale listings'],it:['Vendo','Annunci di vendita'],es:['Vendo','Anuncios de venta'],de:['Zu verkaufen','Verkaufsanzeigen'],fr:['À vendre','Annonces de vente'],ru:['Продам','Объявления']},
    buy:{pl:['Kupię','Ogłoszenia zakupu'],en:['Want to Buy','Buy listings'],it:['Compro','Annunci di acquisto'],es:['Compro','Anuncios de compra'],de:['Kaufen','Kaufanzeigen'],fr:['Acheter','Annonces'],ru:['Куплю','Объявления']},
    social:{pl:['Portale Społecznościowe','Społeczności online'],en:['Social Portals','Online communities'],it:['Portali Sociali','Community online'],es:['Portales Sociales','Comunidades online'],de:['Soziale Portale','Online-Communities'],fr:['Portails sociaux','Communautés'],ru:['Соцсети','Сообщества']},
    wallpapers:{pl:['Tapety','Zdjecia i tła pulpitu'],en:['Wallpapers','Desktop backgrounds'],it:['Sfondi','Sfondi desktop'],es:['Fondos','Fondos de pantalla'],de:['Hintergrundbilder','Desktop-Hintergründe'],fr:["Fonds d'écran",'Arrière-plans'],ru:['Обои','Фоны']},
    films:{pl:['Filmy','Wideo, muzyka, streaming'],en:['Films','Video, music, streaming'],it:['Film','Video, musica, streaming'],es:['Películas','Vídeo, música, streaming'],de:['Filme','Video, Musik, Streaming'],fr:['Films','Vidéo, musique, streaming'],ru:['Фильмы','Видео, музыка, стриминг']},
    favorites:{pl:['Ulubione','Zapisane zasoby'],en:['Favorites','Saved resources'],it:['Preferiti','Risorse salvate'],es:['Favoritos','Recursos guardados'],de:['Favoriten','Gespeicherte'],fr:['Favoris','Ressources'],ru:['Избранное','Сохранённые']}
};

const UI = {
    pl:{'app.title':'OmniHub – Centralny Portal Zasobów','search.placeholder':'Szukaj…','btn.add':'+ Dodaj','btn.save':'Zapisz','btn.update':'Zaktualizuj','btn.undo':'Cofnij','btn.reset':'Resetuj','btn.create':'Utwórz','btn.help':'Pomoc','btn.auto':'Auto','btn.exportJson':'📥 Eksport JSON','btn.importJson':'📤 Import JSON','btn.importDataJson':'📦 Import data.json','btn.exportHtml':'📄 Eksport HTML','btn.exportCsv':'📊 Eksport CSV','btn.importCsv':'📊 Import CSV','btn.importBookmarks':'🔖 Import zakładek','btn.syncFile':'🔄 Auto-odśwież data.json','btn.stopSync':'⏹️ Stop','btn.trash':'🗑️ Kosz','btn.customTheme':'🎨 Motyw','btn.shareUrl':'🔗 Udostępnij','btn.restore':'↩️ Przywróć','btn.clearFilter':'✕','sidebar.categories':'Kategorie','sidebar.addCategory':'+ Nowa kategoria','sidebar.data':'Dane','sidebar.info':'💡 Dane w tej przeglądarce.','sidebar.linkManager':'Menedżer linków','sort.label':'Sortuj:','sort.default':'Domyślnie','sort.ratingDesc':'Najwyżej oceniane','sort.ratingAsc':'Najniżej oceniane','sort.commentsDesc':'Najwięcej komentarzy','sort.newest':'Najnowsze','sort.oldest':'Najstarsze','sort.recent':'Ostatnio odwiedzane','sort.frequent':'Często odwiedzane','sort.titleAsc':'Nazwa A-Z','sort.titleDesc':'Nazwa Z-A','sort.badgeAsc':'Etykieta A-Z','view.cards':'Karty','view.list':'Lista','view.calendar':'Kalendarz','rating.all':'Wszystkie oceny','rating.hasRating':'Z oceną','folder.all':'Wszystkie foldery','folder.none':'Bez folderu','profile.title':'👤 Profil','profile.name':'Twoje imię:','presentation.title':'Prezentacja (P)','stats.title':'📊 Statystyki','modal.addTitle':'Dodaj zasób','modal.editTitle':'Edytuj zasób','catModal.title':'Nowa kategoria','themeModal.title':'🎨 Motyw','themeModal.bgMain':'Tło:','themeModal.bgHeader':'Nagłówek:','themeModal.bgCard':'Karta:','themeModal.border':'Obramowanie:','themeModal.text':'Tekst:','themeModal.accent':'Akcent:','history.title':'📜 Historia','trash.title':'🗑️ Kosz','help.title':'❓ Pomoc','form.name':'Nazwa:','form.category':'Kategoria:','form.badge':'Etykieta:','form.tags':'Tagi:','form.url':'URL:','form.thumbnail':'Miniatura:','form.description':'Opis:','form.notes':'Notatki:','form.private':'🔒 Prywatny','form.icon':'Ikona:','form.color':'Kolor:','nav.all':'🗂️ Wszystkie','nav.favorites':'❤️ Ulubione','card.empty':'Brak elementów.','card.ratingNone':'Oceń','detail.open':'Otwórz','detail.play':'▶ Odtwórz','detail.view':'🖼️ Pokaż','detail.addFav':'♡ Ulubione','detail.removeFav':'♥ Usuń z ulubionych','detail.copyUrl':'📋 Kopiuj URL','detail.edit':'✏️ Edytuj','detail.delete':'🗑️ Usuń','detail.history':'📜 Historia','detail.noRating':'Brak ocen — oceń pierwszy!','detail.comments':'💬 Komentarze','detail.addComment':'Dodaj komentarz','detail.commentPlaceholder':'Komentarz…','detail.authorPlaceholder':'Twoje imię','detail.noComments':'Brak komentarzy.','detail.reply':'💬 Odpowiedz','player.skin':'Skórka:','player.openExternal':'↗ Otwórz zewnętrznie','toast.copied':'Skopiowano','toast.copyFail':'Błąd kopiowania','toast.noUndo':'Brak akcji','toast.noRedo':'Brak akcji','toast.undone':'Cofnięto:','toast.redone':'Ponowiono:','toast.added':'Dodano','toast.deleted':'Usunięto:','toast.restored':'Przywrócono','toast.translating':'Tłumaczenie…','alert.dupUrl':'Ten URL już istnieje','alert.sameDomain':'Wpis z tą domeną istnieje','alert.suspicious':'Podejrzany URL','alert.unreachable':'URL niedostępny','alert.confirm':'Czy na pewno?','alert.imported':'Import OK. Odświeżenie…','alert.badJson':'Błąd JSON!','alert.badCsv':'Błąd CSV:','alert.dataJson':'Błąd JSON:','alert.noCategory':'Brak kategorii','alert.mediaDetected':'Wykryto: ','confirm.delete':'Usunąć','confirm.purge':'Usunąć trwale?','help.keys':'Skróty klawiaturowe','help.search':'Wyszukiwanie zaawansowane','lm.title':'Menedżer linków','lm.all':'Wszystkie','lm.active':'Aktywne','lm.inactive':'Nieaktywne','lm.unchecked':'Niesprawdzone','lm.scanAll':'🔍 Skanuj wszystkie','lm.scanVisible':'🔍 Skanuj widoczne','lm.stop':'⏹️ Stop','lm.clear':'🧹 Wyczyść cache','lm.catFilter':'Wszystkie kategorie','lm.search':'Szukaj…','lm.ready':'Gotowe do skanowania.','lm.scanning':'Skanowanie…','lm.done':'Zakończono:','lm.ok':'OK','lm.fail':'Błędów','lm.lastScan':'Ostatni skan:','lm.editInline':'Edytuj','lm.empty':'Brak linków.'},
    en:{'app.title':'OmniHub – Central Resource Portal','search.placeholder':'Search…','btn.add':'+ Add','btn.save':'Save','btn.update':'Update','btn.undo':'Undo','btn.reset':'Reset','btn.create':'Create','btn.help':'Help','btn.auto':'Auto','btn.exportJson':'📥 Export JSON','btn.importJson':'📤 Import JSON','btn.importDataJson':'📦 Import data.json','btn.exportHtml':'📄 Export HTML','btn.exportCsv':'📊 Export CSV','btn.importCsv':'📊 Import CSV','btn.importBookmarks':'🔖 Import bookmarks','btn.syncFile':'🔄 Auto-refresh data.json','btn.stopSync':'⏹️ Stop','btn.trash':'🗑️ Trash','btn.customTheme':'🎨 Custom theme','btn.shareUrl':'🔗 Share','btn.restore':'↩️ Restore','btn.clearFilter':'✕','sidebar.categories':'Categories','sidebar.addCategory':'+ New category','sidebar.data':'Data','sidebar.info':'💡 Data stored in this browser.','sidebar.linkManager':'Link Manager','sort.label':'Sort:','sort.default':'Default','sort.ratingDesc':'Highest rated','sort.ratingAsc':'Lowest rated','sort.commentsDesc':'Most comments','sort.newest':'Newest','sort.oldest':'Oldest','sort.recent':'Recent','sort.frequent':'Frequent','sort.titleAsc':'Name A-Z','sort.titleDesc':'Name Z-A','sort.badgeAsc':'Badge A-Z','view.cards':'Cards','view.list':'List','view.calendar':'Calendar','rating.all':'All ratings','rating.hasRating':'Rated only','folder.all':'All folders','folder.none':'No folder','profile.title':'👤 Profile','profile.name':'Your name:','presentation.title':'Presentation (P)','stats.title':'📊 Statistics','modal.addTitle':'Add resource','modal.editTitle':'Edit resource','catModal.title':'New category','themeModal.title':'🎨 Custom theme','themeModal.bgMain':'Background:','themeModal.bgHeader':'Header:','themeModal.bgCard':'Card:','themeModal.border':'Border:','themeModal.text':'Text:','themeModal.accent':'Accent:','history.title':'📜 History','trash.title':'🗑️ Trash','help.title':'❓ Help','form.name':'Name:','form.category':'Category:','form.badge':'Badge:','form.tags':'Tags:','form.url':'URL:','form.thumbnail':'Thumbnail:','form.description':'Description:','form.notes':'Notes:','form.private':'🔒 Private','form.icon':'Icon:','form.color':'Color:','nav.all':'🗂️ All','nav.favorites':'❤️ Favorites','card.empty':'Nothing to display.','card.ratingNone':'Rate','detail.open':'Open','detail.play':'▶ Play','detail.view':'🖼️ View','detail.addFav':'♡ Add to favorites','detail.removeFav':'♥ Remove from favorites','detail.copyUrl':'📋 Copy URL','detail.edit':'✏️ Edit','detail.delete':'🗑️ Delete','detail.history':'📜 History','detail.noRating':'No ratings — be the first!','detail.comments':'💬 Comments','detail.addComment':'Add comment','detail.commentPlaceholder':'Comment…','detail.authorPlaceholder':'Your name','detail.noComments':'No comments.','detail.reply':'💬 Reply','player.skin':'Skin:','player.openExternal':'↗ Open externally','toast.copied':'Copied','toast.copyFail':'Copy failed','toast.noUndo':'Nothing to undo','toast.noRedo':'Nothing to redo','toast.undone':'Undone:','toast.redone':'Redone:','toast.added':'Added','toast.deleted':'Deleted:','toast.restored':'Restored','toast.translating':'Translating…','alert.dupUrl':'URL exists','alert.sameDomain':'Entry with same domain exists','alert.suspicious':'Suspicious URL','alert.unreachable':'URL unreachable','alert.confirm':'Are you sure?','alert.imported':'Import OK. Reloading…','alert.badJson':'JSON error!','alert.badCsv':'CSV error:','alert.dataJson':'JSON error:','alert.noCategory':'Category not found','alert.mediaDetected':'Detected: ','confirm.delete':'Delete','confirm.purge':'Delete permanently?','help.keys':'Keyboard shortcuts','help.search':'Advanced search','lm.title':'Link Manager','lm.all':'All','lm.active':'Active','lm.inactive':'Inactive','lm.unchecked':'Unchecked','lm.scanAll':'🔍 Scan all','lm.scanVisible':'🔍 Scan visible','lm.stop':'⏹️ Stop','lm.clear':'🧹 Clear cache','lm.catFilter':'All categories','lm.search':'Search…','lm.ready':'Ready to scan.','lm.scanning':'Scanning…','lm.done':'Done:','lm.ok':'OK','lm.fail':'Failed','lm.lastScan':'Last scan:','lm.editInline':'Edit','lm.empty':'No links.'},
    it:{'app.title':'OmniHub – Portale Centrale delle Risorse','search.placeholder':'Cerca…','btn.add':'+ Aggiungi','btn.save':'Salva','btn.update':'Aggiorna','btn.undo':'Annulla','btn.reset':'Reimposta','btn.create':'Crea','btn.help':'Aiuto','btn.auto':'Auto','btn.exportJson':'📥 Esporta JSON','btn.importJson':'📤 Importa JSON','btn.importDataJson':'📦 Importa data.json','btn.exportHtml':'📄 Esporta HTML','btn.exportCsv':'📊 Esporta CSV','btn.importCsv':'📊 Importa CSV','btn.importBookmarks':'🔖 Importa segnalibri','btn.syncFile':'🔄 Auto-aggiorna','btn.stopSync':'⏹️ Stop','btn.trash':'🗑️ Cestino','btn.customTheme':'🎨 Tema custom','btn.shareUrl':'🔗 Condividi','btn.restore':'↩️ Ripristina','btn.clearFilter':'✕','sidebar.categories':'Categorie','sidebar.addCategory':'+ Nuova categoria','sidebar.data':'Dati','sidebar.info':'💡 Dati in questo browser.','sidebar.linkManager':'Gestione link','sort.label':'Ordina:','sort.default':'Predefinito','sort.ratingDesc':'Più votati','sort.ratingAsc':'Meno votati','sort.commentsDesc':'Più commentati','sort.newest':'Più recenti','sort.oldest':'Più vecchi','sort.recent':'Visitati','sort.frequent':'Spesso','sort.titleAsc':'Nome A-Z','sort.titleDesc':'Nome Z-A','sort.badgeAsc':'Badge A-Z','view.cards':'Schede','view.list':'Elenco','view.calendar':'Calendario','rating.all':'Tutte','rating.hasRating':'Solo con voto','folder.all':'Tutte le cartelle','folder.none':'Senza cartella','profile.title':'👤 Profilo','profile.name':'Il tuo nome:','presentation.title':'Presentazione (P)','stats.title':'📊 Statistiche','modal.addTitle':'Aggiungi risorsa','modal.editTitle':'Modifica','catModal.title':'Nuova categoria','themeModal.title':'🎨 Tema custom','themeModal.bgMain':'Sfondo:','themeModal.bgHeader':'Intestazione:','themeModal.bgCard':'Scheda:','themeModal.border':'Bordo:','themeModal.text':'Testo:','themeModal.accent':'Accento:','history.title':'📜 Cronologia','trash.title':'🗑️ Cestino','help.title':'❓ Aiuto','form.name':'Nome:','form.category':'Categoria:','form.badge':'Badge:','form.tags':'Tag:','form.url':'URL:','form.thumbnail':'Miniatura:','form.description':'Descrizione:','form.notes':'Note:','form.private':'🔒 Privato','form.icon':'Icona:','form.color':'Colore:','nav.all':'🗂️ Tutti','nav.favorites':'❤️ Preferiti','card.empty':'Nessun elemento.','card.ratingNone':'Vota','detail.open':'Apri','detail.play':'▶ Riproduci','detail.view':'🖼️ Visualizza','detail.addFav':'♡ Aggiungi','detail.removeFav':'♥ Rimuovi','detail.copyUrl':'📋 Copia','detail.edit':'✏️ Modifica','detail.delete':'🗑️ Elimina','detail.history':'📜 Cronologia','detail.noRating':'Nessun voto — sii il primo!','detail.comments':'💬 Commenti','detail.addComment':'Aggiungi','detail.commentPlaceholder':'Commento…','detail.authorPlaceholder':'Il tuo nome','detail.noComments':'Nessun commento.','detail.reply':'💬 Rispondi','player.skin':'Skin:','player.openExternal':'↗ Apri fuori','toast.copied':'Copiato','toast.copyFail':'Errore','toast.noUndo':'Niente','toast.noRedo':'Niente','toast.undone':'Annullato:','toast.redone':'Ripetuto:','toast.added':'Aggiunto','toast.deleted':'Eliminato:','toast.restored':'Ripristinato','toast.translating':'Traduzione…','alert.dupUrl':'URL esistente','alert.sameDomain':'Dominio esistente','alert.suspicious':'URL sospetto','alert.unreachable':'URL non raggiungibile','alert.confirm':'Sei sicuro?','alert.imported':'Import OK.','alert.badJson':'Errore JSON!','alert.badCsv':'Errore CSV:','alert.dataJson':'Errore JSON:','alert.noCategory':'Categoria non trovata','alert.mediaDetected':'Rilevato: ','confirm.delete':'Eliminare','confirm.purge':'Eliminare definitivamente?','help.keys':'Scorciatoie','help.search':'Ricerca avanzata','lm.title':'Gestione link','lm.all':'Tutti','lm.active':'Attivi','lm.inactive':'Inattivi','lm.unchecked':'Non verificati','lm.scanAll':'🔍 Scansiona tutti','lm.scanVisible':'🔍 Scansiona visibili','lm.stop':'⏹️ Stop','lm.clear':'🧹 Svuota cache','lm.catFilter':'Tutte','lm.search':'Cerca…','lm.ready':'Pronto.','lm.scanning':'Scansione…','lm.done':'Fatto:','lm.ok':'OK','lm.fail':'Errori','lm.lastScan':'Ultimo scan:','lm.editInline':'Modifica','lm.empty':'Nessun link.'},
    es:{'app.title':'OmniHub – Portal Central de Recursos','search.placeholder':'Buscar…','btn.add':'+ Añadir','btn.save':'Guardar','btn.update':'Actualizar','btn.undo':'Deshacer','btn.reset':'Restablecer','btn.create':'Crear','btn.help':'Ayuda','btn.auto':'Auto','btn.exportJson':'📥 Exportar JSON','btn.importJson':'📤 Importar JSON','btn.importDataJson':'📦 Importar data.json','btn.exportHtml':'📄 Exportar HTML','btn.exportCsv':'📊 Exportar CSV','btn.importCsv':'📊 Importar CSV','btn.importBookmarks':'🔖 Importar marcadores','btn.syncFile':'🔄 Auto-recargar','btn.stopSync':'⏹️ Detener','btn.trash':'🗑️ Papelera','btn.customTheme':'🎨 Tema custom','btn.shareUrl':'🔗 Compartir','btn.restore':'↩️ Restaurar','btn.clearFilter':'✕','sidebar.categories':'Categorías','sidebar.addCategory':'+ Nueva categoría','sidebar.data':'Datos','sidebar.info':'💡 Datos en este navegador.','sidebar.linkManager':'Gestor de enlaces','sort.label':'Ordenar:','sort.default':'Predeterminado','sort.ratingDesc':'Mejor valorados','sort.ratingAsc':'Peor valorados','sort.commentsDesc':'Más comentados','sort.newest':'Recientes','sort.oldest':'Antiguos','sort.recent':'Visitados','sort.frequent':'Frecuentes','sort.titleAsc':'Nombre A-Z','sort.titleDesc':'Nombre Z-A','sort.badgeAsc':'Etiqueta A-Z','view.cards':'Tarjetas','view.list':'Lista','view.calendar':'Calendario','rating.all':'Todas','rating.hasRating':'Valorados','folder.all':'Todas las carpetas','folder.none':'Sin carpeta','profile.title':'👤 Perfil','profile.name':'Tu nombre:','presentation.title':'Presentación (P)','stats.title':'📊 Estadísticas','modal.addTitle':'Añadir recurso','modal.editTitle':'Editar','catModal.title':'Nueva categoría','themeModal.title':'🎨 Tema custom','themeModal.bgMain':'Fondo:','themeModal.bgHeader':'Cabecera:','themeModal.bgCard':'Tarjeta:','themeModal.border':'Borde:','themeModal.text':'Texto:','themeModal.accent':'Acento:','history.title':'📜 Historial','trash.title':'🗑️ Papelera','help.title':'❓ Ayuda','form.name':'Nombre:','form.category':'Categoría:','form.badge':'Etiqueta:','form.tags':'Etiquetas:','form.url':'URL:','form.thumbnail':'Miniatura:','form.description':'Descripción:','form.notes':'Notas:','form.private':'🔒 Privado','form.icon':'Icono:','form.color':'Color:','nav.all':'🗂️ Todos','nav.favorites':'❤️ Favoritos','card.empty':'Nada que mostrar.','card.ratingNone':'Valorar','detail.open':'Abrir','detail.play':'▶ Reproducir','detail.view':'🖼️ Ver','detail.addFav':'♡ Añadir','detail.removeFav':'♥ Quitar','detail.copyUrl':'📋 Copiar','detail.edit':'✏️ Editar','detail.delete':'🗑️ Eliminar','detail.history':'📜 Historial','detail.noRating':'Sin valoraciones — ¡sé el primero!','detail.comments':'💬 Comentarios','detail.addComment':'Añadir','detail.commentPlaceholder':'Comentario…','detail.authorPlaceholder':'Tu nombre','detail.noComments':'Sin comentarios.','detail.reply':'💬 Responder','player.skin':'Máscara:','player.openExternal':'↗ Abrir externo','toast.copied':'Copiado','toast.copyFail':'Error','toast.noUndo':'Nada','toast.noRedo':'Nada','toast.undone':'Deshecho:','toast.redone':'Rehecho:','toast.added':'Añadido','toast.deleted':'Eliminado:','toast.restored':'Restaurado','toast.translating':'Traduciendo…','alert.dupUrl':'URL existente','alert.sameDomain':'Dominio existente','alert.suspicious':'URL sospechosa','alert.unreachable':'URL no accesible','alert.confirm':'¿Seguro?','alert.imported':'Import OK.','alert.badJson':'¡Error JSON!','alert.badCsv':'Error CSV:','alert.dataJson':'Error JSON:','alert.noCategory':'Categoría no encontrada','alert.mediaDetected':'Detectado: ','confirm.delete':'Eliminar','confirm.purge':'¿Eliminar permanentemente?','help.keys':'Atajos','help.search':'Búsqueda avanzada','lm.title':'Gestor de enlaces','lm.all':'Todos','lm.active':'Activos','lm.inactive':'Inactivos','lm.unchecked':'Sin verificar','lm.scanAll':'🔍 Escanear todos','lm.scanVisible':'🔍 Escanear visibles','lm.stop':'⏹️ Detener','lm.clear':'🧹 Limpiar caché','lm.catFilter':'Todas','lm.search':'Buscar…','lm.ready':'Listo.','lm.scanning':'Escaneando…','lm.done':'Hecho:','lm.ok':'OK','lm.fail':'Fallos','lm.lastScan':'Último:','lm.editInline':'Editar','lm.empty':'Sin enlaces.'},
    de:{'app.title':'OmniHub – Zentrales Ressourcenportal','search.placeholder':'Suchen…','btn.add':'+ Hinzufügen','btn.save':'Speichern','btn.update':'Aktualisieren','btn.undo':'Rückgängig','btn.reset':'Zurücksetzen','btn.create':'Erstellen','btn.help':'Hilfe','btn.auto':'Auto','btn.exportJson':'📥 JSON exportieren','btn.importJson':'📤 JSON importieren','btn.importDataJson':'📦 data.json importieren','btn.exportHtml':'📄 HTML exportieren','btn.exportCsv':'📊 CSV exportieren','btn.importCsv':'📊 CSV importieren','btn.importBookmarks':'🔖 Lesezeichen','btn.syncFile':'🔄 Auto-aktualisieren','btn.stopSync':'⏹️ Stop','btn.trash':'🗑️ Papierkorb','btn.customTheme':'🎨 Theme','btn.shareUrl':'🔗 Teilen','btn.restore':'↩️ Wiederherstellen','btn.clearFilter':'✕','sidebar.categories':'Kategorien','sidebar.addCategory':'+ Neue Kategorie','sidebar.data':'Daten','sidebar.info':'💡 Daten in diesem Browser.','sidebar.linkManager':'Link-Manager','sort.label':'Sortieren:','sort.default':'Standard','sort.ratingDesc':'Höchste','sort.ratingAsc':'Niedrigste','sort.commentsDesc':'Meiste Kommentare','sort.newest':'Neueste','sort.oldest':'Älteste','sort.recent':'Kürzlich','sort.frequent':'Häufig','sort.titleAsc':'Name A-Z','sort.titleDesc':'Name Z-A','sort.badgeAsc':'Badge A-Z','view.cards':'Karten','view.list':'Liste','view.calendar':'Kalender','rating.all':'Alle','rating.hasRating':'Bewertete','folder.all':'Alle Ordner','folder.none':'Kein Ordner','profile.title':'👤 Profil','profile.name':'Dein Name:','presentation.title':'Präsentation (P)','stats.title':'📊 Statistiken','modal.addTitle':'Ressource hinzufügen','modal.editTitle':'Bearbeiten','catModal.title':'Neue Kategorie','themeModal.title':'🎨 Theme','themeModal.bgMain':'Hintergrund:','themeModal.bgHeader':'Kopfzeile:','themeModal.bgCard':'Karte:','themeModal.border':'Rahmen:','themeModal.text':'Text:','themeModal.accent':'Akzent:','history.title':'📜 Verlauf','trash.title':'🗑️ Papierkorb','help.title':'❓ Hilfe','form.name':'Name:','form.category':'Kategorie:','form.badge':'Badge:','form.tags':'Tags:','form.url':'URL:','form.thumbnail':'Vorschau:','form.description':'Beschreibung:','form.notes':'Notizen:','form.private':'🔒 Privat','form.icon':'Symbol:','form.color':'Farbe:','nav.all':'🗂️ Alle','nav.favorites':'❤️ Favoriten','card.empty':'Nichts anzuzeigen.','card.ratingNone':'Bewerten','detail.open':'Öffnen','detail.play':'▶ Abspielen','detail.view':'🖼️ Ansehen','detail.addFav':'♡ Zu Favoriten','detail.removeFav':'♥ Aus Favoriten','detail.copyUrl':'📋 URL kopieren','detail.edit':'✏️ Bearbeiten','detail.delete':'🗑️ Löschen','detail.history':'📜 Verlauf','detail.noRating':'Keine Bewertungen — sei der Erste!','detail.comments':'💬 Kommentare','detail.addComment':'Hinzufügen','detail.commentPlaceholder':'Kommentar…','detail.authorPlaceholder':'Dein Name','detail.noComments':'Keine Kommentare.','detail.reply':'💬 Antworten','player.skin':'Skin:','player.openExternal':'↗ Extern öffnen','toast.copied':'Kopiert','toast.copyFail':'Fehler','toast.noUndo':'Nichts','toast.noRedo':'Nichts','toast.undone':'Rückgängig:','toast.redone':'Wiederhergestellt:','toast.added':'Hinzugefügt','toast.deleted':'Gelöscht:','toast.restored':'Wiederhergestellt','toast.translating':'Übersetze…','alert.dupUrl':'URL existiert','alert.sameDomain':'Domain existiert','alert.suspicious':'Verdächtige URL','alert.unreachable':'URL nicht erreichbar','alert.confirm':'Sicher?','alert.imported':'Import OK.','alert.badJson':'JSON-Fehler!','alert.badCsv':'CSV-Fehler:','alert.dataJson':'JSON-Fehler:','alert.noCategory':'Kategorie nicht gefunden','alert.mediaDetected':'Erkannt: ','confirm.delete':'Löschen','confirm.purge':'Endgültig löschen?','help.keys':'Tastenkombinationen','help.search':'Erweiterte Suche','lm.title':'Link-Manager','lm.all':'Alle','lm.active':'Aktiv','lm.inactive':'Inaktiv','lm.unchecked':'Ungeprüft','lm.scanAll':'🔍 Alle scannen','lm.scanVisible':'🔍 Sichtbare scannen','lm.stop':'⏹️ Stop','lm.clear':'🧹 Cache leeren','lm.catFilter':'Alle','lm.search':'Suchen…','lm.ready':'Bereit.','lm.scanning':'Scannen…','lm.done':'Fertig:','lm.ok':'OK','lm.fail':'Fehler','lm.lastScan':'Letzter Scan:','lm.editInline':'Bearbeiten','lm.empty':'Keine Links.'},
    fr:{'app.title':'OmniHub – Portail Central des Ressources','search.placeholder':'Rechercher…','btn.add':'+ Ajouter','btn.save':'Enregistrer','btn.update':'Mettre à jour','btn.undo':'Annuler','btn.reset':'Réinitialiser','btn.create':'Créer','btn.help':'Aide','btn.auto':'Auto','btn.exportJson':'📥 Exporter JSON','btn.importJson':'📤 Importer JSON','btn.importDataJson':'📦 Importer data.json','btn.exportHtml':'📄 Exporter HTML','btn.exportCsv':'📊 Exporter CSV','btn.importCsv':'📊 Importer CSV','btn.importBookmarks':'🔖 Importer favoris','btn.syncFile':'🔄 Auto-actualiser','btn.stopSync':'⏹️ Arrêter','btn.trash':'🗑️ Corbeille','btn.customTheme':'🎨 Thème','btn.shareUrl':'🔗 Partager','btn.restore':'↩️ Restaurer','btn.clearFilter':'✕','sidebar.categories':'Catégories','sidebar.addCategory':'+ Nouvelle catégorie','sidebar.data':'Données','sidebar.info':'💡 Données dans ce navigateur.','sidebar.linkManager':'Gestionnaire de liens','sort.label':'Trier :','sort.default':'Par défaut','sort.ratingDesc':'Mieux notés','sort.ratingAsc':'Moins notés','sort.commentsDesc':'Plus commentés','sort.newest':'Récents','sort.oldest':'Anciens','sort.recent':'Visités','sort.frequent':'Fréquents','sort.titleAsc':'Nom A-Z','sort.titleDesc':'Nom Z-A','sort.badgeAsc':'Badge A-Z','view.cards':'Cartes','view.list':'Liste','view.calendar':'Calendrier','rating.all':'Toutes','rating.hasRating':'Notés','folder.all':'Tous les dossiers','folder.none':'Sans dossier','profile.title':'👤 Profil','profile.name':'Votre nom :','presentation.title':'Présentation (P)','stats.title':'📊 Statistiques','modal.addTitle':'Ajouter','modal.editTitle':'Modifier','catModal.title':'Nouvelle catégorie','themeModal.title':'🎨 Thème','themeModal.bgMain':'Fond :','themeModal.bgHeader':'En-tête :','themeModal.bgCard':'Carte :','themeModal.border':'Bordure :','themeModal.text':'Texte :','themeModal.accent':'Accent :','history.title':'📜 Historique','trash.title':'🗑️ Corbeille','help.title':'❓ Aide','form.name':'Nom :','form.category':'Catégorie :','form.badge':'Badge :','form.tags':'Tags :','form.url':'URL :','form.thumbnail':'Vignette :','form.description':'Description :','form.notes':'Notes :','form.private':'🔒 Privé','form.icon':'Icône :','form.color':'Couleur :','nav.all':'🗂️ Tous','nav.favorites':'❤️ Favoris','card.empty':'Rien à afficher.','card.ratingNone':'Noter','detail.open':'Ouvrir','detail.play':'▶ Lire','detail.view':'🖼️ Voir','detail.addFav':'♡ Ajouter','detail.removeFav':'♥ Retirer','detail.copyUrl':'📋 Copier','detail.edit':'✏️ Modifier','detail.delete':'🗑️ Supprimer','detail.history':'📜 Historique','detail.noRating':'Aucune note — soyez le premier !','detail.comments':'💬 Commentaires','detail.addComment':'Ajouter','detail.commentPlaceholder':'Commentaire…','detail.authorPlaceholder':'Votre nom','detail.noComments':'Aucun commentaire.','detail.reply':'💬 Répondre','player.skin':'Peau :','player.openExternal':'↗ Ouvrir externe','toast.copied':'Copié','toast.copyFail':'Échec','toast.noUndo':'Rien','toast.noRedo':'Rien','toast.undone':'Annulé :','toast.redone':'Rétabli :','toast.added':'Ajouté','toast.deleted':'Supprimé :','toast.restored':'Restauré','toast.translating':'Traduction…','alert.dupUrl':'URL existante','alert.sameDomain':'Domaine existant','alert.suspicious':'URL suspecte','alert.unreachable':'URL inaccessible','alert.confirm':'Sûr ?','alert.imported':'Import OK.','alert.badJson':'Erreur JSON !','alert.badCsv':'Erreur CSV :','alert.dataJson':'Erreur JSON :','alert.noCategory':'Catégorie introuvable','alert.mediaDetected':'Détecté : ','confirm.delete':'Supprimer','confirm.purge':'Supprimer définitivement ?','help.keys':'Raccourcis','help.search':'Recherche avancée','lm.title':'Gestionnaire de liens','lm.all':'Tous','lm.active':'Actifs','lm.inactive':'Inactifs','lm.unchecked':'Non vérifiés','lm.scanAll':'🔍 Scanner tous','lm.scanVisible':'🔍 Scanner visibles','lm.stop':'⏹️ Arrêter','lm.clear':'🧹 Vider cache','lm.catFilter':'Toutes','lm.search':'Chercher…','lm.ready':'Prêt.','lm.scanning':'Scan…','lm.done':'Terminé :','lm.ok':'OK','lm.fail':'Erreurs','lm.lastScan':'Dernier :','lm.editInline':'Modifier','lm.empty':'Aucun lien.'},
    ru:{'app.title':'OmniHub – Центральный портал','search.placeholder':'Поиск…','btn.add':'+ Добавить','btn.save':'Сохранить','btn.update':'Обновить','btn.undo':'Отменить','btn.reset':'Сбросить','btn.create':'Создать','btn.help':'Помощь','btn.auto':'Авто','btn.exportJson':'📥 Экспорт JSON','btn.importJson':'📤 Импорт JSON','btn.importDataJson':'📦 Импорт data.json','btn.exportHtml':'📄 Экспорт HTML','btn.exportCsv':'📊 Экспорт CSV','btn.importCsv':'📊 Импорт CSV','btn.importBookmarks':'🔖 Импорт закладок','btn.syncFile':'🔄 Авто-обновление','btn.stopSync':'⏹️ Стоп','btn.trash':'🗑️ Корзина','btn.customTheme':'🎨 Тема','btn.shareUrl':'🔗 Поделиться','btn.restore':'↩️ Восстановить','btn.clearFilter':'✕','sidebar.categories':'Категории','sidebar.addCategory':'+ Категория','sidebar.data':'Данные','sidebar.info':'💡 Данные в браузере.','sidebar.linkManager':'Менеджер ссылок','sort.label':'Сортировка:','sort.default':'По умолчанию','sort.ratingDesc':'Высокий','sort.ratingAsc':'Низкий','sort.commentsDesc':'Комментарии','sort.newest':'Новые','sort.oldest':'Старые','sort.recent':'Недавние','sort.frequent':'Частые','sort.titleAsc':'Имя A-Z','sort.titleDesc':'Имя Z-A','sort.badgeAsc':'Метка A-Z','view.cards':'Карточки','view.list':'Список','view.calendar':'Календарь','rating.all':'Все','rating.hasRating':'С оценкой','folder.all':'Все папки','folder.none':'Без папки','profile.title':'👤 Профиль','profile.name':'Ваше имя:','presentation.title':'Презентация (P)','stats.title':'📊 Статистика','modal.addTitle':'Добавить','modal.editTitle':'Редактировать','catModal.title':'Новая категория','themeModal.title':'🎨 Тема','themeModal.bgMain':'Фон:','themeModal.bgHeader':'Шапка:','themeModal.bgCard':'Карточка:','themeModal.border':'Обводка:','themeModal.text':'Текст:','themeModal.accent':'Акцент:','history.title':'📜 История','trash.title':'🗑️ Корзина','help.title':'❓ Помощь','form.name':'Имя:','form.category':'Категория:','form.badge':'Метка:','form.tags':'Теги:','form.url':'URL:','form.thumbnail':'Миниатюра:','form.description':'Описание:','form.notes':'Заметки:','form.private':'🔒 Приватный','form.icon':'Иконка:','form.color':'Цвет:','nav.all':'🗂️ Все','nav.favorites':'❤️ Избранное','card.empty':'Нечего отображать.','card.ratingNone':'Оценить','detail.open':'Открыть','detail.play':'▶ Играть','detail.view':'🖼️ Смотреть','detail.addFav':'♡ В избранное','detail.removeFav':'♥ Из избранного','detail.copyUrl':'📋 Копировать','detail.edit':'✏️ Редактировать','detail.delete':'🗑️ Удалить','detail.history':'📜 История','detail.noRating':'Нет оценок — будьте первым!','detail.comments':'💬 Комментарии','detail.addComment':'Добавить','detail.commentPlaceholder':'Комментарий…','detail.authorPlaceholder':'Ваше имя','detail.noComments':'Нет комментариев.','detail.reply':'💬 Ответить','player.skin':'Скин:','player.openExternal':'↗ Внешне','toast.copied':'Скопировано','toast.copyFail':'Ошибка','toast.noUndo':'Нечего','toast.noRedo':'Нечего','toast.undone':'Отменено:','toast.redone':'Повторено:','toast.added':'Добавлено','toast.deleted':'Удалено:','toast.restored':'Восстановлено','toast.translating':'Перевод…','alert.dupUrl':'URL существует','alert.sameDomain':'Домен существует','alert.suspicious':'Подозрительный URL','alert.unreachable':'URL недоступен','alert.confirm':'Уверены?','alert.imported':'Импорт OK.','alert.badJson':'Ошибка JSON!','alert.badCsv':'Ошибка CSV:','alert.dataJson':'Ошибка JSON:','alert.noCategory':'Категория не найдена','alert.mediaDetected':'Обнаружено: ','confirm.delete':'Удалить','confirm.purge':'Удалить навсегда?','help.keys':'Горячие клавиши','help.search':'Расширенный поиск','lm.title':'Менеджер ссылок','lm.all':'Все','lm.active':'Активные','lm.inactive':'Неактивные','lm.unchecked':'Не проверено','lm.scanAll':'🔍 Сканировать все','lm.scanVisible':'🔍 Сканировать видимые','lm.stop':'⏹️ Стоп','lm.clear':'🧹 Очистить кеш','lm.catFilter':'Все','lm.search':'Поиск…','lm.ready':'Готово.','lm.scanning':'Сканирование…','lm.done':'Готово:','lm.ok':'OK','lm.fail':'Ошибок','lm.lastScan':'Последний:','lm.editInline':'Изменить','lm.empty':'Нет ссылок.'}
};

let currentLang = localStorage.getItem('omnihub_lang') || 'pl';
function t(k){ const p = UI[currentLang] || UI.pl; return p[k] || UI.pl[k] || k; }
function catTitle(k){ const c = CATEGORY_I18N[k]; if(!c) return k; return (c[currentLang]||c.pl||[k])[0] || k; }
function catDesc(k){ const c = CATEGORY_I18N[k]; if(!c) return ''; return (c[currentLang]||c.pl||['',''])[1] || ''; }

// ===== STAN =====
let allData = {}, favorites = [], customCategories = {}, customTags = [], viewCounts = {}, customOrder = {}, trash = [], ratings = {}, comments = {}, hiddenStatics = [];
let customTheme = null, activeTags = [], presentationMode = false, syncInterval = null;
let currentCategory = 'ai', currentPage = 1;
const itemsPerPage = 20;
let currentView = { type: 'category', category: 'ai' };
let currentSort = localStorage.getItem('omnihub_sort') || 'default';
let viewMode = localStorage.getItem('omnihub_view_mode') || 'cards';
let currentDetailItem = null, profile = { name: 'Gość' }, ratingFilter = 0, linkCheckCache = {}, draggedItemId = null, undoTimer = null;
let sourceFilter = localStorage.getItem('omnihub_source_filter') || '';
let lmFilter = 'all', lmCategoryFilter = '', lmSearch = '', lmScanning = false, lmAbort = false;
const SCHEMA_VERSION = 10;
const VALID_SORTS = ['default','rating-desc','rating-asc','comments-desc','newest','oldest','recent','frequent','title-asc','title-desc','badge-asc','open-source'];
if(!VALID_SORTS.includes(currentSort)) currentSort = 'default';
if(!['','open-source','open-access','free','github'].includes(sourceFilter)) sourceFilter = '';
const undoStack = [], redoStack = [];
const MAX_UNDO = 20;
const BUILTIN = ['ai','software','multimedia','knowledge','tools','drivers','programming','games','linux','promotions','sell','buy','social','wallpapers','films'];
const ICONS = { all:'🗂️', ai:'🤖', software:'💻', multimedia:'🎬', knowledge:'📚', tools:'🛠', drivers:'⚙', programming:'👨‍💻', games:'🎮', linux:'🐧', promotions:'🏷️', sell:'💰', buy:'🛒', social:'💬', wallpapers:'🖼️', films:'🎥', favorites:'❤️' };
const CAT_COLORS = { ai:'#38bdf8', software:'#34d399', multimedia:'#fb923c', knowledge:'#a78bfa', tools:'#f472b6', drivers:'#94a3b8', programming:'#facc15', games:'#f87171', linux:'#22d3ee', promotions:'#f59e0b', sell:'#22c55e', buy:'#3b82f6', social:'#8b5cf6', wallpapers:'#ec4899', films:'#f97316', favorites:'#f43f5e' };

const AUTO_CONTENT_LIBRARY = {
    ai: [
        { title: 'Gemini', badge: 'Asystent AI', url: 'https://gemini.google.com/', description: 'Asystent Google oparty na modelach Gemini, dostępny w przeglądarce i aplikacjach mobilnych.' },
        { title: 'Microsoft Copilot', badge: 'Asystent AI', url: 'https://copilot.com/', description: 'Asystent Microsoft do rozmów, wyszukiwania informacji i tworzenia treści.' },
        { title: 'GitHub Copilot', badge: 'Asystent programistyczny', url: 'https://github.com/features/copilot', description: 'Asystent programistyczny GitHub z czatem, wyborem modeli i agentem do pracy nad zadaniami w repozytorium.' },
        { title: 'Claude', badge: 'Asystent AI', url: 'https://claude.ai/', description: 'Asystent Anthropic do pracy z tekstem, analizą, kodem i zadaniami wieloetapowymi.' },
        { title: 'ChatGPT', badge: 'Asystent AI', url: 'https://chatgpt.com/', description: 'Asystent OpenAI do rozmów, analizy, pracy z plikami i korzystania z narzędzi.' },
        { title: 'Perplexity', badge: 'Wyszukiwarka AI', url: 'https://www.perplexity.ai/', description: 'Wyszukiwarka i asystent odpowiadający na pytania z odnośnikami do źródeł.' },
        { title: 'Grok', badge: 'Asystent AI', url: 'https://grok.com/', description: 'Asystent xAI do rozmów, wyszukiwania i generowania treści.' },
        { title: 'Mistral Le Chat', badge: 'Asystent AI', url: 'https://chat.mistral.ai/', description: 'Asystent Mistral do rozmów i pracy z modelami tej firmy.' },
        { title: 'Google AI Studio', badge: 'Narzędzie dla deweloperów', url: 'https://aistudio.google.com/', description: 'Oficjalne środowisko Google do testowania modeli Gemini i tworzenia aplikacji korzystających z Gemini API.' },
        { title: 'OpenAI Agents SDK', badge: 'Open Source', url: 'https://github.com/openai/openai-agents-python', description: 'Oficjalny SDK OpenAI do budowania agentów, przekazywania zadań między nimi i przepływów z narzędziami.' },
        { title: 'Google Agent Development Kit', badge: 'Open Source', url: 'https://github.com/google/adk-python', description: 'Framework Google do budowania i wdrażania agentów; zoptymalizowany pod Gemini, ale obsługuje też inne modele.' },
        { title: 'Microsoft Agent Framework', badge: 'Open Source', url: 'https://github.com/microsoft/agent-framework', description: 'Aktualny framework Microsoft do agentów i przepływów wieloagentowych; następca AutoGen i Semantic Kernel.' },
        { title: 'LangGraph', badge: 'Open Source', url: 'https://github.com/langchain-ai/langgraph', description: 'Framework do budowania trwałych, sterowanych stanem agentów i przepływów z możliwością nadzoru człowieka.' },
        { title: 'CrewAI', badge: 'Open Source', url: 'https://github.com/crewAIInc/crewAI', description: 'Framework do współpracy zespołów agentów i kontrolowanych przepływów automatyzacji.' },
        { title: 'Agno', badge: 'Open Source', url: 'https://github.com/agno-agi/agno', description: 'Platforma i framework do budowania, uruchamiania oraz monitorowania agentów i zespołów agentów.' },
        { title: 'Pydantic AI', badge: 'Open Source', url: 'https://github.com/pydantic/pydantic-ai', description: 'Typowany SDK Pythona do tworzenia agentów z narzędziami i obsługą wielu dostawców modeli.' },
        { title: 'n8n', badge: 'Source Available', url: 'https://github.com/n8n-io/n8n', description: 'Platforma automatyzacji z wizualnymi przepływami AI i agentami; kod jest dostępny, ale projekt nie jest licencjonowany jako open source.' },
        { title: 'Open WebUI', badge: 'Open Source', url: 'https://github.com/open-webui/open-webui', description: 'Samo-hostowany interfejs czatu w stylu ChatGPT z obsługą modeli lokalnych i integracji z narzędziami AI.' },
        { title: 'LibreChat', badge: 'Open Source', url: 'https://github.com/danny-avila/LibreChat', description: 'Otwartoźródłowy klient czatu z integracją wielu modeli i narzędzi AI w jednym miejscu.' },
        { title: 'AnythingLLM', badge: 'Open Source', url: 'https://github.com/Mintplex-Labs/anything-llm', description: 'Prywatna platforma do pracy z dokumentami, RAG i agentami AI na komputerze lokalnym.' },
        { title: 'Ollama', badge: 'Open Source', url: 'https://ollama.com', description: 'Uruchamianie modeli językowych lokalnie bez konieczności korzystania z chmury.' },
        { title: 'LlamaIndex', badge: 'Open Source', url: 'https://www.llamaindex.ai', description: 'Biblioteka do budowania aplikacji z Retrieval-Augmented Generation i łącząca modele z danymi.' },
        { title: 'LangChain', badge: 'Open Source', url: 'https://www.langchain.com', description: 'Framework do tworzenia agentów i aplikacji opartych na modelach językowych.' },
        { title: 'Flowise', badge: 'Projekt wygaszony', url: 'https://flowiseai.com/sunset', description: 'Projekt ogłosił zakończenie utrzymania i archiwizację w 2026 r. Kod Apache 2.0 pozostaje dostępny do forkowania, ale nie należy oczekiwać nowych wydań ani poprawek zespołu.' },
        { title: 'Mistral AI', badge: 'Dostawca modeli AI', url: 'https://mistral.ai', description: 'Firma rozwijająca modele AI oraz usługi dla użytkowników i deweloperów.', refreshExisting: true },
        { title: 'Hugging Face', badge: 'Open Source', url: 'https://huggingface.co', description: 'Wielka społeczność modeli, bibliotek i gotowych rozwiązań do AI i ML.' },
        { title: 'Stable Diffusion', badge: 'Open Source', url: 'https://github.com/CompVis/stable-diffusion', description: 'Otwartoźródłowy model generowania obrazów i grafiki 2D z kontrolą nad kompozycją.' },
        { title: 'ComfyUI', badge: 'Open Source', url: 'https://github.com/comfyanonymous/ComfyUI', description: 'Graficzny interfejs do tworzenia i uruchamiania workflowów generatywnych.' },
        { title: 'LM Studio', badge: 'Darmowe narzędzie', url: 'https://lmstudio.ai', description: 'Aplikacja desktopowa do pobierania i uruchamiania modeli językowych lokalnie.', refreshExisting: true },
        { title: 'Jan', badge: 'Open Source', url: 'https://jan.ai', description: 'Lokalny asystent AI z obsługą modeli na komputerze i prywatnym miejscem pracy.' },
        { title: 'DeepSeek', badge: 'Dostawca modeli AI', url: 'https://deepseek.com/', description: 'Asystent i dostawca modeli DeepSeek; dostępność i warunki usług zależą od regionu.', refreshExisting: true },
        { title: 'Meta Llama', badge: 'Modele open-weight', url: 'https://dev.meta.ai/', description: 'Rodzina modeli z otwartymi wagami udostępnianymi na warunkach licencji Meta; nie jest to licencja open source OSI.', refreshExisting: true },
        { title: 'Bark', badge: 'Open Source', url: 'https://github.com/suno-ai/bark', description: 'Generowanie audio i głosu w języku naturalnym przy wykorzystaniu modeli AI.' },
        { title: 'InvokeAI', badge: 'Open Source', url: 'https://github.com/invoke-ai/InvokeAI', description: 'Mocna platforma do generowania obrazów i pracy z modelami generatywnymi.' },
        { title: 'LocalAI', badge: 'Open Source', url: 'https://localai.io', description: 'Narzędzie umożliwiające uruchamianie lokalnych modeli kompatybilnych z API OpenAI.' },
        { title: 'OpenRouter', badge: 'Usługa AI', url: 'https://openrouter.ai', description: 'Usługa API umożliwiająca dostęp do modeli wielu dostawców przez jeden interfejs.', refreshExisting: true },
        { title: 'Qdrant', badge: 'Open Source', url: 'https://qdrant.tech', description: 'Wektorowa baza danych do wyszukiwania semantycznego i pamięci aplikacji AI.' }
    ],
    software: [
        { title: 'LibreOffice', badge: 'Open Source', url: 'https://www.libreoffice.org', description: 'Kompletny pakiet biurowy z edytorem tekstu, arkuszami i prezentacjami.' },
        { title: 'GIMP', badge: 'Open Source', url: 'https://www.gimp.org', description: 'Profesjonalny edytor grafiki rastrowej do retuszu, kompozycji i grafiki internetowej.' },
        { title: 'Inkscape', badge: 'Open Source', url: 'https://inkscape.org', description: 'Edytor grafiki wektorowej do tworzenia ikon, ilustracji i układów publikacyjnych.' },
        { title: 'Krita', badge: 'Open Source', url: 'https://krita.org', description: 'Aplikacja do malarstwa cyfrowego i tworzenia ilustracji fotograficznych.' },
        { title: 'Blender', badge: 'Open Source', url: 'https://www.blender.org', description: 'Potężny pakiet do modelowania, animacji i renderingu 3D.' },
        { title: 'Firefox', badge: 'Open Source', url: 'https://www.mozilla.org/firefox/', description: 'Bezpieczna przeglądarka internetowa z silnym naciskiem na prywatność i kompatybilność.' },
        { title: 'Google Chrome', badge: 'Darmowe, własnościowe', url: 'https://www.google.com/chrome/', description: 'Przeglądarka Google oparta na projekcie Chromium, z synchronizacją, rozszerzeniami i automatycznymi aktualizacjami.' },
        { title: 'Microsoft Edge', badge: 'Darmowe, własnościowe', url: 'https://www.microsoft.com/edge', description: 'Przeglądarka Microsoft oparta na Chromium, z funkcjami bezpieczeństwa, synchronizacji i integracją z usługami Microsoft.' },
        { title: 'Opera', badge: 'Darmowe, własnościowe', url: 'https://www.opera.com/', description: 'Przeglądarka oparta na Chromium z grupowaniem kart, bocznym panelem komunikatorów i wbudowanymi funkcjami.' },
        { title: 'Opera GX', badge: 'Darmowe, własnościowe', url: 'https://www.opera.com/gx', description: 'Przeglądarka Opera oparta na Chromium z funkcjami personalizacji i kontrolą zużycia zasobów dla graczy.' },
        { title: 'Vivaldi', badge: 'Darmowe, własnościowe', url: 'https://vivaldi.com/', description: 'Przeglądarka oparta na Chromium z rozbudowaną konfiguracją kart, obszarami roboczymi, pocztą i kalendarzem.' },
        { title: 'Brave', badge: 'Open Source', url: 'https://brave.com/', description: 'Przeglądarka oparta na Chromium z wbudowanym blokowaniem reklam i elementów śledzących.' },
        { title: 'Chromium', badge: 'Open Source', url: 'https://www.chromium.org/', description: 'Otwarty projekt przeglądarki stanowiący bazę dla Google Chrome i wielu innych przeglądarek.' },
        { title: 'Helium Browser', badge: 'Open Source', url: 'https://helium.computer/', description: 'Oparta na Chromium przeglądarka skupiona na prywatności, ograniczaniu reklam i transparentnym rozwoju.' },
        { title: 'Thorium Browser', badge: 'Open Source', url: 'https://thorium.rocks/', description: 'Niezależna kompilacja Chromium z modyfikacjami wydajności i interfejsu.' },
        { title: 'Ungoogled Chromium', badge: 'Open Source', url: 'https://github.com/ungoogled-software/ungoogled-chromium', description: 'Chromium z ograniczonymi zależnościami od usług Google i dodatkowymi poprawkami kontroli oraz prywatności.' },
        { title: 'Yandex Browser', badge: 'Darmowe, własnościowe', url: 'https://browser.yandex.com/', description: 'Przeglądarka Yandex oparta na Chromium, zintegrowana z usługami tej firmy.' },
        { title: 'Floorp', badge: 'Open Source', url: 'https://floorp.app/', description: 'Przeglądarka oparta na Firefoxie z obszarami roboczymi, widokiem podzielonym i panelem bocznym.' },
        { title: 'Zen Browser', badge: 'Open Source', url: 'https://zen-browser.app/', description: 'Przeglądarka oparta na Firefoxie, zaprojektowana z myślą o prywatności, obszarach roboczych i skupieniu.' },
        { title: 'Mullvad Browser', badge: 'Open Source', url: 'https://mullvad.net/en/browser', description: 'Przeglądarka rozwijana przez Tor Project, z ochroną przed śledzeniem i fingerprintingiem; nie wymaga VPN.' },
        { title: 'Waterfox', badge: 'Open Source', url: 'https://www.waterfox.com/', description: 'Niezależna przeglądarka oparta na Firefoksie, z naciskiem na prywatność, personalizację i ograniczenie telemetrii.' },
        { title: 'Thunderbird', badge: 'Open Source', url: 'https://www.thunderbird.net', description: 'Klient poczty, kalendarza i kontaktów z funkcją pracy offline.' },
        { title: '7-Zip', badge: 'Open Source', url: 'https://www.7-zip.org', description: 'Narzędzie do kompresji plików z bardzo dobrym współczynnikiem kompresji.' },
        { title: 'Notepad++', badge: 'Open Source', url: 'https://notepad-plus-plus.org', description: 'Lekki edytor tekstu z podświetlaniem składni i funkcjami programistycznymi.' },
        { title: 'qBittorrent', badge: 'Open Source', url: 'https://www.qbittorrent.org', description: 'Klient torrentów bez reklam i z przyjaznym interfejsem użytkownika.' },
        { title: 'Apache OpenOffice', badge: 'Open Source', url: 'https://www.openoffice.org/', description: 'Pakiet biurowy Apache z edytorem tekstu, arkuszem kalkulacyjnym, prezentacjami, rysunkami i bazami danych.' },
        { title: 'Deluge', badge: 'Open Source', url: 'https://deluge-torrent.org/', description: 'Wieloplatformowy klient BitTorrent z interfejsem graficznym, trybem demona i systemem wtyczek.' },
        { title: 'BiglyBT', badge: 'Open Source', url: 'https://www.biglybt.com/', description: 'Klient BitTorrent rozwijany jako otwarte oprogramowanie, z obsługą wtyczek, tagów i zadań pobierania.' },
        { title: 'Tribler', badge: 'Open Source', url: 'https://www.tribler.org/', description: 'Klient BitTorrent z wyszukiwaniem P2P i eksperymentalnym routingiem onion; projekt zaznacza, że anonimowość nie jest jeszcze dojrzała.' },
        { title: 'aMule', badge: 'Open Source', url: 'https://github.com/amule-org/amule', description: 'Wieloplatformowy klient sieci eD2k i Kademlia z interfejsem graficznym, demonem i klientem zdalnym.' },
        { title: 'eMule', badge: 'Open Source', url: 'https://www.emule-project.com/', description: 'Klient P2P dla sieci eD2k i Kad; oficjalna strona publikuje wydania klienta eMule i wersji Community.' },
        { title: 'FrostWire', badge: 'Open Source', url: 'https://www.frostwire.com/', description: 'Klient BitTorrent z wyszukiwaniem, podglądem pobieranych multimediów, biblioteką i odtwarzaczem.' },
        { title: 'Transmission', badge: 'Open Source', url: 'https://transmissionbt.com/', description: 'Lekki klient BitTorrent dla komputerów i serwerów, z obsługą interfejsu webowego.', refreshExisting: true },
        { title: 'Nicotine+', badge: 'Open Source', url: 'https://nicotine-plus.org/', description: 'Graficzny klient sieci Soulseek do P2P, wyszukiwania i udostępniania plików. Protokół Soulseek nie szyfruje komunikacji.', refreshExisting: true },
        { title: 'VirtualBox', badge: 'Open Source', url: 'https://www.virtualbox.org', description: 'Maszyna wirtualna do testowania systemów operacyjnych i środowisk.' },
        { title: 'Bitwarden', badge: 'Open Source', url: 'https://bitwarden.com', description: 'Bezpieczny menedżer haseł i kluczy dostępu do wielu usług.' },
        { title: 'KeePassXC', badge: 'Open Source', url: 'https://keepassxc.org', description: 'Prywatny i lokalny magazyn haseł z obsługą synchronizacji w chmurze.' },
        { title: 'ShareX', badge: 'Open Source', url: 'https://getsharex.com', description: 'Narzędzie do robienia zrzutów ekranu, nagrywania i szybkich akcji.' },
        { title: 'FileZilla', badge: 'Open Source', url: 'https://filezilla-project.org', description: 'Klient FTP i SFTP do przesyłania plików na serwer.' },
        { title: 'VeraCrypt', badge: 'Open Source', url: 'https://www.veracrypt.fr', description: 'Szyfrowanie dysków i woluminów z wysokim poziomem ochrony danych.' },
        { title: 'Darktable', badge: 'Open Source', url: 'https://www.darktable.org', description: 'Otwarty edytor RAW do obróbki zdjęć z pełną kontrolą nad detalami.' },
        { title: 'WinDirStat', badge: 'Open Source', url: 'https://windirstat.net', description: 'Analiza zajętości dysku i szybkie znajdowanie dużych plików.' },
        { title: 'OBS Studio', badge: 'Open Source', url: 'https://obsproject.com', description: 'Nagrywanie ekranu, streamowanie i wizualne pokazy w czasie rzeczywistym.' },
        { title: 'OnlyOffice', badge: 'Open Source', url: 'https://www.onlyoffice.com', description: 'Pakiet biurowy kompatybilny z formatami Microsoft Office i chmurą.' },
        { title: 'Audacity', badge: 'Open Source', url: 'https://www.audacityteam.org/', description: 'Wieloplatformowy edytor i rejestrator audio do nagrań, podcastów, montażu ścieżek i analizy dźwięku.' },
        { title: 'MuseScore Studio', badge: 'Open Source', url: 'https://musescore.org/', description: 'Program do zapisu, edycji i odtwarzania nut dla instrumentów, zespołów i orkiestr.' },
        { title: 'MusicBrainz Picard', badge: 'Open Source', url: 'https://picard.musicbrainz.org/', description: 'Tagger muzyczny, który rozpoznaje nagrania i porządkuje metadane kolekcji z pomocą bazy MusicBrainz.' },
        { title: 'Strawberry Music Player', badge: 'Open Source', url: 'https://www.strawberrymusicplayer.org/', description: 'Odtwarzacz i organizer kolekcji muzycznej z obsługą wielu formatów, radia i tagów.' },
        { title: 'Rosegarden', badge: 'Open Source', url: 'https://www.rosegardenmusic.com/', description: 'Sekwencer MIDI i audio, edytor partytur oraz środowisko do komponowania muzyki.' },
        { title: 'Guitarix', badge: 'Open Source', url: 'https://guitarix.org/', description: 'Wirtualny wzmacniacz gitarowy i procesor efektów audio dla systemu Linux.' },
        { title: 'Sonic Visualiser', badge: 'Open Source', url: 'https://www.sonicvisualiser.org/', description: 'Narzędzie do wizualnego badania i anotowania nagrań muzycznych.' },
        { title: 'Calligra Suite', badge: 'Open Source', url: 'https://www.calligra.org/', description: 'Pakiet KDE obejmujący edytor tekstu, arkusz, prezentacje, grafikę wektorową i zarządzanie projektami.' },
        { title: 'Collabora Online', badge: 'Open Source', url: 'https://www.collaboraonline.com/', description: 'Współpraca nad dokumentami, arkuszami i prezentacjami w przeglądarce, także na własnym serwerze.' },
        { title: 'Etherpad', badge: 'Open Source', url: 'https://etherpad.org/', description: 'Edytor tekstu do współpracy w czasie rzeczywistym, możliwy do samodzielnego hostowania.' },
        { title: 'Joplin', badge: 'Open Source', url: 'https://joplinapp.org/', description: 'Aplikacja do notatek i zadań z synchronizacją, obsługą Markdown oraz opcją własnego magazynu danych.' },
        { title: 'MarkText', badge: 'Open Source', url: 'https://github.com/marktext/marktext', description: 'Edytor Markdown z podglądem na żywo, trybem skupienia oraz eksportem do HTML i PDF.' },
        { title: 'Obsidian', badge: 'Darmowe, własnościowe', url: 'https://obsidian.md/', description: 'Lokalna aplikacja do notatek Markdown, łączenia wiedzy i tworzenia osobistej bazy wiedzy; kod aplikacji jest własnościowy.' },
        { title: 'Zettlr', badge: 'Open Source', url: 'https://www.zettlr.com/', description: 'Edytor Markdown i środowisko do pracy naukowej, notatek oraz zarządzania bibliografią.' },
        { title: 'Xournal++', badge: 'Open Source', url: 'https://xournalpp.github.io/', description: 'Aplikacja do odręcznych notatek, adnotacji PDF i pracy z tabletami graficznymi.' },
        { title: 'PDF Arranger', badge: 'Open Source', url: 'https://github.com/pdfarranger/pdfarranger', description: 'Proste narzędzie do łączenia, dzielenia, obracania i zmiany kolejności stron PDF.' },
        { title: 'Okular', badge: 'Open Source', url: 'https://okular.kde.org/', description: 'Uniwersalny czytnik dokumentów KDE z obsługą PDF, EPUB, komiksów i adnotacji.' },
        { title: 'Sigil', badge: 'Open Source', url: 'https://sigil-ebook.com/', description: 'Edytor e-booków EPUB z widokiem kodu i narzędziami do kontroli struktury publikacji.' },
        { title: 'KOReader', badge: 'Open Source', url: 'https://koreader.rocks/', description: 'Czytnik e-booków i dokumentów dla czytników E Ink, Androida i Linuxa.' },
        { title: 'Thorium Reader', badge: 'Open Source', url: 'https://www.edrlab.org/software/thorium-reader/', description: 'Czytnik EPUB i publikacji cyfrowych rozwijany przez European Digital Reading Lab.' },
        { title: 'Marp', badge: 'Open Source', url: 'https://marp.app/', description: 'Narzędzia do tworzenia prezentacji z Markdown i eksportu do HTML, PDF lub PowerPoint.' },
        { title: 'reveal.js', badge: 'Open Source', url: 'https://revealjs.com/', description: 'Framework HTML do tworzenia interaktywnych prezentacji działających w przeglądarce.' },
        { title: 'KMail', badge: 'Open Source', url: 'https://kontact.kde.org/components/kmail/', description: 'Klient poczty KDE z obsługą wielu kont, filtrów i integracją z pakietem Kontact.' },
        { title: 'Claws Mail', badge: 'Open Source', url: 'https://www.claws-mail.org/', description: 'Lekki, konfigurowalny klient poczty i czytnik RSS dla komputerów stacjonarnych.' },
        { title: 'Betterbird', badge: 'Open Source', url: 'https://www.betterbird.eu/', description: 'Społecznościowa wersja Thunderbirda z dodatkowymi poprawkami i ulepszeniami interfejsu.' },
        { title: 'RawTherapee', badge: 'Open Source', url: 'https://rawtherapee.com/', description: 'Niedestrukcyjny procesor zdjęć RAW z narzędziami do koloru, detali i korekcji obiektywu.' },
        { title: 'digiKam', badge: 'Open Source', url: 'https://www.digikam.org/', description: 'Organizer i edytor zdjęć z katalogowaniem dużych bibliotek, tagami i obsługą metadanych.' },
        { title: 'Ente Photos', badge: 'Open Source / usługa w chmurze', url: 'https://github.com/ente-io/ente', description: 'Aplikacja do szyfrowanej kopii zapasowej, synchronizacji i prywatnego udostępniania zdjęć. Klient i serwer są open source (AGPL-3.0); usługa oferuje 10 GB bezpłatnej przestrzeni.' },
        { title: 'Hugin', badge: 'Open Source', url: 'https://hugin.sourceforge.io/', description: 'Narzędzie do łączenia zdjęć w panoramy oraz korekcji geometrii i ekspozycji.' },
        { title: 'Luminance HDR', badge: 'Open Source', url: 'https://qtpfsgui.sourceforge.net/', description: 'Aplikacja do tworzenia i tonemappingu obrazów HDR z kilku ekspozycji.' },
        { title: 'Pinta', badge: 'Open Source', url: 'https://www.pinta-project.com/', description: 'Prosty edytor grafiki rastrowej do rysowania, retuszu i podstawowej edycji obrazów.' },
        { title: 'nomacs', badge: 'Open Source', url: 'https://nomacs.org/', description: 'Lekka przeglądarka obrazów z podstawową edycją, synchronizacją widoków i obsługą formatów RAW.' },
        { title: 'ImageMagick', badge: 'Open Source', url: 'https://imagemagick.org/', description: 'Zestaw narzędzi wiersza poleceń i bibliotek do konwersji, edycji oraz analizy obrazów.' },
        { title: 'Gwenview', badge: 'Open Source', url: 'https://apps.kde.org/gwenview/', description: 'Przeglądarka obrazów KDE z podstawowymi funkcjami kadrowania, obracania i adnotacji.' },
        { title: 'Penpot', badge: 'Open Source', url: 'https://penpot.app/', description: 'Platforma do projektowania interfejsów, prototypowania i pracy zespołowej z możliwością hostowania.' },
        { title: 'FreeCAD', badge: 'Open Source', url: 'https://www.freecad.org/', description: 'Parametryczny modeler 3D do projektowania części, produktów, budynków i dokumentacji technicznej.' },
        { title: 'KiCad', badge: 'Open Source', url: 'https://www.kicad.org/', description: 'Pakiet EDA do projektowania schematów elektronicznych i płytek PCB z podglądem 3D.' },
        { title: 'OpenSCAD', badge: 'Open Source', url: 'https://openscad.org/', description: 'Programistyczny modeler CAD 3D, w którym modele opisuje się skryptami.' },
        { title: 'LibreCAD', badge: 'Open Source', url: 'https://www.librecad.org/', description: 'Darmowa aplikacja CAD 2D do rysunków technicznych i pracy z plikami DXF.' },
        { title: 'QGIS', badge: 'Open Source', url: 'https://qgis.org/', description: 'System informacji geograficznej do tworzenia map, edycji warstw i analizy danych przestrzennych.' },
        { title: 'Scribus', badge: 'Open Source', url: 'https://www.scribus.net/', description: 'Program DTP do składu książek, broszur, ulotek i przygotowania publikacji do druku.' },
        { title: 'SolveSpace', badge: 'Open Source', url: 'https://solvespace.com/', description: 'Parametryczne narzędzie CAD do modelowania 2D i 3D, części oraz mechanizmów.' },
        { title: 'BRL-CAD', badge: 'Open Source', url: 'https://brlcad.org/', description: 'Rozbudowany pakiet CAD do modelowania bryłowego, analizy geometrii i ray tracingu.' },
        { title: 'Sweet Home 3D', badge: 'Open Source', url: 'https://www.sweethome3d.com/', description: 'Program do projektowania wnętrz z rzutem 2D i podglądem aranżacji w 3D.' },
        { title: 'Kdenlive', badge: 'Open Source', url: 'https://kdenlive.org/', description: 'Wieloplatformowy edytor nieliniowy do montażu wideo, pracy na ścieżkach i korekcji obrazu.' },
        { title: 'Shotcut', badge: 'Open Source', url: 'https://shotcut.org/', description: 'Wieloplatformowy edytor wideo z obsługą wielu formatów, filtrów i montażu natywnego.' },
        { title: 'OpenShot', badge: 'Open Source', url: 'https://www.openshot.org/', description: 'Edytor wideo do montażu na wielu ścieżkach, animacji klatek kluczowych i efektów.' },
        { title: 'VLC media player', badge: 'Open Source', url: 'https://www.videolan.org/vlc/', description: 'Odtwarzacz multimediów i strumieni obsługujący szeroki zestaw formatów bez dodatkowych kodeków.' },
        { title: 'HandBrake', badge: 'Open Source', url: 'https://handbrake.fr/', description: 'Transkoder wideo do konwersji materiałów do popularnych formatów i profili urządzeń.' },
        { title: 'WordPress', badge: 'Open Source', url: 'https://wordpress.org/', description: 'System publikacji treści i zarządzania stronami WWW z rozbudowanym ekosystemem motywów i wtyczek.' },
        { title: 'Joomla', badge: 'Open Source', url: 'https://www.joomla.org/', description: 'System CMS do tworzenia stron i aplikacji internetowych z wielojęzycznością i rozszerzeniami.' },
        { title: 'Grav CMS', badge: 'Open Source', url: 'https://getgrav.org/', description: 'Plikowy CMS oparty na Markdown, bez wymaganej bazy danych, przeznaczony do stron i dokumentacji.' },
        { title: 'Hugo', badge: 'Open Source', url: 'https://gohugo.io/', description: 'Szybki generator statycznych stron WWW napisany w Go.' },
        { title: 'Jekyll', badge: 'Open Source', url: 'https://jekyllrb.com/', description: 'Generator statycznych witryn i blogów z treści Markdown oraz szablonów.' },
        { title: 'Astro', badge: 'Open Source', url: 'https://astro.build/', description: 'Framework JavaScript do szybkich, opartych na treści stron i witryn.' },
        { title: 'Publii', badge: 'Open Source', url: 'https://getpublii.com/', description: 'Desktopowy CMS do tworzenia i publikowania statycznych stron oraz blogów.' },
        { title: 'Bluefish', badge: 'Open Source', url: 'https://bluefish.openoffice.nl/', description: 'Edytor dla programistów i projektantów stron, obsługujący HTML, CSS, PHP i inne języki.' },
        { title: 'VSCodium', badge: 'Open Source', url: 'https://vscodium.com/', description: 'Społecznościowe, pozbawione telemetrii kompilacje edytora VS Code na licencji MIT.' },
        { title: 'Geany', badge: 'Open Source', url: 'https://www.geany.org/', description: 'Lekki edytor tekstu i IDE z podstawowymi funkcjami dla wielu języków programowania.' },
        { title: 'Kate', badge: 'Open Source', url: 'https://kate-editor.org/', description: 'Edytor tekstu KDE z podświetlaniem składni, wieloma dokumentami i narzędziami programistycznymi.' },
        { title: 'Eclipse IDE', badge: 'Open Source', url: 'https://eclipseide.org/', description: 'Rozszerzalne środowisko programistyczne z bogatym ekosystemem wtyczek i narzędzi.' },
        { title: 'Code::Blocks', badge: 'Open Source', url: 'https://www.codeblocks.org/', description: 'Konfigurowalne, wieloplatformowe środowisko IDE dla C, C++ i Fortrana.' },
        { title: 'RetroArch', badge: 'Open Source', url: 'https://retroarch.com/', description: 'Frontend dla emulatorów i silników gier z jednolitym interfejsem i systemem rdzeni Libretro.' },
        { title: 'Dolphin Emulator', badge: 'Open Source', url: 'https://dolphin-emu.org/', description: 'Emulator konsol Nintendo GameCube i Wii dla komputerów oraz urządzeń mobilnych.' },
        { title: 'PCSX2', badge: 'Open Source', url: 'https://pcsx2.net/', description: 'Emulator PlayStation 2 na komputery z dodatkowymi opcjami obrazu, zapisu i sterowania.' },
        { title: 'MAME', badge: 'Open Source', url: 'https://www.mamedev.org/', description: 'Projekt emulacji i dokumentowania automatów arcade, komputerów oraz historycznego sprzętu.' },
        { title: 'DOSBox Staging', badge: 'Open Source', url: 'https://www.dosbox-staging.org/', description: 'Rozwijana wersja DOSBox do uruchamiania gier i programów DOS na współczesnych systemach.' },
        { title: 'Cemu', badge: 'Open Source', url: 'https://cemu.info/', description: 'Emulator konsoli Nintendo Wii U dla komputerów osobistych.' },
        { title: 'mGBA', badge: 'Open Source', url: 'https://mgba.io/', description: 'Emulator Game Boy Advance z naciskiem na szybkość, dokładność i przenośność.' },
        { title: 'melonDS', badge: 'Open Source', url: 'https://melonds.kuribo64.net/', description: 'Emulator Nintendo DS rozwijany z naciskiem na szybką i dokładną emulację.' },
        { title: 'ScummVM', badge: 'Open Source', url: 'https://www.scummvm.org/', description: 'Uruchamia klasyczne gry przygodowe na współczesnych systemach, korzystając z oryginalnych plików danych.' },
        { title: 'PPSSPP', badge: 'Open Source', url: 'https://www.ppsspp.org/', description: 'Emulator PlayStation Portable dostępny na komputery i urządzenia mobilne.' },
        { title: 'xemu', badge: 'Open Source', url: 'https://xemu.app/', description: 'Emulator oryginalnej konsoli Xbox dla systemów Windows, macOS i Linux.' },
        { title: 'RPCS3', badge: 'Open Source', url: 'https://github.com/RPCS3/rpcs3', description: 'Emulator i debugger PlayStation 3 rozwijany jako otwarty projekt społecznościowy.' },
        { title: 'Sigil', badge: 'Open Source', url: 'https://sigil-ebook.com/', description: 'Edytor e-booków EPUB do tworzenia i poprawiania publikacji elektronicznych.' },
        { title: 'KOReader', badge: 'Open Source', url: 'https://koreader.rocks/', description: 'Czytnik e-booków i dokumentów dla urządzeń E Ink, Androida i Linuxa.' },
        { title: 'Thorium Reader', badge: 'Open Source', url: 'https://www.edrlab.org/software/thorium-reader/', description: 'Czytnik EPUB i publikacji cyfrowych tworzony przez European Digital Reading Lab.' },
        { title: 'Foliate', badge: 'Open Source', url: 'https://github.com/johnfactotum/foliate', description: 'Czytnik e-booków dla środowiska GNOME z obsługą formatów EPUB i bibliotek online.' },
        { title: 'Marp', badge: 'Open Source', url: 'https://marp.app/', description: 'Ekosystem narzędzi do przygotowywania prezentacji z Markdown i eksportu do HTML, PDF oraz PowerPoint.' },
        { title: 'reveal.js', badge: 'Open Source', url: 'https://revealjs.com/', description: 'Framework do tworzenia interaktywnych prezentacji HTML działających w przeglądarce.' },
        { title: 'Slidev', badge: 'Open Source', url: 'https://sli.dev/', description: 'Narzędzie do tworzenia prezentacji dla programistów z Markdown, Vue i komponentami webowymi.' },
        { title: 'Sozi', badge: 'Open Source', url: 'https://sozi.baierouge.fr/', description: 'Edytor prezentacji SVG z nie-liniowym przejściem między widokami i animacjami.' },
        { title: 'Syncthing', badge: 'Open Source', url: 'https://syncthing.net/', description: 'Synchronizuje pliki bezpośrednio między urządzeniami, bez centralnego serwera przechowującego dane.' },
        { title: 'Nextcloud Desktop', badge: 'Open Source', url: 'https://nextcloud.com/install/#install-clients', description: 'Klient synchronizacji plików i folderów z własnym serwerem Nextcloud.' },
        { title: 'LocalSend', badge: 'Open Source', url: 'https://localsend.org/', description: 'Przesyłanie plików między urządzeniami w sieci lokalnej, bez konta i połączenia z chmurą.' },
        { title: 'Cryptomator', badge: 'Open Source', url: 'https://cryptomator.org/', description: 'Szyfruje pliki lokalnie przed synchronizacją ich z usługami chmurowymi.' },
        { title: 'Ventoy', badge: 'Open Source', url: 'https://www.ventoy.net/en/index.html', description: 'Narzędzie do przygotowania nośnika USB, z którego można uruchamiać wiele obrazów ISO.' },
        { title: 'balenaEtcher', badge: 'Open Source', url: 'https://etcher.balena.io/', description: 'Graficzne narzędzie do bezpiecznego zapisywania obrazów systemów na kartach i nośnikach USB.' },
        { title: 'Rufus', badge: 'Open Source', url: 'https://rufus.ie/', description: 'Narzędzie Windows do formatowania nośników USB i tworzenia nośników startowych.' },
        { title: 'GParted', badge: 'Open Source', url: 'https://gparted.org/', description: 'Edytor partycji do tworzenia, zmiany rozmiaru, przenoszenia i sprawdzania partycji dysków.' },
        { title: 'Clonezilla', badge: 'Open Source', url: 'https://clonezilla.org/', description: 'Narzędzie do obrazowania i klonowania dysków oraz partycji.' },
        { title: 'PeaZip', badge: 'Open Source', url: 'https://peazip.github.io/', description: 'Archiwizator plików z obsługą wielu formatów, szyfrowania i zarządzania archiwami.' },
        { title: 'DBeaver Community', badge: 'Open Source', url: 'https://dbeaver.io/', description: 'Wieloplatformowy klient baz danych dla programistów i administratorów.' },
        { title: 'DB Browser for SQLite', badge: 'Open Source', url: 'https://sqlitebrowser.org/', description: 'Graficzne narzędzie do tworzenia, przeglądania i edycji baz danych SQLite.' },
        { title: 'Meld', badge: 'Open Source', url: 'https://meldmerge.org/', description: 'Wizualne porównywanie i scalanie plików, katalogów oraz zmian w systemach kontroli wersji.' },
        { title: 'WinMerge', badge: 'Open Source', url: 'https://winmerge.org/', description: 'Narzędzie Windows do porównywania i scalania plików oraz katalogów.' },
        { title: 'Tor Browser', badge: 'Open Source', url: 'https://www.torproject.org/download/', description: 'Przeglądarka Tor zaprojektowana do ograniczania śledzenia i ochrony prywatności w sieci.' },
        { title: 'qutebrowser', badge: 'Open Source', url: 'https://www.qutebrowser.org/', description: 'Przeglądarka internetowa sterowana klawiaturą i inspirowana modalnym edytorem Vim.' },
        { title: 'LibreWolf', badge: 'Open Source', url: 'https://librewolf.net/', description: 'Niezależna kompilacja Firefoksa z ustawieniami skupionymi na prywatności i ograniczeniu telemetrii.' }
    ],
    multimedia: [
        { title: 'Kdenlive', badge: 'Open Source', url: 'https://kdenlive.org', description: 'Nieliniowy edytor wideo z wieloma ścieżkami, przejściami i efektami.' },
        { title: 'Shotcut', badge: 'Open Source', url: 'https://shotcut.org', description: 'Wieloplatformowy edytor wideo do montażu i obróbki materiałów.' },
        { title: 'OpenShot', badge: 'Open Source', url: 'https://www.openshot.org', description: 'Prosty, lecz skuteczny edytor wideo do szybkiego montażu materiałów.' },
        { title: 'VLC', badge: 'Open Source', url: 'https://www.videolan.org/vlc/', description: 'Wszechstronny odtwarzacz wideo i audio z obsługą wielu formatów.' },
        { title: 'MPV', badge: 'Open Source', url: 'https://mpv.io', description: 'Lekki odtwarzacz multimedialny dla osób cenionych prostotę i mocno konfigurowalny.' },
        { title: 'Audacious', badge: 'Open Source', url: 'https://audacious-media-player.org', description: 'Odświeżony odtwarzacz muzyczny z prostym interfejsem i dużą kompatybilnością.' },
        { title: 'HandBrake', badge: 'Open Source', url: 'https://handbrake.fr', description: 'Konwertowanie i kompresja plików wideo do popularnych formatów.' },
        { title: 'FFmpeg', badge: 'Open Source', url: 'https://ffmpeg.org', description: 'Potężne narzędzie do transkodowania, strumieniowania i przetwarzania multimediów.' },
        { title: 'Jellyfin', badge: 'Open Source', url: 'https://jellyfin.org', description: 'Serwer mediów do przechowywania i odtwarzania filmów oraz muzyki w domu.' },
        { title: 'Kodi', badge: 'Open Source', url: 'https://kodi.tv', description: 'Centrum multimedialne do strumieniowania, odtwarzania i organizacji biblioteki.' },
        { title: 'LMMS', badge: 'Open Source', url: 'https://lmms.io', description: 'Cyfrowa stacja audio do produkcji muzyki i tworzenia własnych utworów.' },
        { title: 'Ardour', badge: 'Open Source', url: 'https://ardour.org', description: 'Mocne narzędzie do nagrywania, miksowania i masteringu audio.' },
        { title: 'Mixxx', badge: 'Open Source', url: 'https://mixxx.org', description: 'Oprogramowanie DJ-skie do pracy z plikami audio i mikserami.' },
        { title: 'DaVinci Resolve', badge: 'Darmowa', url: 'https://www.blackmagicdesign.com/products/davinciresolve', description: 'Zaawansowany program do montażu wideo z wieloma narzędziami do postprodukcji.' },
        { title: 'Freetube', badge: 'Open Source', url: 'https://freetubeapp.io', description: 'Klient YouTube bez reklam i śledzenia, działający lokalnie w systemie.' },
        { title: 'Plex', badge: 'Open Source', url: 'https://www.plex.tv', description: 'Serwer multimedialny służący do organizacji i udostępniania własnej biblioteki.' },
        { title: 'Mpv', badge: 'Open Source', url: 'https://mpv.io', description: 'Bardzo lekki odtwarzacz z dużą kontrolą nad ustawieniami i wydajnością.' },
        { title: 'Avidemux', badge: 'Open Source', url: 'https://avidemux.org', description: 'Narzędzie do prostego montażu i konwersji materiałów wideo.' },
        { title: 'Subsonic', badge: 'Open Source', url: 'https://www.subsonic.org', description: 'Serwer muzyczny pozwalający przechowywać i odtwarzać bibliotekę audio z sieci.' },
        { title: 'Piwigo', badge: 'Open Source', url: 'https://piwigo.org', description: 'Serwis do zarządzania galeriami zdjęć i organizowania multimediów.' }
    ],
    knowledge: [
        { title: 'MIT OpenCourseWare', badge: 'Open Access', url: 'https://ocw.mit.edu', description: 'Darmowe materiały z zajęć i wykładów prowadzonej przez słynny uniwersytet MIT.' },
        { title: 'OpenStax', badge: 'Open Access', url: 'https://openstax.org', description: 'Darmowe podręczniki akademickie dostępne dla studentów i nauczycieli.' },
        { title: 'Project Gutenberg', badge: 'Open Access', url: 'https://www.gutenberg.org', description: 'Biblioteka wolnych e-booków z klasyczną literaturą i publikacjami publicznymi.' },
        { title: 'Wikipedia', badge: 'Open Source', url: 'https://www.wikipedia.org', description: 'Największa wolna encyklopedia z tysiącami haseł i artykułów w wielu językach.' },
        { title: 'OER Commons', badge: 'Open Access', url: 'https://oercommons.org', description: 'Repozytorium darmowych materiałów edukacyjnych i zasobów szkoleniowych.' },
        { title: 'arXiv', badge: 'Open Access', url: 'https://arxiv.org', description: 'Repozytorium prestiżowych preprintów z nauk ścisłych i technicznych.' },
        { title: 'PubMed Central', badge: 'Open Access', url: 'https://www.ncbi.nlm.nih.gov/pmc/', description: 'Dostęp do artykułów biomedycznych i prac naukowych z obszaru medycyny.' },
        { title: 'Khan Academy', badge: 'Darmowa', url: 'https://www.khanacademy.org', description: 'Darmowe lekcje, filmy i ćwiczenia z matematyki, nauk i technologii.' },
        { title: 'freeCodeCamp', badge: 'Open Source', url: 'https://www.freecodecamp.org', description: 'Platforma do nauki programowania na praktycznych projektach i ćwiczeniach.' },
        { title: 'Stack Overflow', badge: 'Społeczność', url: 'https://stackoverflow.com', description: 'Największa społeczność programistów z rozwiązaniami i dyskusjami technicznymi.' },
        { title: 'Zotero', badge: 'Open Source', url: 'https://www.zotero.org', description: 'Menedżer bibliografii do organizowania źródeł i cytowań naukowych.' },
        { title: 'Anki', badge: 'Open Source', url: 'https://apps.ankiweb.net', description: 'System fiszek z powtórkami i nauką opartą na efekcie odstępu.' },
        { title: 'Moodle', badge: 'Open Source', url: 'https://moodle.org', description: 'Platforma e-learningowa do tworzenia kursów i szkoleń online.' },
        { title: 'Kiwix', badge: 'Open Source', url: 'https://www.kiwix.org', description: 'Przeglądanie Wikipedii, książek i materiałów edukacyjnych offline.' },
        { title: 'Wikibooks', badge: 'Open Source', url: 'https://www.wikibooks.org', description: 'Darmowe podręczniki i materiały edukacyjne napisane przez społeczność.' },
        { title: 'Internet Archive', badge: 'Open Access', url: 'https://archive.org', description: 'Archiwum cyfrowe z książkami, filmami, dźwiękiem i stronami internetowymi.' },
        { title: 'The Open University', badge: 'Open Access', url: 'https://www.open.ac.uk', description: 'Materiały i wykłady z uniwersyteckiego nauczania dostępne online.' },
        { title: 'Coursera', badge: 'Darmowa', url: 'https://www.coursera.org', description: 'Kursy online z najważniejszych uczelni i firm technologicznych.' },
        { title: 'edX', badge: 'Open Access', url: 'https://www.edx.org', description: 'Darmowe i płatne kursy z szerokiej gamy tematów akademickich.' },
        { title: 'OpenLearn', badge: 'Open Access', url: 'https://www.open.edu/openlearn', description: 'Zasoby edukacyjne i kursy online z uniwersytetu otwartego.' }
    ],
    tools: [
        { title: 'DevDocs', badge: 'Open Source', url: 'https://devdocs.io', description: 'Szybka dokumentacja frameworków, języków i narzędzi programistycznych.' },
        { title: 'Regex101', badge: 'Darmowa', url: 'https://regex101.com', description: 'Testowanie wyrażeń regularnych w praktyce z podglądem dopasowań.' },
        { title: 'CyberChef', badge: 'Open Source', url: 'https://gchq.github.io/CyberChef/', description: 'Zestaw narzędzi do analizy, dekodowania i transformacji danych.' },
        { title: 'Can I Use', badge: 'Open Source', url: 'https://caniuse.com', description: 'Sprawdzanie wsparcia dla API i funkcji przeglądarek webowych.' },
        { title: 'Squoosh', badge: 'Open Source', url: 'https://squoosh.app', description: 'Szybka kompresja obrazów z podglądem w czasie rzeczywistym.' },
        { title: 'TinyPNG', badge: 'Darmowa', url: 'https://tinypng.com', description: 'Składanie i optymalizacja obrazów bez utraty jakości w praktyce.' },
        { title: 'Hoppscotch', badge: 'Open Source', url: 'https://hoppscotch.io', description: 'Testowanie API z przejrzystym interfejsem i narzędziami deweloperskimi.' },
        { title: 'Postman', badge: 'Darmowa', url: 'https://www.postman.com', description: 'Sprzęt do testowania, dokumentowania i zarządzania endpointami API.' },
        { title: 'JSON Formatter', badge: 'Darmowa', url: 'https://jsonformatter.org', description: 'Formatowanie i walidacja plików JSON w prostym interfejsie.' },
        { title: 'IT-Tools', badge: 'Open Source', url: 'https://it-tools.tech', description: 'Zestaw narzędzi programisty do wielu codziennych zadań internetowych.' },
        { title: 'Carbon', badge: 'Open Source', url: 'https://carbon.now.sh', description: 'Tworzenie ładnych zrzutów fragmentów kodu do dokumentacji i publikacji.' },
        { title: 'Excalidraw', badge: 'Open Source', url: 'https://excalidraw.com', description: 'Szybkie tworzenie schematów, diagramów i rysunków technicznych.' },
        { title: 'CryptPad', badge: 'Open Source', url: 'https://cryptpad.fr', description: 'Prywatne, szyfrowane narzędzia do dokumentów, tabel i współpracy online.' },
        { title: 'Grist', badge: 'Open Source', url: 'https://www.getgrist.com', description: 'Nowoczesna aplikacja do analizy danych i pracy z tabelami w przeglądarce.' },
        { title: 'Figma', badge: 'Darmowa', url: 'https://www.figma.com', description: 'Narzędzie do projektowania UI i prototypowania interfejsów użytkownika.' },
        { title: 'Inkscape', badge: 'Open Source', url: 'https://inkscape.org', description: 'Wizualizacja i projektowanie grafiki wektorowej w profesjonalnym środowisku.' },
        { title: 'WebAIM', badge: 'Open Source', url: 'https://webaim.org', description: 'Materiały i narzędzia do projektowania dostępnych stron i aplikacji webowych.' },
        { title: 'Simple Icons', badge: 'Open Source', url: 'https://simpleicons.org', description: 'Repozytorium ikon popularnych narzędzi i usług internetowych.' },
        { title: 'GitHub Markdown', badge: 'Open Source', url: 'https://github.githubassets.com/gfm-preview/', description: 'Dokumentacja i wzorce stylów markdown używanych w projektach open source.' },
        { title: 'Favicon Generator', badge: 'Open Source', url: 'https://realfavicongenerator.net', description: 'Wygenerowanie ikon strony i zestawu favicons dla różnych platform.' }
    ],
    drivers: [
        { title: 'Mesa 3D', badge: 'Open Source', url: 'https://www.mesa3d.org', description: 'Open-source stack graficzny do OpenGL, Vulkan i renderingu 3D w systemach Linux.' },
        { title: 'GStreamer', badge: 'Open Source', url: 'https://gstreamer.freedesktop.org', description: 'Framework multimedialny do streamingu, dekodowania i renderowania dźwięku i obrazu.' },
        { title: 'Linux Kernel', badge: 'Open Source', url: 'https://www.kernel.org', description: 'Jądro systemu Linux z wieloma sterownikami i poprawkami bezpieczeństwa.' },
        { title: 'NVIDIA Open GPU', badge: 'Open Source', url: 'https://github.com/NVIDIA/open-gpu-kernel-modules', description: 'Sterowniki GPU producenta z otwartymi modułami dla systemów Linux.' },
        { title: 'AMDGPU', badge: 'Open Source', url: 'https://docs.kernel.org/gpu/amdgpu/', description: 'Sterownik dla kart AMD Radeon z pełnym wsparciem dla GPU i akceleracji.' },
        { title: 'Intel Graphics', badge: 'Open Source', url: 'https://gitlab.freedesktop.org/drm/intel', description: 'Sterowniki graficzne dla układów Intel i integracji z Linuxem.' },
        { title: 'NVK', badge: 'Open Source', url: 'https://docs.mesa3d.org/drivers/nvk.html', description: 'Otwarty sterownik Vulkan dla kart NVIDIA w ekosystemie Mesa.' },
        { title: 'RADV', badge: 'Open Source', url: 'https://docs.mesa3d.org/drivers/radv.html', description: 'Sterownik Vulkan dla kart z układami AMD z wydajnym renderowaniem.' },
        { title: 'ANV', badge: 'Open Source', url: 'https://docs.mesa3d.org/drivers/anv.html', description: 'Sterownik Intel Vulkan do wykorzystania z kartami Intel i nowoczesnym desktopem.' },
        { title: 'ALSA', badge: 'Open Source', url: 'https://www.alsa-project.org', description: 'Architektura audio dla systemów Linux i urządzeń dźwiękowych.' },
        { title: 'PipeWire', badge: 'Open Source', url: 'https://pipewire.org', description: 'Nowoczesny system audio i wideo dla użytkowników Linux i systemów współdzielonych.' },
        { title: 'Wine', badge: 'Open Source', url: 'https://www.winehq.org', description: 'Warstwa kompatybilności uruchamiająca aplikacje Windows na systemach Linux.' },
        { title: 'Proton', badge: 'Open Source', url: 'https://github.com/ValveSoftware/Proton', description: 'Zestaw narzędzi do uruchamiania gier Windows na Linuxie z Protonem.' },
        { title: 'DXVK', badge: 'Open Source', url: 'https://github.com/doitsujin/dxvk', description: 'Warstwa tłumacząca Direct3D na Vulkan dla lepszej kompatybilności i wydajności.' },
        { title: 'OpenGL', badge: 'Open Source', url: 'https://www.opengl.org', description: 'Standard API dla grafiki 2D i 3D używany przez wiele aplikacji i systemów.' },
        { title: 'Vulkan', badge: 'Open Source', url: 'https://www.khronos.org/vulkan/', description: 'Nowoczesny niskopoziomowy interfejs graficzny do wydajnych wydruków i renderowania.' },
        { title: 'libva', badge: 'Open Source', url: 'https://github.com/intel/libva', description: 'Biblioteka VA API dla przyspieszenia dekodowania i renderowania multimediów.' },
        { title: 'drm-utils', badge: 'Open Source', url: 'https://dri.freedesktop.org', description: 'Narzędzia diagnostyczne dla urządzeń graficznych w systemach Linux.' },
        { title: 'udisks2', badge: 'Open Source', url: 'https://github.com/storaged/udisks', description: 'Obsługa montowania i zarządzania urządzeniami blokowymi w systemach z Linuxem.' },
        { title: 'BlueZ', badge: 'Open Source', url: 'https://www.bluez.org', description: 'Sterowniki i usługi Bluetooth dla Linuxa i urządzeń mobilnych.' }
    ],
    programming: [
        { title: 'Visual Studio Code', badge: 'Open Source', url: 'https://code.visualstudio.com', description: 'Najpopularniejszy edytor kodu z rozbudowanymi wtyczkami i integracją z Git.' },
        { title: 'Git', badge: 'Open Source', url: 'https://git-scm.com', description: 'System kontroli wersji do pracy zespołowej i zarządzania historią projektu.' },
        { title: 'GitHub', badge: 'Darmowa', url: 'https://github.com', description: 'Platforma do hostingu, współpracy i zarządzania repozytoriami Git.' },
        { title: 'GitLab', badge: 'Open Source', url: 'https://about.gitlab.com', description: 'Repozytoria, CI/CD i narzędzia DevOps w jednej platformie.' },
        { title: 'Docker', badge: 'Open Source', url: 'https://www.docker.com', description: 'Konteneryzacja aplikacji z łatwym wdrażaniem w różnych środowiskach.' },
        { title: 'Kubernetes', badge: 'Open Source', url: 'https://kubernetes.io', description: 'Orkiestracja kontenerów do skalowania i automatyzacji infrastruktury.' },
        { title: 'Terraform', badge: 'Open Source', url: 'https://www.terraform.io', description: 'Definiowanie infrastruktury jako kodu i automatyzacja wdrożeń.' },
        { title: 'Python', badge: 'Open Source', url: 'https://www.python.org', description: 'Uniwersalny język programowania używany w AI, web i automatyzacji.' },
        { title: 'Node.js', badge: 'Open Source', url: 'https://nodejs.org', description: 'Środowisko JavaScript do backendu, narzędzi i aplikacji serwerowych.' },
        { title: 'Rust', badge: 'Open Source', url: 'https://www.rust-lang.org', description: 'Język systemowy z bezpieczeństwem pamięci i wydajnością wysokiej klasy.' },
        { title: 'Go', badge: 'Open Source', url: 'https://go.dev', description: 'Język rozwijany przez Google z prostym modelem współbieżności.' },
        { title: 'Deno', badge: 'Open Source', url: 'https://deno.com', description: 'Nowoczesne środowisko JavaScript i TypeScript z bezpiecznym modelem uruchamiania.' },
        { title: 'Vim', badge: 'Open Source', url: 'https://www.vim.org', description: 'Potężny edytor terminalowy z ogromną liczbą skrótów i konfiguracji.' },
        { title: 'Neovim', badge: 'Open Source', url: 'https://neovim.io', description: 'Rozszerzona wersja Vim z nowoczesnym interfejsem i konfigurowalnością.' },
        { title: 'Emacs', badge: 'Open Source', url: 'https://www.gnu.org/software/emacs/', description: 'Wszechstronny edytor z pełnym środowiskiem pracy i własnymi dodatkami.' },
        { title: 'JetBrains', badge: 'Open Source', url: 'https://www.jetbrains.com', description: 'Zestaw IDE do Javy, Python, web i wielu języków programowania.' },
        { title: 'PostgreSQL', badge: 'Open Source', url: 'https://www.postgresql.org', description: 'Zaawansowana baza danych relacyjna do nowoczesnych aplikacji i analityki.' },
        { title: 'MySQL', badge: 'Open Source', url: 'https://www.mysql.com', description: 'Popularna baza danych relacyjna używana w aplikacjach webowych.' },
        { title: 'SQLite', badge: 'Open Source', url: 'https://sqlite.org', description: 'Lekka baza danych w jednym pliku stosowana w małych i średnich aplikacjach.' },
        { title: 'Elm', badge: 'Open Source', url: 'https://elm-lang.org', description: 'Język frontendowy z bezpiecznym systemem typów i czystym ekosystemem.' }
    ],
    games: [
        { title: 'Lichess', badge: 'Open Source', url: 'https://lichess.org', description: 'Otwartoźródłowa platforma szachowa z wieloma trybami rozgrywek online.' },
        { title: 'FreeCiv', badge: 'Open Source', url: 'https://freeciv.org', description: 'Strategia 4X z klasycznym stylem gry i pełną swobodą rozwoju imperium.' },
        { title: 'OpenTTD', badge: 'Open Source', url: 'https://www.openttd.org', description: 'Mistrzowska strategia transportowa wzorowana na klasycznym Transport Tycoon.' },
        { title: 'OpenRA', badge: 'Open Source', url: 'https://www.openra.net', description: 'Wersja open source gier z serii Command & Conquer w nowoczesnym wydaniu.' },
        { title: 'SuperTuxKart', badge: 'Open Source', url: 'https://supertuxkart.net', description: 'Wyścigi z kolorową grafiką i dużą liczbą postaci i torów.' },
        { title: '0 A.D.', badge: 'Open Source', url: 'https://play0ad.com', description: 'Strategia historyczna w realnym czasie osadzona w epoce antycznej.' },
        { title: 'Minetest', badge: 'Open Source', url: 'https://www.minetest.net', description: 'Kreatywna gra w stylu Minecraft z mocnym naciskiem na budowę i eksperymenty.' },
        { title: 'Wesnoth', badge: 'Open Source', url: 'https://www.wesnoth.org', description: 'Taktyczna gra strategiczna z rozbudowaną kampanią i wieloma scenariuszami.' },
        { title: 'Pygame', badge: 'Open Source', url: 'https://www.pygame.org', description: 'Biblioteka do tworzenia prostych gier i aplikacji multimedialnych w Pythonie.' },
        { title: 'RimWorld', badge: 'Darmowa', url: 'https://rimworldgame.com', description: 'Survivalowa gra o budowaniu osady i zarządzaniu postaciami w trudnym świecie.' },
        { title: 'Steam Community', badge: 'Społeczność', url: 'https://steamcommunity.com', description: 'Duża społeczność graczy, recenzji i pomysłów na nowe gry.' },
        { title: 'itch.io', badge: 'Darmowa', url: 'https://itch.io', description: 'Sklep i platforma dla niezależnych gier i projektów tworzonych przez społeczność.' },
        { title: 'Game Jolt', badge: 'Darmowa', url: 'https://gamejolt.com', description: 'Platforma dla twórców gier i społeczności fanów niezależnych projektów.' },
        { title: 'Tetris', badge: 'Klasyka', url: 'https://tetris.com', description: 'Klasyczna gra logiczna, która nadal zachowuje popularność na wielu platformach.' },
        { title: 'Poki', badge: 'Darmowa', url: 'https://poki.com', description: 'Serwis z prostymi grami przeglądarkowymi i dużym katalogiem tytułów.' },
        { title: 'CrazyGames', badge: 'Darmowa', url: 'https://www.crazygames.com', description: 'Platforma z wieloma grami HTML5 i prostym dostępem w przeglądarce.' },
        { title: 'Newgrounds', badge: 'Darmowa', url: 'https://www.newgrounds.com', description: 'Społeczność twórców gier, animacji i fanowskiej treści internetowej.' },
        { title: 'Armory', badge: 'Open Source', url: 'https://www.armory3d.org', description: 'Silnik i edytor 3D do tworzenia gier i scen z naciskiem na prostotę pracy.' },
        { title: 'Godot', badge: 'Open Source', url: 'https://godotengine.org', description: 'Silnik gier z prostym językiem skryptowym i szerokimi możliwościami produkcji.' },
        { title: 'Steam Free to Play', badge: 'Darmowe gry PC', url: 'https://store.steampowered.com/genre/Free%20to%20Play/', description: 'Oficjalny katalog gier free-to-play na PC w sklepie Steam.' },
        { title: 'Epic Games Store Free Games', badge: 'Darmowe gry PC', url: 'https://store.epicgames.com/en-US/free-games', description: 'Oficjalny katalog darmowych gier Epic Games Store, w tym gier free-to-play i czasowych rozdawnictw.' },
        { title: 'GOG Free Games', badge: 'Darmowe gry PC', url: 'https://www.gog.com/en/games?priceRange=0,0', description: 'Katalog gier PC GOG z filtrem ceny 0; obejmuje także dema i dodatki.' },
        { title: 'GamePix', badge: 'Gry przeglądarkowe', url: 'https://www.gamepix.com/', description: 'Darmowe gry HTML5 uruchamiane w przeglądarce na komputerach i urządzeniach mobilnych.' },
        { title: 'Armor Games', badge: 'Gry przeglądarkowe', url: 'https://armorgames.com/', description: 'Katalog gier przeglądarkowych, w tym strategii, RPG, puzzli i gier akcji.' },
        { title: 'Y8', badge: 'Gry przeglądarkowe', url: 'https://www.y8.com/', description: 'Duży katalog bezpłatnych gier HTML5 i WebGL, w tym trybów wieloosobowych.' },
        { title: 'Lagged', badge: 'Gry przeglądarkowe', url: 'https://lagged.com/', description: 'Darmowe gry online do uruchomienia bezpośrednio w przeglądarce.' },
        { title: 'Coolmath Games', badge: 'Gry przeglądarkowe', url: 'https://www.coolmathgames.com/', description: 'Kuratorowany katalog gier logicznych, zręcznościowych i edukacyjnych w przeglądarce.' },
        { title: 'Addicting Games', badge: 'Gry przeglądarkowe', url: 'https://www.addictinggames.com/', description: 'Katalog bezpłatnych gier online, m.in. logicznych, akcji i strategicznych.' }
    ],
    linux: [
        { title: 'Ubuntu', badge: 'Open Source', url: 'https://ubuntu.com', description: 'Popularna dystrybucja Linuxa z dużą społecznością i prostym systemem instalacji.' },
        { title: 'Linux Mint', badge: 'Open Source', url: 'https://linuxmint.com', description: 'Dystrybucja przyjazna dla nowych użytkowników, z wygodnym desktopem i łatwością pracy.' },
        { title: 'Debian', badge: 'Open Source', url: 'https://www.debian.org', description: 'Stabilna, bezpieczna i bardzo popularna dystrybucja z wieloma pakietami.' },
        { title: 'Fedora', badge: 'Open Source', url: 'https://fedoraproject.org', description: 'Nowoczesna dystrybucja z szybkim tempem rozwoju i dobrym wspieraniem sprzętu.' },
        { title: 'Arch Linux', badge: 'Open Source', url: 'https://archlinux.org', description: 'Dystrybucja rolling release do zaawansowanych użytkowników i systemów DIY.' },
        { title: 'Manjaro', badge: 'Open Source', url: 'https://manjaro.org', description: 'Prostsza wersja Arch Linux z gotowymi konfiguracjami i łatwą instalacją.' },
        { title: 'openSUSE', badge: 'Open Source', url: 'https://www.opensuse.org', description: 'Dystrybucja z dobrym zarządzaniem pakietami i możliwością pracy seryjnej.' },
        { title: 'Kali Linux', badge: 'Open Source', url: 'https://www.kali.org', description: 'System do testów bezpieczeństwa, pentestów i analizy infrastruktury sieciowej.' },
        { title: 'Rocky Linux', badge: 'Open Source', url: 'https://rockylinux.org', description: 'Stabilna dystrybucja zgodna z Red Hat Enterprise Linux i ceniona w serwerach.' },
        { title: 'AlmaLinux', badge: 'Open Source', url: 'https://almalinux.org', description: 'Alternatywa dla CentOS i systemów produkcyjnych z długim wsparciem.' },
        { title: 'Pop!_OS', badge: 'Open Source', url: 'https://pop.system76.com', description: 'Dystrybucja z naciskiem na wydajność pracy, gry i wsparcie dla nowych laptopów.' },
        { title: 'elementary OS', badge: 'Open Source', url: 'https://elementary.io', description: 'Estetyczny system operacyjny z prostym i eleganckim środowiskiem desktopowym.' },
        { title: 'NixOS', badge: 'Open Source', url: 'https://nixos.org', description: 'Dystrybucja z deklaratywną konfiguracją i powtarzalnym środowiskiem systemowym.' },
        { title: 'Alpine Linux', badge: 'Open Source', url: 'https://alpinelinux.org', description: 'Lekka dystrybucja do kontenerów, serwerów i urządzeń wbudowanych.' },
        { title: 'Tails', badge: 'Open Source', url: 'https://tails.net', description: 'System operacyjny z naciskiem na prywatność, anonimowość i bezpieczeństwo.' },
        { title: 'Zorin OS', badge: 'Open Source', url: 'https://zorin.com/os/', description: 'System operacyjny opracowany z myślą o użytkownikach migrujących z Windows.' },
        { title: 'Solus', badge: 'Open Source', url: 'https://getsol.us', description: 'Nowoczesna dystrybucja z prostym środowiskiem i dobrym doświadczeniem użytkownika.' },
        { title: 'EndeavourOS', badge: 'Open Source', url: 'https://endeavouros.com', description: 'Dystrybucja oparta na Arch z prostszą konfiguracją i wygodnym startem.' },
        { title: 'Fedora Silverblue', badge: 'Open Source', url: 'https://fedoraproject.org/atomic-desktops/', description: 'Wersja Fedora z innowacyjnym modelem aktualizacji i pracy z kontenerami.' },
        { title: 'Slackware', badge: 'Open Source', url: 'https://www.slackware.com', description: 'Klasyczna dystrybucja Linuxa ceniona za prostotę i stabilność systemu.' }
    ],
    promotions: [
        { title: 'Pepper', badge: 'Promocje', url: 'https://www.pepper.pl', description: 'Polski serwis z promocjami, okazjami i rabatami na elektronikę i lifestyle.' },
        { title: 'Slickdeals', badge: 'Promocje', url: 'https://slickdeals.net', description: 'Amerykańska społeczność z rabatami, okazjami i alertami cenowymi.' },
        { title: 'Humble Bundle', badge: 'Promocje', url: 'https://www.humblebundle.com', description: 'Pakiety gier, książek i narzędzi w atrakcyjnych cenach i promocjach.' },
        { title: 'Fanatical', badge: 'Promocje', url: 'https://www.fanatical.com', description: 'Sklepy z kluczami do gier, aplikacji i automatycznymi okazjami.' },
        { title: 'Epic Free Games', badge: 'Promocje', url: 'https://store.epicgames.com/free-games', description: 'Codziennie i cotygodniowo darmowe gry w popularnym sklepie Epic Games.' },
        { title: 'GOG Free', badge: 'Promocje', url: 'https://www.gog.com', description: 'Darmowe gry i okazje w sklepie z tytułami bez systemów DRM.' },
        { title: 'itch.io Free', badge: 'Promocje', url: 'https://itch.io/games/free', description: 'Darmowe i promowane gry niezależne z całego świata.' },
        { title: 'HotUKDeals', badge: 'Promocje', url: 'https://www.hotukdeals.com', description: 'Brytyjska baza okazji i rabatów w różnych kategoriach produktów.' },
        { title: 'Promocodius', badge: 'Promocje', url: 'https://promocodius.com', description: 'Kody rabatowe i promocje dla e-commerce i sklepów online.' },
        { title: 'Dealnews', badge: 'Promocje', url: 'https://www.dealnews.com', description: 'Aktualne okazje i analizy cen produktów elektronicznych i technologii.' },
        { title: 'TechBargains', badge: 'Promocje', url: 'https://www.techbargains.com', description: 'Rabaty na elektronikę, peryferia i sprzęt komputerowy.' },
        { title: 'StackSocial', badge: 'Promocje', url: 'https://stacksocial.com', description: 'Okazje na kursy, narzędzia i usługi cyfrowe na różnych platformach.' },
        { title: 'DealMoon', badge: 'Promocje', url: 'https://www.dealmoon.com', description: 'Katalog okazji i promocji z naciskiem na zakupy w USA i Europie.' },
        { title: 'Vouchers', badge: 'Promocje', url: 'https://www.vouchercloud.com', description: 'Kody i kupony z wyprzedaży i promocji światowych marek.' },
        { title: 'G2A Deals', badge: 'Promocje', url: 'https://www.g2a.com', description: 'Promocje na klucze do gier i dostęp do produktów cyfrowych.' },
        { title: 'The Krazy Coupon Lady', badge: 'Promocje', url: 'https://thekrazycouponlady.com', description: 'Porady i okazje na zakupy z największych sklepów internetowych.' },
        { title: 'Walmart Deals', badge: 'Promocje', url: 'https://www.walmart.com', description: 'Oferty i rabaty na artykuły codziennego użytku i elektronikę.' },
        { title: 'Best Buy Deals', badge: 'Promocje', url: 'https://www.bestbuy.com/site/deals', description: 'Oferty na sprzęt komputerowy i elektronarzędzia w jednym z największych sklepów.' },
        { title: 'Newegg Deals', badge: 'Promocje', url: 'https://www.newegg.com/deals', description: 'Promocje na elementy komputerowe i sprzęt graficzny.' }
    ],
    sell: [
        { title: 'OLX', badge: 'Sprzedam', url: 'https://www.olx.pl', description: 'Ogłoszenia lokalne o sprzęcie, elektronice, meblach i rzeczach codziennych.' },
        { title: 'Allegro Lokalnie', badge: 'Sprzedam', url: 'https://allegrolokalnie.pl', description: 'Lokalna sprzedaż przedmiotów z wykorzystaniem platformy Allegro.' },
        { title: 'Vinted', badge: 'Sprzedam', url: 'https://www.vinted.pl', description: 'Sprzedaż ubrań i dodatków w prostym i szybkim modelu marketplace.' },
        { title: 'Facebook Marketplace', badge: 'Sprzedam', url: 'https://www.facebook.com/marketplace', description: 'Lokalne ogłoszenia sprzedaży między osobami z całego regionu.' },
        { title: 'Gumtree', badge: 'Sprzedam', url: 'https://www.gumtree.com', description: 'Platforma sprzedaży lokalnej do mebli, elektroniki i pojazdów.' },
        { title: 'eBay', badge: 'Sprzedam', url: 'https://www.ebay.com', description: 'Globalny rynek aukcyjny z obszerną bazą produktów i kategorii.' },
        { title: 'Etsy', badge: 'Sprzedam', url: 'https://www.etsy.com', description: 'Sprzedaż rękodzieła, unikatowych projektów i dodatków domowych.' },
        { title: 'Wallapop', badge: 'Sprzedam', url: 'https://wallapop.com', description: 'Hiszpańska platforma do sprzedaży używanych przedmiotów z lokalnym zasięgiem.' },
        { title: 'Kleinanzeigen', badge: 'Sprzedam', url: 'https://www.kleinanzeigen.de', description: 'Niemieckie ogłoszenia sprzedaży z dużą różnorodnością kategorii.' },
        { title: '2dehands', badge: 'Sprzedam', url: 'https://www.2dehands.be', description: 'Platforma sprzedaży używanych rzeczy i sprzętu w Belgii i Holandii.' },
        { title: 'BackMarket', badge: 'Sprzedam', url: 'https://www.backmarket.com', description: 'Rynek odsprzedanych urządzeń elektronicznych i zdemontowanych komponentów.' },
        { title: 'Letgo', badge: 'Sprzedam', url: 'https://www.letgo.com', description: 'Aplikacja do sprzedaży lokalnej z prostym mechanizmem ogłoszeń.' },
        { title: 'Shpock', badge: 'Sprzedam', url: 'https://www.shpock.com', description: 'Marketplace dla sprzedaży rzeczy osobistych i sprzętu używanego.' },
        { title: 'Depop', badge: 'Sprzedam', url: 'https://www.depop.com', description: 'Sprzedaż mody i style życia z naciskiem na kreatywne, vintage i unikatowe elementy.' },
        { title: 'VarageSale', badge: 'Sprzedam', url: 'https://www.varagesale.com', description: 'Lokalna sprzedaż rzeczy z domu, mebli i wyposażenia do codzienności.' },
        { title: 'OfferUp', badge: 'Sprzedam', url: 'https://offerup.com', description: 'Kupno i sprzedaż rzeczy z otoczenia lokalnego w prostym formacie ogłoszeń.' },
        { title: 'Carousell', badge: 'Sprzedam', url: 'https://www.carousell.com', description: 'Marketplace z aktywną sprzedażą modowych i elektronicznych przedmiotów.' },
        { title: 'Shpock Polska', badge: 'Sprzedam', url: 'https://www.shpock.com/pl', description: 'Ogłoszenia sprzedaży z naciskiem na lokalny handel i codzienne zakupy.' },
        { title: 'Mikrocentrum', badge: 'Sprzedam', url: 'https://www.mikrocentrum.pl', description: 'Platforma skupiająca ogłoszenia sprzedaży sprzętu i elektroniki użytkowej.' }
    ],
    buy: [
        { title: 'Ceneo', badge: 'Kupię', url: 'https://www.ceneo.pl', description: 'Porównywarka cen produktów i ofert sklepów w Polsce.' },
        { title: 'Skąpiec', badge: 'Kupię', url: 'https://www.skapiec.pl', description: 'Porównywanie cen w jednym miejscu i szybkie sprawdzenie najlepszej oferty.' },
        { title: 'Google Shopping', badge: 'Kupię', url: 'https://shopping.google.com', description: 'Wyszukiwarka produktów z porównaniem cen i sklepów online.' },
        { title: 'Amazon', badge: 'Kupię', url: 'https://www.amazon.pl', description: 'Wielka platforma zakupowa z ogromną liczbą produktów i ofert.' },
        { title: 'AliExpress', badge: 'Kupię', url: 'https://pl.aliexpress.com', description: 'Sklep z produktami z Azji, w tym elektroniką, tekstyliami i gadżetami.' },
        { title: 'Allegro', badge: 'Kupię', url: 'https://allegro.pl', description: 'Największy polski marketplace z bogatym katalogiem produktów.' },
        { title: 'eBay Polska', badge: 'Kupię', url: 'https://www.ebay.pl', description: 'Sklep aukcyjny z ofertami lokalnymi i międzynarodowymi.' },
        { title: 'Temu', badge: 'Kupię', url: 'https://www.temu.com', description: 'Platforma z konkurencyjnymi cenami na szeroką gamę produktów.' },
        { title: 'Freecycle', badge: 'Kupię', url: 'https://www.freecycle.org', description: 'Darmowa wymiana i oddawanie używanych rzeczy w lokalnych społecznościach.' },
        { title: 'TrashNothing', badge: 'Kupię', url: 'https://trashnothing.com', description: 'Oddawanie i odbieranie używanych, darmowych przedmiotów od sąsiadów.' },
        { title: 'Shopzilla', badge: 'Kupię', url: 'https://www.shopzilla.com', description: 'Porównywanie cen i promocji w sklepach internetowych.' },
        { title: 'PriceRunner', badge: 'Kupię', url: 'https://www.pricerunner.com', description: 'Porównywanie cen produktów i analizowanie promocji na świecie.' },
        { title: 'Nextag', badge: 'Kupię', url: 'https://www.nextag.com', description: 'Platforma zakupowa z porównywaniem cen z wielu sklepów internetowych.' },
        { title: 'Walmart', badge: 'Kupię', url: 'https://www.walmart.com', description: 'Duży e-commerce z szerokim zakresem produktów i cen.' },
        { title: 'Best Buy', badge: 'Kupię', url: 'https://www.bestbuy.com', description: 'Elektronika i sprzęt AGD w atrakcyjnych cenach promocyjnych.' },
        { title: 'Newegg', badge: 'Kupię', url: 'https://www.newegg.com', description: 'Elektronika komputerowa i komponenty pod kątem budowy i ulepszeń.' },
        { title: 'Boulanger', badge: 'Kupię', url: 'https://www.boulanger.com', description: 'Sprzedaż sprzętu elektronicznego i komputerowego w Europie.' },
        { title: 'MediaMarkt', badge: 'Kupię', url: 'https://www.mediamarkt.pl', description: 'Sklep z elektroniką, komputerami i urządzeniami domowymi.' },
        { title: 'X-kom', badge: 'Kupię', url: 'https://www.x-kom.pl', description: 'Popularny polski sklep elektroniki i sprzętu komputerowego.' }
    ],
    social: [
        { title: 'Reddit', badge: 'Portal', url: 'https://www.reddit.com', description: 'Społeczność tematów i dyskusji z tysiącami subreddits o technologii i życiu codziennym.' },
        { title: 'Mastodon', badge: 'Portal', url: 'https://joinmastodon.org', description: 'Zdecentralizowana sieć społecznościowa z naciskiem na prywatność i własne instancje.' },
        { title: 'Bluesky', badge: 'Portal', url: 'https://bsky.app', description: 'Nowoczesna sieć społecznościowa bazująca na protokole AT.' },
        { title: 'Discord', badge: 'Portal', url: 'https://discord.com', description: 'Serwery tekstowe, głosowe i wspólne fory dla społeczności i projektów.' },
        { title: 'Telegram', badge: 'Portal', url: 'https://telegram.org', description: 'Szybki komunikator z grupami, kanałami i wieloma tematami.' },
        { title: 'Signal', badge: 'Portal', url: 'https://signal.org', description: 'Prywatny komunikator z end-to-end encryption i bezpiecznym przesyłaniem wiadomości.' },
        { title: 'Element', badge: 'Portal', url: 'https://element.io', description: 'Klient Matrix do komunikacji w chmurze i na własnych serwerach.' },
        { title: 'Lemmy', badge: 'Portal', url: 'https://join-lemmy.org', description: 'Alternatywa dla Reddita z decentralizacją i niezależnymi społecznościami.' },
        { title: 'Hacker News', badge: 'Portal', url: 'https://news.ycombinator.com', description: 'Społeczność technologiczna i startupowa z dyskusjami o produktach i kodzie.' },
        { title: 'Wykop', badge: 'Portal', url: 'https://wykop.pl', description: 'Polski serwis społecznościowy z dyskusjami, newsami i tematami lokalnymi.' },
        { title: 'Quora', badge: 'Portal', url: 'https://www.quora.com', description: 'Pytania i odpowiedzi z całego świata tematycznego i eksperckiego.' },
        { title: 'Medium', badge: 'Portal', url: 'https://medium.com', description: 'Platforma publikacji tekstów i artykułów z obszaru technologii i życia.' },
        { title: 'Substack', badge: 'Portal', url: 'https://substack.com', description: 'Publikacja newsletterów i prywatnych magazynów na wybrane tematy.' },
        { title: 'Tumblr', badge: 'Portal', url: 'https://www.tumblr.com', description: 'Platforma blogowa i społecznościowa z różnorodną treścią multimedialną.' },
        { title: 'Diaspora', badge: 'Portal', url: 'https://diasporafoundation.org', description: 'Decentralizowana sieć społecznościowa z naciskiem na prywatność i niezależność.' },
        { title: 'Minds', badge: 'Portal', url: 'https://www.minds.com', description: 'Społeczność internetowa dla użytkowników ceniących prywatność i wolność wyrazu.' },
        { title: 'MeWe', badge: 'Portal', url: 'https://mewe.com', description: 'Społeczność online z prywatnością, zdjęciami i wydarzeniami grupowymi.' },
        { title: 'Steemit', badge: 'Portal', url: 'https://steemit.com', description: 'Platforma bazująca na blockchainie i treściach społecznościowych.' },
        { title: 'Tildes', badge: 'Portal', url: 'https://tildes.net', description: 'Społeczność internetowa wzorowana na Redditze z prostą moderacją.' }
    ],
    wallpapers: [
        { title: 'Unsplash', badge: 'Tapety', url: 'https://unsplash.com', description: 'Darmowe zdjęcia i tła w wysokiej rozdzielczości do każdego rodzaju ekranu.' },
        { title: 'Pexels', badge: 'Tapety', url: 'https://www.pexels.com', description: 'Duża biblioteka darmowych fotografii i zdjęć w jakości stock.' },
        { title: 'Pixabay', badge: 'Tapety', url: 'https://pixabay.com', description: 'Wielka kolekcja obrazów, ilustracji i tapet do użytku osobistego.' },
        { title: 'Wallhaven', badge: 'Tapety', url: 'https://wallhaven.cc', description: 'Repozytorium tapet w różnych motywach i stylach estetycznych.' },
        { title: 'NASA Image Library', badge: 'Tapety', url: 'https://images.nasa.gov', description: 'Kosmiczne zdjęcia i grafiki NASA do tła i inspiracji wizualnej.' },
        { title: 'Wikimedia Commons', badge: 'Tapety', url: 'https://commons.wikimedia.org', description: 'Repozytorium wolnych mediów z doskonałą jakością i różnorodnością tematów.' },
        { title: 'Simple Desktops', badge: 'Tapety', url: 'https://simpledesktops.com', description: 'Minimalistyczne i estetyczne tapety do komputerów i laptopów.' },
        { title: 'WallpaperFlare', badge: 'Tapety', url: 'https://www.wallpaperflare.com', description: 'Kupno, pobieranie i przeglądanie tapet w rozdzielczościach HD i 4K.' },
        { title: 'Kaboompics', badge: 'Tapety', url: 'https://kaboompics.com', description: 'Fotografie i dekoracyjne tła z ostrym i nowoczesnym stylem.' },
        { title: 'Negative Space', badge: 'Tapety', url: 'https://negativespace.co', description: 'Tapety i zdjęcia z prostym, nowoczesnym stylem i neutralną estetyką.' },
        { title: 'WallpaperCave', badge: 'Tapety', url: 'https://wallpapercave.com', description: 'Katalog tapet i motywów w różnych kolorach i stylach.' },
        { title: 'HDWallpapers', badge: 'Tapety', url: 'https://www.hdwallpapers.in', description: 'Mieszanka tapet i grafik do szerokiej gamy urządzeń i ekranów.' },
        { title: 'WallpapersCraft', badge: 'Tapety', url: 'https://wallpaperscraft.com', description: 'Bogaty katalog tapet do komputerów, smartfonów i tabletów.' },
        { title: 'Pixelstalk', badge: 'Tapety', url: 'https://pixelstalk.net', description: 'Wysokiej jakości tapety internetowe w różnych stylach i kolorach.' },
        { title: 'Desktop Nexus', badge: 'Tapety', url: 'https://desktopnexus.com', description: 'Duża baza tła i grafik do personalizacji pulpitu.' },
        { title: 'Wallpapers Wide', badge: 'Tapety', url: 'https://wallpaperswide.com', description: 'Obszerny katalog tapet z szerokimi ekranami i grafikami 4K.' },
        { title: 'The Paper Mill', badge: 'Tapety', url: 'https://www.thepapermill.net', description: 'Nowoczesne i designerskie tapety do komputerów i urządzeń mobilnych.' },
        { title: 'Wallpapercraft', badge: 'Tapety', url: 'https://wallpaperscraft.com', description: 'Wysokiej jakości tapety i grafiki do personalizacji ekranu.' },
        { title: 'WALLPAPER', badge: 'Tapety', url: 'https://wallpaperaccess.com', description: 'Repository tapet z różnymi tematami, stylami i rozdzielczościami.' }
    ],
    films: [
        { title: 'YouTube', badge: 'Wideo', url: 'https://www.youtube.com', description: 'Największa platforma do oglądania filmów, tutoriali i transmisji na żywo.' },
        { title: 'Vimeo', badge: 'Wideo', url: 'https://vimeo.com', description: 'Platforma z filmami artystycznymi, dokumentami i twórczymi materiałami wideo.' },
        { title: 'Dailymotion', badge: 'Wideo', url: 'https://www.dailymotion.com', description: 'Serwis z filmami, materiałami informacyjnymi i treściami video online.' },
        { title: 'Twitch', badge: 'Live', url: 'https://www.twitch.tv', description: 'Transmisje na żywo, e-sport, gaming i rozmowy z twórcami online.' },
        { title: 'PeerTube', badge: 'Open Source', url: 'https://joinpeertube.org', description: 'Zdecentralizowana platforma do publikacji i oglądania materiałów wideo.' },
        { title: 'TED', badge: 'Edukacja', url: 'https://www.ted.com', description: 'Wykłady i rozmowy z ekspertami w obszarze nauki, technologii i designu.' },
        { title: 'BBC iPlayer', badge: 'Seriale', url: 'https://www.bbc.co.uk/iplayer', description: 'Materiały telewizyjne, dokumenty i seriale z największej brytyjskiej stacji.' },
        { title: 'Netflix', badge: 'Streaming', url: 'https://www.netflix.com', description: 'Platforma streamingowa z serialami, filmami i dokumentami na dużą skalę.' },
        { title: 'Disney+', badge: 'Streaming', url: 'https://www.disneyplus.com', description: 'Katalog filmów, seriali i treści z franczyzy od Disneya i Marvela.' },
        { title: 'Prime Video', badge: 'Streaming', url: 'https://www.primevideo.com', description: 'Filmowe i serialowe usługi streamingowe od Amazona.' },
        { title: 'IMDb', badge: 'Baza filmów', url: 'https://www.imdb.com', description: 'Baza danych o filmach, serialach i twórcach z ocenami oraz recenzjami.' },
        { title: 'Letterboxd', badge: 'Recenzje', url: 'https://letterboxd.com', description: 'Społeczność filmowa do oceniania, zapisów i przeglądania filmów.' },
        { title: 'Mubi', badge: 'Kino', url: 'https://mubi.com', description: 'Platforma programowa skupiona na jakościowych filmach i klasyce kina.' },
        { title: 'Kanopy', badge: 'Edukacja', url: 'https://www.kanopy.com', description: 'Dostęp do filmów dokumentalnych i artystycznych z bibliotek publicznych.' },
        { title: 'FilmWeb', badge: 'Polski', url: 'https://www.filmweb.pl', description: 'Polska baza filmowa z recenzjami, ocenami i informacjami o produkcjach.' },
        { title: 'Trakt', badge: 'Śledzenie', url: 'https://trakt.tv', description: 'System do śledzenia filmów, seriali i własnych list obejrzenia.' },
        { title: 'Pluto TV', badge: 'Free TV', url: 'https://pluto.tv', description: 'Bezpieczny i darmowy serwis telewizyjny z kanałami na żywo i archiwum.' },
        { title: 'Tubi', badge: 'Free TV', url: 'https://tubitv.com', description: 'Darmowa platforma streamingowa z dużą biblioteką filmów i seriali.' },
        { title: 'Open Culture', badge: 'Darmowe', url: 'https://www.openculture.com', description: 'Repozytorium darmowych filmów, wykładów i programów edukacyjnych.' }
    ]
};

function buildAutoGeneratedFallbacks(category, count, offset = 0){
    const topics = {
        ai: 'LLM|inference|RAG|AI agents|machine learning|computer vision|speech recognition|image generation|local models|vector databases|AI evaluation|model serving',
        software: 'office suite|password manager|file manager|backup software|browser|note taking|photo editor|security software|desktop application|calendar|database client|accessibility',
        multimedia: 'video editor|media player|audio editor|podcast|streaming server|image processing|subtitle tools|music production|video encoding|photo library|screen recording|media codecs',
        knowledge: 'open textbooks|online courses|digital library|scientific papers|language learning|reference works|study tools|public domain books|educational resources|research data|knowledge base|academic publishing',
        tools: 'developer tools|API testing|JSON tools|diagram editor|privacy tools|image optimization|accessibility testing|PDF tools|text utilities|data conversion|documentation|productivity tools',
        drivers: 'Linux graphics|GPU driver|audio driver|printer driver|Wi-Fi driver|Bluetooth stack|kernel hardware support|USB devices|filesystem driver|camera support|input devices|firmware tools',
        programming: 'code editor|programming language|web framework|database|developer environment|CI CD|version control|container tools|testing framework|static analysis|API framework|build system',
        games: 'open source game|game engine|strategy game|puzzle game|simulation game|game assets|game development|multiplayer game|game launcher|modding tools|board game|game server',
        linux: 'Linux distribution|desktop environment|package manager|Linux utilities|system administration|Wayland tools|terminal emulator|Linux security|backup tools|container platform|Linux gaming|file system',
        promotions: 'open source deal tracker|price history|coupon manager|free software offers|game bundles|software discounts|price alerts|deal community|open data prices|shopping comparison|gift card deals|discount browser extension',
        sell: 'open source marketplace|classifieds platform|e-commerce software|auction platform|online shop|inventory management|seller tools|local marketplace|digital storefront|product catalog|shop management|peer to peer sales',
        buy: 'open source price comparison|shopping research|product database|price tracking|consumer guides|open data catalog|ethical shopping|product reviews|deal finder|specification comparison|second hand marketplace|shopping list',
        social: 'federated social network|open source forum|chat platform|community software|ActivityPub|Matrix client|discussion platform|self hosted social|collaboration tools|blog platform|decentralized network|moderation tools',
        wallpapers: 'creative commons wallpapers|open image library|public domain photography|desktop backgrounds|generative art|nature photography|space images|abstract backgrounds|open licensed art|image archive|illustration library|wallpaper manager',
        films: 'open video platform|public domain films|documentary archive|video catalog|film database|independent cinema|video hosting|open media archive|movie recommendations|video streaming software|film education|creative commons video'
    };
    const intents = ['projekty', 'aplikacje', 'biblioteki', 'narzędzia', 'repozytoria', 'modele', 'dokumentacja', 'przykłady'];
    const terms = (topics[category] || `${category}|open source ${category}`).split('|');
    return Array.from({ length: count }, (_, index) => {
        const absoluteIndex = offset + index;
        const topic = terms[Math.floor(absoluteIndex / intents.length) % terms.length];
        const intent = intents[absoluteIndex % intents.length];
        const query = `${topic} ${intent}`;
        return {
            title: `GitHub: ${topic} (${intent})`,
            badge: 'Repozytoria GitHub',
            url: `https://github.com/search?q=${encodeURIComponent(query)}&type=repositories`,
            description: `Wyszukiwanie publicznych repozytoriów GitHub związanych z tematem „${topic}”. To katalog odkrywania projektów, a nie pojedyncza aplikacja.`,
            autoGenerated: 'github-topic-search',
            tags: [category, 'GitHub', 'open source']
        };
    });
}

function normalizeResourceUrl(value){
    try {
        const url = new URL(String(value || ''));
        if(!['http:', 'https:'].includes(url.protocol)) return '';
        url.hostname = url.hostname.toLowerCase().replace(/^www\./, '');
        url.hash = '';
        for (const key of [...url.searchParams.keys()]) {
            if(key.toLowerCase().startsWith('utm_') || ['fbclid','gclid','ref','ref_src'].includes(key.toLowerCase())) url.searchParams.delete(key);
        }
        url.searchParams.sort();
        const path = url.pathname.replace(/\/+$/, '');
        return `${url.protocol}//${url.host}${path}${url.search}`.toLowerCase();
    } catch(e){ return ''; }
}

function resourceKey(item){
    return normalizeResourceUrl(item && item.url) || `${String(item && item.title || '').trim().toLowerCase()}::${String(item && item.url || '').trim().toLowerCase()}`;
}

function isGithubResource(item){
    try {
        const hostname = new URL(String(item && item.url || '')).hostname.toLowerCase();
        return hostname === 'github.com' || hostname.endsWith('.github.com') || hostname === 'github.io' || hostname.endsWith('.github.io');
    } catch(e){ return false; }
}

function moveGithubResourcesToKnowledge(data, additionalKnowledge = []){
    if(!data || typeof data !== 'object') return false;
    const knowledge = Array.isArray(data.knowledge) ? data.knowledge : [];
    const seen = new Set([...additionalKnowledge, ...knowledge].map(resourceKey));
    let changed = false;
    for (const category of Object.keys(data)) {
        if(category === 'knowledge' || !Array.isArray(data[category])) continue;
        const retained = [];
        for (const item of data[category]) {
            if(!isGithubResource(item)){
                retained.push(item);
                continue;
            }
            changed = true;
            const key = resourceKey(item);
            if(seen.has(key)) continue;
            const tags = Array.isArray(item.tags) ? item.tags : [];
            knowledge.push({ ...item, tags:[...new Set([...tags, `Przeniesiono z: ${category}`])] });
            seen.add(key);
        }
        data[category] = retained;
    }
    data.knowledge = knowledge;
    return changed;
}

function gameTitleKey(value){
    return String(value || '').normalize('NFKC').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

const SOFTWARE_CATALOG_CACHE_KEY = 'omnihub_software_catalog_v1';
const SOFTWARE_TARGET_COUNT = 2401;
const GAMES_TARGET_COUNT = 600;
const SOFTWARE_CATALOG_URL = 'https://formulae.brew.sh/api/formula.json';
const SOFTWARE_CATALOG_TTL = 30 * 24 * 60 * 60 * 1000;
const SOFTWARE_CATALOG_AREAS = [
    ['Muzyka i audio', /audio|music|midi|synth|sound|radio|podcast|mp3|flac|speex/],
    ['Biuro i dokumenty', /office|document|spreadsheet|word processor|presentation|pdf|ebook|epub|markdown|text editor/],
    ['Multimedia i wideo', /video|multimedia|stream|subtitle|transcod|codec|screen recording|media player/],
    ['Fotografia i grafika', /image|photo|graphic|paint|illustrat|vector|drawing|raw file|camera|color management/],
    ['Projektowanie i CAD', /cad|3d model|modeler|mesh|scad|pcb|schematic|design tool|rendering/],
    ['Emulatory i gry', /emulator|emulation|game launcher|game engine|video game/],
    ['Poczta i komunikacja', /email|e-mail|mail client|smtp|imap|chat|messaging|irc|xmpp|matrix|voip/],
    ['Przeglądarki i WWW', /web browser|browser|web server|website|static site|html|http server|content management/],
    ['Archiwizacja i kompresja', /archiv|compress|compression|zip file|tarball|unzip|7-zip/],
    ['Bezpieczeństwo i szyfrowanie', /encrypt|cryptograph|password manager|security|firewall|vpn|certificate authority|antivirus/],
    ['Transfer i synchronizacja', /file transfer|file sharing|synchroni[sz]|ftp client|sftp|torrent|peer-to-peer|p2p/],
    ['Konwersja plików', /convert|converter|conversion|format conversion|document conversion/],
    ['Terminal i narzędzia systemowe', /terminal|command.?line|shell utility|system monitor|diagnostic|disk usage|benchmark|maintenance|optimization/],
    ['Wirtualizacja i kontenery', /virtual machine|virtualization|hypervisor|container runtime|container management/],
    ['Kopie zapasowe', /backup|snapshot|restore|data recovery/],
    ['Programowanie i biblioteki', /compiler|programming language|development tool|debugger|source code|library|framework|package manager|database/]
];
const OPEN_SOURCE_LICENSE = /^(?:0BSD|AFL-[0-9.]+|AGPL-[0-9.]+(?:-or-later|-only)?|Apache-2\.0|Artistic-2\.0|BSD-[0-9]-Clause(?:-FreeBSD|-Attribution)?|BSL-1\.0|CC0-1\.0|CDDL-[0-9.]+|EPL-[0-9.]+|EUPL-[0-9.]+|GPL-[0-9.]+(?:-or-later|-only)?|ISC|LGPL-[0-9.]+(?:-or-later|-only)?|MIT|MPL-[0-9.]+|OFL-[0-9.]+|OSL-[0-9.]+|PostgreSQL|Python-2\.0|Unlicense|WTFPL|Zlib)$/i;

function isOpenSourceLicense(value){
    const parts = String(value || '').split(/\s+(?:OR|AND)\s+|\/|,/i).map(part => part.trim().replace(/^\(+|\)+$/g, '').split(/\s+WITH\s+/i)[0]).filter(Boolean);
    return parts.length > 0 && parts.every(part => OPEN_SOURCE_LICENSE.test(part));
}

function readSoftwareCatalogCache(){
    try {
        const cache = JSON.parse(localStorage.getItem(SOFTWARE_CATALOG_CACHE_KEY) || 'null');
        return cache && Array.isArray(cache.items) ? cache : null;
    } catch(e){ return null; }
}

function softwareAreaFor(formula){
    const text = `${formula.name || ''} ${formula.desc || ''}`.toLowerCase();
    const area = SOFTWARE_CATALOG_AREAS.find(([, pattern]) => pattern.test(text));
    return area ? area[0] : 'Narzędzia i biblioteki';
}

function buildSoftwareCatalog(formulae, currentItems, targetCount){
    const seen = new Set((currentItems || []).map(resourceKey));
    const grouped = new Map([...SOFTWARE_CATALOG_AREAS.map(([name]) => [name, []]), ['Narzędzia i biblioteki', []]]);
    const seenHomepages = new Set();
    for (const formula of formulae) {
        if(!formula || !formula.name || !formula.desc || !formula.homepage || !isOpenSourceLicense(formula.license)) continue;
        const homepage = normalizeResourceUrl(formula.homepage);
        if(!homepage || seenHomepages.has(homepage) || seen.has(homepage)) continue;
        seenHomepages.add(homepage);
        const area = softwareAreaFor(formula);
        grouped.get(area).push({
            title: formula.name,
            badge: 'Open Source',
            url: formula.homepage,
            description: `${formula.desc} Licencja: ${formula.license}.`,
            tags: [area, formula.license, 'Homebrew'],
            autoGenerated: 'homebrew-catalog',
            custom: false,
            createdAt: 0,
            notes: '',
            thumbnail: '',
            isPrivate: false
        });
    }
    const selected = [];
    const indexes = new Map([...grouped.keys()].map(area => [area, 0]));
    let remaining = true;
    while (selected.length < targetCount && remaining) {
        remaining = false;
        for (const [area, items] of grouped) {
            if(selected.length >= targetCount) break;
            const index = indexes.get(area);
            if(index >= items.length) continue;
            selected.push(items[index]);
            indexes.set(area, index + 1);
            remaining = true;
        }
    }
    return selected;
}

async function loadSoftwareCatalog(){
    if(!Array.isArray(allData.software) || allData.software.length >= SOFTWARE_TARGET_COUNT) return;
    const cached = readSoftwareCatalogCache();
    try {
        const response = await fetch(SOFTWARE_CATALOG_URL, { cache: 'force-cache' });
        if(!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
        const formulae = await response.json();
        const additions = buildSoftwareCatalog(formulae, allData.software, SOFTWARE_TARGET_COUNT - allData.software.length);
        const merged = [...allData.software];
        const seen = new Set(merged.map(resourceKey));
        for (const item of additions) {
            const key = resourceKey(item);
            if(seen.has(key)) continue;
            merged.push(item);
            seen.add(key);
        }
        allData.software = merged;
        moveGithubResourcesToKnowledge(allData);
        const importedItems = merged.filter(item => item.autoGenerated === 'homebrew-catalog');
        const cacheLimit = Math.max(0, SOFTWARE_TARGET_COUNT - (merged.length - importedItems.length));
        try { localStorage.setItem(SOFTWARE_CATALOG_CACHE_KEY, JSON.stringify({ fetchedAt:Date.now(), items:importedItems.slice(0, cacheLimit) })); } catch(e){}
        currentPage = 1;
        render();
    } catch(e){
        if(cached && Array.isArray(cached.items)){
            const merged = [...allData.software];
            const seen = new Set(merged.map(resourceKey));
            const offlineItems = [];
            for (const item of cached.items) {
                if(merged.length >= SOFTWARE_TARGET_COUNT) break;
                const key = resourceKey(item);
                if(seen.has(key)) continue;
                merged.push(item);
                offlineItems.push(item);
                seen.add(key);
            }
            allData.software = merged;
            moveGithubResourcesToKnowledge(allData);
            try { localStorage.setItem(SOFTWARE_CATALOG_CACHE_KEY, JSON.stringify({ fetchedAt:cached.fetchedAt || Date.now(), items:offlineItems })); } catch(e){}
            render();
        }
    }
}

function enrichDataWithAutoContent(data){
    const enriched = JSON.parse(JSON.stringify(data || {}));
    const cachedSoftware = readSoftwareCatalogCache();
    for (const category of BUILTIN) {
        const targetCount = category === 'software' ? SOFTWARE_TARGET_COUNT : category === 'games' ? GAMES_TARGET_COUNT : category === 'social' ? Number.MAX_SAFE_INTEGER : 100;
        const sourceItems = Array.isArray(enriched[category]) ? enriched[category] : [];
        const existing = sourceItems.filter(item => {
            if(item && item.autoGenerated === 'github-topic-search') return false;
            const description = String(item && item.description || '');
            const url = String(item && item.url || '');
            const legacyGenerated = /Otwartoźródłowe źródło i katalog narzędzi|Otwartoźródłowy zasób do/.test(description);
            return !(legacyGenerated && url.startsWith('https://github.com/search?'));
        }).filter((item, index, items) => items.findIndex(candidate => resourceKey(candidate) === resourceKey(item) || (['games', 'social'].includes(category) && gameTitleKey(candidate.title) === gameTitleKey(item.title))) === index);
        const seen = new Set(existing.map(resourceKey));
        const seenTitles = new Set(['games', 'social'].includes(category) ? existing.map(item => gameTitleKey(item.title)) : []);
        const additions = [];
        for (const candidate of (AUTO_CONTENT_LIBRARY[category] || [])) {
            if(existing.length + additions.length >= targetCount) break;
            const key = resourceKey(candidate);
            const existingIndex = candidate.refreshExisting
                ? existing.findIndex(item => normalizeResourceUrl(item.url) === normalizeResourceUrl(candidate.url) || String(item.title || '').trim().toLowerCase() === String(candidate.title || '').trim().toLowerCase())
                : -1;
            if(existingIndex > -1){
                const { refreshExisting, ...canonicalData } = candidate;
                Object.assign(existing[existingIndex], canonicalData);
                continue;
            }
            const titleKey = ['games', 'social'].includes(category) ? gameTitleKey(candidate.title) : '';
            if (!seen.has(key) && !(['games', 'social'].includes(category) && seenTitles.has(titleKey))) {
                const { refreshExisting, ...candidateData } = candidate;
                additions.push({
                    ...candidateData,
                    createdAt: Date.now() - additions.length * 1000,
                    custom: false,
                    notes: '',
                    thumbnail: '',
                    isPrivate: false,
                    tags: category === 'games' ? (candidateData.tags || []) : []
                });
                seen.add(key);
                if(['games', 'social'].includes(category)) seenTitles.add(titleKey);
            }
        }
        if(category === 'social' && Array.isArray(window.OMNIHUB_SOCIAL_CATALOG)){
            for (const candidate of window.OMNIHUB_SOCIAL_CATALOG) {
                const key = resourceKey(candidate);
                const titleKey = gameTitleKey(candidate.title);
                if(seen.has(key) || seenTitles.has(titleKey)) continue;
                additions.push({ ...candidate, createdAt:Date.now() - additions.length * 1000, custom:false, notes:'', thumbnail:'', isPrivate:false, tags:['Forum','Społeczność'] });
                seen.add(key);
                seenTitles.add(titleKey);
            }
        }
        if(category === 'games' && Array.isArray(window.OMNIHUB_STEAM_GAMES)){
            let importedCount = 0;
            for (const candidate of window.OMNIHUB_STEAM_GAMES) {
                if(importedCount >= 500 || existing.length + additions.length >= targetCount) break;
                const key = resourceKey(candidate);
                const titleKey = gameTitleKey(candidate.title);
                if(seen.has(key) || seenTitles.has(titleKey)) continue;
                additions.push({ ...candidate, createdAt:Date.now() - additions.length * 1000, custom:false, notes:'', thumbnail:'', isPrivate:false, tags:candidate.tags || [] });
                seen.add(key);
                seenTitles.add(titleKey);
                importedCount++;
            }
        }
        const keptCacheItems = [];
        if(category === 'software' && Array.isArray(cachedSoftware && cachedSoftware.items)){
            for (const item of cachedSoftware.items) {
                if(existing.length + additions.length >= targetCount) break;
                const key = resourceKey(item);
                if(seen.has(key)) continue;
                additions.push({ ...item, autoGenerated:'homebrew-catalog', custom:false });
                keptCacheItems.push(item);
                seen.add(key);
            }
            if(keptCacheItems.length !== cachedSoftware.items.length){
                try { localStorage.setItem(SOFTWARE_CATALOG_CACHE_KEY, JSON.stringify({ fetchedAt:cachedSoftware.fetchedAt || Date.now(), items:keptCacheItems })); } catch(e){}
            }
        }
        const missingCount = category === 'social' ? 0 : Math.max(0, targetCount - existing.length - additions.length);
        const fallbackItems = category === 'software' ? [] : buildAutoGeneratedFallbacks(category, missingCount, existing.length + additions.length);
        for (const fallback of fallbackItems) {
            const key = resourceKey(fallback);
            if (seen.has(key)) continue;
            additions.push({
                ...fallback,
                createdAt: Date.now() - additions.length * 1000,
                custom: false,
                notes: '',
                thumbnail: '',
                isPrivate: false
            });
            seen.add(key);
        }
        enriched[category] = [...existing, ...additions];
    }
    moveGithubResourcesToKnowledge(enriched);
    return enriched;
}

const $ = (id) => document.getElementById(id);

// ===== TŁUMACZENIE API (bezpieczne, bez pętli) =====
let translationCache = {};
try { translationCache = JSON.parse(localStorage.getItem('omnihub_translations')) || {}; } catch(e){}
function saveTranslationCache(){ try { localStorage.setItem('omnihub_translations', JSON.stringify(translationCache)); } catch(e){} }
const pendingTranslations = new Set();
async function translateText(text, targetLang){
    if(!text || targetLang === 'pl') return text;
    const key = targetLang + '::' + text;
    if(translationCache[key]) return translationCache[key];
    if(pendingTranslations.has(key)) return text;
    pendingTranslations.add(key);
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 490))}&langpair=pl|${targetLang}`;
        const r = await fetch(url);
        const d = await r.json();
        const tr = d?.responseData?.translatedText;
        if(tr && tr.length > 0 && tr.toLowerCase() !== text.toLowerCase()){
            translationCache[key] = tr;
            saveTranslationCache();
            return tr;
        }
    } catch(e){}
    finally { pendingTranslations.delete(key); }
    return text;
}

// getItemDesc — CZYSTA funkcja, brak .then(render())
function getItemDesc(item){
    if(!item) return '';
    if(typeof item.description === 'object') return item.description[currentLang] || item.description.pl || item.description.en || '';
    const raw = item.description || '';
    if(currentLang === 'pl' || !raw) return raw;
    const key = currentLang + '::' + raw;
    return translationCache[key] || raw;
}

// backgroundTranslate — jedno miejsce, sekwencyjnie, render co 3
async function backgroundTranslate(){
    if(currentLang === 'pl') return;
    const items = getCurrentItems().slice(0, 30);
    let done = 0;
    for(const it of items){
        if(typeof it.description !== 'string' || !it.description) continue;
        const key = currentLang + '::' + it.description;
        if(translationCache[key]) continue;
        try { await translateText(it.description, currentLang); done++; } catch(e){}
        if(done >= 3){ render(); done = 0; }
    }
    if(done > 0) render();
}

// ===== DETEKCJA MEDIÓW =====
function detectMedia(url){
    if(!url) return null;
    try {
        const u = new URL(url, location.href);
        const host = u.hostname.toLowerCase().replace(/^www\./, '');
        const path = u.pathname, q = u.search;
        if(host === 'youtube.com' || host === 'youtu.be' || host === 'm.youtube.com'){
            let vid = null;
            if(host === 'youtu.be') vid = path.slice(1).split('/')[0];
            else if(path.startsWith('/shorts/')) vid = path.split('/')[2];
            else vid = new URLSearchParams(q).get('v');
            if(vid && vid.length >= 8) return { type:'video', service:'youtube', embedUrl:`https://www.youtube.com/embed/${vid}`, thumbnail:`https://img.youtube.com/vi/${vid}/mqdefault.jpg` };
        }
        if(host === 'vimeo.com' || host === 'player.vimeo.com'){ const m = path.match(/(\d+)/); if(m) return { type:'video', service:'vimeo', embedUrl:`https://player.vimeo.com/video/${m[1]}` }; }
        if(host === 'dailymotion.com' || host === 'dai.ly'){ const vid = host === 'dai.ly' ? path.slice(1) : (path.match(/\/video\/([^_]+)/) || [])[1]; if(vid) return { type:'video', service:'dailymotion', embedUrl:`https://www.dailymotion.com/embed/video/${vid}` }; }
        if(host === 'twitch.tv' || host === 'm.twitch.tv'){ const parent = location.hostname || 'localhost'; if(path.includes('/videos/')){ const vid = path.split('/videos/')[1].split('?')[0]; return { type:'video', service:'twitch', embedUrl:`https://player.twitch.tv/?video=${vid}&parent=${parent}` }; } const ch = path.slice(1).split('/')[0]; if(ch) return { type:'video', service:'twitch', embedUrl:`https://player.twitch.tv/?channel=${ch}&parent=${parent}` }; }
        if(host === 'streamable.com'){ const vid = path.slice(1).split('/')[0]; if(vid) return { type:'video', service:'streamable', embedUrl:`https://streamable.com/e/${vid}` }; }
        if(host === 'odysee.com') return { type:'video', service:'odysee', embedUrl:`https://odysee.com/$/embed/${path.slice(1)}` };
        if(host === 'soundcloud.com') return { type:'audio', service:'soundcloud', embedUrl:`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%2338bdf8` };
        if(host === 'mixcloud.com') return { type:'audio', service:'mixcloud', embedUrl:`https://www.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(url)}&hide_cover=1` };
        const ext = (path.split('.').pop() || '').toLowerCase().split('?')[0];
        const vExt = ['mp4','webm','ogv','ogg','mov','m4v'];
        const aExt = ['mp3','wav','flac','m4a','opus','aac'];
        const iExt = ['jpg','jpeg','png','gif','webp','avif','svg','bmp','heic','heif','jxl','tiff','tif'];
        if(vExt.includes(ext)) return { type:'video', service:'direct', directUrl:url, format:ext };
        if(aExt.includes(ext)) return { type:'audio', service:'direct', directUrl:url, format:ext };
        if(iExt.includes(ext)) return { type:'image', service:'direct', directUrl:url, format:ext };
        if(ext === 'm3u8') return { type:'video', service:'hls', directUrl:url, format:'m3u8' };
        return null;
    } catch(e){ return null; }
}
function mediaLabel(media){ if(!media) return ''; const m = { video:'🎬', audio:'🎵', image:'🖼️' }; return `${m[media.type]||''} ${media.service}`; }

// ===== HELPERY =====
function escapeHtml(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
function safeUrl(u){ if(!u) return '#'; try { const url = new URL(u, location.href); return (url.protocol==='http:'||url.protocol==='https:') ? u : '#'; } catch(e){ return '#'; } }
function itemId(i){ return `${i.title}::${i.url}`; }
function normalizeUrl(u){ try { const x = new URL(u); return x.origin.toLowerCase() + x.pathname.replace(/\/$/,'').toLowerCase() + x.search.toLowerCase(); } catch(e){ return String(u).toLowerCase().trim(); } }
function getHostname(u){ try { return new URL(u).hostname.toLowerCase(); } catch(e){ return ''; } }
function getFaviconUrl(u){ if(!u) return ''; try { const url = new URL(u); return (url.protocol==='http:'||url.protocol==='https:') ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(url.hostname)}&sz=64` : ''; } catch(e){ return ''; } }
function renderMarkdown(text){
    if(!text) return '';
    const inline = value => {
        let out = escapeHtml(value);
        const code = [];
        out = out.replace(/`([^`\n]+)`/g, (_m, value) => {
            const token = `\u0000CODE${code.length}\u0000`;
            code.push(`<code>${value}</code>`);
            return token;
        });
        out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_m, label, href) =>
            `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`);
        out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                 .replace(/~~(.+?)~~/g, '<del>$1</del>')
                 .replace(/\*(.+?)\*/g, '<em>$1</em>');
        return out.replace(/\u0000CODE(\d+)\u0000/g, (_m, index) => code[Number(index)] || '');
    };
    const lines = String(text).replace(/\r\n?/g, '\n').split('\n');
    const blocks = [];
    let paragraph = [], list = null, codeLines = null;
    const flushParagraph = () => {
        if(paragraph.length){ blocks.push(`<p>${paragraph.map(inline).join('<br>')}</p>`); paragraph = []; }
    };
    const flushList = () => {
        if(list){ blocks.push(`<${list.type}>${list.items.map(item => `<li>${inline(item)}</li>`).join('')}</${list.type}>`); list = null; }
    };
    for(const line of lines){
        if(line.trim().startsWith('```')){
            flushParagraph(); flushList();
            if(codeLines){ blocks.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`); codeLines = null; }
            else codeLines = [];
            continue;
        }
        if(codeLines){ codeLines.push(line); continue; }
        const heading = line.match(/^\s{0,3}(#{1,6})\s+(.+)$/);
        const quote = line.match(/^\s*&gt;\s?(.*)$/) || line.match(/^\s*>\s?(.*)$/);
        const unordered = line.match(/^\s*[-*+]\s+(.+)$/);
        const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
        if(heading){
            flushParagraph(); flushList();
            const level = heading[1].length;
            blocks.push(`<h${level}>${inline(heading[2])}</h${level}>`);
        } else if(quote){
            flushParagraph(); flushList();
            blocks.push(`<blockquote>${inline(quote[1])}</blockquote>`);
        } else if(unordered || ordered){
            flushParagraph();
            const type = unordered ? 'ul' : 'ol';
            if(list && list.type !== type) flushList();
            if(!list) list = { type, items:[] };
            list.items.push((unordered || ordered)[1]);
        } else if(!line.trim()){
            flushParagraph(); flushList();
        } else {
            flushList(); paragraph.push(line);
        }
    }
    if(codeLines) blocks.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
    flushParagraph(); flushList();
    return blocks.join('');
}
function gradientFor(title){ let h = 0; const tt = title||''; for(let i = 0; i < tt.length; i++) h = (h*31+tt.charCodeAt(i))%360; return `linear-gradient(90deg, hsl(${h},70%,55%), hsl(${(h+60)%360},70%,55%))`; }
function downloadBlob(content, filename, mime){ const blob = new Blob([content], { type: mime }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
function dateStamp(){ const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function formatDate(ts){ if(!ts||ts<0) return ''; try { return new Date(ts).toLocaleDateString(currentLang); } catch(e){ return ''; } }
function formatDateTime(ts){ try { return new Date(ts).toLocaleString(currentLang); } catch(e){ return ''; } }
function isNewItem(item){ return item.createdAt > 0 && (Date.now() - item.createdAt) < 24*60*60*1000; }
function ensureItemFields(item){ if(!Array.isArray(item.tags)) item.tags = []; if(item.thumbnail===undefined) item.thumbnail=''; if(item.notes===undefined) item.notes=''; if(!Array.isArray(item.history)) item.history=[]; if(item.isPrivate===undefined) item.isPrivate=false; return item; }

// ===== STORAGE =====
function saveFavs(){ localStorage.setItem('omnihub_favorites', JSON.stringify(favorites)); }
function saveOrder(){ localStorage.setItem('omnihub_order', JSON.stringify(customOrder)); }
function saveCustomData(d){ localStorage.setItem('omnihub_custom_data', JSON.stringify(d)); }
function saveCategories(){ localStorage.setItem('omnihub_custom_categories', JSON.stringify(customCategories)); }
function saveViewCounts(){ localStorage.setItem('omnihub_view_counts', JSON.stringify(viewCounts)); }
function saveTrash(){ localStorage.setItem('omnihub_trash', JSON.stringify(trash)); }
function saveCustomTags(){ localStorage.setItem('omnihub_custom_tags', JSON.stringify(customTags)); }
function saveRatings(){ localStorage.setItem('omnihub_ratings', JSON.stringify(ratings)); }
function saveComments(){ localStorage.setItem('omnihub_comments', JSON.stringify(comments)); }
function saveHiddenStatics(){ localStorage.setItem('omnihub_hidden_statics', JSON.stringify(hiddenStatics)); }
function saveProfile(){ localStorage.setItem('omnihub_profile', JSON.stringify(profile)); }
function saveLinkCache(){ try { localStorage.setItem('omnihub_link_cache', JSON.stringify(linkCheckCache)); } catch(e){} }
function saveTheme(){ if(customTheme) localStorage.setItem('omnihub_custom_theme', JSON.stringify(customTheme)); else localStorage.removeItem('omnihub_custom_theme'); }

function getRating(id){ return ratings[id] || { sum:0, count:0, myVote:0, history:[], distribution:{1:0,2:0,3:0,4:0,5:0} }; }
function getRatingAvg(id){ const r = getRating(id); return r.count > 0 ? r.sum/r.count : 0; }
function setVote(item, vote){
    const id = itemId(item);
    if(!ratings[id]) ratings[id] = { sum:0, count:0, myVote:0, history:[], distribution:{1:0,2:0,3:0,4:0,5:0} };
    const r = ratings[id];
    if(!r.history) r.history = []; if(!r.distribution) r.distribution = {1:0,2:0,3:0,4:0,5:0};
    if(vote === 0){ if(r.myVote > 0){ r.sum -= r.myVote; r.count--; if(r.distribution[r.myVote]) r.distribution[r.myVote]--; r.myVote = 0; r.history.push({ vote:0, ts:Date.now(), action:'removed' }); } }
    else {
        if(r.myVote > 0){ r.sum = r.sum - r.myVote + vote; if(r.distribution[r.myVote]) r.distribution[r.myVote]--; r.distribution[vote] = (r.distribution[vote]||0)+1; }
        else { r.sum += vote; r.count++; r.distribution[vote] = (r.distribution[vote]||0)+1; }
        r.myVote = vote; r.history.push({ vote, ts:Date.now(), action:'voted' });
    }
    if(r.history.length > 50) r.history = r.history.slice(-50);
    if(r.count === 0) delete ratings[id];
    saveRatings();
}
function getComments(id){ return comments[id] || []; }
function addComment(item, author, text, parentId){
    const id = itemId(item);
    if(!comments[id]) comments[id] = [];
    comments[id].push({ id:'c_'+Date.now()+Math.random().toString(36).slice(2,6), author:author||profile.name||'Anon', text, ts:Date.now(), parentId:parentId||null, resolved:false, reactions:{up:0,down:0} });
    saveComments();
}
function deleteComment(item, commentId){ const id = itemId(item); if(!comments[id]) return; comments[id] = comments[id].filter(c => c.id !== commentId); if(!comments[id].length) delete comments[id]; saveComments(); }

function captureState(){ return { allData: JSON.parse(JSON.stringify(allData)), favorites: JSON.parse(JSON.stringify(favorites)), customOrder: JSON.parse(JSON.stringify(customOrder)), customCategories: JSON.parse(JSON.stringify(customCategories)), customTags: JSON.parse(JSON.stringify(customTags)), viewCounts: JSON.parse(JSON.stringify(viewCounts)), trash: JSON.parse(JSON.stringify(trash)), ratings: JSON.parse(JSON.stringify(ratings)), comments: JSON.parse(JSON.stringify(comments)), hiddenStatics: JSON.parse(JSON.stringify(hiddenStatics)), customDataStr: localStorage.getItem('omnihub_custom_data')||'{}', customTagsStr: localStorage.getItem('omnihub_custom_tags')||'[]', ratingsStr: localStorage.getItem('omnihub_ratings')||'{}', commentsStr: localStorage.getItem('omnihub_comments')||'{}', hiddenStr: localStorage.getItem('omnihub_hidden_statics')||'[]' }; }
function restoreState(s){ allData = JSON.parse(JSON.stringify(s.allData)); favorites = JSON.parse(JSON.stringify(s.favorites)); customOrder = JSON.parse(JSON.stringify(s.customOrder)); customCategories = JSON.parse(JSON.stringify(s.customCategories)); customTags = JSON.parse(JSON.stringify(s.customTags)); viewCounts = JSON.parse(JSON.stringify(s.viewCounts)); trash = JSON.parse(JSON.stringify(s.trash)); ratings = JSON.parse(JSON.stringify(s.ratings)); comments = JSON.parse(JSON.stringify(s.comments)); hiddenStatics = JSON.parse(JSON.stringify(s.hiddenStatics)); localStorage.setItem('omnihub_custom_data', s.customDataStr); localStorage.setItem('omnihub_custom_tags', s.customTagsStr); localStorage.setItem('omnihub_ratings', s.ratingsStr); localStorage.setItem('omnihub_comments', s.commentsStr); localStorage.setItem('omnihub_hidden_statics', s.hiddenStr); saveFavs(); saveOrder(); saveCategories(); saveViewCounts(); saveTrash(); saveCustomTags(); saveRatings(); saveComments(); saveHiddenStatics(); renderSidebar(); updateCategorySelect(); updateTrashCount(); render(); }
function pushUndo(label){ if(undoTimer){ clearTimeout(undoTimer); undoTimer = null; toast.classList.add('hidden'); } undoStack.push({ label, state: captureState() }); if(undoStack.length > MAX_UNDO) undoStack.shift(); redoStack.length = 0; }
function doUndo(){ if(!undoStack.length){ showSimpleToast(t('toast.noUndo')); return; } const e = undoStack.pop(); redoStack.push({ label: e.label, state: captureState() }); restoreState(e.state); showSimpleToast(`${t('toast.undone')} ${e.label}`); }
function doRedo(){ if(!redoStack.length){ showSimpleToast(t('toast.noRedo')); return; } const e = redoStack.pop(); undoStack.push({ label: e.label, state: captureState() }); restoreState(e.state); showSimpleToast(`${t('toast.redone')} ${e.label}`); }
function showSimpleToast(msg){ toastMessage.textContent = msg; $('toastUndoBtn').style.display = 'none'; toast.classList.remove('hidden'); if(undoTimer) clearTimeout(undoTimer); undoTimer = setTimeout(() => { toast.classList.add('hidden'); undoTimer = null; }, 3000); }
function showUndoToast(msg, onUndo){ toastMessage.textContent = msg; const btn = $('toastUndoBtn'); btn.style.display = ''; toast.classList.remove('hidden'); if(undoTimer) clearTimeout(undoTimer); undoTimer = setTimeout(() => { toast.classList.add('hidden'); undoTimer = null; }, 8000); const nb = btn.cloneNode(true); btn.parentNode.replaceChild(nb, btn); nb.addEventListener('click', () => { if(undoTimer){ clearTimeout(undoTimer); undoTimer = null; } toast.classList.add('hidden'); onUndo(); }); }

// ===== INIT =====
try { favorites = JSON.parse(localStorage.getItem('omnihub_favorites')) || []; } catch(e){}
try { customCategories = JSON.parse(localStorage.getItem('omnihub_custom_categories')) || {}; } catch(e){}
try { customTags = JSON.parse(localStorage.getItem('omnihub_custom_tags')) || []; } catch(e){ customTags = []; }
try { viewCounts = JSON.parse(localStorage.getItem('omnihub_view_counts')) || {}; } catch(e){}
try { customOrder = JSON.parse(localStorage.getItem('omnihub_order')) || {}; } catch(e){}
try { trash = JSON.parse(localStorage.getItem('omnihub_trash')) || []; } catch(e){}
try { ratings = JSON.parse(localStorage.getItem('omnihub_ratings')) || {}; } catch(e){ ratings = {}; }
try { comments = JSON.parse(localStorage.getItem('omnihub_comments')) || {}; } catch(e){ comments = {}; }
try { hiddenStatics = JSON.parse(localStorage.getItem('omnihub_hidden_statics')) || []; } catch(e){ hiddenStatics = []; }
try { customTheme = JSON.parse(localStorage.getItem('omnihub_custom_theme')); } catch(e){ customTheme = null; }
try { profile = JSON.parse(localStorage.getItem('omnihub_profile')) || { name: 'Gość' }; } catch(e){}
try { linkCheckCache = JSON.parse(localStorage.getItem('omnihub_link_cache')) || {}; } catch(e){}

if(location.hash.startsWith('#cfg=')){
    try { const enc = location.hash.slice(5); const cfg = JSON.parse(decodeURIComponent(atob(enc))); if(cfg){ if(cfg.custom_categories) Object.assign(customCategories, cfg.custom_categories); if(Array.isArray(cfg.custom_tags)) cfg.custom_tags.forEach(x => { if(!customTags.includes(x)) customTags.push(x); }); saveCategories(); saveCustomTags(); } history.replaceState(null, '', location.pathname + location.search); } catch(e){}
}

const trashCutoff = Date.now() - 30*24*60*60*1000;
trash = trash.filter(x => x.deletedAt > trashCutoff);
saveTrash();

const cardsContainer = $('cardsContainer');
const categoryTitle = $('categoryTitle');
const categoryDesc = $('categoryDesc');
const searchInput = $('searchInput');
const categoryNav = $('categoryNav');
const themeSelect = $('themeSelect');
const langSelect = $('langSelect');
const sortSelect = $('sortSelect');
const viewModeSelect = $('viewModeSelect');
const ratingFilterSelect = $('ratingFilterSelect');
const sourceFilterSelect = $('sourceFilterSelect');
const clearFilterBtn = $('clearFilterBtn');
const tagChips = $('tagChips');
const modal = $('resourceModal');
const openModalBtn = $('openModalBtn');
const closeModalBtn = $('closeModalBtn');
const addResourceForm = $('addResourceForm');
const modalTitle = $('modalTitle');
const submitBtn = $('submitBtn');
const editIndexInput = $('editIndex');
const editOriginalCategoryInput = $('editOriginalCategory');
const editOriginalUrlInput = $('editOriginalUrl');
const exportBtn = $('exportBtn');
const exportHtmlBtn = $('exportHtmlBtn');
const exportCsvBtn = $('exportCsvBtn');
const importFile = $('importFile');
const importDataJson = $('importDataJson');
const importCsv = $('importCsv');
const importBookmarks = $('importBookmarks');
const statsBtn = $('statsBtn');
const trashBtn = $('trashBtn');
const presentationBtn = $('presentationBtn');
const syncFileBtn = $('syncFileBtn');
const themeCustomBtn = $('themeCustomBtn');
const shareUrlBtn = $('shareUrlBtn');
const toast = $('toast');
const toastMessage = $('toastMessage');
const detailModal = $('detailModal');
const detailContent = $('detailContent');
const linkManagerPanel = $('linkManagerPanel');
const linkManagerBtn = $('linkManagerBtn');

// ===== i18n =====
function applyI18n(){
    document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return; el.textContent = t(k); });
    document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
    if(searchInput) searchInput.placeholder = t('search.placeholder');
    document.title = t('app.title');
}
function setLang(lang){
    if(!UI[lang]) lang = 'pl';
    currentLang = lang;
    localStorage.setItem('omnihub_lang', lang);
    document.documentElement.lang = lang;
    applyI18n();
    renderSidebar();
    render();
    setTimeout(() => { backgroundTranslate(); }, 100);
}
langSelect.value = currentLang;
langSelect.addEventListener('change', e => setLang(e.target.value));

// ===== THEME =====
const THEME_CLASSES = ['theme-dark','theme-light','theme-midnight','theme-emerald','theme-sunset'];
function applyTheme(th){ document.body.classList.remove(...THEME_CLASSES); if(th === 'auto') document.body.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light'); else document.body.classList.add(`theme-${th}`); applyCustomThemeVars(); }
function applyCustomThemeVars(){ if(!customTheme) return; const root = document.documentElement; if(customTheme.bgMain) root.style.setProperty('--bg-main', customTheme.bgMain); if(customTheme.bgHeader) root.style.setProperty('--bg-header', customTheme.bgHeader); if(customTheme.bgCard) root.style.setProperty('--bg-card', customTheme.bgCard); if(customTheme.border) root.style.setProperty('--border-color', customTheme.border); if(customTheme.text) root.style.setProperty('--text-main', customTheme.text); if(customTheme.accent) root.style.setProperty('--accent', customTheme.accent); }
const savedTheme = localStorage.getItem('omnihub_theme') || 'auto';
applyTheme(savedTheme);
themeSelect.value = savedTheme;
themeSelect.addEventListener('change', e => { localStorage.setItem('omnihub_theme', e.target.value); applyTheme(e.target.value); });

// ===== SORT/VIEW =====
sortSelect.value = currentSort;
sortSelect.addEventListener('change', e => { currentSort = e.target.value; localStorage.setItem('omnihub_sort', currentSort); currentPage = 1; render(); });
function applyViewMode(){ cardsContainer.classList.toggle('list-view', viewMode==='list'); cardsContainer.classList.toggle('calendar-view', viewMode==='calendar'); viewModeSelect.value = viewMode; }
applyViewMode();
viewModeSelect.addEventListener('change', e => { viewMode = e.target.value; localStorage.setItem('omnihub_view_mode', viewMode); applyViewMode(); render(); });
ratingFilterSelect.addEventListener('change', e => { ratingFilter = parseFloat(e.target.value) || 0; currentPage = 1; render(); });
sourceFilterSelect.value = sourceFilter;
sourceFilterSelect.addEventListener('change', e => { sourceFilter = e.target.value; localStorage.setItem('omnihub_source_filter', sourceFilter); currentPage = 1; render(); });

// ===== ŁADOWANIE DANYCH =====
let dataLoaded = false;
function hideDeletedStatics(){ if(!hiddenStatics.length) return; hiddenStatics.forEach(id => { Object.keys(allData).forEach(cat => { if(Array.isArray(allData[cat])) allData[cat] = allData[cat].filter(i => itemId(i) !== id); }); }); }
function loadCustomData(){
    let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e){ return; }
    let needsSave = moveGithubResourcesToKnowledge(cd, allData.knowledge || []);
    Object.values(cd).forEach(arr => { if(!Array.isArray(arr)) return; arr.forEach(item => { if(item && item.override && item._originalId){ Object.keys(allData).forEach(cat => { if(Array.isArray(allData[cat])) allData[cat] = allData[cat].filter(i => itemId(i) !== item._originalId); }); } }); });
    const now = Date.now();
    Object.keys(cd).forEach(cat => {
        if(!Array.isArray(cd[cat])) return;
        if(!allData[cat]) allData[cat] = [];
        cd[cat].forEach((item, idx) => {
            if(!item || !item.title || !item.url) return;
            if(!item.createdAt){ item.createdAt = now - idx*1000; needsSave = true; }
            item.custom = true; ensureItemFields(item);
            if(!allData[cat].some(e => e.title === item.title && e.url === item.url)) allData[cat].unshift(item);
        });
    });
    if(needsSave) saveCustomData(cd);
}

function cloneSeedData(){
    const seed = window.OMNIHUB_SEED_DATA;
    if(seed && typeof seed === 'object') return JSON.parse(JSON.stringify(seed));
    return {};
}
function initializeLoadedData(data){
    const sourceData = data && typeof data === 'object' && !Array.isArray(data) ? data : {};
    const expanded = enrichDataWithAutoContent(sourceData);
    allData = expanded;
    dataLoaded = true;
    let sidx = 0;
    Object.keys(allData).forEach(cat => {
        if(!Array.isArray(allData[cat])) return;
        allData[cat].forEach(item => { if(!item.createdAt) item.createdAt = -sidx++; ensureItemFields(item); });
    });
    hideDeletedStatics();
    loadCustomData();
    let favChanged = false;
    favorites.forEach(f => {
        ensureItemFields(f);
        if(!f.createdAt){
            for(const cat of Object.keys(allData)){
                const found = Array.isArray(allData[cat]) ? allData[cat].find(i => i.title === f.title && i.url === f.url) : null;
                if(found){ f.createdAt = found.createdAt; favChanged = true; break; }
            }
        }
    });
    if(favChanged) saveFavs();
    updateCategorySelect(); renderSidebar(); updateTrashCount(); applyI18n(); renderCategory(currentCategory); void loadSoftwareCatalog();
}
function initializeFromLocalSeed(){
    initializeLoadedData(cloneSeedData());
}
if(location.protocol === 'file:'){
    // file:// nie obsługuje fetch() do lokalnego JSON w sposób przenośny.
    // Dane startowe są dołączone do strony w data-seed.js.
    initializeFromLocalSeed();
} else {
    const appScript = document.querySelector('script[src$="app.js"]');
    const appBase = appScript ? new URL('.', appScript.src) : new URL('.', document.baseURI);
    fetch(new URL('data.json?t=' + Date.now(), appBase), { cache: 'no-store' })
        .then(r => { if(!r.ok) throw new Error('data.json HTTP ' + r.status); return r.json(); })
        .then(data => initializeLoadedData(data))
        .catch(err => {
            console.warn('OmniHub: data.json niedostępny; używam danych wbudowanych.', err);
            initializeFromLocalSeed();
        });
}

// ===== SIDEBAR =====
function renderSidebar(){
    let html = `<li><a href="#all" data-category="all"${currentCategory==='all'?' class="active"':''}>${ICONS.all} ${catTitle('all')}</a></li>`;
    BUILTIN.forEach(k => {
        const col = CAT_COLORS[k] || 'var(--accent)';
        html += `<li><a href="#${k}" data-category="${k}"${currentCategory===k?' class="active"':''} style="--cat-color:${col}">${ICONS[k]||'📁'} ${escapeHtml(catTitle(k))}</a></li>`;
    });
    Object.keys(customCategories).forEach(k => {
        const c = customCategories[k];
        html += `<li><a href="#${k}" data-category="${k}"${currentCategory===k?' class="active"':''} style="--cat-color:${c.color||'var(--accent)'}">${escapeHtml(c.icon||'📁')} ${escapeHtml(c.title||'—')} <button class="del-cat-btn" data-cat="${k}">×</button></a></li>`;
    });
    html += `<li><a href="#favorites" data-category="favorites"${currentCategory==='favorites'?' class="active"':''} style="--cat-color:#f43f5e;margin-top:1rem;">${t('nav.favorites')}</a></li>`;
    categoryNav.innerHTML = html;
    categoryNav.querySelectorAll('a[data-category]').forEach(a => {
        a.addEventListener('click', e => { if(e.target.closest('.del-cat-btn')) return; e.preventDefault(); currentCategory = a.dataset.category; currentPage = 1; searchInput.value = ''; activeTags = []; renderSidebar(); renderCategory(currentCategory); });
    });
    categoryNav.querySelectorAll('.del-cat-btn').forEach(btn => { btn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); deleteCustomCategory(btn.dataset.cat); }); });
}
function deleteCustomCategory(key){
    if(!customCategories[key]) return;
    if(!confirm(`${t('confirm.delete')} "${customCategories[key].title}"?`)) return;
    pushUndo(`Del cat ${customCategories[key].title}`);
    const items = allData[key] || [];
    if(items.length){
        if(!allData['ai']) allData['ai'] = [];
        let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e){}
        if(!cd['ai']) cd['ai'] = [];
        items.forEach(it => { it.custom = true; if(!allData['ai'].some(e => e.title === it.title && e.url === it.url)) allData['ai'].unshift(it); cd['ai'].unshift(it); });
        saveCustomData(cd);
    }
    delete allData[key]; delete customCategories[key];
    saveCategories();
    if(currentCategory === key){ currentCategory = 'ai'; renderCategory('ai'); }
    renderSidebar(); updateCategorySelect();
}
function updateCategorySelect(){
    const sel = $('resCategory');
    let html = '';
    BUILTIN.forEach(k => { html += `<option value="${k}">${ICONS[k]||''} ${escapeHtml(catTitle(k))}</option>`; });
    Object.keys(customCategories).forEach(k => { const c = customCategories[k]; html += `<option value="${k}">${escapeHtml(c.icon||'📁')} ${escapeHtml(c.title||'—')}</option>`; });
    sel.innerHTML = html;
}
function updateTrashCount(){ $('trashCount').textContent = trash.length; }

// ===== MODALS =====
const categoryModal = $('categoryModal');
$('closeCategoryModal').addEventListener('click', () => categoryModal.style.display = 'none');
categoryModal.addEventListener('click', e => { if(e.target === categoryModal) categoryModal.style.display = 'none'; });
$('addCategoryBtn').addEventListener('click', () => { $('addCategoryForm').reset(); categoryModal.style.display = 'flex'; });
$('addCategoryForm').addEventListener('submit', e => {
    e.preventDefault();
    const title = $('catTitle').value.trim(); const icon = $('catIcon').value.trim() || '📁'; const color = $('catColor').value || '#38bdf8';
    if(!title) return;
    const key = 'custom_' + Date.now();
    pushUndo(`Add cat ${title}`);
    customCategories[key] = { title, icon, color };
    saveCategories(); updateCategorySelect(); renderSidebar();
    categoryModal.style.display = 'none';
    showSimpleToast(`${t('toast.added')} ${title}`);
});

openModalBtn.addEventListener('click', () => { addResourceForm.reset(); editIndexInput.value = ''; editOriginalCategoryInput.value = ''; editOriginalUrlInput.value = ''; modalTitle.textContent = t('modal.addTitle'); submitBtn.textContent = t('btn.save'); $('mediaPreview').innerHTML = ''; modal.style.display = 'flex'; });
closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });
$('resUrl').addEventListener('input', () => { const url = $('resUrl').value.trim(); if(!url){ $('mediaPreview').innerHTML = ''; return; } const m = detectMedia(url); $('mediaPreview').innerHTML = m ? `${t('alert.mediaDetected')} <strong>${m.type} (${m.service})</strong>` : ''; });
$('fetchPreviewBtn').addEventListener('click', async () => {
    const url = $('resUrl').value.trim(); if(!url) return;
    const m = detectMedia(url); if(m && m.thumbnail){ $('resThumbnail').value = m.thumbnail; showSimpleToast('Auto thumbnail'); return; }
    showSimpleToast('Fetching…');
    try { const r = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`); const d = await r.json(); const doc = new DOMParser().parseFromString(d.contents, 'text/html'); const ogImg = doc.querySelector('meta[property="og:image"]')?.content; if(ogImg){ $('resThumbnail').value = ogImg; showSimpleToast('Thumbnail OK'); } else showSimpleToast('No og:image'); } catch(e){ showSimpleToast('Fetch failed'); }
});

addResourceForm.addEventListener('submit', async e => {
    e.preventDefault();
    const title = $('resTitle').value.trim(); const category = $('resCategory').value; const badge = $('resBadge').value.trim() || 'Zasób';
    const tags = $('resTags').value.split(',').map(x => x.trim()).filter(Boolean);
    const url = $('resUrl').value.trim(); const thumbnail = $('resThumbnail').value.trim(); const description = $('resDesc').value.trim();
    const notes = $('resNotes').value.trim(); const isPrivate = $('resPrivate').checked;
    const editTitle = editIndexInput.value; const origCat = editOriginalCategoryInput.value; const origUrl = editOriginalUrlInput.value;
    const editingId = editTitle ? `${editTitle}::${origUrl}` : null;
    if(url){
        const exact = findExistingByUrl(url, editingId);
        if(exact){ alert(`${t('alert.dupUrl')}: "${exact.item.title}"`); return; }
        const dom = findExistingByDomain(url, editingId);
        if(dom && !confirm(`${t('alert.sameDomain')}: "${dom.item.title}"\n${t('alert.confirm')}`)) return;
    }
    let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e){}
    let preservedCreatedAt = null, preservedHistory = [], wasOverride = false, originalId = null;
    if(editTitle){
        pushUndo(`Edit: ${editTitle}`);
        const old = (allData[origCat] || []).find(i => i.title === editTitle && i.url === origUrl);
        if(old){ if(old.createdAt) preservedCreatedAt = old.createdAt; if(old.history) preservedHistory = old.history; if(old.override){ wasOverride = true; originalId = old._originalId; } }
        Object.keys(cd).forEach(cat => { if(Array.isArray(cd[cat])){ cd[cat] = cd[cat].filter(i => !(i.title === editTitle && i.url === origUrl)); if(!cd[cat].length) delete cd[cat]; } });
        if(allData[origCat]) allData[origCat] = allData[origCat].filter(i => !(i.title === editTitle && i.url === origUrl));
        favorites = favorites.map(f => (f.title === editTitle && f.url === origUrl) ? { ...f, title, description, badge, tags, url, thumbnail, notes, custom: true, isPrivate } : f);
        saveFavs();
        const oldId = `${editTitle}::${origUrl}`, newId = `${title}::${url}`;
        Object.keys(customOrder).forEach(cat => { if(!Array.isArray(customOrder[cat])) return; const idx = customOrder[cat].indexOf(oldId); if(idx >= 0){ if(cat === category) customOrder[cat][idx] = newId; else customOrder[cat].splice(idx, 1); } });
        saveOrder();
    } else { pushUndo(`Add: ${title}`); }
    const history = preservedHistory.concat([{ action: editTitle ? 'edited' : 'created', timestamp: Date.now(), changes: editTitle ? { from:{ title:editTitle, url:origUrl }, to:{ title, url } } : null }]);
    const newItem = { title, description, badge, tags, url, thumbnail, notes, isPrivate, custom: true, createdAt: preservedCreatedAt || Date.now(), history };
    if(wasOverride || (editTitle && preservedCreatedAt && !preservedHistory.length)){ newItem.override = true; newItem._originalId = originalId || editingId; }
    if(!allData[category]) allData[category] = [];
    allData[category].unshift(newItem);
    if(!cd[category]) cd[category] = [];
    cd[category].unshift(newItem);
    saveCustomData(cd);
    tags.forEach(x => { if(!customTags.includes(x)) customTags.push(x); });
    saveCustomTags();
    if(!editTitle && customOrder[category]){ customOrder[category].unshift(itemId(newItem)); saveOrder(); }
    addResourceForm.reset(); modal.style.display = 'none'; render();
});

function openEditModal(title, url, badge, description, category, tags, thumbnail, notes, isPrivate){
    const sel = $('resCategory');
    if(!Array.from(sel.options).some(o => o.value === category)) category = 'ai';
    $('resTitle').value = title || ''; sel.value = category; $('resBadge').value = badge || ''; $('resTags').value = (tags||[]).join(', ');
    $('resUrl').value = url || ''; $('resThumbnail').value = thumbnail || ''; $('resDesc').value = description || '';
    $('resNotes').value = notes || ''; $('resPrivate').checked = !!isPrivate;
    editIndexInput.value = title || ''; editOriginalCategoryInput.value = category || ''; editOriginalUrlInput.value = url || '';
    const m = detectMedia(url); $('mediaPreview').innerHTML = m ? `${t('alert.mediaDetected')} <strong>${m.type} (${m.service})</strong>` : '';
    modalTitle.textContent = t('modal.editTitle'); submitBtn.textContent = t('btn.update');
    modal.style.display = 'flex';
}

function findExistingByUrl(url, excludeId){ const norm = normalizeUrl(url); for(const cat of Object.keys(allData)){ if(!Array.isArray(allData[cat])) continue; for(const it of allData[cat]){ if(excludeId && itemId(it) === excludeId) continue; if(normalizeUrl(it.url) === norm) return { cat, item: it }; } } return null; }
function findExistingByDomain(url, excludeId){ const h = getHostname(url); if(!h) return null; for(const cat of Object.keys(allData)){ if(!Array.isArray(allData[cat])) continue; for(const it of allData[cat]){ if(excludeId && itemId(it) === excludeId) continue; if(getHostname(it.url) === h) return { cat, item: it, host: h }; } } return null; }

// ===== WYSZUKIWANIE =====
function parseAdvancedQuery(q){
    const tokens = q.match(/(\w+:[^\s]+|"[^"]*"|\S+)/g) || [];
    const f = { badge:null, tag:null, isFav:false, cat:null, title:null, text:[] };
    tokens.forEach(tk => { const m = tk.match(/^(\w+):(.+)$/); if(m){ const k = m[1].toLowerCase(), v = m[2].replace(/^"|"$/g,'').toLowerCase(); if(k==='badge') f.badge=v; else if(k==='tag') f.tag=v; else if(k==='is'&&v==='fav') f.isFav=true; else if(k==='cat') f.cat=v; else if(k==='title') f.title=v; else f.text.push(tk.toLowerCase()); } else f.text.push(tk.replace(/^"|"$/g,'').toLowerCase()); });
    return f;
}
function matchesAdvanced(item, f, cat){
    if(f.badge && (item.badge||'').toLowerCase() !== f.badge) return false;
    if(f.tag && !(item.tags||[]).some(x => x.toLowerCase() === f.tag) && (item.badge||'').toLowerCase() !== f.tag) return false;
    if(f.isFav && !favorites.some(fv => fv.title === item.title && fv.url === item.url)) return false;
    if(f.cat && cat !== f.cat) return false;
    if(f.title && !(item.title||'').toLowerCase().includes(f.title)) return false;
    for(const txt of f.text){ const hay = `${item.title||''} ${item.description||''} ${item.badge||''} ${(item.tags||[]).join(' ')}`.toLowerCase(); if(!hay.includes(txt)) return false; }
    return true;
}
function searchItems(q){ const f = parseAdvancedQuery(q); return getAllItems().filter(it => matchesAdvanced(it, f, findItemCategory(it))); }
searchInput.addEventListener('input', e => { const raw = e.target.value; currentPage = 1; if(!raw.trim()) currentView = { type:'category', category:currentCategory }; else currentView = { type:'search', query:raw, label:raw.trim() }; render(); });
clearFilterBtn.addEventListener('click', () => {
    searchInput.value = '';
    activeTags = [];
    ratingFilter = 0;
    ratingFilterSelect.value = '0';
    sourceFilter = '';
    sourceFilterSelect.value = '';
    localStorage.removeItem('omnihub_source_filter');
    currentView = { type:'category', category:currentCategory };
    currentPage = 1;
    render();
});
function renderTagChips(){ if(!activeTags.length){ tagChips.style.display = 'none'; tagChips.innerHTML = ''; return; } tagChips.style.display = 'flex'; tagChips.innerHTML = activeTags.sort().map(x => `<span class="tag-chip">${escapeHtml(x)}<button class="tag-chip-x" data-remove-tag="${escapeHtml(x)}">×</button></span>`).join(''); }
tagChips.addEventListener('click', e => { const btn = e.target.closest('[data-remove-tag]'); if(btn){ activeTags = activeTags.filter(x => x !== btn.dataset.removeTag); currentPage = 1; render(); } });

// ===== LINK MANAGER =====
function openLinkManager(){ currentView = { type:'linkManager' }; $('sortControls').style.display = 'none'; cardsContainer.style.display = 'none'; linkManagerPanel.style.display = 'block'; categoryTitle.textContent = t('lm.title'); categoryDesc.textContent = ''; renderLinkManager(); }
function closeLinkManager(){ linkManagerPanel.style.display = 'none'; cardsContainer.style.display = ''; $('sortControls').style.display = ''; }
linkManagerBtn.addEventListener('click', openLinkManager);

function getAllLinksForLM(){
    const all = [];
    Object.keys(allData).forEach(cat => { if(Array.isArray(allData[cat])) allData[cat].forEach(item => { if(item.url) all.push({ ...item, _cat:cat, _id:itemId(item) }); }); });
    let filtered = lmCategoryFilter ? all.filter(x => x._cat === lmCategoryFilter) : all;
    if(lmSearch){ const q = lmSearch.toLowerCase(); filtered = filtered.filter(x => (x.title||'').toLowerCase().includes(q) || (x.url||'').toLowerCase().includes(q)); }
    return filtered;
}
function getLinkStatus(item){ const c = linkCheckCache[item.url]; if(!c) return { status:'unknown', ts:null }; if(c.ok === true) return { status:'ok', ts:c.ts }; if(c.ok === false) return { status:'fail', ts:c.ts }; return { status:'unknown', ts:c.ts }; }

function renderLinkManager(){
    const all = getAllLinksForLM();
    const counts = { all: all.length, ok:0, fail:0, unknown:0 };
    all.forEach(it => { const s = getLinkStatus(it).status; counts[s==='ok'?'ok':s==='fail'?'fail':'unknown']++; });
    let filtered = all;
    if(lmFilter === 'active') filtered = all.filter(x => getLinkStatus(x).status === 'ok');
    else if(lmFilter === 'inactive') filtered = all.filter(x => getLinkStatus(x).status === 'fail');
    else if(lmFilter === 'unchecked') filtered = all.filter(x => getLinkStatus(x).status === 'unknown');
    let catOpts = `<option value="">${t('lm.catFilter')}</option>`;
    BUILTIN.forEach(k => { catOpts += `<option value="${k}"${lmCategoryFilter===k?' selected':''}>${ICONS[k]||''} ${escapeHtml(catTitle(k))}</option>`; });
    Object.keys(customCategories).forEach(k => { const c = customCategories[k]; catOpts += `<option value="${k}"${lmCategoryFilter===k?' selected':''}>${escapeHtml(c.icon||'📁')} ${escapeHtml(c.title||'')}</option>`; });
    let html = `<div class="lm-toolbar"><button class="btn-secondary" id="lmScanAllBtn">${t('lm.scanAll')}</button><button class="btn-secondary" id="lmScanVisibleBtn">${t('lm.scanVisible')}</button><button class="btn-secondary" id="lmStopBtn" style="display:none;">${t('lm.stop')}</button><button class="btn-secondary" id="lmClearBtn">${t('lm.clear')}</button><select id="lmCatSelect" class="theme-select">${catOpts}</select><input type="text" id="lmSearchInput" class="theme-select" placeholder="${t('lm.search')}" value="${escapeHtml(lmSearch)}" style="min-width:200px;padding:.5rem .75rem;"><button class="btn-secondary" id="lmCloseBtn">✕</button></div><div class="lm-tabs"><button class="lm-tab ${lmFilter==='all'?'active':''}" data-filter="all">${t('lm.all')} (${counts.all})</button><button class="lm-tab ${lmFilter==='active'?'active':''}" data-filter="active">✅ ${t('lm.active')} (${counts.ok})</button><button class="lm-tab ${lmFilter==='inactive'?'active':''}" data-filter="inactive">❌ ${t('lm.inactive')} (${counts.fail})</button><button class="lm-tab ${lmFilter==='unchecked'?'active':''}" data-filter="unchecked">⏳ ${t('lm.unchecked')} (${counts.unknown})</button></div><div class="lm-status" id="lmStatus">${t('lm.ready')}</div>`;
    if(!filtered.length){ html += `<div class="lm-empty">${t('lm.empty')}</div>`; }
    else {
        html += `<table class="lm-table"><thead><tr><th>${t('form.name')}</th><th>URL</th><th>${t('form.category')}</th><th>${t('lm.lastScan')}</th><th></th></tr></thead><tbody>`;
        filtered.forEach(it => {
            const st = getLinkStatus(it);
            const ic = st.status==='ok'?'✅':st.status==='fail'?'❌':'⏳';
            const cls = st.status==='ok'?'lm-status-ok':st.status==='fail'?'lm-status-fail':'lm-status-pending';
            const ls = st.ts ? formatDate(st.ts) : '—';
            html += `<tr data-id="${escapeHtml(it._id)}" data-cat="${escapeHtml(it._cat)}"><td class="lm-title-cell"><strong>${escapeHtml(it.title||'')}</strong></td><td class="lm-url-cell">${escapeHtml(it.url||'')}</td><td>${escapeHtml(catTitle(it._cat))}</td><td class="lm-status-cell ${cls}">${ic} ${ls}</td><td class="lm-actions-cell"><button class="lm-edit-btn" data-id="${escapeHtml(it._id)}" data-cat="${escapeHtml(it._cat)}">${t('lm.editInline')}</button></td></tr>`;
        });
        html += `</tbody></table>`;
    }
    linkManagerPanel.innerHTML = html;
    $('lmCloseBtn').addEventListener('click', () => { closeLinkManager(); render(); });
    document.querySelectorAll('.lm-tab').forEach(b => b.addEventListener('click', () => { lmFilter = b.dataset.filter; renderLinkManager(); }));
    $('lmCatSelect').addEventListener('change', e => { lmCategoryFilter = e.target.value; renderLinkManager(); });
    $('lmSearchInput').addEventListener('input', e => { lmSearch = e.target.value; renderLinkManager(); });
    $('lmClearBtn').addEventListener('click', () => { if(!confirm(t('alert.confirm'))) return; linkCheckCache = {}; saveLinkCache(); renderLinkManager(); showSimpleToast('Cache cleared'); });
    $('lmScanAllBtn').addEventListener('click', () => scanLinks('all'));
    $('lmScanVisibleBtn').addEventListener('click', () => scanLinks('visible'));
    $('lmStopBtn').addEventListener('click', () => { lmAbort = true; });
    document.querySelectorAll('.lm-edit-btn').forEach(b => { b.addEventListener('click', e => { e.stopPropagation(); const it = findItemById(b.dataset.id); if(!it) return; openEditModal(it.title, it.url, it.badge, it.description, b.dataset.cat, it.tags, it.thumbnail, it.notes, it.isPrivate); }); });
}

async function scanLinks(mode){
    if(lmScanning) return;
    lmScanning = true; lmAbort = false;
    const all = getAllLinksForLM();
    let items;
    if(mode === 'all') items = all.filter(it => !linkCheckCache[it.url] || (Date.now() - linkCheckCache[it.url].ts) > 24*60*60*1000);
    else {
        items = all;
        if(lmFilter === 'active') items = items.filter(x => getLinkStatus(x).status === 'ok');
        else if(lmFilter === 'inactive') items = items.filter(x => getLinkStatus(x).status === 'fail');
        else if(lmFilter === 'unchecked') items = items.filter(x => getLinkStatus(x).status === 'unknown');
        items = items.filter(it => !linkCheckCache[it.url] || (Date.now() - linkCheckCache[it.url].ts) > 24*60*60*1000);
        items = items.slice(0, 20);
    }
    if(!items.length){ showSimpleToast('Nothing to scan'); lmScanning = false; return; }
    const statusEl = $('lmStatus');
    const stopBtn = $('lmStopBtn');
    if(stopBtn) stopBtn.style.display = '';
    let done = 0, ok = 0, fail = 0;
    for(const it of items){
        if(lmAbort) break;
        try { const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 5000); await fetch(it.url, { method:'HEAD', mode:'no-cors', signal:controller.signal }); clearTimeout(timer); linkCheckCache[it.url] = { ok:true, ts:Date.now() }; ok++; }
        catch(e){ linkCheckCache[it.url] = { ok:false, ts:Date.now() }; fail++; }
        done++;
        if(statusEl) statusEl.innerHTML = `${t('lm.scanning')} ${done}/${items.length} · <span style="color:#22c55e;">${t('lm.ok')}: ${ok}</span> · <span style="color:#f87171;">${t('lm.fail')}: ${fail}</span><div class="lm-progress"><div class="lm-progress-bar" style="width:${(done/items.length)*100}%"></div></div>`;
        if(done % 10 === 0) saveLinkCache();
    }
    saveLinkCache();
    lmScanning = false;
    if(stopBtn) stopBtn.style.display = 'none';
    showSimpleToast(`${t('lm.done')} ${done} (${ok} OK, ${fail} ✗)`);
    renderLinkManager();
}

// ===== PLAYER =====
let currentPlayerItem = null, currentPlayerSkin = localStorage.getItem('omnihub_player_skin') || 'compact';
function openPlayerModal(item){
    currentPlayerItem = item;
    const media = detectMedia(item.url);
    const container = $('playerContainer');
    const infoEl = $('playerInfo');
    $('playerTitle').textContent = item.title || '';
    if($('localMediaStatus')) $('localMediaStatus').textContent = '';
    container.className = 'player-container player-skin-' + currentPlayerSkin;
    const localMediaInput = $('localMediaFile');
if(localMediaInput){
    localMediaInput.addEventListener('change', event => {
        const file = event.target.files && event.target.files[0];
        if(!file) return;
        if(!file.type.startsWith('video/') && !file.type.startsWith('audio/')){
            $('localMediaStatus').textContent = 'Wybierz plik audio lub wideo.';
            return;
        }
        if(localMediaObjectUrl) URL.revokeObjectURL(localMediaObjectUrl);
        localMediaObjectUrl = URL.createObjectURL(file);
        $('playerTitle').textContent = file.name;
        const isAudio = file.type.startsWith('audio/');
        $('playerContainer').className = 'player-container player-skin-' + currentPlayerSkin;
        $('playerContainer').innerHTML = isAudio
            ? `<audio controls autoplay style="width:100%;"></audio>`
            : `<video controls autoplay playsinline style="width:100%;max-height:70vh;"></video>`;
        const mediaElement = $('playerContainer').querySelector('audio,video');
        mediaElement.src = localMediaObjectUrl;
        setupMediaError(mediaElement, { title:file.name, url:localMediaObjectUrl });
        $('localMediaStatus').textContent = file.name;
        $('playerInfo').textContent = 'Plik lokalny — odtwarzany bez przesyłania na serwer.';
        $('playerModal').style.display = 'flex';
    });
}
document.querySelectorAll('.skin-btn').forEach(b => b.classList.toggle('active', b.dataset.skin === currentPlayerSkin));
    if(!media){ container.innerHTML = `<div class="player-fallback"><p>${t('alert.confirm')}</p><a href="${escapeHtml(safeUrl(item.url))}" target="_blank" rel="noopener">${t('player.openExternal')}</a></div>`; infoEl.innerHTML = ''; $('playerModal').style.display = 'flex'; return; }
    if(media.type === 'video' || media.type === 'audio'){
        if(media.service === 'direct' || media.service === 'hls'){
            if(media.service === 'hls'){
                container.innerHTML = `<video id="omnihubHlsPlayer" controls playsinline preload="metadata" style="width:100%;max-height:70vh;"></video><p class="player-status" role="status">Ładowanie strumienia HLS…</p>`;
                setupHlsPlayer(item, container.querySelector('video'));
            } else if(media.type === 'audio'){
                container.innerHTML = `<audio controls preload="metadata" style="width:100%;"></audio><p class="player-status" role="status"></p>`;
                const audio = container.querySelector('audio');
                audio.src = resolveMediaUrl(item.url);
                setupMediaError(audio, item);
                setupMediaResume(item);
            } else {
                container.innerHTML = `<video controls playsinline preload="metadata" style="width:100%;max-height:70vh;"></video><p class="player-status" role="status"></p>`;
                const video = container.querySelector('video');
                video.src = resolveMediaUrl(item.url);
                setupMediaError(video, item);
                setupMediaResume(item);
            }
        } else {
            const ratio = currentPlayerSkin === 'theater' ? '21 / 9' : '16 / 9';
            container.innerHTML = `<iframe src="${escapeHtml(media.embedUrl)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen style="aspect-ratio:${ratio};"></iframe>`;
        }
    }
    infoEl.innerHTML = `<strong>${escapeHtml(media.service)}</strong> · <a href="${escapeHtml(safeUrl(item.url))}" target="_blank" rel="noopener">${t('player.openExternal')}</a>`;
    $('playerModal').style.display = 'flex';
}
function resolveMediaUrl(value){
    try {
        const url = new URL(String(value || ''), location.href);
        return ['http:', 'https:', 'file:', 'blob:'].includes(url.protocol) ? url.href : '';
    } catch(e){ return ''; }
}
function setupMediaError(element, item){
    element.addEventListener('error', () => {
        const status = $('playerContainer').querySelector('.player-status');
        if(!status) return;
        const code = element.error ? element.error.code : 0;
        const details = {
            1: 'Odtwarzanie zostało przerwane.',
            2: 'Nie udało się pobrać pliku. Sprawdź adres, dostęp do pliku i połączenie.',
            3: 'Firefox nie może zdekodować tego formatu lub kodeka.',
            4: 'Format albo typ MIME nie jest obsługiwany przez przeglądarkę.'
        };
        status.textContent = (details[code] || 'Nie można odtworzyć tego materiału.') +
            ' Spróbuj MP4 (H.264/AAC), WebM (VP8/VP9/Opus) lub OGG. MKV i część plików MOV mogą wymagać zewnętrznego odtwarzacza.';
    });
    element.addEventListener('loadedmetadata', () => {
        const status = $('playerContainer').querySelector('.player-status');
        if(status) status.textContent = '';
    }, { once:true });
}
function setupHlsPlayer(item, video){
    if(!video) return;
    const url = resolveMediaUrl(item.url);
    const status = $('playerContainer').querySelector('.player-status');
    if(!url){ if(status) status.textContent = 'Nieprawidłowy adres strumienia.'; return; }
    if(video.canPlayType('application/vnd.apple.mpegurl')){
        video.src = url;
        setupMediaError(video, item);
        setupMediaResume(item);
        return;
    }
    const start = () => {
        if(!window.Hls || !window.Hls.isSupported()){
            if(status) status.textContent = 'Ta przeglądarka nie obsługuje HLS bez dodatkowej biblioteki. Sprawdź połączenie z internetem albo otwórz strumień zewnętrznie.';
            return;
        }
        const hls = new window.Hls({ enableWorker:true });
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(window.Hls.Events.MANIFEST_PARSED, () => { if(status) status.textContent = ''; });
        hls.on(window.Hls.Events.ERROR, (_event, data) => {
            if(data && data.fatal && status) status.textContent = 'Nie udało się odtworzyć strumienia HLS. Możliwy problem z adresem, CORS lub dostępnością transmisji.';
        });
        setupMediaError(video, item);
        setupMediaResume(item);
    };
    if(window.Hls){ start(); return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js';
    script.onload = start;
    script.onerror = () => { if(status) status.textContent = 'Nie udało się pobrać biblioteki HLS. Strumienie M3U8 wymagają internetu w tej konfiguracji.'; };
    document.head.appendChild(script);
}
function setupMediaResume(item){
    const vid = $('playerContainer').querySelector('video,audio'); if(!vid) return;
    let progress = {}; try { progress = JSON.parse(localStorage.getItem('omnihub_media_progress')) || {}; } catch(e){}
    const id = itemId(item);
    if(progress[id] && progress[id].pos > 5){ vid.addEventListener('loadedmetadata', () => { try { vid.currentTime = progress[id].pos; } catch(e){} }, { once:true }); }
    let saveInt = setInterval(() => { if(vid.paused) return; progress[id] = { pos: vid.currentTime, dur: vid.duration || 0, ts: Date.now() }; try { localStorage.setItem('omnihub_media_progress', JSON.stringify(progress)); } catch(e){} }, 5000);
    vid.addEventListener('ended', () => { delete progress[id]; try { localStorage.setItem('omnihub_media_progress', JSON.stringify(progress)); } catch(e){}; clearInterval(saveInt); });
}
let localMediaObjectUrl = null;
$('closePlayerModal').addEventListener('click', () => { $('playerModal').style.display = 'none'; const v = $('playerContainer').querySelector('video,audio'); if(v) v.pause?.(); if(localMediaObjectUrl){ URL.revokeObjectURL(localMediaObjectUrl); localMediaObjectUrl = null; } });
$('playerModal').addEventListener('click', e => { if(e.target.id === 'playerModal') e.target.style.display = 'none'; });
document.querySelectorAll('.skin-btn').forEach(b => { b.addEventListener('click', () => { currentPlayerSkin = b.dataset.skin; localStorage.setItem('omnihub_player_skin', currentPlayerSkin); document.querySelectorAll('.skin-btn').forEach(x => x.classList.toggle('active', x.dataset.skin === currentPlayerSkin)); if(currentPlayerItem) openPlayerModal(currentPlayerItem); }); });

// ===== PHOTO LIGHTBOX =====
let photoList = [], photoIndex = 0, photoZoom = 1, photoPanX = 0, photoPanY = 0, photoDragging = false, photoDragStart = null;
function openPhotoLightbox(item, list){ photoList = list || [item]; photoIndex = photoList.findIndex(x => itemId(x) === itemId(item)); if(photoIndex < 0) photoIndex = 0; photoZoom = 1; photoPanX = 0; photoPanY = 0; showPhoto(); $('photoModal').style.display = 'flex'; }
function showPhoto(){
    if(!photoList.length) return;
    const item = photoList[photoIndex];
    const img = $('photoImage');
    $('photoViewport').innerHTML = ''; $('photoViewport').appendChild(img);
    img.style.display = ''; img.style.transform = 'translate(0,0) scale(1)';
    img.src = item.url;
    $('photoCounter').textContent = `${photoIndex+1} / ${photoList.length}`;
    const ext = (item.url.split('.').pop() || '').toUpperCase().split('?')[0];
    $('photoFormat').textContent = ext;
    const unsupported = ['heic','heif','jxl','tiff','tif'].includes(ext.toLowerCase());
    $('photoFormat').style.background = unsupported ? '#f59e0b' : '#22c55e';
    $('photoDownloadBtn').onclick = () => { const a = document.createElement('a'); a.href = item.url; a.download = ''; a.target = '_blank'; a.click(); };
    $('photoExternalBtn').onclick = () => window.open(item.url, '_blank', 'noopener');
    if(unsupported){ img.onerror = () => { img.style.display = 'none'; const vp = $('photoViewport'); vp.innerHTML = `<div class="photo-fallback"><p>⚠️ Format ${ext} nie jest wspierany</p><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" style="color:var(--accent);">${t('player.openExternal')}</a></div>`; }; }
    else { img.onerror = null; }
}
$('closePhotoModal').addEventListener('click', () => { $('photoModal').style.display = 'none'; });
$('photoModal').addEventListener('click', e => { if(e.target.id === 'photoModal') e.target.style.display = 'none'; });
$('photoPrev').addEventListener('click', e => { e.stopPropagation(); if(photoList.length > 1){ photoIndex = (photoIndex - 1 + photoList.length) % photoList.length; showPhoto(); } });
$('photoNext').addEventListener('click', e => { e.stopPropagation(); if(photoList.length > 1){ photoIndex = (photoIndex + 1) % photoList.length; showPhoto(); } });
$('photoZoomIn').addEventListener('click', e => { e.stopPropagation(); photoZoom = Math.min(5, photoZoom + 0.25); $('photoImage').style.transform = `translate(${photoPanX}px, ${photoPanY}px) scale(${photoZoom})`; });
$('photoZoomOut').addEventListener('click', e => { e.stopPropagation(); photoZoom = Math.max(0.5, photoZoom - 0.25); $('photoImage').style.transform = `translate(${photoPanX}px, ${photoPanY}px) scale(${photoZoom})`; });
$('photoZoomReset').addEventListener('click', e => { e.stopPropagation(); photoZoom = 1; photoPanX = 0; photoPanY = 0; $('photoImage').style.transform = 'translate(0,0) scale(1)'; });
$('photoViewport').addEventListener('wheel', e => { e.preventDefault(); photoZoom = Math.max(0.5, Math.min(5, photoZoom + (e.deltaY > 0 ? -0.15 : 0.15))); $('photoImage').style.transform = `translate(${photoPanX}px, ${photoPanY}px) scale(${photoZoom})`; }, { passive:false });
$('photoViewport').addEventListener('mousedown', e => { if(e.button !== 0) return; photoDragging = true; photoDragStart = { x:e.clientX, y:e.clientY, px:photoPanX, py:photoPanY }; });
window.addEventListener('mousemove', e => { if(!photoDragging) return; photoPanX = photoDragStart.px + (e.clientX - photoDragStart.x); photoPanY = photoDragStart.py + (e.clientY - photoDragStart.y); $('photoImage').style.transform = `translate(${photoPanX}px, ${photoPanY}px) scale(${photoZoom})`; });
window.addEventListener('mouseup', () => { photoDragging = false; });

// ===== EKSPORT =====
exportBtn.addEventListener('click', () => { let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e){} downloadBlob(JSON.stringify({ schema_version:SCHEMA_VERSION, custom_data:cd, favorites, order:customOrder, custom_categories:customCategories, custom_tags:customTags, view_counts:viewCounts, ratings, comments, hidden_statics:hiddenStatics, profile, link_cache:linkCheckCache, translations:translationCache, lang:currentLang }, null, 2), `omnihub_backup_${dateStamp()}.json`, 'application/json'); });
exportHtmlBtn.addEventListener('click', () => { const all = getAllItems(); const rows = all.map(it => { const cat = findItemCategory(it); return `<tr><td><a href="${escapeHtml(safeUrl(it.url))}" target="_blank" rel="noopener">${escapeHtml(it.title||'')}</a></td><td>${escapeHtml(catTitle(cat))}</td><td>${escapeHtml(it.badge||'')}</td><td>${escapeHtml(it.description||'')}</td><td>${escapeHtml((it.tags||[]).join(', '))}</td></tr>`; }).join(''); const html = `<!DOCTYPE html><html lang="${currentLang}"><head><meta charset="UTF-8"><title>OmniHub</title><style>body{font-family:system-ui;padding:2rem;background:#f9fafb}table{border-collapse:collapse;width:100%;background:#fff}th,td{border:1px solid #ddd;padding:.5rem;text-align:left;font-size:.9rem}th{background:#f3f4f6}a{color:#0284c7}</style></head><body><h1>OmniHub ${dateStamp()}</h1><table><thead><tr><th>Name</th><th>Category</th><th>Badge</th><th>Description</th><th>Tags</th></tr></thead><tbody>${rows}</tbody></table></body></html>`; downloadBlob(html, `omnihub_export_${dateStamp()}.html`, 'text/html'); });
exportCsvBtn.addEventListener('click', () => { const all = getAllItems(); const esc = s => `"${String(s==null?'':s).replace(/"/g,'""')}"`; let csv = '\uFEFFName,Category,Badge,Tags,URL,Description,Rating,Votes,MyVote,Comments\r\n'; all.forEach(it => { const cat = findItemCategory(it); const r = getRating(itemId(it)); const avg = r.count > 0 ? (r.sum/r.count).toFixed(2) : ''; const cnt = getComments(itemId(it)).length; csv += [it.title||'', catTitle(cat), it.badge||'', (it.tags||[]).join('; '), it.url||'', it.description||'', avg, r.count||0, r.myVote||0, cnt].map(esc).join(',') + '\r\n'; }); downloadBlob(csv, `omnihub_export_${dateStamp()}.csv`, 'text/csv;charset=utf-8'); });
// Export PDF — bezpieczne: przycisk opcjonalny (może nie istnieć w HTML)
(function(){ const _pdfBtn = document.getElementById('exportPdfBtn'); if(_pdfBtn) _pdfBtn.addEventListener('click', () => window.print()); })();

function applyImportData(imp, reload){
    if(imp.custom_data && typeof imp.custom_data === 'object'){ const cl = {}; for(const [k, v] of Object.entries(imp.custom_data)) if(Array.isArray(v)) cl[k] = v.filter(it => it && it.title && it.url); localStorage.setItem('omnihub_custom_data', JSON.stringify(cl)); }
    if(Array.isArray(imp.favorites)){ favorites = imp.favorites.filter(x => x && x.title && x.url); saveFavs(); }
    if(imp.order && typeof imp.order === 'object'){ customOrder = imp.order; saveOrder(); }
    if(imp.custom_categories && typeof imp.custom_categories === 'object'){ customCategories = imp.custom_categories; saveCategories(); }
    if(Array.isArray(imp.custom_tags)){ customTags = imp.custom_tags; saveCustomTags(); }
    if(imp.view_counts){ viewCounts = imp.view_counts; saveViewCounts(); }
    if(imp.ratings){ ratings = imp.ratings; saveRatings(); }
    if(imp.comments){ comments = imp.comments; saveComments(); }
    if(Array.isArray(imp.hidden_statics)){ hiddenStatics = imp.hidden_statics; saveHiddenStatics(); }
    if(imp.profile){ profile = imp.profile; saveProfile(); }
    if(imp.link_cache){ linkCheckCache = imp.link_cache; saveLinkCache(); }
    if(imp.translations){ translationCache = imp.translations; saveTranslationCache(); }
    if(imp.lang && UI[imp.lang]){ localStorage.setItem('omnihub_lang', imp.lang); }
    if(reload){ alert(t('alert.imported')); location.reload(); }
}
importFile.addEventListener('change', e => { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.readAsText(f, 'UTF-8'); r.onload = ev => { try { applyImportData(JSON.parse(ev.target.result), true); } catch(err){ alert(t('alert.badJson')); } }; });
importDataJson.addEventListener('change', e => { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.readAsText(f, 'UTF-8'); r.onload = ev => { try { const d = JSON.parse(ev.target.result); let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e2){} let added = 0; Object.keys(d).forEach(cat => { if(!Array.isArray(d[cat])) return; if(!allData[cat]) allData[cat] = []; if(!cd[cat]) cd[cat] = []; d[cat].forEach(item => { if(!item || !item.title || !item.url) return; if(allData[cat].some(e2 => e2.title === item.title && e2.url === item.url)) return; const it = { ...item, custom:true, createdAt: item.createdAt || Date.now() - Math.random()*10000 }; ensureItemFields(it); allData[cat].push(it); cd[cat].push(it); added++; }); }); saveCustomData(cd); updateCategorySelect(); renderSidebar(); render(); alert(`${t('toast.added')} ${added}`); } catch(err){ alert(`${t('alert.dataJson')} ${err.message}`); } }; });
function parseCsvLine(line){ const out = []; let cur = '', inQ = false; for(let i = 0; i < line.length; i++){ const c = line[i]; if(c === '"'){ if(inQ && line[i+1] === '"'){ cur += '"'; i++; } else inQ = !inQ; } else if(c === ',' && !inQ){ out.push(cur); cur = ''; } else cur += c; } out.push(cur); return out; }
importCsv.addEventListener('change', e => { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.readAsText(f, 'UTF-8'); r.onload = ev => { try { const text = ev.target.result.replace(/^\uFEFF/,''); const lines = text.split(/\r?\n/).filter(l => l.trim()); if(lines.length < 2) return; let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e2){} let added = 0; for(let i = 1; i < lines.length; i++){ const cols = parseCsvLine(lines[i]); const [title, catName, badge, tagsStr, url, description] = cols; if(!title || !url) continue; const cat = BUILTIN.concat(Object.keys(customCategories)).find(k => catTitle(k) === catName) || 'ai'; if(!allData[cat]) allData[cat] = []; if(allData[cat].some(e2 => e2.title === title && e2.url === url)) continue; if(!cd[cat]) cd[cat] = []; const item = { title, url, badge:badge||'Zasób', description:description||'', tags:tagsStr ? tagsStr.split(';').map(x => x.trim()).filter(Boolean) : [], thumbnail:'', notes:'', custom:true, createdAt:Date.now() - i*100, history:[] }; allData[cat].push(item); cd[cat].push(item); added++; item.tags.forEach(x => { if(!customTags.includes(x)) customTags.push(x); }); } saveCustomData(cd); saveCustomTags(); updateCategorySelect(); renderSidebar(); render(); alert(`${t('toast.added')} ${added}`); } catch(err){ alert(`${t('alert.badCsv')} ${err.message}`); } }; });
importBookmarks.addEventListener('change', e => { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.readAsText(f, 'UTF-8'); r.onload = ev => { try { const doc = new DOMParser().parseFromString(ev.target.result, 'text/html'); const links = doc.querySelectorAll('a[href]'); if(!links.length) return; const target = prompt(`Category: ${BUILTIN.join(', ')}`, 'ai'); if(!target) return; let catKey = target.trim(); if(!allData[catKey] && !customCategories[catKey]){ const newKey = 'custom_' + Date.now(); customCategories[newKey] = { title:catKey, icon:'📁', color:'#38bdf8' }; saveCategories(); catKey = newKey; } pushUndo('Import bookmarks'); let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e2){} if(!cd[catKey]) cd[catKey] = []; if(!allData[catKey]) allData[catKey] = []; let added = 0, tm = Date.now(); links.forEach(a => { const title = (a.textContent||'').trim() || a.href; const url = a.href; if(!url.startsWith('http')) return; if(allData[catKey].some(x => x.title === title && x.url === url)) return; const item = { title, url, description:'', badge:'Bookmark', tags:[], thumbnail:'', notes:'', custom:true, createdAt:tm--, history:[] }; allData[catKey].push(item); cd[catKey].push(item); added++; }); saveCustomData(cd); updateCategorySelect(); renderSidebar(); render(); alert(`${t('toast.added')} ${added}`); } catch(err){ console.error(err); } }; });

syncFileBtn.addEventListener('click', () => { if(syncInterval){ clearInterval(syncInterval); syncInterval = null; showSimpleToast('Stopped'); syncFileBtn.textContent = t('btn.syncFile'); } else { syncInterval = setInterval(refreshDataJson, 10000); syncFileBtn.textContent = t('btn.stopSync'); showSimpleToast('Auto-refresh 10s'); refreshDataJson(); } });
async function refreshDataJson(){ try { const r = await fetch('data.json?t=' + Date.now(), { cache:'no-store' }); if(!r.ok) return; const data = await r.json(); let added = 0; Object.keys(data).forEach(cat => { if(!Array.isArray(data[cat])) return; if(!allData[cat]) allData[cat] = []; data[cat].forEach(item => { if(!item || !item.title || !item.url) return; if(hiddenStatics.includes(itemId(item))) return; if(!allData[cat].some(e2 => e2.title === item.title && e2.url === item.url)){ if(!item.createdAt) item.createdAt = -Date.now()/1000; ensureItemFields(item); allData[cat].push(item); added++; } }); }); if(added > 0){ renderSidebar(); render(); showSimpleToast(`${t('toast.added')} ${added}`); } } catch(e){} }

// ===== STATYSTYKI / KOSZ / HISTORIA / MOTYW / PROFIL =====
statsBtn.addEventListener('click', () => {
    const all = getAllItems();
    const totalViews = Object.values(viewCounts).reduce((s, v) => s + (v.count||0), 0);
    const totalVotes = Object.values(ratings).reduce((s, r) => s + (r.count||0), 0);
    const perCat = {}; all.forEach(it => { const c = findItemCategory(it); perCat[c] = (perCat[c]||0) + 1; });
    const topRated = all.map(it => ({ ...it, _avg:getRatingAvg(itemId(it)), _cnt:getRating(itemId(it)).count })).filter(x => x._cnt > 0).sort((a, b) => b._avg - a._avg).slice(0, 5);
    let html = `<div class="stat-row"><span>Entries</span><strong>${all.length}</strong></div><div class="stat-row"><span>Favorites</span><strong>${favorites.length}</strong></div><div class="stat-row"><span>Trash</span><strong>${trash.length}</strong></div><div class="stat-row"><span>Views</span><strong>${totalViews}</strong></div><div class="stat-row"><span>Votes</span><strong>${totalVotes}</strong></div><h3 style="margin:1rem 0 .5rem;">Top 5 rated</h3>`;
    if(!topRated.length) html += `<p style="color:var(--text-muted);font-size:.85rem;">—</p>`;
    topRated.forEach(it => { html += `<div class="stat-row"><span>${escapeHtml(it.title||'')}</span><span>★ ${it._avg.toFixed(1)} (${it._cnt})</span></div>`; });
    html += `<h3 style="margin:1rem 0 .5rem;">Per category</h3>`;
    Object.entries(perCat).sort((a, b) => b[1]-a[1]).forEach(([k, n]) => { html += `<div class="stat-row"><span>${escapeHtml(catTitle(k))}</span><strong>${n}</strong></div>`; });
    $('statsContent').innerHTML = html; $('statsModal').style.display = 'flex';
});
$('closeStatsModal').addEventListener('click', () => { $('statsModal').style.display = 'none'; });
$('statsModal').addEventListener('click', e => { if(e.target.id === 'statsModal') e.target.style.display = 'none'; });

trashBtn.addEventListener('click', () => {
    const c = $('trashContent'); updateTrashCount();
    if(!trash.length) c.innerHTML = '<p style="color:var(--text-muted);">—</p>';
    else {
        c.innerHTML = trash.map((tr, i) => { const cat = tr.category || 'ai'; return `<div class="trash-item"><div><strong>${escapeHtml(tr.item.title||'')}</strong><div style="font-size:.75rem;color:var(--text-muted);">${escapeHtml(catTitle(cat))} · ${formatDate(tr.deletedAt)}</div></div><div class="trash-actions"><button class="restore" data-idx="${i}">${t('btn.restore')}</button><button class="purge" data-idx="${i}">🗑️</button></div></div>`; }).join('');
        c.querySelectorAll('.restore').forEach(b => b.addEventListener('click', () => restoreFromTrash(+b.dataset.idx)));
        c.querySelectorAll('.purge').forEach(b => b.addEventListener('click', () => { if(!confirm(t('confirm.purge'))) return; trash.splice(+b.dataset.idx, 1); saveTrash(); updateTrashCount(); $('trashModal').style.display = 'none'; }));
    }
    $('trashModal').style.display = 'flex';
});
$('closeTrashModal').addEventListener('click', () => { $('trashModal').style.display = 'none'; });
$('trashModal').addEventListener('click', e => { if(e.target.id === 'trashModal') e.target.style.display = 'none'; });
function restoreFromTrash(idx){ const entry = trash[idx]; if(!entry) return; pushUndo('Restore'); const item = entry.item, cat = entry.category; if(hiddenStatics.length){ const key = item._originalId || itemId(item); hiddenStatics = hiddenStatics.filter(k => k !== key); saveHiddenStatics(); } if(item.custom){ let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e){} if(!cd[cat]) cd[cat] = []; cd[cat].push(item); saveCustomData(cd); } if(!allData[cat]) allData[cat] = []; allData[cat].push(item); trash.splice(idx, 1); saveTrash(); updateTrashCount(); $('trashModal').style.display = 'none'; render(); showSimpleToast(t('toast.restored')); }

$('closeHistoryModal').addEventListener('click', () => { $('historyModal').style.display = 'none'; });
$('historyModal').addEventListener('click', e => { if(e.target.id === 'historyModal') e.target.style.display = 'none'; });
function showHistory(title, url){ const item = findItem(title, url); if(!item) return; const c = $('historyContent'); if(!item.history || !item.history.length) c.innerHTML = '<p style="color:var(--text-muted);">—</p>'; else c.innerHTML = item.history.slice().reverse().map(h => { const date = new Date(h.timestamp).toLocaleString(currentLang); const action = h.action === 'created' ? 'Created' : h.action === 'edited' ? 'Edited' : h.action; return `<div class="history-entry"><strong>${escapeHtml(action)}</strong><small>${date}</small></div>`; }).join(''); $('historyModal').style.display = 'flex'; }

themeCustomBtn.addEventListener('click', () => { const tm = customTheme || {}; const d = { bgMain:'#0f172a', bgHeader:'#1e293b', bgCard:'#1e293b', border:'#334155', text:'#f8fafc', accent:'#38bdf8' }; $('thBgMain').value = tm.bgMain || d.bgMain; $('thBgHeader').value = tm.bgHeader || d.bgHeader; $('thBgCard').value = tm.bgCard || d.bgCard; $('thBorder').value = tm.border || d.border; $('thText').value = tm.text || d.text; $('thAccent').value = tm.accent || d.accent; $('themeModal').style.display = 'flex'; });
$('closeThemeModal').addEventListener('click', () => { $('themeModal').style.display = 'none'; });
$('themeModal').addEventListener('click', e => { if(e.target.id === 'themeModal') e.target.style.display = 'none'; });
$('saveThemeBtn').addEventListener('click', () => { customTheme = { bgMain:$('thBgMain').value, bgHeader:$('thBgHeader').value, bgCard:$('thBgCard').value, border:$('thBorder').value, text:$('thText').value, accent:$('thAccent').value }; saveTheme(); applyCustomThemeVars(); $('themeModal').style.display = 'none'; showSimpleToast(t('btn.save')); });
$('resetThemeBtn').addEventListener('click', () => { customTheme = null; saveTheme(); const root = document.documentElement; ['--bg-main','--bg-header','--bg-card','--border-color','--text-main','--accent'].forEach(v => root.style.removeProperty(v)); $('themeModal').style.display = 'none'; });

$('profileBtn').addEventListener('click', () => { $('profileName').value = profile.name || ''; $('profileModal').style.display = 'flex'; });
$('closeProfileModal').addEventListener('click', () => { $('profileModal').style.display = 'none'; });
$('profileModal').addEventListener('click', e => { if(e.target.id === 'profileModal') e.target.style.display = 'none'; });
$('saveProfileBtn').addEventListener('click', () => { profile.name = $('profileName').value.trim() || 'Gość'; saveProfile(); $('profileModal').style.display = 'none'; showSimpleToast(profile.name); });

shareUrlBtn.addEventListener('click', () => { try { const data = btoa(encodeURIComponent(JSON.stringify({ custom_categories: customCategories, custom_tags: customTags }))); const url = location.origin + location.pathname + '#cfg=' + data; if(navigator.share) navigator.share({ title:'OmniHub', url }).catch(() => {}); else navigator.clipboard.writeText(url).then(() => showSimpleToast(t('toast.copied'))).catch(() => showSimpleToast(t('toast.copyFail'))); } catch(e){ showSimpleToast(t('toast.copyFail')); } });

// RESET APP
const resetAppBtn = $('resetAppBtn');
if(resetAppBtn) resetAppBtn.addEventListener('click', () => {
    if(!confirm('⚠️ To usunie WSZYSTKIE dane z tej przeglądarki:\n- Twoje wpisy\n- Ulubione\n- Oceny\n- Komentarze\n- Ustawienia\n\nZalecane: najpierw Eksport JSON.\n\nKontynuować?')) return;
    if(!confirm('Na pewno? Tej operacji nie można cofnąć.')) return;
    const keys = Object.keys(localStorage).filter(k => k.startsWith('omnihub_'));
    keys.forEach(k => localStorage.removeItem(k));
    sessionStorage.clear();
    if('caches' in window) caches.keys().then(names => names.forEach(n => caches.delete(n)));
    alert('Zresetowano. Strona zostanie przeładowana.');
    location.reload();
});

presentationBtn.addEventListener('click', () => { presentationMode = !presentationMode; document.body.classList.toggle('presentation', presentationMode); presentationBtn.textContent = presentationMode ? '👁️' : '🎭'; });

$('helpBtn').addEventListener('click', () => { renderHelp(); $('helpModal').style.display = 'flex'; });
$('closeHelpModal').addEventListener('click', () => { $('helpModal').style.display = 'none'; });
$('helpModal').addEventListener('click', e => { if(e.target.id === 'helpModal') e.target.style.display = 'none'; });
function renderHelp(){ $('helpContent').innerHTML = `<h3 style="margin-bottom:.75rem;">${t('help.keys')}</h3><ul style="list-style:none;padding:0;line-height:2.2;"><li><kbd>/</kbd> search</li><li><kbd>Shift</kbd>+<kbd>?</kbd> help</li><li><kbd>1</kbd>-<kbd>9</kbd> categories</li><li><kbd>N</kbd> new</li><li><kbd>F</kbd> favorites</li><li><kbd>P</kbd> presentation</li><li><kbd>F1</kbd> help</li><li><kbd>Ctrl</kbd>+<kbd>Z</kbd> undo</li><li><kbd>Esc</kbd> close</li></ul><h3 style="margin-top:1.5rem;margin-bottom:.5rem;">${t('help.search')}</h3><p style="font-size:.9rem;color:var(--text-muted);line-height:1.7;"><code>badge:AI</code> · <code>tag:free</code> · <code>cat:films</code> · <code>is:fav</code> · <code>title:git</code></p>`; }

function openDetailModal(item){
    currentDetailItem = item;
    const cat = findItemCategory(item);
    const id = itemId(item);
    const isFav = favorites.some(f => f.title === item.title && f.url === item.url);
    const rating = getRating(id);
    const avg = rating.count > 0 ? rating.sum/rating.count : 0;
    const myComments = getComments(id);
    const faviconSrc = getFaviconUrl(item.url);
    const safeTitle = escapeHtml(item.title||'');
    const safeBadge = escapeHtml(item.badge||'');
    const safeHref = escapeHtml(safeUrl(item.url));
    const safeDesc = renderMarkdown(getItemDesc(item));
    const media = detectMedia(item.url);
    let mediaBtn = '';
    if(media && (media.type === 'video' || media.type === 'audio')) mediaBtn = `<button class="btn-secondary" data-action="play">${t('detail.play')}</button>`;
    else if(media && media.type === 'image') mediaBtn = `<button class="btn-secondary" data-action="viewphoto">${t('detail.view')}</button>`;
    let tagsHtml = ''; if(item.tags && item.tags.length) tagsHtml = `<div class="detail-tags">${item.tags.map(x => `<span class="card-tag" data-tag="${escapeHtml(x)}">${escapeHtml(x)}</span>`).join('')}</div>`;
    const commentsHtml = renderCommentsTree(id);
    detailContent.innerHTML = `
        <div class="detail-header">${faviconSrc ? `<img class="card-favicon" src="${escapeHtml(faviconSrc)}" alt="">` : ''}<h2>${safeTitle}</h2><span class="badge">${safeBadge}</span>${item.override ? '<span class="override-badge">✏️</span>' : ''}${item.isPrivate ? '<span class="private-badge">🔒</span>' : ''}${media ? `<span class="media-badge">${mediaLabel(media)}</span>` : ''}</div>
        <div class="detail-category">📁 ${escapeHtml(catTitle(cat))}</div>
        <div class="detail-rating"><div class="stars-interactive" data-action="rate">${renderStars(avg, rating.myVote, true)}</div><span class="my-vote-info">${rating.count > 0 ? `${avg.toFixed(1)} ★ (${rating.count})` : t('detail.noRating')}</span></div>
        <div class="detail-actions">${mediaBtn}<a href="${safeHref}" target="_blank" rel="noopener noreferrer" class="btn" data-action="open">${t('detail.open')}</a><button class="btn-secondary ${isFav?'active':''}" data-action="fav">${isFav ? t('detail.removeFav') : t('detail.addFav')}</button><button class="btn-secondary" data-action="copy">${t('detail.copyUrl')}</button><button class="btn-secondary" data-action="edit">${t('detail.edit')}</button><button class="btn-secondary" data-action="delete">${t('detail.delete')}</button></div>
        <div class="detail-description">${safeDesc || '<em style="color:var(--text-muted);">—</em>'}</div>
        ${tagsHtml}
        ${item.notes ? `<div class="detail-notes">📝 ${escapeHtml(item.notes)}</div>` : ''}
        <div class="comments-section"><h3>${t('detail.comments')} <span class="comments-count">(${myComments.length})</span></h3><div class="comment-list">${commentsHtml}</div><div class="comment-add"><input type="text" class="comment-author" placeholder="${t('detail.authorPlaceholder')}" maxlength="50"><textarea class="comment-text" placeholder="${t('detail.commentPlaceholder')}" maxlength="500"></textarea><button class="btn comment-submit">${t('detail.addComment')}</button></div></div>`;
    detailModal.style.display = 'flex';
    detailContent.dataset.itemId = id;
}
function closeDetailModal(){ detailModal.style.display = 'none'; currentDetailItem = null; }
$('closeDetailModal').addEventListener('click', closeDetailModal);
detailModal.addEventListener('click', e => { if(e.target === detailModal) closeDetailModal(); });
function renderCommentsTree(id){
    const all = getComments(id);
    if(!all.length) return `<div class="comment-empty">${t('detail.noComments')}</div>`;
    const roots = all.filter(c => !c.parentId);
    const replies = p => all.filter(c => c.parentId === p);
    const renderOne = (c, depth) => {
        const sub = replies(c.id);
        const subHtml = sub.length ? `<div class="comment-replies">${sub.map(s => renderOne(s, depth+1)).join('')}</div>` : '';
        return `<div class="comment ${c.resolved?'resolved':''}" data-comment-id="${escapeHtml(c.id)}"><div class="comment-meta"><span><span class="comment-author-badge">${escapeHtml(c.author||'Anon')}</span> · ${formatDateTime(c.ts)}${c.resolved?' · ✅':''}</span><button class="comment-action comment-delete">🗑️</button></div><div class="comment-text">${escapeHtml(c.text)}</div><div class="comment-actions"><button class="comment-action" data-reaction="up">👍 ${c.reactions?.up||0}</button><button class="comment-action" data-reaction="down">👎 ${c.reactions?.down||0}</button><button class="comment-action reply-btn">${t('detail.reply')}</button>${!depth?`<button class="comment-action resolved-toggle ${c.resolved?'active':''}">✅</button>`:''}</div><div class="comment-reply-form" style="display:none;"><textarea maxlength="300"></textarea><button class="btn comment-reply-submit">→</button></div>${subHtml}</div>`;
    };
    return roots.map(c => renderOne(c, 0)).join('');
}
detailContent.addEventListener('click', e => {
    if(!currentDetailItem) return;
    const item = currentDetailItem;
    const star = e.target.closest('.star[data-vote]');
    if(star){ setVote(item, parseInt(star.dataset.vote)); render(); openDetailModal(item); return; }
    const cDel = e.target.closest('.comment-delete');
    if(cDel){ const cid = cDel.closest('.comment')?.dataset.commentId; if(cid && confirm(t('confirm.delete'))){ deleteComment(item, cid); openDetailModal(item); } return; }
    if(e.target.closest('.comment-submit')){ const author = detailContent.querySelector('.comment-author')?.value.trim() || profile.name || 'Anon'; const text = detailContent.querySelector('.comment-text')?.value.trim(); if(!text) return; addComment(item, author, text); openDetailModal(item); return; }
    if(e.target.closest('.reply-btn')){ const form = e.target.closest('.comment')?.querySelector('.comment-reply-form'); if(form) form.style.display = form.style.display === 'none' ? 'flex' : 'none'; return; }
    const replySubmit = e.target.closest('.comment-reply-submit');
    if(replySubmit){ const ce = replySubmit.closest('.comment'); const pid = ce?.dataset.commentId; const txt = ce.querySelector('.comment-reply-form textarea')?.value.trim(); if(txt && pid){ addComment(item, profile.name || 'Anon', txt, pid); openDetailModal(item); } return; }
    const reactBtn = e.target.closest('[data-reaction]');
    if(reactBtn){ const cid = reactBtn.closest('.comment')?.dataset.commentId; const rn = reactBtn.dataset.reaction; const list = comments[itemId(item)] || []; const tg = list.find(c => c.id === cid); if(tg){ if(!tg.reactions) tg.reactions = {up:0,down:0}; tg.reactions[rn] = (tg.reactions[rn]||0)+1; saveComments(); openDetailModal(item); } return; }
    const resolveBtn = e.target.closest('.resolved-toggle');
    if(resolveBtn){ const cid = resolveBtn.closest('.comment')?.dataset.commentId; const list = comments[itemId(item)] || []; const tg = list.find(c => c.id === cid); if(tg){ tg.resolved = !tg.resolved; saveComments(); openDetailModal(item); } return; }
    const tagEl = e.target.closest('.card-tag');
    if(tagEl){ const tg = tagEl.dataset.tag; if(tg){ if(!activeTags.includes(tg)) activeTags.push(tg); currentPage = 1; render(); closeDetailModal(); } return; }
    const actionEl = e.target.closest('[data-action]');
    if(!actionEl) return;
    const action = actionEl.dataset.action;
    if(action === 'play'){ closeDetailModal(); openPlayerModal(item); return; }
    if(action === 'viewphoto'){ closeDetailModal(); openPhotoLightbox(item); return; }
    if(action === 'open'){ const id = itemId(item); if(!viewCounts[id]) viewCounts[id] = { count:0, lastViewedAt:0 }; viewCounts[id].count++; viewCounts[id].lastViewedAt = Date.now(); saveViewCounts(); return; }
    if(action === 'fav'){ const idx = favorites.findIndex(f => f.title === item.title && f.url === item.url); if(idx > -1) favorites.splice(idx, 1); else favorites.push({ title:item.title, url:item.url, badge:item.badge, description:item.description, custom:item.custom, override:item.override, _originalId:item._originalId, createdAt:item.createdAt || Date.now(), tags:item.tags || [], thumbnail:item.thumbnail || '', folder:null }); saveFavs(); render(); openDetailModal(item); return; }
    if(action === 'copy'){ navigator.clipboard.writeText(item.url).then(() => showSimpleToast(t('toast.copied'))).catch(() => showSimpleToast(t('toast.copyFail'))); return; }
    if(action === 'edit'){ const cat = findItemCategory(item); closeDetailModal(); openEditModal(item.title, item.url, item.badge, item.description, cat, item.tags, item.thumbnail, item.notes, item.isPrivate); return; }
    if(action === 'delete'){ if(confirm(t('confirm.delete'))){ deleteItem(item.title, item.url); closeDetailModal(); } return; }
});

// ===== DRAG / CARD CLICKS =====
function handleDrop(fromId, toId){ if(currentSort !== 'default' || currentView.type !== 'category' || currentView.category === 'all') return; const key = currentView.category; pushUndo('Reorder'); if(key === 'favorites'){ const fi = favorites.findIndex(i => itemId(i) === fromId); const ti = favorites.findIndex(i => itemId(i) === toId); if(fi<0||ti<0) return; const [m] = favorites.splice(fi,1); favorites.splice(ti,0,m); saveFavs(); } else { const ord = applyCustomOrder(key, [...(allData[key]||[])]); const fi = ord.findIndex(i => itemId(i) === fromId); const ti = ord.findIndex(i => itemId(i) === toId); if(fi<0||ti<0) return; const [m] = ord.splice(fi,1); ord.splice(ti,0,m); customOrder[key] = ord.map(itemId); saveOrder(); } render(); }
cardsContainer.addEventListener('dragstart', e => { const c = e.target.closest('.card'); if(!c || c.getAttribute('draggable') !== 'true'){ e.preventDefault(); return; } draggedItemId = c.dataset.itemId; c.classList.add('dragging'); if(e.dataTransfer){ e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', draggedItemId); } catch(err){} } });
cardsContainer.addEventListener('dragend', () => { document.querySelectorAll('.card.dragging').forEach(c => c.classList.remove('dragging')); document.querySelectorAll('.card.drag-over').forEach(c => c.classList.remove('drag-over')); draggedItemId = null; });
cardsContainer.addEventListener('dragover', e => { if(!draggedItemId) return; const c = e.target.closest('.card'); if(!c || c.getAttribute('draggable') !== 'true' || c.dataset.itemId === draggedItemId) return; e.preventDefault(); if(e.dataTransfer) e.dataTransfer.dropEffect = 'move'; document.querySelectorAll('.card.drag-over').forEach(x => x.classList.remove('drag-over')); c.classList.add('drag-over'); });
cardsContainer.addEventListener('dragleave', e => { const c = e.target.closest('.card'); if(c) c.classList.remove('drag-over'); });
cardsContainer.addEventListener('drop', e => { const c = e.target.closest('.card'); if(!c || !draggedItemId || c.dataset.itemId === draggedItemId || c.getAttribute('draggable') !== 'true') return; e.preventDefault(); handleDrop(draggedItemId, c.dataset.itemId); document.querySelectorAll('.card.drag-over').forEach(x => x.classList.remove('drag-over')); });

cardsContainer.addEventListener('click', e => {
    const pageBtn = e.target.closest('.page-btn');
    if(pageBtn){ const p = parseInt(pageBtn.dataset.page, 10); currentPage = (Number.isFinite(p) && p >= 1) ? p : 1; render(); window.scrollTo({ top:0, behavior:'smooth' }); return; }
    const sortCol = e.target.closest('[data-sort-col]');
    if(sortCol){ const f = sortCol.dataset.sortCol; if(f === 'title') currentSort = currentSort === 'title-asc' ? 'title-desc' : 'title-asc'; else if(f === 'badge') currentSort = 'badge-asc'; else if(f === 'date') currentSort = currentSort === 'newest' ? 'oldest' : 'newest'; sortSelect.value = currentSort; currentPage = 1; render(); return; }
    const badgeEl = e.target.closest('.badge, .card-tag');
    if(badgeEl){ const txt = badgeEl.dataset.badge || badgeEl.dataset.tag; if(txt){ if(!activeTags.includes(txt)) activeTags.push(txt); currentPage = 1; render(); } return; }
    const delBtn = e.target.closest('.delete-btn');
    if(delBtn){ if(confirm(t('confirm.delete'))) deleteItem(delBtn.dataset.title, delBtn.dataset.url); return; }
    const editBtn = e.target.closest('.edit-btn');
    if(editBtn){ const tagsStr = editBtn.dataset.tags || ''; openEditModal(editBtn.dataset.title, editBtn.dataset.url, editBtn.dataset.badge, editBtn.dataset.desc, editBtn.dataset.cat, tagsStr ? tagsStr.split('||') : [], editBtn.dataset.thumbnail, editBtn.dataset.notes, editBtn.dataset.private === 'true'); return; }
    const playBtn = e.target.closest('.play-btn');
    if(playBtn){ const item = findItemById(playBtn.dataset.itemId); if(item) openPlayerModal(item); return; }
    const copyBtn = e.target.closest('.copy-btn');
    if(copyBtn){ navigator.clipboard.writeText(copyBtn.dataset.url).then(() => showSimpleToast(t('toast.copied'))).catch(() => showSimpleToast(t('toast.copyFail'))); return; }
    const copyJsonBtn = e.target.closest('.copy-json-btn');
    if(copyJsonBtn){ const item = findItem(copyJsonBtn.dataset.title, copyJsonBtn.dataset.url); if(item){ const cat = findItemCategory(item); navigator.clipboard.writeText(JSON.stringify({ ...item, category: cat }, null, 2)).then(() => showSimpleToast(t('toast.copied'))); } return; }
    const favBtn = e.target.closest('.fav-btn');
    if(favBtn){ const t2 = favBtn.dataset.title, u = favBtn.dataset.url; const idx = favorites.findIndex(f => f.title === t2 && f.url === u); if(idx > -1) favorites.splice(idx, 1); else { const src = findItem(t2, u); favorites.push({ title:t2, url:u, badge:favBtn.dataset.badge, description:favBtn.dataset.desc, custom:favBtn.dataset.custom === 'true', createdAt:src?.createdAt || Date.now(), tags:src?.tags || [], thumbnail:src?.thumbnail || '', folder:null }); } saveFavs(); render(); return; }
    const openLink = e.target.closest('a.btn[target="_blank"]');
    if(openLink){ const t2 = openLink.dataset.title, u = openLink.dataset.url; if(t2 && u){ const id = `${t2}::${u}`; if(!viewCounts[id]) viewCounts[id] = { count:0, lastViewedAt:0 }; viewCounts[id].count++; viewCounts[id].lastViewedAt = Date.now(); saveViewCounts(); } return; }
    const card = e.target.closest('.card');
    if(card){ const item = findItemById(card.dataset.itemId); if(item) openDetailModal(item); }
});
cardsContainer.addEventListener('error', e => { if(e.target && e.target.tagName === 'IMG' && (e.target.classList.contains('card-favicon') || e.target.classList.contains('card-thumbnail'))) e.target.style.visibility = 'hidden'; }, true);

function findItem(t2, u){ for(const c of Object.keys(allData)){ if(Array.isArray(allData[c])){ const f = allData[c].find(i => i.title === t2 && i.url === u); if(f) return f; } } return null; }
function findItemById(id){ for(const c of Object.keys(allData)){ if(Array.isArray(allData[c])){ const f = allData[c].find(i => itemId(i) === id); if(f) return f; } } return null; }
function findItemCategory(item){ for(const [k, list] of Object.entries(allData)){ if(Array.isArray(list) && list.some(i => i.title === item.title && i.url === item.url)) return k; } return 'ai'; }
function getAllItems(){ const out = [], seen = new Set(); Object.keys(allData).forEach(c => { if(Array.isArray(allData[c])) allData[c].forEach(i => { const id = itemId(i); if(!seen.has(id)){ seen.add(id); out.push(i); } }); }); return out; }
function deleteItem(title, url){ const item = findItem(title, url); if(!item) return; const cat = findItemCategory(item); pushUndo(`${t('toast.deleted')} ${title}`); trash.unshift({ item:JSON.parse(JSON.stringify(item)), category:cat, deletedAt:Date.now() }); saveTrash(); updateTrashCount(); Object.keys(allData).forEach(c => { if(Array.isArray(allData[c])) allData[c] = allData[c].filter(i => !(i.title === title && i.url === url)); }); let cd = {}; try { cd = JSON.parse(localStorage.getItem('omnihub_custom_data')) || {}; } catch(e){} Object.keys(cd).forEach(c => { if(Array.isArray(cd[c])){ cd[c] = cd[c].filter(i => !(i.title === title && i.url === url)); if(!cd[c].length) delete cd[c]; } }); saveCustomData(cd); if(!item.custom || item.override){ const key = item._originalId || itemId(item); if(!hiddenStatics.includes(key)){ hiddenStatics.push(key); saveHiddenStatics(); } } favorites = favorites.filter(f => !(f.title === title && f.url === url)); saveFavs(); render(); showUndoToast(`${t('toast.deleted')} "${title}"`, () => doUndo()); }

function applyCustomOrder(cat, items){ const ord = customOrder[cat]; if(!ord || !ord.length) return items; const map = new Map(ord.map((id, i) => [id, i])); return [...items].sort((a, b) => { const ai = map.has(itemId(a)) ? map.get(itemId(a)) : Infinity; const bi = map.has(itemId(b)) ? map.get(itemId(b)) : Infinity; return ai - bi; }); }
function sortByCreatedDesc(items){ return [...items].sort((a, b) => { const at = a.createdAt||0, bt = b.createdAt||0; if(bt !== at) return bt - at; return (a.title||'').localeCompare(b.title||'', currentLang, { sensitivity:'base' }); }); }
function sortByCreatedAsc(items){ return [...items].sort((a, b) => { const at = a.createdAt||0, bt = b.createdAt||0; if(at !== bt) return at - bt; return (a.title||'').localeCompare(b.title||'', currentLang, { sensitivity:'base' }); }); }
function applySort(items){
    if(currentSort === 'default'){ if(currentView.type === 'category' && currentView.category === 'all') return sortByCreatedDesc(items); return items; }
    switch(currentSort){
        case 'rating-desc': return [...items].sort((a, b) => getRatingAvg(itemId(b)) - getRatingAvg(itemId(a)));
        case 'rating-asc': return [...items].sort((a, b) => getRatingAvg(itemId(a)) - getRatingAvg(itemId(b)));
        case 'comments-desc': return [...items].sort((a, b) => getComments(itemId(b)).length - getComments(itemId(a)).length);
        case 'title-asc': return [...items].sort((a, b) => (a.title||'').localeCompare(b.title||'', currentLang, { sensitivity:'base' }));
        case 'title-desc': return [...items].sort((a, b) => (b.title||'').localeCompare(a.title||'', currentLang, { sensitivity:'base' }));
        case 'badge-asc': return [...items].sort((a, b) => (a.badge||'').localeCompare(b.badge||'', currentLang, { sensitivity:'base' }));
        case 'open-source': return [...items].sort((a, b) => {
            const rank = item => {
                const badge = String(item.badge || '').toLowerCase();
                if(badge === 'open source') return 0;
                if(badge === 'open access') return 1;
                if(badge.includes('repozytoria github')) return 2;
                if(badge.includes('darm') || badge.includes('free')) return 3;
                return 4;
            };
            return rank(a) - rank(b) || (a.title||'').localeCompare(b.title||'', currentLang, { sensitivity:'base' });
        });
        case 'newest': return sortByCreatedDesc(items);
        case 'oldest': return sortByCreatedAsc(items);
        case 'recent': return [...items].sort((a, b) => (viewCounts[itemId(b)]?.lastViewedAt||0) - (viewCounts[itemId(a)]?.lastViewedAt||0));
        case 'frequent': return [...items].sort((a, b) => (viewCounts[itemId(b)]?.count||0) - (viewCounts[itemId(a)]?.count||0));
        default: return items;
    }
}
function getCurrentItems(){
    let items;
    const isAllOrSearch = (currentView.type === 'category' && currentView.category === 'all') || currentView.type === 'search';
    if(activeTags.length > 0){ items = getAllItems().filter(it => { if(isAllOrSearch && it.isPrivate) return false; const tags = [it.badge, ...(it.tags||[])].filter(Boolean).map(x => String(x).toLowerCase()); return activeTags.every(x => tags.includes(String(x).toLowerCase())); }); }
    else if(currentView.type === 'search'){ items = searchItems(currentView.query).filter(it => !it.isPrivate); }
    else {
        const k = currentView.category;
        if(k === 'favorites'){ items = favorites; }
        else if(k === 'all') items = getAllItems().filter(it => !it.isPrivate);
        else { const base = allData[k] || []; items = currentSort === 'default' ? applyCustomOrder(k, base) : base; }
    }
    if(ratingFilter > 0){ items = items.filter(it => { const r = getRating(itemId(it)); if(ratingFilter >= 1 && r.count === 0) return false; if(ratingFilter > 1 && (r.count === 0 || r.sum/r.count < ratingFilter)) return false; return true; }); }
    if(sourceFilter){
        items = items.filter(it => {
            const badge = String(it.badge || '').toLowerCase();
            if(sourceFilter === 'open-source') return badge === 'open source';
            if(sourceFilter === 'open-access') return badge === 'open access';
            if(sourceFilter === 'free') return badge.includes('darm') || badge.includes('free');
            return badge.includes('repozytoria github');
        });
    }
    return applySort(items || []);
}

function renderCategory(key){ currentPage = 1; currentView = { type:'category', category:key }; activeTags = []; closeLinkManager(); render(); }
function render(){
    if(currentView.type === 'linkManager') return;
    const inFav = currentView.type === 'category' && currentView.category === 'favorites';
    clearFilterBtn.style.display = (currentView.type === 'search' || activeTags.length > 0 || ratingFilter > 0 || sourceFilter) ? 'block' : 'none';
    renderTagChips();
    let items = getCurrentItems();
    if(activeTags.length > 0){ categoryTitle.textContent = activeTags.sort().join(' + '); categoryDesc.textContent = `${items.length}`; }
    else if(currentView.type === 'search'){ categoryTitle.textContent = currentView.label; categoryDesc.textContent = `${items.length}`; }
    else { categoryTitle.textContent = catTitle(currentView.category); categoryDesc.textContent = catDesc(currentView.category); }
    renderCards(items);
}
function getPaginationRange(current, total){ if(total <= 7) return Array.from({ length:total }, (_, i) => i+1); const delta = 1, out = []; let last = 0; for(let i = 1; i <= total; i++){ if(i === 1 || i === total || (i >= current-delta && i <= current+delta)){ if(last && i-last > 1){ if(i-last === 2) out.push(last+1); else out.push('...'); } out.push(i); last = i; } } return out; }
function renderStars(avg, myVote, interactive){ let html = ''; const rounded = Math.round(avg); for(let i = 1; i <= 5; i++){ const filled = i <= rounded; const cls = `star ${filled?'filled':''} ${myVote===i?'my-vote':''}`; html += interactive ? `<span class="${cls}" data-vote="${i}">★</span>` : `<span class="${cls}">★</span>`; } return html; }

function renderCards(items){
    if(!items || !items.length){ cardsContainer.innerHTML = `<p style="color:var(--text-muted);">${t('card.empty')}</p>`; return; }
    if(viewMode === 'calendar'){
        const groups = {}; items.forEach(it => { const d = it.createdAt > 0 ? new Date(it.createdAt).toLocaleDateString(currentLang) : '—'; if(!groups[d]) groups[d] = []; groups[d].push(it); });
        let html = ''; Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0])).forEach(([d, list]) => { html += `<div class="calendar-day"><h4>📅 ${escapeHtml(d)}</h4>`; list.forEach(it => { html += `<div class="card" data-item-id="${escapeHtml(itemId(it))}"><div class="card-title-row"><h3>${escapeHtml(it.title||'')}</h3></div><p>${renderMarkdown(getItemDesc(it))}</p></div>`; }); html += `</div>`; });
        cardsContainer.innerHTML = html; return;
    }
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if(currentPage > totalPages) currentPage = totalPages || 1;
    if(currentPage < 1) currentPage = 1;
    const start = (currentPage-1)*itemsPerPage;
    const visible = items.slice(start, start+itemsPerPage);
    const canDrag = currentSort === 'default' && currentView.type === 'category' && currentView.category !== 'all';
    const showCatLabel = currentView.type === 'category' && currentView.category === 'all';
    let html = '';
    if(viewMode === 'list') html += `<div class="sortable-header" style="grid-column:1/-1;"><span data-sort-col="title">Name ⇅</span><span data-sort-col="badge">Badge ⇅</span><span data-sort-col="date">Date ⇅</span></div>`;
    html += visible.map(item => {
        const isFav = favorites.some(f => f.title === item.title && f.url === item.url);
        const itemCat = (currentView.type === 'category' && currentView.category !== 'favorites' && currentView.category !== 'all') ? currentView.category : findItemCategory(item);
        const safeTitle = escapeHtml(item.title||'');
        const safeDesc = renderMarkdown(getItemDesc(item));
        const safeBadge = escapeHtml(item.badge||'');
        const safeRawUrl = escapeHtml(item.url||'');
        const safeHref = escapeHtml(safeUrl(item.url));
        const faviconSrc = getFaviconUrl(item.url);
        const safeFavicon = faviconSrc ? escapeHtml(faviconSrc) : '';
        const cardId = escapeHtml(itemId(item));
        const catDisplay = showCatLabel ? escapeHtml(catTitle(itemCat)) : '';
        const tags = (item.tags||[]).sort().map(x => `<span class="card-tag" data-tag="${escapeHtml(x)}">${escapeHtml(x)}</span>`).join('');
        const safeTagsAttr = escapeHtml((item.tags||[]).join('||'));
        const safeThumb = escapeHtml(safeUrl(item.thumbnail || ''));
        const safeNotes = escapeHtml(item.notes||'');
        const dateStr = formatDate(item.createdAt);
        const vc = viewCounts[itemId(item)]?.count || 0;
        const isNew = isNewItem(item);
        const grad = gradientFor(item.title||'');
        const rating = getRating(itemId(item));
        const avg = rating.count > 0 ? rating.sum/rating.count : 0;
        const commentCount = getComments(itemId(item)).length;
        const starsHtml = renderStars(avg, rating.myVote, false);
        const starsCls = rating.count > 0 && avg >= 4 ? 'stars-hi' : (rating.count > 0 && avg <= 2 ? 'stars-lo' : '');
        const media = detectMedia(item.url);
        const mediaBadgeHtml = media ? `<span class="media-badge">${mediaLabel(media)}</span>` : '';
        let mediaPreviewHtml = '';
        if(media && media.type === 'video' && media.thumbnail){ mediaPreviewHtml = `<div class="card-media-preview"><img src="${escapeHtml(media.thumbnail)}" alt="" loading="lazy"><div class="play-overlay play-btn" data-item-id="${cardId}">▶</div></div>`; }
        else if(media && media.type === 'image'){ mediaPreviewHtml = `<div class="card-media-preview"><img src="${safeRawUrl}" alt="" loading="lazy"></div>`; }
        let meta = ''; if(dateStr || vc > 0) meta = `<div class="card-meta">${dateStr?`<span>📅 ${dateStr}</span>`:''}${vc>0?`<span>👁 ${vc}</span>`:''}</div>`;
        return `<div class="card" ${canDrag?'draggable="true"':''} data-item-id="${cardId}" style="--card-gradient:${grad}">
            ${item.thumbnail && !mediaPreviewHtml ? `<img class="card-thumbnail" src="${safeThumb}" alt="" loading="lazy">` : ''}
            ${mediaPreviewHtml}
            <div>
                <div class="card-header-top">
                    <span class="badge" data-badge="${safeBadge}">${safeBadge}</span>${isNew?' <span class="new-badge">🌟</span>':''}${item.override?' <span class="override-badge">✏️</span>':''}${item.isPrivate?' <span class="private-badge">🔒</span>':''} ${mediaBadgeHtml}
                    <div class="card-actions-top">
                        <button class="edit-btn" data-title="${safeTitle}" data-url="${safeRawUrl}" data-badge="${safeBadge}" data-desc="${escapeHtml(item.description||'')}" data-cat="${escapeHtml(itemCat)}" data-tags="${safeTagsAttr}" data-thumbnail="${safeThumb}" data-notes="${safeNotes}" data-private="${!!item.isPrivate}">✏️</button>
                        <button class="delete-btn" data-title="${safeTitle}" data-url="${safeRawUrl}">🗑️</button>
                        <button class="copy-btn" data-url="${safeRawUrl}">📋</button>
                        <button class="fav-btn ${isFav?'active':''}" data-title="${safeTitle}" data-url="${safeRawUrl}" data-badge="${safeBadge}" data-desc="${escapeHtml(item.description||'')}" data-custom="${!!item.custom}">♥</button>
                    </div>
                </div>
                <div class="card-title-row">${safeFavicon?`<img class="card-favicon" src="${safeFavicon}" alt="">`:''}<h3>${safeTitle}</h3></div>
                ${showCatLabel?`<div class="card-category-label">📁 ${catDisplay}</div>`:''}
                ${tags?`<div class="card-tags">${tags}</div>`:''}
                <p>${safeDesc}</p>
                <div class="card-rating"><span class="stars ${starsCls}">${starsHtml}</span><span class="rating-count">${rating.count>0?`${avg.toFixed(1)} (${rating.count})`:t('card.ratingNone')}</span>${commentCount>0?`<span class="rating-count">💬 ${commentCount}</span>`:''}</div>
            </div>
            <a href="${safeHref}" data-title="${safeTitle}" data-url="${safeRawUrl}" target="_blank" rel="noopener noreferrer" class="btn">${t('detail.open')}</a>
        </div>`;
    }).join('');
    if(totalPages > 1){
        let pag = '<div class="pagination" style="grid-column:1/-1;display:flex;justify-content:center;gap:.5rem;margin-top:2rem;align-items:center;flex-wrap:wrap;">';
        pag += `<button class="btn-secondary page-btn" data-page="${currentPage-1}" ${currentPage===1?'disabled style="opacity:.5;cursor:not-allowed;"':''}>«</button>`;
        getPaginationRange(currentPage, totalPages).forEach(p => { if(p === '...') pag += `<span class="page-ellipsis">…</span>`; else pag += `<button class="btn-secondary page-btn ${p===currentPage?'active-page':''}" data-page="${p}" style="width:40px;${p===currentPage?'background-color:var(--accent);color:#0f172a;font-weight:bold;':''}">${p}</button>`; });
        pag += `<button class="btn-secondary page-btn" data-page="${currentPage+1}" ${currentPage===totalPages?'disabled style="opacity:.5;cursor:not-allowed;"':''}>»</button></div>`;
        html += pag;
    }
    cardsContainer.innerHTML = html;
}

document.addEventListener('keydown', e => {
    const active = document.activeElement;
    const inInput = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.tagName === 'SELECT');
    if(e.key === 'F1'){ e.preventDefault(); renderHelp(); $('helpModal').style.display = 'flex'; return; }
    if(!inInput && e.shiftKey && (e.key === '?')){ e.preventDefault(); renderHelp(); $('helpModal').style.display = 'flex'; return; }
    if(e.key === '/' && !inInput){ e.preventDefault(); searchInput.focus(); return; }
    if(e.key === 'Escape'){ document.querySelectorAll('.modal').forEach(m => m.style.display = 'none'); if(document.activeElement === searchInput && searchInput.value){ searchInput.value = ''; currentView = { type:'category', category:currentCategory }; render(); } else if(activeTags.length){ activeTags = []; render(); } return; }
    if((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'z' && !inInput){ e.preventDefault(); doRedo(); return; }
    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !inInput){ e.preventDefault(); doUndo(); return; }
    if(!inInput && (e.key === 'n' || e.key === 'N')){ e.preventDefault(); openModalBtn.click(); return; }
    if(!inInput && (e.key === 'f' || e.key === 'F')){ e.preventDefault(); currentCategory = 'favorites'; searchInput.value = ''; activeTags = []; renderSidebar(); renderCategory('favorites'); return; }
    if(!inInput && (e.key === 'p' || e.key === 'P')){ e.preventDefault(); presentationMode = !presentationMode; document.body.classList.toggle('presentation', presentationMode); presentationBtn.textContent = presentationMode ? '👁️' : '🎭'; return; }
    if(!inInput && e.key >= '1' && e.key <= '9'){ const links = categoryNav.querySelectorAll('a[data-category]'); const idx = parseInt(e.key, 10)-1; if(links[idx]){ e.preventDefault(); links[idx].click(); } return; }
});

if(location.protocol !== 'file:' && 'serviceWorker' in navigator){
    const appScriptForWorker = document.querySelector('script[src$="app.js"]');
    const workerUrl = appScriptForWorker ? new URL('service-worker.js', appScriptForWorker.src) : new URL('service-worker.js', document.baseURI);
    navigator.serviceWorker.register(workerUrl).catch(err => console.warn('OmniHub: Service Worker niedostępny:', err));
}
document.documentElement.lang = currentLang;
applyI18n();