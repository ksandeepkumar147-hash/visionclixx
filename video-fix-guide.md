# Video Background Fix Guide

## Problem: Videos not showing in hero section

### Step 1: Test Your Videos
1. Open `test-video.html` in browser
2. Check if all 3 videos load properly
3. If videos don't load, follow steps below

### Step 2: Check File Structure
```
static website vision clixx/
├── index.html
├── test-video.html
├── videos/
│   ├── video1.mp4
│   ├── video2.mp4
│   └── video3.mp4
```

### Step 3: Video Requirements
- **Format**: MP4 only
- **Size**: Under 50MB each
- **Names**: Exactly `video1.mp4`, `video2.mp4`, `video3.mp4`
- **Location**: Inside `videos/` folder

### Step 4: Browser Console Check
1. Press F12 to open Developer Tools
2. Go to Console tab
3. Refresh page
4. Look for video loading messages or errors

### Step 5: Common Issues & Solutions

**Issue 1: File not found**
- Solution: Check file names and paths
- Make sure videos folder is in same directory as index.html

**Issue 2: Video format not supported**
- Solution: Convert videos to MP4 format
- Use online converters or software like HandBrake

**Issue 3: File size too large**
- Solution: Compress videos
- Recommended: 720p resolution, 10-30 seconds duration

**Issue 4: Browser security restrictions**
- Solution: Run website through local server
- Use Live Server extension in VS Code
- Or use Python: `python -m http.server 8000`

### Step 6: Alternative Solution
If local videos still don't work, use online videos:

Replace video sources in index.html:
```html
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
```

### Step 7: GitHub Pages Deployment
For GitHub Pages, videos will work automatically once uploaded to repository.

## Quick Fix Commands:

**Check if files exist:**
```cmd
dir videos
```

**Test with simple HTTP server:**
```cmd
python -m http.server 8000
```
Then open: http://localhost:8000

## Need Help?
1. Run test-video.html first
2. Check browser console for errors
3. Verify file structure and names
4. Try with smaller video files