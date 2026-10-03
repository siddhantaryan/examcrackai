import type { Syllabus } from '@/types';

export const BPSC_6_8_SYLLABUS: Syllabus = {
  trackId: 'bpsc-6-8',
  trackName: 'BPSC TRE 4.0 - Classes 6-8',
  subjects: [
    {
      id: 'bpsc68-math',
      name: 'Mathematics',
      units: [
        {
          id: 'm68-u1',
          name: 'Number System',
          chapters: [
            {
              id: 'm68-ch1',
              name: 'Number System',
              description: 'Whole numbers, integers, natural numbers, rational numbers, and their properties.',
              importantConcepts: ['Natural Numbers', 'Whole Numbers', 'Integers', 'Rational Numbers', 'Absolute Value', 'Number Line'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'm68-ch1-t1', name: 'Natural and Whole Numbers' },
                { id: 'm68-ch1-t2', name: 'Integers' },
                { id: 'm68-ch1-t3', name: 'Rational Numbers' },
                { id: 'm68-ch1-t4', name: 'Fractions' },
                { id: 'm68-ch1-t5', name: 'Decimals' },
              ],
            },
            {
              id: 'm68-ch2',
              name: 'Factors and Multiples',
              description: 'HCF, LCM, prime factorization, and divisibility rules.',
              importantConcepts: ['Prime Numbers', 'Composite Numbers', 'HCF', 'LCM', 'Divisibility Rules'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch2-t1', name: 'Factors and Multiples' },
                { id: 'm68-ch2-t2', name: 'Prime and Composite Numbers' },
                { id: 'm68-ch2-t3', name: 'Prime Factorization' },
                { id: 'm68-ch2-t4', name: 'HCF and LCM' },
                { id: 'm68-ch2-t5', name: 'Divisibility Rules' },
              ],
            },
          ],
        },
        {
          id: 'm68-u2',
          name: 'Ratio, Proportion and Percentage',
          chapters: [
            {
              id: 'm68-ch3',
              name: 'Ratio and Proportion',
              description: 'Ratio, proportion, unitary method, and their applications.',
              importantConcepts: ['Ratio', 'Proportion', 'Unitary Method', 'Direct and Inverse Proportion'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch3-t1', name: 'Ratio' },
                { id: 'm68-ch3-t2', name: 'Proportion' },
                { id: 'm68-ch3-t3', name: 'Unitary Method' },
                { id: 'm68-ch3-t4', name: 'Direct and Inverse Proportion' },
              ],
            },
            {
              id: 'm68-ch4',
              name: 'Percentage',
              description: 'Percentage, conversion between fractions/decimals/percentages, and applications.',
              importantConcepts: ['Percentage', 'Conversion', 'Percentage Increase/Decrease'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch4-t1', name: 'Introduction to Percentage' },
                { id: 'm68-ch4-t2', name: 'Conversion between Forms' },
                { id: 'm68-ch4-t3', name: 'Percentage Problems' },
                { id: 'm68-ch4-t4', name: 'Percentage Increase and Decrease' },
              ],
            },
          ],
        },
        {
          id: 'm68-u3',
          name: 'Commercial Mathematics',
          chapters: [
            {
              id: 'm68-ch5',
              name: 'Profit and Loss',
              description: 'Cost price, selling price, profit, loss, and discount calculations.',
              importantConcepts: ['Cost Price', 'Selling Price', 'Profit', 'Loss', 'Discount', 'Marked Price'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch5-t1', name: 'Cost Price and Selling Price' },
                { id: 'm68-ch5-t2', name: 'Profit and Loss' },
                { id: 'm68-ch5-t3', name: 'Profit and Loss Percentage' },
                { id: 'm68-ch5-t4', name: 'Discount' },
              ],
            },
            {
              id: 'm68-ch6',
              name: 'Simple and Compound Interest',
              description: 'Simple interest, compound interest, and their real-world applications.',
              importantConcepts: ['Simple Interest', 'Compound Interest', 'Principal', 'Rate', 'Time'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'm68-ch6-t1', name: 'Simple Interest' },
                { id: 'm68-ch6-t2', name: 'Compound Interest' },
                { id: 'm68-ch6-t3', name: 'Comparison of SI and CI' },
              ],
            },
          ],
        },
        {
          id: 'm68-u4',
          name: 'Algebra',
          chapters: [
            {
              id: 'm68-ch7',
              name: 'Algebraic Expressions',
              description: 'Variables, constants, terms, like/unlike terms, and operations on algebraic expressions.',
              importantConcepts: ['Variables', 'Constants', 'Like Terms', 'Polynomials', 'Coefficients'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch7-t1', name: 'Variables and Constants' },
                { id: 'm68-ch7-t2', name: 'Algebraic Expressions' },
                { id: 'm68-ch7-t3', name: 'Like and Unlike Terms' },
                { id: 'm68-ch7-t4', name: 'Operations on Algebraic Expressions' },
              ],
            },
            {
              id: 'm68-ch8',
              name: 'Linear Equations',
              description: 'Linear equations in one variable, solving and graphing.',
              importantConcepts: ['Linear Equation', 'Variable', 'Solution', 'Transposition'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch8-t1', name: 'Linear Equations in One Variable' },
                { id: 'm68-ch8-t2', name: 'Solving Linear Equations' },
                { id: 'm68-ch8-t3', name: 'Word Problems on Linear Equations' },
              ],
            },
          ],
        },
        {
          id: 'm68-u5',
          name: 'Geometry',
          chapters: [
            {
              id: 'm68-ch9',
              name: 'Lines and Angles',
              description: 'Types of angles, pairs of angles, and properties of lines.',
              importantConcepts: ['Acute Angle', 'Right Angle', 'Obtuse Angle', 'Complementary', 'Supplementary', 'Vertically Opp'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch9-t1', name: 'Types of Angles' },
                { id: 'm68-ch9-t2', name: 'Pairs of Angles' },
                { id: 'm68-ch9-t3', name: 'Intersecting and Parallel Lines' },
              ],
            },
            {
              id: 'm68-ch10',
              name: 'Triangles',
              description: 'Classification, properties, congruence, and Pythagoras theorem.',
              importantConcepts: ['Types of Triangles', 'Angle Sum Property', 'Congruence', 'Pythagoras Theorem'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch10-t1', name: 'Types of Triangles' },
                { id: 'm68-ch10-t2', name: 'Properties of Triangles' },
                { id: 'm68-ch10-t3', name: 'Congruence of Triangles' },
                { id: 'm68-ch10-t4', name: 'Pythagoras Theorem' },
              ],
            },
            {
              id: 'm68-ch11',
              name: 'Quadrilaterals',
              description: 'Properties of quadrilaterals including parallelogram, rectangle, square, rhombus.',
              importantConcepts: ['Parallelogram', 'Rectangle', 'Square', 'Rhombus', 'Trapezium'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch11-t1', name: 'Types of Quadrilaterals' },
                { id: 'm68-ch11-t2', name: 'Properties of Parallelograms' },
                { id: 'm68-ch11-t3', name: 'Properties of Special Quadrilaterals' },
              ],
            },
            {
              id: 'm68-ch12',
              name: 'Circles',
              description: 'Parts of a circle, angles, chords, arcs, and sectors.',
              importantConcepts: ['Radius', 'Diameter', 'Chord', 'Arc', 'Sector', 'Central Angle'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch12-t1', name: 'Parts of a Circle' },
                { id: 'm68-ch12-t2', name: 'Chord and Arc' },
                { id: 'm68-ch12-t3', name: 'Sector and Segment' },
              ],
            },
            {
              id: 'm68-ch13',
              name: 'Coordinate Geometry',
              description: 'Cartesian plane, plotting points, and identifying coordinates.',
              importantConcepts: ['Cartesian Plane', 'X-axis', 'Y-axis', 'Origin', 'Coordinates', 'Quadrants'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'm68-ch13-t1', name: 'Cartesian Plane' },
                { id: 'm68-ch13-t2', name: 'Plotting Points' },
                { id: 'm68-ch13-t3', name: 'Quadrants' },
              ],
            },
          ],
        },
        {
          id: 'm68-u6',
          name: 'Mensuration',
          chapters: [
            {
              id: 'm68-ch14',
              name: 'Perimeter and Area',
              description: 'Perimeter and area of 2D shapes including rectangles, triangles, circles.',
              importantConcepts: ['Perimeter', 'Area', 'Square', 'Rectangle', 'Triangle', 'Circle', 'Parallelogram'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch14-t1', name: 'Perimeter of 2D Shapes' },
                { id: 'm68-ch14-t2', name: 'Area of Rectangle and Square' },
                { id: 'm68-ch14-t3', name: 'Area of Triangle' },
                { id: 'm68-ch14-t4', name: 'Area of Parallelogram and Rhombus' },
                { id: 'm68-ch14-t5', name: 'Circumference and Area of Circle' },
              ],
            },
            {
              id: 'm68-ch15',
              name: 'Surface Area and Volume',
              description: 'Surface area and volume of cubes, cuboids, and cylinders.',
              importantConcepts: ['Surface Area', 'Volume', 'Cube', 'Cuboid', 'Cylinder'],
              difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 },
              topics: [
                { id: 'm68-ch15-t1', name: 'Cube and Cuboid' },
                { id: 'm68-ch15-t2', name: 'Cylinder' },
                { id: 'm68-ch15-t3', name: 'Volume of Solids' },
              ],
            },
          ],
        },
        {
          id: 'm68-u7',
          name: 'Data Handling',
          chapters: [
            {
              id: 'm68-ch16',
              name: 'Statistics',
              description: 'Mean, median, mode, and data representation.',
              importantConcepts: ['Mean', 'Median', 'Mode', 'Range', 'Frequency Distribution'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'm68-ch16-t1', name: 'Data Collection and Organization' },
                { id: 'm68-ch16-t2', name: 'Mean, Median, Mode' },
                { id: 'm68-ch16-t3', name: 'Bar Graphs' },
                { id: 'm68-ch16-t4', name: 'Pie Charts' },
              ],
            },
            {
              id: 'm68-ch17',
              name: 'Probability',
              description: 'Basic probability concepts and simple experiments.',
              importantConcepts: ['Probability', 'Sample Space', 'Events', 'Outcomes'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'm68-ch17-t1', name: 'Introduction to Probability' },
                { id: 'm68-ch17-t2', name: 'Simple Probability Problems' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bpsc68-science',
      name: 'Science',
      units: [
        {
          id: 'sci68-u1',
          name: 'Food and Materials',
          chapters: [
            {
              id: 'sci68-ch1',
              name: 'Food: Where Does It Come From',
              description: 'Sources of food, plant and animal products, food habits of animals.',
              importantConcepts: ['Food Sources', 'Plant Products', 'Animal Products', 'Food Chain'],
              difficultyDistribution: { easy: 0.5, medium: 0.4, hard: 0.1 },
              topics: [
                { id: 'sci68-ch1-t1', name: 'Sources of Food' },
                { id: 'sci68-ch1-t2', name: 'Plant Parts as Food' },
                { id: 'sci68-ch1-t3', name: 'Animal Products as Food' },
                { id: 'sci68-ch1-t4', name: 'Food Habits of Animals' },
              ],
            },
            {
              id: 'sci68-ch2',
              name: 'Components of Food',
              description: 'Nutrients, balanced diet, deficiency diseases.',
              importantConcepts: ['Nutrients', 'Carbohydrates', 'Proteins', 'Fats', 'Vitamins', 'Minerals', 'Balanced Diet'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'sci68-ch2-t1', name: 'Major Nutrients' },
                { id: 'sci68-ch2-t2', name: 'Balanced Diet' },
                { id: 'sci68-ch2-t3', name: 'Deficiency Diseases' },
              ],
            },
            {
              id: 'sci68-ch3',
              name: 'Fibre to Fabric',
              description: 'Natural and synthetic fibres, processing of cotton, wool, silk.',
              importantConcepts: ['Natural Fibres', 'Synthetic Fibres', 'Cotton Processing', 'Wool', 'Silk'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'sci68-ch3-t1', name: 'Natural and Synthetic Fibres' },
                { id: 'sci68-ch3-t2', name: 'Cotton Processing' },
                { id: 'sci68-ch3-t3', name: 'Wool and Silk' },
              ],
            },
            {
              id: 'sci68-ch4',
              name: 'Sorting Materials into Groups',
              description: 'Classification of materials, properties, solubility, transparency.',
              importantConcepts: ['Classification', 'Properties of Materials', 'Solubility', 'Transparency', 'Hardness'],
              difficultyDistribution: { easy: 0.4, medium: 0.5, hard: 0.1 },
              topics: [
                { id: 'sci68-ch4-t1', name: 'Classification of Materials' },
                { id: 'sci68-ch4-t2', name: 'Properties of Materials' },
                { id: 'sci68-ch4-t3', name: 'Solubility and Transparency' },
              ],
            },
          ],
        },
        {
          id: 'sci68-u2',
          name: 'Living World',
          chapters: [
            {
              id: 'sci68-ch5',
              name: 'Body Movements',
              description: 'Human skeleton, joints, movement in animals.',
              importantConcepts: ['Skeleton', 'Joints', 'Muscles', 'Movement'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'sci68-ch5-t1', name: 'Human Skeleton' },
                { id: 'sci68-ch5-t2', name: 'Types of Joints' },
                { id: 'sci68-ch5-t3', name: 'Movement in Animals' },
              ],
            },
            {
              id: 'sci68-ch6',
              name: 'Living Organisms and Their Surroundings',
              description: 'Habitat, adaptation, characteristics of living things.',
              importantConcepts: ['Habitat', 'Adaptation', 'Terrestrial Habitat', 'Aquatic Habitat'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'sci68-ch6-t1', name: 'Habitat and Adaptation' },
                { id: 'sci68-ch6-t2', name: 'Terrestrial and Aquatic Habitats' },
                { id: 'sci68-ch6-t3', name: 'Characteristics of Living Things' },
              ],
            },
          ],
        },
        {
          id: 'sci68-u3',
          name: 'Physical Phenomena',
          chapters: [
            {
              id: 'sci68-ch7',
              name: 'Electricity and Circuits',
              description: 'Electric cell, electric circuit, conductors and insulators.',
              importantConcepts: ['Electric Cell', 'Electric Circuit', 'Conductors', 'Insulators', 'Switch'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'sci68-ch7-t1', name: 'Electric Cell and Circuit' },
                { id: 'sci68-ch7-t2', name: 'Conductors and Insulators' },
                { id: 'sci68-ch7-t3', name: 'Electric Switch' },
              ],
            },
            {
              id: 'sci68-ch8',
              name: 'Light, Shadows and Reflections',
              description: 'Sources of light, shadows, reflection, mirrors.',
              importantConcepts: ['Light Sources', 'Shadows', 'Reflection', 'Mirrors', 'Opaque', 'Transparent'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'sci68-ch8-t1', name: 'Sources of Light' },
                { id: 'sci68-ch8-t2', name: 'Shadows' },
                { id: 'sci68-ch8-t3', name: 'Reflection and Mirrors' },
              ],
            },
            {
              id: 'sci68-ch9',
              name: 'Motion and Measurement',
              description: 'Types of motion, measurement of distance and time.',
              importantConcepts: ['Motion', 'Measurement', 'Distance', 'Speed', 'Standard Units'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'sci68-ch9-t1', name: 'Types of Motion' },
                { id: 'sci68-ch9-t2', name: 'Measurement of Distance' },
                { id: 'sci68-ch9-t3', name: 'Standard Units of Measurement' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bpsc68-gkgs',
      name: 'General Knowledge & General Studies',
      units: [
        {
          id: 'gk68-u1',
          name: 'Indian History and Culture',
          chapters: [
            {
              id: 'gk68-ch1',
              name: 'Ancient India',
              description: 'Indus Valley Civilization, Vedic Period, Maurya and Gupta Empires.',
              importantConcepts: ['Indus Valley Civilization', 'Vedic Period', 'Maurya Empire', 'Gupta Empire', 'Buddhism', 'Jainism'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'gk68-ch1-t1', name: 'Indus Valley Civilization' },
                { id: 'gk68-ch1-t2', name: 'Vedic Period' },
                { id: 'gk68-ch1-t3', name: 'Maurya and Gupta Empires' },
                { id: 'gk68-ch1-t4', name: 'Buddhism and Jainism' },
              ],
            },
            {
              id: 'gk68-ch2',
              name: 'Medieval and Modern India',
              description: 'Delhi Sultanate, Mughal Empire, British Raj, Indian Independence.',
              importantConcepts: ['Delhi Sultanate', 'Mughal Empire', 'British Raj', 'Freedom Struggle', 'Independence'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'gk68-ch2-t1', name: 'Delhi Sultanate' },
                { id: 'gk68-ch2-t2', name: 'Mughal Empire' },
                { id: 'gk68-ch2-t3', name: 'British Raj' },
                { id: 'gk68-ch2-t4', name: 'Indian Independence Movement' },
              ],
            },
          ],
        },
        {
          id: 'gk68-u2',
          name: 'Geography and Civics',
          chapters: [
            {
              id: 'gk68-ch3',
              name: 'Indian Geography',
              description: 'Physical features, rivers, climate, and natural resources of India.',
              importantConcepts: ['Physical Features', 'Rivers', 'Climate', 'Natural Resources', 'States and Capitals'],
              difficultyDistribution: { easy: 0.4, medium: 0.4, hard: 0.2 },
              topics: [
                { id: 'gk68-ch3-t1', name: 'Physical Features of India' },
                { id: 'gk68-ch3-t2', name: 'Major Rivers of India' },
                { id: 'gk68-ch3-t3', name: 'Climate of India' },
                { id: 'gk68-ch3-t4', name: 'States and Capitals' },
              ],
            },
            {
              id: 'gk68-ch4',
              name: 'Indian Constitution and Government',
              description: 'Basic structure of Indian government, fundamental rights, Panchayati Raj.',
              importantConcepts: ['Constitution', 'Fundamental Rights', 'Parliament', 'Panchayati Raj', 'Democracy'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'gk68-ch4-t1', name: 'Indian Constitution' },
                { id: 'gk68-ch4-t2', name: 'Fundamental Rights and Duties' },
                { id: 'gk68-ch4-t3', name: 'Structure of Government' },
                { id: 'gk68-ch4-t4', name: 'Panchayati Raj System' },
              ],
            },
          ],
        },
        {
          id: 'gk68-u3',
          name: 'Bihar Specific',
          chapters: [
            {
              id: 'gk68-ch5',
              name: 'Bihar: History, Geography and Culture',
              description: 'History of Bihar, geographical features, cultural heritage, and important personalities.',
              importantConcepts: ['Bihar History', 'Bihar Geography', 'Bihar Culture', 'Nalanda', 'Bodh Gaya', 'Bihar Rivers'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'gk68-ch5-t1', name: 'History of Bihar' },
                { id: 'gk68-ch5-t2', name: 'Geography of Bihar' },
                { id: 'gk68-ch5-t3', name: 'Cultural Heritage of Bihar' },
                { id: 'gk68-ch5-t4', name: 'Important Personalities of Bihar' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bpsc68-aptitude',
      name: 'Aptitude',
      units: [
        {
          id: 'apt68-u1',
          name: 'Quantitative Aptitude',
          chapters: [
            {
              id: 'apt68-ch1',
              name: 'Number Series and Patterns',
              description: 'Number series, coding-decoding, and logical patterns.',
              importantConcepts: ['Number Series', 'Coding-Decoding', 'Patterns', 'Odd One Out'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'apt68-ch1-t1', name: 'Number Series' },
                { id: 'apt68-ch1-t2', name: 'Coding and Decoding' },
                { id: 'apt68-ch1-t3', name: 'Logical Patterns' },
              ],
            },
            {
              id: 'apt68-ch2',
              name: 'Data Interpretation',
              description: 'Reading and interpreting tables, bar graphs, and pie charts.',
              importantConcepts: ['Tables', 'Bar Graphs', 'Pie Charts', 'Data Analysis'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'apt68-ch2-t1', name: 'Table Interpretation' },
                { id: 'apt68-ch2-t2', name: 'Bar Graph Interpretation' },
                { id: 'apt68-ch2-t3', name: 'Pie Chart Interpretation' },
              ],
            },
          ],
        },
        {
          id: 'apt68-u2',
          name: 'Reasoning',
          chapters: [
            {
              id: 'apt68-ch3',
              name: 'Verbal Reasoning',
              description: 'Analogy, classification, blood relations, direction sense.',
              importantConcepts: ['Analogy', 'Classification', 'Blood Relations', 'Direction Sense'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'apt68-ch3-t1', name: 'Analogy' },
                { id: 'apt68-ch3-t2', name: 'Classification' },
                { id: 'apt68-ch3-t3', name: 'Blood Relations' },
                { id: 'apt68-ch3-t4', name: 'Direction Sense' },
              ],
            },
            {
              id: 'apt68-ch4',
              name: 'Non-Verbal Reasoning',
              description: 'Mirror images, paper folding, embedded figures.',
              importantConcepts: ['Mirror Images', 'Paper Folding', 'Embedded Figures', 'Pattern Completion'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'apt68-ch4-t1', name: 'Mirror Images' },
                { id: 'apt68-ch4-t2', name: 'Paper Folding and Cutting' },
                { id: 'apt68-ch4-t3', name: 'Embedded Figures' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bpsc68-teaching',
      name: 'Teaching Ability',
      units: [
        {
          id: 'tea68-u1',
          name: 'Educational Psychology and Pedagogy',
          chapters: [
            {
              id: 'tea68-ch1',
              name: 'Educational Psychology',
              description: 'Learning theories, child development, motivation, and intelligence.',
              importantConcepts: ['Learning Theories', 'Piaget', 'Vygotsky', 'Motivation', 'Intelligence', 'Child Development'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'tea68-ch1-t1', name: 'Theories of Learning' },
                { id: 'tea68-ch1-t2', name: 'Child Development' },
                { id: 'tea68-ch1-t3', name: 'Motivation in Learning' },
                { id: 'tea68-ch1-t4', name: 'Intelligence and Assessment' },
              ],
            },
            {
              id: 'tea68-ch2',
              name: 'Teaching Methods and Pedagogy',
              description: 'Teaching strategies, classroom management, assessment methods.',
              importantConcepts: ['Teaching Methods', 'Classroom Management', 'Assessment', 'Inclusive Education', 'Differentiated Instruction'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'tea68-ch2-t1', name: 'Teaching Strategies' },
                { id: 'tea68-ch2-t2', name: 'Classroom Management' },
                { id: 'tea68-ch2-t3', name: 'Assessment and Evaluation' },
                { id: 'tea68-ch2-t4', name: 'Inclusive Education' },
              ],
            },
            {
              id: 'tea68-ch3',
              name: 'Educational Policies and Schemes',
              description: 'RTE Act, NEP 2020, SSA, Mid-day Meal Scheme.',
              importantConcepts: ['RTE Act', 'NEP 2020', 'SSA', 'Mid-day Meal', 'Educational Schemes'],
              difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 },
              topics: [
                { id: 'tea68-ch3-t1', name: 'Right to Education Act' },
                { id: 'tea68-ch3-t2', name: 'National Education Policy 2020' },
                { id: 'tea68-ch3-t3', name: 'Educational Schemes and Programs' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
