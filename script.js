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
let isChatOpen = false;

// DOM Elements
const currentDateElement = document.getElementById('currentDate');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const viewToggleButton = document.getElementById('viewToggle');
const calendarView = document.getElementById('calendarView');
const eventPopup = document.getElementById('eventPopup');
const closePopup = document.querySelector('.close-popup');
const scheduleAiButton = document.getElementById('scheduleAiButton');
const chatContainer = document.getElementById('chatContainer');
const closeChat = document.getElementById('closeChat');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

// AI Response System
const aiResponses = {
    // Greeting patterns
    greetings: [
        { patterns: ['hello', 'hi', 'hey', 'greetings', 'howdy'], responses: [
            "Hello! How can I help with your schedule today?",
            "Hi there! I'm your Schedule AI. What would you like to know about your day?",
            "Hey! I'm here to help manage your schedule. What can I do for you?"
        ]},
        
        // General schedule questions
        { patterns: ['schedule', 'plan', 'agenda', 'today', 'what do i have'], responses: [
            "I can help you check your schedule. Are you asking about today or another day?",
            "Your schedule is my specialty! What day would you like to know about?",
            "I'd be happy to tell you about your schedule. Which day are you interested in?"
        ]},
        
        // Time-specific questions
        { patterns: ['morning', 'afternoon', 'evening', 'tonight', 'tomorrow'], responses: [
            "Let me check that time period for you. One moment...",
            "I'll find what you have scheduled for that time.",
            "Looking up your schedule for that time frame now."
        ]},
        
        // Basketball related questions
        { patterns: ['basketball', 'practice', 'game', 'training', 'bobby', 'rene'], responses: [
            "Let me check your basketball schedule...",
            "Looking up your basketball commitments now.",
            "I'll find your next basketball activity."
        ]},
        
        // School related questions
        { patterns: ['school', 'class', 'homework', 'study', 'debate', 'aops'], responses: [
            "Let me check your school schedule...",
            "Looking up your academic commitments now.",
            "I'll find information about your school activities."
        ]},
        
        // Help or instructions
        { patterns: ['help', 'how do you work', 'what can you do', 'instructions'], responses: [
            "I can help you with your schedule! You can ask me things like 'What's on my schedule today?', 'When is my next basketball practice?', or 'Do I have any free time this weekend?'",
            "I'm your Schedule AI assistant. Try asking me about your upcoming events, specific activities, or free time slots.",
            "I'm here to help manage your schedule. Ask me about specific events, times, or days, and I'll provide the information you need."
        ]},
        
        // Fallback responses
        { patterns: ['fallback'], responses: [
            "I'm not sure I understand. Could you ask about your schedule in a different way?",
            "I'm still learning! Could you rephrase your question about your schedule?",
            "I didn't quite catch that. Try asking about specific events or times in your schedule."
        ]}
    ],
    
    // Day-specific responses
    daySpecific: {
        0: "On Sunday, you have workout in the morning, possibly basketball games (check your custom events), and free time in the evening if there's no game.",
        1: "On Monday, your schedule includes morning workout, school, Bobby Basketball Training from 4:20-7:00 PM, and free time in the evening.",
        2: "On Tuesday, you have morning workout, school, homework/study time from 3:00-4:00 PM, and Basketball Practice from 6:55-8:15 PM.",
        3: "On Wednesday, your schedule includes morning workout, school, homework/study time from 3:00-4:00 PM, and Personal Training with Rene from 7:00-8:00 PM.",
        4: "On Thursday, you have morning workout, school, AoPS Class from 4:00-5:45 PM, a snack break, and then Debate from 6:00-8:00 PM.",
        5: "On Friday, your schedule includes morning workout, school, and Rene Practice from 7:00-8:00 PM.",
        6: "On Saturday, you have workout in the morning, possibly basketball games (check your custom events), and free time in the evening if there's no game."
    },
    
    // Category-specific responses
    categorySpecific: {
        basketball: {
            monday: "On Monday, you have Bobby Basketball Training from 4:20-7:00 PM.",
            tuesday: "On Tuesday, you have Basketball Practice from 6:55-8:15 PM.",
            wednesday: "On Wednesday, you have Personal Training with Rene from 7:00-8:00 PM.",
            friday: "On Friday, you have Rene Practice from 7:00-8:00 PM.",
            weekend: "On weekends, you may have basketball games. Check your custom events for specific game times."
        },
        school: {
            weekday: "On weekdays, you have school from 7:30 AM to 2:56 PM.",
            thursday: "On Thursday, you have AoPS Class from 4:00-5:45 PM and Debate from 6:00-8:00 PM."
        },
        study: {
            tuesday: "On Tuesday, you have homework/study time (Math & Debate) from 3:00-4:00 PM.",
            wednesday: "On Wednesday, you have homework/study time (Math & Debate) from 3:00-4:00 PM."
        },
        routine: {
            morning: "Your morning routine includes waking up at 5:20 AM, workout from 6:00-7:00 AM, breakfast, and getting ready for school.",
            evening: "Your evening routine includes winding down around 8:30-9:15 PM and going to sleep."
        }
    }
};

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
    
    // Set up chat functionality
    setupChatFunctionality();
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

// Set up chat functionality
function setupChatFunctionality() {
    // Toggle chat when AI button is clicked
    scheduleAiButton.addEventListener('click', () => {
        toggleChat();
    });
    
    // Close chat when close button is clicked
    closeChat.addEventListener('click', () => {
        toggleChat(false);
    });
    
    // Send message when send button is clicked
    sendMessage.addEventListener('click', () => {
        sendUserMessage();
    });
    
    // Send message when Enter key is pressed in input field
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
}

// Toggle chat visibility
function toggleChat(open = !isChatOpen) {
    isChatOpen = open;
    
    if (isChatOpen) {
        chatContainer.style.display = 'flex';
        scheduleAiButton.style.display = 'none';
        userInput.focus();
    } else {
        chatContainer.style.display = 'none';
        scheduleAiButton.style.display = 'flex';
    }
}

// Send user message
function sendUserMessage() {
    const message = userInput.value.trim();
    
    if (message) {
        // Create user message element
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = message;
        
        messageElement.appendChild(messageContent);
        chatMessages.appendChild(messageElement);
        
        // Clear input field
        userInput.value = '';
        
        // Scroll to bottom of chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Focus input field
        userInput.focus();
        
        // Generate AI response
        setTimeout(() => {
            generateAiResponse(message);
        }, 500); // Small delay to make it feel more natural
    }
}

// Generate AI response based on user message
function generateAiResponse(userMessage) {
    // Convert to lowercase for easier matching
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for specific day mentions
    const dayMentions = {
        'sunday': 0, 'sun': 0,
        'monday': 1, 'mon': 1,
        'tuesday': 2, 'tue': 2, 'tues': 2,
        'wednesday': 3, 'wed': 3,
        'thursday': 4, 'thu': 4, 'thurs': 4,
        'friday': 5, 'fri': 5,
        'saturday': 6, 'sat': 6,
        'today': new Date().getDay(),
        'tomorrow': (new Date().getDay() + 1) % 7,
        'weekend': [0, 6],
        'weekday': [1, 2, 3, 4, 5]
    };
    
    // Check for category mentions
    const categoryMentions = {
        'basketball': ['basketball', 'practice', 'game', 'training', 'bobby', 'rene'],
        'school': ['school', 'class', 'aops'],
        'study': ['homework', 'study', 'debate'],
        'routine': ['routine', 'wake up', 'sleep', 'morning routine', 'evening routine']
    };
    
    // Check for time period mentions
    const timePeriodMentions = {
        'morning': ['morning', 'am', 'before noon', 'breakfast'],
        'afternoon': ['afternoon', 'pm', 'after noon', 'lunch'],
        'evening': ['evening', 'night', 'dinner', 'tonight']
    };
    
    // Check for next event mentions
    const nextMentions = ['next', 'upcoming', 'following', 'future'];
    
    // Check for free time mentions
    const freeTimeMentions = ['free time', 'free', 'available', 'open', 'nothing scheduled'];
    
    // Variables to track what was mentioned
    let mentionedDay = null;
    let mentionedCategory = null;
    let mentionedTimePeriod = null;
    let mentionedNext = false;
    let mentionedFreeTime = false;
    
    // Check for day mentions
    for (const [day, value] of Object.entries(dayMentions)) {
        if (lowerMessage.includes(day)) {
            mentionedDay = value;
            break;
        }
    }
    
    // Check for category mentions
    for (const [category, keywords] of Object.entries(categoryMentions)) {
        if (keywords.some(keyword => lowerMessage.includes(keyword))) {
            mentionedCategory = category;
            break;
        }
    }
    
    // Check for time period mentions
    for (const [period, keywords] of Object.entries(timePeriodMentions)) {
        if (keywords.some(keyword => lowerMessage.includes(keyword))) {
            mentionedTimePeriod = period;
            break;
        }
    }
    
    // Check for next mentions
    mentionedNext = nextMentions.some(keyword => lowerMessage.includes(keyword));
    
    // Check for free time mentions
    mentionedFreeTime = freeTimeMentions.some(keyword => lowerMessage.includes(keyword));
    
    // Generate response based on what was mentioned
    let response = "";
    
    // Handle basketball-specific questions
    if (mentionedCategory === 'basketball') {
        if (mentionedNext) {
            const today = new Date().getDay();
            let nextBasketballDay = null;
            
            // Find the next basketball day
            if (today === 0) nextBasketballDay = 1; // Sunday -> Monday
            else if (today === 1) nextBasketballDay = 2; // Monday -> Tuesday
            else if (today === 2) nextBasketballDay = 3; // Tuesday -> Wednesday
            else if (today === 3) nextBasketballDay = 5; // Wednesday -> Friday
            else if (today === 4) nextBasketballDay = 5; // Thursday -> Friday
            else if (today === 5) nextBasketballDay = 0; // Friday -> Weekend games
            else if (today === 6) nextBasketballDay = 1; // Saturday -> Monday
            
            if (nextBasketballDay === 0 || nextBasketballDay === 6) {
                response = "Your next basketball activity would be weekend games. Check your custom events for specific game times.";
            } else if (nextBasketballDay === 1) {
                response = "Your next basketball activity is Bobby Basketball Training on Monday from 4:20-7:00 PM.";
            } else if (nextBasketballDay === 2) {
                response = "Your next basketball activity is Basketball Practice on Tuesday from 6:55-8:15 PM.";
            } else if (nextBasketballDay === 3) {
                response = "Your next basketball activity is Personal Training with Rene on Wednesday from 7:00-8:00 PM.";
            } else if (nextBasketballDay === 5) {
                response = "Your next basketball activity is Rene Practice on Friday from 7:00-8:00 PM.";
            }
        } else if (mentionedDay !== null) {
            // Day-specific basketball response
            if (mentionedDay === 1) {
                response = aiResponses.categorySpecific.basketball.monday;
            } else if (mentionedDay === 2) {
                response = aiResponses.categorySpecific.basketball.tuesday;
            } else if (mentionedDay === 3) {
                response = aiResponses.categorySpecific.basketball.wednesday;
            } else if (mentionedDay === 5) {
                response = aiResponses.categorySpecific.basketball.friday;
            } else if (mentionedDay === 0 || mentionedDay === 6 || (Array.isArray(mentionedDay) && mentionedDay.includes(0) && mentionedDay.includes(6))) {
                response = aiResponses.categorySpecific.basketball.weekend;
            } else {
                response = "You don't have any basketball activities scheduled for that day.";
            }
        } else {
            // General basketball schedule
            response = "Your basketball schedule includes: Bobby Basketball Training on Monday (4:20-7:00 PM), Basketball Practice on Tuesday (6:55-8:15 PM), Personal Training with Rene on Wednesday (7:00-8:00 PM), and Rene Practice on Friday (7:00-8:00 PM). Weekend games vary, so check your custom events for specific times.";
        }
    }
    // Handle school-specific questions
    else if (mentionedCategory === 'school') {
        if (mentionedDay !== null) {
            if (Array.isArray(mentionedDay) && mentionedDay.includes(1) && mentionedDay.includes(5)) {
                response = aiResponses.categorySpecific.school.weekday;
            } else if (mentionedDay === 4) {
                response = aiResponses.categorySpecific.school.weekday + " " + aiResponses.categorySpecific.school.thursday;
            } else if (mentionedDay === 0 || mentionedDay === 6 || (Array.isArray(mentionedDay) && mentionedDay.includes(0) && mentionedDay.includes(6))) {
                response = "You don't have school on weekends.";
            } else {
                response = aiResponses.categorySpecific.school.weekday;
            }
        } else {
            response = "Your school schedule is Monday to Friday from 7:30 AM to 2:56 PM. You also have AoPS Class on Thursday from 4:00-5:45 PM and Debate from 6:00-8:00 PM.";
        }
    }
    // Handle study-specific questions
    else if (mentionedCategory === 'study') {
        if (mentionedDay !== null) {
            if (mentionedDay === 2) {
                response = aiResponses.categorySpecific.study.tuesday;
            } else if (mentionedDay === 3) {
                response = aiResponses.categorySpecific.study.wednesday;
            } else {
                response = "You don't have dedicated study time scheduled for that day, but you can use your evening free blocks for extra study if needed.";
            }
        } else {
            response = "Your dedicated study times are Tuesday and Wednesday from 3:00-4:00 PM for Math & Debate homework. You can also use your evening free blocks for extra study if needed.";
        }
    }
    // Handle routine-specific questions
    else if (mentionedCategory === 'routine') {
        if (mentionedTimePeriod === 'morning') {
            response = aiResponses.categorySpecific.routine.morning;
        } else if (mentionedTimePeriod === 'evening') {
            response = aiResponses.categorySpecific.routine.evening;
        } else {
            response = aiResponses.categorySpecific.routine.morning + " " + aiResponses.categorySpecific.routine.evening;
        }
    }
    // Handle day-specific questions without category
    else if (mentionedDay !== null && !mentionedCategory) {
        if (Array.isArray(mentionedDay)) {
            if (mentionedDay.includes(0) && mentionedDay.includes(6)) {
                response = "On weekends, you have workout in the morning, possibly basketball games (check your custom events), and free time in the evening if there's no game.";
            } else {
                response = "On weekdays, you have morning workout, school from 7:30 AM to 2:56 PM, and various afternoon activities depending on the day. Would you like details for a specific day?";
            }
        } else {
            response = aiResponses.daySpecific[mentionedDay];
        }
    }
    // Handle free time questions
    else if (mentionedFreeTime) {
        if (mentionedDay !== null) {
            if (Array.isArray(mentionedDay)) {
                if (mentionedDay.includes(0) && mentionedDay.includes(6)) {
                    response = "On weekends, your free time is typically in the evening if you don't have basketball games.";
                } else {
                    response = "On weekdays, you typically have free blocks in the evening for gaming, extra study, or personal time.";
                }
            } else if (mentionedDay === 0 || mentionedDay === 6) {
                response = "On this day, your free time is typically in the evening if you don't have basketball games.";
            } else {
                response = "On this day, you typically have free blocks in the evening for gaming, extra study, or personal time.";
            }
        } else {
            response = "Your free time is typically in the evenings on weekdays for gaming, extra study, or personal time. On weekends, you have free time in the evenings if you don't have basketball games.";
        }
    }
    // Handle general questions or greetings
    else {
        // Check for greeting patterns
        let matchedGreeting = false;
        for (const greeting of aiResponses.greetings) {
            if (greeting.patterns.some(pattern => lowerMessage.includes(pattern))) {
                const randomIndex = Math.floor(Math.random() * greeting.responses.length);
                response = greeting.responses[randomIndex];
                matchedGreeting = true;
                break;
            }
        }
        
        // If no greeting matched, use fallback
        if (!matchedGreeting) {
            const fallbackResponses = aiResponses.greetings.find(g => g.patterns.includes('fallback')).responses;
            const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
            response = fallbackResponses[randomIndex];
        }
    }
    
    // Create AI response element
    const messageElement = document.createElement('div');
    messageElement.className = 'message system-message';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = response;
    
    messageElement.appendChild(messageContent);
    chatMessages.appendChild(messageElement);
    
    // Scroll to bottom of chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
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
