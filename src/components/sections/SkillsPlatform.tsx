"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animation-variants";

interface SkillItem {
  name: string;
  proficiency: string;
  level: number;
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
          <h3 className="font-mono text-sm uppercase tracking-wider text-[color:var(--color-text-tertiary)] mb-4">{group.category}</h3>
          <ul className="space-y-2 flex-1">
            {group.skills.map((skill, i) => (
              <li key={i} className="flex justify-between items-center text-sm">
                <span className="font-medium text-[color:var(--color-text-primary)]">{skill.name}</span>
                <span className="text-[10px] text-[color:var(--color-text-tertiary)] bg-[color:var(--color-surface-hover)] px-2 py-0.5 rounded-full">
                  {skill.proficiency}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
