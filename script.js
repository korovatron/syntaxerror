// Protocol configurations
const protocolConfigs = {
    http: {
        senderTitle: '🌐 Web Browser',
        senderSubtitle: '(Client)',
        receiverTitle: '🖥️ Web Server',
        receiverSubtitle: '(Server)',
        appData: 'HTTP Request',
        protocol: 'TCP',
        port: '80',
        protocolName: 'HTTP',
        messages: {
            app: '📝 Application Layer: Browser creates HTTP GET request...',
            transport: '🔧 Transport Layer: Adding TCP header (Ports, Sequence Number for tracking)...',
            network: '🌐 Network Layer: Adding IP header (Client → Server addresses)...',
            link: '📡 Link Layer: Adding Ethernet frame. Ready to send!',
            transmission: '🚀 HTTP request traveling across Internet to web server...',
            recvLink: '📥 Link Layer: Frame received at server! Removing Ethernet header...',
            recvNetwork: '🔍 Network Layer: Checking IP - packet for this server. Removing IP header...',
            recvTransport: '✅ Transport Layer: Port 80 - HTTP service. Checking sequence number. Removing TCP header...',
            recvApp: '🎉 Application Layer: Web server processes HTTP request and sends response!'
        }
    },
    https: {
        senderTitle: '🔒 Web Browser',
        senderSubtitle: '(Client)',
        receiverTitle: '🖥️ Secure Web Server',
        receiverSubtitle: '(Server)',
        appData: 'HTTPS Request',
        protocol: 'TCP',
        port: '443',
        protocolName: 'HTTPS',
        messages: {
            app: '📝 Application Layer: Browser creates encrypted HTTPS request...',
            transport: '🔧 Transport Layer: Adding TCP header (Ports, Sequence Number for tracking)...',
            network: '🌐 Network Layer: Adding IP header (Client → Server addresses)...',
            link: '📡 Link Layer: Adding Ethernet frame. Ready to send!',
            transmission: '🚀 Encrypted HTTPS request traveling across Internet securely...',
            recvLink: '📥 Link Layer: Frame received at server! Removing Ethernet header...',
            recvNetwork: '🔍 Network Layer: Checking IP - packet for this server. Removing IP header...',
            recvTransport: '✅ Transport Layer: Port 443 - HTTPS service. Checking sequence. Removing TCP header...',
            recvApp: '🎉 Application Layer: Secure web server decrypts and processes request!'
        }
    },
    'email-smtp': {
        senderTitle: '📧 Email Client',
        senderSubtitle: '(Outlook/Gmail)',
        receiverTitle: '📬 Mail Server',
        receiverSubtitle: '(SMTP Server)',
        appData: 'Email Message',
        protocol: 'TCP',
        port: '25',
        protocolName: 'SMTP',
        messages: {
            app: '📝 Application Layer: Email client creates SMTP message...',
            transport: '🔧 Transport Layer: Adding TCP header (Ports, Sequence Number for tracking)...',
            network: '🌐 Network Layer: Adding IP header (Client → Mail Server)...',
            link: '📡 Link Layer: Adding Ethernet frame. Ready to send!',
            transmission: '🚀 Email traveling to mail server via SMTP...',
            recvLink: '📥 Link Layer: Frame received at mail server! Removing Ethernet header...',
            recvNetwork: '🔍 Network Layer: Checking IP - packet for mail server. Removing IP header...',
            recvTransport: '✅ Transport Layer: Port 25 - SMTP service. Checking sequence. Removing TCP header...',
            recvApp: '🎉 Application Layer: Mail server stores email for delivery!'
        }
    },
    'email-pop3': {
        senderTitle: '📧 Email Client',
        senderSubtitle: '(Outlook/Gmail)',
        receiverTitle: '📬 Mail Server',
        receiverSubtitle: '(POP3 Server)',
        appData: 'POP3 Request',
        protocol: 'TCP',
        port: '110',
        protocolName: 'POP3',
        messages: {
            app: '📝 Application Layer: Email client requests messages via POP3...',
            transport: '🔧 Transport Layer: Adding TCP header (Ports, Sequence Number for tracking)...',
            network: '🌐 Network Layer: Adding IP header (Client → Mail Server)...',
            link: '📡 Link Layer: Adding Ethernet frame. Ready to send!',
            transmission: '🚀 POP3 request traveling to retrieve emails...',
            recvLink: '📥 Link Layer: Frame received at mail server! Removing Ethernet header...',
            recvNetwork: '🔍 Network Layer: Checking IP - packet for mail server. Removing IP header...',
            recvTransport: '✅ Transport Layer: Port 110 - POP3 service. Checking sequence. Removing TCP header...',
            recvApp: '🎉 Application Layer: Mail server sends stored emails to client!'
        }
    },
    ftp: {
        senderTitle: '📁 FTP Client',
        senderSubtitle: '(FileZilla)',
        receiverTitle: '💾 FTP Server',
        receiverSubtitle: '(File Server)',
        appData: 'FTP Command',
        protocol: 'TCP',
        port: '21',
        protocolName: 'FTP',
        messages: {
            app: '📝 Application Layer: FTP client sends file transfer command...',
            transport: '🔧 Transport Layer: Adding TCP header (Ports, Sequence Number for tracking)...',
            network: '🌐 Network Layer: Adding IP header (Client → FTP Server)...',
            link: '📡 Link Layer: Adding Ethernet frame. Ready to send!',
            transmission: '🚀 FTP command traveling to file server...',
            recvLink: '📥 Link Layer: Frame received at server! Removing Ethernet header...',
            recvNetwork: '🔍 Network Layer: Checking IP - packet for FTP server. Removing IP header...',
            recvTransport: '✅ Transport Layer: Port 21 - FTP service. Checking sequence. Removing TCP header...',
            recvApp: '🎉 Application Layer: FTP server processes file transfer request!'
        }
    },
    ssh: {
        senderTitle: '💻 SSH Client',
        senderSubtitle: '(Terminal)',
        receiverTitle: '🖥️ Remote Server',
        receiverSubtitle: '(SSH Server)',
        appData: 'SSH Command',
        protocol: 'TCP',
        port: '22',
        protocolName: 'SSH',
        messages: {
            app: '📝 Application Layer: SSH client sends encrypted command...',
            transport: '🔧 Transport Layer: Adding TCP header (Ports, Sequence Number for tracking)...',
            network: '🌐 Network Layer: Adding IP header (Client → Remote Server)...',
            link: '📡 Link Layer: Adding Ethernet frame. Ready to send!',
            transmission: '🚀 Encrypted SSH command traveling to remote server...',
            recvLink: '📥 Link Layer: Frame received at server! Removing Ethernet header...',
            recvNetwork: '🔍 Network Layer: Checking IP - packet for SSH server. Removing IP header...',
            recvTransport: '✅ Transport Layer: Port 22 - SSH service. Checking sequence. Removing TCP header...',
            recvApp: '🎉 Application Layer: SSH server executes command and sends response!'
        }
    },
    dns: {
        senderTitle: '🌐 Application',
        senderSubtitle: '(Any Program)',
        receiverTitle: '🗂️ DNS Server',
        receiverSubtitle: '(Name Server)',
        appData: 'DNS Query',
        protocol: 'UDP',
        port: '53',
        protocolName: 'DNS',
        messages: {
            app: '📝 Application Layer: Creating DNS query for domain name...',
            transport: '🔧 Transport Layer: Adding UDP header (Source: Random, Dest: Port 53)...',
            network: '🌐 Network Layer: Adding IP header (Client → DNS Server)...',
            link: '📡 Link Layer: Adding Ethernet frame. Ready to send!',
            transmission: '🚀 DNS query traveling to name server for domain lookup...',
            recvLink: '📥 Link Layer: Frame received at DNS server! Removing Ethernet header...',
            recvNetwork: '🔍 Network Layer: Checking IP - packet for DNS server. Removing IP header...',
            recvTransport: '✅ Transport Layer: Port 53 - DNS service. Removing UDP header...',
            recvApp: '🎉 Application Layer: DNS server looks up domain and returns IP address!'
        }
    }
};

// Update protocol display based on selection
function updateProtocolDisplay() {
    const selector = document.getElementById('protocol-selector');
    const protocol = selector.value;
    const config = protocolConfigs[protocol];
    
    // Update sender side
    document.getElementById('sender-title').textContent = config.senderTitle;
    document.getElementById('sender-subtitle').textContent = config.senderSubtitle;
    document.getElementById('app-data-send').textContent = config.appData;
    
    // Update receiver side
    document.getElementById('receiver-title').textContent = config.receiverTitle;
    document.getElementById('receiver-subtitle').textContent = config.receiverSubtitle;
    document.getElementById('app-data-recv').textContent = config.appData;
    
    // Update transport headers (both send and receive)
    const transportHeaderSend = document.getElementById('transport-header-send');
    const transportHeaderRecv = document.getElementById('transport-header-recv');
    
    // Generate random source port (ephemeral port range 49152-65535)
    const sourcePort = Math.floor(Math.random() * (65535 - 49152 + 1)) + 49152;
    
    // Generate random sequence number (TCP uses 32-bit sequence numbers)
    const seqNumber = Math.floor(Math.random() * 10000) + 1000;
    
    let transportHTML;
    if (config.protocol === 'TCP') {
        transportHTML = `
            <div style="font-weight: bold;">TCP</div>
            <div style="font-size: 0.7rem; margin-top: 2px;">Src: ${sourcePort}</div>
            <div style="font-size: 0.7rem;">Dst: ${config.port}</div>
            <div style="font-size: 0.7rem;">Seq: ${seqNumber}</div>
        `;
    } else {
        // UDP doesn't use sequence numbers
        transportHTML = `
            <div style="font-weight: bold;">UDP</div>
            <div style="font-size: 0.7rem; margin-top: 2px;">Src: ${sourcePort}</div>
            <div style="font-size: 0.7rem;">Dst: ${config.port}</div>
            <div style="font-size: 0.7rem;">(No Seq)</div>
        `;
    }
    
    transportHeaderSend.innerHTML = transportHTML;
    transportHeaderRecv.innerHTML = transportHTML;
    
    // Update all protocol name labels in packets
    const protocolLabels = document.querySelectorAll('.packet-visual .packet-data');
    protocolLabels.forEach(label => {
        if (label.id !== 'app-data-send' && label.id !== 'app-data-recv') {
            label.textContent = config.protocolName;
        }
    });
    
    // Reset animation
    resetPacketJourney();
}

// Packet Journey Animation - Complete Encapsulation & Decapsulation
function startPacketJourney() {
    const status = document.getElementById('journey-status');
    const transmissionDiv = document.getElementById('transmission-visual');
    const selector = document.getElementById('protocol-selector');
    const protocol = selector.value;
    const config = protocolConfigs[protocol];
    
    // Get all packet visuals
    const senderPackets = [
        document.getElementById('packet-send-1'),
        document.getElementById('packet-send-2'),
        document.getElementById('packet-send-3'),
        document.getElementById('packet-send-4')
    ];
    
    const receiverPackets = [
        document.getElementById('packet-recv-4'),
        document.getElementById('packet-recv-3'),
        document.getElementById('packet-recv-2'),
        document.getElementById('packet-recv-1')
    ];
    
    // Reset all
    [...senderPackets, ...receiverPackets].forEach(p => {
        if (p) p.classList.remove('active');
    });
    if (transmissionDiv) transmissionDiv.style.display = 'none';
    
    // Get protocol-specific messages
    const messages = [
        config.messages.app,
        config.messages.transport,
        config.messages.network,
        config.messages.link,
        config.messages.transmission,
        config.messages.recvLink,
        config.messages.recvNetwork,
        config.messages.recvTransport,
        config.messages.recvApp
    ];
    
    let delay = 0;
    const stepDelay = 1200;
    
    // Phase 1: Sender - Encapsulation (going DOWN the stack)
    senderPackets.forEach((packet, index) => {
        setTimeout(() => {
            if (packet) packet.classList.add('active');
            status.textContent = messages[index];
            status.style.color = '#2563eb';
        }, delay);
        delay += stepDelay;
    });
    
    // Phase 2: Transmission
    setTimeout(() => {
        if (transmissionDiv) transmissionDiv.style.display = 'block';
        status.textContent = messages[4];
        status.style.color = '#f59e0b';
    }, delay);
    delay += stepDelay * 1.5;
    
    // Phase 3: Receiver - Decapsulation (going UP the stack)
    receiverPackets.forEach((packet, index) => {
        setTimeout(() => {
            if (packet) packet.classList.add('active');
            status.textContent = messages[5 + index];
            status.style.color = '#10b981';
            
            // Final message
            if (index === receiverPackets.length - 1) {
                setTimeout(() => {
                    status.style.fontWeight = 'bold';
                    status.style.fontSize = '1.2rem';
                }, 500);
            }
        }, delay);
        delay += stepDelay;
    });
}

function resetPacketJourney() {
    const status = document.getElementById('journey-status');
    const transmissionDiv = document.getElementById('transmission-visual');
    
    // Get all packet visuals
    const allPackets = [
        ...document.querySelectorAll('#packet-journey-sender .packet-visual'),
        ...document.querySelectorAll('#packet-journey-receiver .packet-visual')
    ];
    
    allPackets.forEach(p => {
        if (p) p.classList.remove('active');
    });
    
    if (transmissionDiv) transmissionDiv.style.display = 'none';
    
    status.textContent = 'Click "Send Packet" to see complete encapsulation and decapsulation process';
    status.style.color = '#475569';
    status.style.fontWeight = 'normal';
    status.style.fontSize = '1.1rem';
}

// Email Flow Animation
function animateEmailFlow() {
    const steps = document.querySelectorAll('.email-step');
    
    // Reset
    steps.forEach(s => s.classList.remove('active'));
    
    // Animate each step
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('active');
            
            // Remove active class after a delay
            setTimeout(() => {
                step.classList.remove('active');
            }, 1500);
        }, index * 1500);
    });
}

// Subnet Calculator
function calculateSubnet() {
    const ipInput = document.getElementById('ip-input').value.trim();
    const subnetInput = document.getElementById('subnet-input').value.trim();
    const resultDiv = document.getElementById('subnet-result');
    
    try {
        // Basic validation
        const ipParts = ipInput.split('.').map(Number);
        const subnetParts = subnetInput.split('.').map(Number);
        
        if (ipParts.length !== 4 || subnetParts.length !== 4) {
            throw new Error('Invalid format');
        }
        
        if (ipParts.some(p => p < 0 || p > 255) || subnetParts.some(p => p < 0 || p > 255)) {
            throw new Error('Values must be 0-255');
        }
        
        // Calculate network address
        const networkParts = ipParts.map((ip, i) => ip & subnetParts[i]);
        const networkAddress = networkParts.join('.');
        
        // Calculate broadcast address
        const broadcastParts = ipParts.map((ip, i) => ip | (~subnetParts[i] & 255));
        const broadcastAddress = broadcastParts.join('.');
        
        // Calculate first and last host
        const firstHostParts = [...networkParts];
        firstHostParts[3] += 1;
        const firstHost = firstHostParts.join('.');
        
        const lastHostParts = [...broadcastParts];
        lastHostParts[3] -= 1;
        const lastHost = lastHostParts.join('.');
        
        // Calculate number of hosts
        const hostBits = subnetParts.reduce((bits, octet) => {
            return bits + (8 - octet.toString(2).replace('0', '').length);
        }, 0);
        const numHosts = Math.pow(2, hostBits) - 2;
        
        // Calculate CIDR notation
        const networkBits = 32 - hostBits;
        
        // Display results
        resultDiv.innerHTML = `
            <h4 style="color: #10b981; margin-top: 0;">Subnet Calculation Results</h4>
            <p><strong>IP Address:</strong> ${ipInput}</p>
            <p><strong>Subnet Mask:</strong> ${subnetInput} (/${networkBits})</p>
            <hr style="margin: 1rem 0; border: none; border-top: 1px solid #d1d5db;">
            <p><strong>Network Address:</strong> ${networkAddress}</p>
            <p><strong>Broadcast Address:</strong> ${broadcastAddress}</p>
            <p><strong>First Usable Host:</strong> ${firstHost}</p>
            <p><strong>Last Usable Host:</strong> ${lastHost}</p>
            <p><strong>Number of Usable Hosts:</strong> ${numHosts.toLocaleString()}</p>
        `;
        resultDiv.style.display = 'block';
        
    } catch (error) {
        resultDiv.innerHTML = `
            <p style="color: #ef4444;">
                <strong>Error:</strong> Invalid IP address or subnet mask format. 
                Please use format: xxx.xxx.xxx.xxx (where xxx is 0-255)
            </p>
        `;
        resultDiv.style.display = 'block';
        resultDiv.style.backgroundColor = '#fee2e2';
        resultDiv.style.borderColor = '#ef4444';
    }
}

// Quiz Functions
const quizAnswers = {
    q1: 'c', // Network Layer
    q2: 'c', // 443
    q3: 'c', // SSH
    q4: 'b', // IPv4 exhaustion
    q5: 'b', // GET
    q6: 'b', // Share public IP
    q7: 'b', // POP3
    q8: 'b'  // More compact and faster
};

const quizExplanations = {
    q1: 'The Network Layer is responsible for routing packets between different networks using IP addresses.',
    q2: 'HTTPS uses port 443 for secure web traffic (HTTP uses port 80 for unsecured traffic).',
    q3: 'SSH (Secure Shell) provides encrypted remote login and command execution capabilities.',
    q4: 'IPv6 was introduced primarily to address the exhaustion of IPv4 addresses due to internet growth.',
    q5: 'GET is the HTTP method used in REST APIs to retrieve data from a server.',
    q6: 'NAT allows multiple devices on a private network to share a single public IP address when accessing the internet.',
    q7: 'POP3 (Post Office Protocol version 3) is used to retrieve email from a mail server.',
    q8: 'JSON is more compact, easier to read and write, and faster to parse compared to XML.'
};

function startQuiz() {
    document.querySelector('.quiz-intro').style.display = 'none';
    document.getElementById('quiz-questions').classList.remove('quiz-hidden');
    document.getElementById('quiz-results').innerHTML = '';
}

function submitQuiz() {
    let score = 0;
    let totalQuestions = Object.keys(quizAnswers).length;
    let resultsHTML = '<h3>Quiz Results</h3>';
    
    // Check each answer
    Object.keys(quizAnswers).forEach(questionId => {
        const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
        const questionDiv = document.getElementById(questionId);
        
        if (selectedAnswer) {
            if (selectedAnswer.value === quizAnswers[questionId]) {
                score++;
                resultsHTML += `<p style="color: #10b981;">✓ Question ${questionId.substring(1)}: Correct! ${quizExplanations[questionId]}</p>`;
                questionDiv.style.backgroundColor = '#d1fae5';
            } else {
                resultsHTML += `<p style="color: #ef4444;">✗ Question ${questionId.substring(1)}: Incorrect. ${quizExplanations[questionId]}</p>`;
                questionDiv.style.backgroundColor = '#fee2e2';
            }
        } else {
            resultsHTML += `<p style="color: #f59e0b;">○ Question ${questionId.substring(1)}: Not answered. ${quizExplanations[questionId]}</p>`;
            questionDiv.style.backgroundColor = '#fef3c7';
        }
    });
    
    // Calculate percentage
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Display results
    const resultsDiv = document.getElementById('quiz-results');
    resultsDiv.innerHTML = `
        <h3>Your Score: ${score} / ${totalQuestions} (${percentage}%)</h3>
        ${resultsHTML}
        <div style="margin-top: 1.5rem; padding: 1rem; background-color: ${percentage >= 70 ? '#d1fae5' : '#fee2e2'}; border-radius: 8px;">
            <strong>${percentage >= 70 ? '🎉 Well done!' : '📚 Keep studying!'}</strong>
            <p>${percentage >= 70 ? 'You have a good understanding of TCP/IP protocols!' : 'Review the material and try again to improve your understanding.'}</p>
        </div>
        <button onclick="resetQuiz()" class="btn-primary" style="margin-top: 1rem;">Try Again</button>
    `;
    
    resultsDiv.classList.add(percentage >= 70 ? 'pass' : 'fail');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetQuiz() {
    // Clear all selections
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    
    // Reset question backgrounds
    document.querySelectorAll('.question').forEach(q => {
        q.style.backgroundColor = '#f8fafc';
    });
    
    // Clear results
    const resultsDiv = document.getElementById('quiz-results');
    resultsDiv.innerHTML = '';
    resultsDiv.classList.remove('pass', 'fail');
    
    // Scroll to top of quiz
    document.querySelector('.quiz-container').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for navigation links and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Note: Smooth scrolling is now handled by CSS (scroll-behavior: smooth; scroll-padding-top: 80px;)
    // No JavaScript needed for anchor link scrolling
    
    // Initialize packet journey status
    const journeyStatus = document.getElementById('journey-status');
    if (journeyStatus) {
        journeyStatus.textContent = 'Click "Send Packet" to see complete encapsulation and decapsulation process';
    }
    
    // Add enter key support for subnet calculator
    const ipInput = document.getElementById('ip-input');
    const subnetInput = document.getElementById('subnet-input');
    
    if (ipInput && subnetInput) {
        [ipInput, subnetInput].forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculateSubnet();
                }
            });
        });
    }
    
    // Add tooltips or additional interactivity as needed
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        layer.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        layer.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Initialize subnet practice tool
    if (document.getElementById('practice-ip1')) {
        generateNewSubnetPractice();
    }
});

// Subnet Practice Tool
let currentSubnetPractice = null;
let subnetPracticeScore = 0;
let subnetPracticeTotal = 0;

// Helper function to convert IP to binary string
function ipToBinary(ip) {
    return ip.split('.').map(octet => {
        return parseInt(octet).toString(2).padStart(8, '0');
    }).join('.');
}

// Helper function to perform AND operation
function andOperation(ip, mask) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = mask.split('.').map(Number);
    return ipParts.map((octet, i) => octet & maskParts[i]).join('.');
}

// Generate a random IP address within sensible ranges
function generateRandomIP() {
    // Use common private IP ranges
    const ranges = [
        [192, 168], // 192.168.x.x
        [10, Math.floor(Math.random() * 256)], // 10.x.x.x
        [172, 16 + Math.floor(Math.random() * 16)] // 172.16-31.x.x
    ];
    
    const range = ranges[Math.floor(Math.random() * ranges.length)];
    const third = Math.floor(Math.random() * 256);
    const fourth = Math.floor(Math.random() * 254) + 1; // Avoid .0 and .255
    
    return `${range[0]}.${range[1]}.${third}.${fourth}`;
}

// Generate subnet mask (common ones)
function generateRandomSubnetMask() {
    const masks = [
        '255.255.255.0',   // /24
        '255.255.0.0',     // /16
        '255.255.255.128', // /25
        '255.255.255.192', // /26
        '255.255.254.0',   // /23
        '255.255.252.0'    // /22
    ];
    return masks[Math.floor(Math.random() * masks.length)];
}

// Generate new subnet practice question
function generateNewSubnetPractice() {
    const mask = generateRandomSubnetMask();
    const ip1 = generateRandomIP();
    
    // 50% chance to generate IPs on same subnet, 50% different
    let ip2;
    const sameSubnet = Math.random() > 0.5;
    
    if (sameSubnet) {
        // Same subnet - keep network portion same, change host portion
        const ip1Parts = ip1.split('.').map(Number);
        const maskParts = mask.split('.').map(Number);
        
        // Copy IP1 and modify the host portion
        const ip2Parts = [...ip1Parts];
        
        // Find the last octet that isn't fully masked (255)
        for (let i = 3; i >= 0; i--) {
            if (maskParts[i] !== 255) {
                // Change this octet to a different value while keeping network bits same
                const networkBits = ip1Parts[i] & maskParts[i];
                const hostBits = ~maskParts[i] & 255;
                
                if (hostBits > 0) {
                    // Generate a different host value
                    let newHost;
                    do {
                        newHost = Math.floor(Math.random() * (hostBits + 1));
                    } while (newHost === (ip1Parts[i] & hostBits));
                    
                    ip2Parts[i] = networkBits | newHost;
                }
                break;
            }
        }
        
        ip2 = ip2Parts.join('.');
    } else {
        // Different subnet - generate completely different IP or modify network portion
        const ip1Parts = ip1.split('.').map(Number);
        const maskParts = mask.split('.').map(Number);
        
        // Find first significant network octet and change it
        const ip2Parts = [...ip1Parts];
        
        // Change an octet in the network portion
        for (let i = 0; i < 4; i++) {
            if (maskParts[i] === 255) {
                // This is a network octet - change it
                ip2Parts[i] = (ip1Parts[i] + Math.floor(Math.random() * 10) + 1) % 256;
                break;
            } else if (maskParts[i] > 0) {
                // Partial mask - change network bits
                const networkBits = ip1Parts[i] & maskParts[i];
                const changeAmount = Math.pow(2, 8 - maskParts[i].toString(2).split('1').length + 1);
                ip2Parts[i] = ((networkBits + changeAmount) % 256);
                break;
            }
        }
        
        ip2 = ip2Parts.join('.');
    }
    
    // Calculate network addresses
    const network1 = andOperation(ip1, mask);
    const network2 = andOperation(ip2, mask);
    
    currentSubnetPractice = {
        ip1: ip1,
        ip2: ip2,
        mask: mask,
        network1: network1,
        network2: network2,
        sameSubnet: network1 === network2
    };
    
    // Update display
    document.getElementById('practice-ip1').textContent = ip1;
    document.getElementById('practice-ip2').textContent = ip2;
    document.getElementById('practice-mask').textContent = mask;
    
    // Hide feedback and working
    const feedbackDiv = document.getElementById('subnet-practice-feedback');
    const workingDiv = document.getElementById('subnet-practice-working');
    
    if (feedbackDiv) feedbackDiv.style.display = 'none';
    if (workingDiv) workingDiv.style.display = 'none';
}

// Submit subnet practice answer
function submitSubnetAnswer(userAnswer) {
    if (!currentSubnetPractice) {
        generateNewSubnetPractice();
        return;
    }
    
    subnetPracticeTotal++;
    const correct = userAnswer === currentSubnetPractice.sameSubnet;
    
    if (correct) {
        subnetPracticeScore++;
    }
    
    // Update score display
    document.getElementById('subnet-practice-score').textContent = subnetPracticeScore;
    document.getElementById('subnet-practice-total').textContent = subnetPracticeTotal;
    
    // Show feedback
    const feedbackDiv = document.getElementById('subnet-practice-feedback');
    feedbackDiv.style.display = 'block';
    
    if (correct) {
        feedbackDiv.style.backgroundColor = '#d1fae5';
        feedbackDiv.style.borderLeft = '4px solid #10b981';
        feedbackDiv.innerHTML = `
            <h4 style="color: #10b981; margin-top: 0;">✅ Correct!</h4>
            <p>The two computers are ${currentSubnetPractice.sameSubnet ? '' : '<strong>NOT</strong> '}on the same subnet.</p>
        `;
    } else {
        feedbackDiv.style.backgroundColor = '#fee2e2';
        feedbackDiv.style.borderLeft = '4px solid #ef4444';
        feedbackDiv.innerHTML = `
            <h4 style="color: #ef4444; margin-top: 0;">❌ Incorrect</h4>
            <p>The correct answer is: The two computers are ${currentSubnetPractice.sameSubnet ? '' : '<strong>NOT</strong> '}on the same subnet.</p>
        `;
    }
    
    // Show working
    showSubnetWorking();
}

// Show the AND operation working
function showSubnetWorking() {
    const workingDiv = document.getElementById('subnet-practice-working');
    const detailPre = document.getElementById('subnet-working-detail');
    
    workingDiv.style.display = 'block';
    
    const ip1Binary = ipToBinary(currentSubnetPractice.ip1);
    const ip2Binary = ipToBinary(currentSubnetPractice.ip2);
    const maskBinary = ipToBinary(currentSubnetPractice.mask);
    const network1Binary = ipToBinary(currentSubnetPractice.network1);
    const network2Binary = ipToBinary(currentSubnetPractice.network2);
    
    detailPre.textContent = `Computer A: ${currentSubnetPractice.ip1}
Binary:    ${ip1Binary}

Subnet Mask: ${currentSubnetPractice.mask}
Binary:      ${maskBinary}

AND Operation (A):
${ip1Binary}
${maskBinary} (AND)
${'─'.repeat(maskBinary.length)}
${network1Binary}

Network Address (A): ${currentSubnetPractice.network1}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Computer B: ${currentSubnetPractice.ip2}
Binary:    ${ip2Binary}

Subnet Mask: ${currentSubnetPractice.mask}
Binary:      ${maskBinary}

AND Operation (B):
${ip2Binary}
${maskBinary} (AND)
${'─'.repeat(maskBinary.length)}
${network2Binary}

Network Address (B): ${currentSubnetPractice.network2}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONCLUSION:
Network A: ${currentSubnetPractice.network1}
Network B: ${currentSubnetPractice.network2}

${currentSubnetPractice.network1 === currentSubnetPractice.network2 ? 
    '✅ Network addresses MATCH → Same subnet' : 
    '❌ Network addresses DIFFER → Different subnets'}
`;
}

// Console welcome message
console.log('%c🚀 Syntax Error - A Level Computer Science Revision', 
    'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cExplore TCP/IP protocols interactively!', 
    'color: #475569; font-size: 14px;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 
    'color: #10b981; font-size: 12px;');