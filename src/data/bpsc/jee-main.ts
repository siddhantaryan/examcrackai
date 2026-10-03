import type { Syllabus } from '@/types';

export const JEE_MAIN_SYLLABUS: Syllabus = {
  trackId: 'jee-main',
  trackName: 'JEE Main - Physics, Chemistry, Mathematics',
  subjects: [
    {
      id: 'jee-phy',
      name: 'Physics',
      units: [
        {
          id: 'jphy-u1',
          name: 'Mechanics',
          chapters: [
            {
              id: 'jphy-ch1',
              name: 'Units, Dimensions and Measurement',
              description: 'SI units, dimensional analysis, error analysis, significant figures.',
              importantConcepts: ['SI Units', 'Dimensional Analysis', 'Error Analysis', 'Significant Figures', 'Least Count'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'jphy-ch1-t1', name: 'Units and Measurement' },
                { id: 'jphy-ch1-t2', name: 'Dimensional Analysis' },
                { id: 'jphy-ch1-t3', name: 'Error Analysis and Significant Figures' },
              ],
            },
            {
              id: 'jphy-ch2',
              name: 'Kinematics',
              description: 'Motion in straight line, motion in plane, projectile motion, relative velocity.',
              importantConcepts: ['Displacement', 'Velocity', 'Acceleration', 'Projectile Motion', 'Relative Velocity'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch2-t1', name: 'Motion in a Straight Line' },
                { id: 'jphy-ch2-t2', name: 'Motion in a Plane' },
                { id: 'jphy-ch2-t3', name: 'Projectile Motion' },
                { id: 'jphy-ch2-t4', name: 'Relative Velocity' },
              ],
            },
            {
              id: 'jphy-ch3',
              name: 'Laws of Motion',
              description: 'Newton\u2019s laws, friction, circular motion, pseudo forces.',
              importantConcepts: ['Newton\u2019s Laws', 'Friction', 'Circular Motion', 'Pseudo Force', 'Banking of Roads'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch3-t1', name: 'Newton\u2019s Laws of Motion' },
                { id: 'jphy-ch3-t2', name: 'Friction' },
                { id: 'jphy-ch3-t3', name: 'Circular Motion' },
              ],
            },
            {
              id: 'jphy-ch4',
              name: 'Work, Energy and Power',
              description: 'Work-energy theorem, conservative forces, collisions, power.',
              importantConcepts: ['Work', 'Kinetic Energy', 'Potential Energy', 'Conservative Forces', 'Collisions', 'Power'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch4-t1', name: 'Work and Energy' },
                { id: 'jphy-ch4-t2', name: 'Work-Energy Theorem' },
                { id: 'jphy-ch4-t3', name: 'Collisions' },
                { id: 'jphy-ch4-t4', name: 'Power' },
              ],
            },
            {
              id: 'jphy-ch5',
              name: 'Rotational Motion',
              description: 'Moment of inertia, torque, angular momentum, rolling motion.',
              importantConcepts: ['Moment of Inertia', 'Torque', 'Angular Momentum', 'Rolling Motion', 'Center of Mass'],
              difficultyDistribution: { easy: 0.1, medium: 0.4, hard: 0.5 },
              topics: [
                { id: 'jphy-ch5-t1', name: 'Center of Mass' },
                { id: 'jphy-ch5-t2', name: 'Moment of Inertia' },
                { id: 'jphy-ch5-t3', name: 'Torque and Angular Momentum' },
                { id: 'jphy-ch5-t4', name: 'Rolling Motion' },
              ],
            },
            {
              id: 'jphy-ch6',
              name: 'Gravitation',
              description: 'Kepler\u2019s laws, gravitational field, escape velocity, satellites.',
              importantConcepts: ['Kepler\u2019s Laws', 'Gravitational Force', 'Escape Velocity', 'Orbital Velocity', 'Satellites'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch6-t1', name: 'Kepler\u2019s Laws and Gravitational Force' },
                { id: 'jphy-ch6-t2', name: 'Gravitational Field and Potential' },
                { id: 'jphy-ch6-t3', name: 'Escape and Orbital Velocity' },
                { id: 'jphy-ch6-t4', name: 'Satellites' },
              ],
            },
          ],
        },
        {
          id: 'jphy-u2',
          name: 'Thermodynamics and Fluids',
          chapters: [
            {
              id: 'jphy-ch7',
              name: 'Properties of Matter',
              description: 'Elasticity, surface tension, viscosity, fluid statics and dynamics.',
              importantConcepts: ['Elasticity', 'Young\u2019s Modulus', 'Surface Tension', 'Viscosity', 'Bernoulli\u2019s Principle', 'Pressure'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch7-t1', name: 'Elasticity' },
                { id: 'jphy-ch7-t2', name: 'Surface Tension' },
                { id: 'jphy-ch7-t3', name: 'Fluid Statics and Dynamics' },
                { id: 'jphy-ch7-t4', name: 'Viscosity' },
              ],
            },
            {
              id: 'jphy-ch8',
              name: 'Thermodynamics and KTG',
              description: 'Laws of thermodynamics, kinetic theory of gases, heat transfer.',
              importantConcepts: ['Zeroth Law', 'First Law', 'Second Law', 'Kinetic Theory', 'Heat Transfer', 'Specific Heat'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch8-t1', name: 'Laws of Thermodynamics' },
                { id: 'jphy-ch8-t2', name: 'Kinetic Theory of Gases' },
                { id: 'jphy-ch8-t3', name: 'Heat Transfer' },
              ],
            },
            {
              id: 'jphy-ch9',
              name: 'Oscillations and Waves',
              description: 'SHM, damped oscillations, wave motion, sound waves, Doppler effect.',
              importantConcepts: ['SHM', 'Damped Oscillations', 'Wave Motion', 'Sound Waves', 'Doppler Effect', 'Resonance'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch9-t1', name: 'Simple Harmonic Motion' },
                { id: 'jphy-ch9-t2', name: 'Wave Motion' },
                { id: 'jphy-ch9-t3', name: 'Sound Waves and Doppler Effect' },
              ],
            },
          ],
        },
        {
          id: 'jphy-u3',
          name: 'Electromagnetism',
          chapters: [
            {
              id: 'jphy-ch10',
              name: 'Electrostatics',
              description: 'Coulomb\u2019s law, electric field, potential, capacitance.',
              importantConcepts: ['Coulomb\u2019s Law', 'Electric Field', 'Gauss\u2019s Law', 'Electric Potential', 'Capacitance'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch10-t1', name: 'Coulomb\u2019s Law and Electric Field' },
                { id: 'jphy-ch10-t2', name: 'Gauss\u2019s Law' },
                { id: 'jphy-ch10-t3', name: 'Electric Potential and Capacitance' },
              ],
            },
            {
              id: 'jphy-ch11',
              name: 'Current Electricity',
              description: 'Ohm\u2019s law, Kirchhoff\u2019s laws, Wheatstone bridge, meter bridge.',
              importantConcepts: ['Ohm\u2019s Law', 'Kirchhoff\u2019s Laws', 'Wheatstone Bridge', 'Potentiometer', 'Galvanometer'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch11-t1', name: 'Ohm\u2019s Law and Resistance' },
                { id: 'jphy-ch11-t2', name: 'Kirchhoff\u2019s Laws' },
                { id: 'jphy-ch11-t3', name: 'Wheatstone Bridge and Potentiometer' },
              ],
            },
            {
              id: 'jphy-ch12',
              name: 'Magnetic Effects of Current',
              description: 'Biot-Savart law, Ampere\u2019s law, force on moving charges, magnetic materials.',
              importantConcepts: ['Biot-Savart Law', 'Ampere\u2019s Law', 'Lorentz Force', 'Magnetic Field', 'Cyclotron'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch12-t1', name: 'Biot-Savart and Ampere\u2019s Law' },
                { id: 'jphy-ch12-t2', name: 'Force on Moving Charges' },
                { id: 'jphy-ch12-t3', name: 'Magnetic Materials' },
              ],
            },
            {
              id: 'jphy-ch13',
              name: 'Electromagnetic Induction and AC',
              description: 'Faraday\u2019s law, Lenz\u2019s law, transformers, AC circuits.',
              importantConcepts: ['Faraday\u2019s Law', 'Lenz\u2019s Law', 'Self and Mutual Induction', 'Transformer', 'AC Circuits', 'LCR Circuit'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch13-t1', name: 'Electromagnetic Induction' },
                { id: 'jphy-ch13-t2', name: 'AC Circuits' },
                { id: 'jphy-ch13-t3', name: 'Transformers' },
              ],
            },
          ],
        },
        {
          id: 'jphy-u4',
          name: 'Optics and Modern Physics',
          chapters: [
            {
              id: 'jphy-ch14',
              name: 'Optics',
              description: 'Reflection, refraction, lenses, interference, diffraction, polarization.',
              importantConcepts: ['Reflection', 'Refraction', 'Lens Formula', 'Interference', 'Diffraction', 'Polarization', 'YDSE'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch14-t1', name: 'Ray Optics' },
                { id: 'jphy-ch14-t2', name: 'Wave Optics' },
                { id: 'jphy-ch14-t3', name: 'Interference and Diffraction' },
              ],
            },
            {
              id: 'jphy-ch15',
              name: 'Modern Physics',
              description: 'Photoelectric effect, Bohr model, nuclear physics, semiconductors.',
              importantConcepts: ['Photoelectric Effect', 'Bohr Model', 'De Broglie Wavelength', 'Nuclear Fission', 'Nuclear Fusion', 'Semiconductors'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jphy-ch15-t1', name: 'Photoelectric Effect and Dual Nature' },
                { id: 'jphy-ch15-t2', name: 'Atomic Physics and Bohr Model' },
                { id: 'jphy-ch15-t3', name: 'Nuclear Physics' },
                { id: 'jphy-ch15-t4', name: 'Semiconductors and Logic Gates' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jee-chem',
      name: 'Chemistry',
      units: [
        {
          id: 'jchem-u1',
          name: 'Physical Chemistry',
          chapters: [
            {
              id: 'jchem-ch1',
              name: 'Some Basic Concepts of Chemistry',
              description: 'Mole concept, stoichiometry, atomic and molecular mass, concentration terms.',
              importantConcepts: ['Mole Concept', 'Stoichiometry', 'Atomic Mass', 'Molecular Mass', 'Molarity', 'Molality'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'jchem-ch1-t1', name: 'Mole Concept and Stoichiometry' },
                { id: 'jchem-ch1-t2', name: 'Concentration Terms' },
                { id: 'jchem-ch1-t3', name: 'Empirical and Molecular Formula' },
              ],
            },
            {
              id: 'jchem-ch2',
              name: 'Atomic Structure',
              description: 'Bohr\u2019s model, quantum numbers, electronic configuration, orbital\u2019s.',
              importantConcepts: ['Bohr\u2019s Model', 'Quantum Numbers', 'Electronic Configuration', 'Orbitals', 'Heisenberg Uncertainty'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch2-t1', name: 'Bohr\u2019s Model and Quantum Numbers' },
                { id: 'jchem-ch2-t2', name: 'Electronic Configuration' },
              ],
            },
            {
              id: 'jchem-ch3',
              name: 'Chemical Bonding',
              description: 'Ionic, covalent bonds, VSEPR, hybridization, molecular orbital theory.',
              importantConcepts: ['Ionic Bond', 'Covalent Bond', 'VSEPR Theory', 'Hybridization', 'Molecular Orbital Theory', 'Bond Order'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch3-t1', name: 'Types of Chemical Bonds' },
                { id: 'jchem-ch3-t2', name: 'VSEPR and Hybridization' },
                { id: 'jchem-ch3-t3', name: 'Molecular Orbital Theory' },
              ],
            },
            {
              id: 'jchem-ch4',
              name: 'Thermodynamics and Thermochemistry',
              description: 'First law, enthalpy, entropy, Gibbs energy, Hess\u2019s law.',
              importantConcepts: ['Enthalpy', 'Entropy', 'Gibbs Free Energy', 'Hess\u2019s Law', 'Spontaneity'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch4-t1', name: 'Laws of Thermodynamics' },
                { id: 'jchem-ch4-t2', name: 'Enthalpy and Entropy' },
                { id: 'jchem-ch4-t3', name: 'Gibbs Energy and Spontaneity' },
              ],
            },
            {
              id: 'jchem-ch5',
              name: 'Chemical Equilibrium',
              description: 'Law of mass action, Le Chatelier\u2019s principle, Kp and Kc, buffer solutions.',
              importantConcepts: ['Equilibrium Constant', 'Le Chatelier\u2019s Principle', 'Kp and Kc', 'Buffer Solutions', 'pH'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch5-t1', name: 'Chemical Equilibrium and Kc/Kp' },
                { id: 'jchem-ch5-t2', name: 'Le Chatelier\u2019s Principle' },
                { id: 'jchem-ch5-t3', name: 'Ionic Equilibrium and Buffers' },
              ],
            },
            {
              id: 'jchem-ch6',
              name: 'Electrochemistry',
              description: 'Galvanic cells, electrode potential, Nernst equation, electrolysis, batteries.',
              importantConcepts: ['Galvanic Cell', 'Electrode Potential', 'Nernst Equation', 'Electrolysis', 'Batteries', 'Corrosion'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch6-t1', name: 'Galvanic Cells and Electrode Potential' },
                { id: 'jchem-ch6-t2', name: 'Nernst Equation' },
                { id: 'jchem-ch6-t3', name: 'Batteries and Corrosion' },
              ],
            },
            {
              id: 'jchem-ch7',
              name: 'Chemical Kinetics',
              description: 'Rate of reaction, order, molecularity, Arrhenius equation.',
              importantConcepts: ['Rate of Reaction', 'Order of Reaction', 'Molecularity', 'Arrhenius Equation', 'Half-Life'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch7-t1', name: 'Rate of Reaction and Order' },
                { id: 'jchem-ch7-t2', name: 'Arrhenius Equation' },
              ],
            },
          ],
        },
        {
          id: 'jchem-u2',
          name: 'Inorganic Chemistry',
          chapters: [
            {
              id: 'jchem-ch8',
              name: 'Periodic Table and Properties',
              description: 'Periodic trends, atomic radius, ionization energy, electronegativity.',
              importantConcepts: ['Periodic Trends', 'Atomic Radius', 'Ionization Energy', 'Electronegativity', 'Electron Affinity'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'jchem-ch8-t1', name: 'Periodic Classification' },
                { id: 'jchem-ch8-t2', name: 'Periodic Trends in Properties' },
              ],
            },
            {
              id: 'jchem-ch9',
              name: 'p-Block and s-Block Elements',
              description: 'Group 1-2 and Group 13-18 elements, their properties and compounds.',
              importantConcepts: ['s-Block Elements', 'p-Block Elements', 'Group Trends', 'Important Compounds'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch9-t1', name: 's-Block Elements' },
                { id: 'jchem-ch9-t2', name: 'p-Block Elements (Group 13-16)' },
                { id: 'jchem-ch9-t3', name: 'p-Block Elements (Group 17-18)' },
              ],
            },
            {
              id: 'jchem-ch10',
              name: 'd and f-Block Elements and Coordination Compounds',
              description: 'Transition metals, lanthanides, actinides, coordination chemistry.',
              importantConcepts: ['Transition Metals', 'Lanthanides', 'Actinides', 'Coordination Compounds', 'Crystal Field Theory'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch10-t1', name: 'd-Block Elements' },
                { id: 'jchem-ch10-t2', name: 'f-Block Elements' },
                { id: 'jchem-ch10-t3', name: 'Coordination Compounds' },
              ],
            },
          ],
        },
        {
          id: 'jchem-u3',
          name: 'Organic Chemistry',
          chapters: [
            {
              id: 'jchem-ch11',
              name: 'Basics of Organic Chemistry',
              description: 'Nomenclature, isomerism, reaction mechanisms, electronic effects.',
              importantConcepts: ['IUPAC Nomenclature', 'Isomerism', 'Inductive Effect', 'Resonance', 'Hyperconjugation', 'Reaction Intermediates'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch11-t1', name: 'Nomenclature and Isomerism' },
                { id: 'jchem-ch11-t2', name: 'Electronic Effects and Reaction Mechanisms' },
              ],
            },
            {
              id: 'jchem-ch12',
              name: 'Hydrocarbons',
              description: 'Alkanes, alkenes, alkynes, aromatic hydrocarbons.',
              importantConcepts: ['Alkanes', 'Alkenes', 'Alkynes', 'Aromatic Compounds', 'Markovnikov Rule', 'Anti-Markovnikov'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch12-t1', name: 'Alkanes, Alkenes and Alkynes' },
                { id: 'jchem-ch12-t2', name: 'Aromatic Hydrocarbons' },
              ],
            },
            {
              id: 'jchem-ch13',
              name: 'Organic Compounds with Functional Groups',
              description: 'Alcohols, phenols, ethers, aldehydes, ketones, carboxylic acids, amines.',
              importantConcepts: ['Alcohols', 'Phenols', 'Aldehydes', 'Ketones', 'Carboxylic Acids', 'Amines', 'Esters'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jchem-ch13-t1', name: 'Alcohols, Phenols and Ethers' },
                { id: 'jchem-ch13-t2', name: 'Aldehydes, Ketones and Carboxylic Acids' },
                { id: 'jchem-ch13-t3', name: 'Amines and Biomolecules' },
              ],
            },
            {
              id: 'jchem-ch14',
              name: 'Biomolecules and Polymers',
              description: 'Carbohydrates, proteins, nucleic acids, vitamins, polymers.',
              importantConcepts: ['Carbohydrates', 'Proteins', 'Nucleic Acids', 'Vitamins', 'Polymers', 'DNA', 'RNA'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'jchem-ch14-t1', name: 'Biomolecules' },
                { id: 'jchem-ch14-t2', name: 'Polymers' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jee-math',
      name: 'Mathematics',
      units: [
        {
          id: 'jmath-u1',
          name: 'Algebra',
          chapters: [
            {
              id: 'jmath-ch1',
              name: 'Sets, Relations and Functions',
              description: 'Sets, relations, functions, types of functions, domain and range.',
              importantConcepts: ['Sets', 'Relations', 'Functions', 'Domain', 'Range', 'Types of Functions'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'jmath-ch1-t1', name: 'Sets and Relations' },
                { id: 'jmath-ch1-t2', name: 'Functions and Types' },
              ],
            },
            {
              id: 'jmath-ch2',
              name: 'Complex Numbers and Quadratic Equations',
              description: 'Complex numbers, Argand plane, quadratic equations.',
              importantConcepts: ['Complex Numbers', 'Argand Plane', 'Quadratic Equations', 'Discriminant', 'iota'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch2-t1', name: 'Complex Numbers' },
                { id: 'jmath-ch2-t2', name: 'Quadratic Equations' },
              ],
            },
            {
              id: 'jmath-ch3',
              name: 'Sequences and Series',
              description: 'AP, GP, HP, sum of series, special series.',
              importantConcepts: ['Arithmetic Progression', 'Geometric Progression', 'Harmonic Progression', 'AM-GM Inequality'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch3-t1', name: 'AP, GP and HP' },
                { id: 'jmath-ch3-t2', name: 'Sum of Series and Special Series' },
              ],
            },
            {
              id: 'jmath-ch4',
              name: 'Permutations, Combinations and Binomial Theorem',
              description: 'Counting principles, permutations, combinations, binomial expansion.',
              importantConcepts: ['Factorial', 'Permutations', 'Combinations', 'Binomial Theorem', 'General and Middle Term'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch4-t1', name: 'Permutations and Combinations' },
                { id: 'jmath-ch4-t2', name: 'Binomial Theorem' },
              ],
            },
            {
              id: 'jmath-ch5',
              name: 'Matrices and Determinants',
              description: 'Matrix operations, determinants, inverse, system of equations.',
              importantConcepts: ['Matrix Operations', 'Determinants', 'Adjoint', 'Inverse', 'Cramer\u2019s Rule'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch5-t1', name: 'Matrices and Operations' },
                { id: 'jmath-ch5-t2', name: 'Determinants and Systems of Equations' },
              ],
            },
          ],
        },
        {
          id: 'jmath-u2',
          name: 'Calculus',
          chapters: [
            {
              id: 'jmath-ch6',
              name: 'Limits, Continuity and Differentiability',
              description: 'Limits, continuity, differentiability, L\u2019Hopital\u2019s rule.',
              importantConcepts: ['Limits', 'Continuity', 'Differentiability', 'L\u2019Hopital\u2019s Rule', 'Modulus Function'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch6-t1', name: 'Limits' },
                { id: 'jmath-ch6-t2', name: 'Continuity and Differentiability' },
              ],
            },
            {
              id: 'jmath-ch7',
              name: 'Differentiation and Applications of Derivatives',
              description: 'Derivatives, rate of change, maxima-minima, tangents and normals.',
              importantConcepts: ['Derivatives', 'Rate of Change', 'Maxima and Minima', 'Tangents and Normals', 'Rolle\u2019s Theorem'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch7-t1', name: 'Differentiation' },
                { id: 'jmath-ch7-t2', name: 'Applications of Derivatives' },
              ],
            },
            {
              id: 'jmath-ch8',
              name: 'Integration and Applications',
              description: 'Indefinite and definite integrals, area, differential equations.',
              importantConcepts: ['Indefinite Integral', 'Definite Integral', 'Area Under Curve', 'Differential Equations'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch8-t1', name: 'Indefinite and Definite Integrals' },
                { id: 'jmath-ch8-t2', name: 'Area and Differential Equations' },
              ],
            },
          ],
        },
        {
          id: 'jmath-u3',
          name: 'Coordinate Geometry and Trigonometry',
          chapters: [
            {
              id: 'jmath-ch9',
              name: 'Coordinate Geometry',
              description: 'Straight lines, circles, parabola, ellipse, hyperbola.',
              importantConcepts: ['Straight Line', 'Circle', 'Parabola', 'Ellipse', 'Hyperbola'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch9-t1', name: 'Straight Lines and Circles' },
                { id: 'jmath-ch9-t2', name: 'Conic Sections' },
              ],
            },
            {
              id: 'jmath-ch10',
              name: 'Trigonometry',
              description: 'Trigonometric ratios, identities, equations, inverse trigonometry.',
              importantConcepts: ['Trigonometric Ratios', 'Identities', 'Trigonometric Equations', 'Inverse Trigonometric Functions'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch10-t1', name: 'Trigonometric Ratios and Identities' },
                { id: 'jmath-ch10-t2', name: 'Trigonometric Equations and Inverse Functions' },
              ],
            },
          ],
        },
        {
          id: 'jmath-u4',
          name: 'Vectors and 3D Geometry',
          chapters: [
            {
              id: 'jmath-ch11',
              name: 'Vectors and 3D Geometry',
              description: 'Vector algebra, dot and cross products, lines and planes in 3D.',
              importantConcepts: ['Vector Algebra', 'Dot Product', 'Cross Product', 'Lines in 3D', 'Planes in 3D'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch11-t1', name: 'Vector Algebra' },
                { id: 'jmath-ch11-t2', name: '3D Geometry' },
              ],
            },
            {
              id: 'jmath-ch12',
              name: 'Probability and Statistics',
              description: 'Probability, conditional probability, Bayes theorem, mean, variance.',
              importantConcepts: ['Probability', 'Conditional Probability', 'Bayes Theorem', 'Mean', 'Variance', 'Standard Deviation'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'jmath-ch12-t1', name: 'Probability' },
                { id: 'jmath-ch12-t2', name: 'Statistics' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
