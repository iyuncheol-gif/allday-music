import { faqItems } from "@/constants";

export default function FAQ() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-white" id="faq">
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-text-main mb-2 md:mb-4">
            자주 묻는 질문
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3 md:gap-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group bg-white border border-border-light rounded-xl open:border-primary/50 transition-all shadow-sm"
            >
              <summary className="flex justify-between items-center p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-text-main">
                <span className="pr-4">{item.question}</span>
                <span className="material-symbols-outlined text-gray-400 group-open:text-primary transition-transform group-open:rotate-180 shrink-0">
                  expand_more
                </span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-text-muted leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
