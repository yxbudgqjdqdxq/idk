import { useEffect } from 'react';

export default function AnimatedBackground() {
  useEffect(() => {
    const canvas = document.getElementById('bg');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blobs = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 100 + Math.random() * 150,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: `hsla(${Math.random() * 360}, 70%, 70%, 0.5)`
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return <canvas id="bg" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
}