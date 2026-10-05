// ==========================================
// WEDDING COUNTDOWN DATE
// CHANGE THIS DATE ONLY
// FORMAT: YYYY-MM-DDTHH:MM:SS   (24-hour clock, e.g. 7 PM = 19:00:00)
//
// This ONE value drives everything: the countdown, the date shown on
// the card, and the calendar. Add a time (e.g. "2027-04-01T19:00:00")
// and the time will appear on the invitation automatically.
// ==========================================
const WEDDING_DATE = "2027-04-01T00:00:00";

// ==========================================
// WEDDING MUSIC FILE  (put your mp3 at this path)
// ==========================================
const WEDDING_MUSIC = "assets/audio/wedding-song.mp3";

// ==================================================
// WEDDING WEBSITE CONFIGURATION
// EDIT THESE VALUES TO CUSTOMIZE THE WEBSITE
// ==================================================
const WEDDING_CONFIG = {
    // ---- Names (English + Arabic) ----
    brideName: "MYRIAM",
    groomName: "AHMED",
    brideNameArabic: "مريم",
    groomNameArabic: "أحمد",

    // ---- Date (edit WEDDING_DATE above, not this line) ----
    weddingDate: WEDDING_DATE,

    // ---- Venue ----
    venueName: "Saladin Citadel",
    venueNameArabic: "قلعة صلاح الدين",
    venueCity: "Cairo, Egypt",
    venueCityArabic: "القاهرة، مصر",
    venueMapUrl: "https://maps.app.goo.gl/uzpyK4hZpvjFcDH76",

    // ---- Music (edit WEDDING_MUSIC above, not this line) ----
    musicFile: WEDDING_MUSIC,

    // ---- Images (upload files with these exact names) ----
    images: {
        couple: "assets/images/couple-main.jpg",
        brideChildhood: "assets/images/bride-childhood.jpg",
        groomChildhood: "assets/images/groom-childhood.jpg"
    },

    // ---- Language: "en" or "ar" (guests can switch; their choice is remembered) ----
    defaultLanguage: "en",

    // ---- Qur'an verse at the top of the card (set false to remove it) ----
    showQuranVerse: true,

    // ---- RSVP (works without a backend) ----
    // Option A: a Formspree / Getform / similar form URL -> responses go to your inbox.
    // Option B: a WhatsApp number in international format, digits only (e.g. "201001234567")
    //           -> the guest's reply opens as a ready-to-send WhatsApp message.
    // If BOTH are empty the RSVP section is hidden automatically.
    rsvp: {
        enabled: true,
        formEndpoint: "",
        whatsappNumber: ""
    }
};

// ==================================================
// END OF CONFIGURATION — no need to edit below
// ==================================================

(function () {
    "use strict";

    const C = WEDDING_CONFIG;

    // ---------------------------------------------------------------------
    // Text (English + Arabic). Placeholders: {bride} {groom} {names} {time}
    // ---------------------------------------------------------------------
    const TEXT = {
        en: {
            langButton: "AR",
            langAria: "Switch to Arabic",
            openAria: "Open the wedding invitation",
            openHint: "Click to Open",
            invitedTag: "You Are Invited",
            verseEn: "\"And of His Signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy. Indeed, in that are signs for a people who reflect.\"",
            verseRef: "QUR'AN 30:21",
            inviteLine: "We invite you to share in our joy as we become husband and wife",
            cdDays: "Days", cdHours: "Hours", cdMinutes: "Mins", cdSeconds: "Secs",
            cdFinished: "The Celebration Has Begun! 🎉",
            countdownAria: "Countdown to the wedding",
            navAria: "Invitation sections",
            navHome: "Home", navStory: "Story", navDate: "Date", navVenue: "Venue", navRsvp: "Attendance",
            storyTitle: "Our Story",
            storyCaption: "Two hearts, one beautiful beginning ♥",
            photoBride: "{bride} as a child",
            photoCouple: "{bride} and {groom} together",
            photoGroom: "{groom} as a child",
            dateTitle: "The Date",
            startsAt: "Starts at {time}",
            venueTitle: "Venue",
            mapsButton: "View on Maps",
            rsvpTitle: "Confirm Attendance",
            rsvpText: "We would be honored to celebrate this special day with you",
            rsvpButton: "Yes, I'll Be There",
            rsvpModalTitle: "Wedding RSVP",
            rsvpName: "Guest Full Name",
            rsvpNamePh: "Your full name",
            rsvpCompanions: "Number of Companions",
            rsvpNote: "Note or Wishes (Optional)",
            rsvpSubmit: "Confirm Attendance",
            rsvpSuccess: "RSVP confirmed. We can't wait to see you!",
            rsvpError: "Something went wrong. Please check your connection and try again.",
            closeAria: "Close",
            musicPauseAria: "Pause music",
            musicPlayAria: "Play music",
            footerLove: "With love",
            weekdays: ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"],
            rsvpMessage: ({ guest, count, note, names }) =>
                `Hello! This is ${guest}. I'll be attending the wedding of ${names}` +
                (count > 0 ? ` with ${count} companion${count > 1 ? "s" : ""}` : "") + "." +
                (note ? `\nNote: ${note}` : "")
        },
        ar: {
            langButton: "EN",
            langAria: "التبديل إلى الإنجليزية",
            openAria: "افتح دعوة الزفاف",
            openHint: "اضغط لفتح الدعوة",
            invitedTag: "أنت مدعو",
            verseEn: "",
            verseRef: "سورة الروم: ٢١",
            inviteLine: "ندعوكم لمشاركتنا فرحتنا ونحن نصبح زوجاً وزوجة",
            cdDays: "أيام", cdHours: "ساعات", cdMinutes: "دقائق", cdSeconds: "ثواني",
            cdFinished: "دامت الأفراح في دياركم 🎉",
            countdownAria: "العد التنازلي لحفل الزفاف",
            navAria: "أقسام الدعوة",
            navHome: "الرئيسية", navStory: "قصتنا", navDate: "التاريخ", navVenue: "المكان", navRsvp: "الحضور",
            storyTitle: "قصة حبنا",
            storyCaption: "قلبان وبداية واحدة جميلة ♥",
            photoBride: "{bride} في طفولتها",
            photoCouple: "{bride} و{groom} معاً",
            photoGroom: "{groom} في طفولته",
            dateTitle: "الموعد",
            startsAt: "الساعة {time}",
            venueTitle: "المكان",
            mapsButton: "عرض على الخريطة",
            rsvpTitle: "تأكيد الحضور",
            rsvpText: "يسعدنا ويشرفنا حضوركم ومشاركتكم في هذا اليوم المميز",
            rsvpButton: "نعم، سأحضر بالتأكيد",
            rsvpModalTitle: "تأكيد حضور الزفاف",
            rsvpName: "الاسم الكريم",
            rsvpNamePh: "اكتب اسمك الكامل",
            rsvpCompanions: "عدد المرافقين",
            rsvpNote: "ملاحظة أو تهنئة (اختياري)",
            rsvpSubmit: "تأكيد الحضور الآن",
            rsvpSuccess: "تم تسجيل حضوركم بنجاح.. ننتظركم بكل حب!",
            rsvpError: "حدث خطأ ما. يرجى التحقق من الاتصال والمحاولة مرة أخرى.",
            closeAria: "إغلاق",
            musicPauseAria: "إيقاف الموسيقى",
            musicPlayAria: "تشغيل الموسيقى",
            footerLove: "بكل الحب",
            weekdays: ["سبت", "أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"],
            rsvpMessage: ({ guest, count, note, names }) =>
                `مرحباً! أنا ${guest}. سأحضر حفل زفاف ${names}` +
                (count > 0 ? ` مع ${count} من المرافقين` : "") + "." +
                (note ? `\nملاحظة: ${note}` : "")
        }
    };

    // ---------------------------------------------------------------------
    // Helpers
    // ---------------------------------------------------------------------
    const $ = (selector, root) => (root || document).querySelector(selector);
    const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));
    const pad2 = (n) => String(n).padStart(2, "0");
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const KEY_PREFIX = "wedding:" + (C.brideName + "-" + C.groomName).toLowerCase() + ":";
    const store = {
        get(key) { try { return window.localStorage.getItem(KEY_PREFIX + key); } catch (e) { return null; } },
        set(key, value) { try { window.localStorage.setItem(KEY_PREFIX + key, value); } catch (e) { /* storage unavailable */ } }
    };

    const state = { lang: "en", opened: false };

    const firstLetter = (text) => Array.from(text || "")[0] || "";
    const namesFor = (lang) => lang === "ar"
        ? { bride: C.brideNameArabic, groom: C.groomNameArabic, amp: "و" }
        : { bride: C.brideName, groom: C.groomName, amp: "&" };

    function t(key, extra) {
        const n = namesFor(state.lang);
        const values = Object.assign({ bride: n.bride, groom: n.groom, names: n.bride + " " + n.amp + " " + n.groom }, extra);
        const raw = TEXT[state.lang][key];
        if (typeof raw !== "string") return "";
        return raw.replace(/\{(\w+)\}/g, (match, name) => (name in values ? values[name] : match));
    }

    // ---------------------------------------------------------------------
    // Wedding date: parsed once from WEDDING_DATE. Display values use the
    // date exactly as written (independent of the visitor's time zone).
    // ---------------------------------------------------------------------
    function parseWeddingDate(value) {
        const match = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(String(value));
        if (!match) return null;
        const parts = {
            year: +match[1], month: +match[2], day: +match[3],
            hour: match[4] ? +match[4] : 0, minute: match[5] ? +match[5] : 0
        };
        parts.hasTime = parts.hour !== 0 || parts.minute !== 0;
        return parts;
    }

    const D = parseWeddingDate(C.weddingDate);
    const targetTime = new Date(C.weddingDate).getTime();
    const dateIsValid = D !== null && !Number.isNaN(targetTime);
    const localeFor = (lang) => (lang === "ar" ? "ar-EG" : "en-GB");
    const utcDate = (year, month, day) => new Date(Date.UTC(year, month - 1, day));

    function formatDateLong() {
        const text = new Intl.DateTimeFormat(localeFor(state.lang), {
            day: state.lang === "ar" ? "numeric" : "2-digit", month: "long", year: "numeric", timeZone: "UTC"
        }).format(utcDate(D.year, D.month, D.day));
        return state.lang === "ar" ? text : text.toUpperCase();
    }

    function formatTimeEnglish() {
        const hour12 = D.hour % 12 === 0 ? 12 : D.hour % 12;
        return pad2(hour12) + ":" + pad2(D.minute) + " " + (D.hour < 12 ? "AM" : "PM");
    }

    function formatTimeArabic() {
        const hour12 = D.hour % 12 === 0 ? 12 : D.hour % 12;
        const nf = new Intl.NumberFormat("ar-EG", { minimumIntegerDigits: 2, useGrouping: false });
        return new Intl.NumberFormat("ar-EG", { useGrouping: false }).format(hour12) + ":" + nf.format(D.minute) +
            " " + (D.hour < 12 ? "صباحاً" : "مساءً");
    }

    const timeText = () => (state.lang === "ar" ? formatTimeArabic() : formatTimeEnglish());

    // ---------------------------------------------------------------------
    // Rendering (called on load and whenever the language changes)
    // ---------------------------------------------------------------------
    function setBind(name, value) {
        $$('[data-bind="' + name + '"]').forEach((el) => { el.textContent = value; });
    }

    function renderNames() {
        const n = namesFor(state.lang);
        setBind("bride", n.bride);
        setBind("groom", n.groom);
        setBind("amp", n.amp);
        setBind("monogram", firstLetter(n.bride) + " " + n.amp + " " + firstLetter(n.groom));
    }

    function renderDate() {
        const badge = $("#dateBadge");
        const note = $("#dateNote");
        if (!dateIsValid) {
            badge.hidden = true;
            note.hidden = true;
            $("#date-section").hidden = true;
            return;
        }
        setBind("dateLong", formatDateLong());
        setBind("timeShort", timeText());
        $("#dateBadgeTime").hidden = !D.hasTime;
        $("#dateBadgeSep").hidden = !D.hasTime;

        // Note under the calendar: start time if one is set, otherwise the weekday
        if (D.hasTime) {
            setBind("dateNote", t("startsAt", { time: timeText() }));
            $("#dateNoteIcon").setAttribute("href", "#i-clock");
        } else {
            setBind("dateNote", new Intl.DateTimeFormat(localeFor(state.lang), { weekday: "long", timeZone: "UTC" })
                .format(utcDate(D.year, D.month, D.day)));
            $("#dateNoteIcon").setAttribute("href", "#i-calendar");
        }
    }

    function renderCalendar() {
        if (!dateIsValid) return;
        const grid = $("#calendarGrid");
        const nf = new Intl.NumberFormat(state.lang === "ar" ? "ar-EG" : "en-US", { useGrouping: false });
        const monthLabel = new Intl.DateTimeFormat(localeFor(state.lang), { month: "long", year: "numeric", timeZone: "UTC" })
            .format(utcDate(D.year, D.month, 1));

        $("#calMonth").textContent = monthLabel;
        $("#calendar").setAttribute("aria-label", monthLabel);
        grid.textContent = "";

        TEXT[state.lang].weekdays.forEach((label) => {
            const cell = document.createElement("div");
            cell.className = "cal-dow";
            cell.textContent = label;
            grid.appendChild(cell);
        });

        // The week starts on Saturday (as in the reference design)
        const offset = (utcDate(D.year, D.month, 1).getUTCDay() + 1) % 7;
        const daysInMonth = new Date(Date.UTC(D.year, D.month, 0)).getUTCDate();

        for (let i = 0; i < offset; i++) grid.appendChild(document.createElement("div"));

        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement("div");
            cell.className = "cal-day";
            cell.textContent = nf.format(day);
            if (day === D.day) {
                cell.classList.add("is-wedding");
                cell.setAttribute("aria-current", "date");
            }
            grid.appendChild(cell);
        }
    }

    function renderVenue() {
        const ar = state.lang === "ar";
        const primary = $('[data-bind="venuePrimary"]');
        const secondary = $('[data-bind="venueSecondary"]');
        primary.textContent = ar ? C.venueNameArabic : C.venueName;
        primary.lang = ar ? "ar" : "en";
        // Show the other language underneath so both names are always visible
        secondary.textContent = ar ? C.venueName : C.venueNameArabic;
        secondary.lang = ar ? "en" : "ar";
        setBind("venueCity", ar ? C.venueCityArabic : C.venueCity);

        const link = $("#mapLink");
        link.href = C.venueMapUrl;
        link.setAttribute("aria-label", t("mapsButton") + ": " + C.venueName + " " + C.venueNameArabic);
    }

    function renderPhotos() {
        $$("img[data-photo]").forEach((img) => {
            img.alt = t(img.dataset.alt);
        });
    }

    function applyLanguage(lang) {
        state.lang = TEXT[lang] ? lang : "en";
        document.documentElement.lang = state.lang;
        document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";

        $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
        $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
        $$("[data-i18n-placeholder]").forEach((el) => { el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder)); });

        $("#langSwitchLabel").textContent = t("langButton");
        $("#langSwitch").setAttribute("aria-label", t("langAria"));

        renderNames();
        renderDate();
        renderCalendar();
        renderVenue();
        renderPhotos();
        updateMusicUi();
        updateCountdown();
    }

    // ---------------------------------------------------------------------
    // Countdown — all calculation lives in getTimeRemaining()
    // ---------------------------------------------------------------------
    let countdownTimer = null;

    function getTimeRemaining() {
        const total = targetTime - Date.now();
        if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            total,
            days: Math.floor(total / 86400000),
            hours: Math.floor((total % 86400000) / 3600000),
            minutes: Math.floor((total % 3600000) / 60000),
            seconds: Math.floor((total % 60000) / 1000)
        };
    }

    function updateCountdown() {
        const wrap = $("#countdownWrap");
        if (!dateIsValid) { wrap.hidden = true; return; }

        const remaining = getTimeRemaining();
        ["days", "hours", "minutes", "seconds"].forEach((unit) => {
            const el = $('[data-countdown="' + unit + '"]');
            if (el) el.textContent = pad2(remaining[unit]);
        });

        const finished = remaining.total <= 0;
        $("#countdown").hidden = finished;
        $("#countdownFinished").hidden = !finished;
        if (finished && countdownTimer) {
            window.clearInterval(countdownTimer);
            countdownTimer = null;
        }
    }

    function startCountdown() {
        updateCountdown();
        if (dateIsValid && !countdownTimer && getTimeRemaining().total > 0) {
            countdownTimer = window.setInterval(updateCountdown, 1000);
        }
    }

    // ---------------------------------------------------------------------
    // Music
    // ---------------------------------------------------------------------
    const audio = $("#weddingAudio");
    const musicButton = $("#musicToggle");
    let musicUnavailable = !C.musicFile;
    let resumeAfterHidden = false;

    function updateMusicUi() {
        const playing = !audio.paused;
        musicButton.classList.toggle("is-playing", playing);
        musicButton.setAttribute("aria-pressed", String(playing));
        musicButton.setAttribute("aria-label", t(playing ? "musicPauseAria" : "musicPlayAria"));
    }

    function startMusic() {
        if (musicUnavailable) return;
        if (!audio.getAttribute("src")) audio.src = C.musicFile;
        // Must be called from a user gesture on mobile browsers.
        Promise.resolve(audio.play()).then(updateMusicUi, updateMusicUi);
    }

    function toggleMusic() {
        if (audio.paused) {
            store.set("music", "on");
            startMusic();
        } else {
            store.set("music", "off");
            audio.pause();
            updateMusicUi();
        }
    }

    audio.addEventListener("play", updateMusicUi);
    audio.addEventListener("pause", updateMusicUi);
    // If the file is missing or unsupported, quietly remove the music button
    audio.addEventListener("error", () => {
        musicUnavailable = true;
        musicButton.hidden = true;
    });

    musicButton.addEventListener("click", toggleMusic);

    // Pause when the tab/app is hidden, resume when the guest returns
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            resumeAfterHidden = !audio.paused;
            if (resumeAfterHidden) audio.pause();
        } else if (resumeAfterHidden) {
            resumeAfterHidden = false;
            Promise.resolve(audio.play()).then(updateMusicUi, updateMusicUi);
        }
    });

    // ---------------------------------------------------------------------
    // Envelope intro → invitation
    // ---------------------------------------------------------------------
    function revealOnScroll() {
        const items = $$(".reveal");
        if (!("IntersectionObserver" in window)) {
            items.forEach((item) => item.classList.add("in-view"));
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -4% 0px" });
        items.forEach((item) => observer.observe(item));
    }

    function openInvitation() {
        if (state.opened) return;
        state.opened = true;

        const envelope = $("#envelopeButton");
        const flapDuration = reduceMotion ? 0 : 600;
        const leaveDuration = reduceMotion ? 0 : 450;

        envelope.classList.add("is-open");
        envelope.setAttribute("aria-disabled", "true");

        // Music starts here because this click is the user gesture browsers require
        if (!musicUnavailable) {
            musicButton.classList.add("is-visible");
            if (store.get("music") !== "off") startMusic();
        }

        window.setTimeout(() => {
            envelope.classList.add("is-leaving");
            window.setTimeout(() => {
                $("#intro").hidden = true;
                $("#content").hidden = false;
                window.scrollTo(0, 0);
                revealOnScroll();
                $("#home-section").focus({ preventScroll: true });
            }, leaveDuration);
        }, flapDuration);
    }

    // ---------------------------------------------------------------------
    // Photos: show a soft placeholder if an image file is missing
    // ---------------------------------------------------------------------
    function setupPhotos() {
        $$("img[data-photo]").forEach((img) => {
            const src = C.images[img.dataset.photo];
            const markMissing = () => img.remove();
            img.addEventListener("error", markMissing, { once: true });
            if (src) img.src = src; else markMissing();
        });
    }

    // ---------------------------------------------------------------------
    // RSVP
    // ---------------------------------------------------------------------
    const rsvpConfigured = !!(C.rsvp && C.rsvp.enabled && (C.rsvp.formEndpoint || C.rsvp.whatsappNumber));
    const modal = $("#rsvpModal");
    const modalBox = $("#rsvpModalBox");
    let lastFocused = null;

    function openModal() {
        lastFocused = document.activeElement;
        $("#rsvpSuccess").hidden = true;
        $("#rsvpError").hidden = true;
        modal.hidden = false;
        document.body.classList.add("modal-open");
        window.requestAnimationFrame(() => {
            modal.classList.add("is-open");
            modalBox.focus();
        });
    }

    function closeModal() {
        modal.classList.remove("is-open");
        document.body.classList.remove("modal-open");
        window.setTimeout(() => {
            modal.hidden = true;
            if (lastFocused && lastFocused.focus) lastFocused.focus();
        }, reduceMotion ? 0 : 350);
    }

    function trapFocus(event) {
        if (modal.hidden) return;
        if (event.key === "Escape") { closeModal(); return; }
        if (event.key !== "Tab") return;
        const focusable = $$("button, input, textarea, a[href]", modal).filter((el) => !el.disabled && !el.hidden);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === modalBox)) {
            event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault(); first.focus();
        }
    }

    async function submitRsvp(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const success = $("#rsvpSuccess");
        const error = $("#rsvpError");
        const submit = $("#rsvpSubmit");
        success.hidden = true;
        error.hidden = true;
        if (!form.reportValidity()) return;

        const guest = form.elements.name.value.trim();
        const count = Math.max(0, Math.min(8, parseInt(form.elements.companions.value, 10) || 0));
        const note = form.elements.note.value.trim();

        submit.disabled = true;
        try {
            if (C.rsvp.formEndpoint) {
                const data = new FormData(form);
                data.append("language", state.lang);
                data.append("_subject", "Wedding RSVP – " + C.brideName + " & " + C.groomName);
                const response = await fetch(C.rsvp.formEndpoint, {
                    method: "POST", body: data, headers: { Accept: "application/json" }
                });
                if (!response.ok) throw new Error("RSVP request failed");
                form.reset();
            } else {
                const n = namesFor(state.lang);
                const message = TEXT[state.lang].rsvpMessage({
                    guest, count, note, names: n.bride + " " + n.amp + " " + n.groom
                });
                const phone = String(C.rsvp.whatsappNumber).replace(/\D/g, "");
                window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank", "noopener");
            }
            success.hidden = false;
        } catch (err) {
            error.hidden = false;
        } finally {
            submit.disabled = false;
        }
    }

    function setupRsvp() {
        if (!rsvpConfigured) {
            $("#rsvp-section").remove();
            $("#navRsvp").remove();
            modal.remove();
            return;
        }
        $("#rsvpOpen").addEventListener("click", openModal);
        $("#rsvpClose").addEventListener("click", closeModal);
        modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); });
        document.addEventListener("keydown", trapFocus);
        $("#rsvpForm").addEventListener("submit", submitRsvp);
    }

    // ---------------------------------------------------------------------
    // Navigation: briefly highlight the section a guest jumps to
    // ---------------------------------------------------------------------
    function setupNav() {
        $$(".nav a").forEach((link) => {
            link.addEventListener("click", () => {
                const target = document.getElementById(link.getAttribute("href").slice(1));
                if (!target) return;
                target.classList.remove("is-highlight");
                void target.offsetWidth; // restart the animation
                target.classList.add("is-highlight");
            });
        });
    }

    // ---------------------------------------------------------------------
    // Init
    // ---------------------------------------------------------------------
    function init() {
        if (!C.showQuranVerse) $("#verseBlock").remove();

        const saved = store.get("lang");
        applyLanguage(saved && TEXT[saved] ? saved : C.defaultLanguage);

        $("#langSwitch").addEventListener("click", () => {
            const next = state.lang === "ar" ? "en" : "ar";
            store.set("lang", next);
            applyLanguage(next);
        });

        $("#envelopeButton").addEventListener("click", openInvitation);

        setupPhotos();
        setupRsvp();
        setupNav();
        startCountdown();
    }

    init();
})();
