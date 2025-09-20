# Portfolio Constants

This directory contains all the extracted data from the portfolio components, organized into separate files for easy customization.

## Files Structure

### `personalInfo.ts`
Contains personal information that appears throughout the portfolio:
- Name, title, email, location
- Bio (short and long versions)
- Profile image path
- Animated phrases for hero section
- Social media links

### `projects.ts`
Contains all project information:
- Featured projects (shown on homepage)
- All projects (shown on projects page)
- Project categories for filtering

### `skills.ts`
Contains technical skills and course information:
- Tech stack with proficiency levels
- Skills with experience levels
- Course highlights
- Soft skills

### `experience.ts`
Contains work experience and education data:
- Work experience with companies, roles, and achievements
- Education details
- Certifications
- Nanodegree information

### `resume.ts`
Contains resume-specific highlights and certifications:
- Professional highlights
- Resume certifications

## How to Customize

1. **Personal Information**: Update `personalInfo.ts` with your details
2. **Projects**: Modify `projects.ts` to add/remove/update your projects
3. **Skills**: Update `skills.ts` with your technical skills and proficiency levels
4. **Experience**: Edit `experience.ts` with your work history and education
5. **Resume**: Customize `resume.ts` for resume-specific content

## Usage

Import the constants in your components:

```typescript
import { personalInfo, featuredProjects, techStack } from '@/constants';
```

## Benefits

- **Centralized Data**: All portfolio data in one place
- **Easy Updates**: Change information without touching component code
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Reusability**: Same data can be used across multiple components
- **Maintainability**: Clean separation of data and presentation logic
