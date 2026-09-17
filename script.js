// ==============================
// CAMPUSAI CHATBOT
// ==============================

const chatbot = document.getElementById("chatbot");
const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");


// ==============================
// OPEN / CLOSE CHATBOT
// ==============================

function openChat() {
    chatbot.classList.add("active");

    setTimeout(() => {
        userInput.focus();
    }, 200);
}

function closeChat() {
    chatbot.classList.remove("active");
}


// ==============================
// ENTER KEY
// ==============================

function handleEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
}


// ==============================
// QUICK QUESTIONS
// ==============================

function quickQuestion(question) {
    userInput.value = question;
    sendMessage();
}


// ==============================
// SEND MESSAGE
// ==============================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // User message
    addMessage(message, "user");

    userInput.value = "";

    // Disable input while thinking
    userInput.disabled = true;

    // Thinking message
    const thinking = addMessage(
        "🤖 CampusAI is thinking...",
        "bot"
    );

    setTimeout(() => {

        thinking.remove();

        const reply = getAIResponse(message);

        addMessage(reply, "bot");

        userInput.disabled = false;
        userInput.focus();

    }, 800);
}


// ==============================
// ADD MESSAGE
// ==============================

function addMessage(message, type) {

    const div = document.createElement("div");

    div.classList.add("chat-bubble", type);

    div.innerHTML = message;

    chatMessages.appendChild(div);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    return div;
}


// ==============================
// CAMPUSAI RESPONSE SYSTEM
// ==============================

function getAIResponse(message) {

    const text = message.toLowerCase().trim();


    // ==========================
    // GREETING
    // ==========================

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text.includes("good morning") ||
        text.includes("good evening")
    ) {

        return `
            👋 <strong>Hello!</strong><br><br>

            I'm <strong>CampusAI</strong>, your smart
            college assistant.
            <br><br>

            I can help you with:
            <br><br>

            📚 Courses<br>
            📝 Exams<br>
            📢 Notices<br>
            📅 Events<br>
            📖 Study Resources<br>
            👨‍🏫 Faculty<br>
            🎓 Student Information
        `;
    }


    // ==========================
    // COURSES
    // ==========================

    if (
        text.includes("course") ||
        text.includes("courses") ||
        text.includes("program") ||
        text.includes("branch") ||
        text.includes("degree")
    ) {

        return `
            📚 <strong>Academic Programs</strong><br><br>

            You can explore the college's academic
            programs and departments from the
            <strong>Academics</strong> section.
            <br><br>

            💡 You can ask me:
            <br><br>

            "What courses are available?"
        `;
    }


    // ==========================
    // EXAMS
    // ==========================

    if (
        text.includes("exam") ||
        text.includes("exams") ||
        text.includes("test") ||
        text.includes("semester")
    ) {

        return `
            📝 <strong>Exam Information</strong><br><br>

            Exam schedules and academic updates
            should be checked through the official
            college notices.
            <br><br>

            📢 Visit the <strong>Notice Board</strong>
            for the latest updates.
        `;
    }


    // ==========================
    // STUDY / NOTES
    // ==========================

    if (
        text.includes("notes") ||
        text.includes("study") ||
        text.includes("resource") ||
        text.includes("resources") ||
        text.includes("material")
    ) {

        return `
            📖 <strong>Study Resources</strong><br><br>

            CampusAI can help you find and organize
            study resources and academic information.
            <br><br>

            🎓 Check the <strong>Student Zone</strong>
            for available resources.
        `;
    }


    // ==========================
    // NOTICES
    // ==========================

    if (
        text.includes("notice") ||
        text.includes("notices") ||
        text.includes("announcement") ||
        text.includes("update")
    ) {

        return `
            📢 <strong>College Notices</strong><br><br>

            Important announcements, examination
            updates and academic information are
            available in the <strong>Notice Board</strong>.
            <br><br>

            👉 Open the <strong>Notices</strong>
            section to explore them.
        `;
    }


    // ==========================
    // EVENTS
    // ==========================

    if (
        text.includes("event") ||
        text.includes("events") ||
        text.includes("workshop") ||
        text.includes("seminar") ||
        text.includes("competition")
    ) {

        return `
            📅 <strong>Campus Events</strong><br><br>

            Explore workshops, seminars, competitions
            and other student activities in the
            <strong>Events</strong> section.
            <br><br>

            🎯 Stay connected with campus activities!
        `;
    }


    // ==========================
    // FACULTY
    // ==========================

    if (
        text.includes("faculty") ||
        text.includes("teacher") ||
        text.includes("teachers") ||
        text.includes("professor") ||
        text.includes("professors") ||
        text.includes("hod")
    ) {

        return `
            👨‍🏫 <strong>Faculty Information</strong><br><br>

            Here are the faculty members currently
            listed on our website:
            <br><br>

            <strong>1. Dr. Jitendra Kumar</strong><br>
            HOD — Computer Science & Engineering
            <br><br>

            <strong>2. Mr. Kanhaiya Kumar</strong><br>
            CSE Faculty
            <br><br>

            <strong>3. Mr. Sunil Kumar</strong><br>
            CSE Faculty
            <br><br>

            <strong>4. Mr. Rakesh Kumar</strong><br>
            CSE Faculty
            <br><br>

            <strong>5. Ms. Twinkle Kumari</strong><br>
            CSE Faculty
            <br><br>

            <strong>6. Mr. Chandan Kumar</strong><br>
            Engineering Faculty
            <br><br>

            👉 Visit the <strong>Faculty</strong> section
            to explore more information.
        `;
    }


    // ==========================
    // STUDENT ZONE
    // ==========================

    if (
        text.includes("student") ||
        text.includes("student zone") ||
        text.includes("student information")
    ) {

        return `
            🎓 <strong>Student Zone</strong><br><br>

            The Student Zone provides useful
            academic information and resources
            for students.
            <br><br>

            👉 Open the <strong>Student Zone</strong>
            to explore more.
        `;
    }


    // ==========================
    // HELP
    // ==========================

    if (
        text.includes("help") ||
        text.includes("what can you do") ||
        text.includes("what do you do")
    ) {

        return `
            🤖 <strong>CampusAI can help with:</strong>
            <br><br>

            📚 Courses<br>
            📝 Exams<br>
            📖 Study Resources<br>
            📢 Notices<br>
            📅 Events<br>
            👨‍🏫 Faculty<br>
            🎓 Student Information
            <br><br>

            Just type your question below. 😊
        `;
    }


    // ==========================
    // THANK YOU
    // ==========================

    if (
        text.includes("thank you") ||
        text.includes("thanks") ||
        text === "thx"
    ) {

        return `
            😊 <strong>You're welcome!</strong><br><br>

            I'm always here to help with
            campus-related information.
        `;
    }


    // ==========================
    // DEFAULT RESPONSE
    // ==========================

    return `
        🤔 <strong>I'm still learning!</strong><br><br>

        I can currently help you with:
        <br><br>

        📚 Courses<br>
        📝 Exams<br>
        📖 Study Resources<br>
        📢 Notices<br>
        📅 Events<br>
        👨‍🏫 Faculty<br>
        🎓 Student Zone
        <br><br>

        Try asking something like:
        <br><br>

        <strong>"Tell me about faculty"</strong>
    `;
}