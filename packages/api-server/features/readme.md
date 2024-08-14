# Project Documentation

## Introduction

This document provides a guide to purpose of the feature folder

## Feature Folder

The `feature` folder contains feature-specific components, hooks, and utilities that are used to implement a specific feature of the web app. Features are self-contained units of functionality that can be developed, tested, and deployed independently. Each feature folder contains all the components, hooks, and utilities required to implement a specific feature of the web app. This helps in organizing the codebase based on the features of the web app and makes it easier to maintain and scale the application.
[]: # (end)

### Feature Folder Structure Template

The feature folder should follow the following structure:

```plaintext
feature-name/
├── controllers/ // Controllers handle incoming http requests, passes work off to services, and returns a response.
│   ├── featureController.ts // Controller responsible for handling feature logic
│   ├── index.ts // centralize the exports\
├── services/ // Services handle the business logic of the application, its only job is to handle the logic of the application.
│   ├── featureService.ts // Service responsible for handling feature logic
│   ├── index.ts // centralize the exports
├── models/ // Models are responsible for defining the structure of the data that is passed between the different parts of the application.
│   ├── featureModel.ts // Model responsible for defining feature data structure
│   ├── index.ts // centralize the exports
├── utils/
│   ├── util1.ts
│   ├── util2.ts
│   └── index.ts
└── index.ts
```

### 3. Create a new feature folder

Create a new feature folder named `counter` inside the `src/features` folder. This folder will contain all the components, hooks, and utilities required to implement the counter feature of the web app.
Add an index file named `index.ts` inside the `counter` folder to export the components, hooks, and utilities of the counter feature.