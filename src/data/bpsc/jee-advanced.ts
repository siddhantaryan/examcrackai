import type { Syllabus } from '@/types';

export const JEE_ADVANCED_SYLLABUS: Syllabus = {
  trackId: 'jee-advanced',
  trackName: 'JEE Advanced - Physics, Chemistry, Mathematics',
  subjects: [
    {
      id: 'jea-phy',
      name: 'Physics',
      units: [
        {
          id: 'jeaphy-u1',
          name: 'Mechanics',
          chapters: [
            {
              id: 'jeaphy-ch1',
              name: 'Advanced Mechanics',
              description: 'Newton\u2019s laws, constrained motion, pseudo forces, spring-mass systems.',
              importantConcepts: ['Constrained Motion', 'Pseudo Forces', 'Spring-Mass Systems', 'Pulley Systems', 'Constraint Relations'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeaphy-ch1-t1', name: 'Constrained Motion and Pulleys' },
                { id: 'jeaphy-ch1-t2', name: 'Spring-Mass Systems' },
                { id: 'jeaphy-ch1-t3', name: 'Pseudo Forces and Non-Inertial Frames' },
              ],
            },
            {
              id: 'jeaphy-ch2',
              name: 'Rotational Dynamics',
              description: 'Advanced rotational motion, angular momentum conservation, rolling with slipping.',
              importantConcepts: ['Angular Momentum Conservation', 'Rolling with Slipping', 'Toppling', 'Hinge Forces'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeaphy-ch2-t1', name: 'Angular Momentum Conservation' },
                { id: 'jeaphy-ch2-t2', name: 'Rolling and Toppling' },
                { id: 'jeaphy-ch2-t3', name: 'Hinge Forces and Collision' },
              ],
            },
            {
              id: 'jeaphy-ch3',
              name: 'Gravitation and Central Forces',
              description: 'Gravitational potential energy, orbital mechanics, central force motion.',
              importantConcepts: ['Gravitational PE', 'Orbital Mechanics', 'Central Forces', 'Binet Equation', 'Escape Velocity'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeaphy-ch3-t1', name: 'Gravitational Field and Potential' },
                { id: 'jeaphy-ch3-t2', name: 'Orbital Mechanics' },
              ],
            },
          ],
        },
        {
          id: 'jeaphy-u2',
          name: 'Electromagnetism and Optics',
          chapters: [
            {
              id: 'jeaphy-ch4',
              name: 'Advanced Electrostatics',
              description: 'Method of images, multipole expansion, field energy.',
              importantConcepts: ['Method of Images', 'Multipole Expansion', 'Gauss\u2019s Law Applications', 'Field Energy', 'Dielectrics'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeaphy-ch4-t1', name: 'Method of Images' },
                { id: 'jeaphy-ch4-t2', name: 'Dielectrics and Capacitors' },
                { id: 'jeaphy-ch4-t3', name: 'Field Energy' },
              ],
            },
            {
              id: 'jeaphy-ch5',
              name: 'Advanced Electromagnetism',
              description: 'Magnetic fields, Biot-Savart, Ampere\u2019s law, electromagnetic induction.',
              importantConcepts: ['Biot-Savart Law', 'Ampere\u2019s Law', 'Self/Mutual Induction', 'LCR Circuits', 'RL Circuits'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeaphy-ch5-t1', name: 'Magnetic Fields and Forces' },
                { id: 'jeaphy-ch5-t2', name: 'Electromagnetic Induction' },
                { id: 'jeaphy-ch5-t3', name: 'LCR and RL Circuits' },
              ],
            },
            {
              id: 'jeaphy-ch6',
              name: 'Wave Optics and Modern Physics',
              description: 'YDSE, diffraction, polarization, photoelectric effect, Bohr model, nuclear physics.',
              importantConcepts: ['YDSE', 'Diffraction', 'Polarization', 'Photoelectric Effect', 'Bohr Model', 'Nuclear Physics'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeaphy-ch6-t1', name: 'YDSE and Diffraction' },
                { id: 'jeaphy-ch6-t2', name: 'Polarization' },
                { id: 'jeaphy-ch6-t3', name: 'Modern Physics and Nuclear' },
              ],
            },
          ],
        },
        {
          id: 'jeaphy-u3',
          name: 'Thermodynamics and Fluid Mechanics',
          chapters: [
            {
              id: 'jeaphy-ch7',
              name: 'Thermodynamics',
              description: 'Laws of thermodynamics, entropy, heat engines, KTG.',
              importantConcepts: ['Laws of Thermodynamics', 'Entropy', 'Heat Engines', 'Carnot Cycle', 'Kinetic Theory'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeaphy-ch7-t1', name: 'Laws and Entropy' },
                { id: 'jeaphy-ch7-t2', name: 'Heat Engines and Carnot Cycle' },
              ],
            },
            {
              id: 'jeaphy-ch8',
              name: 'Fluid Mechanics and SHM',
              description: 'Bernoulli\u2019s principle, surface tension, viscosity, SHM, waves.',
              importantConcepts: ['Bernoulli\u2019s Principle', 'Surface Tension', 'Viscosity', 'SHM', 'Wave Motion', 'Doppler Effect'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeaphy-ch8-t1', name: 'Fluid Mechanics' },
                { id: 'jeaphy-ch8-t2', name: 'SHM and Waves' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jea-chem',
      name: 'Chemistry',
      units: [
        {
          id: 'jeachem-u1',
          name: 'Physical Chemistry',
          chapters: [
            {
              id: 'jeachem-ch1',
              name: 'Mole Concept and Stoichiometry',
              description: 'Advanced stoichiometry, limiting reagents, concentration terms.',
              importantConcepts: ['Mole Concept', 'Limiting Reagent', 'Molarity', 'Molality', 'Normality'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch1-t1', name: 'Advanced Stoichiometry' },
                { id: 'jeachem-ch1-t2', name: 'Concentration Terms' },
              ],
            },
            {
              id: 'jeachem-ch2',
              name: 'Atomic Structure and Chemical Bonding',
              description: 'Quantum mechanics, MO theory, hybridization, VSEPR.',
              importantConcepts: ['Quantum Numbers', 'MO Theory', 'Hybridization', 'VSEPR', 'Bond Order'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch2-t1', name: 'Atomic Structure' },
                { id: 'jeachem-ch2-t2', name: 'Chemical Bonding and MO Theory' },
              ],
            },
            {
              id: 'jeachem-ch3',
              name: 'Thermodynamics, Equilibrium and Kinetics',
              description: 'Gibbs energy, chemical equilibrium, electrochemistry, reaction kinetics.',
              importantConcepts: ['Gibbs Energy', 'Equilibrium Constant', 'Nernst Equation', 'Arrhenius Equation', 'Rate Law'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch3-t1', name: 'Thermodynamics and Equilibrium' },
                { id: 'jeachem-ch3-t2', name: 'Electrochemistry and Kinetics' },
              ],
            },
          ],
        },
        {
          id: 'jeachem-u2',
          name: 'Inorganic Chemistry',
          chapters: [
            {
              id: 'jeachem-ch4',
              name: 'Periodic Table and p-Block',
              description: 'Periodic trends, p-block elements and their compounds.',
              importantConcepts: ['Periodic Trends', 'p-Block Elements', 'Allotropes', 'Interhalogen Compounds'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch4-t1', name: 'Periodic Properties' },
                { id: 'jeachem-ch4-t2', name: 'p-Block Chemistry' },
              ],
            },
            {
              id: 'jeachem-ch5',
              name: 'd-f Block and Coordination Chemistry',
              description: 'Transition metals, lanthanides, coordination compounds, CFT, MOT.',
              importantConcepts: ['Transition Metals', 'Lanthanides', 'Coordination Compounds', 'Crystal Field Theory', 'Isomerism'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch5-t1', name: 'd-f Block Elements' },
                { id: 'jeachem-ch5-t2', name: 'Coordination Chemistry' },
              ],
            },
            {
              id: 'jeachem-ch6',
              name: 'Qualitative Salt Analysis',
              description: 'Systematic qualitative analysis of cations and anions.',
              importantConcepts: ['Cation Analysis', 'Anion Analysis', 'Group Separation', 'Flame Tests'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch6-t1', name: 'Cation Analysis' },
                { id: 'jeachem-ch6-t2', name: 'Anion Analysis' },
              ],
            },
          ],
        },
        {
          id: 'jeachem-u3',
          name: 'Organic Chemistry',
          chapters: [
            {
              id: 'jeachem-ch7',
              name: 'General Organic Chemistry',
              description: 'Reaction mechanisms, intermediates, electronic effects, isomerism.',
              importantConcepts: ['Inductive Effect', 'Resonance', 'Hyperconjugation', 'Carbocations', 'Carbanions', 'Free Radicals'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch7-t1', name: 'Electronic Effects and Intermediates' },
                { id: 'jeachem-ch7-t2', name: 'Isomerism and Reaction Mechanisms' },
              ],
            },
            {
              id: 'jeachem-ch8',
              name: 'Hydrocarbons and Reaction Mechanisms',
              description: 'Alkanes, alkenes, alkynes, aromatic compounds, electrophilic substitution.',
              importantConcepts: ['Electrophilic Addition', 'Electrophilic Substitution', 'Markovnikov Rule', 'Friedel-Crafts'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch8-t1', name: 'Alkenes and Alkynes' },
                { id: 'jeachem-ch8-t2', name: 'Aromatic Compounds' },
              ],
            },
            {
              id: 'jeachem-ch9',
              name: 'Functional Groups and Biomolecules',
              description: 'Alcohols, aldehydes, ketones, acids, amines, biomolecules.',
              importantConcepts: ['Alcohols', 'Aldehydes and Ketones', 'Carboxylic Acids', 'Amines', 'Carbohydrates', 'Proteins'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeachem-ch9-t1', name: 'Oxygen-Containing Functional Groups' },
                { id: 'jeachem-ch9-t2', name: 'Nitrogen-Containing Functional Groups' },
                { id: 'jeachem-ch9-t3', name: 'Biomolecules' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jea-math',
      name: 'Mathematics',
      units: [
        {
          id: 'jeamath-u1',
          name: 'Algebra',
          chapters: [
            {
              id: 'jeamath-ch1',
              name: 'Functions and Relations',
              description: 'Types of functions, composition, inverse, domain, range.',
              importantConcepts: ['One-One', 'Onto', 'Bijective', 'Composition', 'Inverse Functions'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch1-t1', name: 'Types of Functions' },
                { id: 'jeamath-ch1-t2', name: 'Composition and Inverse' },
              ],
            },
            {
              id: 'jeamath-ch2',
              name: 'Complex Numbers',
              description: 'Polar form, De Moivre\u2019s theorem, roots of unity, geometry.',
              importantConcepts: ['Polar Form', 'De Moivre\u2019s Theorem', 'Roots of Unity', 'Argand Plane Geometry'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch2-t1', name: 'Complex Numbers and Polar Form' },
                { id: 'jeamath-ch2-t2', name: 'De Moivre\u2019s Theorem and Roots' },
              ],
            },
            {
              id: 'jeamath-ch3',
              name: 'Quadratic Equations and Sequences',
              description: 'Quadratic equations, AP, GP, HP, AM-GM-HM inequality, telescoping series.',
              importantConcepts: ['Quadratic Equations', 'AP/GP/HP', 'AM-GM-HM Inequality', 'Telescoping Series'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch3-t1', name: 'Quadratic Equations' },
                { id: 'jeamath-ch3-t2', name: 'Sequences and Series' },
              ],
            },
            {
              id: 'jeamath-ch4',
              name: 'Permutations, Combinations and Binomial',
              description: 'Advanced counting, multinomial theorem, binomial for any index.',
              importantConcepts: ['Multinomial Theorem', 'Circular Permutations', 'Binomial for Any Index', 'General Term'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch4-t1', name: 'Advanced Counting' },
                { id: 'jeamath-ch4-t2', name: 'Binomial Theorem' },
              ],
            },
            {
              id: 'jeamath-ch5',
              name: 'Matrices and Determinants',
              description: 'Matrix algebra, determinants, system of equations, rank.',
              importantConcepts: ['Matrix Operations', 'Determinants', 'Adjoint', 'Inverse', 'Rank of Matrix'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch5-t1', name: 'Matrices and Operations' },
                { id: 'jeamath-ch5-t2', name: 'Determinants and Systems' },
              ],
            },
          ],
        },
        {
          id: 'jeamath-u2',
          name: 'Calculus',
          chapters: [
            {
              id: 'jeamath-ch6',
              name: 'Limits, Continuity and Differentiability',
              description: 'Advanced limits, continuity, differentiability, L\u2019Hopital\u2019s rule.',
              importantConcepts: ['Sandwich Theorem', 'L\u2019Hopital\u2019s Rule', 'Differentiability', 'Modulus Functions'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch6-t1', name: 'Advanced Limits' },
                { id: 'jeamath-ch6-t2', name: 'Continuity and Differentiability' },
              ],
            },
            {
              id: 'jeamath-ch7',
              name: 'Differentiation and AOD',
              description: 'Derivatives, maxima-minima, Rolle\u2019s and LMVT, tangents and normals.',
              importantConcepts: ['Derivatives', 'Maxima-Minima', 'Rolle\u2019s Theorem', 'LMVT', 'Tangents and Normals'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch7-t1', name: 'Differentiation' },
                { id: 'jeamath-ch7-t2', name: 'Applications of Derivatives' },
              ],
            },
            {
              id: 'jeamath-ch8',
              name: 'Integration and Applications',
              description: 'Integration techniques, definite integrals, area, differential equations.',
              importantConcepts: ['Integration by Parts', 'Partial Fractions', 'Definite Integrals', 'Area', 'Differential Equations'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch8-t1', name: 'Integration Techniques' },
                { id: 'jeamath-ch8-t2', name: 'Definite Integrals and Area' },
                { id: 'jeamath-ch8-t3', name: 'Differential Equations' },
              ],
            },
          ],
        },
        {
          id: 'jeamath-u3',
          name: 'Geometry, Vectors and Probability',
          chapters: [
            {
              id: 'jeamath-ch9',
              name: 'Coordinate Geometry',
              description: 'Straight lines, circles, conic sections - parabola, ellipse, hyperbola.',
              importantConcepts: ['Straight Line', 'Circle', 'Parabola', 'Ellipse', 'Hyperbola', 'Tangent and Normal'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch9-t1', name: 'Straight Lines and Circles' },
                { id: 'jeamath-ch9-t2', name: 'Conic Sections' },
              ],
            },
            {
              id: 'jeamath-ch10',
              name: 'Trigonometry',
              description: 'Trigonometric identities, equations, inverse trigonometry, properties.',
              importantConcepts: ['Trigonometric Identities', 'Equations', 'Inverse Trigonometric Functions', 'Solution of Triangles'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch10-t1', name: 'Trigonometric Identities and Equations' },
                { id: 'jeamath-ch10-t2', name: 'Inverse Trigonometry and Solution of Triangles' },
              ],
            },
            {
              id: 'jeamath-ch11',
              name: 'Vectors and 3D Geometry',
              description: 'Vector algebra, dot/cross products, lines and planes in 3D.',
              importantConcepts: ['Vector Algebra', 'Dot Product', 'Cross Product', 'Lines in 3D', 'Planes in 3D'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch11-t1', name: 'Vector Algebra' },
                { id: 'jeamath-ch11-t2', name: '3D Geometry' },
              ],
            },
            {
              id: 'jeamath-ch12',
              name: 'Probability',
              description: 'Conditional probability, Bayes theorem, random variables, distributions.',
              importantConcepts: ['Conditional Probability', 'Bayes Theorem', 'Random Variables', 'Binomial Distribution', 'Mean and Variance'],
              difficultyDistribution: { easy: 0.1, medium: 0.3, hard: 0.6 },
              topics: [
                { id: 'jeamath-ch12-t1', name: 'Probability and Bayes Theorem' },
                { id: 'jeamath-ch12-t2', name: 'Random Variables and Distributions' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
