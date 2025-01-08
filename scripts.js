document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('.surveyForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const formData = {};

        formData.name = form.elements['name'].value;
        formData.email = form.elements['email'].value;
        formData.age = form.elements['age'].value;

        formData.description = form.elements['description'].value;

        const recommend = form.querySelector('input[name="recommend"]:checked');
        formData.recommend = recommend ? recommend.value : 'No selection';

        const languages = [];
        form.querySelectorAll('input[name="lang"]:checked').forEach(checkbox => {
            languages.push(checkbox.value);
        });
        formData.languages = languages;

        formData.comments = form.elements['comments'].value;

        console.log('Form Data:', formData);
    });
});
