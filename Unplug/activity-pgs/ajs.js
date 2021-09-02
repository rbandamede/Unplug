$(document).ready(function(){
  $(".closeBar").hide();

  $(".menuOpen").click(function(){
    $(".bar").width(250);
    $(".closeBar").show();
  });
  $(".closeBar").click(function(){
    $(".bar").width(0);
    $(".closeBar").hide();
  })

  $(".getQuote").click(function(){
    var randomQuote = Math.floor(Math.random()*(listQuotes.length));
    var printQuote = listQuotes[randomQuote];
    $('h4').text(printQuote);
  })

  // $("button").click(function(){

  // })
});

/*the JS for random quote generator*/
var listQuotes = ["Right now, I feel challenged by ________. I feel supported when ________.", "I have been paying a lot of attention to ________. I would like to pay more attention to ________; I can devote more energy to the better-feeling alternatives by ________.", "What can I do in this moment to get myself some nourishment and self-care?", "I am thankful that I…", "What past challenge has turned out to be a gift in disguise (even if it’s still painful)? Why? What was the silver lining?", "What’s not wrong in my life? Here are three things that I can think of right now:", "What do I want my life to FEEL like?", "How might this stressful experience transform me into a more loving (compassionate, forgiving, patient, helpful, or faithful) person?",'Finish the sentence, “Right now, I am…” Then finish the sentence, “I want to be…”',  "Sit quietly for a few minutes, just breathing and listening to your body, before you start journaling. What is it telling you? Where do you feel strong, healthy, energetic, relaxed? Where do you feel tense, worried, uncomfortable, tired? What is asking for more attention?", "Have a heart-to-heart talk with your inner critic. If she has been extra vocal today, take this opportunity to dismiss her opinions and tell her to hit the road. If he has been telling you all the things you are doing wrong, reply with all the things you are doing right.", "Pick a single positive word that you want to focus on today – such as joy, gratitude, love or courage. Journal about all the ways you have experienced this word lately and all the ways you want to.", "Choose one problem that has been causing you anxiety lately, and ask yourself questions about it, the way a close friend would. Ask supportive and encouraging questions, and answer them with complete honesty. Try looking at the situation from new angles, and be open to possible solutions that come up.", "Journal about a habit or activity you do that improves your mood or stress level without fail. Describe how you transform when you are engaged in this practice. How do you feel? How can you do this more often?", "      Tell a story in which you made a positive difference in someone’s life. How did you change them for the better? How did it change you? What does this reflect about you as a person?", "      Think about how you would spend a day doing only the things that make you feel excited, happy, engaged or fulfilled. Free-write a list of everything you would include in this day, from the time you wake up until you head to bed at night. Reread your list and choose at least one item to incorporate into your schedule today.",  ]
/*Bibliography: https://healingbrave.com/blogs/all/journaling-prompts-for-stress-relief
https://www.createwritenow.com/journal-writing-blog/10-quick-journal-prompts-to-calm-your-mind*/
