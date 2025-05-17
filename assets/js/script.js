const targetDate = new Date('1970-01-01T00:00:00Z').getTime();

function updateTimer() {
    const now = new Date().getTime();
        const timeElapsed = now - targetDate;

            const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

                            const timerElement = document.getElementById('timer');
                                if (window.innerWidth > 768) {
                                        timerElement.innerHTML = `
                                                    <span>${days}</span>:<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>
                                                            `;
                                                                } else {
                                                                        timerElement.innerHTML = `
                                                                                    <span>${days}</span>
                                                                                                <span>${hours}</span>
                                                                                                            <span>${minutes}</span>
                                                                                                                        <span>${seconds}</span>
                                                                                                                                `;
                                                                                                                                    }
                                                                                                                                    }

                                                                                                                                    const timerInterval = setInterval(updateTimer, 1000);
                                                                                                                                    updateTimer();