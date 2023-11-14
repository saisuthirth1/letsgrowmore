document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const imagelink = document.getElementById("imagelink").value;
    const genderElements = document.getElementsByName("gender");
    let gender = "";

    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }

    const skillsElements = document.getElementsByName("skills");
    let selectedSkills = [];

    for (const element of skillsElements) {
        if (element.checked) {
            selectedSkills.push(element.value);
        }
    }



    document.getElementById('display name').innerText = 'Name: ' + name;
    document.getElementById('display email').innerText = 'Email: ' + email;
    document.getElementById('display website').innerText = 'Website: ' + website;
    document.getElementById("display-imagelink").src = imagelink; // Set the src attribute for the image
    document.getElementById("display skills").textContent = `Skills: ${selectedSkills.join(", ")}`;

});