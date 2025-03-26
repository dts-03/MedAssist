// Enhanced medicine database with more detailed information
const medicineDatabase = {
    fever: {
        mild: [
            {
                name: "Paracetamol",
                dosage: "500mg every 4-6 hours",
                precautions: "Do not exceed 4000mg in 24 hours. Take with food if stomach upset occurs.",
                sideEffects: "Rarely causes side effects when taken as directed.",
                contraindications: "Liver disease, alcohol dependency"
            }
        ],
        moderate: [
            {
                name: "Ibuprofen",
                dosage: "400mg every 4-6 hours",
                precautions: "Take with food. Not recommended for those with stomach ulcers.",
                sideEffects: "May cause stomach upset, heartburn",
                contraindications: "Stomach ulcers, asthma, heart conditions"
            }
        ],
        severe: [
            {
                name: "Paracetamol + Ibuprofen combination",
                dosage: "As directed by healthcare provider",
                precautions: "Must be taken under medical supervision",
                sideEffects: "Combined side effects of both medications",
                contraindications: "Multiple - consult healthcare provider"
            }
        ]
    },
    headache: {
        mild: [
            {
                name: "Aspirin",
                dosage: "300-600mg every 4-6 hours",
                precautions: "Take with food. Not for children under 16.",
                sideEffects: "May cause stomach irritation",
                contraindications: "Bleeding disorders, stomach ulcers"
            }
        ],
        moderate: [
            {
                name: "Ibuprofen",
                dosage: "400mg every 4-6 hours",
                precautions: "Take with food. Maximum 1200mg per day.",
                sideEffects: "Stomach upset, dizziness",
                contraindications: "Stomach ulcers, asthma"
            }
        ],
        severe: [
            {
                name: "Sumatriptan",
                dosage: "50mg as needed",
                precautions: "Only for diagnosed migraines",
                sideEffects: "Nausea, dizziness, fatigue",
                contraindications: "Heart conditions, high blood pressure"
            }
        ]
    },
    allergies: {
        mild: [
            {
                name: "Cetirizine",
                dosage: "10mg once daily",
                precautions: "May cause drowsiness",
                sideEffects: "Drowsiness, dry mouth",
                contraindications: "Kidney disease"
            }
        ],
        moderate: [
            {
                name: "Fexofenadine",
                dosage: "180mg once daily",
                precautions: "Take on empty stomach",
                sideEffects: "Headache, back pain",
                contraindications: "Kidney disease"
            }
        ],
        severe: [
            {
                name: "Diphenhydramine",
                dosage: "25-50mg every 4-6 hours",
                precautions: "Causes significant drowsiness",
                sideEffects: "Severe drowsiness, dry mouth",
                contraindications: "Glaucoma, prostate problems"
            }
        ]
    },
    sinusitis: {
        mild: [
            {
                name: "Saline Nasal Spray",
                dosage: "1-2 sprays per nostril as needed",
                precautions: "Use as directed",
                sideEffects: "None significant",
                contraindications: "None"
            }
        ],
        moderate: [
            {
                name: "Pseudoephedrine",
                dosage: "60mg every 4-6 hours",
                precautions: "May increase blood pressure",
                sideEffects: "Insomnia, nervousness",
                contraindications: "High blood pressure, heart disease"
            }
        ],
        severe: [
            {
                name: "Fluticasone Nasal Spray",
                dosage: "1-2 sprays per nostril daily",
                precautions: "Long term use should be monitored",
                sideEffects: "Nose bleeds, sore throat",
                contraindications: "Recent nasal surgery"
            }
        ]
    },
    diarrhea: {
        mild: [
            {
                name: "Oral Rehydration Solution (ORS)",
                dosage: "As needed to maintain hydration",
                precautions: "Monitor fluid intake",
                sideEffects: "None significant",
                contraindications: "None"
            }
        ],
        moderate: [
            {
                name: "Loperamide",
                dosage: "4mg initially, then 2mg after each loose stool",
                precautions: "Do not exceed 8mg in 24 hours",
                sideEffects: "Constipation, abdominal pain",
                contraindications: "Bloody diarrhea, severe colitis"
            }
        ],
        severe: [
            {
                name: "Prescription Antibiotics",
                dosage: "As prescribed by healthcare provider",
                precautions: "Complete full course as prescribed",
                sideEffects: "Varies by medication",
                contraindications: "Varies by medication"
            }
        ]
    },
    muscleAche: {
        mild: [
            {
                name: "Topical Menthol Cream",
                dosage: "Apply to affected area 3-4 times daily",
                precautions: "External use only",
                sideEffects: "Skin irritation",
                contraindications: "Broken skin"
            }
        ],
        moderate: [
            {
                name: "Naproxen",
                dosage: "250-500mg twice daily",
                precautions: "Take with food",
                sideEffects: "Stomach upset, heartburn",
                contraindications: "Stomach ulcers, bleeding disorders"
            }
        ],
        severe: [
            {
                name: "Diclofenac Gel",
                dosage: "Apply 2-4g to affected area 4 times daily",
                precautions: "Don't exceed 32g per day",
                sideEffects: "Skin reactions, sun sensitivity",
                contraindications: "Asthma, heart conditions"
            }
        ]
    },
    anxiety: {
        mild: [
            {
                name: "Chamomile Tea",
                dosage: "1 cup as needed",
                precautions: "Natural remedy, effects may vary",
                sideEffects: "Rare allergic reactions",
                contraindications: "Allergies to plants in daisy family"
            }
        ],
        moderate: [
            {
                name: "L-Theanine",
                dosage: "200mg 1-2 times daily",
                precautions: "Supplement, not medication",
                sideEffects: "Headache, drowsiness",
                contraindications: "Low blood pressure"
            }
        ],
        severe: [
            {
                name: "Consult Healthcare Provider",
                dosage: "As prescribed",
                precautions: "Professional evaluation needed",
                sideEffects: "Varies by prescribed medication",
                contraindications: "Evaluation required"
            }
        ]
    },
    cough: {
        mild: [
            {
                name: "Dextromethorphan",
                dosage: "10-20mg every 4 hours",
                precautions: "May cause drowsiness",
                sideEffects: "Drowsiness, mild dizziness",
                contraindications: "MAO inhibitors"
            }
        ],
        moderate: [
            {
                name: "Guaifenesin",
                dosage: "200-400mg every 4 hours",
                precautions: "Drink plenty of water",
                sideEffects: "Nausea, stomach upset",
                contraindications: "None significant"
            }
        ],
        severe: [
            {
                name: "Codeine-based cough syrup",
                dosage: "As prescribed",
                precautions: "May cause dependence",
                sideEffects: "Drowsiness, constipation",
                contraindications: "Respiratory depression"
            }
        ]
    },
    soreThroat: {
        mild: [
            {
                name: "Benzydamine Gargle",
                dosage: "15ml every 2-3 hours",
                precautions: "Do not swallow",
                sideEffects: "Temporary numbness",
                contraindications: "None significant"
            }
        ],
        moderate: [
            {
                name: "Strepsils",
                dosage: "1 lozenge every 2-3 hours",
                precautions: "Dissolve slowly",
                sideEffects: "None significant",
                contraindications: "None significant"
            }
        ],
        severe: [
            {
                name: "Lidocaine Spray",
                dosage: "2-3 sprays every 2 hours",
                precautions: "Do not exceed 8 doses per day",
                sideEffects: "Numbness, bitter taste",
                contraindications: "Difficulty swallowing"
            }
        ]
    },
    bodyPain: [
        {
            name: "Ibuprofen",
            dosage: "200-400mg every 4-6 hours",
            precautions: "Take with food. Not recommended for those with stomach ulcers."
        },
        {
            name: "Naproxen",
            dosage: "250-500mg every 12 hours",
            precautions: "Take with food. May increase risk of heart attack or stroke."
        }
    ],
    nausea: [
        {
            name: "Ondansetron",
            dosage: "4-8mg every 8 hours",
            precautions: "May cause headache or constipation."
        },
        {
            name: "Domperidone",
            dosage: "10mg up to 3 times daily",
            precautions: "Take 15-30 minutes before meals."
        }
    ],
    insomnia: {
        mild: [
            {
                name: "Melatonin",
                dosage: "3-5mg before bedtime",
                precautions: "Take 30-60 minutes before bedtime. May cause morning drowsiness.",
                sideEffects: "Daytime sleepiness, headache",
                contraindications: "Autoimmune disorders, depression"
            }
        ],
        moderate: [
            {
                name: "Diphenhydramine",
                dosage: "25-50mg at bedtime",
                precautions: "Take 30 minutes before bedtime. May cause morning drowsiness.",
                sideEffects: "Dry mouth, daytime drowsiness",
                contraindications: "Glaucoma, enlarged prostate"
            }
        ],
        severe: [
            {
                name: "Zolpidem",
                dosage: "5-10mg immediately before bedtime",
                precautions: "Take only when you can get 7-8 hours of sleep. Do not drive or operate machinery.",
                sideEffects: "Dizziness, daytime drowsiness, memory problems",
                contraindications: "Sleep apnea, liver disease, pregnancy"
            }
        ]
    }
};

// Age-specific dosage adjustments
const ageAdjustments = {
    child: {
        multiplier: 0.5,
        warning: "Pediatric formulation recommended"
    },
    adult: {
        multiplier: 1,
        warning: null
    },
    elderly: {
        multiplier: 0.75,
        warning: "Lower dosage may be required. Monitor closely."
    }
};

const suggestedTests = {
    fever: [
        "Complete Blood Count (CBC)",
        "C-Reactive Protein (CRP)",
        "Blood Culture (if fever persists)"
    ],
    headache: [
        "CT Scan (for severe cases)",
        "Eye Examination",
        "Blood Pressure Test"
    ],
    allergies: [
        "Skin Prick Test",
        "Blood Test for Specific Antibodies",
        "Patch Test"
    ],
    sinusitis: [
        "Nasal Endoscopy",
        "CT Scan of Sinuses",
        "Culture Test of Nasal Secretions"
    ],
    diarrhea: [
        "Stool Culture",
        "Stool Ova and Parasite Test",
        "Complete Blood Count"
    ],
    muscleAche: [
        "CPK Blood Test",
        "ESR Test",
        "Physical Assessment"
    ],
    anxiety: [
        "Psychological Evaluation",
        "Thyroid Function Test",
        "Heart Rate and Blood Pressure Monitoring"
    ],
    cough: [
        "Chest X-Ray",
        "Pulmonary Function Test",
        "Sputum Culture"
    ],
    soreThroat: [
        "Throat Culture",
        "Rapid Strep Test",
        "Complete Blood Count"
    ],
    nausea: [
        "Complete Blood Count",
        "Liver Function Test",
        "H. pylori Test"
    ],
    insomnia: [
        "Sleep Study (Polysomnography)",
        "Thyroid Function Test",
        "Psychological Assessment"
    ]
};

let isFormValidated = false;

// Validate contact form
function validateContactForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value) {
            field.style.borderColor = 'var(--error-color)';
            isValid = false;
        } else {
            field.style.borderColor = 'var(--border-color)';
        }
    });

    return isValid;
}

// Get severity level based on slider value
function getSeverityLevel(value) {
    if (value <= 2) return 'mild';
    if (value <= 4) return 'moderate';
    return 'severe';
}

// Get age category
function getAgeCategory(age) {
    if (age < 18) return 'child';
    if (age > 65) return 'elderly';
    return 'adult';
}

// Initialize recommendations section
document.addEventListener('DOMContentLoaded', () => {
    const medicineList = document.getElementById('medicineList');
    medicineList.innerHTML = '<p class="medicine-card">Select symptoms and fill in your information to get personalized recommendations.</p>';
});

// Update recommendations without validation
function updateRecommendations() {
    if (!isFormValidated) {
        const medicineList = document.getElementById('medicineList');
        medicineList.innerHTML = '<p class="medicine-card">Please fill in your information first and click "Get Recommendations".</p>';
        return;
    }
    
    const medicineList = document.getElementById('medicineList');
    medicineList.innerHTML = '';

    // Get user information
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const medicalHistory = document.getElementById('medicalHistory').value;
    const duration = document.getElementById('duration').value;

    // Get checked symptoms and their severities
    const selectedSymptoms = [];
    document.querySelectorAll('input[name="symptoms"]:checked').forEach(checkbox => {
        const symptomId = checkbox.id;
        const severityValue = document.getElementById(symptomId + 'Severity').value;
        selectedSymptoms.push({
            symptom: symptomId,
            severity: getSeverityLevel(parseInt(severityValue))
        });
    });

    if (selectedSymptoms.length === 0) {
        medicineList.innerHTML = '<p class="medicine-card">Please select at least one symptom.</p>';
        return;
    }

    // Get age category and adjustments
    const ageCategory = getAgeCategory(age);
    const ageAdjustment = ageAdjustments[ageCategory];

    // Create user profile card
    const profileCard = document.createElement('div');
    profileCard.className = 'medicine-card profile-card';
    profileCard.innerHTML = `
        <h3>Patient Profile</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age} (${ageCategory})</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Symptom Duration:</strong> ${duration}</p>
        ${medicalHistory ? `<p><strong>Medical History:</strong> ${medicalHistory}</p>` : ''}
        ${ageAdjustment.warning ? `<p class="warning"><i class="fas fa-exclamation-triangle"></i> ${ageAdjustment.warning}</p>` : ''}
    `;
    medicineList.appendChild(profileCard);

    // Generate recommendations for each symptom
    selectedSymptoms.forEach(({symptom, severity}) => {
        if (medicineDatabase[symptom] && medicineDatabase[symptom][severity]) {
            const recommendations = medicineDatabase[symptom][severity];
            
            recommendations.forEach(medicine => {
                const medicineCard = document.createElement('div');
                medicineCard.className = 'medicine-card';
                
                // Adjust dosage based on age category
                const adjustedDosage = medicine.dosage.includes('mg') 
                    ? medicine.dosage.replace(/(\d+)mg/, (match, p1) => 
                        `${Math.round(parseInt(p1) * ageAdjustment.multiplier)}mg`)
                    : medicine.dosage;

                medicineCard.innerHTML = `
                    <h3>${medicine.name}</h3>
                    <p><strong>For:</strong> ${symptom} (${severity})</p>
                    <p><strong>Adjusted Dosage:</strong> ${adjustedDosage}</p>
                    <p><strong>Precautions:</strong> ${medicine.precautions}</p>
                    <p><strong>Side Effects:</strong> ${medicine.sideEffects}</p>
                    <p><strong>Contraindications:</strong> ${medicine.contraindications}</p>
                `;
                medicineList.appendChild(medicineCard);
            });

            // Add suggested tests if available
            if (suggestedTests[symptom]) {
                const testCard = document.createElement('div');
                testCard.className = 'medicine-card test-card';
                testCard.innerHTML = `
                    <h3><i class="fas fa-vial"></i> Suggested Tests for ${symptom}</h3>
                    <ul class="test-list">
                        ${suggestedTests[symptom].map(test => `
                            <li>
                                <i class="fas fa-check-circle"></i>
                                ${test}
                            </li>
                        `).join('')}
                    </ul>
                    <p class="test-disclaimer">
                        <i class="fas fa-info-circle"></i>
                        These tests are suggestions only. Please consult with your healthcare provider for appropriate diagnostics.
                    </p>
                `;
                medicineList.appendChild(testCard);
            }
        }
    });

    // Add general advice based on symptoms and duration
    const adviceCard = document.createElement('div');
    adviceCard.className = 'medicine-card advice-card';
    adviceCard.innerHTML = `
        <h3>General Advice</h3>
        <ul>
            ${duration === '14d' ? '<li>Consider consulting a healthcare provider as symptoms have persisted for over a week</li>' : ''}
            <li>Ensure adequate rest and hydration</li>
            <li>Monitor symptoms and seek medical attention if they worsen</li>
            <li>Keep track of any new symptoms that may develop</li>
        </ul>
    `;
    medicineList.appendChild(adviceCard);
}

// Main function to get medicine recommendations
function getMedicineRecommendations() {
    if (!validateContactForm()) {
        alert('Please fill in all required fields in the contact form.');
        isFormValidated = false;
        return;
    }
    
    isFormValidated = true;
    updateRecommendations();
}

// Add event listeners for real-time updates
document.querySelectorAll('input[name="symptoms"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateRecommendations);
});

document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('input', updateRecommendations);
});

// Add event listeners for form fields to reset validation state
document.querySelectorAll('#contactForm input, #contactForm select, #duration').forEach(input => {
    input.addEventListener('change', () => {
        input.style.borderColor = 'var(--border-color)';
    });
});

// Chatbot functionality
function sendMessage() {
    const userInput = document.getElementById('userMessage');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessageToChat(message, true);
    userInput.value = '';
    
    // Get bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessageToChat(response, false);
    }, 500);
}

function addMessageToChat(message, isUser) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    messageDiv.innerHTML = `
        <i class="fas ${isUser ? 'fa-user' : 'fa-robot'}"></i>
        <div class="message-content">${message}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    // Convert message to lowercase for easier matching
    const lowerMessage = message.toLowerCase();
    
    // Common responses based on keywords
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! How can I assist you with your health concerns today?";
    }
    
    if (lowerMessage.includes('side effect')) {
        return "Side effects can vary for different medications. It's important to read the medication guide and consult with your healthcare provider about potential side effects. Is there a specific medication you're concerned about?";
    }
    
    if (lowerMessage.includes('dosage') || lowerMessage.includes('dose')) {
        return "Dosage recommendations depend on various factors including age, weight, and medical condition. Please consult your healthcare provider for personalized dosage instructions.";
    }
    
    if (lowerMessage.includes('pain')) {
        return "There are different types of pain medications available. For mild pain, over-the-counter options like acetaminophen or ibuprofen might help. For severe pain, please consult a healthcare provider.";
    }
    
    if (lowerMessage.includes('fever')) {
        return "For fever, common treatments include acetaminophen or ibuprofen. Stay hydrated and rest. If fever persists over 3 days or exceeds 103°F (39.4°C), seek medical attention.";
    }
    
    if (lowerMessage.includes('thank')) {
        return "You're welcome! Is there anything else I can help you with?";
    }
    
    // Default response if no specific keywords are matched
    return "I understand you're asking about " + message + ". For specific medical advice, please consult with a healthcare professional. I can provide general information about common symptoms and medications.";
}

// Add event listener for Enter key in chat input
document.getElementById('userMessage').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}); 