GitHubCalendar(".calendar", "sanjaypatel29",
    {
        responsive: true
    });


let i = 0
const profession = [' Full Stack Developer', 'Problem Solver', 'Web Designer', 'Continuos Learner']

setInterval(() => {
    if (i >= profession.length) {
        i = 0
    }
    changingprofession(i++)
}, 1000)

function changingprofession(i) {
    if (i < profession.length) {
        let changingprofessionDiv = document.getElementById('changingprofession')
        changingprofessionDiv.innerHTML = `<h2>${profession[i]}</h2>`
        i += 1
    }
}
