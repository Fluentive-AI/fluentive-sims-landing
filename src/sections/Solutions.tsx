import React, { useState } from "react";

export function Solutions() {
  const useCases = [
    {
      id: "mrpd",
      title: "Product Development",
      kicker: "Test ideas faster, cheaper",
      summary: [
        "Dynamically engage synthetic focus groups built from real user surveys to test product iterations.",
        "Unlock customer insights for all projects, big or small, and anticipate customer behavior.",
      ],
      exampleTitle: "Skincare launch example",
      exampleDesc:
        "Simulate 10,000 French Gen Z consumers using real reviews, purchase data, and social trends. Watch them discover products, interact with influencers, and make decisions.",
      outcomes: [
        "Prioritize winning concepts before testing",
        "Predict adoption by customer segment", 
        "Faster iteration cycles",
      ],
      requirements: [
        {label:"Company data", desc: "CRM, prior surveys, reviews"},
        {label:"Syndicated data", desc: "market research, news"},
        {label:"Social trends", desc: "influencer content, social media"},
      ],
      metrics: [
        { number: "2×", label: "faster insights" },
        { number: "3x", label: "cheaper insights" },
        { number: "85%", label: "accuracy vs. real-world testing" },
      ]
    },
    {
      id: "mktg",
      title: "Marketing & Creative Effectiveness", 
      kicker: "Accelerate, Scale and Optimize Marketing",
      summary: [],
      marketingCards: [
        {title: "Forecast and optimize campaign performance pre-launch", desc: "Simulate audience sentiment to each part of your campaign. Eliminate guesswork and maximize ROI with real-time predictive insights."},
        {title: "Identify and activate high-value channels and audiences", desc: "Predict which segments are most qualified for acquisition, upsell, cross-sell, and win-back, and tailor experiences and channel allocation to resonate most with them."}
      ],
      metrics: [
        { number: "3×", label: "better ROI" },
        { number: "50%", label: "faster learning" },
        { number: "85%", label: "creative accuracy" }
      ]
    },
  ];

  const [active, setActive] = useState(useCases[0].id);
  const current = useCases.find((u) => u.id === active)!;

  return (
    <section id="solutions" className="section scroll-mt-16 md:scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="h1 font-normal font-helvetica text-center mb-4">Solutions</h2>
          <p className="sub max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed mb-4">
            From ingestion to decisions in minutes. We turn your data into digital twins of <br /> your customers, simulate behaviors, and deliver decision‑ready evidence.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          {useCases.map((u) => (
            <button
              key={u.id}
              onClick={() => setActive(u.id)}
              className={
                "px-8 py-3 border transition w-80 " +
                (active === u.id
                  ? "btn-gradient-dark text-white border-transparent shadow"
                  : "bg-transparent text-[hsl(var(--foreground))] border-[hsl(var(--border))] hover:bg-[hsl(var(--muted-foreground))]/10")
              }
              style={{ borderRadius: '50px' }}
              aria-pressed={active === u.id}
            >
              {u.title}
            </button>
          ))}
        </div>

        {/* Subtitle and text */}
        <div className="text-center mb-8">
          <h3 className="font-helvetica text-3xl md:text-5xl font-light mb-6">{current.title}</h3>
          <p className="sub text-xl md:text-2xl leading-relaxed mt-5 mb-4">{current.kicker}</p>
          <div className="max-w-4xl mx-auto space-y-1 text-md md:text-lg text-[hsl(var(--muted-foreground))]">
            {current.summary.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        {/* Conditional content based on use case */}
        {current.id === "mrpd" ? (
          /* Data requirements as pills for Product Development */
          <div className="mb-16">
            <div className="text-center mb-8">
              <p className="sub text-xl md:text-2xl mt-10 leading-relaxed">Training on extensive data sources</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
              {current.requirements?.map((req) => (
                <div key={req.label} className="relative glass-card glass-pill w-full max-w-xs">
                  <div className="glass-filter" />
                  <div className="glass-distortion-overlay" />
                  <div className="glass-overlay" />
                  <div className="glass-specular" />
                  <div className="glass-content p-4 flex flex-col items-center text-center">
                    <div className="font-helvetica text-xl font-semibold">{req.label}</div>
                    <p className="mt-1 text-[hsl(var(--muted))]">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Marketing cards side by side */
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
              {current.marketingCards?.map((card, index) => (
                <div key={index} className="relative glass-card rounded-xl p-8 md:p-10 min-h-[20rem]">
                  <div className="glass-filter" />
                  <div className="glass-distortion-overlay" />
                  <div className="glass-overlay" />
                  <div className="glass-specular" />
                  <div className="glass-content flex flex-col justify-center h-full">
                    <h4 className="font-helvetica text-2xl font-normal text-center mb-6">{card.title}</h4>
                    <p className="text-lg leading-relaxed text-center text-[hsl(var(--muted-foreground))]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact metrics - only show for Product Development */}
        {current.id === "mrpd" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-3">
                  {metric.number}
                </div>
                <p className="text-lg md:text-xl font-medium text-[hsl(var(--foreground))]">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
