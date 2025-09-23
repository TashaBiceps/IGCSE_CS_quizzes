// quizzes.js

// This object will hold all of your quizzes.
// The key (e.g., "c2-error-detection") MUST MATCH the data-quiz-id in your index.html
export const quizzes = {
    "c1-data-representation": {
        title: "Data Representation",
        chapter: "Chapter 1",
        subtitle: "Test your knowledge of Chapter 1.",
        questions: [
            { question: "[DEFINITION] What is the primary purpose of encryption?", options: ["To make data files smaller.", "To check if data has been corrupted during transmission.", "To scramble data to make it unreadable to unauthorised users.", "To correct errors in a data packet automatically."], answer: "To scramble data to make it unreadable to unauthorised users." },
            { question: "[DEFINITION] Which error detection method involves adding an extra bit to a block of data?", options: ["Checksum", "Parity check", "Automatic Repeat Request (ARQ)", "Encryption"], answer: "Parity check" },
            // ... copy ALL 20 questions for this topic here
            { question: "The data '1100101' is sent with an odd parity bit. Which of the following bytes was actually transmitted?", options: ["11100101", "01100101", "11001011", "11001010"], answer: "11001011" }
        ]
    },
    "c2-error-detection": {
        title: "Error Detection and Encryption",
        chapter: "Chapter 2",
        subtitle: "Test your knowledge of Chapter 2.",
        questions: [
          { "question": "[DEFINITION] What is the primary purpose of encryption?", "options": ["To make data files smaller.", "To check if data has been corrupted during transmission.", "To scramble data to make it unreadable to unauthorised users.", "To correct errors in a data packet automatically."], "answer": "To scramble data to make it unreadable to unauthorised users." },
          { "question": "[DEFINITION] Which error detection method involves adding an extra bit to a block of data to make the total number of 1s either even or odd?", "options": ["Checksum", "Parity check", "Automatic Repeat Request (ARQ)", "Encryption"], "answer": "Parity check" },
          { "question": "[DEFINITION] In cryptography, what is a 'key'?", "options": ["A hardware device used to lock a computer.", "A piece of information used by an algorithm to encrypt and/or decrypt data.", "The part of a packet that contains the main data.", "An error found in a transmitted message."], "answer": "A piece of information used by an algorithm to encrypt and/or decrypt data." },
          { "question": "A byte of data (11010010) is to be sent using an even parity check. What will be the value of the parity bit?", "options": ["0", "1", "It cannot be determined.", "2"], "answer": "0" },
          { "question": "A system uses a parity check to detect errors. A byte is received as 10110101 with an even parity bit. What can be concluded?", "options": ["The data is correct.", "An error has definitely occurred.", "The data is encrypted.", "The system should use a checksum instead."], "answer": "An error has definitely occurred." },
          { "question": "What is a major limitation of using a simple parity check for error detection?", "options": ["It can detect an even number of bit errors (e.g., 2 bits flipped).", "It cannot detect an odd number of bit errors (e.g., 1 bit flipped).", "It cannot detect an even number of bit errors (e.g., 2 bits flipped).", "It makes the data transmission much slower."], "answer": "It cannot detect an even number of bit errors (e.g., 2 bits flipped)." },
          { "question": "What is symmetric encryption?", "options": ["A method that uses two different keys: one for encryption and one for decryption.", "A method that uses the same key for both encryption and decryption.", "An encryption method that is not very secure.", "A method used only for checking data for errors."], "answer": "A method that uses the same key for both encryption and decryption." },
          { "question": "A user is sending their credit card details to an online shop. The website URL begins with 'HTTPS'. What does this indicate?", "options": ["The website does not use any error detection methods.", "The website is very fast.", "The data transmitted between the browser and the server is encrypted.", "The website has been checked for spelling errors."], "answer": "The data transmitted between the browser and the server is encrypted." },
          { "question": "Which error detection method involves calculating a numerical value based on the data block and sending this value with the data for verification?", "options": ["Parity check", "Automatic Repeat Request (ARQ)", "Checksum", "Asymmetric encryption"], "answer": "Checksum" },
          { "question": "What is the primary function of an Automatic Repeat Request (ARQ) system?", "options": ["To encrypt the data before it is sent.", "To add a parity bit to the data.", "To use acknowledgements and timeouts to ensure corrupted or lost packets are resent.", "To check the data for viruses."], "answer": "To use acknowledgements and timeouts to ensure corrupted or lost packets are resent." },
          { "question": "A sender transmits a packet but does not receive an acknowledgement from the receiver within a specified time. What happens next in an ARQ system?", "options": ["The sender assumes the packet was received correctly.", "The receiver deletes the packet.", "The sender automatically retransmits the same packet.", "The connection is terminated."], "answer": "The sender automatically retransmits the same packet." },
          { "question": "A bank needs to send highly confidential data to another branch. They use an encryption method where the encryption key can be made public, but the decryption key is kept secret. What is this method called?", "options": ["Symmetric encryption", "Asymmetric encryption (public-key cryptography)", "Checksum", "Parity check"], "answer": "Asymmetric encryption (public-key cryptography)" },
          { "question": "How does a checksum provide a more robust error check than a single parity bit?", "options": ["It is much faster to calculate.", "It is less likely to be fooled by multiple bit errors in the data.", "It can be used to encrypt the data as well.", "It only works on text data."], "answer": "It is less likely to be fooled by multiple bit errors in the data." },
          { "question": "The text 'HELLO' is encrypted into 'KHOOR'. What type of encryption cipher is most likely being used?", "options": ["Asymmetric encryption", "A substitution cipher (like a Caesar cipher)", "A checksum algorithm", "A parity check"], "answer": "A substitution cipher (like a Caesar cipher)" },
          { "question": "A receiving computer calculates a checksum of '101' for a received data block, but the checksum sent with the data was '100'. What does this imply?", "options": ["The data was transmitted without error.", "The data was encrypted correctly.", "A data transmission error has occurred.", "The sender used the wrong parity bit."], "answer": "A data transmission error has occurred." },
          { "question": "Why is data encryption particularly important for Wi-Fi networks?", "options": ["Because Wi-Fi signals are slower than wired connections.", "Because Wi-Fi is not able to use error detection.", "Because radio waves can be easily intercepted by unauthorised users nearby.", "Because Wi-Fi networks cannot transmit text data."], "answer": "Because radio waves can be easily intercepted by unauthorised users nearby." },
          { "question": "Which of these is a significant challenge when using symmetric encryption between two parties who have never met?", "options": ["The encryption process is very slow.", "Securely sharing the single secret key.", "The encrypted data files are very large.", "It is impossible to decrypt the data."], "answer": "Securely sharing the single secret key." },
          { "question": "What is the name for the original, readable data before it has been encrypted?", "options": ["Ciphertext", "Plaintext", "Keytext", "Scrambled text"], "answer": "Plaintext" },
          { "question": "Which of the following methods is designed to correct errors, not just detect them?", "options": ["Parity check", "Checksum", "Error-Correcting Codes (ECC)", "Symmetric Encryption"], "answer": "Error-Correcting Codes (ECC)" },
          { "question": "The data '1100101' is sent with an odd parity bit. Which of the following bytes was actually transmitted?", "options": ["11100101", "01100101", "11001011", "11001010"], "answer": "11001011" }
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
