import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Database, PenTool, Code2 } from 'lucide-react';
import { skillSvgs, langs, dbs, frameworks, tools, getSkillIconKey } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const renderSkillSection = (title: string, skills: string[], icon: React.ReactNode) => (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-primary">{icon}</span>
        <h3 className="font-title text-2xl text-foreground">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => {
          const iconKey = getSkillIconKey(skill);
          const svgContent = iconKey ? skillSvgs[iconKey] : null;

          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.05, borderColor: 'var(--primary)' }}
              className="flex flex-col items-center justify-center p-2 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary),0.15)] transition-all group h-28"
            >
              <div className="w-8 h-8 mb-2 text-foreground/80 group-hover:text-primary transition-colors duration-300">
                {svgContent ? (
                  <div dangerouslySetInnerHTML={{ __html: svgContent }} className="w-full h-full fill-current" />
                ) : (
                  <Code2 className="w-full h-full" />
                )}
              </div>
              <span className="font-medium text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">{skill}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-20">
      <h2 className="font-title text-4xl text-foreground mb-12 text-center">Technical Arsenal</h2>

      {renderSkillSection("Languages & Web Technologies", langs, <Terminal size={24} />)}
      {renderSkillSection("Frameworks", frameworks, <Layout size={24} />)}
      {renderSkillSection("Database & tools", dbs, <Database size={24} />)}
      {renderSkillSection("Project Tools", tools, <PenTool size={24} />)}

    </div>
  );
};