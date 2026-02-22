import React from "react";
import { awards } from "../data";

const Awards = () => {
    return (
        <section id="awards" className="border-t border-[#ccc] pt-6 mb-8">
            <h2 className="font-['Crimson_Text',serif] text-2xl font-semibold text-[#8b0000] mb-4">
                Awards &amp; Honors
            </h2>
            <div className="space-y-4">
                {awards.map((award, index) => (
                    <div key={index} className="flex justify-between items-start gap-4">
                        <div>
                            <p className="font-semibold text-[#111]">{award.title}</p>
                            <p className="text-[#555] text-sm">{award.organization}</p>
                            {award.description && (
                                <p className="text-sm text-[#666] mt-0.5">{award.description}</p>
                            )}
                        </div>
                        <span className="text-sm text-[#888] whitespace-nowrap flex-shrink-0">
                            {award.date}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
