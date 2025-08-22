document.addEventListener('DOMContentLoaded', function() {
    // --- DATA ---
    const periods = [1, 2, 3, 4, 5, 6, 7, 8];
    const dropSchedule = { A: [7, 8], B: [5, 6], C: [3, 4], D: [1, 2] };
    const keyDates = [
        { date: '2025-09-01', event: 'Labor Day', type: 'holiday' },
        { date: '2025-09-24', event: 'PD Day (Early Release)', type: 'pd' },
        { date: '2025-10-13', event: 'Fall Recess', type: 'holiday' },
        { date: '2025-10-29', event: 'PD Day (Early Release)', type: 'pd' },
        { date: '2025-10-31', event: 'End of First Quarter', type: 'quarter' },
        { date: '2025-11-04', event: 'Election Day (PD - No Students)', type: 'pd' },
        { date: '2025-11-27', event: 'Thanksgiving Recess (Nov 27-28)', type: 'holiday' },
        { date: '2025-12-23', event: 'Early Release Day', type: 'holiday' },
        { date: '2025-12-24', event: 'Winter Recess (Dec 24 - Jan 2)', type: 'holiday' },
        { date: '2026-01-19', event: 'Martin Luther King Jr. Day', type: 'holiday' },
        { date: '2026-01-23', event: 'End of Second Quarter', type: 'quarter' },
        { date: '2026-01-28', event: 'PD Day (Early Release)', type: 'pd' },
        { date: '2026-02-16', event: 'February Recess (Feb 16-17)', type: 'holiday' },
        { date: '2026-03-13', event: 'PD Day (No Students)', type: 'pd' },
        { date: '2026-03-25', event: 'PD Day (Early Release)', type: 'pd' },
        { date: '2026-03-28', event: 'End of Third Quarter', type: 'quarter' },
        { date: '2026-04-03', event: 'Holiday', type: 'holiday' },
        { date: '2026-04-13', event: 'Spring Recess (Apr 13-17)', type: 'holiday' },
        { date: '2026-04-29', event: 'PD Day (Early Release)', type: 'pd' },
        { date: '2026-05-20', event: 'PD Day (Early Release)', type: 'pd' },
        { date: '2026-05-25', event: 'Memorial Day', type: 'holiday' },
        { date: '2026-06-10', event: 'End of Fourth Quarter / Last Day', type: 'quarter' },
    ];
    const nonInstructionalDates = new Set(['2025-09-01', '2025-09-24', '2025-10-13', '2025-10-29', '2025-11-04', '2025-11-27', '2025-11-28', '2025-12-23', '2025-12-24', '2025-12-25', '2025-12-26', '2025-12-29', '2025-12-30', '2025-12-31', '2026-01-01', '2026-01-02', '2026-01-19', '2026-01-28', '2026-02-16', '2026-02-17', '2026-03-13', '2026-03-25', '2026-04-03', '2026-04-13', '2026-04-14', '2026-04-15', '2026-04-16', '2026-04-17', '2026-04-29', '2026-05-20', '2026-05-25', '2026-06-10']);

    // --- ELEMENTS ---
    const dayButtons = document.getElementById('day-buttons');
    const meetingPeriodsList = document.getElementById('meeting-periods');
    const droppedPeriodsList = document.getElementById('dropped-periods');
    const calendarContainer = document.getElementById('calendar-container');
    const monthSelector = document.getElementById('month-selector');
    const datesList = document.getElementById('dates-list');
    const filterButtons = document.getElementById('filter-buttons');
    const sidebar = document.getElementById('key-dates-sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const modal = document.getElementById('day-schedule-modal');
    const modalDate = document.getElementById('modal-date');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const inlineDaySchedule = document.getElementById('inline-day-schedule');
    const inlineModalDate = document.getElementById('inline-modal-date');
    const inlineModalContent = document.getElementById('inline-modal-content');
    const inlineModalNote = document.getElementById('inline-modal-note');

    // --- CALENDAR LOGIC ---
    const rotationColors = { A: 'bg-blue-100', B: 'bg-indigo-100', C: 'bg-purple-100', D: 'bg-pink-100' };
    const rotationMap = generateRotationMap();

    function generateRotationMap() {
        const map = new Map();
        const rotationDays = ['A', 'B', 'C', 'D'];
        const startDate = new Date('2025-08-28T12:00:00Z');
        const endDate = new Date('2026-06-10T12:00:00Z');
        let dayIndex = 0;
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dayOfWeek = d.getUTCDay();
            const dateString = d.toISOString().split('T')[0];
            if (dayOfWeek !== 0 && dayOfWeek !== 6 && !nonInstructionalDates.has(dateString)) {
                map.set(dateString, rotationDays[dayIndex]);
                dayIndex = (dayIndex + 1) % 4;
            }
        }
        return map;
    }

    // --- SIDEBAR LOGIC ---
    sidebarToggle.addEventListener('click', () => sidebar.classList.remove('sidebar-hidden'));
    sidebarCloseBtn.addEventListener('click', () => sidebar.classList.add('sidebar-hidden'));

    // --- SCHEDULE VIEWER LOGIC ---
    function updateScheduleView(day, noteText = "") {
        const dropped = dropSchedule[day];
        const meeting = periods.filter(p => !dropped.includes(p));
        meetingPeriodsList.innerHTML = meeting.map(p => `<li class="period-${p} font-semibold py-2 px-3 rounded-md">Period ${p}</li>`).join('');
        droppedPeriodsList.innerHTML = dropped.map(p => `<li class="period-${p}-dropped font-semibold py-2 px-3 rounded-md">Period ${p}</li>`).join('');
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.classList.toggle('active-day-btn', btn.dataset.day == day);
            btn.classList.toggle('inactive-day-btn', btn.dataset.day != day);
        });
        const viewerNote = document.getElementById('schedule-viewer-note');
        if (viewerNote) {
            viewerNote.textContent = noteText;
            viewerNote.classList.toggle('hidden', !noteText);
        }
    }

    // Add note area below schedule viewer title
    const scheduleViewerSection = document.getElementById('schedule-viewer');
    if (scheduleViewerSection && !document.getElementById('schedule-viewer-note')) {
        const noteDiv = document.createElement('div');
        noteDiv.id = 'schedule-viewer-note';
        noteDiv.className = 'mb-4 text-sm text-blue-600 font-semibold hidden';
        scheduleViewerSection.insertBefore(noteDiv, scheduleViewerSection.children[2]);
    }

    dayButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('day-btn')) updateScheduleView(e.target.dataset.day);
    });

    function generateCalendar(year, month) {
        const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
        let header = `<h3 class="font-bold text-center mb-2">${monthName} ${year}</h3>`;
        let daysOfWeek = `<div class="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-1"><div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div></div>`;
        let calendarDays = `<div class="grid grid-cols-7 text-center text-sm">`;
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let j = 0; j < firstDay; j++) { calendarDays += `<div></div>`; }
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateString = date.toISOString().split('T')[0];
            const rotation = rotationMap.get(dateString);
            let cellClass = 'py-2 px-1';
            let dataAttr = '';
            if (rotation) {
                cellClass += ` ${rotationColors[rotation]} font-bold rounded-full cursor-pointer hover:ring-2 ring-offset-1 ring-blue-400`;
                dataAttr = `data-date="${dateString}"`;
            } else if (nonInstructionalDates.has(dateString)) {
                cellClass += ' bg-gray-300 text-white rounded-full';
            }
            calendarDays += `<div class="${cellClass}" ${dataAttr}>${day}</div>`;
        }
        calendarDays += `</div>`;
        calendarContainer.innerHTML = header + daysOfWeek + calendarDays;
    }

    function populateMonthSelector() {
        const months = [
            {year: 2025, month: 7, name: "August 2025"}, 
            {year: 2025, month: 8, name: "September 2025"}, 
            {year: 2025, month: 9, name: "October 2025"}, 
            {year: 2025, month: 10, name: "November 2025"}, 
            {year: 2025, month: 11, name: "December 2025"}, 
            {year: 2026, month: 0, name: "January 2026"}, 
            {year: 2026, month: 1, name: "February 2026"}, 
            {year: 2026, month: 2, name: "March 2026"}, 
            {year: 2026, month: 3, name: "April 2026"}, 
            {year: 2026, month: 4, name: "May 2026"}, 
            {year: 2026, month: 5, name: "June 2026"}
        ];
        months.forEach(m => {
            const option = document.createElement('option');
            option.value = `${m.year}-${m.month}`;
            option.textContent = m.name;
            monthSelector.appendChild(option);
        });
    }

    monthSelector.addEventListener('change', (e) => {
        const [year, month] = e.target.value.split('-').map(Number);
        generateCalendar(year, month);
    });

    // --- MONTH ARROW CLICKERS ---
    const monthsArr = [
        {year: 2025, month: 7, name: "August 2025"},
        {year: 2025, month: 8, name: "September 2025"},
        {year: 2025, month: 9, name: "October 2025"},
        {year: 2025, month: 10, name: "November 2025"},
        {year: 2025, month: 11, name: "December 2025"},
        {year: 2026, month: 0, name: "January 2026"},
        {year: 2026, month: 1, name: "February 2026"},
        {year: 2026, month: 2, name: "March 2026"},
        {year: 2026, month: 3, name: "April 2026"},
        {year: 2026, month: 4, name: "May 2026"},
        {year: 2026, month: 5, name: "June 2026"}
    ];

    function getMonthIndex(value) {
        return monthsArr.findIndex(m => `${m.year}-${m.month}` === value);
    }

    document.getElementById('prev-month').addEventListener('click', function() {
        const idx = getMonthIndex(monthSelector.value);
        if (idx > 0) {
            monthSelector.value = `${monthsArr[idx - 1].year}-${monthsArr[idx - 1].month}`;
            const [year, month] = monthSelector.value.split('-').map(Number);
            generateCalendar(year, month);
        }
    });

    document.getElementById('next-month').addEventListener('click', function() {
        const idx = getMonthIndex(monthSelector.value);
        if (idx < monthsArr.length - 1) {
            monthSelector.value = `${monthsArr[idx + 1].year}-${monthsArr[idx + 1].month}`;
            const [year, month] = monthSelector.value.split('-').map(Number);
            generateCalendar(year, month);
        }
    });

    // --- KEY DATES LOGIC ---
    function renderDates(filter = 'all') {
        const uniqueEvents = Array.from(new Map(keyDates.map(item => [item.event, item])).values());
        const filteredDates = (filter === 'all') ? uniqueEvents : uniqueEvents.filter(d => d.type === filter);
        datesList.innerHTML = filteredDates.map(date => {
            const formattedDate = new Date(date.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
            let displayEvent = date.event;
            let dateRange = '';
            if (displayEvent.includes('(')) {
                const parts = displayEvent.split('(');
                displayEvent = parts[0].trim();
                dateRange = parts[1].replace(')', '');
            } else {
                dateRange = formattedDate;
            }
            return `<li class="flex justify-between items-center p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors" data-type="${date.type}"><span>${displayEvent}</span><span class="font-semibold text-gray-600">${dateRange}</span></li>`;
        }).join('');
    }

    filterButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.toggle('bg-[#4A5568]', e.target === btn);
                btn.classList.toggle('text-white', e.target === btn);
                btn.classList.toggle('bg-gray-200', e.target !== btn);
                btn.classList.toggle('text-gray-700', e.target !== btn);
            });
            renderDates(e.target.dataset.filter);
        }
    });

    // --- MODAL LOGIC ---
    function openDayScheduleModal(dateString) {
        const rotationDay = rotationMap.get(dateString);
        const keyEvent = keyDates.find(kd => kd.date === dateString);
        let note = '';
        if (keyEvent) {
            note = `Note: ${keyEvent.event}`;
        }
        if (rotationDay) {
            updateScheduleView(rotationDay, note);
            const dropped = dropSchedule[rotationDay];
            const meeting = periods.filter(p => !dropped.includes(p));
            const formattedDate = new Date(dateString + 'T12:00:00Z').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
            inlineModalDate.textContent = `${formattedDate} (Day ${rotationDay})`;
            inlineModalContent.innerHTML = `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h4 class="font-bold text-center mb-2">Meeting Periods</h4>
                        <ul class="space-y-1 text-center">${meeting.map(p => `<li class="period-${p} py-1 rounded">${p}</li>`).join('')}</ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-center mb-2">Dropped Periods</h4>
                        <ul class="space-y-1 text-center">${dropped.map(p => `<li class="period-${p}-dropped py-1 rounded">${p}</li>`).join('')}</ul>
                    </div>
                </div>`;
            inlineModalNote.textContent = note;
            inlineDaySchedule.classList.remove('hidden');
            modal.classList.add('hidden');
        } else {
            updateScheduleView('A', "No school or no rotation on this date. Please choose a calendar day below to see its daily schedule.");
            inlineDaySchedule.classList.add('hidden');
        }
    }

    calendarContainer.addEventListener('click', (e) => {
        if (e.target.dataset.date) openDayScheduleModal(e.target.dataset.date);
    });

    modalCloseBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    // --- INITIALIZE APP ---
    updateScheduleView('A', "Please choose a calendar day below to see its daily schedule.");
    populateMonthSelector();

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    let foundMonth = false;
    for (let i = 0; i < monthSelector.options.length; i++) {
        const [optYear, optMonth] = monthSelector.options[i].value.split('-').map(Number);
        if (optYear === currentYear && optMonth === currentMonth) {
            monthSelector.selectedIndex = i;
            foundMonth = true;
            break;
        }
    }
    if (!foundMonth && monthSelector.options.length > 0) {
        monthSelector.selectedIndex = 0;
    }
    const [initialYear, initialMonth] = monthSelector.value.split('-').map(Number);
    generateCalendar(initialYear, initialMonth);
    renderDates();

    sidebar.classList.add('sidebar-hidden');

    const todayString = today.toISOString().split('T')[0];
    setTimeout(() => {
        if (rotationMap.has(todayString)) {
            openDayScheduleModal(todayString);
        } else {
            updateScheduleView('A', "No school or no rotation today. Please choose a calendar day below to see its daily schedule.");
        }
    }, 100);
});