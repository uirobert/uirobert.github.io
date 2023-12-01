import React, { useEffect } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css'; // or any theme you prefer

const CaseStudy = () => {
  useEffect(() => {
    // Import Reveal.js and its plugins dynamically on the client side
    if (typeof window !== 'undefined') {
      import('reveal.js').then((RevealModule) => {
        const Reveal = RevealModule.default;
        import('reveal.js/plugin/markdown/markdown.esm.js').then((MarkdownModule) => {
          const Markdown = MarkdownModule.default;
          import('reveal.js/plugin/zoom/zoom.esm.js').then((ZoomModule) => {
            const Zoom = ZoomModule.default;
            
            // Make sure Reveal initializes with the container element present
            Reveal.initialize({
              plugins: [Markdown, Zoom],
              embedded: true,
            });
          });
        });
      });
    }
  }, []);

  // Your slides markup
  const slidesMarkup = `
    <section style="background-color: #ff7f7f;">Slide 1: Full-width color slide</section>
    <section style="background-color: #7fff7f;">Slide 2: Full-width color slide</section>
    <section style="background-color: #7f7fff;">Slide 3: Full-width color slide</section>
    <section style="background-color: #ffff7f;">Slide 4: Full-width color slide</section>
    <section style="background-color: #ff7fff;">Slide 5: Full-width color slide</section>
  `;

  return (
    <div className="reveal-outer" style={{ overflowY: 'scroll', height: '100vh' }}>
      <div className="reveal">
        <div className="slides" dangerouslySetInnerHTML={{ __html: slidesMarkup }} />
      </div>
    </div>
  );
};

export default CaseStudy;
