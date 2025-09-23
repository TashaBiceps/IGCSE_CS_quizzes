// quizzes.js

// This object will hold all of your quizzes.
// The key (e.g., "c2-error-detection") MUST MATCH the data-quiz-id in your index.html
export const quizzes = {
    "c2-error-detection": {
        title: "Error Detection and Encryption",
        chapter: "Chapter 2",
        subtitle: "Test your knowledge of Chapter 2.",
        questions: [
            { question: "[DEFINITION] What is the primary purpose of encryption?", options: ["To make data files smaller.", "To check if data has been corrupted during transmission.", "To scramble data to make it unreadable to unauthorised users.", "To correct errors in a data packet automatically."], answer: "To scramble data to make it unreadable to unauthorised users." },
            { question: "[DEFINITION] Which error detection method involves adding an extra bit to a block of data?", options: ["Checksum", "Parity check", "Automatic Repeat Request (ARQ)", "Encryption"], answer: "Parity check" },
            // ... copy ALL 20 questions for this topic here
            { question: "The data '1100101' is sent with an odd parity bit. Which of the following bytes was actually transmitted?", options: ["11100101", "01100101", "11001011", "11001010"], answer: "11001011" }
        ]
    },
    "c2-packet-switching": {
        title: "Packet Structure and Packet Switching",
        chapter: "Chapter 2",
        subtitle: "Test your knowledge of Chapter 2.",
        questions: [
            // TODO: Add all questions for this topic here
            { question: "What is a packet?", options: ["A", "B", "C", "D"], answer: "A" },
            { question: "What is the purpose of a packet header?", options: ["A", "B", "C", "D"], answer: "B" }
        ]
    },
    "c2-data-transmission": {
        title: "Methods of Data Transmission and USB",
        chapter: "Chapter 2",
        subtitle: "Test your knowledge of Chapter 2.",
        questions: [
            // TODO: Add all questions for this topic here
            { question: "What is serial transmission?", options: ["A", "B", "C", "D"], answer: "C" },
            { question: "What does USB stand for?", options: ["A", "B", "C", "D"], answer: "D" }
        ]
    }
    // Add more quiz objects here as needed
};
