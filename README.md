# Keen Keeper

Keen Keeper is a simple app made with Next.js to help you manage your friends and stay connected. You can track when you last contacted someone and see your relationship status easily.


## Live Link: 
## Features 
View a list of friends from public/friends.json
Search friends by name
Open individual friend details page (/friendDetails/[id])
Quick actions: Call, Text, Video
Timeline page with interaction filters
Stats page with charts and summary
Toast messages after actions


# Pages & Routes
/ → Home page (friends list + overview)
/time_line → Timeline of interactions
/stats → Analytics & charts
/friendDetails/[id] → Single friend details

## Tech Stack

Tech Stack
Next.js 16
React 19
Tailwind CSS 4
DaisyUI 5
Lucide React
Recharts
React Toastify
React Spinners

## Project Structure

src/
  app/
    friendDetails/[id]/
    stats/
    time_line/
  Components/
    Friends/
    Header/
    Footer/
    Stats/
    ContactHis/
    TimlineButton/
  Context/
  Hooks/

public/
  friends.json
  images/
  Icons/

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

# Scripts
npm run dev → Start development server
npm run build → Build for production
npm run start → Run production server
npm run lint → Check code quality

## Data Source

- Friend list data is stored locally in `public/friends.json`


## Notes
Uses Next.js App Router (src/app)
Shared layout includes header, footer, and toast
Styling done with Tailwind + DaisyUI

## Improvement Ideas

- Add persistent storage for timeline activity
- Connect the "Add Friend" button to a form flow
- Replace remote details fetch with a shared local/server data source

