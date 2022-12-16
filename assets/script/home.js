"use strict";

const peopleList = document.getElementById("people-list");

window.addEventListener("load", async () => {
    try {
        const result = await fetch("https://randomuser.me/api/?nat=CA&results=10");

        if (result.ok) {
            const users = (await result.json()).results;

            for (let user of users) {
                const userLi = document.createElement("li");

                userLi.innerHTML = `
                    <img src=${user.picture.thumbnail} class="avatar">
                    <div>
                        <h2>${user.name.first} ${user.name.last}</h2>
                        <h3>${user.location.city}</h3>
                    </div>
                    <button>+</button>
                `;

                peopleList.appendChild(userLi);
            }
        }
    } catch(error) {
        console.warn(error.message);
    }
})