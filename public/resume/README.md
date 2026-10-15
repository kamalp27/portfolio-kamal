# Resume Asset Directory

Place `Kamal_Patil_Resume.pdf` in this directory (`public/resume/`).

When the file is added:
1. Update `src/data/profile.ts`:
   - Set `resume.status: 'Available'`
2. The `ResumeLink` component will automatically switch from the email request fallback to the direct file download.
