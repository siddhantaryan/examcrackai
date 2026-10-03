import type { Syllabus } from '@/types';

export const NEET_SYLLABUS: Syllabus = {
  trackId: 'neet',
  trackName: 'NEET - Physics, Chemistry, Biology',
  subjects: [
    {
      id: 'neet-phy',
      name: 'Physics',
      units: [
        {
          id: 'nphy-u1',
          name: 'Mechanics',
          chapters: [
            {
              id: 'nphy-ch1',
              name: 'Units, Dimensions and Motion',
              description: 'SI units, dimensional analysis, motion in straight line and plane, projectile motion.',
              importantConcepts: ['SI Units', 'Dimensional Analysis', 'Kinematics', 'Projectile Motion', 'Relative Velocity'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nphy-ch1-t1', name: 'Units and Dimensions' },
                { id: 'nphy-ch1-t2', name: 'Motion in a Straight Line' },
                { id: 'nphy-ch1-t3', name: 'Motion in a Plane and Projectile' },
              ],
            },
            {
              id: 'nphy-ch2',
              name: 'Laws of Motion and Friction',
              description: 'Newton\u2019s laws, friction, circular motion, banking of roads.',
              importantConcepts: ['Newton\u2019s Laws', 'Friction', 'Circular Motion', 'Banking of Roads', 'Pseudo Force'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nphy-ch2-t1', name: 'Newton\u2019s Laws of Motion' },
                { id: 'nphy-ch2-t2', name: 'Friction' },
                { id: 'nphy-ch2-t3', name: 'Circular Motion and Banking' },
              ],
            },
            {
              id: 'nphy-ch3',
              name: 'Work, Energy and Power',
              description: 'Work-energy theorem, conservation of energy, collisions, power.',
              importantConcepts: ['Work', 'Kinetic Energy', 'Potential Energy', 'Collisions', 'Power', 'Conservation of Energy'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nphy-ch3-t1', name: 'Work and Energy' },
                { id: 'nphy-ch3-t2', name: 'Collisions' },
                { id: 'nphy-ch3-t3', name: 'Power and Energy Conservation' },
              ],
            },
            {
              id: 'nphy-ch4',
              name: 'Rotational Motion and Gravitation',
              description: 'Moment of inertia, torque, angular momentum, Kepler\u2019s laws, satellites.',
              importantConcepts: ['Moment of Inertia', 'Torque', 'Angular Momentum', 'Kepler\u2019s Laws', 'Escape Velocity'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nphy-ch4-t1', name: 'Rotational Motion' },
                { id: 'nphy-ch4-t2', name: 'Gravitation and Satellites' },
              ],
            },
          ],
        },
        {
          id: 'nphy-u2',
          name: 'Thermodynamics, Fluids and Oscillations',
          chapters: [
            {
              id: 'nphy-ch5',
              name: 'Properties of Matter and Fluids',
              description: 'Elasticity, surface tension, viscosity, Bernoulli\u2019s principle, pressure.',
              importantConcepts: ['Elasticity', 'Young\u2019s Modulus', 'Surface Tension', 'Viscosity', 'Bernoulli\u2019s Principle'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nphy-ch5-t1', name: 'Elasticity' },
                { id: 'nphy-ch5-t2', name: 'Surface Tension and Viscosity' },
                { id: 'nphy-ch5-t3', name: 'Fluid Dynamics and Bernoulli\u2019s Principle' },
              ],
            },
            {
              id: 'nphy-ch6',
              name: 'Thermodynamics and KTG',
              description: 'Laws of thermodynamics, kinetic theory of gases, heat transfer.',
              importantConcepts: ['Laws of Thermodynamics', 'Kinetic Theory', 'Heat Transfer', 'Carnot Cycle'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nphy-ch6-t1', name: 'Laws of Thermodynamics' },
                { id: 'nphy-ch6-t2', name: 'Kinetic Theory of Gases' },
                { id: 'nphy-ch6-t3', name: 'Heat Transfer' },
              ],
            },
            {
              id: 'nphy-ch7',
              name: 'Oscillations and Waves',
              description: 'SHM, wave motion, sound waves, Doppler effect.',
              importantConcepts: ['SHM', 'Wave Motion', 'Sound Waves', 'Doppler Effect', 'Resonance'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nphy-ch7-t1', name: 'Simple Harmonic Motion' },
                { id: 'nphy-ch7-t2', name: 'Wave Motion and Sound' },
                { id: 'nphy-ch7-t3', name: 'Doppler Effect' },
              ],
            },
          ],
        },
        {
          id: 'nphy-u3',
          name: 'Electromagnetism',
          chapters: [
            {
              id: 'nphy-ch8',
              name: 'Electrostatics and Capacitance',
              description: 'Coulomb\u2019s law, electric field, Gauss\u2019s law, potential, capacitors.',
              importantConcepts: ['Coulomb\u2019s Law', 'Electric Field', 'Gauss\u2019s Law', 'Electric Potential', 'Capacitance'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nphy-ch8-t1', name: 'Electric Field and Gauss\u2019s Law' },
                { id: 'nphy-ch8-t2', name: 'Electric Potential and Capacitance' },
              ],
            },
            {
              id: 'nphy-ch9',
              name: 'Current Electricity',
              description: 'Ohm\u2019s law, Kirchhoff\u2019s laws, Wheatstone bridge, potentiometer.',
              importantConcepts: ['Ohm\u2019s Law', 'Kirchhoff\u2019s Laws', 'Wheatstone Bridge', 'Potentiometer'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nphy-ch9-t1', name: 'Ohm\u2019s Law and Resistance' },
                { id: 'nphy-ch9-t2', name: 'Kirchhoff\u2019s Laws and Wheatstone Bridge' },
              ],
            },
            {
              id: 'nphy-ch10',
              name: 'Magnetic Effects and EMI',
              description: 'Biot-Savart, Ampere\u2019s law, electromagnetic induction, AC circuits.',
              importantConcepts: ['Biot-Savart Law', 'Ampere\u2019s Law', 'EMI', 'AC Circuits', 'Transformer'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nphy-ch10-t1', name: 'Magnetic Field and Force' },
                { id: 'nphy-ch10-t2', name: 'Electromagnetic Induction' },
                { id: 'nphy-ch10-t3', name: 'AC Circuits and Transformers' },
              ],
            },
          ],
        },
        {
          id: 'nphy-u4',
          name: 'Optics and Modern Physics',
          chapters: [
            {
              id: 'nphy-ch11',
              name: 'Ray and Wave Optics',
              description: 'Reflection, refraction, lenses, interference, diffraction, polarization.',
              importantConcepts: ['Reflection', 'Refraction', 'Lens Formula', 'Interference', 'Diffraction', 'Polarization'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nphy-ch11-t1', name: 'Ray Optics' },
                { id: 'nphy-ch11-t2', name: 'Wave Optics and Interference' },
              ],
            },
            {
              id: 'nphy-ch12',
              name: 'Modern Physics and Semiconductors',
              description: 'Photoelectric effect, Bohr model, nuclear physics, semiconductors, logic gates.',
              importantConcepts: ['Photoelectric Effect', 'Bohr Model', 'Nuclear Physics', 'Semiconductors', 'Logic Gates'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nphy-ch12-t1', name: 'Photoelectric Effect and Dual Nature' },
                { id: 'nphy-ch12-t2', name: 'Atomic and Nuclear Physics' },
                { id: 'nphy-ch12-t3', name: 'Semiconductors and Logic Gates' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'neet-chem',
      name: 'Chemistry',
      units: [
        {
          id: 'nchem-u1',
          name: 'Physical Chemistry',
          chapters: [
            {
              id: 'nchem-ch1',
              name: 'Basic Concepts and Atomic Structure',
              description: 'Mole concept, stoichiometry, atomic structure, quantum numbers.',
              importantConcepts: ['Mole Concept', 'Stoichiometry', 'Bohr\u2019s Model', 'Quantum Numbers', 'Electronic Configuration'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nchem-ch1-t1', name: 'Mole Concept and Stoichiometry' },
                { id: 'nchem-ch1-t2', name: 'Atomic Structure and Quantum Numbers' },
              ],
            },
            {
              id: 'nchem-ch2',
              name: 'Chemical Bonding',
              description: 'Ionic, covalent bonds, VSEPR, hybridization, intermolecular forces.',
              importantConcepts: ['Ionic Bond', 'Covalent Bond', 'VSEPR', 'Hybridization', 'Hydrogen Bonding'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nchem-ch2-t1', name: 'Types of Bonds and VSEPR' },
                { id: 'nchem-ch2-t2', name: 'Hybridization and Intermolecular Forces' },
              ],
            },
            {
              id: 'nchem-ch3',
              name: 'Thermodynamics and Equilibrium',
              description: 'Enthalpy, entropy, Gibbs energy, chemical equilibrium, ionic equilibrium.',
              importantConcepts: ['Enthalpy', 'Entropy', 'Gibbs Energy', 'Chemical Equilibrium', 'Ionic Equilibrium', 'pH'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nchem-ch3-t1', name: 'Thermodynamics' },
                { id: 'nchem-ch3-t2', name: 'Chemical and Ionic Equilibrium' },
              ],
            },
            {
              id: 'nchem-ch4',
              name: 'Electrochemistry and Kinetics',
              description: 'Galvanic cells, electrode potential, Nernst equation, rate of reaction.',
              importantConcepts: ['Galvanic Cell', 'Nernst Equation', 'Rate of Reaction', 'Arrhenius Equation'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nchem-ch4-t1', name: 'Electrochemistry' },
                { id: 'nchem-ch4-t2', name: 'Chemical Kinetics' },
              ],
            },
          ],
        },
        {
          id: 'nchem-u2',
          name: 'Inorganic Chemistry',
          chapters: [
            {
              id: 'nchem-ch5',
              name: 'Periodic Table and s-Block',
              description: 'Periodic trends, alkali metals, alkaline earth metals.',
              importantConcepts: ['Periodic Trends', 'Atomic Radius', 'Ionization Energy', 's-Block Elements'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nchem-ch5-t1', name: 'Periodic Properties' },
                { id: 'nchem-ch5-t2', name: 's-Block Elements' },
              ],
            },
            {
              id: 'nchem-ch6',
              name: 'p-Block Elements',
              description: 'Groups 13-18 elements, their properties, compounds, and reactions.',
              importantConcepts: ['p-Block Elements', 'Group 13-14', 'Group 15-16', 'Group 17-18', 'Important Compounds'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nchem-ch6-t1', name: 'Group 13-14 Elements' },
                { id: 'nchem-ch6-t2', name: 'Group 15-16 Elements' },
                { id: 'nchem-ch6-t3', name: 'Group 17-18 Elements' },
              ],
            },
            {
              id: 'nchem-ch7',
              name: 'd-Block, f-Block and Coordination Compounds',
              description: 'Transition metals, lanthanides, actinides, coordination chemistry, CFT.',
              importantConcepts: ['Transition Metals', 'Lanthanides', 'Coordination Compounds', 'Crystal Field Theory', 'Isomerism'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nchem-ch7-t1', name: 'd and f-Block Elements' },
                { id: 'nchem-ch7-t2', name: 'Coordination Compounds' },
              ],
            },
          ],
        },
        {
          id: 'nchem-u3',
          name: 'Organic Chemistry',
          chapters: [
            {
              id: 'nchem-ch8',
              name: 'Organic Basics and Hydrocarbons',
              description: 'Nomenclature, isomerism, reaction mechanisms, alkanes, alkenes, alkynes, aromatics.',
              importantConcepts: ['IUPAC Nomenclature', 'Isomerism', 'Inductive Effect', 'Alkanes', 'Alkenes', 'Aromatic Compounds'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nchem-ch8-t1', name: 'Nomenclature and Isomerism' },
                { id: 'nchem-ch8-t2', name: 'Hydrocarbons and Aromatics' },
              ],
            },
            {
              id: 'nchem-ch9',
              name: 'Functional Groups and Biomolecules',
              description: 'Alcohols, aldehydes, ketones, acids, amines, biomolecules, polymers.',
              importantConcepts: ['Alcohols', 'Aldehydes', 'Ketones', 'Carboxylic Acids', 'Amines', 'Carbohydrates', 'Proteins'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nchem-ch9-t1', name: 'Oxygen-Containing Groups' },
                { id: 'nchem-ch9-t2', name: 'Nitrogen-Containing Groups' },
                { id: 'nchem-ch9-t3', name: 'Biomolecules and Polymers' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'neet-bio',
      name: 'Biology',
      units: [
        {
          id: 'nbio-u1',
          name: 'Diversity in Living World and Plant Physiology',
          chapters: [
            {
              id: 'nbio-ch1',
              name: 'Diversity in Living World',
              description: 'Classification, five kingdom system, plant and animal classification.',
              importantConcepts: ['Classification', 'Five Kingdom System', 'Plant Kingdom', 'Animal Kingdom', 'Binomial Nomenclature'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nbio-ch1-t1', name: 'Classification of Organisms' },
                { id: 'nbio-ch1-t2', name: 'Plant Kingdom' },
                { id: 'nbio-ch1-t3', name: 'Animal Kingdom' },
              ],
            },
            {
              id: 'nbio-ch2',
              name: 'Plant Physiology',
              description: 'Photosynthesis, respiration, transport in plants, mineral nutrition, plant growth.',
              importantConcepts: ['Photosynthesis', 'Respiration', 'Transport in Plants', 'Mineral Nutrition', 'Plant Hormones'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nbio-ch2-t1', name: 'Photosynthesis' },
                { id: 'nbio-ch2-t2', name: 'Respiration in Plants' },
                { id: 'nbio-ch2-t3', name: 'Transport and Nutrition in Plants' },
              ],
            },
          ],
        },
        {
          id: 'nbio-u2',
          name: 'Human Physiology',
          chapters: [
            {
              id: 'nbio-ch3',
              name: 'Digestion and Absorption',
              description: 'Digestive system, enzymes, absorption, nutritional disorders.',
              importantConcepts: ['Digestive System', 'Enzymes', 'Absorption', 'Nutritional Disorders', 'Balanced Diet'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nbio-ch3-t1', name: 'Digestive System and Enzymes' },
                { id: 'nbio-ch3-t2', name: 'Absorption and Disorders' },
              ],
            },
            {
              id: 'nbio-ch4',
              name: 'Breathing and Respiration',
              description: 'Respiratory system, gas exchange, transport of gases, respiratory disorders.',
              importantConcepts: ['Respiratory System', 'Gas Exchange', 'Transport of Oxygen', 'Respiratory Disorders'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nbio-ch4-t1', name: 'Respiratory System and Gas Exchange' },
                { id: 'nbio-ch4-t2', name: 'Transport of Gases and Disorders' },
              ],
            },
            {
              id: 'nbio-ch5',
              name: 'Body Fluids and Circulation',
              description: 'Blood, lymph, heart, cardiac cycle, double circulation, disorders.',
              importantConcepts: ['Blood', 'Lymph', 'Heart', 'Cardiac Cycle', 'Double Circulation', 'Blood Groups'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nbio-ch5-t1', name: 'Blood and Lymph' },
                { id: 'nbio-ch5-t2', name: 'Heart and Circulation' },
              ],
            },
            {
              id: 'nbio-ch6',
              name: 'Excretory System',
              description: 'Kidney, nephron, urine formation, osmoregulation, excretory disorders.',
              importantConcepts: ['Kidney', 'Nephron', 'Urine Formation', 'Osmoregulation', 'Dialysis'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nbio-ch6-t1', name: 'Kidney and Nephron' },
                { id: 'nbio-ch6-t2', name: 'Urine Formation and Osmoregulation' },
              ],
            },
            {
              id: 'nbio-ch7',
              name: 'Nervous System and Endocrine',
              description: 'Neurons, nerve impulse, CNS, PNS, endocrine glands, hormones.',
              importantConcepts: ['Neuron', 'Nerve Impulse', 'CNS', 'PNS', 'Endocrine Glands', 'Hormones'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nbio-ch7-t1', name: 'Nervous System' },
                { id: 'nbio-ch7-t2', name: 'Endocrine System and Hormones' },
              ],
            },
          ],
        },
        {
          id: 'nbio-u3',
          name: 'Genetics and Evolution',
          chapters: [
            {
              id: 'nbio-ch8',
              name: 'Cell Biology and Cell Division',
              description: 'Cell structure, organelles, cell cycle, mitosis, meiosis.',
              importantConcepts: ['Cell Organelles', 'Cell Cycle', 'Mitosis', 'Meiosis', 'Cell Membrane'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nbio-ch8-t1', name: 'Cell Structure and Organelles' },
                { id: 'nbio-ch8-t2', name: 'Cell Cycle, Mitosis and Meiosis' },
              ],
            },
            {
              id: 'nbio-ch9',
              name: 'Molecular Basis of Inheritance',
              description: 'DNA, RNA, replication, transcription, translation, genetic code, gene expression.',
              importantConcepts: ['DNA', 'RNA', 'Replication', 'Transcription', 'Translation', 'Genetic Code'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nbio-ch9-t1', name: 'DNA and RNA Structure' },
                { id: 'nbio-ch9-t2', name: 'Replication, Transcription and Translation' },
                { id: 'nbio-ch9-t3', name: 'Gene Expression and Regulation' },
              ],
            },
            {
              id: 'nbio-ch10',
              name: 'Heredity and Evolution',
              description: 'Mendel\u2019s laws, sex determination, linkage, evolution, natural selection, speciation.',
              importantConcepts: ['Mendel\u2019s Laws', 'Sex Determination', 'Linkage', 'Evolution', 'Natural Selection', 'Speciation'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nbio-ch10-t1', name: 'Mendelian Genetics' },
                { id: 'nbio-ch10-t2', name: 'Evolution and Natural Selection' },
              ],
            },
          ],
        },
        {
          id: 'nbio-u4',
          name: 'Reproduction, Biotechnology and Ecology',
          chapters: [
            {
              id: 'nbio-ch11',
              name: 'Reproduction in Organisms',
              description: 'Asexual and sexual reproduction, human reproduction, reproductive health.',
              importantConcepts: ['Asexual Reproduction', 'Sexual Reproduction', 'Human Reproductive System', 'Reproductive Health'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nbio-ch11-t1', name: 'Plant Reproduction' },
                { id: 'nbio-ch11-t2', name: 'Human Reproduction' },
                { id: 'nbio-ch11-t3', name: 'Reproductive Health' },
              ],
            },
            {
              id: 'nbio-ch12',
              name: 'Biotechnology and Its Applications',
              description: 'Biotechnology principles, recombinant DNA, applications in agriculture and medicine.',
              importantConcepts: ['Recombinant DNA', 'Biotechnology Tools', 'GMOs', 'Gene Therapy', 'Biotechnology Applications'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'nbio-ch12-t1', name: 'Principles of Biotechnology' },
                { id: 'nbio-ch12-t2', name: 'Applications of Biotechnology' },
              ],
            },
            {
              id: 'nbio-ch13',
              name: 'Ecology and Environment',
              description: 'Ecosystem, biodiversity, environmental issues, conservation.',
              importantConcepts: ['Ecosystem', 'Biodiversity', 'Food Chain', 'Environmental Issues', 'Conservation'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'nbio-ch13-t1', name: 'Ecosystem and Biodiversity' },
                { id: 'nbio-ch13-t2', name: 'Environmental Issues and Conservation' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
