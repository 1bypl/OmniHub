# Raport audytu OmniHub

## Zakres i ustalenia z przesłanego archiwum

Przesłane archiwum było poprawne jako ZIP, ale zawierało starszą strukturę projektu:
- `src/app.js` zawsze wykonywał `fetch('data.json')`, również przy uruchomieniu z `file://`.
- Przy nieudanym pobraniu aplikacja wyświetlała denerwujące okno `alert`.
- Odtwarzacz rozpoznawał tylko część formatów i dla HLS/M3U8 pokazywał wyłącznie link zewnętrzny — nie odtwarzał strumienia wewnątrz aplikacji.
- Odtwarzacz nie miał możliwości wskazania pliku audio/wideo z dysku.
- Rejestracja Service Workera odbywała się bez sprawdzenia, czy aplikacja działa z `file://`.
- `service-worker.js` korzystał ze starej listy zasobów i wersji cache.
- `index.html` miał ikonę osadzoną jako data URI, ale Firefox zgłaszał także brak domyślnego `/favicon.ico`.
- W `src/config.js` znajdowała się konfiguracja z kluczem API. W kodzie aplikacji nie było aktywnego wywołania usługi AI, ale sam plik konfiguracyjny nadal był w archiwum.
- Archiwum zawierało również katalog `.git` i archiwalne kopie projektu. Nie są potrzebne do uruchamiania aplikacji i mogły zachowywać stare wersje konfiguracji.

## Wprowadzone poprawki

### Uruchamianie lokalne i dane
- Dodano `src/data-seed.js`, zawierający dokładną kopię danych z `data.json`.
- Przy `file://` aplikacja ładuje dane z `data-seed.js`; nie wykonuje `fetch('data.json')`.
- Usunięto alert o braku `data.json`.
- W trybie HTTP aplikacja pobiera `data.json` względem rzeczywistej lokalizacji `app.js`, a w razie błędu przechodzi na dane wbudowane.
- Service Worker nie jest rejestrowany dla `file://`.
- Dodano favicon SVG i ICO.
- Zaktualizowano cache Service Workera i listę zasobów.

### Multimedia
- Rozszerzono rozpoznawanie względnych adresów plików i adresów `file://`.
- Bezpośrednie pliki audio/wideo są przypisywane do natywnego elementu HTML5.
- Dodano obsługę HLS/M3U8 przez Hls.js z natywną ścieżką awaryjną, jeśli przeglądarka obsługuje HLS.
- Dodano komunikaty diagnostyczne dla błędów pobierania, dekodowania i nieobsługiwanego formatu.
- Dodano przycisk wyboru pliku audio/wideo z komputera. Plik jest odtwarzany przez tymczasowy Blob URL, bez wysyłania go na serwer.

### Komentarze i bezpieczeństwo
- Rozszerzono renderer Markdown o nagłówki, listy, cytaty i bloki kodu; zachowano pogrubienie, kursywę, przekreślenie, kod inline i bezpieczne linki HTTP(S).
- Surowy HTML jest escapowany, a linki z protokołami innymi niż HTTP(S) nie są renderowane jako aktywne odnośniki.
- Usunięto `src/config.js` i niepotrzebne stare katalogi `.git` oraz `backups` z paczki wynikowej.
- Nie ma kodu integracji z zewnętrznym dostawcą AI ani klucza API w wynikowych plikach źródłowych.

## Wyniki kontroli statycznej

| Kontrola | Wynik |
|---|---|
| `node --check` dla `app.js` | OK |
| `node --check` dla `data-seed.js` | OK |
| `node --check` dla `service-worker.js` | OK |
| Parsowanie `data.json` | OK |
| Parsowanie `manifest.json` | OK |
| Zgodność danych `data-seed.js` z `data.json` | OK |
| Odwołania lokalnych zasobów w HTML | OK |
| Powtórzone identyfikatory HTML | Brak |
| Pozostałości klucza/integracji AI w plikach źródłowych | Brak |
| Test renderowania Markdown i escapowania HTML | OK |
| Test rozpoznawania URL MP4, WebM, MP3, M3U8 i względnego pliku | OK |
| Integralność ZIP wynikowego | OK |

## Ważne ograniczenia i kolejne kroki

1. **Live Server:** uruchamiaj go z katalogu `src`, nie z `/home/daka`. Jeśli serwer udostępnia katalog domowy, przeglądarka może szukać `/data.json`, `/service-worker.js` i favicon w niewłaściwym katalogu. README zawiera poprawną komendę.
2. **Kodeki:** Firefox nie odtworzy każdego kontenera. Największą zgodność zapewniają MP4 H.264/AAC oraz WebM VP8/VP9/Opus. Niektóre MKV, MOV, AVI i pliki z nietypowym kodekiem wymagają zewnętrznego odtwarzacza.
3. **HLS:** odtwarzanie M3U8 przez Hls.js wymaga pobrania biblioteki z CDN, a sam strumień może wymagać poprawnych nagłówków CORS. To zależy od serwera dostawcy transmisji.
4. **Plik lokalny:** plik wybrany przyciskiem „Otwórz plik z komputera” jest dostępny w bieżącej sesji. Przeglądarka nie pozwala aplikacji zapisać trwałego, uniwersalnego dostępu do dowolnej ścieżki pliku na dysku.
5. **Dane publiczne:** statyczna strona i `localStorage` nie synchronizują komentarzy ani wpisów pomiędzy różnymi użytkownikami lub urządzeniami. Do wspólnej bazy potrzebny jest backend.
6. Nie wykonano pełnego testu GUI w Firefoxie na komputerze użytkownika ani testu wszystkich formatów i zewnętrznych transmisji. Do takiego testu potrzebne są konkretne pliki/strumienie i środowisko przeglądarki.

## Zakres paczki

Paczka zawiera wyłącznie źródła i dokumentację aplikacji webowej. Nie ma w niej instalatorów, konfiguracji Electron, Android/Capacitor ani skryptów budowania pakietów systemowych.
