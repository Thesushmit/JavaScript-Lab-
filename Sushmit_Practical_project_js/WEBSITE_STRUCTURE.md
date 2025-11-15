# Website Structure Diagram

## Mermaid Diagram

```mermaid
graph TD
    A[index.html - Single File Application] --> B[HTML Structure]
    A --> C[CSS Styles]
    A --> D[JavaScript Code]
    
    B --> B1[Welcome Section]
    B --> B2[Quiz Section]
    B --> B3[Results Section]
    B --> B4[Timer Display]
    
    B1 --> B1a[Name Input]
    B1 --> B1b[Email Input]
    B1 --> B1c[Start Button]
    
    B2 --> B2a[Progress Bar]
    B2 --> B2b[Question Container]
    B2 --> B2c[Option Buttons]
    B2 --> B2d[Navigation Buttons]
    
    B3 --> B3a[Personality Icon]
    B3 --> B3b[Personality Name]
    B3 --> B3c[Description]
    B3 --> B3d[Statistics Grid]
    B3 --> B3e[Restart Button]
    
    C --> C1[Bootstrap 5.3.0]
    C --> C2[Custom CSS]
    C --> C3[Bootstrap Icons]
    
    C2 --> C2a[Color Variables]
    C2 --> C2b[Responsive Design]
    C2 --> C2c[Animations]
    C2 --> C2d[Card Styles]
    
    D --> D1[Quiz Data]
    D --> D2[Core Functions]
    D --> D3[Event Handlers]
    D --> D4[Storage Management]
    
    D1 --> D1a[Questions Array]
    D1 --> D1b[Personalities Array]
    
    D2 --> D2a[initializeQuiz]
    D2 --> D2b[displayQuestion]
    D2 --> D2c[selectOption]
    D2 --> D2d[calculatePersonality]
    D2 --> D2e[submitQuiz]
    D2 --> D2f[restartQuiz]
    
    D3 --> D3a[Form Validation]
    D3 --> D3b[Input Events]
    D3 --> D3c[Button Clicks]
    D3 --> D3d[Timer Events]
    
    D4 --> D4a[localStorage]
    D4 --> D4b[sessionStorage]
    D4 --> D4c[JSON Handling]
    
    style A fill:#6366f1,stroke:#4f46e5,color:#fff
    style B fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style C fill:#10b981,stroke:#059669,color:#fff
    style D fill:#f59e0b,stroke:#d97706,color:#fff
```

## Application Flow Diagram

```mermaid
flowchart TD
    Start([User Opens Website]) --> Load[Page Loads]
    Load --> Init[Initialize Quiz Data]
    Init --> CheckStorage{Check localStorage}
    CheckStorage -->|Has Data| AutoFill[Auto-fill Form]
    CheckStorage -->|No Data| Welcome[Show Welcome Screen]
    AutoFill --> Welcome
    
    Welcome --> Input[User Enters Name & Email]
    Input --> Validate{Validate Input}
    Validate -->|Invalid| ShowError[Show Error Message]
    ShowError --> Input
    Validate -->|Valid| SaveUser[Save to localStorage]
    
    SaveUser --> StartQuiz[Start Quiz]
    StartQuiz --> StartTimer[Start Timer]
    StartTimer --> ShowQuestion[Display Question]
    
    ShowQuestion --> Select[User Selects Option]
    Select --> SaveAnswer[Save Answer]
    SaveAnswer --> CheckNext{More Questions?}
    
    CheckNext -->|Yes| NextQ[Next Question]
    NextQ --> ShowQuestion
    CheckNext -->|No| Submit[Submit Quiz]
    
    Submit --> Calculate[Calculate Personality]
    Calculate --> StopTimer[Stop Timer]
    StopTimer --> SaveResults[Save Results to localStorage]
    SaveResults --> ShowResults[Display Results]
    
    ShowResults --> Restart{User Clicks Restart?}
    Restart -->|Yes| ClearSession[Clear Session]
    ClearSession --> Welcome
    Restart -->|No| End([End])
    
    style Start fill:#6366f1,stroke:#4f46e5,color:#fff
    style Welcome fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style ShowQuestion fill:#10b981,stroke:#059669,color:#fff
    style ShowResults fill:#f59e0b,stroke:#d97706,color:#fff
    style End fill:#ef4444,stroke:#dc2626,color:#fff
```

## JavaScript Concepts Implementation Map

```mermaid
mindmap
  root((AI Personality Quiz))
    JavaScript Setup
      Inline JS
      Internal JS
      External JS
      Console Methods
    Variables & ES6+
      var, let, const
      Template Literals
      Destructuring
      Default Parameters
      Spread Operator
    Conditionals & Loops
      if-else
      switch-case
      for loops
      forEach
      while loops
    Functions & Scope
      Function Declarations
      Arrow Functions
      Closures
      Error Handling
    Arrays & Objects
      map()
      filter()
      reduce()
      forEach()
      Object Arrays
    Strings & Regex
      String Methods
      Email Validation
      Pattern Matching
      Text Processing
    DOM Manipulation
      getElementById
      querySelector
      createElement
      innerHTML
      classList
    Form Handling
      Event Listeners
      Real-time Validation
      Input Sanitization
      Error Messages
    Web Storage
      localStorage
      sessionStorage
      JSON Handling
      State Management
    JSON & API Mock
      JSON Structure
      setTimeout
      Promises
      Async/Await
    Timers
      setInterval
      setTimeout
      Timer Management
      Dynamic Updates
```

## Component Interaction Diagram

```mermaid
sequenceDiagram
    participant User
    participant WelcomeForm
    participant QuizEngine
    participant Storage
    participant Timer
    participant Results
    
    User->>WelcomeForm: Enter Name & Email
    WelcomeForm->>WelcomeForm: Validate Input
    WelcomeForm->>Storage: Save User Info
    WelcomeForm->>QuizEngine: Initialize Quiz
    QuizEngine->>Timer: Start Timer
    Timer->>Timer: Update Every Second
    
    loop For Each Question
        QuizEngine->>User: Display Question
        User->>QuizEngine: Select Option
        QuizEngine->>QuizEngine: Save Answer
    end
    
    User->>QuizEngine: Submit Quiz
    QuizEngine->>Timer: Stop Timer
    QuizEngine->>QuizEngine: Calculate Personality
    QuizEngine->>Storage: Save Results
    QuizEngine->>Results: Display Results
    Results->>User: Show Personality Type
    
    User->>QuizEngine: Restart Quiz
    QuizEngine->>Storage: Clear Session
    QuizEngine->>WelcomeForm: Reset Form
```

## Data Flow Diagram

```mermaid
graph LR
    A[User Input] --> B[Form Validation]
    B --> C[Process Data]
    C --> D[Store in Variables]
    D --> E[Update DOM]
    E --> F[Save to Storage]
    F --> G[Calculate Results]
    G --> H[Display Results]
    
    I[Quiz Data] --> J[Questions Array]
    J --> K[Personalities Array]
    K --> L[Scoring Algorithm]
    L --> G
    
    M[Timer] --> N[Update Display]
    N --> O[Track Elapsed Time]
    O --> H
    
    style A fill:#6366f1,stroke:#4f46e5,color:#fff
    style I fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style H fill:#10b981,stroke:#059669,color:#fff
```

