(function(){
	const year = document.getElementById('year');
	if (year) { year.textContent = new Date().getFullYear(); }

	// Decorative node animation in hero visual
	const visual = document.querySelector('.hero-visual');
	if (!visual) return;
	const canvas = document.createElement('canvas');
	visual.appendChild(canvas);
	const ctx = canvas.getContext('2d');
	let width, height, nodes;

	function resize(){
		width = canvas.width = visual.clientWidth;
		height = canvas.height = visual.clientHeight;
		nodes = createNodes();
	}
	window.addEventListener('resize', resize);
	resize();

	function createNodes(){
		const count = Math.max(24, Math.floor(width * height / 18000));
		const arr = [];
		for (let i=0;i<count;i++){
			arr.push({
				x: Math.random()*width,
				y: Math.random()*height,
				vx: (Math.random()-0.5)*0.3,
				vy: (Math.random()-0.5)*0.3,
				r: 2 + Math.random()*2
			});
		}
		return arr;
	}

	function step(){
		ctx.clearRect(0,0,width,height);
		// draw links
		for (let i=0;i<nodes.length;i++){
			for (let j=i+1;j<nodes.length;j++){
				const a = nodes[i], b = nodes[j];
				const dx = a.x-b.x, dy = a.y-b.y;
				const d2 = dx*dx+dy*dy;
				if (d2 < 140*140){
					const alpha = 1 - d2/(140*140);
					ctx.strokeStyle = `rgba(124,92,255,${alpha*0.3})`;
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}
		}
		// draw nodes
		for (const n of nodes){
			ctx.fillStyle = 'rgba(255,255,255,0.9)';
			ctx.beginPath();
			ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
			ctx.fill();
			n.x += n.vx; n.y += n.vy;
			if (n.x < 0 || n.x > width) n.vx *= -1;
			if (n.y < 0 || n.y > height) n.vy *= -1;
		}
		requestAnimationFrame(step);
	}
	requestAnimationFrame(step);
})();

