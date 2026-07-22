import { useEffect, useRef } from "react";

// Lightweight canvas background: drifting neon particles + slow-rotating
// wireframe polyhedra. No external 3D library — pure canvas 2D math.
const ParticleField = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, animationId;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 70;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 1 + 0.2,
      r: Math.random() * 1.6 + 0.4,
      vy: Math.random() * 0.15 + 0.03,
      hue: Math.random() > 0.5 ? "0,240,255" : "255,46,146",
    }));

    const golden = (1 + Math.sqrt(5)) / 2;
    const rawVerts = [
      [-1, golden, 0], [1, golden, 0], [-1, -golden, 0], [1, -golden, 0],
      [0, -1, golden], [0, 1, golden], [0, -1, -golden], [0, 1, -golden],
      [golden, 0, -1], [golden, 0, 1], [-golden, 0, -1], [-golden, 0, 1],
    ];

    const makeShape = (cxRatio, cyRatio, scale) => ({
      cxRatio,
      cyRatio,
      scale,
      verts: rawVerts,
      rot: Math.random() * Math.PI,
      speed: (Math.random() * 0.4 + 0.15) * (Math.random() > 0.5 ? 1 : -1),
    });

    const shapes = [
      makeShape(0.15, 0.28, 60),
      makeShape(0.85, 0.7, 46),
    ];

    const project = (v, rot) => {
      const cosA = Math.cos(rot), sinA = Math.sin(rot);
      const x = v[0] * cosA - v[2] * sinA;
      const z = v[0] * sinA + v[2] * cosA;
      const cosB = Math.cos(rot * 0.6), sinB = Math.sin(rot * 0.6);
      const y = v[1] * cosB - z * sinB;
      return [x, y];
    };

    const drawShape = (s, color) => {
      s.rot += s.speed * 0.004;
      const cx = w * s.cxRatio, cy = h * s.cyRatio;
      const projected = s.verts.map((v) => project(v, s.rot));
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = s.verts[i][0] - s.verts[j][0];
          const dy = s.verts[i][1] - s.verts[j][1];
          const dz = s.verts[i][2] - s.verts[j][2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 2.1) {
            ctx.beginPath();
            ctx.moveTo(cx + projected[i][0] * s.scale, cy + projected[i][1] * s.scale);
            ctx.lineTo(cx + projected[j][0] * s.scale, cy + projected[j][1] * s.scale);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.y -= p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},${0.3 * p.z})`;
        ctx.shadowColor = `rgba(${p.hue},0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      drawShape(shapes[0], "rgba(0,240,255,0.18)");
      drawShape(shapes[1], "rgba(255,46,146,0.16)");

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
};

export default ParticleField;
