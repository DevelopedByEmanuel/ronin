document.addEventListener('DOMContentLoaded', () => {
    
    // CHART LOGIC
    const canvas = document.getElementById('trafficChart');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        function resize() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = 200;
        }
        resize();
        window.addEventListener('resize', resize);

        const dataPoints = [];
        const totalPoints = 40;
        for(let i=0; i<totalPoints; i++) dataPoints.push(Math.random() * 50);

        function draw() {
            // Shift data
            dataPoints.shift();
            // Add new data (simulated traffic spike)
            const spike = Math.random() > 0.9 ? Math.random() * 150 : Math.random() * 50;
            dataPoints.push(spike);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Grid
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 50); ctx.lineTo(canvas.width, 50);
            ctx.moveTo(0, 100); ctx.lineTo(canvas.width, 100);
            ctx.moveTo(0, 150); ctx.lineTo(canvas.width, 150);
            ctx.stroke();

            // Bar Chart Style
            const barWidth = canvas.width / totalPoints;
            
            dataPoints.forEach((val, i) => {
                const h = (val / 150) * canvas.height;
                const x = i * barWidth;
                const y = canvas.height - h;
                
                ctx.fillStyle = val > 100 ? '#FF5F56' : '#000000'; // Red if spike
                ctx.fillRect(x, y, barWidth - 2, h);
            });

            requestAnimationFrame(() => {
                setTimeout(draw, 100); // 10fps for retro feel
            });
        }
        draw();
    }
});