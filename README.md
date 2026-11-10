# OmniHub — wersja po audycie

Narzędzie zawiera aplikację webową i możliwość uruchomienia lokalnie przez przeglądarkę z pliku startowego index.html. Posiada możliwość zmiany plików źródłowych i pełnego zarządzania treścią. **Nie zawiera instalatorów DEB, RPM, EXE, APK ani konfiguracji budowania instalatorów. Działa na każdym systeme operacyjnym i urządzeniu. Obsługuje wiele języków: PL, EN, DE, ES, IT, RU, FR**

## Uruchamianie lokalne

### Bez serwera (Firefox)
1. Rozpakuj archiwum.
2. Otwórz katalog `src`.
3. Otwórz plik `index.html` w Firefoxie.

W trybie `file://` OmniHub ładuje dane startowe z `data-seed.js`. Nie wykonuje żądania `fetch()` do `data.json` i nie rejestruje Service Workera. Nie powinien więc wyświetlać ostrzeżenia o braku `data.json`.

### Przez Live Server
Ważne: Live Server musi udostępniać katalog `src`, w którym leżą razem `index.html`, `app.js`, `data.json` i pozostałe zasoby.

W terminalu przejdź do rozpakowanego katalogu aplikacji, a następnie do `src`:
```bash
cd /ścieżka/do/OmniHub_Project/src
live-server
```
Następnie otwórz adres wyświetlony przez Live Server. Nie uruchamiaj `live-server` z katalogu domowego (`/home/daka`), bo wtedy serwer udostępnia katalog domowy, a nie katalog OmniHub. Jeśli strona jest otwarta pod `/`, żądania `/data.json` i `/service-worker.js` będą szukały plików w złym miejscu.

## Multimedia

- Odtwarzanie bezpośrednich plików audio/wideo przez natywny element HTML5.
- Dodano przycisk **Otwórz plik z komputera**. Wybrany plik jest odtwarzany przez tymczasowy adres Blob URL i nie jest wysyłany na serwer.
- Dla HLS/M3U8 dodano obsługę Hls.js z pobieraniem biblioteki z CDN; wymaga to połączenia z internetem, chyba że przeglądarka ma natywną obsługę HLS.
- Firefox nie obsługuje wszystkich kontenerów i kodeków. Najbardziej interoperacyjne są MP4 z H.264/AAC oraz WebM z VP8/VP9 i Opus. Pliki MKV/MOV/AVI mogą nie działać bez zewnętrznego odtwarzacza.
- Strumienie HLS mogą dodatkowo wymagać poprawnych nagłówków CORS po stronie dostawcy.

## Dane i synchronizacja

- `data.json` jest źródłem danych domyślnych w trybie HTTP.
- `data-seed.js` zawiera kopię danych startowych, dzięki czemu aplikacja działa po otwarciu `index.html` bez serwera.
- Dane użytkownika, komentarze, ulubione i ustawienia są przechowywane w `localStorage` danej przeglądarki/profilu.
- Sam statyczny hosting nie zapewnia wspólnej synchronizacji między użytkownikami ani urządzeniami. Do tego potrzebny byłby backend z bazą danych i uwierzytelnianiem.

Jeśli zmienisz dane startowe w `data.json`, zaktualizuj również `data-seed.js` (obecnie plik jest wygenerowaną kopią danych JSON).

## Prywatność i integracje

- Usunięto plik z kluczem API oraz kod integracji z zewnętrznym dostawcą AI.
- Nie umieszczaj sekretów ani kluczy API w plikach JavaScript udostępnianych przez publiczny hosting.

## Zakres sprawdzenia

W audycie wykonano statyczną kontrolę składni JavaScript, poprawności JSON, odwołań do zasobów HTML, duplikatów identyfikatorów i podstawowych przypadków renderowania Markdown. Nie wykonano pełnego testu odtwarzania na każdym kodeku, urządzeniu i strumieniu — to wymaga rzeczywistych plików testowych i środowiska przeglądarki.
Skan z Virustotal: https://www.virustotal.com/gui/file/ecb4df5822d0824eb25a83a482636c01e899145e0de69ce4ead42100247001b2
