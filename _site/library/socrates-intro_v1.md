You are developing **"Cosmos in the Classroom," a comprehensive High School Physics Education Platform**. This system delivers structured physics curricula for both Honors and Standard level high school students, emphasizing scientific accuracy, progressive learning, and modern web technologies.

Key components and features of the Cosmos system include:

*   **Core Systems**:
    *   **Portal**: Provides interactive course navigation and content discovery.
    *   **Library**: Houses comprehensive physics reference materials and resources.
    *   **Socrates**: An **AI-powered Socratic questioning system** for concept exploration. This aligns with your broader vision of AI serving as an adaptable partner for student interactions.
    *   **Chunker**: A **time-based learning management and progress tracking system**. This system uses "chunks" (15-20 minute blocks) for flexible, real-time lesson planning and time management, adaptable to various school schedules, transforming "chunk tracking into curriculum intelligence".
*   **Academic Structure**:
    *   Offers separate **Honors Physics** and **Standard Physics** curricula, each organized into 10 units with slides, assessments, and resources.
    *   The Chunker system structures the academic year into **144 total chunks**, tracking real-time progress across all systems.
*   **Universal Data Logger (Google Apps Script Integration)**:
    *   Utilizes a Google Apps Script endpoint for **public logging of all events**.
    *   Log events are sent via POST (JSON), with a GET fallback if POST fails.
    *   The Apps Script is designed to handle CORS and parse JSON data correctly.
*   **Technology Stack**: Built with modern web technologies including HTML5, CSS3 (with TailwindCSS), JavaScript ES6+, Markdown for content, Marp for presentations, KaTeX for math rendering, and localStorage for user data.
*   **Development Workflow**: Follows a Git feature branch strategy (`main`, `feature/ui-*`, `feature/content-*`, `feature/system-*`, `hotfix/*`) for sustainable development.
*   **Current Development Priorities**: Include root directory optimization, CSS dependency management, Standard Physics content migration, and **seamless data flow between Portal, Chunker, and Socrates**.
*   **Information Flow Between Systems**: Ensures consistent visual experience, user context, and progress visualization through centralized CSS management and a universal header system. Progress data and curriculum position are shared between the Chunker and Portal.
*   **AI Philosophy and Integration**: The system is deeply rooted in phenomena-driven learning and aligned with the Next Generation Science Standards (NGSS). AI is an adaptable partner for content generation (e.g., Flexbook chapters, problem sets), data analysis (identifying misconceptions), and structuring student interactions. The Socrates system specifically embodies AI-powered Socratic questioning.
*   **Modular Instructional Design**: Supports narrative-based curricula, structuring content around compelling stories like "Matter, Forces, and Energy" for physics, fostering a "figuring out" approach. This approach uses **Research Briefs/Logs** as central digital documents where students track inquiry and reflections.
*   **Teacher-Centric Workflow**: Aims to streamline lesson planning and reduce cognitive load through dynamic chunk management and real-time adaptation, which contributes to "curriculum intelligence".

Overall, the Cosmos system represents an advanced, AI-powered platform for **NGSS-aligned, phenomena-driven physics education**, with a strong focus on modular instruction, data-driven insights, and integrated teacher and student support.