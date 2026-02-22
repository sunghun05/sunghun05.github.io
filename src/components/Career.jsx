import React from "react";
import { career } from "../data";

const Career = () => {
    return (
        <section id="career" className="border-t border-[#ccc] pt-6 mb-8">
            <h2 className="font-['Crimson_Text',serif] text-2xl font-semibold text-[#8b0000] mb-4">
                Career
            </h2>
            <div className="space-y-4">
                {career.map((job, index) => (
                    <div key={index} className="flex justify-between items-start gap-4">
                        <div>
                            <p className="font-semibold text-[#111]">{job.role}</p>
                            <p className="text-[#555]">{job.company}</p>
                            {job.description && (
                                <p className="text-sm text-[#666] mt-1">{job.description}</p>
                            )}
                        </div>
                        <span className="text-sm text-[#888] whitespace-nowrap flex-shrink-0">
                            {job.duration}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;
