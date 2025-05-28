// Updated schedule data with 12-hour AM/PM format
const weekdaySchedule = [
  { time: '5:20–6:00 AM', emoji: '🧘', title: 'Wake Up + Get Ready for Workout', category: 'routine', description: "Start your day with purpose. As soon as you wake up at 5:20 AM, brush your teeth, wash your face, and make your bed to set a productive tone. Drink a glass of water to rehydrate and jumpstart your system. If you have time, prepare your workout bag—lay out your clothes, check your water bottle, and organize anything you'll need for the session. This 40-minute block isn't just about moving slowly—it's about waking your body up while mentally preparing to own the day.", section: "morning", days: [1, 2, 3, 4, 5] },
  { time: '6:00–7:00 AM', emoji: '💪', title: 'Workout or Yoga', category: 'routine', description: "Start your workout with intention. At 6:00 AM, head up to your attic—your quiet, dedicated space to train and focus. This isn't just exercise; it's a commitment to becoming stronger, faster, and more focused, one rep at a time. Join Sachin online via Google Meet and follow his lead. Have your water nearby, your space cleared, and your mind ready. Whether it's push-ups, planks, or explosive movements, this session is designed to push you just enough—and build consistency over time. This hour is yours. It's not about perfection. It's about showing up, being present, and laying down the foundation for the rest of your day. Let the attic become your arena. Earn every drop of sweat.", section: "morning", days: [1, 2, 3, 4, 5] },
  { time: '7:00–7:10 AM', emoji: '🍳', title: 'Weekday Breakfast', category: 'routine', description: "Fuel your body with intention. After your workout, head downstairs and prepare a simple, satisfying breakfast—usually sunny side up eggs with toast, made just the way you like them. Take your time to plate it well and eat without rushing. Once you've finished, mix up your protein shake—your body's recovery fuel—and give yourself a moment to reset before the day truly begins.", section: "morning", days: [1, 2, 3, 4, 5] },
  { time: '7:10–7:30 AM', emoji: '🎒', title: 'Get Ready + Leave for School', category: 'routine', description: "Get ready to head out for the day with everything you need. Pack your cookies to sell at school. Don't forget $20 in small change, your protein shake, your computer, and your reMarkable writing pad.", section: "morning", days: [1, 2, 3, 4, 5] },
  { time: '7:30 AM–2:56 PM', emoji: '🏫', title: 'School', category: 'school', description: "School time", section: "morning", days: [1, 2, 3, 4, 5] },
  { time: '3:00–4:00 PM', emoji: '📚', title: 'Homework / Study (Math & Debate)', category: 'study', description: "Study time for Math and Debate", section: "afternoon", days: [2, 3] },
  { time: '4:00–4:20 PM', emoji: '🚗', title: 'Get Ready for Bobby Training', category: 'basketball', description: "Prepare for basketball training", section: "afternoon", days: [1] },
  { time: '4:20–7:00 PM', emoji: '🏀', title: 'Bobby Basketball Training', category: 'basketball', description: "Basketball training with Bobby", section: "afternoon", days: [1] },
  { time: '7:00–8:00 PM', emoji: '🏀', title: 'Personal Training with Rene', category: 'basketball', description: "Basketball personal training session", section: "afternoon", days: [3] },
  { time: '4:00–5:45 PM', emoji: '🧠', title: 'AoPS Class', category: 'school', description: "Art of Problem Solving class", section: "afternoon", days: [4] },
  { time: '5:45–6:00 PM', emoji: '🍌', title: 'Snack + Break', category: 'reminder', description: "Quick snack and break time", section: "afternoon", days: [4] },
  { time: '6:00–8:00 PM', emoji: '🗣️', title: 'Debate', category: 'school', description: "Debate practice", section: "afternoon", days: [4] },
  { time: '6:55–8:15 PM', emoji: '🏀', title: 'Basketball Practice', category: 'basketball', description: "Team basketball practice", section: "afternoon", days: [2] },
  { time: '7:00–8:00 PM', emoji: '🏀', title: 'Rene Practice', category: 'basketball', description: "Basketball practice with Rene", section: "afternoon", days: [5] },
  { time: 'Evenings (Free blocks)', emoji: '🎮', title: 'Gaming / 🧠 Extra Study / 😌 Ari Time', category: 'fun', description: "Free time for gaming, extra studying, or personal time", section: "afternoon", days: [1, 2, 3, 4, 5] },
  { time: '8:30–9:00 PM', emoji: '🪥', title: 'Wind Down + Get Ready for Bed', category: 'routine', description: "Wind down routine before bed", section: "afternoon", days: [1, 3, 4] },
  { time: '9:00–9:15 PM', emoji: '🪥', title: 'Wind Down + Get Ready for Bed', category: 'routine', description: "Wind down routine before bed", section: "afternoon", days: [2, 5] },
  { time: '8:30 PM–5:20 AM', emoji: '💤', title: 'Sleep', category: 'routine', description: "Sleep time", section: "afternoon", days: [1, 3, 4] },
  { time: '9:15 PM–5:20 AM', emoji: '💤', title: 'Sleep', category: 'routine', description: "Sleep time", section: "afternoon", days: [2, 5] }
];

const weekendSchedule = [
  { time: '5:20–6:00 AM', emoji: '🧘', title: 'Wake Up + Get Ready', category: 'routine', description: "Morning wake up routine", section: "morning", days: [0, 6] },
  { time: '6:00–7:00 AM', emoji: '💪', title: 'Workout or Yoga', category: 'routine', description: "Morning workout or yoga session", section: "morning", days: [0, 6] },
  { time: '7:30–8:00 AM', emoji: '🍳', title: 'Weekend Breakfast', category: 'routine', description: "Weekend breakfast time", section: "morning", days: [0, 6] },
  { time: 'Game time varies', emoji: '🏀', title: 'Basketball Games (Add per week manually)', category: 'basketball', description: "Basketball games - schedule varies weekly", section: "morning", days: [0, 6] },
  { time: 'Post-game block', emoji: '🎮', title: 'Gaming or 📚 Study (If free)', category: 'fun', description: "Gaming or study time after games", section: "afternoon", days: [0, 6] },
  { time: 'Evening (if no game)', emoji: '😌', title: 'Ari Time / Chill / Family', category: 'fun', description: "Personal or family time in the evening", section: "afternoon", days: [0, 6] },
  { time: '9:00–9:15 PM', emoji: '🪥', title: 'Wind Down + Get Ready for Bed', category: 'routine', description: "Wind down routine before bed", section: "afternoon", days: [0, 6] },
  { time: '9:15 PM–5:20 AM', emoji: '💤', title: 'Sleep', category: 'routine', description: "Sleep time", section: "afternoon", days: [0, 6] }
];

// Global variables
let currentDate = new Date();
let currentView = 'list'; // 'list' or 'calendar'
let customEvents = [];
let templates = [];

// DOM Elements
const currentDateElement = document.getElementById('currentDate');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const viewToggleButton = document.getElementById('viewToggle');
const calendarView = document.getElementById('calendarView');
const eventPopup = document.getElementById('eventPopup');
const closePopup = document.querySelector('.close-popup');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Load data from localStorage
    loadFromLocalStorage();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update date display
    updateDateDisplay();
    
    // Render initial schedule
    renderSchedule();
    
    // Render templates and custom events
    renderTemplates();
    renderCustomEvents();
    
    // Set up calendar view
    setupCalendarView();
    
    // Highlight current event
    highlightCurrentEvent();
    
    // Set interval to update current event highlight
    setInterval(highlightCurrentEvent, 60000); // Check every minute
});

// Load data from localStorage
function loadFromLocalStorage() {
    const storedCustomEvents = localStorage.getItem('customEvents');
    const storedTemplates = localStorage.getItem('templates');
    
    if (storedCustomEvents) {
        customEvents = JSON.parse(storedCustomEvents);
    }
    
    if (storedTemplates) {
        templates = JSON.parse(storedTemplates);
    }
}

// Save data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('customEvents', JSON.stringify(customEvents));
    localStorage.setItem('templates', JSON.stringify(templates));
}

// Set up event listeners
function setupEventListeners() {
    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Navigation buttons
    document.getElementById('prevDay').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        updateDateDisplay();
        renderSchedule();
        highlightCurrentEvent();
    });
    
    document.getElementById('today').addEventListener('click', () => {
        currentDate = new Date();
        updateDateDisplay();
        renderSchedule();
        highlightCurrentEvent();
    });
    
    document.getElementById('nextDay').addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        updateDateDisplay();
        renderSchedule();
        highlightCurrentEvent();
    });
    
    // Section toggle
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const toggleBtn = header.querySelector('.toggle-btn');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggleBtn.classList.remove('collapsed');
            } else {
                content.style.display = 'none';
                toggleBtn.classList.add('collapsed');
            }
        });
    });
    
    // View toggle
    viewToggleButton.addEventListener('click', toggleView);
    
    // Event form submission
    document.getElementById('eventForm').addEventListener('submit', handleEventFormSubmit);
    
    // Close popup
    closePopup.addEventListener('click', () => {
        eventPopup.style.display = 'none';
    });
    
    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === eventPopup) {
            eventPopup.style.display = 'none';
        }
    });
}

// Update date display
function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = currentDate.toLocaleDateString('en-US', options);
}

// Switch between tabs
function switchTab(tabId) {
    tabButtons.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    tabContents.forEach(content => {
        if (content.id === tabId) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

// Toggle between list and calendar views
function toggleView() {
    if (currentView === 'list') {
        // Switch to calendar view
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        calendarView.style.display = 'block';
        viewToggleButton.textContent = '📝 Switch to List View';
        currentView = 'calendar';
        renderCalendarView();
    } else {
        // Switch to list view
        calendarView.style.display = 'none';
        document.getElementById('weekday').style.display = 'block';
        document.getElementById('weekend').style.display = 'none';
        document.getElementById('custom').style.display = 'none';
        tabButtons[0].classList.add('active');
        tabButtons[1].classList.remove('active');
        tabButtons[2].classList.remove('active');
        viewToggleButton.textContent = '📅 Switch to Weekly Calendar View';
        currentView = 'list';
    }
}

// Convert 24-hour time to 12-hour format
function formatTime(time) {
    // If time already contains AM/PM, return as is
    if (time.includes('AM') || time.includes('PM') || time.includes('–')) {
        return time;
    }
    
    // Handle time ranges
    if (time.includes('-')) {
        const [start, end] = time.split('-');
        return `${formatTime(start)}–${formatTime(end)}`;
    }
    
    // Convert single time
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}

// Render schedule based on current date
function renderSchedule() {
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    
    // Show appropriate tab based on day
    if (isWeekend) {
        switchTab('weekend');
    } else {
        switchTab('weekday');
    }
    
    // Clear existing schedule
    document.getElementById('weekdayMorning').innerHTML = '';
    document.getElementById('weekdayAfternoon').innerHTML = '';
    document.getElementById('weekendMorning').innerHTML = '';
    document.getElementById('weekendAfternoon').innerHTML = '';
    
    // Render appropriate schedule
    if (isWeekend) {
        renderScheduleSection(weekendSchedule, 'morning', 'weekendMorning', dayOfWeek);
        renderScheduleSection(weekendSchedule, 'afternoon', 'weekendAfternoon', dayOfWeek);
    } else {
        renderScheduleSection(weekdaySchedule, 'morning', 'weekdayMorning', dayOfWeek);
        renderScheduleSection(weekdaySchedule, 'afternoon', 'weekdayAfternoon', dayOfWeek);
    }
    
    // Add custom events for the current date
    addCustomEventsToSchedule();
}

// Render schedule section
function renderScheduleSection(schedule, sectionType, containerId, dayOfWeek) {
    const container = document.getElementById(containerId);
    
    // Filter events for this section and day
    const events = schedule.filter(event => {
        // If days property exists, check if it includes the current day
        if (event.days) {
            return event.section === sectionType && event.days.includes(dayOfWeek);
        }
        // If no days property, include the event (for backward compatibility)
        return event.section === sectionType;
    });
    
    // Sort events by time
    events.sort((a, b) => {
        // Extract the start time for sorting
        const getStartTime = (timeStr) => {
            // Handle time ranges by extracting the first part
            if (timeStr.includes('–')) {
                return timeStr.split('–')[0].trim();
            }
            return timeStr;
        };
        
        const aTime = getStartTime(a.time);
        const bTime = getStartTime(b.time);
        
        return aTime.localeCompare(bTime);
    });
    
    // Create event cards
    events.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });
}

// Create event card element
function createEventCard(event, isCustom = false) {
    const eventCard = document.createElement('div');
    eventCard.className = `event-card ${event.category}`;
    eventCard.dataset.time = event.time;
    eventCard.dataset.title = event.title;
    eventCard.dataset.category = event.category;
    eventCard.dataset.description = event.description;
    
    const timeElement = document.createElement('div');
    timeElement.className = 'event-time';
    timeElement.textContent = event.time;
    
    const emojiElement = document.createElement('div');
    emojiElement.className = 'event-emoji';
    emojiElement.textContent = event.emoji;
    
    const titleElement = document.createElement('div');
    titleElement.className = 'event-title';
    titleElement.textContent = event.title;
    
    eventCard.appendChild(timeElement);
    eventCard.appendChild(emojiElement);
    eventCard.appendChild(titleElement);
    
    // Add delete button for custom events
    if (isCustom) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCustomEvent(event.id);
        });
        eventCard.appendChild(deleteBtn);
        eventCard.classList.add('custom-event-card');
    }
    
    // Add click event to show popup
    eventCard.addEventListener('click', () => {
        showEventPopup(event);
    });
    
    return eventCard;
}

// Show event popup
function showEventPopup(event) {
    document.getElementById('popupTitle').textContent = `${event.emoji} ${event.title}`;
    document.getElementById('popupTime').textContent = `Time: ${event.time}`;
    document.getElementById('popupCategory').textContent = `Category: ${event.category}`;
    document.getElementById('popupDescription').textContent = event.description || "No description available";
    
    eventPopup.style.display = 'flex';
}

// Highlight current event
function highlightCurrentEvent() {
    // Remove current highlight
    document.querySelectorAll('.event-card.current').forEach(card => {
        card.classList.remove('current');
    });
    
    // Get current time
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Format current time to 12-hour format for comparison
    const currentTime12 = `${currentHour % 12 || 12}:${currentMinute.toString().padStart(2, '0')} ${currentHour >= 12 ? 'PM' : 'AM'}`;
    
    // Only highlight if viewing today
    if (currentDate.toDateString() === now.toDateString()) {
        // Get all event cards for today
        const dayOfWeek = now.getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
        const activeTab = isWeekend ? 'weekend' : 'weekday';
        
        if (document.getElementById(activeTab).classList.contains('active')) {
            const allEvents = document.querySelectorAll(`#${activeTab} .event-card`);
            let currentEvent = null;
            
            // Find current event
            allEvents.forEach(eventCard => {
                const eventTime = eventCard.dataset.time;
                
                // Check if the event time range includes current time
                if (eventTime.includes('–')) {
                    const [startTime, endTime] = eventTime.split('–');
                    
                    // Simple check if current time is between start and end
                    // This is a simplified approach and might need refinement for edge cases
                    if (isTimeInRange(currentTime12, startTime, endTime)) {
                        currentEvent = eventCard;
                    }
                } else if (eventTime === currentTime12) {
                    // Exact match (less likely with 12-hour format)
                    currentEvent = eventCard;
                }
            });
            
            // Highlight current event
            if (currentEvent) {
                currentEvent.classList.add('current');
                
                // Expand section if collapsed
                const section = currentEvent.closest('.section-content');
                if (section.style.display === 'none') {
                    section.style.display = 'block';
                    const toggleBtn = section.previousElementSibling.querySelector('.toggle-btn');
                    toggleBtn.classList.remove('collapsed');
                }
            }
        }
    }
}

// Check if a time is within a range (simplified)
function isTimeInRange(time, startTime, endTime) {
    // This is a simplified check and might need refinement
    return time >= startTime && time <= endTime;
}

// Handle event form submission
function handleEventFormSubmit(e) {
    e.preventDefault();
    
    const eventDate = document.getElementById('eventDate').value;
    let eventTime = document.getElementById('eventTime').value;
    const eventTitle = document.getElementById('eventTitle').value;
    const eventEmoji = document.getElementById('eventEmoji').value || '📝';
    const eventCategory = document.getElementById('eventCategory').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const saveAsTemplate = document.getElementById('saveTemplate').checked;
    
    // Convert time to 12-hour format
    if (eventTime) {
        const [hours, minutes] = eventTime.split(':');
        const hour = parseInt(hours, 10);
        const period = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        eventTime = `${hour12}:${minutes} ${period}`;
    }
    
    // Create new event object
    const newEvent = {
        id: Date.now().toString(), // Unique ID
        date: eventDate,
        time: eventTime,
        title: eventTitle,
        emoji: eventEmoji,
        category: eventCategory,
        description: eventDescription,
        section: parseInt(eventTime.split(':')[0]) < 12 ? 'morning' : 'afternoon'
    };
    
    // Add to custom events
    customEvents.push(newEvent);
    
    // Save as template if checked
    if (saveAsTemplate) {
        const template = {
            id: Date.now().toString() + '-template',
            time: eventTime,
            title: eventTitle,
            emoji: eventEmoji,
            category: eventCategory,
            description: eventDescription
        };
        
        templates.push(template);
        renderTemplates();
    }
    
    // Save to localStorage
    saveToLocalStorage();
    
    // Render custom events
    renderCustomEvents();
    
    // Update schedule if the event is for today
    const selectedDate = new Date(eventDate);
    if (selectedDate.toDateString() === currentDate.toDateString()) {
        addCustomEventsToSchedule();
    }
    
    // Reset form
    document.getElementById('eventForm').reset();
}

// Render templates
function renderTemplates() {
    const container = document.getElementById('templates-container');
    container.innerHTML = '';
    
    if (templates.length === 0) {
        container.innerHTML = '<p>No templates saved yet.</p>';
        return;
    }
    
    templates.forEach(template => {
        const templateItem = document.createElement('div');
        templateItem.className = 'template-item';
        templateItem.innerHTML = `
            <div>${template.emoji} ${template.title} (${template.time})</div>
            <div>${template.category}</div>
        `;
        
        // Add click event to fill form
        templateItem.addEventListener('click', () => {
            // Convert 12-hour time back to 24-hour for the input field
            let time24 = template.time;
            if (template.time.includes('AM') || template.time.includes('PM')) {
                const [timePart, period] = template.time.split(' ');
                const [hours, minutes] = timePart.split(':');
                let hour24 = parseInt(hours);
                
                if (period === 'PM' && hour24 < 12) {
                    hour24 += 12;
                } else if (period === 'AM' && hour24 === 12) {
                    hour24 = 0;
                }
                
                time24 = `${hour24.toString().padStart(2, '0')}:${minutes}`;
            }
            
            document.getElementById('eventTime').value = time24;
            document.getElementById('eventTitle').value = template.title;
            document.getElementById('eventEmoji').value = template.emoji;
            document.getElementById('eventCategory').value = template.category;
            document.getElementById('eventDescription').value = template.description;
        });
        
        container.appendChild(templateItem);
    });
}

// Render custom events
function renderCustomEvents() {
    const container = document.getElementById('customEvents');
    container.innerHTML = '';
    
    if (customEvents.length === 0) {
        container.innerHTML = '<p>No custom events added yet.</p>';
        return;
    }
    
    // Sort by date and time
    const sortedEvents = [...customEvents].sort((a, b) => {
        if (a.date !== b.date) {
            return a.date.localeCompare(b.date);
        }
        return a.time.localeCompare(b.time);
    });
    
    sortedEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const dateString = eventDate.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
        
        const customEvent = {
            ...event,
            description: `${dateString}: ${event.description || "No description"}`
        };
        
        const eventCard = createEventCard(customEvent, true);
        container.appendChild(eventCard);
    });
}

// Delete custom event
function deleteCustomEvent(id) {
    customEvents = customEvents.filter(event => event.id !== id);
    saveToLocalStorage();
    renderCustomEvents();
    
    // Update schedule if viewing the day of the deleted event
    const currentDateStr = currentDate.toDateString();
    const deletedEventDate = customEvents.find(e => e.id === id)?.date;
    if (deletedEventDate) {
        const eventDate = new Date(deletedEventDate);
        if (eventDate.toDateString() === currentDateStr) {
            addCustomEventsToSchedule();
        }
    } else {
        // If we can't determine the date, just refresh the schedule to be safe
        addCustomEventsToSchedule();
    }
}

// Add custom events to schedule
function addCustomEventsToSchedule() {
    // Clear existing custom events first
    document.querySelectorAll('.custom-event-card').forEach(card => card.remove());
    
    // Filter custom events for current date
    const eventsForToday = customEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === currentDate.toDateString();
    });
    
    if (eventsForToday.length === 0) return;
    
    // Get containers
    const dayOfWeek = currentDate.getDay();
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    const morningContainer = document.getElementById(isWeekend ? 'weekendMorning' : 'weekdayMorning');
    const afternoonContainer = document.getElementById(isWeekend ? 'weekendAfternoon' : 'weekdayAfternoon');
    
    // Add events to appropriate container
    eventsForToday.forEach(event => {
        // Determine section based on time (AM/PM)
        const container = event.time.includes('AM') ? morningContainer : afternoonContainer;
        
        // Add section property for calendar view
        event.section = event.time.includes('AM') ? 'morning' : 'afternoon';
        
        const eventCard = createEventCard(event, true);
        container.appendChild(eventCard);
    });
    
    // Sort events by time
    sortEventsByTime(morningContainer);
    sortEventsByTime(afternoonContainer);
}

// Sort events by time
function sortEventsByTime(container) {
    const events = Array.from(container.children);
    
    events.sort((a, b) => {
        // Extract the start time for sorting
        const getStartTime = (timeStr) => {
            // Handle time ranges by extracting the first part
            if (timeStr.includes('–')) {
                return timeStr.split('–')[0].trim();
            }
            return timeStr;
        };
        
        const aTime = getStartTime(a.dataset.time);
        const bTime = getStartTime(b.dataset.time);
        
        return aTime.localeCompare(bTime);
    });
    
    // Clear container and append sorted events
    container.innerHTML = '';
    events.forEach(event => {
        container.appendChild(event);
    });
}

// Set up calendar view
function setupCalendarView() {
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    
    // Create grid cells for each day and hour
    for (let hour = 8; hour <= 22; hour++) {
        for (let day = 0; day < 7; day++) {
            const cell = document.createElement('div');
            cell.className = 'hour-cell';
            cell.dataset.day = day;
            cell.dataset.hour = hour;
            
            // Add hour label to first column
            if (day === 0) {
                const hourLabel = document.createElement('div');
                hourLabel.className = 'hour-label';
                const period = hour >= 12 ? 'PM' : 'AM';
                const hour12 = hour % 12 || 12;
                hourLabel.textContent = `${hour12}:00 ${period}`;
                cell.appendChild(hourLabel);
            }
            
            calendarGrid.appendChild(cell);
        }
    }
}

// Render calendar view
function renderCalendarView() {
    // Clear existing events
    document.querySelectorAll('.calendar-event').forEach(event => {
        event.remove();
    });
    
    // Get start of week (Sunday)
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    // Render weekday and weekend events
    for (let day = 0; day < 7; day++) {
        const currentDay = new Date(startOfWeek);
        currentDay.setDate(startOfWeek.getDate() + day);
        
        // Determine which schedule to use
        const isWeekend = (day === 0 || day === 6);
        const schedule = isWeekend ? weekendSchedule : weekdaySchedule;
        
        // Filter events for this day
        const events = schedule.filter(event => {
            if (event.days) {
                return event.days.includes(day);
            }
            return true; // Include events without days property
        });
        
        // Add events to calendar
        events.forEach(event => {
            addEventToCalendar(event, day);
        });
        
        // Add custom events for this day
        const customEventsForDay = customEvents.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === currentDay.toDateString();
        });
        
        customEventsForDay.forEach(event => {
            addEventToCalendar(event, day);
        });
    }
}

// Add event to calendar
function addEventToCalendar(event, day) {
    // Extract hour from time
    let hour = 0;
    
    // Handle time ranges and different formats
    if (event.time.includes('–')) {
        const startTime = event.time.split('–')[0].trim();
        hour = getHourFromTimeString(startTime);
    } else if (event.time.includes('-')) {
        const startTime = event.time.split('-')[0].trim();
        hour = getHourFromTimeString(startTime);
    } else if (event.time.includes('AM') || event.time.includes('PM')) {
        hour = getHourFromTimeString(event.time);
    } else {
        // Try to parse as 24-hour format
        const timeParts = event.time.split(':');
        if (timeParts.length > 0) {
            hour = parseInt(timeParts[0]);
        }
    }
    
    // Skip if outside our calendar hours (8-22)
    if (hour < 8 || hour > 22) return;
    
    // Find the cell for this day and hour
    const cell = document.querySelector(`.hour-cell[data-day="${day}"][data-hour="${hour}"]`);
    if (!cell) return;
    
    // Create event element
    const eventElement = document.createElement('div');
    eventElement.className = `calendar-event ${event.category}`;
    eventElement.textContent = `${event.time} ${event.emoji} ${event.title}`;
    
    // Add click event to show popup
    eventElement.addEventListener('click', () => {
        showEventPopup(event);
    });
    
    cell.appendChild(eventElement);
}

// Helper function to extract hour from time string
function getHourFromTimeString(timeStr) {
    if (timeStr.includes('AM') || timeStr.includes('PM')) {
        const [timePart, period] = timeStr.split(' ');
        let [hours, minutes] = timePart.split(':').map(part => parseInt(part, 10));
        
        if (period === 'PM' && hours < 12) {
            hours += 12;
        } else if (period === 'AM' && hours === 12) {
            hours = 0;
        }
        
        return hours;
    } else {
        // Try to parse as 24-hour format
        const timeParts = timeStr.split(':');
        if (timeParts.length > 0) {
            return parseInt(timeParts[0], 10);
        }
    }
    
    return 0; // Default
}
