import React, { useEffect, useState } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingDetail } from "../../../reduxStore/bookingSlicer";

function CalendarDateRange() {
  const { bookingDetail } = useSelector((root) => root.bookingSlicer);
  const [locale, setLocale] = useState('vi');
  const [date, setDate] = useState([
    {
      startDate: bookingDetail.startDate,
      endDate: bookingDetail.endDate,
      key: 'selection'
    }
  ]);

  useEffect(() => {
    setDate([
      {
        startDate: bookingDetail.startDate,
        endDate: bookingDetail.endDate,
        key: 'selection'
      }
    ])
  }, [bookingDetail])

  let dispatch = useDispatch();
  let handleOnChange = (date) => {
    setDate([date.selection]);
    dispatch(setBookingDetail([date.selection.startDate, date.selection.endDate]));
  }

  // Language selection vars
  const nameMapper = {
    ar: 'Arabic',
    bg: 'Bulgarian',
    ca: 'Catalan',
    cs: 'Czech',
    cy: 'Welsh',
    da: 'Danish',
    de: 'German',
    el: 'Greek',
    enGB: 'English (United Kingdom)',
    enUS: 'English (United States)',
    eo: 'Esperanto',
    es: 'Spanish',
    et: 'Estonian',
    faIR: 'Persian',
    fi: 'Finnish',
    fil: 'Filipino',
    fr: 'French',
    hi: 'Hindi',
    hr: 'Croatian',
    hu: 'Hungarian',
    hy: 'Armenian',
    id: 'Indonesian',
    is: 'Icelandic',
    it: 'Italian',
    ja: 'Japanese',
    ka: 'Georgian',
    ko: 'Korean',
    lt: 'Lithuanian',
    lv: 'Latvian',
    mk: 'Macedonian',
    nb: 'Norwegian Bokmål',
    nl: 'Dutch',
    pl: 'Polish',
    pt: 'Portuguese',
    ro: 'Romanian',
    ru: 'Russian',
    sk: 'Slovak',
    sl: 'Slovenian',
    sr: 'Serbian',
    sv: 'Swedish',
    th: 'Thai',
    tr: 'Turkish',
    uk: 'Ukrainian',
    vi: 'Vietnamese',
    zhCN: 'Chinese Simplified',
    zhTW: 'Chinese Traditional'
  };
  const localeOptions = Object.keys(locales)
    .map(key => ({
      value: key,
      label: `${key} - ${nameMapper[key] || ''}`
    }))
    .filter(item => nameMapper[item.value]);
  // end language selection vars

  return (
    <>
      <div className="flex text-gray-500">Chọn ngôn ngữ
        <select
          className="ml-2 text-center bg-white border-2 border-gray-400 rounded-lg block appearance-none"
          onChange={e => setLocale(e.target.value)}
          value={locale}
        >
          {localeOptions.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <DateRange
        months={2}
        calendarFocus="forwards"
        dateDisplayFormat="dd 'tháng' MM 'năm' yyyy"
        showSelectionPreview={true}
        ranges={date}
        onChange={handleOnChange}
        direction="horizontal"
        locale={locales[locale]}
      />
    </>
  )
}

export default CalendarDateRange