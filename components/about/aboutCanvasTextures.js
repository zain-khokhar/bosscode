import * as THREE from 'three';

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, w, h, r);
  } else {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
  }
  ctx.closePath();
}

export function createBlueprintSurface(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 680;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas 2D context unavailable for blueprint texture');
  }

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(0, 9, 33, 0.07)';
  ctx.lineWidth = 1.5;
  for (let x = 40; x < canvas.width; x += 48) {
    ctx.beginPath();
    ctx.moveTo(x, 28);
    ctx.lineTo(x, canvas.height - 28);
    ctx.stroke();
  }
  for (let y = 28; y < canvas.height; y += 48) {
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(canvas.width - 40, y);
    ctx.stroke();
  }

  ctx.strokeStyle = 'rgba(0, 85, 255, 0.32)';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, 26, 26, canvas.width - 52, canvas.height - 52, 24);
  ctx.stroke();

  ctx.save();
  ctx.setLineDash([10, 8]);
  ctx.strokeStyle = 'rgba(0, 9, 33, 0.28)';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, 212, 146, 600, 388, 22);
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = '#000921';
  ctx.font = '700 18px "JetBrains Mono", monospace';
  ctx.fillText('BOSSCODE // CUSTOM WORKFLOW CHASSIS', 52, 66);

  ctx.fillStyle = '#0055FF';
  ctx.font = '700 16px "JetBrains Mono", monospace';
  ctx.fillText('SCALE 1:1 · KARACHI STUDIO', canvas.width - 310, 66);

  ctx.fillStyle = 'rgba(0, 9, 33, 0.48)';
  ctx.font = '600 15px "JetBrains Mono", monospace';
  ctx.fillText('Z-AXIS MODULAR CORE MOUNT · NO PAPER REGISTER', 52, canvas.height - 46);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return texture;
}

export function createCoreTexture(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 668;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas 2D context unavailable for core display');
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return { canvas, ctx, texture };
}

export function paintCoreTexture(surface, mode) {
  const { canvas, ctx, texture } = surface;
  const w = canvas.width;
  const h = canvas.height;

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#000921');
  grad.addColorStop(1, '#041236');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  const radial = ctx.createRadialGradient(w * 0.85, h * 0.14, 10, w * 0.85, h * 0.14, 420);
  radial.addColorStop(0, 'rgba(0, 210, 255, 0.18)');
  radial.addColorStop(1, 'rgba(0, 210, 255, 0)');
  ctx.fillStyle = radial;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(0, 210, 255, 0.34)';
  ctx.lineWidth = 2.5;
  drawRoundedRect(ctx, 28, 28, w - 56, h - 56, 26);
  ctx.stroke();

  ctx.fillStyle = 'rgba(0, 85, 255, 0.24)';
  drawRoundedRect(ctx, 64, 64, 340, 48, 24);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0, 210, 255, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#10B981';
  ctx.beginPath();
  ctx.arc(92, 88, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#E6F4FF';
  ctx.font = '700 20px "JetBrains Mono", monospace';
  ctx.fillText(mode.coreTag, 114, 95);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.font = '600 18px "JetBrains Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText('ZERO PAPER', w - 68, 95);
  ctx.textAlign = 'left';

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 94px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(mode.heroMetric, 64, 258, w - 128);

  ctx.fillStyle = '#7CC8FF';
  ctx.font = '600 28px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(mode.heroCaption, 68, 308, w - 136);

  const rows = [
    { y: 374, label: mode.rowOneLabel, status: mode.rowOneStatus, tone: '#10B981' },
    { y: 492, label: mode.rowTwoLabel, status: mode.rowTwoStatus, tone: '#00D2FF' },
  ];

  rows.forEach((row) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    drawRoundedRect(ctx, 64, row.y, w - 128, 94, 20);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 30px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(row.label, 96, row.y + 57, w - 450);

    ctx.fillStyle = 'rgba(0, 9, 33, 0.8)';
    drawRoundedRect(ctx, w - 332, row.y + 22, 240, 50, 25);
    ctx.fill();
    ctx.strokeStyle = row.tone;
    ctx.lineWidth = 1.8;
    ctx.stroke();

    ctx.fillStyle = row.tone;
    ctx.font = '700 20px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(row.status, w - 212, row.y + 54, 220);
    ctx.textAlign = 'left';
  });

  texture.needsUpdate = true;
}

export function createWingSurface(renderer, widthPx, heightPx) {
  const canvas = document.createElement('canvas');
  canvas.width = widthPx;
  canvas.height = heightPx;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas 2D context unavailable for wing surface');
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return { canvas, ctx, texture };
}

export function paintWingSurface(surface, info) {
  const { canvas, ctx, texture } = surface;
  const w = canvas.width;
  const h = canvas.height;
  const compact = w < 420;

  ctx.fillStyle = '#F7FAFF';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = '#C7D8F8';
  ctx.lineWidth = 4;
  drawRoundedRect(ctx, 14, 14, w - 28, h - 28, 22);
  ctx.stroke();

  ctx.fillStyle = '#0055FF';
  drawRoundedRect(ctx, 34, 34, 68, 38, 12);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '700 22px "JetBrains Mono", monospace';
  ctx.fillText(info.code, 50, 61);

  if (compact) {
    ctx.fillStyle = '#000921';
    ctx.font = '800 30px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(info.title, 32, h * 0.54, w - 64);

    ctx.fillStyle = '#0055FF';
    ctx.font = '700 22px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(info.note, 32, h * 0.67, w - 64);
  } else {
    ctx.fillStyle = '#000921';
    ctx.font = '800 34px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(info.title, 122, 65, w - 156);

    ctx.fillStyle = '#0055FF';
    ctx.font = '700 23px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(info.note, 122, 108, w - 156);
  }

  texture.needsUpdate = true;
}

