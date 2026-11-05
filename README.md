# Nishant Chakravarthy — Portfolio

A four-page, 3D portfolio built from scratch with **Three.js** and custom **GLSL** shaders. No framework and no build step: the whole site is one `index.html` file.

## Pages

| Page | 3D scene |
|---|---|
| **01 Home** | A liquid, iridescent blob in a wireframe shell, with a particle ring and a spinning name band. It follows the cursor and reacts to clicks. |
| **02 Work** | A ring of curved project cards with reflections over a glowing dot floor. Drag, scroll, use the arrow keys or the arrow buttons. |
| **03 About** | 9,000 particles that change between four shapes (sphere, torus knot, double helix, cube) and move away from the cursor. |
| **04 Contact** | A rippling field of light points that rises under the cursor and sends out a ripple on click. |

Other features:

- An intro where 60,000 particles come together into a glowing particle portrait of me, sampled directly from a photo. A glowing "GREETINGS" is revealed behind it, with a light scan, floating dust and bloom. It waits for a click to enter.
- Soft fades between pages, with a slow camera push-in on each scene and hash routing (`#home`, `#work`, `#about`, `#contact`).
- A bloom glow effect on desktop, film grain, a custom cursor and a magnetic "Copy email" button.
- A phone layout: oversized words shrink to fit, the camera pulls back on tall screens, and phones get lighter 3D.
- Respects reduced-motion settings.

## Projects featured

- [Adaptive UI Engine](https://github.com/nishantchakravarthy/Adaptive-UI): adjusts the interface based on behaviour, using a finite state machine in Python.
- [EduMetrics](https://github.com/nishantchakravarthy/Edumetrics): e-learning analytics with a dropout prediction model and a dashboard.
- [Car Inventory](https://github.com/nishantchakravarthy/Car-Inventory): web development mini project.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

The site is static, so any host works. On **Vercel**: Add New → Project → import this repo → Deploy. No settings are needed.

## Tech

Three.js r128 · GLSL · UnrealBloomPass · HTML / CSS / JavaScript · Google Fonts (Anton, Italiana, Instrument Serif, JetBrains Mono)

## Contact

- Email: nishant.chakravarthy@gmail.com
- [LinkedIn](https://www.linkedin.com/in/nishant-chakravarthy-855406350/) · [Instagram](https://www.instagram.com/nish.frr)
