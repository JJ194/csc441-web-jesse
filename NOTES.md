## Week 8, Friday
On the pixel phone preview, the header was indeed squashed. The wrap command fixed it. I also
noticed the github link in the footer was squashed up against the text block,
adding the ssame wrap command in css fixed that and dropped it down nicely below the text. I also
went through and fixed a few typos and spaces inbetween rems to make the page
look nicer. 
## Week 9, Wednesday
1. I have the main index landing page, which has some personal and professional info/education. There is a projects page that will have all the CS projects I've done so far. And finally there is a books and movies page for the upcoming winter. Those three pages are a good mix of education and hobbie information to start building out a more professional profile to link to on a resume.
2. If styles wasn't making those changes for all three pages, each page would have to have its own change coded to get the same effect, instead of styles centrally doing it.
3. Besides more minor design changes to make it look better, figuring out how to make it scale on my ultra widescreen monitor at home. It is readable and looks fine and I think it is scaling properly, but there is a lot of wasted space. It might just need more content.  
## Week 9, Friday
1. The default 40rem looked good, but I upped it to 45rem so everything had a little more room when it starts stacking in narrow views. For task 6 I did the second break point for my widescreen monitor, and discovered I had to do a little extra work to make it stretch since at the top of styles in the body it was set to a max width of 42rems. Once I figured out how to make the cards stretch with the second media breapoint it looks pretty good at 3440x1440.
2. I legit could not break it, even took it down to 240x240 and everything still maintainted gaps to click and only still only neeeded to scroll vertically. Nothing spilled horizontially or was missing. It was ugly and couldn't see much without scrolling, but it was there and readable. 
3. Justify is like Word documents, and orients the horizontal axis contents on a line to center, left or right. Align moves the justified items up or down. 
4. It works better on mobile devices, which are usually taller horizontially. Mobile first design choice. 
## Week 10, Wednesday
1. HTML are the underlying bones and muscles that make a website work, CSS is the artistic choices and behaviors applied to HTML, and JS is the central brain that runs it all and reacts to user inputs
2. Defer lets the browser download scripts while running the HTML, without it the page would have to stop and wait and the rendering could be slow or corrupted.
3. CSS is the central stop for styling, and dark mode is applied everywhere it is called. Without the variables and references we would have to code and overwrite the styling for every color.
4. I tried the time for Task 5, and it sort of worked but wasn't displaying in the footer. It was actually displaying the time in the console when I inspected it, since I didn't realize it was defaulting to console.log. Wasn't really an error, it did what it was told to do but seemed like something was broken.
5. How to make lists and sections look better. 