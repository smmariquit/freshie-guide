// src/app/page.tsx

// src/app/page.tsx

export default function Home() {
  return (
    <div className="neocities-layout">
      <header>
        <div className="title">UPLB_GUIDE.DOC</div>
        <nav>
          <a href="http://room-tba.stimmie.dev/" target="_blank" rel="noopener noreferrer">
            [ROOM_TBA]
          </a>
          <a href="https://docs.google.com/document/d/1AtzyVcQGWWCwJFFzmE8ZBTDNSVMQPaRzd8TYhlJFnWk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            [VIEW_DOC]
          </a>
          <a href="https://uplb-trail.vercel.app" target="_blank" rel="noopener noreferrer">
            [TRAIL]
          </a>
          <a href="https://upsked.com/uplb" target="_blank" rel="noopener noreferrer">
            [UPSKED]
          </a>
        </nav>
      </header>

      <main>
        <div className="guide-container">
          <iframe
            src="https://docs.google.com/document/d/1AtzyVcQGWWCwJFFzmE8ZBTDNSVMQPaRzd8TYhlJFnWk/preview"
            title="UPLB Freshie Guide"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
