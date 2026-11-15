import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const STATE_TARGETS = {
  blueprint: {
    plateZ: -0.05,
    wingZ: 0.02,
    coreZ: 0.12,
    glassZ: 0.24,
    wingFold: 0.05,
    wingSpread: 0.08,
    bracketShift: 0.02,
    railOpacity: 0.04,
    rigPitch: 0.34,
    rigYaw: -0.18,
  },
  fitted: {
    plateZ: -0.22,
    wingZ: 0.02,
    coreZ: 0.11,
    glassZ: 0.30,
    wingFold: 0.56,
    wingSpread: 0.0,
    bracketShift: 0.0,
    railOpacity: 0.1,
    rigPitch: 0.11,
    rigYaw: -0.26,
  },
  exploded: {
    plateZ: -0.96,
    wingZ: -0.28,
    coreZ: 0.26,
    glassZ: 0.96,
    wingFold: -0.22,
    wingSpread: 0.22,
    bracketShift: 0.26,
    railOpacity: 0.48,
    rigPitch: 0.16,
    rigYaw: -0.44,
  },
};

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.closePath();
}

function createBlueprintSurface(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 680;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle architectural grid
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

  // Outer drafting border & registration marks
  ctx.strokeStyle = 'rgba(0, 85, 255, 0.32)';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, 26, 26, canvas.width - 52, canvas.height - 52, 24);
  ctx.stroke();

  // Inner core bay dashed blueprint box
  ctx.save();
  ctx.setLineDash([10, 8]);
  ctx.strokeStyle = 'rgba(0, 9, 33, 0.28)';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, 212, 146, 600, 388, 22);
  ctx.stroke();
  ctx.restore();

  // Header & footer CAD labels
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

function createCoreTexture(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 668;
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return { canvas, ctx, texture };
}

function paintCoreTexture(surface, mode) {
  const { canvas, ctx, texture } = surface;
  const w = canvas.width;
  const h = canvas.height;

  // Deep anodized navy screen background
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#000921');
  grad.addColorStop(1, '#041236');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Subtle top-right studio cyan glow accent
  const radial = ctx.createRadialGradient(w * 0.85, h * 0.14, 10, w * 0.85, h * 0.14, 420);
  radial.addColorStop(0, 'rgba(0, 210, 255, 0.18)');
  radial.addColorStop(1, 'rgba(0, 210, 255, 0)');
  ctx.fillStyle = radial;
  ctx.fillRect(0, 0, w, h);

  // Crisp inner hairline frame
  ctx.strokeStyle = 'rgba(0, 210, 255, 0.34)';
  ctx.lineWidth = 2.5;
  drawRoundedRect(ctx, 28, 28, w - 56, h - 56, 26);
  ctx.stroke();

  // Status pill top left
  ctx.fillStyle = 'rgba(0, 85, 255, 0.24)';
  drawRoundedRect(ctx, 64, 64, 340, 48, 24);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0, 210, 255, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Green live dot
  ctx.fillStyle = '#10B981';
  ctx.beginPath();
  ctx.arc(92, 88, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#E6F4FF';
  ctx.font = '700 20px "JetBrains Mono", monospace';
  ctx.fillText(mode.coreTag, 114, 95);

  // Top right badge
  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.font = '600 18px "JetBrains Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText('ZERO PAPER', w - 68, 95);
  ctx.textAlign = 'left';

  // Hero Rupee metric
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 94px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(mode.heroMetric, 64, 258);

  ctx.fillStyle = '#7CC8FF';
  ctx.font = '600 28px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(mode.heroCaption, 68, 308);

  // Two clean live daily workflow strips
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
    ctx.fillText(row.label, 96, row.y + 57);

    // Pill status
    ctx.fillStyle = 'rgba(0, 9, 33, 0.8)';
    drawRoundedRect(ctx, w - 332, row.y + 22, 240, 50, 25);
    ctx.fill();
    ctx.strokeStyle = row.tone;
    ctx.lineWidth = 1.8;
    ctx.stroke();

    ctx.fillStyle = row.tone;
    ctx.font = '700 20px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(row.status, w - 212, row.y + 54);
    ctx.textAlign = 'left';
  });

  texture.needsUpdate = true;
}

function createWingSurface(renderer, widthPx, heightPx) {
  const canvas = document.createElement('canvas');
  canvas.width = widthPx;
  canvas.height = heightPx;
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return { canvas, ctx, texture };
}

function paintWingSurface(surface, info) {
  const { canvas, ctx, texture } = surface;
  const w = canvas.width;
  const h = canvas.height;
  const compact = w < 420;

  ctx.fillStyle = '#F7FAFF';
  ctx.fillRect(0, 0, w, h);

  // Subtle architectural notch border
  ctx.strokeStyle = '#C7D8F8';
  ctx.lineWidth = 4;
  drawRoundedRect(ctx, 14, 14, w - 28, h - 28, 22);
  ctx.stroke();

  // Electric blue index pill
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

function buildAssembly({ renderer, scene, initialMode }) {
  const disposableGeometries = [];
  const disposableMaterials = [];
  const disposableTextures = [];

  const trackGeo = (g) => {
    disposableGeometries.push(g);
    return g;
  };
  const trackMat = (m) => {
    disposableMaterials.push(m);
    return m;
  };
  const trackTex = (t) => {
    disposableTextures.push(t);
    return t;
  };

  const rig = new THREE.Group();
  rig.position.y = 0.08;
  scene.add(rig);

  // Materials
  const ceramicWhiteMat = trackMat(
    new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.42,
      metalness: 0.04,
      clearcoat: 0.25,
      clearcoatRoughness: 0.3,
    })
  );

  const navyChassisMat = trackMat(
    new THREE.MeshPhysicalMaterial({
      color: 0x000921,
      roughness: 0.28,
      metalness: 0.72,
      clearcoat: 0.65,
      clearcoatRoughness: 0.16,
    })
  );

  const cobaltMetalMat = trackMat(
    new THREE.MeshPhysicalMaterial({
      color: 0x0055ff,
      roughness: 0.24,
      metalness: 0.84,
      clearcoat: 0.6,
    })
  );

  const cyanTrimMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x0088cc,
      emissiveIntensity: 0.45,
      roughness: 0.22,
      metalness: 0.5,
    })
  );

  const glassVisorMat = trackMat(
    new THREE.MeshPhysicalMaterial({
      color: 0xeef6ff,
      metalness: 0.04,
      roughness: 0.05,
      transparent: true,
      opacity: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 1.0,
      envMapIntensity: 1.9,
      depthWrite: false,
    })
  );

  // --- Stratum 1: Base CAD Architectural Blueprint Plate ---
  const plateGroup = new THREE.Group();
  rig.add(plateGroup);

  const plateGeo = trackGeo(new RoundedBoxGeometry(3.75, 2.48, 0.06, 4, 0.08));
  const plateMesh = new THREE.Mesh(plateGeo, ceramicWhiteMat);
  plateMesh.castShadow = true;
  plateMesh.receiveShadow = true;
  plateGroup.add(plateMesh);

  const blueprintTex = trackTex(createBlueprintSurface(renderer));
  const blueprintFaceMat = trackMat(
    new THREE.MeshStandardMaterial({
      map: blueprintTex,
      roughness: 0.6,
      metalness: 0.02,
    })
  );
  const plateFaceGeo = trackGeo(new THREE.PlaneGeometry(3.62, 2.35));
  const plateFace = new THREE.Mesh(plateFaceGeo, blueprintFaceMat);
  plateFace.position.z = 0.032;
  plateFace.receiveShadow = true;
  plateGroup.add(plateFace);

  // --- Stratum 2: Hinged Origami Wings + Cobalt Joinery Brackets ---
  const wingLayerGroup = new THREE.Group();
  rig.add(wingLayerGroup);

  const wingConfigs = [
    {
      key: 'left',
      pivot: [-1.09, 0, 0],
      size: [0.84, 1.42, 0.044],
      offset: [-0.42, 0, 0],
      faceSize: [0.76, 1.32],
      texSize: [340, 580],
      axis: 'y',
      sign: 1,
    },
    {
      key: 'right',
      pivot: [1.09, 0, 0],
      size: [0.84, 1.42, 0.044],
      offset: [0.42, 0, 0],
      faceSize: [0.76, 1.32],
      texSize: [340, 580],
      axis: 'y',
      sign: -1,
    },
    {
      key: 'top',
      pivot: [0, 0.77, 0],
      size: [2.04, 0.56, 0.044],
      offset: [0, 0.28, 0],
      faceSize: [1.94, 0.48],
      texSize: [720, 180],
      axis: 'x',
      sign: 1,
    },
    {
      key: 'bottom',
      pivot: [0, -0.77, 0],
      size: [2.04, 0.56, 0.044],
      offset: [0, -0.28, 0],
      faceSize: [1.94, 0.48],
      texSize: [720, 180],
      axis: 'x',
      sign: -1,
    },
  ];

  const wingEntries = wingConfigs.map((cfg, idx) => {
    const pivotGroup = new THREE.Group();
    pivotGroup.position.set(...cfg.pivot);
    wingLayerGroup.add(pivotGroup);

    const wingGeo = trackGeo(new RoundedBoxGeometry(...cfg.size, 3, 0.045));
    const wingBody = new THREE.Mesh(wingGeo, ceramicWhiteMat);
    wingBody.position.set(...cfg.offset);
    wingBody.castShadow = true;
    wingBody.receiveShadow = true;
    pivotGroup.add(wingBody);

    // Metallic hinge spine cylinder along crease edge
    const hingeLen = cfg.axis === 'y' ? cfg.size[1] * 0.72 : cfg.size[0] * 0.72;
    const hingeGeo = trackGeo(new THREE.CylinderGeometry(0.016, 0.016, hingeLen, 12));
    const hingeMesh = new THREE.Mesh(hingeGeo, cobaltMetalMat);
    if (cfg.axis === 'x') {
      hingeMesh.rotation.z = Math.PI / 2;
    }
    pivotGroup.add(hingeMesh);

    const surface = createWingSurface(renderer, cfg.texSize[0], cfg.texSize[1]);
    trackTex(surface.texture);
    paintWingSurface(surface, initialMode.wingLabels[idx]);

    const faceMat = trackMat(
      new THREE.MeshStandardMaterial({
        map: surface.texture,
        roughness: 0.48,
        metalness: 0.04,
      })
    );
    const faceGeo = trackGeo(new THREE.PlaneGeometry(...cfg.faceSize));
    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    faceMesh.position.set(cfg.offset[0], cfg.offset[1], cfg.size[2] / 2 + 0.002);
    pivotGroup.add(faceMesh);

    return { cfg, pivotGroup, surface };
  });

  // 4 Precision Cobalt Corner Brackets that flare outward on Explode
  const bracketCorners = [
    [-1.12, 0.8],
    [1.12, 0.8],
    [-1.12, -0.8],
    [1.12, -0.8],
  ];
  const bracketGeo = trackGeo(new RoundedBoxGeometry(0.14, 0.14, 0.08, 2, 0.025));
  const brackets = bracketCorners.map(([bx, by]) => {
    const mesh = new THREE.Mesh(bracketGeo, cobaltMetalMat);
    mesh.position.set(bx, by, 0.04);
    mesh.castShadow = true;
    wingLayerGroup.add(mesh);
    return { mesh, baseX: bx, baseY: by };
  });

  // --- Stratum 3: Sculpted Machined Navy Business Core ---
  const coreGroup = new THREE.Group();
  rig.add(coreGroup);

  const coreBodyGeo = trackGeo(new RoundedBoxGeometry(2.04, 1.38, 0.2, 5, 0.08));
  const coreBody = new THREE.Mesh(coreBodyGeo, navyChassisMat);
  coreBody.castShadow = true;
  coreBody.receiveShadow = true;
  coreGroup.add(coreBody);

  // Subtle cyan edge collar behind screen
  const coreCollarGeo = trackGeo(new RoundedBoxGeometry(1.94, 1.28, 0.03, 3, 0.05));
  const coreCollar = new THREE.Mesh(coreCollarGeo, cyanTrimMat);
  coreCollar.position.z = 0.095;
  coreGroup.add(coreCollar);

  const coreSurface = createCoreTexture(renderer);
  trackTex(coreSurface.texture);
  paintCoreTexture(coreSurface, initialMode);

  const coreScreenMat = trackMat(
    new THREE.MeshBasicMaterial({
      map: coreSurface.texture,
      toneMapped: false,
    })
  );
  const coreScreenGeo = trackGeo(new THREE.PlaneGeometry(1.88, 1.22));
  const coreScreen = new THREE.Mesh(coreScreenGeo, coreScreenMat);
  coreScreen.position.z = 0.112;
  coreGroup.add(coreScreen);

  // --- Stratum 4: Refractive Optical Glass Visor ---
  const glassGroup = new THREE.Group();
  rig.add(glassGroup);

  const glassGeo = trackGeo(new RoundedBoxGeometry(2.14, 1.48, 0.04, 4, 0.07));
  const glassMesh = new THREE.Mesh(glassGeo, glassVisorMat);
  glassGroup.add(glassMesh);

  const glassEdgesGeo = trackGeo(new THREE.EdgesGeometry(glassGeo, 24));
  const glassEdgesMat = trackMat(
    new THREE.LineBasicMaterial({
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.42,
    })
  );
  const glassRim = new THREE.LineSegments(glassEdgesGeo, glassEdgesMat);
  glassGroup.add(glassRim);

  // --- Precision Exploded Z-Strata Guide Rails ---
  const railMat = trackMat(
    new THREE.LineBasicMaterial({
      color: 0x0055ff,
      transparent: true,
      opacity: 0.12,
    })
  );
  const railCoords = [
    [-1.02, 0.68],
    [1.02, 0.68],
    [-1.02, -0.68],
    [1.02, -0.68],
  ];
  const railGeo = trackGeo(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(0, 0, 1),
    ])
  );
  const rails = railCoords.map(([rx, ry]) => {
    const line = new THREE.Line(railGeo, railMat);
    line.position.set(rx, ry, 0);
    rig.add(line);
    return line;
  });

  // --- Architectural Shadow Floor ---
  const floorGeo = trackGeo(new THREE.PlaneGeometry(16, 16));
  const floorMat = trackMat(new THREE.ShadowMaterial({ opacity: 0.14 }));
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.68;
  floor.receiveShadow = true;
  scene.add(floor);

  return {
    rig,
    plateGroup,
    wingLayerGroup,
    wingEntries,
    brackets,
    coreGroup,
    coreSurface,
    glassGroup,
    railMat,
    rails,
    dispose() {
      disposableGeometries.forEach((g) => g.dispose());
      disposableMaterials.forEach((m) => m.dispose());
      disposableTextures.forEach((t) => t.dispose());
    },
  };
}

export function createAbout3DScene({ container, initialMode, initialState, onWebGLError }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch (err) {
    if (onWebGLError) onWebGLError(err);
    return null;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  // Procedural studio softbox environment reflections
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const roomEnv = new RoomEnvironment();
  const envTarget = pmremGenerator.fromScene(roomEnv, 0.04);
  scene.environment = envTarget.texture;
  roomEnv.dispose();
  pmremGenerator.dispose();

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
  camera.position.set(0.35, 1.15, 6.25);
  camera.lookAt(0, 0.05, 0);

  // Studio Three-Point Architectural Lighting
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xdce7ff, 0.95);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.9);
  keyLight.position.set(3.8, 5.6, 4.4);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  keyLight.shadow.camera.near = 1;
  keyLight.shadow.camera.far = 16;
  const d = 3.2;
  keyLight.shadow.camera.left = -d;
  keyLight.shadow.camera.right = d;
  keyLight.shadow.camera.top = d;
  keyLight.shadow.camera.bottom = -d;
  keyLight.shadow.bias = -0.0005;
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x00d2ff, 0.72);
  rimLight.position.set(-4.2, 2.2, -3.5);
  scene.add(rimLight);

  const assembly = buildAssembly({ renderer, scene, initialMode });

  // Animation & interaction state
  let currentTarget = STATE_TARGETS[initialState] || STATE_TARGETS.fitted;
  const anim = {
    plateZ: currentTarget.plateZ,
    wingZ: currentTarget.wingZ,
    coreZ: currentTarget.coreZ,
    glassZ: currentTarget.glassZ,
    wingFold: currentTarget.wingFold,
    wingSpread: currentTarget.wingSpread,
    bracketShift: currentTarget.bracketShift,
    railOpacity: currentTarget.railOpacity,
    rigPitch: currentTarget.rigPitch,
    rigYaw: currentTarget.rigYaw,
    pulse: 0,
  };

  const pointer = {
    hoverX: 0,
    hoverY: 0,
    dragYaw: 0,
    dragPitch: 0,
    isDragging: false,
    lastClientX: 0,
    lastClientY: 0,
  };

  let isVisible = true;
  let isDisposed = false;
  let rafId = 0;
  let lastTime = performance.now();

  const handleResize = () => {
    if (isDisposed) return;
    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    camera.aspect = width / height;
    // Scale camera distance gracefully on narrow viewports so whole wing spread stays framed
    camera.position.z = width < 460 ? 7.6 : width < 640 ? 6.9 : 6.25;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  handleResize();
  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(container);

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !rafId && !isDisposed) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    },
    { threshold: 0.05 }
  );
  intersectionObserver.observe(container);

  const canvasEl = renderer.domElement;

  const onPointerDown = (e) => {
    pointer.isDragging = true;
    pointer.lastClientX = e.clientX;
    pointer.lastClientY = e.clientY;
    canvasEl.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    const rect = canvasEl.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      pointer.hoverX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.hoverY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    if (pointer.isDragging) {
      const dx = e.clientX - pointer.lastClientX;
      const dy = e.clientY - pointer.lastClientY;
      pointer.lastClientX = e.clientX;
      pointer.lastClientY = e.clientY;
      pointer.dragYaw = THREE.MathUtils.clamp(pointer.dragYaw + dx * 0.008, -0.95, 0.95);
      pointer.dragPitch = THREE.MathUtils.clamp(pointer.dragPitch + dy * 0.006, -0.55, 0.55);
    }
  };

  const onPointerUp = (e) => {
    pointer.isDragging = false;
    canvasEl.releasePointerCapture?.(e.pointerId);
  };

  const onPointerLeave = () => {
    pointer.isDragging = false;
    pointer.hoverX = 0;
    pointer.hoverY = 0;
  };

  canvasEl.addEventListener('pointerdown', onPointerDown);
  canvasEl.addEventListener('pointermove', onPointerMove);
  canvasEl.addEventListener('pointerup', onPointerUp);
  canvasEl.addEventListener('pointercancel', onPointerUp);
  canvasEl.addEventListener('pointerleave', onPointerLeave);

  function tick(now) {
    if (isDisposed || !isVisible) {
      rafId = 0;
      return;
    }
    rafId = requestAnimationFrame(tick);

    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    const t = now * 0.001;
    const smooth = 1 - Math.exp(-7.5 * dt);

    // Decay mode-switch refold impulse
    anim.pulse *= Math.exp(-5.5 * dt);

    anim.plateZ += (currentTarget.plateZ - anim.plateZ) * smooth;
    anim.wingZ += (currentTarget.wingZ - anim.wingZ) * smooth;
    anim.coreZ += (currentTarget.coreZ - anim.coreZ) * smooth;
    anim.glassZ += (currentTarget.glassZ - anim.glassZ) * smooth;
    anim.wingFold += (currentTarget.wingFold - anim.wingFold) * smooth;
    anim.wingSpread += (currentTarget.wingSpread - anim.wingSpread) * smooth;
    anim.bracketShift += (currentTarget.bracketShift - anim.bracketShift) * smooth;
    anim.railOpacity += (currentTarget.railOpacity - anim.railOpacity) * smooth;

    const targetYaw =
      currentTarget.rigYaw + pointer.dragYaw + pointer.hoverX * 0.16 + Math.sin(t * 0.55) * 0.04;
    const targetPitch =
      currentTarget.rigPitch + pointer.dragPitch + pointer.hoverY * 0.11;

    anim.rigYaw += (targetYaw - anim.rigYaw) * smooth;
    anim.rigPitch += (targetPitch - anim.rigPitch) * smooth;

    assembly.rig.rotation.y = anim.rigYaw;
    assembly.rig.rotation.x = anim.rigPitch;
    assembly.rig.position.y = 0.08 + Math.sin(t * 1.15) * 0.036;

    assembly.plateGroup.position.z = anim.plateZ;
    assembly.wingLayerGroup.position.z = anim.wingZ;
    assembly.coreGroup.position.z = anim.coreZ + anim.pulse * 0.12;
    assembly.glassGroup.position.z = anim.glassZ + anim.pulse * 0.18;

    const activeFold = anim.wingFold - anim.pulse * 0.34;
    assembly.wingEntries.forEach(({ cfg, pivotGroup }) => {
      const spreadX = cfg.pivot[0] !== 0 ? Math.sign(cfg.pivot[0]) * anim.wingSpread : 0;
      const spreadY = cfg.pivot[1] !== 0 ? Math.sign(cfg.pivot[1]) * anim.wingSpread : 0;
      pivotGroup.position.set(cfg.pivot[0] + spreadX, cfg.pivot[1] + spreadY, 0);
      if (cfg.axis === 'y') {
        pivotGroup.rotation.y = activeFold * cfg.sign;
        pivotGroup.rotation.x = 0;
      } else {
        pivotGroup.rotation.x = activeFold * cfg.sign;
        pivotGroup.rotation.y = 0;
      }
    });

    assembly.brackets.forEach(({ mesh, baseX, baseY }) => {
      mesh.position.x = baseX + Math.sign(baseX) * anim.bracketShift;
      mesh.position.y = baseY + Math.sign(baseY) * anim.bracketShift;
      mesh.position.z = 0.04 + anim.bracketShift * 0.45;
    });

    const spanZ = Math.max(0.18, (anim.glassZ - anim.plateZ) * 0.5);
    const midZ = (anim.glassZ + anim.plateZ) * 0.5;
    assembly.railMat.opacity = anim.railOpacity;
    assembly.rails.forEach((line) => {
      line.position.z = midZ;
      line.scale.z = spanZ;
    });

    renderer.render(scene, camera);
  }

  rafId = requestAnimationFrame(tick);

  return {
    setAssemblyState(nextState) {
      currentTarget = STATE_TARGETS[nextState] || STATE_TARGETS.fitted;
    },
    setMode(mode) {
      paintCoreTexture(assembly.coreSurface, mode);
      assembly.wingEntries.forEach(({ surface }, idx) => {
        paintWingSurface(surface, mode.wingLabels[idx]);
      });
      anim.pulse = 1.0;
    },
    resetCamera() {
      pointer.dragYaw = 0;
      pointer.dragPitch = 0;
      pointer.hoverX = 0;
      pointer.hoverY = 0;
    },
    dispose() {
      isDisposed = true;
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvasEl.removeEventListener('pointerdown', onPointerDown);
      canvasEl.removeEventListener('pointermove', onPointerMove);
      canvasEl.removeEventListener('pointerup', onPointerUp);
      canvasEl.removeEventListener('pointercancel', onPointerUp);
      canvasEl.removeEventListener('pointerleave', onPointerLeave);
      assembly.dispose();
      envTarget.dispose();
      renderer.dispose();
      if (canvasEl.parentNode === container) {
        container.removeChild(canvasEl);
      }
    },
  };
}
