import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import { addDays } from "date-fns";

function DropdownMenu() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // Language selection vars
  const nameMapper = {
    ar: "Arabic",
    bg: "Bulgarian",
    ca: "Catalan",
    cs: "Czech",
    cy: "Welsh",
    da: "Danish",
    de: "German",
    el: "Greek",
    enGB: "English (United Kingdom)",
    enUS: "English (United States)",
    eo: "Esperanto",
    es: "Spanish",
    et: "Estonian",
    faIR: "Persian",
    fi: "Finnish",
    fil: "Filipino",
    fr: "French",
    hi: "Hindi",
    hr: "Croatian",
    hu: "Hungarian",
    hy: "Armenian",
    id: "Indonesian",
    is: "Icelandic",
    it: "Italian",
    ja: "Japanese",
    ka: "Georgian",
    ko: "Korean",
    lt: "Lithuanian",
    lv: "Latvian",
    mk: "Macedonian",
    nb: "Norwegian Bokmål",
    nl: "Dutch",
    pl: "Polish",
    pt: "Portuguese",
    ro: "Romanian",
    ru: "Russian",
    sk: "Slovak",
    sl: "Slovenian",
    sr: "Serbian",
    sv: "Swedish",
    th: "Thai",
    tr: "Turkish",
    uk: "Ukrainian",
    vi: "Vietnamese",
    zhCN: "Chinese Simplified",
    zhTW: "Chinese Traditional",
  };

  const localeOptions = Object.keys(locales)
    .map((key) => ({
      value: key,
      label: `${key} - ${nameMapper[key] || ""}`,
    }))
    .filter((item) => nameMapper[item.value]);

  const [locale, setLocale] = useState("enUS");
  // end language selection vars

  return (
    <div className="">
      <select
        className="text-center bg-white border-2 border-gray-400 rounded-lg block appearance-none leading-normal mx-auto my-3"
        onChange={(e) => setLocale(e.target.value)}
        value={locale}
      >
        {localeOptions.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </select>
      <DateRange
        months={2}
        calendarFocus="forwards"
        showSelectionPreview={false}
        ranges={state}
        color="#ff3d67"
        onChange={(item) => setState([item.selection])}
        direction="horizontal"
        preventSnapRefocus={true}
        locale={locales[locale]}
      />
    </div>
  );
}

export default DropdownMenu;
