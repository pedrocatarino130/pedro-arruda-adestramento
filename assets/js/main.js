// JavaScript principal será adicionado nas próximas sprints

document.addEventListener('DOMContentLoaded', function() {
    console.log('Landing Page - Pedro Arruda Adestramento');
    
    // Configuração do Formspree
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        
        // Validação básica
        if (!validateForm()) {
            return;
        }
        
        // Desabilitar botão e mostrar loading
        submitBtn.disabled = true;
        showStatus('loading', 'Enviando mensagem...');
        
        // Criar FormData com todos os campos
        const formData = new FormData(contactForm);
        
        // Enviar formulário via Formspree usando fetch
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);
            
            if (response.ok) {
                showStatus('success', 'Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                return;
            }
            
            // Tentar obter detalhes do erro
            return response.text().then(text => {
                console.error('Response text:', text);
                let errorMessage = 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
                
                try {
                    const data = JSON.parse(text);
                    if (data.error) {
                        errorMessage = data.error;
                    } else if (data.errors && Array.isArray(data.errors)) {
                        errorMessage = data.errors.map(error => error.message || error).join(', ');
                    }
                } catch (e) {
                    // Se não conseguir parsear, usar mensagem padrão
                    if (response.status === 429) {
                        errorMessage = 'Muitas tentativas. Por favor, aguarde alguns minutos.';
                    } else if (response.status === 404) {
                        errorMessage = 'Form ID não encontrado. Verifique a configuração.';
                    } else if (response.status === 422) {
                        errorMessage = 'Dados inválidos. Verifique os campos preenchidos.';
                    }
                }
                
                throw new Error(errorMessage);
            });
        })
        .catch(error => {
            console.error('Erro ao enviar formulário:', error);
            showStatus('error', error.message || 'Erro ao enviar mensagem. Por favor, tente novamente.');
        })
        .finally(() => {
            submitBtn.disabled = false;
        });
    }
    
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            showStatus('error', 'Por favor, preencha todos os campos obrigatórios.');
            return false;
        }
        
        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('error', 'Por favor, insira um email válido.');
            return false;
        }
        
        return true;
    }
    
    function showStatus(type, message) {
        formStatus.className = `form-status ${type}`;
        formStatus.textContent = message;
        formStatus.style.display = 'block';
        
        // Auto-ocultar mensagem de sucesso após 5 segundos
        if (type === 'success') {
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    }
});

// ============================================
// Google Analytics 4 - Eventos Personalizados
// ============================================

/**
 * Dispara evento quando a avaliação é iniciada
 * @param {Object} params - Parâmetros adicionais do evento (opcional)
 */
function trackAvaliacaoIniciada(params = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'avaliacao_iniciada', params);
        console.log('GA4 Event: avaliacao_iniciada', params);
    }
}

/**
 * Dispara evento quando a avaliação é completada
 * @param {Object} params - Parâmetros adicionais do evento (opcional)
 */
function trackAvaliacaoCompleta(params = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'avaliacao_completa', params);
        console.log('GA4 Event: avaliacao_completa', params);
    }
}

/**
 * Dispara evento quando há clique no WhatsApp
 * @param {Object} params - Parâmetros adicionais do evento (opcional)
 */
function trackWhatsAppClique(params = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_clique', params);
        console.log('GA4 Event: whatsapp_clique', params);
    }
}

// Expor funções globalmente para uso em outros scripts
window.trackAvaliacaoIniciada = trackAvaliacaoIniciada;
window.trackAvaliacaoCompleta = trackAvaliacaoCompleta;
window.trackWhatsAppClique = trackWhatsAppClique;

