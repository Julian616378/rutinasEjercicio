document.getElementById('mood-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const mood = document.getElementById('mood').value;
    const notes = document.getElementById('notes').value;
    const moodLog = document.getElementById('log-list');

    const moodEntry = document.createElement('li');
    moodEntry.textContent = `${new Date().toLocaleDateString()} - Estado de Ánimo: ${mood.charAt(0).toUpperCase() + mood.slice(1)} | Notas: ${notes}`;
    moodLog.appendChild(moodEntry);

    // Limpiar el formulario
    document.getElementById('mood').value = 'happy';
    document.getElementById('notes').value = '';
});
