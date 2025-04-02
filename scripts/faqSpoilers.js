document.querySelectorAll('.faq__qastions-contentbox').forEach(box => {
    box.addEventListener('click', () => {
        const answer = box.querySelector('.faq__qastions-answerbox-text');
        const icon = box.querySelector('.faq__qastions-answerbox-icon');
        
        if (answer.classList.contains('_active')) {
            answer.classList.remove('_active');
            icon.classList.remove('_active');
        } else {
            document.querySelectorAll('.faq__qastions-answerbox-text').forEach(el => el.classList.remove('_active'));
            document.querySelectorAll('.faq__qastions-answerbox-icon').forEach(el => el.classList.remove('_active'));
            
            answer.classList.add('_active');
            icon.classList.add('_active');
        }
    });
});