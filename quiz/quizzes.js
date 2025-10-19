export const quizzes = {
    // CHAPTER 1
    "c1-data-representation": {
        title: "Image, Sound, and Text Data Compression",
        chapter: "Chapter 1",
        subtitle: "Test your knowledge of the Chapter 1.",
        questions: [
            { "question": "[DEFINITION] What is the name of the 7-bit character set used to represent text in computers?", "options": ["Unicode", "Bitmap", "ASCII", "MIDI"], "answer": "ASCII" },
            { "question": "[DEFINITION] What is metadata in the context of an image file?", "options": ["The total number of pixels in the image.", "A lossless compression algorithm.", "The physical dimensions of the printed image.", "Data about the image, such as its height, width, and colour depth."], "answer": "Data about the image, such as its height, width, and colour depth." },
            { "question": "[DEFINITION] What does the term 'colour depth' refer to in a digital image?", "options": ["The total number of colours in the image.", "The number of bits used to represent the colour of a single pixel.", "The physical size of the image.", "The brightness of the image."], "answer": "The number of bits used to represent the colour of a single pixel." },
            { "question": "An image has a width of 100 pixels and a height of 50 pixels. Its colour depth is 8 bits. Calculate the file size in bytes, ignoring metadata.", "options": ["40,000 bytes", "5,000 bytes", "800 bytes", "625 bytes"], "answer": "5,000 bytes" },
            { "question": "How many unique characters can be represented using the standard 7-bit ASCII character set?", "options": ["7", "64", "128", "256"], "answer": "128" },
            { "question": "A sound wave is sampled to be converted into a digital file. What does the 'sampling rate' determine?", "options": ["The volume of the sound.", "The number of bits used for each sample.", "The number of samples taken per second.", "The length of the audio file."], "answer": "The number of samples taken per second." },
            { "question": "Which of the following is an example of lossy compression?", "options": ["Storing a text file as a ZIP file.", "Saving an image as a PNG file.", "Compressing a song into an MP3 file.", "Using Run-Length Encoding (RLE)."], "answer": "Compressing a song into an MP3 file." },
            { "question": "What is the main advantage of using Unicode over ASCII?", "options": ["Unicode files are always smaller.", "Unicode can represent a much larger range of characters from different languages.", "Unicode is only used for representing numbers.", "Unicode is an older and more established standard."], "answer": "Unicode can represent a much larger range of characters from different languages." },
            { "question": "A student needs to email a large, high-quality photograph for a project, but the file is too big. The quality of the image is very important and cannot be reduced. Which compression method should be used?", "options": ["Lossy compression", "Lossless compression", "Sound compression", "Bitmap conversion"], "answer": "Lossless compression" },
            { "question": "What is the primary characteristic of lossy compression?", "options": ["The original file can be perfectly reconstructed from the compressed file.", "It is only used for text files.", "Some data is permanently removed to reduce the file size.", "It always makes the file size larger."], "answer": "Some data is permanently removed to reduce the file size." },
            { "question": "A digital audio file has a higher sampling resolution (bit depth). What is the effect on the sound quality and file size?", "options": ["The sound quality is lower, and the file size is smaller.", "The sound quality is higher, and the file size is smaller.", "The sound quality is lower, and the file size is larger.", "The sound quality is higher, and the file size is larger."], "answer": "The sound quality is higher, and the file size is larger." },
            { "question": "How is a bitmap image represented by a computer?", "options": ["As a series of mathematical equations for shapes and lines.", "As a grid of pixels, where each pixel is assigned a binary value for its colour.", "As a sequence of instructions for a MIDI player.", "As a set of ASCII characters."], "answer": "As a grid of pixels, where each pixel is assigned a binary value for its colour." },
            { "question": "Which unit of data storage is the largest?", "options": ["Kilobyte (KB)", "Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)"], "answer": "Terabyte (TB)" },
            { "question": "Run-Length Encoding (RLE) is a form of lossless compression. It would be most effective on which of these binary strings?", "options": ["0101010101010101", "1111111100000000", "1011010010011101", "0011011101010001"], "answer": "1111111100000000" },
            { "question": "A sound recording needs to be made smaller to stream over a slow internet connection. The highest audio fidelity is not necessary. What is the most appropriate file format to use?", "options": ["WAV (uncompressed)", "FLAC (lossless)", "MP3 (lossy)", "MIDI"], "answer": "MP3 (lossy)" },
            { "question": "A black and white image has a resolution of 400 x 300 pixels. What would be its minimum file size in kilobytes (KB)? (1 KB = 1024 bytes)", "options": ["120 KB", "14.65 KB", "15 KB", "117.19 KB"], "answer": "14.65 KB" },
            { "question": "Which of the following would NOT be stored in an image file's metadata?", "options": ["Image width in pixels.", "The binary data for the first pixel.", "The date the image was created.", "The colour depth."], "answer": "The binary data for the first pixel." },
            { "question": "Why would a company choose to use lossy compression for images on its public website?", "options": ["To ensure the images are of the highest possible quality.", "To make the images uncopyable.", "To reduce file sizes, which makes the webpages load faster for visitors.", "Because lossy compression is required by law for all websites."], "answer": "To reduce file sizes, which makes the webpages load faster for visitors." },
            { "question": "A file is 2048 Megabytes. How many Gigabytes is this?", "options": ["20.48 GB", "2.048 GB", "2 GB", "0.2 GB"], "answer": "2 GB" },
            { "question": "During the process of converting an analogue sound wave to a digital signal, the amplitude of the wave at each sample point is measured and rounded to the nearest available level. What is this process called?", "options": ["Sampling", "Quantisation", "Compression", "Encoding"], "answer": "Quantisation" }
        ]
    },
    // CHAPTER 2
    "c2-methods-usb": {
        title: "Methods and USB",
        chapter: "Chapter 2",
        subtitle: "Test your knowledge of the Chapter 2.",
        questions: [
            { "question": "[DEFINITION] What is serial data transmission?", "options": ["Data bits are sent one after another over a single channel.", "Multiple data bits are sent simultaneously over several channels.", "Data is sent in both directions at the same time.", "Data is sent only in one direction."], "answer": "Data bits are sent one after another over a single channel." },
            { "question": "[DEFINITION] Which mode of transmission allows data to be sent in both directions, but not at the same time?", "options": ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"], "answer": "Half-duplex" },
            { "question": "[DEFINITION] What does the term 'baud rate' refer to?", "options": ["The total number of bits transmitted per second.", "The number of signal changes or symbols per second.", "The physical distance data can be transmitted.", "The number of wires used in the transmission."], "answer": "The number of signal changes or symbols per second." },
            { "question": "A remote control for a television sends signals to the TV. This is an example of which mode of data transmission?", "options": ["Simplex", "Half-duplex", "Full-duplex", "Parallel"], "answer": "Simplex" },
            { "question": "Which of the following is a key advantage of serial transmission over parallel transmission for long distances?", "options": ["It is significantly faster for the same number of bits.", "It is less prone to data skew and crosstalk errors.", "It uses more wires, making the cables cheaper.", "It can only send data in one direction."], "answer": "It is less prone to data skew and crosstalk errors." },
            { "question": "A telephone conversation, where both people can speak and hear at the same time, is an example of which transmission mode?", "options": ["Simplex", "Half-duplex", "Full-duplex", "Serial"], "answer": "Full-duplex" },
            { "question": "What is the primary function of the Universal Serial Bus (USB) interface?", "options": ["To provide a wireless connection to the internet.", "To provide a standardised way for connecting peripheral devices to a computer.", "To increase the processing speed of the CPU.", "To store the operating system and user files."], "answer": "To provide a standardised way for connecting peripheral devices to a computer." },
            { "question": "An internal connection between a computer's processor and its main memory needs to be as fast as possible. Which method of transmission would be used?", "options": ["Serial", "Simplex", "Parallel", "Half-duplex"], "answer": "Parallel" },
            { "question": "A walkie-talkie system requires users to press a button to talk and release it to listen. This is a classic example of:", "options": ["Simplex transmission", "Full-duplex transmission", "Parallel transmission", "Half-duplex transmission"], "answer": "Half-duplex transmission" },
            { "question": "When a new device is connected via a USB port, the computer automatically detects it and installs the necessary driver. What is this feature called?", "options": ["Hot-swapping", "Plug and Play", "Serial communication", "Data skew"], "answer": "Plug and Play" },
            { "question": "Which statement accurately describes the bit rate?", "options": ["It is always half the baud rate.", "It measures the number of bits (1s and 0s) transmitted per second.", "It is only relevant for parallel transmission.", "It measures the number of signal changes per minute."], "answer": "It measures the number of bits (1s and 0s) transmitted per second." },
            { "question": "USB is a type of serial transmission. What is a benefit of this for the physical cable?", "options": ["The cable requires many internal wires, making it very thick.", "The cable is simpler and has fewer internal wires compared to a parallel cable.", "The cable can only be used over very short distances (less than 10cm).", "The cable does not need to carry power."], "answer": "The cable is simpler and has fewer internal wires compared to a parallel cable." },
            { "question": "A user connects a mouse, keyboard, and webcam to their computer, all using the same type of rectangular port. What interface are they most likely using?", "options": ["HDMI", "VGA", "USB", "Ethernet"], "answer": "USB" },
            { "question": "In parallel transmission, what is 'data skew'?", "options": ["When the data is encrypted incorrectly.", "When bits sent on different wires arrive at their destination at different times.", "When data is sent in the wrong direction.", "When the transmission speed is too high."], "answer": "When bits sent on different wires arrive at their destination at different times." },
            { "question": "A user connects their smartphone to a computer's USB port. Which of the following can happen simultaneously?", "options": ["The phone can only charge but cannot transfer data.", "The computer can only send data to the phone, but not receive.", "The phone can charge while also transferring data to and from the computer.", "The data can only be transferred, but the phone cannot be charged."], "answer": "The phone can charge while also transferring data to and from the computer." }
        ]
    },
    "c2-packet-switching": {
        title: "Packet Structure and Packet Switching",
        chapter: "Chapter 2",
        subtitle: "Test your knowledge of the Chapter 2.",
        questions: [
            { "question": "[DEFINITION] What is a data packet?", "options": ["A single cable used to transmit data.", "A small unit of data sent over a network.", "A security protocol for wireless networks.", "A hardware device that connects networks."], "answer": "A small unit of data sent over a network." },
            { "question": "[DEFINITION] What is packet switching?", "options": ["A method of physically switching network cables.", "A method of grouping data into packets, which are then routed independently across a network.", "A security feature that switches a user's IP address.", "A technique for compressing data packets to make them smaller."], "answer": "A method of grouping data into packets, which are then routed independently across a network." },
            { "question": "[DEFINITION] Which part of a data packet contains the actual data being sent, such as part of an email or webpage?", "options": ["Header", "Payload", "Trailer", "Checksum"], "answer": "Payload" },
            { "question": "What is the primary purpose of including the destination IP address in a packet's header?", "options": ["To identify the type of data being sent.", "To tell routers where to forward the packet.", "To check if the packet has been corrupted.", "To know which computer originally sent the packet."], "answer": "To tell routers where to forward the packet." },
            { "question": "Which part of a packet is used to verify that the data has not been corrupted during transmission?", "options": ["The IP address", "The packet number", "The payload", "The checksum or error-checking data"], "answer": "The checksum or error-checking data" },
            { "question": "In packet switching, why are files broken down into multiple packets?", "options": ["To make the files larger and more secure.", "To allow multiple users to share a network connection efficiently.", "Because a single packet can hold an entire file.", "To ensure all packets arrive at the same time."], "answer": "To allow multiple users to share a network connection efficiently." },
            { "question": "A user is watching a video online. The video data is sent as a stream of packets. What information in the packet header is essential for reassembling the packets in the correct order?", "options": ["The source IP address", "The packet sequence number", "The destination MAC address", "The checksum"], "answer": "The packet sequence number" },
            { "question": "What is a major advantage of packet switching over circuit switching?", "options": ["It guarantees that all packets will arrive in order.", "It is much less efficient in its use of the network.", "It does not require a dedicated, end-to-end connection for the duration of the transmission.", "It is an older and simpler technology."], "answer": "It does not require a dedicated, end-to-end connection for the duration of the transmission." },
            { "question": "A router receives a packet. What is the first thing it does to decide where to send the packet next?", "options": ["It checks the payload for viruses.", "It examines the destination IP address in the packet's header.", "It re-calculates the checksum.", "It sends the packet to every device on the network."], "answer": "It examines the destination IP address in the packet's header." },
            { "question": "When sending an email, the packets that make up the email might travel through different routes from the sender to the receiver. What is this concept a feature of?", "options": ["File compression", "Packet switching", "Circuit switching", "Email encryption"], "answer": "Packet switching" },
            { "question": "What happens at the destination computer once all the packets for a file have been received?", "options": ["The packets are immediately deleted.", "The computer sends them back to the original sender.", "The packets are reordered using their sequence numbers and the original file is reassembled.", "The computer broadcasts the packets to the rest of the local network."], "answer": "The packets are reordered using their sequence numbers and the original file is reassembled." },
            { "question": "The part of the packet that contains control information, such as the source and destination addresses, is known as the:", "options": ["Body", "Payload", "Trailer", "Header"], "answer": "Header" },
            { "question": "If a packet is found to be corrupted upon arrival, what usually happens?", "options": ["The corrupted packet is ignored and the file is reassembled without it.", "The receiving computer attempts to fix the corrupted data.", "A request is sent back to the sender to retransmit the missing or corrupted packet.", "The entire file is re-requested from the start."], "answer": "A request is sent back to the sender to retransmit the missing or corrupted packet." },
            { "question": "Which of the following would NOT be found in the header of a typical data packet?", "options": ["Destination IP address", "The full content of the file being sent", "Packet sequence number", "Source IP address"], "answer": "The full content of the file being sent" },
            { "question": "On a busy network, some packets may get delayed, leading to 'jitter' in a video call. This happens because packet switching...", "options": ["guarantees all packets arrive at the exact same time.", "does not guarantee the delivery time for each individual packet.", "sends all data through a single, dedicated path.", "is not suitable for sending video data."], "answer": "does not guarantee the delivery time for each individual packet." },
            { "question": "A packet trailer might contain data that indicates...", "options": ["the IP address of the sender.", "the end of the packet and error-checking information.", "the total number of packets in the transmission.", "the type of web browser being used."], "answer": "the end of the packet and error-checking information." },
            { "question": "What is a 'hop count' in the context of packet switching?", "options": ["The number of times a packet has been corrupted.", "The total number of packets in a file.", "The number of routers a packet has passed through on its journey.", "A measure of the packet's physical size."], "answer": "The number of routers a packet has passed through on its journey." },
            { "question": "Why is packet switching described as a 'fault-tolerant' system?", "options": ["Because it never makes any errors.", "Because it can automatically find new routes for packets if one router fails.", "Because all packets must follow the exact same path.", "Because it is immune to computer viruses."], "answer": "Because it can automatically find new routes for packets if one router fails." },
            { "question": "A user sends a 5MB image to a friend. The network protocol breaks this image into 1500-byte packets. How many packets will be created (approximately)?", "options": ["About 3 packets", "About 35 packets", "About 350 packets", "About 3500 packets"], "answer": "About 3500 packets" },
            { "question": "The process of a router receiving a packet, examining its destination address, and sending it on towards its destination is known as:", "options": ["Packet assembly", "Packet forwarding", "Packet creation", "Packet encryption"], "answer": "Packet forwarding" }
        ]
    },
    "c2-error-detection": {
        title: "Error Detection and Encryption",
        chapter: "Chapter 2",
        subtitle: "Test your knowledge of the Chapter 2.",
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
    // CHAPTER 3
    "c3-cpu-fde": {
        title: "Hardware (CPU and the FDE cycle)",
        chapter: "Chapter 3",
        subtitle: "Test your knowledge of the CPU and the FDE cycle.",
        questions: [
            { "question": "What is the primary function of the Control Unit (CU) within the CPU?", "options": ["To perform all mathematical calculations and logical operations.", "To store frequently used instructions and data.", "To manage and coordinate the activities of the CPU, directing the flow of data.", "To hold the address of the next instruction to be processed."], "answer": "To manage and coordinate the activities of the CPU, directing the flow of data." },
            { "question": "Which component of the CPU is responsible for carrying out arithmetic and logic operations?", "options": ["Control Unit (CU)", "Memory Address Register (MAR)", "Arithmetic Logic Unit (ALU)", "Program Counter (PC)"], "answer": "Arithmetic Logic Unit (ALU)" },
            { "question": "A manufacturer releases a new processor with a higher clock speed. What is the direct impact of this change?", "options": ["The processor can execute more Fetch-Decode-Execute cycles per second.", "The amount of cache memory is increased.", "The processor can run more programs simultaneously.", "The physical size of the CPU is reduced."], "answer": "The processor can execute more Fetch-Decode-Execute cycles per second." },
            { "question": "What is the role of cache memory in improving CPU performance?", "options": ["It provides long-term, non-volatile storage for the operating system.", "It is a type of ROM that stores the computer's boot-up sequence.", "It stores frequently accessed data and instructions, providing faster access than RAM.", "It increases the number of processing cores in the CPU."], "answer": "It stores frequently accessed data and instructions, providing faster access than RAM." },
            { "question": "A computer has a quad-core processor. What does this mean?", "options": ["The processor has four separate cache memory modules.", "The processor can execute four instructions in a single clock cycle.", "The processor contains four independent processing units (cores).", "The clock speed of the processor is four times that of a single-core CPU."], "answer": "The processor contains four independent processing units (cores)." },
            { "question": "Which register holds the address of the next instruction to be fetched from memory?", "options": ["Memory Address Register (MAR)", "Memory Data Register (MDR)", "Program Counter (PC)", "Accumulator (ACC)"], "answer": "Program Counter (PC)" },
            { "question": "During the Fetch stage of the FDE cycle, the address from the Program Counter is copied to which register?", "options": ["Current Instruction Register (CIR)", "Memory Data Register (MDR)", "Accumulator (ACC)", "Memory Address Register (MAR)"], "answer": "Memory Address Register (MAR)" },
            { "question": "After an instruction is fetched from the memory location held in the MAR, where is it temporarily stored?", "options": ["In the Program Counter (PC)", "In the Memory Data Register (MDR)", "In the Arithmetic Logic Unit (ALU)", "In the Control Unit (CU)"], "answer": "In the Memory Data Register (MDR)" },
            { "question": "What happens during the 'Decode' stage of the Fetch-Decode-Execute cycle?", "options": ["The instruction is retrieved from RAM.", "The Control Unit interprets the instruction to determine what action to perform.", "The Arithmetic Logic Unit performs the calculation.", "The Program Counter is incremented."], "answer": "The Control Unit interprets the instruction to determine what action to perform." },
            { "question": "In the 'Execute' stage, the instruction that was decoded is finally carried out. Which component is primarily responsible for this?", "options": ["The Program Counter (PC)", "The Memory Address Register (MAR)", "The Arithmetic Logic Unit (ALU) or other relevant hardware.", "The system clock."], "answer": "The Arithmetic Logic Unit (ALU) or other relevant hardware." },
            { "question": "What is the final step of the Fetch stage in the FDE cycle?", "options": ["The instruction is executed.", "The address is sent down the address bus.", "The Program Counter (PC) is incremented by one.", "The instruction is decoded by the CU."], "answer": "The Program Counter (PC) is incremented by one." },
            { "question": "Which bus is used to transfer the actual instruction from RAM to the CPU?", "options": ["Address Bus", "Data Bus", "Control Bus", "System Bus"], "answer": "Data Bus" },
            { "question": "A CPU with a larger cache size will likely perform better because...", "options": ["it has more cores to process data.", "its clock speed is automatically increased.", "it reduces the need to access the slower main memory (RAM) as frequently.", "it can store the entire operating system."], "answer": "it reduces the need to access the slower main memory (RAM) as frequently." },
            { "question": "Which register holds the results of calculations performed by the ALU?", "options": ["Program Counter (PC)", "Memory Address Register (MAR)", "Accumulator (ACC)", "Current Instruction Register (CIR)"], "answer": "Accumulator (ACC)" },
            { "question": "What is meant by the 'architecture' of a CPU?", "options": ["The physical size and shape of the processor.", "The design and layout of the internal components of the CPU, like the CU, ALU, and registers.", "The speed at which the CPU operates.", "The company that manufactured the CPU."], "answer": "The design and layout of the internal components of the CPU, like the CU, ALU, and registers." },
            { "question": "Increasing the number of cores in a CPU is most beneficial for which scenario?", "options": ["Running a single, simple application like a text editor.", "Performing tasks that can be split into smaller parts and run in parallel, like video editing.", "Increasing the speed of data transfer from the hard drive.", "Improving the quality of the graphics displayed on the monitor."], "answer": "Performing tasks that can be split into smaller parts and run in parallel, like video editing." },
            { "question": "The speed of the Fetch-Decode-Execute cycle is determined by...", "options": ["the amount of RAM installed.", "the size of the hard drive.", "the system clock.", "the number of connected peripherals."], "answer": "the system clock." },
            { "question": "Which of these is NOT a factor that directly affects a CPU's performance?", "options": ["Clock speed", "Number of cores", "Screen resolution", "Cache size"], "answer": "Screen resolution" },
            { "question": "What is a CPU register?", "options": ["A large, long-term storage area.", "A small, high-speed temporary storage location within the CPU.", "A tool for managing user accounts.", "A component that cools the processor."], "answer": "A small, high-speed temporary storage location within the CPU." },
            { "question": "During the FDE cycle, the instruction is copied from the MDR to which register for decoding?", "options": ["Program Counter (PC)", "Accumulator (ACC)", "Memory Address Register (MAR)", "Current Instruction Register (CIR)"], "answer": "Current Instruction Register (CIR)" },
            { "question": "The Von Neumann architecture is significant because it introduced the concept of...", "options": ["having multiple processing cores.", "using graphical user interfaces.", "storing both data and instructions in the same memory unit.", "using wireless connectivity."], "answer": "storing both data and instructions in the same memory unit." },
            { "question": "Why is cache memory faster to access than RAM?", "options": ["It holds more data than RAM.", "It is physically located closer to the CPU cores.", "It is a non-volatile type of memory.", "It uses a different bus system."], "answer": "It is physically located closer to the CPU cores." },
            { "question": "A clock speed of 3.2 GHz means that the CPU can perform...", "options": ["3.2 million cycles per second.", "3.2 billion cycles per second.", "3.2 thousand cycles per second.", "3.2 trillion cycles per second."], "answer": "3.2 billion cycles per second." },
            { "question": "Which of the following would NOT be processed by the ALU?", "options": ["ADD R1, R2", "COMPARE R1, R3", "LOAD R1, [address]", "OR R1, R4"], "answer": "LOAD R1, [address]" },
            { "question": "An embedded system, like in a microwave oven, typically has a CPU designed for...", "options": ["high-performance multitasking and gaming.", "a specific, dedicated function with low power consumption.", "running a wide variety of general-purpose software.", "connecting to the internet to download updates."], "answer": "a specific, dedicated function with low power consumption." }
        ]
    },
    "c3-input-output": {
        title: "Hardware (Input and Output)",
        chapter: "Chapter 3",
        subtitle: "Test your knowledge of the Input and Output.",
        questions: [
            { "question": "Which input device is best suited for reading the account number from the bottom of a cheque?", "options": ["Magnetic Ink Character Reader (MICR)", "Optical Mark Reader (OMR)", "Barcode Scanner", "QR Code Reader"], "answer": "Magnetic Ink Character Reader (MICR)" },
            { "question": "A student is answering a multiple-choice examination on a paper form by shading in boxes. Which device would be used to automatically mark these papers?", "options": ["A flatbed scanner", "An Optical Mark Reader (OMR)", "A webcam", "A keyboard"], "answer": "An Optical Mark Reader (OMR)" },
            { "question": "Which of these is an example of an output device?", "options": ["Microphone", "Webcam", "Actuator", "Light sensor"], "answer": "Actuator" },
            { "question": "A supermarket checkout operator scans a product's packaging to retrieve its price. What input device are they using?", "options": ["QR Code Reader", "Magnetic Stripe Reader", "Barcode Scanner", "Chip and PIN Reader"], "answer": "Barcode Scanner" },
            { "question": "What is the primary function of a sensor in a computer-controlled system?", "options": ["To output sound to the user.", "To process data using a microprocessor.", "To convert a physical property into an electrical signal.", "To display images on a screen."], "answer": "To convert a physical property into an electrical signal." },
            { "question": "A scientist needs to produce a large, high-quality, physical drawing of a building's blueprint. Which output device is most suitable for this task?", "options": ["Inkjet printer", "Laser printer", "3D printer", "Plotter"], "answer": "Plotter" },
            { "question": "Which technology is used by a touch screen that relies on the electrical properties of the human body to detect input?", "options": ["Resistive", "Infrared", "Capacitive", "Surface Acoustic Wave"], "answer": "Capacitive" },
            { "question": "What type of printer works by heating special paper to produce an image, often used for printing receipts?", "options": ["Laser printer", "Dot matrix printer", "Thermal printer", "Inkjet printer"], "answer": "Thermal printer" },
            { "question": "An actuator is a type of motor used in control systems. What is its role?", "options": ["To measure temperature.", "To convert digital signals into physical movement.", "To capture digital images.", "To input text into a system."], "answer": "To convert digital signals into physical movement." },
            { "question": "A photographer wants to print high-quality colour photographs. Which type of printer would produce the best results?", "options": ["Dot matrix printer", "Inkjet printer", "Thermal printer", "Plotter"], "answer": "Inkjet printer" },
            { "question": "Which of these devices creates a solid, physical object from a digital design?", "options": ["Laser printer", "Plotter", "3D printer", "Inkjet printer"], "answer": "3D printer" },
            { "question": "A smartphone automatically rotates its screen when turned sideways. Which sensor is responsible for detecting this orientation change?", "options": ["Pressure sensor", "Light sensor", "Accelerometer", "Temperature sensor"], "answer": "Accelerometer" },
            { "question": "What is a key difference between a laser printer and an inkjet printer?", "options": ["Laser printers use liquid ink, while inkjet printers use powdered toner.", "Laser printers are impact printers, while inkjet printers are non-impact.", "Laser printers use powdered toner and heat, while inkjet printers spray droplets of liquid ink.", "Laser printers can only print in black and white, while inkjet printers can print in colour."], "answer": "Laser printers use powdered toner and heat, while inkjet printers spray droplets of liquid ink." },
            { "question": "Which input device would be used to convert a physical, printed document into a digital file on a computer?", "options": ["Printer", "Scanner", "Monitor", "Plotter"], "answer": "Scanner" },
            { "question": "A burglar alarm system needs to detect if an intruder is moving around a room. Which sensor would be most appropriate for this task?", "options": ["Humidity sensor", "Infrared (IR) / Motion sensor", "pH sensor", "Pressure sensor"], "answer": "Infrared (IR) / Motion sensor" },
            { "question": "Which output device is best for a person with a visual impairment to read text from a computer screen?", "options": ["Speakers", "A plotter", "A Braille terminal", "A high-resolution monitor"], "answer": "A Braille terminal" },
            { "question": "What does a QR (Quick Response) code typically store?", "options": ["Only a 12-digit number for product identification.", "A web address (URL), text information, or contact details.", "High-resolution images.", "Executable program files."], "answer": "A web address (URL), text information, or contact details." },
            { "question": "Which of these is a direct data entry (DDE) device?", "options": ["Mouse", "Keyboard", "Chip and PIN reader", "Microphone"], "answer": "Chip and PIN reader" },
            { "question": "What technology does an inkjet printer use to create an image on paper?", "options": ["It uses a laser beam to fuse toner onto the paper.", "It strikes an inked ribbon against the paper.", "It sprays microscopic droplets of ink from a print head.", "It uses heated pins to burn dots onto special paper."], "answer": "It sprays microscopic droplets of ink from a print head." },
            { "question": "Which device is both an input and an output device?", "options": ["A keyboard", "A printer", "A touch screen", "A mouse"], "answer": "A touch screen" },
            { "question": "[SITUATIONAL] An automated greenhouse needs to maintain a constant, warm environment for plants. Which two sensors would be essential for this system?", "options": ["Light and sound sensors", "Temperature and humidity sensors", "Pressure and motion sensors", "pH and sound sensors"], "answer": "Temperature and humidity sensors" },
            { "question": "[SITUATIONAL] A pilot is using a flight simulator. Which combination of input/output devices would provide the most realistic experience?", "options": ["Keyboard, mouse, and a standard monitor.", "Microphone, speakers, and a printer.", "Joystick, pedals, and large-screen displays.", "Touch screen and a dot matrix printer."], "answer": "Joystick, pedals, and large-screen displays." },
            { "question": "[SITUATIONAL] A hospital needs to print multi-part patient forms where the text must pass through several carbon copies. Which type of printer is required?", "options": ["Laser printer", "Inkjet printer", "Dot matrix printer", "3D printer"], "answer": "Dot matrix printer" },
            { "question": "[SITUATIONAL] A modern car is designed to automatically turn on its headlights when it gets dark. What sensor enables this feature?", "options": ["A moisture sensor", "A light sensor", "A proximity sensor", "A temperature sensor"], "answer": "A light sensor" },
            { "question": "[SITUATIONAL] A new office requires a printer that can handle a high volume of black-and-white text documents quickly and at a low cost per page. What is the best choice?", "options": ["A colour inkjet printer", "A monochrome laser printer", "A 3D printer", "A plotter"], "answer": "A monochrome laser printer" }
        ]
    },
    "c3-memory-storage": {
        title: "Hardware (Memory and Storage)",
        chapter: "Chapter 3",
        subtitle: "Test your knowledge of Memory and Storage.",
        questions: [
            { "question": "A student's computer slows down significantly when running multiple large applications. Using a section of the HDD to act as temporary RAM is known as what?", "options": ["Cache memory", "Swapping", "Virtual memory", "Paging file"], "answer": "Virtual memory" },
            { "question": "A photographer needs a portable storage device to transfer large photo files between computers. The device must be durable and have fast access speeds. Which is most suitable?", "options": ["DVD-RW", "Magnetic Tape", "External HDD", "Solid State Drive (SSD)"], "answer": "Solid State Drive (SSD)" },
            { "question": "Identify the statement that correctly describes the difference between RAM and ROM.", "options": ["RAM is non-volatile and stores the BIOS; ROM is volatile and stores running programs.", "RAM is read-only; ROM is read-write.", "RAM is volatile and stores currently used data; ROM is non-volatile and stores the bootstrap loader.", "RAM has a larger capacity than ROM, but ROM is faster."], "answer": "RAM is volatile and stores currently used data; ROM is non-volatile and stores the bootstrap loader." },
            { "question": "A company wants to archive 10 terabytes of financial data each month. The data will not be accessed frequently. Which storage medium is the most cost-effective for this purpose?", "options": ["Blu-ray Discs", "Solid State Drives", "Magnetic Tape", "Cloud Storage"], "answer": "Magnetic Tape" },
            { "question": "Which of the following describes a key drawback of relying heavily on virtual memory?", "options": ["It can cause the CPU to overheat.", "It reduces the lifespan of the monitor.", "It is much slower to access than RAM, reducing system performance.", "It is a volatile form of memory."], "answer": "It is much slower to access than RAM, reducing system performance." },
            { "question": "What technology does a Solid State Drive (SSD) use for data storage?", "options": ["Magnetic platters and a read/write head", "Pits and lands read by a laser", "NAND-based flash memory", "Sequential access magnetic ribbon"], "answer": "NAND-based flash memory" },
            { "question": "A school needs to distribute a software application to students. The data on the disc must not be changed. Which optical media is the most appropriate for mass distribution?", "options": ["CD-RW", "DVD-RW", "CD-ROM", "Blu-ray RE"], "answer": "CD-ROM" },
            { "question": "Which type of memory is directly accessible by the CPU and holds the data and instructions that are currently in use?", "options": ["Secondary Storage", "Primary Memory (RAM)", "Offline Storage", "Virtual Memory"], "answer": "Primary Memory (RAM)" },
            { "question": "A Hard Disk Drive (HDD) is an example of a storage device with...?", "options": ["no moving parts.", "sequential access only.", "mechanical moving parts.", "volatile memory."], "answer": "mechanical moving parts." },
            { "question": "The contents of which memory chip are used to perform initial hardware checks and boot up the operating system when a computer is first switched on?", "options": ["RAM", "DRAM", "Cache", "ROM"], "answer": "ROM" },
            { "question": "A user wants to store their operating system and frequently used applications to ensure the fastest possible boot-up and loading times. Which device should they choose?", "options": ["A high-capacity HDD", "An internal SSD", "An external USB 3.0 HDD", "A Blu-ray disc"], "answer": "An internal SSD" },
            { "question": "What is a primary advantage of an HDD over an SSD?", "options": ["Lower cost per gigabyte", "Faster data access time", "Greater resistance to physical shock", "Lower power consumption"], "answer": "Lower cost per gigabyte" },
            { "question": "The term 'non-volatile' means that the memory...", "options": ["is extremely fast.", "retains its data when the power is turned off.", "can be written to multiple times.", "loses its data when the power is turned off."], "answer": "retains its data when the power is turned off." },
            { "question": "A user buys a DVD-RW disc. What does the 'RW' signify?", "options": ["Read Weekly: The disc expires after one week.", "Read-Write: The disc can be read from and written to many times.", "Read-Only: The disc can only be read from.", "Recordable Wavelength: A technical term for the laser used."], "answer": "Read-Write: The disc can be read from and written to many times." },
            { "question": "Which of these is a form of primary storage?", "options": ["HDD", "SSD", "CPU Registers", "USB Flash Drive"], "answer": "CPU Registers" },
            { "question": "Compared to secondary storage, primary storage is...", "options": ["slower, cheaper, and non-volatile.", "faster, more expensive per byte, and volatile.", "slower, more expensive per byte, and non-volatile.", "faster, cheaper, and volatile."], "answer": "faster, more expensive per byte, and volatile." },
            { "question": "A smartphone uses a memory card for storing photos and videos. This memory card is a type of...", "options": ["Optical storage", "Magnetic storage", "Volatile memory", "Solid-state storage"], "answer": "Solid-state storage" },
            { "question": "Which of these devices uses sequential data access, making it inefficient for retrieving a single file from the middle of the storage?", "options": ["Hard Disk Drive", "Magnetic Tape", "Solid State Drive", "CD-ROM"], "answer": "Magnetic Tape" },
            { "question": "Dynamic RAM (DRAM) is a type of RAM that needs to be constantly refreshed. Where is it most commonly used?", "options": ["As CPU cache memory", "As a computer's main memory", "In BIOS chips", "In camera memory cards"], "answer": "As a computer's main memory" },
            { "question": "What is the primary reason for having different levels of memory (e.g., cache, RAM, secondary storage) in a computer?", "options": ["To ensure compatibility with all types of software.", "To provide a balance between speed, cost, and capacity.", "To make the computer physically larger.", "To increase the power consumption of the system."], "answer": "To provide a balance between speed, cost, and capacity." },
            { "question": "A team of students living in different countries needs to collaborate on a single project document in real-time. Which storage method is most suitable for this task?", "options": ["External Hard Disk Drive (HDD)", "Cloud storage", "USB flash drive", "Local network server"], "answer": "Cloud storage" },
            { "question": "What is a major disadvantage of relying solely on cloud storage for all your important files?", "options": ["The files cannot be shared with other users.", "It requires a constant internet connection to access data.", "The storage capacity is usually very limited.", "It is not protected by password security."], "answer": "It requires a constant internet connection to access data." },
            { "question": "A user backs up their family photos to both an external SSD and a cloud storage service. What is a key advantage the cloud backup has over the SSD backup?", "options": ["It is significantly faster for the initial backup.", "It does not require an internet connection.", "It protects the data from local disasters such as a fire or flood.", "It is always free of charge, regardless of size."], "answer": "It protects the data from local disasters such as a fire or flood." },
            { "question": "Which statement best describes how cloud storage works?", "options": ["Data is stored on a user's local hard drive and synchronised with their mobile phone.", "Data is stored in a compressed format on a dedicated USB drive.", "Data is stored on remote servers owned by a third-party company and accessed via the internet.", "Data is stored temporarily in the computer's RAM and uploaded at the end of the day."], "answer": "Data is stored on remote servers owned by a third-party company and accessed via the internet." },
            { "question": "A business is considering moving its sensitive financial data to a cloud storage provider. What is a primary security concern they must consider?", "options": ["The speed of their local internet connection.", "The physical security of the provider's data centres and risk of unauthorised access.", "The cost of the monthly subscription plan.", "The limited number of files that can be uploaded per day."], "answer": "The physical security of the provider's data centres and risk of unauthorised access." }
        ]
    },
    "c3-network-hardware": {
        title: "Hardware (Network Hardware)",
        chapter: "Chapter 3",
        subtitle: "Test your knowledge of Network Hardware.",
        questions: [
            { "question": "[DEFINITION] What is the primary function of a Network Interface Card (NIC)?", "options": ["To connect multiple networks together and forward packets between them.", "To allow a computer to connect to a network by providing a physical connection point.", "To filter network traffic based on MAC addresses.", "To store the IP address of a website."], "answer": "To allow a computer to connect to a network by providing a physical connection point." },
            { "question": "[DEFINITION] Which hardware device receives a data packet from one port and broadcasts it to every other port on the device?", "options": ["A router", "A switch", "A hub", "A firewall"], "answer": "A hub" },
            { "question": "[DEFINITION] What is the main role of a router in a network?", "options": ["To connect devices within the same Local Area Network (LAN).", "To translate domain names into IP addresses.", "To transmit data packets between different networks, like a LAN and the internet.", "To provide a wireless connection point for devices."], "answer": "To transmit data packets between different networks, like a LAN and the internet." },
            { "question": "[DEFINITION] Which device intelligently forwards data packets only to the intended recipient device by using its MAC address?", "options": ["A hub", "A switch", "A repeater", "A modem"], "answer": "A switch" },
            { "question": "[DEFINITION] What is the purpose of a Wireless Access Point (WAP)?", "options": ["To connect different network types, such as a LAN and a WAN.", "To create a wireless local area network (WLAN) by allowing devices to connect to the network without cables.", "To store a table of MAC addresses and corresponding ports.", "To modulate and demodulate signals for telephone line transmission."], "answer": "To create a wireless local area network (WLAN) by allowing devices to connect to the network without cables." },
            { "question": "A school network consists of 50 computers in one classroom. All computers need to be connected to each other and to a single server. Which device is most suitable for connecting these computers within the same network, ensuring efficient data transmission?", "options": ["A hub", "A router", "A switch", "A modem"], "answer": "A switch" },
            { "question": "An office needs to connect its local area network (LAN) to the internet. Which device is essential for this connection?", "options": ["A hub", "A switch", "A Network Interface Card (NIC)", "A router"], "answer": "A router" },
            { "question": "Why is a switch considered more efficient than a hub for managing traffic on a busy network?", "options": ["A switch is always wireless, which is faster.", "A switch broadcasts data to all devices, ensuring everyone receives it.", "A switch sends data only to the specific device it is intended for, reducing unnecessary network traffic.", "A switch uses less electricity than a hub."], "answer": "A switch sends data only to the specific device it is intended for, reducing unnecessary network traffic." },
            { "question": "What type of physical transmission medium is commonly used with a Network Interface Card's Ethernet port?", "options": ["Coaxial cable", "Fibre optic cable", "Twisted pair (Ethernet) cable", "Satellite signals"], "answer": "Twisted pair (Ethernet) cable" },
            { "question": "A user finds that the Wi-Fi signal is weak at the far end of their house. Which device could be used to boost the signal and extend the range of the wireless network?", "options": ["A router", "A hub", "A wireless repeater/extender", "A switch"], "answer": "A wireless repeater/extender" },
            { "question": "Every Network Interface Card (NIC) has a unique, hard-coded address. What is this address called?", "options": ["IP Address", "MAC (Media Access Control) Address", "URL (Uniform Resource Locator)", "Port Address"], "answer": "MAC (Media Access Control) Address" },
            { "question": "In a home setup, the device provided by an Internet Service Provider (ISP) often combines the functions of a router, a switch, and a wireless access point. What is this device commonly called?", "options": ["A hub", "A home router or gateway", "A NIC", "A repeater"], "answer": "A home router or gateway" },
            { "question": "A large company wants the fastest possible and most secure connection for its backbone network between two buildings. Which transmission medium would be the best choice?", "options": ["Twisted pair cable", "Wi-Fi", "Fibre optic cable", "Coaxial cable"], "answer": "Fibre optic cable" },
            { "question": "When a switch receives a data packet, what information in the packet's header does it read to determine where to send it?", "options": ["The destination IP address", "The source IP address", "The destination MAC address", "The port number"], "answer": "The destination MAC address" },
            { "question": "A user wants to connect their desktop computer, which does not have built-in Wi-Fi, to their wireless home network. What hardware will they need to install or connect to the computer?", "options": ["A router", "A wireless Network Interface Card (NIC) or USB Wi-Fi adapter", "A hub", "An Ethernet cable"], "answer": "A wireless Network Interface Card (NIC) or USB Wi-Fi adapter" }
        ]
    },
    // CHAPTER 4
    "c4-software-os": {
        title: "Types of Software and Operating Systems",
        chapter: "Chapter 4",
        subtitle: "Test your knowledge of the Chapter 4.",
        questions: [
            { "question": "Which type of software is responsible for managing the computer's memory, processes, and all of its software and hardware?", "options": ["Application software", "Utility software", "Operating system", "Firmware"], "answer": "Operating system" },
            { "question": "A user is writing a letter to a friend. What category of software would a word processor fall under?", "options": ["System software", "Application software", "Utility software", "Operating system"], "answer": "Application software" },
            { "question": "What is the main function of a device driver?", "options": ["To manage the computer's file system.", "To act as a translator between the operating system and a hardware device.", "To provide a user interface.", "To scan the computer for viruses."], "answer": "To act as a translator between the operating system and a hardware device." },
            { "question": "Which of the following is a key task performed by an operating system?", "options": ["Creating a spreadsheet", "Browsing the internet", "Managing interrupts", "Editing a photograph"], "answer": "Managing interrupts" },
            { "question": "A user wants to remove unnecessary files and reorganise the hard disk to improve performance. Which type of utility software should they use?", "options": ["Antivirus", "Disk defragmenter", "Backup utility", "File compression"], "answer": "Disk defragmenter" },
            { "question": "What is the purpose of a Graphical User Interface (GUI)?", "options": ["To manage network connections.", "To allow users to interact with the computer using visual elements like icons, windows, and menus.", "To translate high-level code into machine code.", "To control the boot-up process of the computer."], "answer": "To allow users to interact with the computer using visual elements like icons, windows, and menus." },
            { "question": "A programmer is writing code to control a washing machine's wash cycle. The software is stored on a ROM chip. What type of software is this?", "options": ["Generic application software", "Utility software", "Embedded system software", "Operating system"], "answer": "Embedded system software" },
            { "question": "Which of the following is an example of system software?", "options": ["Video game", "Web browser", "Device driver", "Database"], "answer": "Device driver" },
            { "question": "A signal sent from a hardware device or software program to the CPU, requiring immediate attention, is known as...", "options": ["a buffer", "a process", "an interrupt", "a scheduler"], "answer": "an interrupt" },
            { "question": "An operating system uses memory management to...", "options": ["ensure that all programs have enough storage space on the hard disk.", "keep track of which parts of memory are in use and allocate it to processes as needed.", "speed up the internet connection.", "organise files into folders."], "answer": "keep track of which parts of memory are in use and allocate it to processes as needed." },
            { "question": "Which utility program would be used to reduce the size of a file so it can be sent more easily over the internet?", "options": ["Disk formatter", "Antivirus", "File compression", "Defragmenter"], "answer": "File compression" },
            { "question": "A Command Line Interface (CLI) requires a user to...", "options": ["click on icons to run applications.", "type in specific text-based commands to perform tasks.", "use a mouse and pointer.", "interact with the system using menus and windows."], "answer": "type in specific text-based commands to perform tasks." },
            { "question": "A company needs software to manage its sales records and customer information. Which type of application software would be most suitable?", "options": ["Word processor", "Spreadsheet", "Database management system", "Web browser"], "answer": "Database management system" },
            { "question": "What is the name for the process where the operating system handles the switching of the CPU between different tasks or users?", "options": ["Buffering", "Interrupt handling", "Scheduling", "Memory allocation"], "answer": "Scheduling" },
            { "question": "Which of these is an example of an operating system?", "options": ["Microsoft Office", "Google Chrome", "Adobe Photoshop", "Android"], "answer": "Android" },
            { "question": "A small amount of temporary memory storage used when transferring data between devices with different speeds is called a:", "options": ["Driver", "Buffer", "Scheduler", "Register"], "answer": "Buffer" },
            { "question": "A user installs a new printer, but it doesn't work with their computer. What is the most likely missing piece of software?", "options": ["The operating system", "An antivirus utility", "A device driver", "A word processor"], "answer": "A device driver" },
            { "question": "Which of the following is NOT a function of an operating system?", "options": ["File management", "Processor management", "Providing a user interface", "Creating websites"], "answer": "Creating websites" },
            { "question": "Software that is created to perform one specific task or a set of tasks for a user is called...", "options": ["System software", "Firmware", "Application software", "Utility software"], "answer": "Application software" },
            { "question": "Which type of software is designed to help maintain and care for the computer system?", "options": ["Application software", "Embedded software", "Utility software", "Bespoke software"], "answer": "Utility software" },
            { "question": "When a computer is running multiple programs, the OS ensures they do not interfere with each other's allocated memory. This is an example of:", "options": ["File management", "Security management", "Device management", "Memory management"], "answer": "Memory management" },
            { "question": "An interrupt service routine (ISR) is a piece of code that...", "options": ["defragments the hard disk.", "is executed by the processor in response to an interrupt.", "provides a graphical user interface.", "compresses files to save space."], "answer": "is executed by the processor in response to an interrupt." },
            { "question": "What is the primary advantage of a GUI over a CLI for most users?", "options": ["It uses less system memory.", "It gives the user more direct control over the system.", "It is more intuitive and easier to learn.", "It allows for faster execution of complex tasks."], "answer": "It is more intuitive and easier to learn." },
            { "question": "A company hires a developer to create software specifically for their unique accounting needs. This is an example of what kind of software?", "options": ["Off-the-shelf software", "Utility software", "Bespoke software", "The operating system"], "answer": "Bespoke software" },
            { "question": "Which of these tasks is handled by the file management function of an operating system?", "options": ["Allocating CPU time to different programs.", "Controlling access to files with permissions.", "Installing new hardware devices.", "Displaying icons on the desktop."], "answer": "Controlling access to files with permissions." }
        ]
    },
    "c4-interrupts": {
        title: "Interrupts",
        chapter: "Chapter 4",
        subtitle: "Test your knowledge of the Chapter 4.",
        questions: [
            { "question": "What is the most accurate definition of an interrupt?", "options": ["A signal generated by software or hardware to pause the currently running process.", "An error in a program that causes it to crash.", "A routine that speeds up the processor.", "A memory location used for temporary storage."], "answer": "A signal generated by software or hardware to pause the currently running process." },
            { "question": "Which of the following is an example of a hardware-generated interrupt?", "options": ["The program attempts to divide by zero.", "A user presses a key on the keyboard.", "The program's allocated time slice expires.", "A software application requests data from a file."], "answer": "A user presses a key on the keyboard." },
            { "question": "What is the primary purpose of using interrupts in a computer system?", "options": ["To shut down the computer safely.", "To allow the processor to handle multiple tasks and events efficiently.", "To scan for viruses and malware.", "To install new device drivers."], "answer": "To allow the processor to handle multiple tasks and events efficiently." },
            { "question": "An operating system's scheduler can use a timer to generate regular interrupts. What are these interrupts used for?", "options": ["To check the computer's temperature.", "To share processor time between multiple running applications.", "To save all open files automatically.", "To detect if a key on the keyboard is stuck."], "answer": "To share processor time between multiple running applications." },
            { "question": "If multiple interrupts occur simultaneously, how does the processor typically decide which one to handle first?", "options": ["It handles them in the order they were received.", "It assigns each interrupt a priority level and handles the highest priority first.", "It handles the one that requires the least amount of memory.", "It processes them randomly."], "answer": "It assigns each interrupt a priority level and handles the highest priority first." },
            { "question": "What is an Interrupt Service Routine (ISR)?", "options": ["A hardware component that generates interrupts.", "A set of instructions that the processor executes to handle a specific type of interrupt.", "A queue where pending interrupts are stored.", "A tool used to debug software interrupts."], "answer": "A set of instructions that the processor executes to handle a specific type of interrupt." },
            { "question": "Which of the following would be considered a high-priority interrupt?", "options": ["A mouse click.", "A print job completing.", "A power failure warning from the power supply.", "A request to load a webpage."], "answer": "A power failure warning from the power supply." },
            { "question": "What is a software interrupt (also known as a 'trap')?", "options": ["An interrupt caused by a physical hardware failure.", "An interrupt generated by a user pressing Ctrl-Alt-Delete.", "An interrupt caused by an error in a program, such as an illegal instruction.", "An interrupt caused by a peripheral device like a printer running out of paper."], "answer": "An interrupt caused by an error in a program, such as an illegal instruction." },
            { "question": "When the CPU receives an interrupt, what is the very first step in the interrupt handling process?", "options": ["It immediately jumps to the Interrupt Service Routine.", "It finishes executing the current Fetch-Decode-Execute cycle.", "It checks the priority of the incoming interrupt.", "It saves the state of the current process."], "answer": "It finishes executing the current Fetch-Decode-Execute cycle." },
            { "question": "After the current instruction is completed, what is the next crucial step the processor takes before servicing an interrupt?", "options": ["It disables all further interrupts.", "It stores the contents of the Program Counter (PC) and other registers.", "It sends a signal back to the device that caused the interrupt.", "It loads the entire operating system into cache."], "answer": "It stores the contents of the Program Counter (PC) and other registers." },
            { "question": "What is the final step in the interrupt handling routine, after the interrupt has been serviced?", "options": ["The computer is rebooted.", "All interrupts are permanently disabled.", "The contents of the saved registers are restored, and the original process resumes.", "The Interrupt Service Routine is deleted from memory."], "answer": "The contents of the saved registers are restored, and the original process resumes." },
            { "question": "A user is playing a video game while downloading a file. An interrupt is generated when the download is complete. This is an example of the OS managing...", "options": ["user interface tasks.", "memory allocation.", "input/output (I/O) operations.", "software errors."], "answer": "input/output (I/O) operations." },
            { "question": "Why must the contents of the processor's registers be saved before an ISR is run?", "options": ["To free up the registers for the ISR to use.", "To allow the original process to be resumed correctly without losing its state.", "To create a backup in case of a power failure.", "To check the registers for any hardware faults."], "answer": "To allow the original process to be resumed correctly without losing its state." },
            { "question": "Which component is responsible for checking for the presence of an interrupt signal at the end of each cycle?", "options": ["The Random Access Memory (RAM).", "The hard disk drive.", "The Central Processing Unit (CPU).", "The device driver."], "answer": "The Central Processing Unit (CPU)." },
            { "question": "If a high-priority interrupt occurs while a lower-priority interrupt is being serviced, what will happen?", "options": ["The processor will ignore the new interrupt until the current one is finished.", "The system will crash due to the conflict.", "The processor will pause the current ISR, save its state, and handle the higher-priority interrupt.", "The lower-priority interrupt will be cancelled and must be resent."], "answer": "The processor will pause the current ISR, save its state, and handle the higher-priority interrupt." }
        ]
    },
    "c4-languages-ides": {
        title: "Programming Languages, Translators, and IDEs",
        chapter: "Chapter 4",
        subtitle: "Test your knowledge of the Chapter 4.",
        questions: [
            { "question": "A programmer is developing a game that requires high performance and direct control over the computer's hardware. Which type of programming language would be most suitable?", "options": ["A high-level language like Python", "A low-level language like Assembly Language", "A scripting language like JavaScript", "A query language like SQL"], "answer": "A low-level language like Assembly Language" },
            { "question": "Which software is used to translate a high-level programming language into machine code all at once, creating a standalone executable file?", "options": ["Interpreter", "Compiler", "Assembler", "Debugger"], "answer": "Compiler" },
            { "question": "A student is learning to code and writes a program. The translator checks and runs the code one line at a time, and stops as soon as it finds an error. What type of translator is being used?", "options": ["A Compiler", "An Assembler", "An IDE", "An Interpreter"], "answer": "An Interpreter" },
            { "question": "What is the primary function of an assembler?", "options": ["To translate high-level language into low-level language.", "To translate assembly language into machine code.", "To execute machine code directly on the processor.", "To check for logical errors in a program."], "answer": "To translate assembly language into machine code." },
            { "question": "An Integrated Development Environment (IDE) typically includes several tools to aid programmers. Which feature helps by suggesting variable names and function calls as the programmer types?", "options": ["Debugger", "Pretty printer", "Error diagnostics", "Code completion"], "answer": "Code completion" },
            { "question": "A developer is trying to find a logical error in their code. They use a tool that allows them to pause the program at a specific line and inspect the values of variables. What is this tool called?", "options": ["A compiler", "An editor", "A debugger", "A translator"], "answer": "A debugger" },
            { "question": "Which of the following is a key advantage of using a compiler over an interpreter?", "options": ["It is easier to debug code because it stops at the first error.", "The compiled code runs faster because it is already in machine code.", "It does not require the source code to run the program.", "It is faster for initial development and testing of small code snippets."], "answer": "The compiled code runs faster because it is already in machine code." },
            { "question": "A program written in a high-level language is portable. What does this mean?", "options": ["The program can be easily carried on a USB drive.", "The program can be run on many different types of computer systems with little or no modification.", "The program runs very quickly.", "The program requires a specific type of hardware to run."], "answer": "The program can be run on many different types of computer systems with little or no modification." },
            { "question": "Which of these is a characteristic of a low-level language?", "options": ["The code is easy for humans to read and write.", "The code is specific to a particular processor architecture.", "One instruction translates into many machine code instructions.", "The language uses English-like keywords and syntax."], "answer": "The code is specific to a particular processor architecture." },
            { "question": "An IDE's editor often uses syntax highlighting. What is the purpose of this feature?", "options": ["To automatically correct spelling mistakes in comments.", "To translate the code into another language.", "To display different parts of the code (keywords, variables, strings) in different colours to improve readability.", "To execute the program and show the output."], "answer": "To display different parts of the code (keywords, variables, strings) in different colours to improve readability." },
            { "question": "Before a program created in a compiled high-level language can be run, it must be...", "options": ["interpreted line by line.", "converted into an object file and then linked to create an executable.", "sent to the user along with the source code.", "debugged to remove all possible errors."], "answer": "converted into an object file and then linked to create an executable." },
            { "question": "A developer needs to distribute their software to customers. They do not want to share the source code. Which translator should they use?", "options": ["Interpreter, because it runs line by line.", "Assembler, because it's close to the hardware.", "Compiler, because it produces an executable file without the source code.", "Debugger, because it finds all the errors first."], "answer": "Compiler, because it produces an executable file without the source code." },
            { "question": "The part of an IDE that reports syntax errors, such as a missing semicolon or a misspelled keyword, is known as...", "options": ["The variable watcher", "The auto-formatter", "Error diagnostics", "The code runner"], "answer": "Error diagnostics" },
            { "question": "What is the main disadvantage of using an interpreter for a large, complex application?", "options": ["The final program is very large.", "It is impossible to find logical errors.", "Execution is slower because the code is translated every time it is run.", "It can only be used for web development."], "answer": "Execution is slower because the code is translated every time it is run." },
            { "question": "Machine code consists of...", "options": ["English-like commands.", "Mnemonic codes for instructions.", "Binary or hexadecimal instructions.", "A mix of high-level and low-level commands."], "answer": "Binary or hexadecimal instructions." },
            { "question": "A feature in an IDE that automatically formats the source code to make it neat and readable (e.g., by adding indentation) is called a...", "options": ["Code completer", "Debugger", "Pretty printer", "Compiler"], "answer": "Pretty printer" },
            { "question": "Which statement accurately compares assembly language with a high-level language?", "options": ["Assembly language is easier to learn and use.", "High-level language gives the programmer more control over hardware.", "Assembly language programs are generally faster and more memory-efficient.", "High-level language programs are specific to one type of CPU."], "answer": "Assembly language programs are generally faster and more memory-efficient." },
            { "question": "A programmer sets a 'breakpoint' in their code. What will happen when the program is run in debug mode?", "options": ["The program will delete that line of code.", "The program will highlight that line in red to show an error.", "The program will pause execution at that line, allowing the programmer to inspect the state.", "The program will compile only up to that line."], "answer": "The program will pause execution at that line, allowing the programmer to inspect the state." },
            { "question": "Why is a translator necessary for a program written in Python or Java?", "options": ["To check for viruses in the code.", "Because the computer's processor can only understand machine code.", "To add comments and documentation automatically.", "To make the source code file smaller."], "answer": "Because the computer's processor can only understand machine code." },
            { "question": "Which of the following is NOT a typical feature of an IDE?", "options": ["A text editor for writing code.", "A compiler or interpreter.", "A debugger.", "Hardware for running the program."], "answer": "Hardware for running the program." }
        ]
    },
    // CHAPTER 5
    "c5-cyber-security": {
        title: "Cyber Security",
        chapter: "Chapter 5",
        subtitle: "Test your knowledge of Chapter 5.",
        questions: [
            { "question": "An employee receives an email that appears to be from their bank, asking them to click a link and verify their account details. This is an example of which type of cyberattack?", "options": ["Pharming", "Phishing", "Denial-of-Service", "Spyware"], "answer": "Phishing" },
            { "question": "Which security measure is designed to prevent unauthorised access to a network by inspecting incoming and outgoing traffic and blocking anything that does not meet a set of security rules?", "options": ["Antivirus software", "Firewall", "Encryption", "Biometric authentication"], "answer": "Firewall" },
            { "question": "A piece of malicious code automatically replicates itself and spreads to other computers, typically over a network, without human intervention. What is this type of malware called?", "options": ["Trojan horse", "Spyware", "Worm", "Adware"], "answer": "Worm" },
            { "question": "What is the purpose of encryption?", "options": ["To disguise data so that it cannot be understood if it is intercepted.", "To block malicious software from entering a system.", "To create backups of important files.", "To monitor network traffic for suspicious activity."], "answer": "To disguise data so that it cannot be understood if it is intercepted." },
            { "question": "A user unknowingly installs a program that appears legitimate, but it secretly records their keystrokes to steal passwords. This program is an example of a:", "options": ["Virus", "Trojan horse containing spyware", "Denial-of-Service attack", "Firewall"], "answer": "Trojan horse containing spyware" },
            { "question": "Which of the following describes a Denial-of-Service (DoS) attack?", "options": ["Stealing personal data by tricking a user into revealing it.", "Gaining unauthorised access to a system to alter data.", "Flooding a web server with excessive traffic to make it unavailable to legitimate users.", "Redirecting a user to a fraudulent website by poisoning a DNS server."], "answer": "Flooding a web server with excessive traffic to make it unavailable to legitimate users." },
            { "question": "A user is setting up their home Wi-Fi network. To prevent neighbours from easily seeing and connecting to their network, what should they disable?", "options": ["MAC address filtering", "WPA2 encryption", "The firewall", "SSID broadcasting"], "answer": "SSID broadcasting" },
            { "question": "Which of the following is a human error that can compromise a system's security?", "options": ["Using a strong, complex password.", "Regularly updating antivirus software.", "Accidentally deleting a system file.", "Responding to a phishing email."], "answer": "Responding to a phishing email." },
            { "question": "A website's URL begins with 'https'. What does the 's' signify?", "options": ["The website has been scanned for viruses.", "The connection to the website is secure and encrypted.", "The website is a static, non-interactive page.", "The website is the 'superior' or official version."], "answer": "The connection to the website is secure and encrypted." },
            { "question": "What is pharming?", "options": ["A type of malware that displays unwanted advertisements.", "An attack that redirects users to a fake website, even if they type the correct URL.", "The act of sending fraudulent emails to trick users.", "Software that secretly gathers information about a user."], "answer": "An attack that redirects users to a fake website, even if they type the correct URL." },
            { "question": "Which of these authentication methods relies on a unique physical characteristic of the user?", "options": ["Password", "PIN code", "Digital certificate", "Fingerprint scan"], "answer": "Fingerprint scan" },
            { "question": "A virus is a type of malware that...", "options": ["spreads independently across networks without needing a host file.", "attaches itself to a legitimate program or file and requires human action to spread.", "is designed purely to generate unwanted pop-up adverts.", "redirects a user's web browser to malicious sites."], "answer": "attaches itself to a legitimate program or file and requires human action to spread." },
            { "question": "A network administrator wants to allow only specific devices to connect to the wireless network. Which security method would be most effective for this?", "options": ["Hiding the SSID", "Using a strong WPA2 password", "Enabling MAC address filtering", "Installing a firewall"], "answer": "Enabling MAC address filtering" },
            { "question": "Which piece of legislation is primarily concerned with how personal data is collected, stored, and used by organisations?", "options": ["Copyright, Designs and Patents Act", "Computer Misuse Act", "Data Protection Act", "Freedom of Information Act"], "answer": "Data Protection Act" },
            { "question": "Software that is designed to detect and remove malware is known as:", "options": ["A firewall", "An operating system", "Antivirus software", "A web browser"], "answer": "Antivirus software" },
            { "question": "What is the primary difference between a symmetric and an asymmetric encryption key?", "options": ["Symmetric uses one key for both encryption and decryption; asymmetric uses two different keys.", "Symmetric encryption is less secure than asymmetric encryption.", "Asymmetric is used for hardware; symmetric is used for software.", "Asymmetric uses a single key; symmetric uses a public and private key."], "answer": "Symmetric uses one key for both encryption and decryption; asymmetric uses two different keys." },
            { "question": "A hacker gains access to a network with the intent to steal or alter data. This action would be prosecuted under which law?", "options": ["Data Protection Act", "Computer Misuse Act", "Copyright Act", "Health and Safety at Work Act"], "answer": "Computer Misuse Act" },
            { "question": "A user notices their computer is running very slowly and is displaying constant pop-up ads, even when not browsing the internet. What is the most likely cause?", "options": ["A DoS attack", "Pharming", "Adware", "A corrupted hard drive"], "answer": "Adware" },
            { "question": "Which of these is considered the strongest password?", "options": ["password123", "MyDogFluffy", "12345678", "jP7!gT&e9K"], "answer": "jP7!gT&e9K" },
            { "question": "To prevent accidental data loss, what is the most important security procedure an individual or company can implement?", "options": ["Installing a firewall", "Creating regular backups", "Using strong passwords", "Encrypting all data"], "answer": "Creating regular backups" }
        ]
    },
    // CHAPTER 6
    "c6-ai-expert-systems": {
        title: "AI and Expert systems",
        chapter: "Chapter 6",
        subtitle: "Test your knowledge on AI and expert systems.",
        questions: [
            { "question": "[DEFINITION] What is the primary goal of Artificial Intelligence (AI)?", "options": ["To create computer systems that can perform tasks that typically require human intelligence.", "To design faster and more efficient computer hardware.", "To replace all human jobs with robots.", "To store large amounts of data in the cloud."], "answer": "To create computer systems that can perform tasks that typically require human intelligence." },
            { "question": "[DEFINITION] Which component of an expert system contains the facts and rules about a specific knowledge domain?", "options": ["User Interface", "Inference Engine", "Knowledge Base", "Explanation System"], "answer": "Knowledge Base" },
            { "question": "[DEFINITION] What is machine learning?", "options": ["A type of computer memory that learns from the user.", "A field of AI that gives computers the ability to learn from data without being explicitly programmed.", "The process of a human learning how to operate a machine.", "A hardware component that speeds up a computer's learning ability."], "answer": "A field of AI that gives computers the ability to learn from data without being explicitly programmed." },
            { "question": "A doctor uses a computer program to help diagnose a rare disease. The program asks questions and, based on the answers, suggests a diagnosis. This program is an example of:", "options": ["A word processor", "An expert system", "A device driver", "An operating system"], "answer": "An expert system" },
            { "question": "Which component of an expert system is responsible for reasoning and making logical deductions from the knowledge base to reach a conclusion?", "options": ["The Knowledge Base", "The User Interface", "The Inference Engine", "The Rules Editor"], "answer": "The Inference Engine" },
            { "question": "An email service automatically filters incoming messages and places suspected junk mail into a 'spam' folder. This feature most likely uses which AI technology?", "options": ["An expert system", "Machine learning", "A robotic arm", "A simple search algorithm"], "answer": "Machine learning" },
            { "question": "What is the role of the 'user interface' in an expert system?", "options": ["To process the rules and facts.", "To store the expert knowledge.", "To allow a non-expert user to query the system and receive answers.", "To explain the reasoning behind the system's conclusions."], "answer": "To allow a non-expert user to query the system and receive answers." },
            { "question": "A machine learning model is trained by showing it thousands of pictures of cats, each labelled 'cat'. After training, it can identify cats in new, unlabelled pictures. What is this process called?", "options": ["Supervised learning", "Unsupervised learning", "Direct programming", "An expert system query"], "answer": "Supervised learning" },
            { "question": "What is a key advantage of using an expert system?", "options": ["It can be used to solve any type of problem.", "It provides access to expert-level knowledge 24/7 and preserves it.", "It has common sense and can understand human emotions.", "It is always cheaper to build than to hire a human expert."], "answer": "It provides access to expert-level knowledge 24/7 and preserves it." },
            { "question": "A streaming service recommends new movies to a user based on their viewing history and the viewing history of similar users. This recommendation engine is a common application of:", "options": ["Robotics", "Expert systems", "Machine learning", "Automated control systems"], "answer": "Machine learning" },
            { "question": "What is a significant limitation of an expert system?", "options": ["It cannot explain its reasoning.", "Its knowledge is limited to the specific, narrow domain it was programmed for.", "It processes information very slowly.", "It requires an internet connection to function."], "answer": "Its knowledge is limited to the specific, narrow domain it was programmed for." },
            { "question": "A scientist uses an AI to find hidden patterns and group similar stars together from a massive dataset of astronomical observations, without any pre-existing labels. This is an example of:", "options": ["An expert system", "Supervised learning", "Unsupervised learning", "A simple database query"], "answer": "Unsupervised learning" },
            { "question": "How is the knowledge base of an expert system typically created?", "options": ["The system learns automatically by browsing the internet.", "By interviewing human experts in a specific field and programming their knowledge as facts and rules.", "It is randomly generated by the inference engine.", "Users input the knowledge as they use the system."], "answer": "By interviewing human experts in a specific field and programming their knowledge as facts and rules." },
            { "question": "Which of the following tasks is a classic example of an AI application?", "options": ["Calculating the sum of two numbers.", "Storing a customer's address in a database.", "Recognising human speech and converting it to text.", "Printing a document."], "answer": "Recognising human speech and converting it to text." },
            { "question": "The 'explanation system' in an expert system is important because it...", "options": ["allows the system to learn new rules.", "provides a faster user interface.", "helps build trust by showing the user the reasoning behind the conclusion.", "stores all the facts about the domain."], "answer": "helps build trust by showing the user the reasoning behind the conclusion." },
            { "question": "Self-driving cars use a form of AI to identify pedestrians, traffic lights, and other vehicles from sensor data. This capability is known as:", "options": ["Machine translation", "Expert system diagnosis", "Computer vision", "Data mining"], "answer": "Computer vision" },
            { "question": "What is a potential ethical issue associated with using AI for making decisions like loan applications or criminal sentencing?", "options": ["The AI may process the applications too quickly.", "The AI may contain biases learned from the data it was trained on, leading to unfair outcomes.", "The AI requires too much electricity to run.", "The AI cannot store enough applications."], "answer": "The AI may contain biases learned from the data it was trained on, leading to unfair outcomes." },
            { "question": "An oil exploration company uses a system that analyses geological data to suggest the best locations for drilling. This system, which encapsulates the knowledge of many geologists, is a type of:", "options": ["Machine learning model", "Expert system", "Social media platform", "Robotic controller"], "answer": "Expert system" },
            { "question": "For a machine learning model to improve its accuracy, what does it typically need?", "options": ["A faster processor.", "More data to learn from.", "A better monitor.", "A simpler algorithm."], "answer": "More data to learn from." },
            { "question": "What is the fundamental difference between machine learning and traditional programming?", "options": ["Machine learning is written in a different programming language.", "In traditional programming, humans write explicit rules; in machine learning, the system learns the rules from data.", "Traditional programming cannot handle mathematical calculations.", "Machine learning is only used for games, while traditional programming is for business."], "answer": "In traditional programming, humans write explicit rules; in machine learning, the system learns the rules from data." }
        ]
    },
    "c6-automated-systems": {
        title: "Automated Systems",
        chapter: "Chapter 6",
        subtitle: "Test your knowledge on Automated Systems.",
        questions: [
            { "question": "[DEFINITION] What is the role of a sensor in an automated system?", "options": ["To perform a physical action or movement.", "To process data and make decisions.", "To collect data about the physical environment.", "To convert digital signals to analogue signals."], "answer": "To collect data about the physical environment." },
            { "question": "[DEFINITION] In the context of an automated system, what is a microprocessor?", "options": ["A device that measures physical quantities like temperature.", "A motor or switch that carries out an action.", "A small CPU on a single integrated circuit that processes input and makes decisions.", "A device that converts digital data into an analogue signal."], "answer": "A small CPU on a single integrated circuit that processes input and makes decisions." },
            { "question": "[DEFINITION] What is the function of an actuator in a control system?", "options": ["To convert analogue sensor data into a digital format.", "To measure changes in light levels.", "To carry out a physical action based on a signal from the microprocessor.", "To store the pre-set values for the system."], "answer": "To carry out a physical action based on a signal from the microprocessor." },
            { "question": "Data collected by a sensor is analogue. Why must this data be converted before a microprocessor can use it?", "options": ["Because microprocessors can only process digital data.", "Because analogue data is often inaccurate.", "To amplify the signal so it is stronger.", "To encrypt the data for security."], "answer": "Because microprocessors can only process digital data." },
            { "question": "Which component is responsible for converting the analogue signal from a sensor into a format the microprocessor can understand?", "options": ["Digital-to-Analogue Converter (DAC)", "Actuator", "Analogue-to-Digital Converter (ADC)", "Central Processing Unit (CPU)"], "answer": "Analogue-to-Digital Converter (ADC)" },
            { "question": "A robotic arm in a factory is tasked with picking up boxes. The motor that moves the arm is an example of what?", "options": ["A sensor", "An actuator", "A microprocessor", "An ADC"], "answer": "An actuator" },
            { "question": "An automated street lighting system is designed to switch on when it gets dark. What type of sensor would be required?", "options": ["Temperature sensor", "Pressure sensor", "Light sensor", "Sound sensor"], "answer": "Light sensor" },
            { "question": "Which of the following is a benefit of using automated systems in manufacturing over human workers?", "options": ["They have more creativity to solve unexpected problems.", "They can work 24/7 with consistent precision.", "The initial setup cost is very low.", "They can perform a wider variety of different tasks."], "answer": "They can work 24/7 with consistent precision." },
            { "question": "A hotel's automated heating system is set to maintain a room temperature of 20°C. If the temperature drops to 18°C, what happens?", "options": ["The sensor data is ignored by the microprocessor.", "The microprocessor compares the sensor data to the pre-set value and turns the heater on.", "The system shuts down to save energy.", "The actuator sends a signal to the sensor to recalibrate."], "answer": "The microprocessor compares the sensor data to the pre-set value and turns the heater on." },
            { "question": "What is a significant disadvantage of automating a factory production line?", "options": ["The quality of the product becomes inconsistent.", "The speed of production decreases significantly.", "There is a high initial investment cost for machinery and setup.", "The factory can no longer operate at night."], "answer": "There is a high initial investment cost for machinery and setup." },
            { "question": "An automated car park barrier uses a pressure sensor under the road. What is the likely purpose of this sensor?", "options": ["To measure the temperature of the car's engine.", "To detect if a car is present and waiting at the barrier.", "To check the air quality around the car park.", "To read the car's number plate."], "answer": "To detect if a car is present and waiting at the barrier." },
            { "question": "In a computer-controlled greenhouse, a moisture sensor detects that the soil is too dry. What would be the most appropriate output action?", "options": ["Turn on a fan.", "Open a window.", "Activate a water sprinkler system.", "Turn on a light."], "answer": "Activate a water sprinkler system." },
            { "question": "Which component is needed to make an actuator, such as a motor, work correctly after the microprocessor has made a decision?", "options": ["An Analogue-to-Digital Converter (ADC)", "A sensor", "A Digital-to-Analogue Converter (DAC)", "A light-emitting diode (LED)"], "answer": "A Digital-to-Analogue Converter (DAC)" },
            { "question": "What is the role of feedback in a control system?", "options": ["To shut the system down after a task is complete.", "To allow the system to monitor its own output and make adjustments.", "To send all sensor data to the cloud for storage.", "To manually override the system's decisions."], "answer": "To allow the system to monitor its own output and make adjustments." },
            { "question": "A self-driving car uses sensors to detect its distance from the car in front. If it gets too close, the system automatically applies the brakes. The braking mechanism is an example of:", "options": ["A sensor", "An actuator", "An ADC", "A microprocessor"], "answer": "An actuator" },
            { "question": "What is a potential negative societal impact of increased automation in the workplace?", "options": ["An increase in the price of consumer goods.", "A decrease in manufacturing efficiency.", "An increase in dangerous jobs for humans.", "A loss of jobs for human workers in certain industries."], "answer": "A loss of jobs for human workers in certain industries." },
            { "question": "[PROCESS] An automated climate control system detects that a room is too hot. Which of the following describes the correct sequence of events?", "options": ["Microprocessor -> Actuator -> Sensor -> Decision", "Sensor -> Microprocessor -> ADC -> Actuator", "Sensor -> ADC -> Microprocessor -> Actuator (e.g., a fan)", "Actuator -> DAC -> Microprocessor -> Sensor"], "answer": "Sensor -> ADC -> Microprocessor -> Actuator (e.g., a fan)" },
            { "question": "[PROCESS] A temperature sensor in an oven sends an analogue voltage reading to the control system. What is the immediate next step in the control process?", "options": ["The microprocessor compares the reading to the pre-set temperature.", "The heating element (actuator) is turned off.", "The reading is converted to a digital value by an ADC.", "A warning light is displayed for the user."], "answer": "The reading is converted to a digital value by an ADC." },
            { "question": "[PROCESS] In an automated system, after the microprocessor compares the incoming digital data to a pre-set value and decides an action is needed, what must happen before a motor can be turned on?", "options": ["The sensor needs to take another reading.", "The microprocessor must send a digital signal which is then converted by a DAC.", "The system must be manually reset by a human.", "The digital data is converted back to analogue by an ADC."], "answer": "The microprocessor must send a digital signal which is then converted by a DAC." },
            { "question": "Which of the following scenarios is NOT a suitable application for an automated system?", "options": ["Monitoring a patient's vital signs in a hospital.", "Controlling the temperature in a chemical process.", "A robot performing a repetitive welding task on a car assembly line.", "A system for counselling a person with complex emotional problems."], "answer": "A system for counselling a person with complex emotional problems." }
        ]
    },
    "c6-robotics": {
        title: "Robotics",
        chapter: "Chapter 6",
        subtitle: "Test your knowledge on Robotics.",
        questions: [
            { "question": "[DEFINITION] What is the most accurate definition of a robot in the context of computer science?", "options": ["Any machine that can perform tasks faster than a human.", "A machine that looks and acts like a human being.", "A machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer.", "Any electronic device that uses sensors."], "answer": "A machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer." },
            { "question": "[DEFINITION] Which component of a robot is responsible for gathering information about its surroundings, such as detecting an object's proximity?", "options": ["Actuator", "End effector", "Sensor", "Processor"], "answer": "Sensor" },
            { "question": "[DEFINITION] What is the 'end effector' of a robotic arm?", "options": ["The main power source of the robot.", "The computer program that controls the robot.", "The base of the robot that is fixed to the floor.", "The tool or gripper at the end of the arm, designed for a specific task."], "answer": "The tool or gripper at the end of the arm, designed for a specific task." },
            { "question": "Which of the following is a primary reason for using robots in a car manufacturing plant?", "options": ["Robots are more creative than human workers.", "To perform repetitive and precise tasks, such as welding, consistently.", "Robots can negotiate better salaries for the workers.", "To provide customer service on the factory floor."], "answer": "To perform repetitive and precise tasks, such as welding, consistently." },
            { "question": "In which scenario would a robot be a more suitable choice than a human worker?", "options": ["Designing a new car model.", "Handling and disposing of hazardous nuclear waste.", "Writing a marketing slogan for a new product.", "Managing the factory's human resources department."], "answer": "Handling and disposing of hazardous nuclear waste." },
            { "question": "A robot is used to spray paint car bodies. Which of the following is a key advantage of using a robot for this task?", "options": ["It can decide on a new colour for the car.", "It ensures a uniform coat of paint is applied every time and reduces human exposure to toxic fumes.", "It can order more paint when supplies are low.", "It is cheaper to buy the robot than to hire a human for one day."], "answer": "It ensures a uniform coat of paint is applied every time and reduces human exposure to toxic fumes." },
            { "question": "What is a significant social drawback of introducing a large number of robots into factories?", "options": ["The robots might decide to go on strike.", "The quality of manufactured goods decreases.", "It can lead to unemployment for human workers who performed the automated tasks.", "Production slows down as robots need frequent holidays."], "answer": "It can lead to unemployment for human workers who performed the automated tasks." },
            { "question": "An autonomous vacuum cleaner uses sensors to avoid bumping into furniture. The motor that drives its wheels is an example of what?", "options": ["A sensor", "A processor", "An end effector", "An actuator"], "answer": "An actuator" },
            { "question": "Which industry heavily relies on robotic systems for tasks like packaging, sorting, and palletizing goods in large warehouses?", "options": ["The film and movie industry.", "The legal profession.", "The logistics and e-commerce industry.", "The fashion design industry."], "answer": "The logistics and e-commerce industry." },
            { "question": "A bomb disposal robot is operated remotely by a soldier from a safe distance. This is an example of robotics being used to:", "options": ["Increase the speed of a manufacturing line.", "Improve worker morale.", "Keep humans safe from a dangerous situation.", "Reduce the cost of consumer goods."], "answer": "Keep humans safe from a dangerous situation." },
            { "question": "What type of sensor would a robot use to determine if it is touching an object?", "options": ["Light sensor", "Sound sensor", "Tactile/pressure sensor", "Temperature sensor"], "answer": "Tactile/pressure sensor" },
            { "question": "A surgeon uses a robotic system to perform a delicate operation. What is a key benefit of this approach?", "options": ["The robot can make medical diagnoses on its own.", "It increases the precision of the surgeon's movements and reduces tremor.", "The robot can work without any human supervision.", "It makes the surgery much cheaper to perform."], "answer": "It increases the precision of the surgeon's movements and reduces tremor." },
            { "question": "An autonomous drone is programmed to inspect a large farm and report on crop health. This is an application of robotics in which field?", "options": ["Entertainment", "Domestic service", "Medicine", "Agriculture"], "answer": "Agriculture" },
            { "question": "Which of the following tasks requires artificial intelligence in a robot, rather than just simple programming?", "options": ["Moving its arm from point A to point B.", "Welding two pieces of metal together in a fixed position.", "Navigating a constantly changing, unfamiliar environment.", "Picking up a box and placing it on a conveyor belt."], "answer": "Navigating a constantly changing, unfamiliar environment." },
            { "question": "What is a major ethical concern regarding the development of highly autonomous, intelligent robots?", "options": ["The cost of the electricity they consume.", "The accountability and decision-making in critical situations (e.g., an accident).", "The colour the robots are painted.", "The Wi-Fi signal strength required for them to operate."], "answer": "The accountability and decision-making in critical situations (e.g., an accident)." },
            { "question": "A robot in an Amazon warehouse is designed to find a specific shelf, pick up a product, and bring it to a human packer. The gripper that holds the product is the robot's...", "options": ["actuator", "sensor", "end effector", "processor"], "answer": "end effector" },
            { "question": "What is a primary limitation of most current industrial robots?", "options": ["They are extremely slow.", "They are unable to lift heavy objects.", "They can typically only perform the specific, pre-programmed tasks they were designed for.", "They cannot work for more than an hour without a break."], "answer": "They can typically only perform the specific, pre-programmed tasks they were designed for." },
            { "question": "Robots are used to explore distant planets like Mars. What is the main reason for this?", "options": ["It is cheaper than sending humans.", "The environment is hostile and dangerous for human life.", "Robots can take better pictures than human astronauts.", "The journey is too short to be of interest to a human."], "answer": "The environment is hostile and dangerous for human life." },
            { "question": "The central component of a robot that interprets sensor data, makes decisions, and controls the actuators is the:", "options": ["End effector", "Hydraulic pump", "Processor/Controller", "Chassis"], "answer": "Processor/Controller" },
            { "question": "A company decides to replace its human-staffed customer service call centre with AI-powered chatbots. This is an example of robotics/AI being used in...", "options": ["manufacturing.", "the service industry.", "exploration.", "hazardous environments."], "answer": "the service industry." }
        ]
    },
    "p2-linear-search": {
        title: "Paper 2: Linear Search",
        chapter: "Paper 2 Practice",
        subtitle: "Test your knowledge of the linear search algorithm.",
        quizType: "mixed", // Indicate this quiz has multiple question types
        questions: [
            // --- Type 1: Multiple Choice (Function/Role) ---
            {
                "type": "mc",
                "question": "In the provided linear search pseudocode, what is the purpose of the line 'Found ← FALSE'?",
                "code": "1 DECLARE DataArray : ARRAY[1:100] OF INTEGER\n2 DECLARE SearchValue : INTEGER\n3 DECLARE Found : BOOLEAN\n4 DECLARE ArrayIndex : INTEGER\n5 Found ← FALSE\n6 ArrayIndex ← 1\n7 WHILE Found = FALSE AND ArrayIndex <= 100 DO\n...\n12 ENDWHILE",
                "options": [
                    "To store the value being searched for.",
                    "To initialize a flag indicating the item has not yet been located.",
                    "To set the starting index for the search.",
                    "To count the number of comparisons made."
                ],
                "answer": "To initialize a flag indicating the item has not yet been located."
            },
            {
                "type": "mc",
                "question": "What does the condition 'ArrayIndex < LENGTH(Array)' (or similar) in the WHILE loop condition ensure?",
                "code": "...WHILE Found = FALSE AND ArrayIndex < LENGTH(Array) DO...",
                "options": [
                    "That the search stops immediately when the value is found.",
                    "That the search does not continue beyond the bounds of the array.",
                    "That the search only checks even-numbered indices.",
                    "That the search continues indefinitely."
                ],
                "answer": "That the search does not continue beyond the bounds of the array."
            },
            {
                "type": "mc",
                "question": "What is the function of the line 'IF DataArray[ArrayIndex] = SearchValue THEN'?",
                "code": "...IF DataArray[ArrayIndex] = SearchValue THEN...",
                "options": [
                    "It moves to the next element in the array.",
                    "It checks if the current array element matches the target value.",
                    "It stops the loop if the value is false.",
                    "It initializes the search index."
                ],
                "answer": "It checks if the current array element matches the target value."
            },
            {
                "type": "mc",
                "question": "Why is the line 'Found ← TRUE' executed when a match is found?",
                "code": "...IF DataArray[ArrayIndex] = SearchValue THEN\n  OUTPUT \"Found at \" & ArrayIndex\n  Found ← TRUE\n...",
                "options": [
                    "To indicate an error occurred.",
                    "To move to the next item in the array.",
                    "To signal that the search is complete and the loop should terminate.",
                    "To reset the search index."
                ],
                "answer": "To signal that the search is complete and the loop should terminate."
            },
            {
                "type": "mc",
                "question": "What is the purpose of the line 'ArrayIndex ← ArrayIndex + 1' in the ELSE block?",
                "code": "...ELSE\n  ArrayIndex ← ArrayIndex + 1\nENDIF...",
                "options": [
                    "To indicate the item has been found.",
                    "To stop the search loop.",
                    "To move the search to the next element in the array.",
                    "To compare the current element with the search value."
                ],
                "answer": "To move the search to the next element in the array."
            },
             {
                "type": "mc",
                "question": "What is the primary role of the 'Found' variable in a linear search?",
                "options": [
                    "To store the index where the item was found.",
                    "To count how many items are in the array.",
                    "To act as a flag to control the main search loop.",
                    "To store the value being searched for."
                ],
                "answer": "To act as a flag to control the main search loop."
            },
            {
                "type": "mc",
                "question": "Consider the loop condition: `WHILE Found = FALSE AND ArrayIndex <= MaxIndex DO`. What happens if `Found` becomes TRUE?",
                "options": [
                    "The loop continues to check the rest of the array.",
                    "The loop terminates immediately.",
                    "An error occurs.",
                    "`ArrayIndex` resets to 1."
                ],
                "answer": "The loop terminates immediately."
            },
             {
                "type": "mc",
                "question": "What does the expression `LENGTH(DataArray)` typically represent in pseudocode?",
                "options": [
                    "The value of the last element.",
                    "The number of elements currently stored in the array.",
                    "The maximum index allowed (e.g., if array is [0:N], length is N+1).",
                    "The index of the first element."
                ],
                "answer": "The number of elements currently stored in the array."
            },
            {
                "type": "mc",
                "question": "If the search value is NOT present in the array, what will be the state of the 'Found' variable after the WHILE loop finishes?",
                 "code": "1 DECLARE DataArray : ARRAY[1:100] OF INTEGER\n...\n5 Found ← FALSE\n6 ArrayIndex ← 1\n7 WHILE Found = FALSE AND ArrayIndex <= 100 DO\n8   IF DataArray[ArrayIndex] = SearchValue THEN\n9     Found ← TRUE\n10  ELSE\n11    ArrayIndex ← ArrayIndex + 1\n12  ENDIF\n13 ENDWHILE\n14 // What is Found here if SearchValue was not in DataArray?",
                "options": [
                    "TRUE",
                    "FALSE",
                    "Undefined",
                    "100"
                ],
                "answer": "FALSE"
            },
             {
                "type": "mc",
                "question": "In the provided code, the search starts at `ArrayIndex ← 1`. What assumption does this make about the array indexing?",
                 "code": "...ArrayIndex ← 1\nWHILE Found = FALSE AND ArrayIndex <= 100 DO...",
                 "options": [
                    "The array indices start from 1.",
                    "The array indices start from 0.",
                    "The array is empty.",
                    "The array is already sorted."
                ],
                "answer": "The array indices start from 1."
            },
            // --- Type 2: Fill-in-the-Blank ---
            {
                "type": "typed",
                "question": "This linear search pseudocode needs to initialize the array index before the loop. Type the missing line.",
                "code": "1 DECLARE DataArray : ARRAY[0:99] OF INTEGER\n2 DECLARE SearchValue : INTEGER\n3 DECLARE Found : BOOLEAN\n4 DECLARE ArrayIndex : INTEGER\n5 Found ← FALSE\n6 // [TYPE YOUR ANSWER HERE]\n7 WHILE Found = FALSE AND ArrayIndex <= 99 DO\n...\n12 ENDWHILE",
                "answer": "ArrayIndex <- 0" // Changed ← to <-
            },
            {
                "type": "typed",
                "question": "Complete the WHILE loop condition for a linear search that continues as long as the item is not found AND the index is within the valid range (0 to N-1).",
                "code": "...\nArrayIndex ← 0\n// [TYPE YOUR ANSWER HERE]\n  IF DataArray[ArrayIndex] = SearchValue THEN\n    Found ← TRUE\n  ELSE\n    ArrayIndex ← ArrayIndex + 1\n  ENDIF\nENDWHILE",
                "answer": "WHILE Found = FALSE AND ArrayIndex < N DO" // No arrow here
            },
             {
                "type": "typed",
                "question": "Inside the linear search loop, if the item is found, the 'Found' flag needs to be set. Type the missing line.",
                "code": "...WHILE Found = FALSE AND ArrayIndex <= MaxIndex DO\n  IF DataArray[ArrayIndex] = SearchValue THEN\n    OUTPUT \"Found at index \" & ArrayIndex\n    // [TYPE YOUR ANSWER HERE]\n  ELSE\n    ArrayIndex ← ArrayIndex + 1\n  ENDIF\nENDWHILE",
                "answer": "Found <- TRUE" // Changed ← to <-
            },
            {
                "type": "typed",
                "question": "If the current element does not match the search value, the index must be incremented to check the next element. Type the missing line.",
                 "code": "...WHILE Found = FALSE AND ArrayIndex <= MaxIndex DO\n  IF DataArray[ArrayIndex] = SearchValue THEN\n    Found ← TRUE\n  ELSE\n    // [TYPE YOUR ANSWER HERE]\n  ENDIF\nENDWHILE",
                 "answer": "ArrayIndex <- ArrayIndex + 1" // Changed ← to <-
            },
            {
                "type": "typed",
                "question": "This procedure searches for a Target value in an array `MyList`. It needs to initialize the `Found` flag before the loop. Type the missing line.",
                "code": "PROCEDURE LinearSearch(MyList : ARRAY[1:50] OF STRING, Target : STRING)\n  DECLARE Index : INTEGER\n  DECLARE Found : BOOLEAN\n  Index ← 1\n  // [TYPE YOUR ANSWER HERE]\n  WHILE Index <= 50 AND Found = FALSE\n...\nENDPROCEDURE",
                "answer": "Found <- FALSE" // Changed ← to <-
            },
             {
                "type": "typed",
                "question": "Complete the IF statement line that checks if the element at the current `Index` matches the `Target` value.",
                "code": "...WHILE Index <= 50 AND Found = FALSE\n  // [TYPE YOUR ANSWER HERE]\n    Found ← TRUE\n  ELSE\n    Index ← Index + 1\n  ENDIF\nENDWHILE...",
                "answer": "IF MyList[Index] = Target THEN" // No arrow here
            },
             {
                "type": "typed",
                "question": "After the loop finishes, we need to check if the item was found. Complete the IF statement.",
                 "code": "...ENDWHILE\n// [TYPE YOUR ANSWER HERE]\n  OUTPUT Target & \" was found.\"\nELSE\n  OUTPUT Target & \" was not found.\"\nENDIF",
                 "answer": "IF Found = TRUE THEN" // No arrow here
            },
        
            // --- Type 3: Situational ---
            {
                "type": "mc",
                "question": "In which of these scenarios would a linear search be a reasonably efficient choice?",
                "options": [
                    "Searching for a name in a very large, sorted telephone directory.",
                    "Searching for a specific student ID in a small, unsorted list of attendees.",
                    "Searching for a book title in a massive, sorted library database.",
                    "Finding the highest score in a list of a million unsorted exam results."
                ],
                "answer": "Searching for a specific student ID in a small, unsorted list of attendees."
            },
            {
                "type": "mc",
                "question": "What is the main disadvantage of using linear search on a very large dataset?",
                "options": [
                    "It only works on sorted data.",
                    "It requires a lot of memory.",
                    "It can be very slow if the item is near the end or not present.",
                    "It cannot find duplicate items."
                ],
                "answer": "It can be very slow if the item is near the end or not present."
            },
             {
                "type": "mc",
                "question": "Linear search is often used when:",
                "options": [
                    "The data is already sorted in descending order.",
                    "Maximum speed is the absolute top priority for a huge dataset.",
                    "The list is small, or the data is unsorted and simplicity is desired.",
                    "You need to find the average value in the list."
                ],
                "answer": "The list is small, or the data is unsorted and simplicity is desired."
            }
        ]
    },
    "p2-bubble-sort": {
        title: "Paper 2: Bubble Sort",
        chapter: "Paper 2 Practice",
        subtitle: "Test your knowledge of the bubble sort algorithm.",
        quizType: "mixed",
        questions: [
            // --- Type 1: Multiple Choice (Function/Role) ---
            {
                "type": "mc",
                "question": "In the provided bubble sort pseudocode, what is the purpose of the 'Changes' variable?",
                "code": "WHILE Changes = FALSE OR NumberPasses <= LENGTH(DataArray) - 1 DO\n  Changes ← FALSE\n  ...\n      Changes ← TRUE\n  ...\nENDWHILE",
                "options": [
                    "To count the number of elements in the array.",
                    "To store the largest value found so far.",
                    "To track whether any swaps were made during a pass through the array.",
                    "To hold the index of the current element being compared."
                ],
                "answer": "To track whether any swaps were made during a pass through the array."
            },
            {
                "type": "mc",
                "question": "What does the line 'Changes ← FALSE' at the beginning of the WHILE loop body achieve?",
                "code": "WHILE ... DO\n  Changes ← FALSE\n  FOR Index ← 0 to LENGTH(DataArray) - 1\n...",
                "options": [
                    "It stops the sort immediately.",
                    "It indicates that a swap has just occurred.",
                    "It resets the swap flag for the current pass, assuming no swaps have happened yet in this pass.",
                    "It forces the sort to run exactly once."
                ],
                "answer": "It resets the swap flag for the current pass, assuming no swaps have happened yet in this pass."
            },
            {
                "type": "mc",
                "question": "What is the role of the 'FOR Index ← 0 to LENGTH(DataArray) - 1' loop?",
                "code": "FOR Index ← 0 to LENGTH(DataArray) - 1\n  IF DataArray[Index] > DataArray[Index + 1] THEN\n    // Swap\n  ENDIF\nNEXT Index",
                "options": [
                    "To count the total number of passes.",
                    "To iterate through the array elements, comparing adjacent pairs.",
                    "To find the smallest element in the array.",
                    "To reset the 'Changes' flag."
                ],
                "answer": "To iterate through the array elements, comparing adjacent pairs."
            },
            {
                "type": "mc",
                "question": "The condition 'IF DataArray[Index] > DataArray[Index + 1] THEN' checks if:",
                "options": [
                    "The two adjacent elements are equal.",
                    "The element on the right is larger than the element on the left.",
                    "The element on the left is larger than the element on the right (i.e., they are out of order for an ascending sort).",
                    "The array is fully sorted."
                ],
                "answer": "The element on the left is larger than the element on the right (i.e., they are out of order for an ascending sort)."
            },
            {
                "type": "mc",
                "question": "What is the purpose of the three lines involving the 'Temp' variable?",
                "code": "Temp ← DataArray[Index]\nDataArray[Index] ← DataArray[Index + 1]\nDataArray[Index + 1] ← Temp",
                "options": [
                    "To compare the two adjacent elements.",
                    "To delete an element from the array.",
                    "To swap the values of the two adjacent elements.",
                    "To find the average of the two elements."
                ],
                "answer": "To swap the values of the two adjacent elements."
            },
            {
                "type": "mc",
                "question": "Why is the line 'Changes ← TRUE' executed immediately after the swap?",
                "code": "//if not swap the items\nTemp ← DataArray[Index]\n...\nDataArray[Index + 1] ← Temp\nChanges ← TRUE",
                "options": [
                    "To stop the inner FOR loop.",
                    "To indicate that the array is now sorted.",
                    "To signal that a swap occurred during this pass, meaning the array might not be sorted yet.",
                    "To reset the swap counter."
                ],
                "answer": "To signal that a swap occurred during this pass, meaning the array might not be sorted yet."
            },
             {
                "type": "mc",
                "question": "Based on standard bubble sort logic, under what condition should the outer WHILE loop ideally terminate?",
                 "options": [
                    "When `NumberPasses` reaches `LENGTH(DataArray) - 1`.",
                    "When `Changes` remains `FALSE` after a complete pass through the FOR loop.",
                    "Immediately after the first swap.",
                    "When `Index` reaches `LENGTH(DataArray) - 1`."
                ],
                "answer": "When `Changes` remains `FALSE` after a complete pass through the FOR loop." // Based on standard logic, not the potentially flawed code provided
            },
             {
                "type": "mc",
                "question": "What does 'LENGTH(DataArray)' represent in the pseudocode?",
                "options": [
                    "The value of the last element.",
                    "The total number of elements in the array.",
                    "The index of the last element.",
                    "The index of the first element."
                ],
                "answer": "The total number of elements in the array."
            },
            {
                "type": "mc",
                "question": "Why does the FOR loop typically iterate up to `LENGTH(DataArray) - 1` (or `LENGTH(DataArray) - 2` in some implementations)?",
                "code": "FOR Index ← 0 to LENGTH(DataArray) - 1",
                "options": [
                    "Because array indices start at 1.",
                    "To avoid an error when comparing `DataArray[Index]` with `DataArray[Index + 1]` on the last element.",
                    "Because the last element is always sorted first.",
                    "To make the sort run faster."
                ],
                "answer": "To avoid an error when comparing `DataArray[Index]` with `DataArray[Index + 1]` on the last element." // The code provided goes to -1, which is risky. -2 is safer if length is number of elements.
            },
             {
                "type": "mc",
                "question": "After one complete pass of the outer WHILE loop, what is guaranteed about the array?",
                "options": [
                    "The entire array is sorted.",
                    "The smallest element is in the first position.",
                    "The largest element has 'bubbled up' to the end of the array section considered in that pass.",
                    "No changes were made to the array."
                ],
                "answer": "The largest element has 'bubbled up' to the end of the array section considered in that pass."
            },
            {
                "type": "mc",
                "question": "What is the purpose of the 'NumberPasses' variable mentioned in the comments?",
                "code": "//continue until one pass has no changes (Changes = false)\n//or it has looped array length - 1 times",
                "options": [
                  "To count the number of swaps made.",
                  "To ensure the algorithm terminates even if the 'Changes' flag logic fails (acting as a safety limit).",
                  "To store the current index being checked.",
                  "To hold the temporary value during a swap."
                ],
                 "answer": "To ensure the algorithm terminates even if the 'Changes' flag logic fails (acting as a safety limit)."
             },
            {
                "type": "mc",
                "question": "What kind of sort is being performed if the comparison is `IF DataArray[Index] > DataArray[Index + 1] THEN`?",
                "options": [
                    "Descending order sort (largest to smallest)",
                    "Ascending order sort (smallest to largest)",
                    "Random order sort",
                    "Alphabetical sort"
                ],
                "answer": "Ascending order sort (smallest to largest)"
            },
            // --- Type 2: Fill-in-the-Blank ---
            {
                "type": "typed",
                "question": "Complete the FOR loop statement to iterate through array indices from 0 up to, but not including, the last index (assuming LENGTH gives the total number of items).",
                "code": "WHILE Changes = TRUE DO\n  Changes <- FALSE\n  // [TYPE YOUR ANSWER HERE]\n    IF DataArray[Index] > DataArray[Index + 1] THEN\n      // Swap\n      Changes <- TRUE\n    ENDIF\n  NEXT Index\nENDWHILE",
                "answer": "FOR Index <- 0 TO LENGTH(DataArray) - 2" // Corrected safe upper bound
            },
            {
                "type": "typed",
                "question": "Type the line of pseudocode that correctly compares the element at the current `Index` with the next element to check if they are out of order for an ascending sort.",
                "code": "FOR Index <- 0 TO MaxIndex - 1\n  // [TYPE YOUR ANSWER HERE]\n    // Swap elements\n    Changes <- TRUE\n  ENDIF\nNEXT Index",
                "answer": "IF DataArray[Index] > DataArray[Index + 1] THEN"
            },
            {
                "type": "typed",
                "question": "Inside the IF block where a swap occurs, the 'Changes' flag must be set. Type the missing line.",
                "code": "IF DataArray[Index] > DataArray[Index + 1] THEN\n  Temp <- DataArray[Index]\n  DataArray[Index] <- DataArray[Index + 1]\n  DataArray[Index + 1] <- Temp\n  // [TYPE YOUR ANSWER HERE]\nENDIF",
                "answer": "Changes <- TRUE"
            },
            {
                "type": "typed",
                "question": "Complete the first line of the three-step swap process using a temporary variable 'Temp'.",
                "code": "IF DataArray[Index] > DataArray[Index + 1] THEN\n  // [TYPE YOUR ANSWER HERE]\n  DataArray[Index] <- DataArray[Index + 1]\n  DataArray[Index + 1] <- Temp\n  Changes <- TRUE\nENDIF",
                "answer": "Temp <- DataArray[Index]"
            },
             {
                "type": "typed",
                "question": "A flag-controlled bubble sort often starts by assuming changes will be needed. Before the WHILE loop, how should 'Changes' be initialized?",
                "code": "DECLARE Changes : BOOLEAN\n// [TYPE YOUR ANSWER HERE]\nWHILE Changes = TRUE DO\n  Changes <- FALSE\n...",
                "answer": "Changes <- TRUE"
            },
            // --- Type 3: Situational ---
            {
                "type": "mc",
                "question": "Bubble sort is considered an inefficient algorithm for large datasets. Why?",
                "options": [
                    "It requires too much memory.",
                    "It makes many comparisons and swaps, resulting in a slow O(n^2) time complexity in the average/worst case.",
                    "It only works on numbers, not strings.",
                    "It cannot sort data that is already partially sorted."
                ],
                "answer": "It makes many comparisons and swaps, resulting in a slow O(n^2) time complexity in the average/worst case."
            },
            {
                "type": "mc",
                "question": "In which situation might bubble sort be a reasonable choice?",
                "options": [
                    "Sorting millions of records in a database.",
                    "Sorting a small list of items (e.g., fewer than 20) where simplicity is more important than speed.",
                    "Sorting data in real-time as it arrives from a sensor.",
                    "When the data is guaranteed to be in reverse order."
                ],
                "answer": "Sorting a small list of items (e.g., fewer than 20) where simplicity is more important than speed."
            },
            {
                "type": "mc",
                "question": "What is the best-case time complexity for bubble sort (when the data is already sorted)?",
                "options": [
                    "O(1) - Constant time",
                    "O(n) - Linear time (if optimized to stop early)",
                    "O(n log n) - Log-linear time",
                    "O(n^2) - Quadratic time"
                ],
                "answer": "O(n) - Linear time (if optimized to stop early)" // The flag allows it to stop after one pass if sorted.
            }
        ]
    },
    "p2-totalling": {
        title: "Paper 2: Totalling Algorithm",
        chapter: "Paper 2 Practice",
        subtitle: "Test your knowledge of the totalling algorithm.",
        quizType: "mixed",
        questions: [
            // --- Type 1: Multiple Choice (Function/Role) ---
            {
                "type": "mc",
                "question": "In Example 1, what is the purpose of the line 'Total <- 0'?",
                "code": "Total <- 0 //Initialise the total variable to 0",
                "options": [
                    "To store the first user input.",
                    "To set the final output value.",
                    "To initialize the accumulator variable to zero before starting the sum.",
                    "To define the number of times the loop will run."
                ],
                "answer": "To initialize the accumulator variable to zero before starting the sum."
            },
            {
                "type": "mc",
                "question": "What does the 'FOR X <- 0 TO 9' loop achieve in Example 1?",
                "code": "FOR X <- 0 TO 9\n  Total <- Total + INPUT(\"Enter a value\")\nNEXT X",
                "options": [
                    "It runs exactly 9 times.",
                    "It calculates the average of 10 numbers.",
                    "It repeats the process of taking input and adding it to the total 10 times.",
                    "It initializes the variable X to 9."
                ],
                "answer": "It repeats the process of taking input and adding it to the total 10 times."
            },
            {
                "type": "mc",
                "question": "What is the function of the line 'Total <- Total + INPUT(\"Enter a value\")' inside the loop?",
                "code": "Total <- Total + INPUT(\"Enter a value\") //Add the input to the total",
                "options": [
                    "It displays the current total.",
                    "It asks the user for a number and adds it to the running total.",
                    "It resets the total to the user's input.",
                    "It compares the total to the user's input."
                ],
                "answer": "It asks the user for a number and adds it to the running total."
            },
            {
                "type": "mc",
                "question": "In Example 2, what does 'LENGTH(DataArray)' likely represent?",
                "code": "FOR Count <- 0 TO LENGTH(DataArray) - 1",
                "options": [
                    "The index of the last element in the array.",
                    "The value of the first element in the array.",
                    "The total number of elements in the array.",
                    "The sum of all elements in the array."
                ],
                "answer": "The total number of elements in the array."
            },
            {
                "type": "mc",
                "question": "Why does the loop in Example 2 go from '0 TO LENGTH(DataArray) - 1'?",
                "code": "FOR Count <- 0 TO LENGTH(DataArray) - 1",
                "options": [
                    "Because arrays always start at index 1.",
                    "To skip the last element of the array.",
                    "Because array indices often start at 0, so the last index is Length-1.",
                    "To make the loop run faster."
                ],
                "answer": "Because array indices often start at 0, so the last index is Length-1."
            },
            {
                "type": "mc",
                "question": "What is the role of the line 'TotalValue <- TotalValue + DataArray[Count]'?",
                "code": "TotalValue <- TotalValue + DataArray[Count] //Add the input to the total",
                "options": [
                    "It stores the current index in TotalValue.",
                    "It adds the value of the current array element to the running total.",
                    "It replaces TotalValue with the value of the current array element.",
                    "It checks if the current element is greater than TotalValue."
                ],
                "answer": "It adds the value of the current array element to the running total."
            },
            {
                "type": "mc",
                "question": "What is the general name for a variable like 'Total' or 'TotalValue' used to accumulate a sum?",
                "options": [
                    "Counter",
                    "Index",
                    "Accumulator",
                    "Flag"
                ],
                "answer": "Accumulator"
            },
             {
                "type": "mc",
                "question": "What is essential to do before starting any totalling loop?",
                 "options": [
                    "Initialize the total variable (accumulator) to zero.",
                    "Set the loop counter to its maximum value.",
                    "Input the first value.",
                    "Check if the array is sorted."
                ],
                "answer": "Initialize the total variable (accumulator) to zero."
            },
             {
                "type": "mc",
                "question": "In Example 2, what does `DataArray[Count]` access?",
                 "options": [
                    "The number of elements in the array.",
                    "The value stored at the index specified by the `Count` variable.",
                    "The current value of the `TotalValue`.",
                    "The next available memory address."
                ],
                "answer": "The value stored at the index specified by the `Count` variable."
            },
            {
                "type": "mc",
                "question": "What is the purpose of the 'OUTPUT Total' line at the end of both examples?",
                "options": [
                    "To start the calculation.",
                    "To check for errors.",
                    "To display the final calculated sum.",
                    "To reset the total for the next run."
                ],
                "answer": "To display the final calculated sum."
            },
            // --- Type 2: Fill-in-the-Blank ---
            {
                "type": "typed",
                "question": "This pseudocode sums numbers input by a user until they enter -1. Type the line that initializes the total.",
                "code": "1 DECLARE Total, UserValue: INTEGER\n2 // [TYPE YOUR ANSWER HERE]\n3 INPUT UserValue\n4 WHILE UserValue <> -1\n5   Total <- Total + UserValue\n6   INPUT UserValue\n7 ENDWHILE\n8 OUTPUT Total",
                "answer": "Total <- 0"
            },
            {
                "type": "typed",
                "question": "Complete the line inside the loop that adds the current array element (`Values[Index]`) to the running `Sum`.",
                "code": "Sum <- 0\nFOR Index <- 1 TO 100\n  // [TYPE YOUR ANSWER HERE]\nNEXT Index\nOUTPUT Sum",
                "answer": "Sum <- Sum + Values[Index]"
            },
            {
                "type": "typed",
                "question": "This code sums the elements of a 2D array. Complete the inner loop line that adds the element to `GridTotal`.",
                "code": "GridTotal <- 0\nFOR Row <- 0 TO 4\n  FOR Col <- 0 TO 4\n    // [TYPE YOUR ANSWER HERE]\n  NEXT Col\nNEXT Row\nOUTPUT GridTotal",
                "answer": "GridTotal <- GridTotal + Grid[Row, Col]"
            },
             {
                "type": "typed",
                "question": "Type the line needed before a FOR loop that sums array elements, initializing the `RunningTotal` variable.",
                "code": "DECLARE MyArray : ARRAY[0:49] OF REAL\nDECLARE RunningTotal : REAL\nDECLARE i : INTEGER\n// [TYPE YOUR ANSWER HERE]\nFOR i <- 0 TO 49\n  RunningTotal <- RunningTotal + MyArray[i]\nNEXT i",
                "answer": "RunningTotal <- 0.0" // Or just 0, depending on strictness
            },
             {
                "type": "typed",
                "question": "Complete the FOR loop header to iterate through an array `Sales` with indices from 1 to 50.",
                "code": "TotalSales <- 0.0\n// [TYPE YOUR ANSWER HERE]\n  TotalSales <- TotalSales + Sales[Day]\nNEXT Day\nOUTPUT TotalSales",
                "answer": "FOR Day <- 1 TO 50"
            },
             {
                "type": "typed",
                "question": "In Example 1, type the line that gets input from the user and adds it to the total in a single step.",
                 "code": "Total <- 0\nFOR X <- 0 TO 9\n  // [TYPE YOUR ANSWER HERE]\nNEXT X\nOUTPUT Total",
                 "answer": "Total <- Total + INPUT(\"Enter a value\")"
            },
             {
                "type": "typed",
                "question": "Type the final line of pseudocode required to display the calculated `Sum` after the loop finishes.",
                 "code": "Sum <- 0\nFOR i <- 1 TO N\n  Sum <- Sum + Scores[i]\nNEXT i\n// [TYPE YOUR ANSWER HERE]",
                 "answer": "OUTPUT Sum"
            },
            // --- Type 3: Situational ---
            {
                "type": "mc",
                "question": "In which of these scenarios would a totalling algorithm be most directly useful?",
                "options": [
                    "Finding the highest score in a list of exam results.",
                    "Calculating the total sales revenue for a shop over a week.",
                    "Sorting customer names into alphabetical order.",
                    "Checking if a specific product ID exists in inventory."
                ],
                "answer": "Calculating the total sales revenue for a shop over a week."
            },
            {
                "type": "mc",
                "question": "A program needs to calculate the sum of prices for items in a shopping basket. What core algorithmic pattern does this require?",
                "options": [
                    "Searching",
                    "Sorting",
                    "Counting",
                    "Totalling"
                ],
                "answer": "Totalling"
            },
            {
                "type": "mc",
                "question": "A game keeps track of a player's score by adding points for various actions. The part of the code that adds the points to the player's overall score is an example of:",
                "options": [
                    "Input validation",
                    "Totalling",
                    "Finding the minimum",
                    "Linear search"
                ],
                "answer": "Totalling"
            }
        ]
    },
    "p2-min-max": {
        title: "Paper 2: Finding Minimum and Maximum",
        chapter: "Paper 2 Practice",
        subtitle: "Test your knowledge of finding min/max values.",
        quizType: "mixed",
        questions: [
            // --- Min/Max - Type 1: Multiple Choice (Function/Role) ---
            {
                "type": "mc",
                "question": "In the 'Find Smallest' Example 1, why is 'Minimum' initialized to a large value (9999)?",
                "code": "Minimum <- 9999 //initialise minimum to large value",
                "options": [
                    "To ensure the first valid user input will be smaller and become the initial minimum.",
                    "To set the maximum possible value the user can enter.",
                    "To count how many numbers are entered.",
                    "To store the final result."
                ],
                "answer": "To ensure the first valid user input will be smaller and become the initial minimum."
            },
            {
                "type": "mc",
                "question": "In the 'Find Largest' Example 1, why is 'Maximum' initialized to a small value (-9999)?",
                "code": "Maximum <- -9999 //initialise maximum to small value",
                "options": [
                    "To count the numbers entered.",
                    "To ensure the first valid user input will be larger and become the initial maximum.",
                    "To set the minimum possible value the user can enter.",
                    "This is the final value that will be output."
                ],
                "answer": "To ensure the first valid user input will be larger and become the initial maximum."
            },
            {
                "type": "mc",
                "question": "What is the purpose of the condition 'IF Number < Minimum THEN' in 'Find Smallest' Example 1?",
                "code": "IF Number < Minimum THEN // check if the number entered is smaller than the current minimum",
                "options": [
                    "To check if the number is the sentinel value.",
                    "To compare the newly input number with the smallest number found so far.",
                    "To count the number of inputs.",
                    "To initialize the Minimum variable."
                ],
                "answer": "To compare the newly input number with the smallest number found so far."
            },
            {
                "type": "mc",
                "question": "What does the line 'Maximum <- Number' do inside the IF statement in 'Find Largest' Example 1?",
                "code": "IF Number > Maximum THEN\n  Maximum <- Number //if true then make maximum because the number\nENDIF",
                "options": [
                    "It ends the loop.",
                    "It resets Maximum to -9999.",
                    "It updates 'Maximum' to the new larger value that was just input.",
                    "It outputs the current maximum."
                ],
                "answer": "It updates 'Maximum' to the new larger value that was just input."
            },
            {
                "type": "mc",
                "question": "In 'Find Smallest' Example 2, why does the loop 'FOR X <- 0 TO LENGTH(NumberArray)' iterate through the array?",
                "code": "FOR X <- 0 TO LENGTH(NumberArray)\n  IF NumberArray[X] < Minimum THEN\n    Minimum <- NumberArray[X]\n  ENDIF\nNEXT X",
                "options": [
                    "To initialize the Minimum value.",
                    "To count the number of elements.",
                    "To access each element of the array for comparison.",
                    "To sort the array."
                ],
                "answer": "To access each element of the array for comparison."
            },
            {
                "type": "mc",
                "question": "What is the role of the line 'Minimum <- NumberArray[X]' in 'Find Smallest' Example 2?",
                "code": "IF NumberArray[X] < Minimum THEN\n  Minimum <- NumberArray[X]\nENDIF",
                "options": [
                    "It increments the loop counter X.",
                    "It updates the 'Minimum' variable if a smaller element is found in the array.",
                    "It checks if the loop should continue.",
                    "It initializes the Minimum variable."
                ],
                "answer": "It updates the 'Minimum' variable if a smaller element is found in the array."
            },
            {
                 "type": "mc",
                 "question": "A common alternative way to initialize 'Minimum' when searching an array (Example 2) is to:",
                 "options": [
                     "Set Minimum to 0.",
                     "Set Minimum to the value of the *first* element in the array.",
                     "Set Minimum to -1.",
                     "Leave Minimum uninitialized."
                 ],
                 "answer": "Set Minimum to the value of the *first* element in the array."
             },
             {
                 "type": "mc",
                 "question": "Similarly, a common alternative way to initialize 'Maximum' when searching an array (Example 2) is to:",
                 "options": [
                     "Set Maximum to 9999.",
                     "Set Maximum to 0.",
                     "Set Maximum to the value of the *first* element in the array.",
                     "Set Maximum to -1."
                 ],
                 "answer": "Set Maximum to the value of the *first* element in the array."
             },
            {
                "type": "mc",
                "question": "If finding the minimum in an array `Scores` indexed from 1 to 10, how should the loop be written?",
                "options": [
                    "FOR i <- 0 TO 9",
                    "FOR i <- 1 TO 10",
                    "FOR i <- 0 TO 10",
                    "WHILE i < 10"
                ],
                "answer": "FOR i <- 1 TO 10"
            },
             {
                 "type": "mc",
                 "question": "What is the purpose of the sentinel value (0) in Example 1 for both min and max finding?",
                 "code": "WHILE Number >= 1 DO //loop until the user enters 0\n  Number <- INPUT(\"Enter a number or 0 to stop\")",
                 "options": [
                     "It's the value being searched for.",
                     "It's used to initialize the min/max variable.",
                     "It's a special value used to signal the end of user input.",
                     "It's added to the min/max value."
                 ],
                 "answer": "It's a special value used to signal the end of user input."
             },
            // --- Min/Max - Type 2: Fill-in-the-Blank ---
            {
                "type": "typed",
                "question": "To find the maximum value in an array `Data` indexed 0 to N-1, initialize `MaxValue` before the loop. Type the initialization line assuming the first element is used.",
                "code": "DECLARE Data : ARRAY[0:N-1] OF INTEGER\nDECLARE MaxValue : INTEGER\nDECLARE i : INTEGER\n// [TYPE YOUR ANSWER HERE]\nFOR i <- 1 TO N-1\n...",
                "answer": "MaxValue <- Data[0]"
            },
            {
                "type": "typed",
                "question": "Complete the IF condition to check if the current array element `Values[i]` is greater than the current `Maximum`.",
                "code": "Maximum <- Values[0]\nFOR i <- 1 TO LENGTH(Values)-1\n  // [TYPE YOUR ANSWER HERE]\n    Maximum <- Values[i]\n  ENDIF\nNEXT i",
                "answer": "IF Values[i] > Maximum THEN"
            },
            {
                "type": "typed",
                "question": "If a new minimum is found (i.e., `CurrentValue < MinSoFar`), type the line that updates `MinSoFar`.",
                "code": "IF CurrentValue < MinSoFar THEN\n  // [TYPE YOUR ANSWER HERE]\nENDIF",
                "answer": "MinSoFar <- CurrentValue"
            },
            {
                "type": "typed",
                "question": "To find the smallest number from user input until 0 is entered, initialize `Minimum` to a very large number. Type the initialization.",
                "code": "// [TYPE YOUR ANSWER HERE]\nNumber <- 1\nWHILE Number <> 0 DO\n...",
                "answer": "Minimum <- 9999" // Or any suitably large number
            },
            {
                "type": "typed",
                "question": "Complete the loop header to iterate through `Temperatures` array (indices 1 to 30) to find the maximum.",
                "code": "MaxTemp <- Temperatures[1]\n// [TYPE YOUR ANSWER HERE]\n  IF Temperatures[Day] > MaxTemp THEN\n    MaxTemp <- Temperatures[Day]\n  ENDIF\nNEXT Day",
                "answer": "FOR Day <- 2 TO 30" // Start from 2 since index 1 is initial max
            },
             {
                 "type": "typed",
                 "question": "Type the final line required to display the `Smallest` value found after the loop finishes.",
                 "code": "... ENDWHILE // Loop finishes\n// [TYPE YOUR ANSWER HERE]",
                 "answer": "OUTPUT Smallest"
             },
            // --- Min/Max - Type 3: Situational ---
            {
                "type": "mc",
                "question": "A teacher needs to find the highest score achieved by any student on a recent test. Which algorithm pattern is most appropriate?",
                "options": [
                    "Linear Search",
                    "Counting Occurrences",
                    "Finding the Maximum",
                    "Calculating the Average"
                ],
                "answer": "Finding the Maximum"
            },
            {
                "type": "mc",
                "question": "A weather station records hourly temperatures. To identify the coldest temperature recorded during the day, which algorithm is needed?",
                "options": [
                    "Finding the Minimum",
                    "Bubble Sort",
                    "Totalling",
                    "Input Validation"
                ],
                "answer": "Finding the Minimum"
            },
            {
                "type": "mc",
                "question": "When would initializing Minimum/Maximum to the first element of an array be better than using a very large/small number?",
                "options": [
                    "When the array might contain very large or very small numbers outside the assumed range.",
                    "When the array is guaranteed to be empty.",
                    "When the array is already sorted.",
                    "When using user input instead of an array."
                ],
                "answer": "When the array might contain very large or very small numbers outside the assumed range."
            },
             {
                "type": "mc",
                "question": "Finding the minimum or maximum value requires iterating through:",
                "options": [
                    "Only the first and last elements.",
                    "Only the elements greater than zero.",
                    "All the elements that need to be considered.",
                    "Only half of the elements."
                ],
                "answer": "All the elements that need to be considered."
            }
        ]
    },

    // --- ADD THE NEW AVERAGE QUIZ BELOW ---
    "p2-average": {
        title: "Paper 2: Finding the Average",
        chapter: "Paper 2 Practice",
        subtitle: "Test your knowledge of calculating averages.",
        quizType: "mixed",
        questions: [
            // --- Average - Type 1: Multiple Choice (Function/Role) ---
            {
                "type": "mc",
                "question": "In the 'Average' Example 1, why are both 'Count' and 'Total' initialized to 0?",
                "code": "Count <- 0 //initialise the count to 0\nTotal <- 0 //initialise the total to 0",
                "options": [
                    "To store the first number entered.",
                    "These are the final values to be output.",
                    "To ensure the count and sum start correctly before processing inputs.",
                    "To set the maximum number of inputs allowed."
                ],
                "answer": "To ensure the count and sum start correctly before processing inputs."
            },
            {
                "type": "mc",
                "question": "What is the purpose of the line 'Total <- Total + Number' inside the WHILE loop?",
                "code": "Total <- Total + Number //add the number entered to the total",
                "options": [
                    "It counts how many numbers have been entered.",
                    "It adds the most recently entered number to the running sum.",
                    "It checks if the number is the sentinel value (0).",
                    "It calculates the average."
                ],
                "answer": "It adds the most recently entered number to the running sum."
            },
            {
                "type": "mc",
                "question": "What is the role of the line 'Count <- Count + 1' inside the WHILE loop?",
                "code": "Count <- Count + 1 //add 1 to the count",
                "options": [
                    "It adds the input number to the count.",
                    "It calculates the final average.",
                    "It increments the counter each time a valid number is entered.",
                    "It initializes the count variable."
                ],
                "answer": "It increments the counter each time a valid number is entered."
            },
            {
                "type": "mc",
                "question": "In 'Average' Example 2, what does the line 'Total <- Total + NumberArray[X]' achieve?",
                "code": "Total <- Total + NumberArray[X] //add value to total",
                "options": [
                    "It adds the current index 'X' to the total.",
                    "It adds the value of the element at index 'X' to the running total.",
                    "It resets the total to the value of the element at index 'X'.",
                    "It compares the total to the element at index 'X'."
                ],
                "answer": "It adds the value of the element at index 'X' to the running total."
            },
            {
                "type": "mc",
                "question": "What two values are essential for calculating an average after processing all the numbers?",
                "options": [
                    "The first number and the last number.",
                    "The smallest number and the largest number.",
                    "The total sum and the count of numbers.",
                    "The loop counter and the array length."
                ],
                "answer": "The total sum and the count of numbers."
            },
            {
                "type": "mc",
                "question": "If the user immediately enters 0 in Example 1, what would the values of 'Total' and 'Count' be after the loop?",
                "code": "Count <- 0\nTotal <- 0\nNumber <- 1\nWHILE Number >= 1 DO\n  Number <- INPUT(\"Enter a number or 0 to stop\")\n  Total <- Total + Number\n  Count <- Count + 1\nENDWHILE",
                "options": [
                    "Total=0, Count=0",
                    "Total=0, Count=1",
                    "Total=1, Count=1",
                    "Undefined (Error)"
                ],
                "answer": "Total=0, Count=1" // Note: The code adds 0 and increments count once before stopping.
            },
             {
                "type": "mc",
                "question": "To calculate the average correctly after the loop in Example 1, what calculation is needed?",
                "options": [
                    "OUTPUT Total",
                    "OUTPUT Count",
                    "OUTPUT Total / Count",
                    "OUTPUT Total * Count"
                ],
                "answer": "OUTPUT Total / Count"
            },
            {
                 "type": "mc",
                 "question": "In Example 2, how is the number of elements determined for the average calculation?",
                 "options": [
                     "By the final value of the loop counter 'X'.",
                     "By using `LENGTH(NumberArray)`.",
                     "By the value stored in 'Count'.",
                     "It's always assumed to be 100."
                 ],
                 "answer": "By the value stored in 'Count'." // Or LENGTH(NumberArray) if the loop runs fully
             },
             {
                "type": "mc",
                "question": "If the array `NumberArray` in Example 2 is empty, what potential problem could occur when calculating the average?",
                "options": [
                    "The loop will run infinitely.",
                    "The total will be incorrect.",
                    "Division by zero if `Count` remains 0.",
                    "The array length cannot be determined."
                ],
                "answer": "Division by zero if `Count` remains 0."
            },
            {
                "type": "mc",
                "question": "What data type should the 'Average' variable typically be declared as?",
                "options": [
                    "INTEGER",
                    "CHAR",
                    "BOOLEAN",
                    "REAL" // Or FLOAT/DOUBLE
                ],
                "answer": "REAL"
            },
            // --- Average - Type 2: Fill-in-the-Blank ---
            {
                "type": "typed",
                "question": "Before calculating the average from user input (until -1 is entered), both `Sum` and `Counter` must be initialized. Type the line to initialize `Counter`.",
                "code": "DECLARE Sum, Counter, Value: INTEGER\nSum <- 0\n// [TYPE YOUR ANSWER HERE]\nINPUT Value\nWHILE Value <> -1 DO\n...",
                "answer": "Counter <- 0"
            },
            {
                "type": "typed",
                "question": "Inside a loop summing array elements (`Scores[i]`) for an average, you need to add to the `TotalScore` and increment the `NumScores` counter. Type the line that increments the counter.",
                "code": "FOR i <- 0 TO MaxIndex\n  TotalScore <- TotalScore + Scores[i]\n  // [TYPE YOUR ANSWER HERE]\nNEXT i",
                "answer": "NumScores <- NumScores + 1"
            },
            {
                "type": "typed",
                "question": "After the loop finishes, you have `FinalTotal` and `NumberOfItems`. Type the line that calculates the `AverageValue`.",
                "code": "// Loop has finished\nDECLARE AverageValue : REAL\n// [TYPE YOUR ANSWER HERE]\nOUTPUT AverageValue",
                "answer": "AverageValue <- FinalTotal / NumberOfItems"
            },
            {
                "type": "typed",
                "question": "Complete the WHILE loop condition to keep taking numbers until the user enters 0.",
                "code": "Number <- INPUT(\"Enter first number (0 to stop)\")\n// [TYPE YOUR ANSWER HERE]\n  Total <- Total + Number\n  Count <- Count + 1\n  Number <- INPUT(\"Enter next number (0 to stop)\")\nENDWHILE",
                "answer": "WHILE Number <> 0 DO"
            },
            {
                "type": "typed",
                "question": "Type the line inside the FOR loop (Example 2) that adds the current array element to the `Total`.",
                "code": "Total <- 0\nCount <- 0\nFOR X <- 0 TO LENGTH(NumberArray) - 1\n  // [TYPE YOUR ANSWER HERE]\n  Count <- Count + 1\nNEXT X",
                "answer": "Total <- Total + NumberArray[X]"
            },
            {
                "type": "typed",
                "question": "Initialize both `TotalMarks` and `StudentCount` to zero before processing student marks.",
                "code": "// [TYPE YOUR ANSWER HERE]\n// [TYPE YOUR ANSWER HERE]\nFOR i <- 1 TO NumStudents\n...",
                "answer": "TotalMarks <- 0\nStudentCount <- 0" // Or separate lines
            },
            // --- Average - Type 3: Situational ---
            {
                "type": "mc",
                "question": "A teacher wants to calculate the average score for their class on a test. Which two main steps does the algorithm involve?",
                "options": [
                    "Finding the highest score and lowest score.",
                    "Sorting the scores and finding the middle value.",
                    "Totalling all the scores and counting how many scores there are.",
                    "Searching for a specific score and counting duplicates."
                ],
                "answer": "Totalling all the scores and counting how many scores there are."
            },
            {
                "type": "mc",
                "question": "Calculating the average temperature over a 24-hour period requires:",
                "options": [
                    "Finding the maximum temperature.",
                    "Summing the hourly temperatures and dividing by 24.",
                    "Sorting the temperatures.",
                    "Checking if any temperature was below freezing."
                ],
                "answer": "Summing the hourly temperatures and dividing by 24."
            },
            {
                "type": "mc",
                "question": "Why is it important to handle the case where the count of numbers might be zero when calculating an average?",
                "options": [
                    "To prevent division by zero, which causes an error.",
                    "To make the calculation faster.",
                    "Because the total is always zero in that case.",
                    "To ensure the average is always an integer."
                ],
                "answer": "To prevent division by zero, which causes an error."
            },
             {
                "type": "mc",
                "question": "Which two algorithms are often combined to calculate an average?",
                "options": [
                    "Search and Sort",
                    "Min and Max",
                    "Totalling and Counting",
                    "Validation and Verification"
                ],
                "answer": "Totalling and Counting"
            }
        ]
    },
    "p2-validation": {
        title: "Paper 2: Input Validation",
        chapter: "Paper 2 Practice",
        subtitle: "Test your knowledge of input validation techniques.",
        quizType: "mixed",
        questions: [
        // --- Range Check ---
        {
            "type": "mc",
            "question": "What is the purpose of the WHILE loop in the Range Check example?",
            "code": "Number <- INPUT(\"Enter a number between 1 and 10\")\nWHILE Number < 1 OR Number > 10 DO\n  OUTPUT(\"Invalid please try again\")\n  Number <- INPUT()\nENDWHILE",
            "options": [
                "To ensure the user enters exactly 10 numbers.",
                "To repeat the input process until a number within the valid range (1-10) is entered.",
                "To calculate the sum of the numbers.",
                "To check if the input is a number."
            ],
            "answer": "To repeat the input process until a number within the valid range (1-10) is entered."
        },
        {
            "type": "typed",
            "question": "Complete the WHILE loop condition to check if an entered 'Score' is outside the valid range of 0 to 100 (inclusive).",
            "code": "INPUT Score\n// [TYPE YOUR ANSWER HERE]\n  OUTPUT \"Invalid score. Please enter between 0 and 100.\"\n  INPUT Score\nENDWHILE",
            "answer": "WHILE Score < 0 OR Score > 100 DO"
        },
        {
            "type": "mc",
            "question": "A program asks for a month number (1-12). Which condition correctly validates this input?",
            "options": [
                "WHILE Month < 1 AND Month > 12 DO",
                "WHILE Month > 1 OR Month < 12 DO",
                "WHILE Month < 1 OR Month > 12 DO",
                "WHILE Month >= 1 AND Month <= 12 DO"
            ],
            "answer": "WHILE Month < 1 OR Month > 12 DO"
        },
        // --- Length Check ---
        {
            "type": "mc",
            "question": "In the Length Check example, what does 'LENGTH(Data)' function do?",
            "code": "WHILE LENGTH(Data) < 10 DO",
            "options": [
                "Checks if the data is numeric.",
                "Returns the number of characters in the string 'Data'.",
                "Checks if the data is greater than 10.",
                "Converts the data to a string."
            ],
            "answer": "Returns the number of characters in the string 'Data'."
        },
        {
            "type": "typed",
            "question": "Type the WHILE loop condition to ensure a 'Password' string has a length of exactly 8 characters.",
            "code": "INPUT Password\n// [TYPE YOUR ANSWER HERE]\n  OUTPUT \"Password must be 8 characters long.\"\n  INPUT Password\nENDWHILE",
            "answer": "WHILE LENGTH(Password) <> 8 DO"
        },
        {
            "type": "mc",
            "question": "A user needs to enter a phone number which must be at least 10 digits long. Which condition checks this?",
            "options": [
                "WHILE LENGTH(PhoneNumber) > 10 DO",
                "WHILE LENGTH(PhoneNumber) <= 10 DO",
                "WHILE LENGTH(PhoneNumber) < 10 DO",
                "WHILE LENGTH(PhoneNumber) = 10 DO"
            ],
            "answer": "WHILE LENGTH(PhoneNumber) < 10 DO"
        },
        // --- Type Check ---
        {
            "type": "mc",
            "question": "The Type Check example loops while 'Data.IsString = FALSE'. What does this condition verify?",
            "code": "WHILE Data.IsString = FALSE DO",
            "options": [
                "That the data entered is empty.",
                "That the data entered is a number.",
                "That the data entered is NOT a string.",
                "That the data entered has the correct length."
            ],
            "answer": "That the data entered is NOT a string."
        },
        {
            "type": "typed",
            "question": "Complete the WHILE loop condition to ensure the user input 'Age' is an integer.",
            "code": "INPUT Age\n// [TYPE YOUR ANSWER HERE]\n  OUTPUT \"Invalid input. Please enter a whole number for age.\"\n  INPUT Age\nENDWHILE",
            "answer": "WHILE Age.IsInteger = FALSE DO" // Assuming an IsInteger function/property
        },
         {
            "type": "mc",
            "question": "Which validation check is used to ensure that a user enters numerical data when asked for their age?",
            "options": ["Length Check", "Range Check", "Type Check", "Presence Check"],
            "answer": "Type Check"
        },
        // --- Presence Check ---
        {
            "type": "mc",
            "question": "The Presence Check example uses 'IF Data = NULL THEN'. What is this checking for?",
            "code": "INPUT Data\nIF Data = NULL THEN //check if the data entered is null\n  OUTPUT(\"Invalid\")\nENDIF",
            "options": [
                "If the data is too long.",
                "If the data is of the wrong type.",
                "If the user entered nothing (no data was provided).",
                "If the data is outside a specific range."
            ],
            "answer": "If the user entered nothing (no data was provided)."
        },
        {
            "type": "typed",
            "question": "Complete the WHILE loop condition to repeatedly ask for input if the entered 'Name' is an empty string.",
            "code": "INPUT Name\n// [TYPE YOUR ANSWER HERE]\n  OUTPUT \"Name cannot be empty. Please try again.\"\n  INPUT Name\nENDWHILE",
            "answer": "WHILE Name = \"\" DO" // Checking for empty string "" is common for presence
        },
        // --- Format Check ---
        {
            "type": "mc",
            "question": "The Format Check example validates a date format (DD/MM/YYYY). What does `SUBSTRING(Date, 0, 2).IsNumeric = FALSE` check?",
            "code": "WHILE (SUBSTRING(Date, 0, 2).IsNumeric = FALSE OR //2 numbers\n...",
            "options": [
                "If the first slash is missing.",
                "If the month part contains non-numeric characters.",
                "If the day part (first two characters) contains non-numeric characters.",
                "If the year part has fewer than 4 digits."
            ],
            "answer": "If the day part (first two characters) contains non-numeric characters."
        },
         {
            "type": "typed",
            "question": "A program expects an email address. Type a simple condition that checks if the input string 'Email' contains the '@' symbol.",
            "code": "INPUT Email\nValid <- FALSE\n// [TYPE A SIMPLE CHECK HERE, not a full validation loop]\nIF Valid = FALSE THEN OUTPUT \"Invalid format\"",
            "answer": "IF \"@\" IN Email THEN Valid <- TRUE" // Simplified check, presence of @
        },
        {
            "type": "mc",
            "question": "Validating that a postcode follows a specific pattern like 'LLNN NLL' (L=Letter, N=Number) is an example of:",
            "options": ["Range Check", "Type Check", "Format Check", "Presence Check"],
            "answer": "Format Check"
        },
        // --- Check Digit ---
        {
            "type": "mc",
            "question": "What is the primary purpose of a check digit (e.g., in a barcode or ISBN)?",
            "options": [
                "To encrypt the number.",
                "To make the number shorter.",
                "To detect errors caused by incorrect data entry (e.g., typing digits in the wrong order).",
                "To identify the country of origin."
            ],
            "answer": "To detect errors caused by incorrect data entry (e.g., typing digits in the wrong order)."
        },
        {
            "type": "mc",
            "question": "Which type of data entry error is a check digit specifically designed to catch?",
            "options": [
                "Entering text instead of numbers.",
                "Leaving the field completely blank.",
                "Swapping two adjacent digits (transposition error).",
                "Entering a number outside the allowed range."
            ],
            "answer": "Swapping two adjacent digits (transposition error)."
        },
        // --- Verification ---
        {
            "type": "mc",
            "question": "Requiring a user to enter their new password twice is an example of which data accuracy check?",
            "options": [
                "Range check",
                "Length check",
                "Double entry check (Verification)",
                "Format check"
            ],
            "answer": "Double entry check (Verification)"
        },
        {
            "type": "mc",
            "question": "Before submitting an online form, the user is shown a summary of their entered details and asked to confirm they are correct. This is an example of:",
            "options": [
                "Validation",
                "Visual check (Verification)",
                "Check digit calculation",
                "Type check"
            ],
            "answer": "Visual check (Verification)"
        },
        {
            "type": "mc",
            "question": "What is the key difference between Validation and Verification?",
            "options": [
                "Validation checks if data meets certain rules; Verification checks if the data entered matches the original source.",
                "Validation is done by the user; Verification is done by the computer.",
                "Validation corrects errors automatically; Verification only detects them.",
                "There is no difference."
            ],
            "answer": "Validation checks if data meets certain rules; Verification checks if the data entered matches the original source."
        },
        {
            "type": "mc",
            "question": "A data entry clerk types customer details from a paper form into a computer system. To ensure accuracy, another clerk types the same details again, and the system compares the two entries. This is:",
            "options": [
                "Format Check",
                "Double Entry Check",
                "Presence Check",
                "Range Check"
            ],
            "answer": "Double Entry Check"
        }
    ]
}
}
