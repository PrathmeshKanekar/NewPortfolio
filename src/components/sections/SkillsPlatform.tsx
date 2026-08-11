"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animation-variants";

interface SkillItem {
  name: string;
  proficiency: number;
}

interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export function SkillsPlatform({ groups }: { groups: SkillGroup[] }) {
  if (!groups || groups.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-[color:var(--color-border-subtle)] text-[color:var(--color-text-secondary)]">
        No skills configured.
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {groups.map((group, idx) => (
        <motion.div
          key={group.category}
          variants={fadeUpVariants}
          className="p-6 rounded-2xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-surface-sunken)] shadow-sm flex flex-col"
        >
          <h3 className="font-semibold text-lg text-[color:var(--color-text-primary)] mb-4">{group.category}</h3>
          <ul className="space-y-4 flex-1">
            {group.skills.map((skill, i) => (
              <li key={i} className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-[color:var(--color-text-secondary)]">{skill.name}</span>
                  <span className="text-[color:var(--color-text-tertiary)]">{skill.proficiency}%</span>
                </div>
                <div className="h-1.5 w-full bg-[color:var(--color-surface-hover)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-[color:var(--color-accent-default)] rounded-full"
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
